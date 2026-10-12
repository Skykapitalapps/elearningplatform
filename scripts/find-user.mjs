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

const emails = process.argv.slice(2).map((e) => e.toLowerCase());
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (emails.length === 0 || !URL || !KEY) {
  console.error("Usage: node scripts/find-user.mjs email1 [email2 ...]  (needs SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)");
  process.exit(1);
}
const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

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
