// ============================================================================
// PATHWAY ASSIGNMENT — everyone follows the SAME path.
//
// Job-role-specific assignment was removed (Sept 2026): every learner takes
// the welcome block, the five core modules (S1–S5) in order, then the four
// role modules — the full programme, identical for all trades.
//
// The old 18-module reference course is the open "Go further" library —
// it is not assigned, not gated and not counted in anyone's progress.
// ============================================================================
import { OSP_MODULES } from "../data/osp.js";

// Total modules in everyone's pathway (certificate threshold).
export function assignedTotal() {
  return OSP_MODULES.length;
}

// Every pathway module is part of every learner's assignment.
export function moduleAssigned() {
  return true;
}

// The library ("Go further") is open reading for everyone; nothing is gated
// on a document any more.
export function canOpenDoc() {
  return true;
}

// Every signature the pathway requires: the policies attached to the
// modules, plus the final commitment declaration.
export const COMMITMENT_DOC_ID = "hitech-commitment";
export const REQUIRED_SIGNATURES = [
  ...new Set(OSP_MODULES.flatMap((m) => m.policies || [])),
  COMMITMENT_DOC_ID,
];
