// ============================================================================
// REPAIR ACCOUNTS — fixes "invisible" users in one pass.
// Scans every auth account and repairs the two failure modes:
//   1. auth account with NO profile row  -> creates the profile
//   2. profile with NO project           -> assigns it to the given project
// Accounts already in a project are listed and left untouched.
//
// Run LOCALLY (same env vars as the other admin scripts):
//   $env:SUPABASE_URL = "https://<project>.supabase.co"
//   $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key>"
//   node scripts/repair-accounts.mjs "Hitech"            (dry run — shows the plan)
//   node scripts/repair-accounts.mjs "Hitech" --confirm  (applies it)
// ============================================================================
import { createClient } from "@supabase/supabase-js";

const [projectName, confirmFlag] = process.argv.slice(2);
const APPLY = confirmFlag === "--confirm";
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!projectName || !URL || !KEY) {
  console.error('Usage: node scripts/repair-accounts.mjs "<project name>" [--confirm]');
  process.exit(1);
}
const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const { data: projects } = await supabase.from("projects").select("id,name");
const project = projects?.find((p) => p.name.toLowerCase() === projectName.toLowerCase());
if (!project) {
  console.error(`Project "${projectName}" not found. Projects: ${projects?.map((p) => p.name).join(", ")}`);
  process.exit(1);
}

const authUsers = [];
for (let page = 1; page <= 4; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 500 });
  if (error) { console.error("auth list failed:", error.message); process.exit(1); }
  authUsers.push(...data.users);
  if (data.users.length < 500) break;
}
const { data: profiles } = await supabase.from("profiles").select("*");
const profById = new Map((profiles ?? []).map((p) => [p.id, p]));
const projName = (id) => projects?.find((p) => p.id === id)?.name ?? "unknown";

let created = 0, assigned = 0, fine = 0;
for (const au of authUsers) {
  const email = au.email ?? au.id;
  const prof = profById.get(au.id);
  if (!prof) {
    console.log(`FIX  ${email} — no profile row -> ${APPLY ? "creating" : "would create"} one in "${project.name}"`);
    created++;
    if (APPLY) {
      const { error } = await supabase.from("profiles").insert({
        id: au.id,
        full_name: au.user_metadata?.full_name ?? email.split("@")[0],
        role: "learner",
        project_id: project.id,
      });
      if (error) console.error(`   !! insert failed: ${error.message}`);
    }
    continue;
  }
  if (!prof.project_id && prof.role !== "admin") {
    console.log(`FIX  ${email} — profile has no project -> ${APPLY ? "assigning" : "would assign"} to "${project.name}"`);
    assigned++;
    if (APPLY) {
      const { error } = await supabase.from("profiles").update({ project_id: project.id }).eq("id", au.id);
      if (error) console.error(`   !! update failed: ${error.message}`);
    }
    continue;
  }
  fine++;
  if (prof.project_id && projName(prof.project_id).toLowerCase() !== project.name.toLowerCase() && prof.role !== "admin") {
    console.log(`note ${email} — already in a DIFFERENT project: "${projName(prof.project_id)}" (left untouched)`);
  }
}

console.log(`\n${authUsers.length} auth accounts · ${fine} already fine · ${created} missing profiles · ${assigned} without a project`);
if (!APPLY && (created || assigned)) console.log(`Dry run only — re-run with --confirm to apply:\n  node scripts/repair-accounts.mjs "${project.name}" --confirm`);
if (APPLY) console.log("Done — refresh the admin panel: everyone should now be in the lists.");
