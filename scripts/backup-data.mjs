// ============================================================================
// DATA BACKUP — save everyone's training records to a file on your machine.
//
// Run this LOCALLY (never deploy it): it uses the Supabase service-role key,
// which must stay on the administrator's machine.
//
//   1. Set the two environment variables (PowerShell):
//        $env:SUPABASE_URL = "https://<project>.supabase.co"
//        $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key from Settings → API>"
//   2. node scripts/backup-data.mjs
//
// Output: backups/backup-YYYY-MM-DD.json with every profile, module
// completion, acknowledgement and sign-in. Run it weekly (or before/after
// big events like the launch) and keep the files somewhere safe — that's
// your restore point if anything ever happens to the database.
// ============================================================================
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL || !KEY) {
  console.error("Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// fetch a whole table in pages of 1000 (works at any user count)
async function all(table) {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase.from(table).select("*").range(from, from + 999);
    if (error) { console.error(`${table}: ${error.message}`); process.exit(1); }
    rows.push(...data);
    if (data.length < 1000) break;
  }
  console.log(`  ${table}: ${rows.length} rows`);
  return rows;
}

console.log("Backing up...");
const backup = {
  taken_at: new Date().toISOString(),
  profiles: await all("profiles"),
  module_progress: await all("module_progress"),
  acknowledgements: await all("acknowledgements"),
  login_events: await all("login_events"),
};

fs.mkdirSync("backups", { recursive: true });
const file = `backups/backup-${backup.taken_at.slice(0, 10)}.json`;
fs.writeFileSync(file, JSON.stringify(backup, null, 1));
console.log(`\nSaved ${file} (${Math.round(fs.statSync(file).size / 1024)} KB). Keep it somewhere safe.`);
