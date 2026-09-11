// ============================================================================
// JOB ROLES — who is assigned which modules of the pathway.
//
// Pathway A (A1–A6) is the BASELINE: every role takes all of it, in order.
// Pathways B and C are assigned per role and unlock together once Pathway A
// is complete (they can be taken in any order). B3 and B4 are assigned to
// ALL personnel — the dominant risk there is created by drivers and plant
// operators, not managers — so every role below includes them.
//
// A learner with NO job role assigned (older accounts, demo mode) sees
// everything. Reviewers (role 'manager') and admins are never restricted.
// ============================================================================
import { isSupabaseConfigured } from "../lib/supabase.js";

const ALL_B = ["b1", "b2", "b3", "b4", "b5", "b6"];
const ALL_C = ["c1", "c2", "c3", "c4", "c5", "c6"];

export const JOB_ROLES = [
  {
    key: "plant-operator",
    label: "Plant operator, driver, labourer",
    b: ["b3", "b4", "b5"],
    chanceFind: true, // chance find micro-module (extract of B6)
    c: [],
  },
  {
    key: "storekeeper-fuel",
    label: "Storekeeper, workshop, fuel handling",
    b: ["b3", "b4", "b5"],
    c: [],
  },
  {
    key: "foreman",
    label: "Team leader, foreman, section supervisor",
    b: ["b2", "b3", "b4", "b5", "b6"],
    c: ["c1", "c3", "c5"],
  },
  {
    key: "hse",
    label: "HSE officer / manager",
    b: ALL_B,
    c: ["c2", "c3", "c5"],
  },
  {
    key: "community-liaison",
    label: "Community liaison officer, social team",
    b: ["b1", "b3", "b4", "b6"],
    c: ["c2", "c4", "c5"],
  },
  {
    key: "hr-recruitment",
    label: "Human resources & recruitment",
    b: ["b2", "b3", "b4"],
    c: ["c1", "c5"],
  },
  {
    key: "procurement",
    label: "Procurement & subcontracting",
    b: ["b2", "b3", "b4", "b5"],
    c: ["c1", "c5"],
  },
  {
    key: "survey-design",
    label: "Survey, design & quantity surveying",
    b: ["b1", "b3", "b4", "b5", "b6"],
    c: ["c5"],
  },
  {
    key: "site-manager",
    label: "Site manager / section manager",
    b: ALL_B,
    c: ALL_C,
  },
  {
    key: "project-director",
    label: "Project director, commercial manager",
    b: ["b1", "b2", "b3", "b4"],
    c: ALL_C,
  },
  {
    key: "subcontractor-supervision",
    label: "Subcontractor supervision",
    // "Per scope of works" in the source matrix — default set below; adjust
    // here if a project's subcontract covers a narrower or wider scope.
    b: ["b2", "b3", "b4", "b5"],
    c: ["c1", "c5"],
    note: "Individual code of conduct signature mandatory",
  },
];

export function jobRoleByKey(key) {
  return JOB_ROLES.find((r) => r.key === key) || null;
}

// Number of modules in Pathway A — the baseline everyone takes.
export const PATHWAY_A_COUNT = 6;
const ALL_MODULES_COUNT = PATHWAY_A_COUNT + ALL_B.length + ALL_C.length; // 18

// How many modules this job role is assigned in total (certificate threshold).
// Unknown / unassigned role: the full programme.
export function assignedTotal(jobRoleKey) {
  const role = jobRoleByKey(jobRoleKey);
  if (!role) return ALL_MODULES_COUNT;
  return PATHWAY_A_COUNT + role.b.length + role.c.length;
}

// The job role that restricts what this signed-in person sees.
// Staff (admin) and reviewers (manager) are never restricted; in demo mode a
// localStorage override ("skk-demo-jobrole") lets a role be previewed locally.
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
  return jobRoleByKey(key);
}

// Is this module part of the learner's assigned pathway?
// Pathway A modules always are; B and C follow the role's lists.
export function moduleAssigned(module, profile) {
  const pw = module.pathway || "A";
  if (pw === "A") return true;
  const role = pathwayRole(profile);
  if (!role) return true; // no role on record: full programme
  return [...role.b, ...role.c].includes(module.id);
}

// Reference documents that belong to a role-assigned module. A doc not listed
// here (core course readings, the reference library, the chance find drill)
// is open to everyone who has reached it.
const GATED_DOCS = {
  "b1-land": "b1",
  "b2-workers": "b2",
  "b3-communities": "b3",
  "b4-conduct": "b4",
  "b5-pollution": "b5",
  "b6-biodiversity": "b6",
  "c1-instructing": "c1",
  "c2-iesc": "c2",
  "c3-incident": "c3",
  "c4-grievance": "c4",
  "c5-records": "c5",
};

export function canOpenDoc(slug, profile) {
  const mod = GATED_DOCS[slug];
  if (!mod) return true;
  const role = pathwayRole(profile);
  if (!role) return true;
  return [...role.b, ...role.c].includes(mod);
}
