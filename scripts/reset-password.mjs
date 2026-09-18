// ============================================================================
// PASSWORD RESET — set a new password for one learner, no emails involved.
//
// Run this LOCALLY (never deploy it): it uses the Supabase service-role key,
// which must stay on the administrator's machine.
//
//   1. Set the two environment variables (PowerShell):
//        $env:SUPABASE_URL = "https://<project>.supabase.co"
//        $env:SUPABASE_SERVICE_ROLE_KEY = "<service_role key from Settings → API>"
//   2. node scripts/reset-password.mjs someone@company.com
//      (or pass the new password yourself:)
//      node scripts/reset-password.mjs someone@company.com "TheirNewPass42!"
//
// The script prints the new password once — hand it to the person privately.
// Their progress and certificates are untouched; only the password changes.
// ============================================================================
import { createClient } from "@supabase/supabase-js";
import crypto from "node:crypto";

const [email, given] = process.argv.slice(2);
const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!email || !URL || !KEY) {
  console.error('Usage: node scripts/reset-password.mjs someone@company.com ["NewPassword42!"]');
  console.error("Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment.");
  process.exit(1);
}

const genPassword = () => {
  // 12 chars, unambiguous alphabet, always a digit and a symbol
  const abc = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
  let p = Array.from(crypto.randomBytes(9)).map((b) => abc[b % abc.length]).join("");
  return p + (crypto.randomInt(10, 99) + "!");
};

const password = given ?? genPassword();
if (password.length < 10 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
  console.error("Password must be 10+ characters with letters and numbers.");
  process.exit(1);
}

const supabase = createClient(URL, KEY, { auth: { autoRefreshToken: false, persistSession: false } });

// find the account by email (paged: works even with 1000+ users)
let user = null;
for (let page = 1; !user; page++) {
  const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 });
  if (error) { console.error("Lookup failed: " + error.message); process.exit(1); }
  user = data.users.find((u) => (u.email || "").toLowerCase() === email.toLowerCase());
  if (data.users.length < 200) break;
}
if (!user) {
  console.error(`No account found for ${email}.`);
  process.exit(1);
}

const { error } = await supabase.auth.admin.updateUserById(user.id, { password });
if (error) { console.error("Reset failed: " + error.message); process.exit(1); }

console.log(`Password reset for ${email}`);
console.log(`New password: ${password}`);
console.log("Hand it to the person privately, then delete it from your clipboard/notes.");
