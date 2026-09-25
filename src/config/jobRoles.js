// ============================================================================
// PATHWAY ROLES — who is assigned which modules of Our Sustainability Pathway.
//
// The role matrix is PER CLIENT and lives in clients.js (pathwayRoles on the
// active client's entry): the 12 trades of the "Where you come in" screen,
// each mapped to its role modules (r1 Community, r2 Health & Safety,
// r3 Environment, r4 Security & conduct).
//
// Everyone takes the welcome + the five core modules (S1–S5), in order.
// Role modules unlock together once the core is complete.
//
// A learner with NO role on record (older accounts, demo mode) sees the full
// programme. Reviewers (role 'manager') and admins are never restricted.
// The old 18-module reference course is now the open "Go further" library —
// it is not assigned, not gated and not counted in anyone's progress.
// ============================================================================
import { isSupabaseConfigured } from "../lib/supabase.js";
import { client } from "./clients.js";
import { OSP_MODULES } from "../data/osp.js";

export const PATHWAY_ROLES = client.pathwayRoles ?? [];

// Kept for the admin summary of the legacy reference matrix.
export const JOB_ROLES = client.jobRoles ?? [];

export function pathwayRoleByKey(key) {
  return PATHWAY_ROLES.find((r) => r.key === key) || null;
}
// Back-compat alias used by older imports.
export const jobRoleByKey = pathwayRoleByKey;

const BASELINE_COUNT = OSP_MODULES.filter((m) => m.block !== "role").length; // welcome + core
const ALL_MODULES_COUNT = OSP_MODULES.length;

// How many modules this trade is assigned in total (certificate threshold).
// Unknown / unassigned role: the full programme.
export function assignedTotal(roleKey) {
  const role = pathwayRoleByKey(roleKey);
  if (!role) return ALL_MODULES_COUNT;
  return BASELINE_COUNT + role.modules.length;
}

// The trade that restricts what this signed-in person sees.
// Staff (admin) and reviewers (manager) are never restricted; in demo mode a
// localStorage override ("skk-demo-jobrole") lets a trade be previewed locally.
export function pathwayRole(profile) {
  if (profile?.role === "admin" || profile?.role === "manager") return null;
  const key =
    profile?.job_role ||
    (!isSupabaseConfigured
      ? (() => {
          try {
            return localStorage.getItem("skk-demo-jobrole");
          } catch {
            return null;
          }
        })()
      : null);
  return pathwayRoleByKey(key);
}

// Is this pathway module part of the learner's assignment?
// Welcome and core always are; role modules follow the trade's list.
export function moduleAssigned(module, profile) {
  if (module.block !== "role") return true;
  const role = pathwayRole(profile);
  if (!role) return true; // no trade on record: full programme
  return role.modules.includes(module.id);
}

// The library ("Go further") is open reading for everyone; nothing is gated
// on a document any more.
export function canOpenDoc() {
  return true;
}
