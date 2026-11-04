// ============================================================================
// WHERE IS THIS ACCOUNT? — diagnostic for "missing" users.
// For each email passed, prints: auth account? profile? which project?
//
// Run LOCALLY (same env vars as the other admin scripts):
//   $env:SUPABASE_URL = "https://<project>.supabase.co"
//   $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key>"
//   node scripts/find-user.mjs email1@x.com email2@x.com ...
// ============================================================================
import { createClient } from "@supabase/supabase-js";

const args = process.argv.slice(2);
const NAME_MODE = args[0] === "--name";
const emails = (NAME_MODE ? [] : args).map((e) => e.toLowerCase());
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if ((!NAME_MODE && emails.length === 0) || (NAME_MODE && !args[1]) || !URL || !KEY) {
  console.error("Usage: node scripts/find-user.mjs email1 [email2 ...]   OR   node scripts/find-user.mjs --name <part of the name>");
  process.exit(1);
}
const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// --name mode: search profiles by display name, print each match's EMAIL
if (NAME_MODE) {
  const q = args.slice(1).join(" ");
  const { data: projectsN } = await supabase.from("projects").select("id,name");
  const { data: hits, error } = await supabase.from("profiles").select("*").ilike("full_name", `%${q}%`);
  if (error) { console.error(error.message); process.exit(1); }
  if (!hits?.length) { console.log(`No profile name contains "${q}".`); process.exit(0); }
  const authAll = [];
  for (let page = 1; page <= 4; page++) {
    const { data } = await supabase.auth.admin.listUsers({ page, perPage: 500 });
    authAll.push(...(data?.users ?? []));
    if ((data?.users ?? []).length < 500) break;
  }
  for (const h of hits) {
    const au = authAll.find((u) => u.id === h.id);
    const pn = projectsN?.find((p) => p.id === h.project_id)?.name ?? "NO PROJECT";
    console.log(`✓ "${h.full_name}" — email: ${au?.email ?? "?"} · project: ${pn} · dept: ${h.department ?? "—"} · site: ${h.site ?? "—"}`);
  }
  process.exit(0);
}

const { data: projects } = await supabase.from("projects").select("id,name");
const projName = (id) => (id ? projects?.find((p) => p.id === id)?.name ?? ("unknown project " + id.slice(0, 8)) : "NO PROJECT");

// page through all auth users once (up to 2000)
const authUsers = [];
for (let page = 1; page <= 4; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 500 });
  if (error) { console.error("auth list failed:", error.message); process.exit(1); }
  authUsers.push(...data.users);
  if (data.users.length < 500) break;
}

for (const email of emails) {
  const au = authUsers.find((u) => (u.email || "").toLowerCase() === email);
  if (!au) { console.log(`✗ ${email} — NO auth account (it was never created, or a typo in the email)`); continue; }
  const { data: prof } = await supabase.from("profiles").select("*").eq("id", au.id).maybeSingle();
  if (!prof) {
    console.log(`⚠ ${email} — auth account exists (created ${au.created_at?.slice(0, 16)}) but NO PROFILE ROW — invisible everywhere.`);
    continue;
  }
  console.log(
    `✓ ${email} — "${prof.full_name ?? "no name"}" · project: ${projName(prof.project_id)} · role: ${prof.role ?? "learner"} · dept: ${prof.department ?? "—"} · site: ${prof.site ?? "—"} · created ${au.created_at?.slice(0, 16)}`
  );
}
