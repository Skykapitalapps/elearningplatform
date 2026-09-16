// ============================================================================
// PLAIN-WORDS GLOSSARY — the jargon a newcomer meets across the programme,
// each term explained the way you'd say it to a colleague at the gate.
//
// glossaryFor(module) scans a module's lesson text and returns the terms that
// actually appear in it (the module's own authored glossary entries first).
// Used by the lesson's "Jargon buster" chips, the quiz intro, and the
// downloadable study guide — so nobody has to already know what a PS is.
// ============================================================================

export const GLOBAL_GLOSSARY = [
  { term: "PS1", cat: "standards", re: /\bPS ?1\b/, plain: "Performance Standard 1 — the master rule: know your project's risks and run a system that manages them." },
  { term: "PS2", cat: "standards", re: /\bPS ?2\b/, plain: "Performance Standard 2 — workers: fair treatment, pay, contracts, no forced or child labour, a way to complain safely." },
  { term: "PS3", cat: "standards", re: /\bPS ?3\b/, plain: "Performance Standard 3 — pollution: dust, water, fuel, waste. Don't contaminate, use resources efficiently." },
  { term: "PS4", cat: "standards", re: /\bPS ?4\b/, plain: "Performance Standard 4 — community health and safety: your trucks, your pits, your security guards must not hurt the neighbours." },
  { term: "PS5", cat: "standards", re: /\bPS ?5\b/, plain: "Performance Standard 5 — land: when the project takes land or blocks access to it, people are compensated and helped BEFORE works enter." },
  { term: "PS6", cat: "standards", re: /\bPS ?6\b/, plain: "Performance Standard 6 — nature: habitats, protected areas and species. Avoid first, minimise, restore." },
  { term: "PS7", cat: "standards", re: /\bPS ?7\b/, plain: "Performance Standard 7 — Indigenous Peoples: extra protections where projects affect them." },
  { term: "PS8", cat: "standards", re: /\bPS ?8\b/, plain: "Performance Standard 8 — cultural heritage: graves, shrines, artefacts. If you find something, stop and follow the chance find procedure." },
  { term: "Performance Standards", cat: "standards", re: /Performance Standards?\b/, plain: "The IFC's eight rules (PS1–PS8) that lender-financed projects must follow — the international rulebook this whole course is built on." },
  { term: "ESAP", cat: "finance", re: /\bESAP\b/, plain: "Environmental & Social Action Plan — the project's to-do list agreed with the lender: each gap found, who fixes it, by when. Miss a deadline and the bank notices." },
  { term: "ESMS", cat: "system", re: /\bESMS\b/, plain: "Environmental & Social Management System — the set of plans, procedures and people that turn the rules into daily site routine." },
  { term: "ESIA", cat: "system", re: /\bESIA\b/, plain: "Environmental & Social Impact Assessment — the big study done before works start: what the project will affect, and how that will be managed." },
  { term: "IESC", cat: "finance", re: /\bIESC\b/, plain: "Independent Environmental & Social Consultant — the lender's inspector. Visits the site, checks the evidence, reports straight to the bank." },
  { term: "EP4", cat: "standards", re: /\bEP ?4\b|Equator Principles/, plain: "Equator Principles (4th edition) — the agreement by which banks apply the IFC rules to the projects they finance." },
  { term: "EHS Guidelines", cat: "standards", re: /\bEHS\b/, plain: "Environment, Health & Safety Guidelines — the World Bank's technical numbers: noise limits, water quality, dust levels. Where 'do no harm' becomes measurable." },
  { term: "KPI", cat: "system", re: /\bKPIs?\b/, plain: "Key Performance Indicator — a number reported monthly (incidents, grievances, training hours) that shows whether the system works." },
  { term: "VHSE", cat: "system", re: /\bVHSE\b/, plain: "The daily site form where safety and environmental observations are first recorded — the raw material of every KPI." },
  { term: "Grievance mechanism", cat: "system", re: /grievance/i, plain: "The formal channel for complaints — from workers or the community — with deadlines to acknowledge, investigate and answer. Free, safe, no retaliation." },
  { term: "Cut-off date", cat: "land", re: /cut-?off date/i, plain: "The census date for land compensation: people present before it are eligible; newcomers after it are not. Announced publicly, with a window to contest." },
  { term: "Chance find", cat: "land", re: /chance find/i, plain: "Anything unexpected uncovered by works — graves, ruins, artefacts. The rule: stop work, protect the spot, report. Never dig on." },
  { term: "Covenant", cat: "finance", re: /\bcovenants?\b/i, plain: "A promise written into the loan contract. Breaking an E&S covenant has the same weight as missing a payment." },
  { term: "Disbursement", cat: "finance", re: /\bdisbursements?\b|\bdrawdowns?\b/i, plain: "A payment of loan money to the project. Lenders can hold it back if E&S conditions aren't met — that's why this training matters to cash flow." },
  { term: "Lender / DFI", cat: "finance", re: /\bDFIs?\b|\blenders?\b/i, plain: "The bank or development finance institution funding the project. Their money comes with the E&S rules attached." },
  { term: "RAP", cat: "land", re: /\bRAP\b/, plain: "Resettlement Action Plan — the document that organises land compensation: who is affected, what they receive, when." },
  { term: "Replacement cost", cat: "land", re: /replacement cost/i, plain: "Compensation valued at what it costs to actually replace the asset today — no deduction for age or wear." },
  { term: "ILO", cat: "standards", re: /\bILO\b/, plain: "International Labour Organization — the UN body whose core conventions set the floor for workers' rights worldwide." },
  { term: "Borrow pit", cat: "land", re: /borrow pits?/i, plain: "A hole dug to take sand, gravel or fill for the works. Small hole, big rules: land, water, safety and closure all apply." },
  { term: "Stakeholder engagement", cat: "system", re: /stakeholder/i, plain: "Talking WITH the people the project affects — informing, listening and answering — not just notifying them." },
  { term: "FPIC", cat: "standards", re: /FPIC/, plain: "Free, Prior and Informed Consent — the agreement PS7 requires from Indigenous Peoples before a project affects them: no pressure, before the decision, with full information." },
  { term: "Mitigation hierarchy", cat: "standards", re: /mitigation hierarchy|avoidance/i, plain: "The fixed order for dealing with any impact: 1 AVOID it, 2 MINIMISE it, 3 RESTORE what was affected, 4 COMPENSATE for what remains. You must show you tried each step before moving to the next." },
  { term: "Hierarchy of controls", cat: "system", re: /hierarchy of controls/i, plain: "The safety ladder: ELIMINATE the danger, ENGINEER it away, CONTROL it with rules and permits — and only then PPE. Equipment on the worker is the last line of defence, never the plan." },
  { term: "Survivor-centred", cat: "system", re: /survivor-?cent(?:red|ered)/i, plain: "In harassment and abuse cases: the person harmed decides what happens next — their safety and dignity come before establishing the facts. The investigation still happens, on their terms." },
];

// The terms present in this module's lesson (authored glossary first, then
// auto-detected from the text, deduplicated).
export function glossaryFor(module) {
  const authored = module.glossary ?? [];
  const seen = new Set(authored.map((g) => g.term.toLowerCase()));
  const text = [
    module.summary ?? "",
    ...(module.lesson ?? []).flatMap((s) => [
      s.heading ?? "",
      s.body ?? "",
      s.example ?? "",
      ...(s.points ?? []),
    ]),
  ].join(" \n ");
  const detected = GLOBAL_GLOSSARY.filter(
    (g) => !seen.has(g.term.toLowerCase()) && g.re.test(text)
  ).map(({ term, plain }) => ({ term, plain }));
  return [...authored, ...detected];
}

// Category labels for the glossary page, in display order.
export const GLOSSARY_CATS = [
  { key: "standards", label: "The Standards & the rules" },
  { key: "finance", label: "Money & the lender" },
  { key: "system", label: "The system on site" },
  { key: "land", label: "Land, people & heritage" },
];

// Where each term appears: { term -> [module codes] }.
export function termUsage(modules) {
  const usage = {};
  for (const m of modules) {
    for (const g of glossaryFor(m)) {
      (usage[g.term] = usage[g.term] ?? []).push(m.code);
    }
  }
  return usage;
}

// The glossary terms present in an arbitrary piece of text (e.g. one quiz
// question). Same tap-chips as the lessons, next to where the jargon appears.
export function glossaryForText(text) {
  return GLOBAL_GLOSSARY.filter((g) => g.re.test(text)).map(({ term, plain }) => ({ term, plain }));
}
