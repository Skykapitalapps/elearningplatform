// ============================================================================
// RENAME A LEARNER + reissue their certificate under the corrected name.
//   - updates profiles.full_name
//   - with --also-signatures: updates the signed name on their policy
//     acknowledgements too (otherwise the signature records keep the old name)
//   - if the pathway is complete, writes the certificate PDF to your Desktop
//
// Run LOCALLY (same env vars as the other admin scripts):
//   node scripts/rename-user.mjs user@email.com "Correct Name" [--also-signatures]
// ============================================================================
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const [email, newName, flag] = process.argv.slice(2);
const ALSO_SIGS = flag === "--also-signatures";
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!email || !newName || !URL || !KEY) {
  console.error('Usage: node scripts/rename-user.mjs user@email.com "Correct Name" [--also-signatures]');
  process.exit(1);
}
const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// find the auth account by email
let au = null;
for (let page = 1; page <= 4 && !au; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 500 });
  if (error) { console.error("auth list failed:", error.message); process.exit(1); }
  au = data.users.find((u) => (u.email || "").toLowerCase() === email.toLowerCase()) ?? null;
  if (data.users.length < 500) break;
}
if (!au) { console.error(`✗ ${email} — no account found.`); process.exit(1); }

const { data: prof } = await supabase.from("profiles").select("*").eq("id", au.id).maybeSingle();
if (!prof) { console.error(`✗ ${email} — no profile row (run repair-accounts.mjs first).`); process.exit(1); }

console.log(`Renaming "${prof.full_name}" -> "${newName}" (${email})`);
const { error: upErr } = await supabase.from("profiles").update({ full_name: newName }).eq("id", au.id);
if (upErr) { console.error("rename failed:", upErr.message); process.exit(1); }
console.log("✓ profile name updated — the platform and admin lists now show the new name.");

if (ALSO_SIGS) {
  const { error: sigErr, count } = await supabase
    .from("acknowledgements")
    .update({ signed_name: newName }, { count: "exact" })
    .eq("user_id", au.id);
  if (sigErr) console.error("signatures update failed:", sigErr.message);
  else console.log(`✓ signed name updated on ${count ?? "their"} acknowledgement record(s).`);
}

// certificate: completion status straight from the database
const { OSP_MODULES } = await import("../src/data/osp.js");
const { REQUIRED_SIGNATURES } = await import("../src/config/jobRoles.js");
const { data: mp } = await supabase.from("module_progress").select("*").eq("user_id", au.id);
const { data: acks } = await supabase.from("acknowledgements").select("doc_id").eq("user_id", au.id);
const doneIds = new Set((mp ?? []).filter((r) => r.status === "completed").map((r) => r.module_id));
const modulesDone = OSP_MODULES.filter((m) => doneIds.has(m.id)).length;
const ackIds = new Set((acks ?? []).map((a) => a.doc_id));
const sigsDone = REQUIRED_SIGNATURES.filter((s) => ackIds.has(s)).length;
console.log(`Progress: ${modulesDone}/${OSP_MODULES.length} modules · ${sigsDone}/${REQUIRED_SIGNATURES.length} signatures`);

if (modulesDone < OSP_MODULES.length || sigsDone < REQUIRED_SIGNATURES.length) {
  console.log("Pathway not complete yet — no certificate issued (the name is fixed; the certificate will carry it once they finish).");
  process.exit(0);
}

const { buildCertificatePdf } = await import("../src/lib/certificate.js");
const { course } = await import("../src/data.js");
const { client } = await import("../src/config/clients.js");
const date = (mp ?? []).map((r) => (r.updated_at || "").slice(0, 10)).filter(Boolean).sort().slice(-1)[0] ?? new Date().toISOString().slice(0, 10);
const certNo = "OSP-" + au.id.replace(/-/g, "").slice(0, 10).toUpperCase();
const doc = await buildCertificatePdf({
  name: newName,
  certNo,
  date,
  courseTitle: course.title,
  clientShort: client.clientShort,
  totalModules: OSP_MODULES.length,
});
const out = path.join(os.homedir(), "Desktop", `Skykapital-Certificate-${certNo}.pdf`);
fs.writeFileSync(out, Buffer.from(doc.output("arraybuffer")));
console.log(`✓ certificate written: ${out}  (${certNo}, completed ${date})`);
