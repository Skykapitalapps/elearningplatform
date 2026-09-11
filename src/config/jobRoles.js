// ============================================================================
// JOB ROLES — who sees which part of the pathway.
//
// Pathway A (the core modules M1–M7) is the BASELINE: every role takes all
// of it. Pathway B is the six "site practice" readings inside M3 Rulebook
// (doc slugs b1-… to b6-…). B3 and B4 are assigned to ALL personnel — the
// dominant risk is created by drivers and plant operators, not managers —
// so every role below already includes them. Pathway C lists are stored now
// and will gate the C modules automatically once their content is added.
//
// A learner with NO job role assigned (older accounts, demo mode) sees
// everything. Reviewers (role 'manager') and admins are never restricted.
// ============================================================================
import { isSupabaseConfigured } from "../lib/supabase.js";

// B pathway module → the library document that carries it (module m2 "Rulebook").
export const B_DOCS = {
  b1: "b1-land",
  b2: "b2-workers",
  b3: "b3-communities",
  b4: "b4-conduct",
  b5: "b5-pollution",
  b6: "b6-biodiversity",
};

// Micro-module for plant operators: the chance find drill, extracted from B6.
export const CHANCE_FIND_DOC = "b6-chance-find";

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
    // "Per scope of works" in the source matrix — default set below; adjust here
    // if a project's subcontract covers a narrower or wider scope.
    b: ["b2", "b3", "b4", "b5"],
    c: ["c1", "c5"],
    note: "Individual code of conduct signature mandatory",
  },
];

export function jobRoleByKey(key) {
  return JOB_ROLES.find((r) => r.key === key) || null;
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

// Doc slugs this role may open (null = no restriction). Roles that carry the
// full B6 reading don't also get the micro-module; roles flagged `chanceFind`
// get the drill instead.
export function allowedDocSlugs(role) {
  if (!role) return null;
  const set = new Set(role.b.map((k) => B_DOCS[k]));
  if (role.b.includes("b6") || role.chanceFind) set.add(CHANCE_FIND_DOC);
  return set;
}

const B_SLUGS = new Set([...Object.values(B_DOCS), CHANCE_FIND_DOC]);

// Filter a module's library list for one learner. Non-B readings (the module's
// own core documents) are always visible; B readings follow the role; the
// chance-find drill is hidden from anyone who already has the full B6 reading.
export function visibleDocs(docs, profile) {
  const role = pathwayRole(profile);
  const allowed = allowedDocSlugs(role);
  return (docs || []).filter((d) => {
    if (!d.doc || !B_SLUGS.has(d.doc)) return true;
    if (!allowed) return d.doc !== CHANCE_FIND_DOC; // unrestricted: full set, no duplicate drill
    if (d.doc === CHANCE_FIND_DOC) return allowed.has(CHANCE_FIND_DOC) && !allowed.has(B_DOCS.b6);
    return allowed.has(d.doc);
  });
}

// Can this learner open a given doc slug at all?
export function canOpenDoc(slug, profile) {
  if (!B_SLUGS.has(slug)) return true;
  const role = pathwayRole(profile);
  const allowed = allowedDocSlugs(role);
  return !allowed || allowed.has(slug);
}

// Quiz questions carry a `src` tag ("b1"…"b6", or "b6cf" for the chance-find
// drill item). Filter a bank down to this learner's pathway; untagged
// questions are always served.
export function filterQuizBank(questions, profile) {
  const role = pathwayRole(profile);
  if (!role) return questions;
  const allowed = new Set(role.b);
  if (role.b.includes("b6") || role.chanceFind) allowed.add("b6cf");
  return questions.filter((q) => !q.src || allowed.has(q.src));
}
