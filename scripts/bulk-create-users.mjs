// ============================================================================
// BULK ACCOUNT CREATION — create hundreds of learner accounts from a CSV.
//
// Run this LOCALLY (never deploy it): it uses the Supabase service-role key,
// which must stay on the administrator's machine.
//
//   1. Prepare users.csv with a header row:  full_name,email,job_role[,password]
//      - job_role must be one of the platform's role keys (see ROLE_KEYS below)
//      - password is optional: a strong one is generated when omitted
//   2. Set the two environment variables (PowerShell):
//        $env:SUPABASE_URL = "https://<project>.supabase.co"
//        $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key from Settings → API>"
//   3. node scripts/bulk-create-users.mjs users.csv
//
// Output: credentials-out.csv (email + password per created account) — hand
// each person their line, then delete the file. Already-existing emails are
// skipped and reported, so the script is safe to re-run.
// ============================================================================
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import crypto from "node:crypto";

const ROLE_KEYS = [
  "plant-operator", "storekeeper-fuel", "foreman", "hse", "community-liaison",
  "hr-recruitment", "procurement", "survey-design", "site-manager",
  "project-director", "subcontractor-supervision",
];

const [csvPath] = process.argv.slice(2);
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!csvPath || !URL || !KEY) {
  console.error("Usage: node scripts/bulk-create-users.mjs users.csv");
  console.error("Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// tiny CSV parser (handles quoted fields with commas)
function parseCsv(text) {
  const rows = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const cells = [];
    let cur = "", inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQ) {
        if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
        else if (ch === '"') inQ = false;
        else cur += ch;
      } else if (ch === '"') inQ = true;
      else if (ch === ",") { cells.push(cur); cur = ""; }
      else cur += ch;
    }
    cells.push(cur);
    rows.push(cells.map((c) => c.trim()));
  }
  return rows;
}

const genPassword = () => {
  // 12 chars, unambiguous alphabet, always a digit and a symbol
  const abc = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
  let p = Array.from(crypto.randomBytes(9)).map((b) => abc[b % abc.length]).join("");
  return p + (crypto.randomInt(10, 99) + "!");
};

const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
const header = rows.shift().map((h) => h.toLowerCase().replace(/\s+/g, "_"));
const col = (name) => header.indexOf(name);
if (col("email") < 0 || col("full_name") < 0 || col("job_role") < 0) {
  console.error("CSV needs the columns: full_name, email, job_role (and optionally password).");
  process.exit(1);
}

// validate before touching anything
const problems = [];
const users = rows.map((r, i) => {
  const u = {
    full_name: r[col("full_name")],
    email: (r[col("email")] || "").toLowerCase(),
    job_role: r[col("job_role")],
    password: col("password") >= 0 && r[col("password")] ? r[col("password")] : genPassword(),
    line: i + 2,
  };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(u.email)) problems.push(`line ${u.line}: bad email "${u.email}"`);
  if (!ROLE_KEYS.includes(u.job_role)) problems.push(`line ${u.line}: unknown job_role "${u.job_role}"`);
  if (!u.full_name) problems.push(`line ${u.line}: missing full_name`);
  return u;
});
const dupes = users.map((u) => u.email).filter((e, i, a) => a.indexOf(e) !== i);
dupes.forEach((e) => problems.push(`duplicate email in file: ${e}`));
if (problems.length) {
  console.error(`\n${problems.length} problem(s) — nothing was created:\n` + problems.join("\n"));
  console.error("\nValid job_role keys:\n  " + ROLE_KEYS.join("\n  "));
  process.exit(1);
}

console.log(`Creating ${users.length} accounts...`);
const out = [["email", "password", "job_role", "status"]];
let ok = 0, skipped = 0, failed = 0;
for (const u of users) {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: u.email,
      password: u.password,
      email_confirm: true,
      user_metadata: { full_name: u.full_name },
    });
    if (error) {
      if (/already/i.test(error.message)) {
        skipped++;
        out.push([u.email, "", u.job_role, "already exists — skipped"]);
        console.log(`  ~ ${u.email} already exists, skipped`);
        continue;
      }
      throw error;
    }
    // the signup hook created the profile row; set name + role directly
    const { error: pErr } = await supabase
      .from("profiles")
      .update({ full_name: u.full_name, job_role: u.job_role })
      .eq("id", data.user.id);
    if (pErr) throw pErr;
    ok++;
    out.push([u.email, u.password, u.job_role, "created"]);
    console.log(`  + ${u.email} (${u.job_role})`);
    // stay well under the auth admin rate limit
    await new Promise((r) => setTimeout(r, 150));
  } catch (e) {
    failed++;
    out.push([u.email, "", u.job_role, "FAILED: " + e.message]);
    console.error(`  ! ${u.email} FAILED: ${e.message}`);
  }
}

fs.writeFileSync(
  "credentials-out.csv",
  out.map((r) => r.map((c) => (/[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c)).join(",")).join("\n")
);
console.log(`\nDone: ${ok} created, ${skipped} skipped, ${failed} failed.`);
console.log("Credentials written to credentials-out.csv — distribute each line to its person, then DELETE the file.");
