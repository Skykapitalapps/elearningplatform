// ============================================================================
// WHITE-LABEL CLIENT CONFIG
// One entry per client. The active client is chosen AT BUILD TIME via the
// VITE_CLIENT env var (defaults to "hitech"). To launch the academy for a new
// client: add an entry here, then follow CLIENTS.md (new Supabase project +
// new Vercel project with VITE_CLIENT set). Same codebase, parallel platforms.
//
// Each entry carries EVERYTHING that is client-specific:
//   - naming & branding (clientShort, clientLegal, course title/subtitle)
//   - the signed Code of Conduct (ref, owner, PDF in public/docs/)
//   - jobRoles: the client's role matrix — who is assigned which B/C modules
//     (Pathway A is always the baseline for everyone). Omit or leave empty
//     and every learner sees the full programme.
//   - images: hero (login backdrop + course banner) and per-module cover
//     overrides. Photos live in public/images/ prefixed with the client key
//     (e.g. hitech-paving.webp). Anything not overridden falls back to the
//     neutral stock set in data.js.
// The Admin panel shows a read-only summary of the active client's setup.
// ============================================================================

const CLIENTS = {
  hitech: {
    key: "hitech",
    // How the client is named across the platform
    clientShort: "HITECH",
    clientLegal: "HITECH Construction Company Limited — Builders & Civil Engineers",
    center: "Skykapital ESG Learning Center",
    series: "ESG Foundation Series",
    courseTitle: "Creating Our Sustainability Pathway",
    courseSubtitle: "Embrace the journey",
    // The client's signed Code of Conduct (PDF placed in public/docs/)
    codeOfConduct: {
      ref: "IMS-HSE-Pol-014 · Version 1 · April 2025",
      owner: "Approved by Dany Abboud, Managing Director",
      pdf: "/docs/hitech-code-of-conduct.pdf",
    },
    // HITECH's own site photography (public/images/hitech-*.webp)
    images: {
      hero: "/images/hitech-paving.webp", // login backdrop + course banner
      modules: {
        m1: "/images/hitech-pour.webp", // slab pour, the whole crew in PPE
        std: "/images/hitech-dozer.webp", // standards applied at the workface
        m6: "/images/hitech-skyline.webp", // the whole project against the skyline
        b1: "/images/hitech-embankment.webp", // works advancing across community land
        b3: "/images/hitech-haul.webp", // the haulage fleet on the alignment
        b5: "/images/hitech-borrowpit.webp", // a live borrow pit
        b6: "/images/hitech-fill.webp", // fill advancing into wetland habitat
      },
    },
    // HITECH's role matrix (from the course author's configuration workbook).
    // Pathway A (A1–A6) is the baseline for every role. B3 and B4 are
    // assigned to ALL personnel. `chanceFind` marks roles that take the
    // chance-find micro-module (extract of B6).
    jobRoles: [
      {
        key: "plant-operator",
        label: "Plant operator, driver, labourer",
        b: ["b3", "b4", "b5"],
        chanceFind: true,
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
        b: ["b1", "b2", "b3", "b4", "b5", "b6"],
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
        b: ["b1", "b2", "b3", "b4", "b5", "b6"],
        c: ["c1", "c2", "c3", "c4", "c5", "c6"],
      },
      {
        key: "project-director",
        label: "Project director, commercial manager",
        b: ["b1", "b2", "b3", "b4"],
        c: ["c1", "c2", "c3", "c4", "c5", "c6"],
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
    ],
  },

  // Example second client — duplicate this block to onboard a real one.
  demo: {
    key: "demo",
    clientShort: "Acme Construction",
    clientLegal: "Acme Construction Ltd.",
    center: "Skykapital ESG Learning Center",
    series: "ESG Foundation Series",
    courseTitle: "Our Sustainability Pathway",
    courseSubtitle: "Building responsibly",
    codeOfConduct: {
      ref: "Policy reference to be added",
      owner: "Approved by the Managing Director",
      pdf: null, // no PDF yet — the reading still works, download buttons hide
    },
    // No images entry: the neutral stock set is used everywhere.
    // Example role matrix — replace with the client's own before launch.
    jobRoles: [
      {
        key: "field-staff",
        label: "Field staff, operators, drivers",
        b: ["b3", "b4", "b5"],
        c: [],
      },
      {
        key: "supervisor",
        label: "Supervisors & team leads",
        b: ["b2", "b3", "b4", "b5", "b6"],
        c: ["c1", "c3", "c5"],
      },
      {
        key: "management",
        label: "Site & project management",
        b: ["b1", "b2", "b3", "b4", "b5", "b6"],
        c: ["c1", "c2", "c3", "c4", "c5", "c6"],
      },
    ],
  },
};

const requested = (import.meta.env.VITE_CLIENT || "hitech").toLowerCase();
export const client = CLIENTS[requested] ?? CLIENTS.hitech;
