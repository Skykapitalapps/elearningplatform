// ============================================================================
// ACCOUNT DELETION — permanently delete a learner account, without opening
// the Supabase dashboard.
//
// Run this LOCALLY (never deploy it): it uses the Supabase service-role key,
// which must stay on the administrator's machine. The in-app admin console
// deliberately has no delete button — the anon key cannot delete auth
// accounts, and that is a good thing.
//
//   1. Set the two environment variables (PowerShell):
//        $env:SUPABASE_URL = "https://<project>.supabase.co"
//        $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key from Settings → API>"
//   2. node scripts/delete-user.mjs someone@company.com
//
// PERMANENT: removes the auth account, profile, module progress and
// acknowledgements. The script shows what it found and asks --confirm:
//   node scripts/delete-user.mjs someone@company.com --confirm
// ============================================================================
import { createClient } from "@supabase/supabase-js";

const [email, flag] = process.argv.slice(2);
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!email || !URL || !KEY) {
  console.error("Usage: node scripts/delete-user.mjs someone@company.com [--confirm]");
  console.error("Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// find the account by email (paged: works at any user count)
let user = null;
for (let page = 1; !user; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 });
  if (error) { console.error("Lookup failed: " + error.message); process.exit(1); }
  user = data.users.find((u) => (u.email || "").toLowerCase() === email.toLowerCase());
  if (data.users.length < 200) break;
}
if (!user) { console.error(`No account found for ${email}.`); process.exit(1); }

const { data: profile } = await supabase.from("profiles").select("full_name, role, job_role").eq("id", user.id).maybeSingle();
const { count: progressCount } = await supabase.from("module_progress").select("*", { count: "exact", head: true }).eq("user_id", user.id);
console.log(`Account:  ${email}`);
console.log(`Name:     ${profile?.full_name ?? "—"} · role ${profile?.role ?? "—"} · trade ${profile?.job_role ?? "—"}`);
console.log(`Progress: ${progressCount ?? 0} module completion record(s)`);

if (flag !== "--confirm") {
  console.log("\nDry run — nothing deleted. Re-run with --confirm to delete PERMANENTLY:");
  console.log(`  node scripts/delete-user.mjs ${email} --confirm`);
  process.exit(0);
}

// child rows first, then the auth account (cascade safety across schemas)
await supabase.from("module_progress").delete().eq("user_id", user.id);
await supabase.from("acknowledgements").delete().eq("user_id", user.id);
await supabase.from("login_events").delete().eq("user_id", user.id);
await supabase.from("profiles").delete().eq("id", user.id);
const { error } = await supabase.auth.admin.deleteUser(user.id);
if (error) { console.error("Auth deletion failed: " + error.message); process.exit(1); }
console.log(`\nDeleted ${email} and all their records. This cannot be undone.`);
