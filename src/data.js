// ESG course content ("Creating Our Sustainability Pathway") presented inside
// the Skykapital Europe platform design. No backend — seeds CourseContext.

import { client } from "./config/clients.js";

export { client };

export const platform = {
  brand: "Skykapital Europe",
  center: client.center,
  series: client.series,
};

export const course = {
  title: client.courseTitle,
  subtitle: client.courseSubtitle,
  learner: "Alexandre",
  totalQuizPoints: 48,
  duration: "60–70 min",
  level: "Foundation",
  accreditation: "Logged as training evidence",
  hero: "/images/course-hero.jpg",
  overview:
    "Five modules take you from what ESG means on a PPP construction project, through the rules that apply, to the the contractor financing case, the management system that runs it, and the KPIs that lenders review. Work through them in order — each one builds on the last.",
  instructor: {
    name: "Dr. Amina Okonkwo",
    role: "Lead, ESG Management System",
    bio: "Dr. Okonkwo has 20+ years across IFC Performance Standards, Equator Principles reporting and community engagement on major infrastructure projects in West Africa.",
  },
};

// Path order (order) is fixed and independent of the internal code (LM#).
// The ESG course — 5 modules in a fixed learning path. Each module
// carries its own on-screen lesson (rich `lesson` sections) + objectives; its
// quiz lives in `quizzes` (keyed by id).
export const modules = [
  {
    id: "m1",
    code: "A1",
    order: 1,
    pathway: "A",
    title: "ESG and E&S Fundamentals",
    type: "quiz",
    duration: "25–30 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "foundation",
    summary: "What responsible infrastructure actually requires — and why the money depends on it.",
    video: { id: "AkbGz3CYvqE", title: "Environmental, Social and Governance (ESG) — framework & standards" },
    tldr: "ESG is the discipline of making sure somebody asks three ordinary questions before the first excavator arrives — Who uses this land? What happens to this hole when we finish? Who has agreed to this? — and that the answers are written down, acted on, and checked.",
    glossary: [
      { term: "ESG", plain: "Environmental, Social and Governance — the lens used to judge whether an organisation makes its money without destroying things, harming people, or depending on dishonesty." },
      { term: "E&S", plain: "Environmental and Social — the project-level scope that lenders assess and monitor contractually. Not 'ESG minus the G': governance is fully present, under names like management system and monitoring." },
      { term: "IFC Performance Standards", plain: "Eight standards (PS1–PS8, revised 2012) that are the international benchmark for managing E&S risk on financed projects." },
      { term: "Equator Principles (EP4)", plain: "The framework banks apply before financing large projects. In most African countries it means: national law PLUS the IFC Performance Standards PLUS the EHS Guidelines." },
      { term: "Mitigation hierarchy", plain: "The fixed order for dealing with harm: Avoid → Minimise → Restore → Compensate. The order is binding, not advisory." },
      { term: "IESC", plain: "Independent Environmental and Social Consultant — appointed by and reporting to the lenders. Not the contractor's adviser: their job is to give lenders an accurate picture." },
      { term: "Full replacement cost", plain: "What compensation must equal under PS5: the cost of an equivalent NEW asset, without deduction for depreciation, plus transaction costs." },
      { term: "ESMS", plain: "Environmental and Social Management System — the machinery PS1 requires: policy, risk identification, plans, capacity, emergency preparedness, engagement, monitoring." },
    ],
    overview:
      "ESG stands for Environmental, Social and Governance — the non-financial dimensions along which a project is judged by banks, insurers, regulators, clients and communities. This module is the foundation of the pathway: what ESG and E&S actually mean, where the rules come from, which rulebook applies on your project, and the one tool — the mitigation hierarchy — that runs through everything. If you have ever been told to do something on site because an auditor was coming, and nobody told you why, this module is the answer to that question.",
    lesson: [
      {
        heading: "Why this module exists",
        body: "A contractor opens a borrow pit to win laterite for an embankment. The land is scrubby, apparently unused, and nobody complains at first. Six weeks later the pit is twelve metres deep and full of standing water. Two children drown in it. The community blocks the haul road; work stops on a fourteen-kilometre section. The lender's monitoring consultant finds no management plan, no closure design, no fencing, and no record that anyone ever asked who used that land. The technical work was sound — the embankment was well built — but the project failed anyway: months of delay, a suspended disbursement, a compensation claim, and a story that follows the contractor into its next tender. Nothing in that sequence required specialist knowledge to prevent. It required someone to ask, before the first excavator arrived: Who uses this land? What happens to this hole when we finish? Who has agreed to this?",
        image: "/images/course-hero.jpg",
        caption: "One unplanned borrow pit can stop a fourteen-kilometre section.",
      },
      {
        heading: "What ESG actually is — three pillars, seen on site",
        body: "For most of the twentieth century a company was assessed on one question: does it make money? ESG adds a second, now asked with equal seriousness: is that money made in a way that does not destroy things, harm people, or depend on dishonesty? On a road project, the three pillars look like this:",
        points: [
          "Environmental — our effect on the physical and living world: dust over a settlement, silt in a stream, a wetland drained, a borrow pit left open, fuel in the soil, trees cleared without a count.",
          "Social — how we treat the people we employ and the people who live with our impacts: a worker without a harness on a bridge deck, a camp with one latrine for eighty men, a farmer whose field is now a haul road, waiting for a payment.",
          "Governance — whether our systems, records and decisions are honest and verifiable: a payment to accelerate a permit, a safety register filled in on Friday for the whole week, a grievance logged as closed that was never resolved.",
        ],
        image: "/images/esg-environment.jpg",
        caption: "Three pillars, one project — and all three are audited.",
      },
      {
        heading: "The correction that matters most: E&S is not ESG minus the G",
        body: "You will often hear that E&S is simply ESG without governance. That is wrong, and the mistake causes real confusion. E&S is not a smaller version of ESG — it is a different unit of analysis. ESG assesses an organisation; E&S assesses a project. Governance is fully present at project level, under different names: management system, organisational capacity, competency, accountability, monitoring, reporting. IFC Performance Standard 1 requires an Environmental and Social Management System whose elements — policy, risk identification, management programmes, capacity and competency, emergency preparedness, stakeholder engagement, monitoring and review — ARE governance, described in project language. The honest formulation: E&S is the project-level, contractually binding scope that lenders assess and monitor. ESG is the broader corporate-level lens, much of which is voluntary. Governance runs through both. And do not confuse either with CSR: a school built as a goodwill gesture is a choice; a resettlement obligation under a financing agreement is a debt.",
        image: "/images/esg-governance.jpg",
        caption: "A company can score well on ESG and still fail an E&S audit — ratings measure disclosure; audits measure reality.",
      },
      {
        heading: "Where the rules came from: two family trees",
        body: "People tell the history of ESG as one story beginning with a UN report in 2004. In fact there are two lineages, and the one that governs your working life is the older one:",
        points: [
          "The investor lineage — 'Who Cares Wins' (2004) coined the acronym ESG; the Principles for Responsible Investment (2006) followed, then ratings and disclosure regimes. Powerful, but mostly not enforceable against a site foreman.",
          "The project finance lineage — the one that reaches your site: the World Bank's Operational Policies (1980s–90s) created impact assessment and resettlement practice; the Equator Principles (2003, EP4 since 2020) committed private banks; the IFC Performance Standards (2006, revised 2012) became the reference benchmark.",
          "The Africa lens — the African Development Bank runs its own Integrated Safeguards System, updated in 2023 with ten Operational Safeguards. On co-financed projects you may be assessed against both; where they differ, the more stringent applies.",
          "The IFC is a member of the World Bank GROUP — not the World Bank itself. The World Bank lends to governments (ESF, ten standards); the IFC finances private companies (eight Performance Standards). Knowing who finances your project tells you which rulebook you are audited against.",
        ],
        image: "/images/lm2.jpg",
        caption: "Two family trees — investor pressure, and the project-finance rules that reach your site.",
      },
      {
        heading: "Which rulebook applies to you — the single most important rule",
        body: "Equator Principles 4, Principle 3, distinguishes Designated Countries (robust environmental and social governance) from Non-Designated Countries. Almost all African countries — Nigeria, Ghana, Kenya, Senegal, Côte d'Ivoire, Tanzania — are Non-Designated. The consequence is direct and non-negotiable:",
        points: [
          "On a financed project, the applicable standard is host country law PLUS the IFC Performance Standards PLUS the World Bank Group EHS Guidelines.",
          "Where the two differ, the MORE STRINGENT requirement applies.",
          "Compliance with national law is necessary. It is not sufficient.",
          "Example: a contractor in Nigeria obtains its EIA certificate and considers the environmental question settled. It is not — the certificate satisfies the EIA Act but says nothing about PS6 on biodiversity, PS5 on resettlement, or the EHS Guidelines on emissions. A valid national permit closes a legal question; it closes no lender finding.",
        ],
        image: "/images/lm11.jpg",
        caption: "National permit in hand — and the lender's assessment has not even started.",
      },
      {
        heading: "E for Environmental — the eight areas you are accountable for",
        points: [
          "Air quality and dust — haul roads, crushing and earthworks settling on homes, crops and drying food (PS3, EHS Guidelines 1.1).",
          "Water — sediment run-off, concrete washout, fuel and oil, untreated camp sewage, over-abstraction from a source a village depends on (PS3, EHS 1.3–1.4).",
          "Noise and vibration — night piling near homes, blasting cracking walls. Sleep disruption is a health impact, not an inconvenience (PS3, PS4, EHS 1.7).",
          "Land, soil and erosion — stripped slopes gullying in the first heavy rain, topsoil buried instead of stockpiled, contaminated ground at fuel points (PS3, PS1).",
          "Borrow pits and quarries — the single most under-managed issue on African road projects: unlicensed extraction, no closure design, open water, drowning risk (PS1, PS3, PS4, PS5).",
          "Biodiversity and habitat — clearance without survey, wetlands crossed without design, critical habitat encountered late, invasive species on imported fill (PS6).",
          "Waste and hazardous materials — used oil poured on roads for dust suppression, bitumen drums reused for drinking water, no manifest, no licensed disposal (PS3, EHS 1.6).",
          "Climate and greenhouse gases — unquantified emissions; flood and heat exposure designed for yesterday's climate rather than the asset's design life (PS3, EP4).",
        ],
        image: "/images/lm9.jpg",
        caption: "Silt fences and a settlement pond cost a fraction of one percent of a section — the failure costs a work stoppage and a community that never forgives.",
      },
      {
        heading: "S for Social — your workforce",
        body: "PS2 governs labour and working conditions, extending to workers engaged by subcontractors — subcontracting transfers the work, never the obligation:",
        points: [
          "Written terms of employment in a language the worker understands; wages in full, on time, without unlawful deduction.",
          "Occupational health and safety through the hierarchy: eliminate, control at source, minimise, and only then PPE. A helmet is the last line of defence, not the strategy.",
          "Freedom of association, non-discrimination, and absolute prohibitions on child labour and forced labour (withheld passports and recruitment fees are forced-labour indicators, whatever they are called locally).",
          "Worker accommodation to the IFC/EBRD standard — floor area, sanitation ratios, and management separated from employment so losing a bed does not mean losing the job.",
          "A worker grievance mechanism, separate from the community one, operating without retaliation.",
        ],
        image: "/images/esg-social.jpg",
        caption: "PS2 follows the worker — including every subcontractor's worker on your project.",
      },
      {
        heading: "S for Social — communities, land and livelihoods",
        body: "The Social pillar is the one that most often stops a project. The highest-risk area on almost every road project is land, governed by PS5:",
        points: [
          "Community safety (PS4) — construction haulage on public roads kills more people on African road projects than any on-site hazard. Traffic management, speed governors and school-hours restrictions are not optional refinements.",
          "Labour influx — a camp of hundreds beside a village of two thousand changes prices, water, disease and politics. Predictable, manageable — not an accident.",
          "Sexual exploitation, abuse and harassment — its own prevention architecture: signed code of conduct, training, survivor-centred reporting, referral pathway that exists BEFORE an incident.",
          "PS5: compensation at FULL REPLACEMENT COST — an equivalent new house, no deduction for depreciation. The most frequently mishandled calculation on the continent.",
          "PS5: possession of land only AFTER compensation is available. Entering land before payment is among the most serious findings a lender can make.",
          "PS5: eligibility extends to people WITHOUT legal title — informal traders, pastoralists, seasonal users. A census at 10 a.m. on a market day systematically misses them.",
          "Livelihoods must be RESTORED, not merely compensated — a trader needs a functioning place to trade, not only a cash sum.",
        ],
        image: "/images/esg-social.jpg",
        caption: "A census that missed 63 households is not a rounding error — it is a legitimacy problem.",
      },
      {
        heading: "G for Governance — and what a failure actually costs",
        body: "Governance determines whether the other two pillars are real or decorative. Four components: ethics and anti-corruption (a facilitation payment is unlawful under most financing agreements, whatever local practice tolerates); record integrity (a falsified record is treated more seriously than the failure it hides); accountability (an E&S manager with no budget and no authority is a documented non-conformity); and speak-up channels (if the first person to use one is punished, the channel is dead and everyone knows it). And forget the myth that one small bribe collapses the loan overnight. The real mechanism is slower and more sobering:",
        points: [
          "1. Detection — audit, complaint, supervision engineer, or the lenders' IESC on a site visit.",
          "2. Finding — recorded as a non-conformity with a severity rating; the report goes to the lenders.",
          "3. Corrective action — into the ESAP with a named owner and deadline. Most issues are resolved here.",
          "4. Escalation — persistent or severe failure triggers formal notice, with a cure period.",
          "5. Financial consequence — suspended disbursement, additional conditions, and in the extreme, an event of default.",
          "The realistic risk is cumulative: a pattern of small failures builds a monitoring record that makes the next disbursement conditional and the next contract unwinnable.",
        ],
        image: "/images/esg-governance.jpg",
        caption: "Not one envelope collapsing a project — a pattern of small failures closing doors.",
      },
      {
        heading: "The one tool that runs through everything: the mitigation hierarchy",
        body: "If you remember a single technical concept from this pathway, remember this. PS1 requires the hierarchy to be applied to every identified risk and impact — favouring avoidance over minimisation, with compensation only for what remains. Worked example — a wetland on the alignment:",
        points: [
          "1. AVOID — realign the road around the wetland. Always the first question, and the one most often skipped because the alignment is treated as fixed before anyone has looked.",
          "2. MINIMISE — reduce the crossing width, build a viaduct, restrict works to the dry season.",
          "3. RESTORE — reinstate hydrological connectivity, replant native species, regrade temporary access.",
          "4. COMPENSATE / OFFSET — deliver an equivalent gain elsewhere, to a measurable no-net-loss objective. Cash alone is not an offset.",
          "The order is BINDING, not advisory — a reviewer will ask what avoidance options were considered and why they were rejected, and expects a documented answer.",
          "It applies to people too: resettlement is step four, not step one. A thirty-metre alignment shift that avoids twelve houses is worth more than any compensation package.",
          "It applies to safety: if your strategy begins and ends with issuing helmets, you have started at step four.",
        ],
        image: "/images/lm2.jpg",
        caption: "Avoid → Minimise → Restore → Compensate. The hierarchy fails on timing, not ignorance.",
      },
      {
        heading: "The chain of obligation: how a rule reaches your site",
        body: "E&S requirements do not arrive from nowhere. They flow down a chain — and understanding it explains why the requirement cannot be waived by the person standing in front of you:",
        points: [
          "1. Lenders — a financing agreement with conditions precedent, E&S covenants, an action plan and reporting obligations.",
          "2. Borrower / concessionaire — passes obligations into the construction contract, plus a duty to supervise and report.",
          "3. EPC contractor — turns them into management plans: ESMP, traffic, waste, borrow pits, camp, code of conduct.",
          "4. Subcontractors and suppliers — flow-down clauses, induction, right of audit.",
          "5. The individual on site — a specific instruction: wet this haul road, log this grievance, stop if you uncover a burial.",
          "The obligation flows down but the liability does NOT flow away: if a subcontractor employs a fifteen-year-old, the finding is against the project. Naming the subcontractor is an explanation, not a defence.",
          "Everything above the last link is a plan. Only what the operator does on the ground is performance — that is why ESG being everybody's job is a structural fact, not a slogan.",
        ],
        image: "/images/lm13.jpg",
        caption: "Five links from the loan agreement to the person holding the hose.",
      },
      {
        heading: "Who checks — and the rule that decides how you are judged",
        body: "Five layers of checking: your own E&S team; the client's supervision engineer; the lenders' Independent Environmental and Social Consultant (IESC — not your adviser, not there to help you pass); the national regulators; and the communities themselves, through the grievance mechanism, the road block, the press and the DFIs' accountability mechanisms. And one rule decides everything:",
        points: [
          "A problem you found, recorded and were already correcting is evidence of a functioning management system.",
          "The identical problem, discovered by the IESC with no trace in your records, is evidence that the system does not work.",
          "Same facts. Opposite conclusion about your organisation.",
          "Systems that under-report are treated as systems that cannot be relied upon at all — an unrecorded incident that surfaces later is treated as concealment, a governance finding of a higher order than the original issue.",
        ],
        image: "/images/lm9.jpg",
        caption: "Disclosed versus discovered — the difference between a working system and a broken one.",
      },
      {
        heading: "Six things people believe that are not true",
        points: [
          "'ESG is just public relations.' On a financed project it is a binding contractual condition with money attached.",
          "'ESG slows us down.' Done early it is close to cost-neutral; done late it becomes rework, stoppage and retrofit. The delay people remember is E&S having been left too late.",
          "'That is the ESG team's job.' The ESG team designs and verifies. It cannot wet a haul road, refuse an unsafe lift, or stop a grader at a burial site.",
          "'We comply with national law, so we are fine.' In a Non-Designated Country: national law PLUS the Performance Standards PLUS the EHS Guidelines, the more stringent prevailing.",
          "'It is the subcontractor's problem.' The finding is recorded against the project. Always.",
          "'If we do not write it down, it did not happen.' The opposite is true — and this is the most damaging belief on the list.",
        ],
        image: "/images/esg-environment.jpg",
        caption: "Six myths — each one has ended careers and stopped projects.",
      },
      {
        heading: "Job aid: five questions before you break ground",
        body: "These five questions cover the majority of what goes wrong on infrastructure sites. If any answer is no or unclear — stop and build the record first:",
        points: [
          "1. Is this activity, at this location, inside the assessed and approved scope? New borrow pits, camps, access tracks and spoil areas are usually the answer — and usually no.",
          "2. Who USES this land, and how do I know? Not who owns it. Ask women, pastoralists and youth separately, away from whoever stands to benefit from the answer.",
          "3. Have I applied the hierarchy in order — and written down what I rejected at each step and why?",
          "4. What happens to this when we finish? Design the closure now: a pit designed only for maximum yield cannot be safely closed at any price.",
          "5. If the IESC asked me today, could I show the record? Whatever the substance, a missing record is a governance finding.",
          "And one rule that overrides all five: if you find a problem, DISCLOSE it.",
        ],
        image: "/images/lm13.jpg",
        caption: "Print this. It fits on one page and it prevents most of what goes wrong.",
      },
    ],
    objectives: [
      "Define ESG and E&S accurately, and explain the difference between them without guessing.",
      "Name the three main rulebooks that govern a financed infrastructure project, and say which one applies where you work.",
      "Apply the mitigation hierarchy to a real site decision, in the correct order.",
      "Trace the chain of obligation from a lender's loan agreement to a specific task on your site.",
      "Identify where national law sets a lower bar than international standards, and explain which one applies on a financed project.",
      "Recognise the practical consequences of a non-conformity, and describe the process that follows one.",
    ],
    activities: [
      {
        type: "order",
        title: "Order the mitigation hierarchy",
        prompt: "Drag the steps into the correct order — the most preferred first.",
        items: ["Avoid", "Minimise", "Restore", "Offset"],
      },
      {
        type: "categorize",
        title: "Environmental or social?",
        prompt: "Drag each impact into the column it belongs to.",
        categories: [
          { id: "env", label: "Environmental" },
          { id: "soc", label: "Social" },
        ],
        items: [
          { id: "dust", text: "Dust from earthworks", cat: "env" },
          { id: "washout", text: "Concrete washout / effluent", cat: "env" },
          { id: "clearing", text: "Vegetation clearing", cat: "env" },
          { id: "land", text: "Land acquisition & compensation", cat: "soc" },
          { id: "camp", text: "Worker-camp conditions", cat: "soc" },
          { id: "traffic", text: "Noise & traffic for neighbours", cat: "soc" },
        ],
      },
      {
        type: "hotspot",
        title: "Spot the ESG issues on site",
        prompt: "Click each marker to identify the environmental (E) or social (S) issue.",
        image: "/images/lm4.jpg",
        hotspots: [
          { x: 26, y: 34, kind: "E", label: "Dust from earthworks", detail: "Uncontrolled dust harms air quality and nearby homes — suppress it with water." },
          { x: 58, y: 28, kind: "E", label: "Exposed spoil & run-off", detail: "Loose soil erodes into waterways — use silt fences and cover stockpiles." },
          { x: 47, y: 68, kind: "S", label: "Workers near plant", detail: "Workers close to moving plant need PPE, exclusion zones and safe systems of work." },
          { x: 82, y: 58, kind: "S", label: "Community edge", detail: "Traffic and noise reach neighbours — manage access and engage the community." },
          { x: 14, y: 62, kind: "E", label: "Fuel / oil storage", detail: "Fuel must be bunded with spill kits nearby to prevent soil and water contamination." },
        ],
      },
      {
        type: "fillblank",
        title: "Complete the mitigation hierarchy",
        prompt: "Fill each blank so the order is correct.",
        segments: [
          "The mitigation hierarchy is ",
          { options: ["Avoid", "Offset"], correct: 0 },
          " → ",
          { options: ["Minimise", "Restore"], correct: 0 },
          " → ",
          { options: ["Restore", "Avoid"], correct: 0 },
          " → ",
          { options: ["Offset", "Minimise"], correct: 0 },
          ".",
        ],
        tip: "Avoid → Minimise → Restore → Offset.",
      },
      {
        type: "swipe",
        title: "Myth or fact? — ESG basics",
        prompt: "Six quick statements. Call each one: myth or fact?",
        cards: [
          { text: "ESG is just paperwork for the head office.", truth: false, tip: "Myth — ESG lives on site: dust control, safe scaffolds, respectful community relations. Every worker owns a piece of it." },
          { text: "Dust from haulage is an environmental impact.", truth: true, tip: "Fact — it degrades air quality; that's the E in ESG." },
          { text: "A subcontractor's conduct is not the main contractor's problem.", truth: false, tip: "Myth — subcontractor conduct is the contractor's responsibility, full stop." },
          { text: "Good ESG performance helps win future work.", truth: true, tip: "Fact — reputation and a clean record win bids." },
          { text: "Offsetting is the first step when facing an impact.", truth: false, tip: "Myth — offsetting is the LAST resort. Avoid comes first." },
          { text: "Vulnerable groups deserve special attention.", truth: true, tip: "Fact — impacts hit hardest those least able to cope." },
        ],
      },
      {
        type: "memory",
        title: "Memory: the vocabulary of ESG",
        prompt: "Flip two cards at a time — match each term to its meaning.",
        pairs: [
          { a: "ESG", b: "Planet, people, honest business" },
          { a: "Impact", b: "A change the project causes" },
          { a: "Stakeholder", b: "Anyone the project touches" },
          { a: "Avoid", b: "First step of the hierarchy" },
          { a: "Offset", b: "Last-resort compensation" },
          { a: "Host community", b: "Lives right next to the site" },
        ],
      },
    ],
  },
  {
    id: "m2",
    code: "A2",
    order: 2,
    pathway: "A",
    title: "Rulebook",
    type: "quiz",
    duration: "25–30 min",
    status: "not_started",
    score: { earned: 0, total: 20 },
    icon: "gavel",
    summary: "Where national law stops and the lender standard begins.",
    video: { id: "xd9KRup3zaY", title: "IFC Performance Standards on Environmental & Social Sustainability" },
    tldr: "Module 1 ended with a proposition most people accept without fully believing: complying with national law is necessary but not sufficient. This module makes it operational — four tiers of requirement apply at once, and where they diverge, the one that protects people and the environment more is the one that governs.",
    glossary: [
      { term: "The four tiers", plain: "National law (protects you from prosecution), lender standards (protect your disbursement), the project contract (protects your payment certificate), and good practice (protects you when nothing else anticipated the situation)." },
      { term: "Non-Designated Country", plain: "EP4's category for countries without 'robust' E&S governance — every Sub-Saharan African country. Consequence: national law PLUS the Performance Standards PLUS the EHS Guidelines." },
      { term: "More-stringent test", plain: "When two rules address the same requirement, the one that gives the better outcome for the affected person or the environment governs — not the one that is easier for the project." },
      { term: "Category A / B / C", plain: "EP4's risk label. A = highest potential impacts, fullest obligations. Most major road and PPP projects are Category A." },
      { term: "Supplementary assessment", plain: "The extra study prepared to lender scope when the national EIA covers less than the standards require. Normal practice, not a sign of failure." },
      { term: "Corrective framing", plain: "The honest posture when gaps are found mid-construction: state what happened, fix what can still be fixed, plan the rest with owners and deadlines. Lenders penalise the disguise, not the fact." },
      { term: "GIIP", plain: "Good International Industry Practice — the professional skill and foresight a competent reviewer expects, applied when no written rule anticipated the situation." },
      { term: "Mineral title", plain: "The licence needed to extract laterite, sand or rock — even for your own project's borrow pit. A landowner's consent does not replace it." },
    ],
    overview:
      "On a financed infrastructure project, four distinct bodies of requirement apply simultaneously: national law, the lender standards, the project contract, and good international industry practice. They come from different authorities, are enforced by different people, and satisfying one has no effect on the others. This module shows where they live, how to run the more-stringent test, the six areas where national frameworks characteristically fall short — and why a valid national permit closes no lender finding.",
    lesson: [
      {
        heading: "The mistake this module exists to prevent",
        body: "A project team obtains its environmental approval from the national regulator, files it, and treats the environmental and social question as settled. Months later, an independent consultant produces thirty findings, none of which the permit addressed — several requiring work already built to be modified. Nobody in that team was negligent. They complied with the law they knew applied. The failure was one of scope: they did not know that three further tiers of requirement existed above the one they had satisfied.",
        image: "/images/lm5.jpg",
        caption: "Fully lawful and substantially non-compliant — both can be true at the same time.",
      },
      {
        heading: "Four rulebooks, not one",
        body: "Four distinct bodies of requirement apply simultaneously, from different authorities, enforced by different people:",
        points: [
          "1. National law — statutes, regulations and permit conditions. Enforced by regulators, inspectorates and courts, with criminal and administrative sanction. Protects you from prosecution.",
          "2. Lender standards — the IFC Performance Standards, the EHS Guidelines, and where applicable the AfDB Safeguards. Made contractually binding by the financing agreement; enforced through the IESC, the ESAP and covenants. Protects your disbursement.",
          "3. The project contract — the construction contract, the ESMP and the project's own plans. Enforced by the employer's engineer, with power to instruct and sometimes to suspend. Protects your payment certificate.",
          "4. Good international industry practice — the skill and foresight expected of competent professionals. Applied by the IESC, and if it comes to it, by a court. Protects you when something happens that none of the first three anticipated.",
          "Neither tier displaces another. Both the PS Overview and the EHS Guidelines state the rule: where requirements diverge, the more stringent governs.",
        ],
        image: "/images/esg-governance.jpg",
        caption: "Satisfying one tier has no effect on the other three.",
      },
      {
        heading: "EP4 Principle 3: the two categories of country",
        body: "The Equator Principles are how the Performance Standards reach commercial bank financing, and Principle 3 is the single most consequential provision for anyone working in Africa. It divides the world into Designated Countries (essentially the high-income OECD, where national law is deemed sufficient) and Non-Designated Countries. Every country in Sub-Saharan Africa is Non-Designated. The consequence is not a matter of interpretation: the Performance Standards apply in full, in addition to national law, contractually. A team that has read the national statute and stopped has read about one quarter of what applies to it. And a point of self-respect worth holding: the classification concerns the enforcement environment, not the quality of national legislation — and its practical effect is that communities on these projects receive MORE protection than national law alone would give them, particularly on land and labour. Arguing against it would be arguing for less protection for the people living beside the alignment.",
        image: "/images/course-hero.jpg",
        caption: "Non-Designated status means a higher standard of protection for the people beside the alignment.",
      },
      {
        heading: "The rest of EP4, briefly",
        points: [
          "P1 Categorisation — projects rated A, B or C by potential impact. Most major road and PPP work is Category A, which brings the fullest obligations.",
          "P2 Assessment — proportionate to risk, to the applicable standards, now including climate risk. Why the national EIA is often insufficient in scope.",
          "P4 ESMS and Action Plan — the ESAP that governs your corrective actions exists because of this principle.",
          "P5 Stakeholder engagement — effective and ONGOING. One consultation event at design stage does not satisfy it.",
          "P6 Grievance mechanism — the community GRM you operate is an EP4 obligation as well as a PS1 one.",
          "P7–P9 Independent review and monitoring — the IESC before financial close and throughout construction.",
          "P8 Covenants — the mechanism that converts a standard into money.",
          "P10 Transparency — why documents you consider internal become publicly available.",
        ],
        image: "/images/lm2.jpg",
        caption: "Ten principles — and every one of them eventually reaches the site.",
      },
      {
        heading: "Running the more-stringent test",
        body: "The rule is easy to state and harder to apply, because most people compare two documents and pick the one they prefer. The test asks a different question, in five steps:",
        points: [
          "1. Identify the SPECIFIC requirement — not 'compensation' but 'how is the value of a demolished dwelling calculated'.",
          "2. State what national law requires, with the source: statute, section, permit condition.",
          "3. State what the Performance Standard or EHS Guideline requires, with the paragraph.",
          "4. Ask which outcome is better FOR THE AFFECTED PERSON or the receiving environment — that, not which is easier for the project, is what stringency means.",
          "5. Apply that one, document the comparison, and retain it. The written comparison turns a defensible position into a demonstrable one.",
        ],
        image: "/images/lm9.jpg",
        caption: "Stringency is measured from the affected person's side of the fence.",
      },
      {
        heading: "Three traps everyone falls into",
        points: [
          "'The standards are silent, so national law governs.' Often false: PS5 specifies no valuation METHOD but requires the OUTCOME to equal full replacement cost. Silence on method is not silence on requirement.",
          "'National law is stricter here, so the standard falls away.' The stricter provision governs that one requirement only. A country with a stricter effluent limit still owes everything else in PS3.",
          "'The regulator approved it.' A regulator approves against the only standard it administers. Its approval is conclusive of tier 1 and irrelevant to tier 2 — it has no power to waive standards that were never its to apply.",
          "Field example — night works noise: the national regulation sets one limit day and night; the EHS Guidelines set a substantially lower night limit. The night limit governs. Get it wrong and the works proceed lawfully, generate a stream of grievances, and end in retrospective mitigation at far greater cost.",
        ],
        image: "/images/lm11.jpg",
        caption: "Lawful under the permit, non-compliant under the loan — the most common field misunderstanding.",
      },
      {
        heading: "Gap 1 — the assessment is environmental, not environmental AND social",
        body: "Most national regimes are ENVIRONMENTAL impact assessment regimes: the statute, the schedules and the reviewing authority are oriented to biophysical impact. The lender expects an environmental AND SOCIAL assessment where the social analysis is a full parallel workstream: displacement and land, livelihoods, labour, community health and safety, gender, vulnerable groups, cultural heritage, engagement and grievance. The consequence is structural: a perfectly compliant national EIA can contain no resettlement analysis, no labour risk assessment and no engagement plan. It is not deficient against the law it was written for — it is answering a narrower question. The same is true of engagement: national law requires a participation EVENT (a display period, a hearing); PS1 requires a continuous PROCESS across the project life — which is why a project can hold every permit and have no functioning engagement at the moment it starts affecting people.",
        image: "/images/esg-social.jpg",
        caption: "A statutory hearing at design stage is an event. PS1 requires a process.",
      },
      {
        heading: "Gap 2 — land, compensation and resettlement (the widest and most expensive)",
        points: [
          "Valuation: national practice applies depreciation to structures; PS5 requires full replacement cost with NO deduction, plus transaction costs.",
          "Eligibility: national schemes recognise title holders; PS5 extends to those with recognisable claims AND those with no legal right at all.",
          "Instrument: many jurisdictions require no resettlement plan whatsoever; PS5 requires a RAP or LRP with entitlements, budget, timetable and monitoring.",
          "Cut-off date: rarely defined nationally; PS5 requires one, established and COMMUNICATED.",
          "Livelihoods: national law pays cash once; PS5 requires restoration, monitored to an agreed completion point.",
          "And the one that creates irreversible problems: PS5 requires possession of land only AFTER compensation is available. Paying afterwards remedies the amount, not the breach — the person was deprived of any real choice. Site teams cross this threshold on programme pressure without knowing it exists.",
        ],
        image: "/images/esg-social.jpg",
        caption: "Entering land before payment cannot be corrected retrospectively.",
      },
      {
        heading: "Gap 3 — labour and working conditions",
        points: [
          "Scope: several national statutes define the protected 'worker' narrowly; PS2 draws no distinction and extends to workers engaged by third parties.",
          "Age and hazardous work: national thresholds sit below eighteen for work that is hazardous in practice; ILO Convention 182 (via PS2) covers any person under eighteen. Night work at a crusher is hazardous work whatever the national threshold says.",
          "Worker accommodation: rarely regulated nationally in detail; the IFC/EBRD guidance note governs floor area, sanitation, and separating accommodation from employment.",
          "Worker grievance mechanism: usually not statutory; PS2 requires one, without retaliation, separate from the community channel.",
          "Statutory contributions (pension, social insurance, levies): verify REMITTANCE, not deduction — non-remittance is a legal breach and PS2 evidence simultaneously.",
        ],
        image: "/images/lm13.jpg",
        caption: "PS2 follows every worker on the project — including the labour supplier's.",
      },
      {
        heading: "Gaps 4, 5 and 6 — biodiversity, heritage, cumulative impacts, and numbers",
        points: [
          "Biodiversity: national regimes protect gazetted areas and listed species; PS6 classifies ALL habitat (modified, natural, critical) with progressively stricter requirements and a no-net-loss / net-gain objective that requires quantification. A project can hold every clearance and be sitting in unscreened critical habitat.",
          "Cultural heritage: national law protects declared monuments; PS8 protects tangible and intangible heritage broadly, and the chance find procedure is the operative control — the sites that matter are the ones nobody knew about.",
          "Cumulative impacts: national assessment is project-specific; PS1 requires assessment in combination with other projects and induced development — which on a road corridor routinely produces larger impacts than the road itself.",
          "Numeric limits: compare parameter by parameter, never document by document. Where a national limit is absent, the EHS Guideline fills the space; where both exist, the more stringent applies; a less stringent level needs a full, health-based, documented justification.",
        ],
        image: "/images/esg-environment.jpg",
        caption: "On most projects, at least one parameter is monitored against the weaker limit — a finding waiting to be made.",
      },
      {
        heading: "Closing the gap: supplementary assessment or corrective framing",
        body: "What to do about the gaps depends on one fact: whether construction has started. BEFORE construction, the normal instrument is a supplementary assessment — it does not reopen the national approval; it addresses, to lender scope, what the national instrument did not cover: social impact, resettlement instrument, engagement plan, grievance mechanism, labour assessment, community safety, biodiversity, heritage, cumulative impacts, and a consolidated ESMP. Holding a national EIA plus a supplementary ESIA is normal practice, not failure. AFTER construction has started, the analysis cannot be presented as pre-construction due diligence, because it is not — any competent reviewer sees through that framing and it damages everything else in the submission. The correct posture is corrective: state what occurred, assess what can still be avoided on the remaining works, quantify what must be restored or compensated, and set a time-bound plan with owners. Lenders penalise the disguise, not the fact. And on sequencing: analytical work before approval (counting assets, verifying schedules) is defensible; acts that create facts (paying compensation, taking land, clearing vegetation) are not. Counting is not taking.",
        image: "/images/lm2.jpg",
        caption: "Counting is not taking — the distinction reviewers examine on the dates.",
      },
      {
        heading: "Jurisdiction file: Nigeria",
        body: "Nigeria in one paragraph — the same exercise should be run and documented for every country you work in. Nigerian law requires: an EIA before listed projects (EIA Act, Cap E12 — an environmental statute; it requires no resettlement plan and no engagement plan); NESREA enforcement and sectoral regulations, PLUS state-level agencies with independent powers — a federal approval does not dispose of state requirements; a MINERAL TITLE for extracting laterite, sand or rock (Minerals and Mining Act 2007) — a borrow pit without one is unlawful extraction and an unassessed activity at the same time; compensation on revocation of a right of occupancy (Land Use Act 1978) — directed at unexhausted improvements, not bare land value; core employment protections (Labour Act) with a narrower 'worker' definition than PS2; verified remittance of pension, social insurance and levies; and lawful handling of personal data (NDPA 2023) — which covers your resettlement census and grievance register. What Nigerian law does NOT require: a RAP, full replacement cost without depreciation, eligibility without title, a communicated cut-off date, livelihood restoration, an engagement plan, or a grievance mechanism. All seven exist on a financed Nigerian project because the Performance Standards exist and the financing agreement makes them binding.",
        image: "/images/lm5.jpg",
        caption: "Seven requirements that exist only because the financing agreement says so.",
      },
      {
        heading: "Job aid: the applicable-requirements test",
        body: "Run these six questions whenever someone tells you something is approved, permitted or agreed:",
        points: [
          "1. Which tier is this approval from? A permit is tier 1 — it says nothing about tiers 2, 3 or 4.",
          "2. What exactly does each tier say? Statute section on one side, PS paragraph or EHS table on the other. You cannot run the test on a summary.",
          "3. Which outcome is better for the affected person or the environment? If the honest answer is the standard — apply it, and record the comparison.",
          "4. Is this activity inside the approved assessment scope? New pits, camps, tracks and spoil areas usually are not.",
          "5. Does it need a separate authorisation nobody mentioned? Mineral title, water abstraction, waste carrier licensing, state-level approval.",
          "6. Has anything been done before it was authorised? Establish the dates, characterise the sequence accurately, and separate analysis from acts that created facts.",
          "The sentence to keep: a permit closes a legal question. It does not close a lender finding — and the regulator that issued it has no power to waive a standard it was never given to apply.",
        ],
        image: "/images/lm9.jpg",
        caption: "Six questions that close the gap before an auditor finds it open.",
      },
    ],
    objectives: [
      "Name the four tiers of requirement on a financed project, and say which document each one lives in.",
      "Explain the Designated / Non-Designated distinction under EP4 and its effect in your jurisdiction.",
      "Run the more-stringent test on a concrete requirement and reach a defensible, documented answer.",
      "Identify the six areas where national frameworks characteristically fall short of the Performance Standards.",
      "Explain why a valid national permit closes no lender finding.",
      "Describe what a supplementary assessment is, and when corrective framing is the honest posture.",
    ],
    activities: [
      {
        type: "categorize",
        title: "Nigerian law or international standard?",
        prompt: "Drag each item into where it comes from.",
        categories: [
          { id: "ng", label: "Nigerian law" },
          { id: "int", label: "International standard" },
        ],
        items: [
          { id: "eia", text: "EIA Act", cat: "ng" },
          { id: "nesrea", text: "NESREA", cat: "ng" },
          { id: "permit", text: "Discharge permit", cat: "ng" },
          { id: "ifcps", text: "IFC Performance Standards", cat: "int" },
          { id: "equator", text: "Equator Principles", cat: "int" },
        ],
      },
      {
        type: "scenario",
        title: "Which rule do you follow?",
        intro:
          "On dust control, the IFC standard is stricter than the local permit limit.",
        steps: [
          {
            prompt: "Local law allows more dust than the IFC standard — which do you apply?",
            options: [
              { text: "The stricter IFC standard", outcome: "good", feedback: "Correct — where they differ, apply whichever gives greater protection." },
              { text: "The looser local limit", outcome: "bad", feedback: "No — lenders require the stricter of the two, so following the looser limit breaches the loan." },
            ],
          },
        ],
      },
      {
        type: "checklist",
        title: "Permits before works begin",
        prompt: "Tick only what is genuinely required before starting major works — watch for traps.",
        items: [
          { text: "Approved EIA", required: true, note: "The EIA Act requires an approved EIA before major works." },
          { text: "Discharge / effluent permit", required: true, note: "Needed wherever wastewater is released." },
          { text: "Waste handling approval", required: true, note: "Hazardous and general waste must go to licensed disposal." },
          { text: "A social-media marketing plan", required: false, note: "Useful maybe, but not a legal permit." },
          { text: "The MD's personal tax return", required: false, note: "Irrelevant to starting works." },
          { text: "Water abstraction licence (if drawing water)", required: true, note: "Required where the project abstracts water." },
        ],
      },
      {
        type: "match",
        title: "Match the authority to its role",
        prompt: "Choose what each body or law does.",
        items: [
          { prompt: "NESREA", options: ["Sets and enforces environmental standards", "Approves bank loans", "Builds the roads"], correct: 0, tip: "NESREA is the environmental enforcement agency." },
          { prompt: "The EIA Act", options: ["Requires an approved EIA before major works", "Sets interest rates", "Issues passports"], correct: 0, tip: "An approved EIA is a precondition for major projects." },
          { prompt: "The Equator Principles", options: ["Guide the banks financing the project", "Are a Nigerian tax", "Regulate wages"], correct: 0, tip: "A lender framework built on the IFC PS." },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — the rules",
        prompt: "Six statements about the regulatory framework. Myth or fact?",
        cards: [
          { text: "Meeting local law is always enough for a financed project.", truth: false, tip: "Myth — lenders require the international standards on top; apply the stricter rule." },
          { text: "There are eight IFC Performance Standards.", truth: true, tip: "Fact — PS1 to PS8, from management systems to cultural heritage." },
          { text: "Category A means minimal ESG risk.", truth: false, tip: "Myth — A is the HIGHEST risk category; C is minimal." },
          { text: "Major works need an approved EIA first.", truth: true, tip: "Fact — the EIA Act makes approval a precondition." },
          { text: "FPIC concerns Indigenous Peoples.", truth: true, tip: "Fact — Free, Prior and Informed Consent, central to PS7." },
          { text: "When two rules conflict, pick the cheaper one.", truth: false, tip: "Myth — always the more protective requirement." },
        ],
      },
      {
        type: "memory",
        title: "Memory: the rulebook",
        prompt: "Match each rule or body to what it is.",
        pairs: [
          { a: "EIA", b: "The study before major works" },
          { a: "NESREA", b: "Nigeria's environmental watchdog" },
          { a: "IFC PS", b: "The eight lender standards" },
          { a: "Equator Principles", b: "How banks apply the PS" },
          { a: "Category A", b: "Highest project risk" },
          { a: "Stricter rule", b: "Follow the more protective" },
        ],
      },
    ],
  },
  {
    id: "m3",
    code: "A3",
    order: 3,
    pathway: "A",
    title: "How the Money Works",
    type: "quiz",
    duration: "13–16 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "account_balance",
    summary: "Conditions, covenants, and the consultant who comes to check.",
    tldr: "Most people on a construction project do not know this mechanism exists — and therefore cannot see the connection between what they do and whether the project gets paid. Who is at the table, the three instruments that turn a standard into money, the action plan, and where you sit in the chain.",
    overview: "A contractor completes a milestone, certifies it, invoices — and the payment does not come, because four actions on the Environmental and Social Action Plan are overdue and one is attached to this disbursement. None of the four is a construction matter. This module traces the chain from a site activity to a bank's decision.",
    lesson: [
      {
        heading: "The payment that did not arrive",
        body: "A contractor completes a milestone, certifies it, and invoices. Three weeks later nothing has been paid. The client is not disputing the works. The engineer has signed. The construction is fine. What happened is that the lenders have not released the tranche, because four actions on the project's action plan are overdue and one of them is attached to this disbursement. None of the four is a construction matter: one is a resettlement register, one a grievance mechanism, one a set of accommodation standards, one a monitoring report that went in late. This module exists because most people on a construction project do not know this mechanism is there — and so cannot see how what they do connects to whether the project gets paid.",
        image: "/images/lm2.jpg",
        caption: "Nobody on this project is more than three steps from the money.",
      },
      {
        heading: "Who is at the table",
        points: [
          "LENDERS — development banks, commercial banks under the Equator Principles, export credit agencies, often several as a syndicate. They can withhold a disbursement, impose conditions, require corrective actions at your cost, and in the extreme declare default.",
          "THE BORROWER or sponsor signed the loan and owes every obligation in it. They pass those obligations into the construction contract and cannot waive what the lenders imposed.",
          "THE CLIENT and THE ENGINEER sit on the contract side. The engineer supervises, instructs, and in many contracts can suspend an activity.",
          "THE CONTRACTOR builds. Everything in the Site Practice pathway is aimed here.",
          "THE INDEPENDENT CONSULTANT (IESC), appointed by and reporting to the lenders, reviews before financial close and monitors afterwards.",
          "★ The engineer works for the client and can tell you what to do. The independent consultant works for the lenders and cannot. They observe and report — and the consequence arrives later, through the money.",
        ],
      },
      {
        heading: "Three instruments, three effects",
        body: "The financing agreement converts environmental and social requirements into money through three devices, often confused and behaving differently. A CONDITION PRECEDENT is a gate: something that must be satisfied before an event, usually financial close or a particular disbursement. If it is not met, the event does not happen — there is nothing to cure; the gate simply has not opened. A COVENANT is a continuing obligation for the life of the loan: maintain a management system, report on a cycle, comply with the applicable standards. Failure is a breach, usually with a cure period, and persistent or material breach reaches default. THE ACTION PLAN (ESAP) is a schedule of specific corrective actions, each with an owner and a date, annexed to the agreement. Some actions are tied to a disbursement — which is how an overdue action stops a payment.",
        points: [
          "★ The distance between a foreman not running an induction and a tranche not arriving is three steps. Most people believe it is infinite.",
        ],
      },
      {
        heading: "The cycle, and where you joined it",
        points: [
          "Screening and categorisation — the project is rated A, B or C on the magnitude of its potential impacts.",
          "Due diligence — the existing studies are reviewed against the applicable standards, gaps are identified, and the action plan is first drafted.",
          "Independent review before financial close, for Category A and some Category B projects.",
          "Financial close — the agreement is signed, and from that moment the standards are contractually binding.",
          "Construction — disbursements against milestones subject to conditions; the action plan runs; the consultant visits two to four times a year.",
          "Completion and operation — completion audits where required, monitoring continuing at reduced frequency for the life of the loan.",
          "★ Almost everyone reading this joined at construction — the requirements you work under were agreed by people you have never met, in a document you have never read, about a period before you arrived.",
        ],
      },
      {
        heading: "Category A, and what it brings",
        body: "EP4 Principle 1 requires every project to be categorised on the magnitude of its potential impacts. Category A means potential significant adverse impacts that are diverse, irreversible or unprecedented — major road corridors, ports, large hydropower, anything with significant resettlement or critical habitat. Category B means limited impacts, few in number, largely site-specific and reversible; Category C means minimal or none. Category A brings: a full assessment to lender scope, independent review before financial close, independent monitoring for the life of the loan, INFORMED consultation and participation rather than mere consultation, and public reporting. Almost every project in this programme is Category A.",
        points: [
          "★ If the requirements seem heavy, the accurate answer is that they match the risk category the project sits in — and the category was set by what the project does, not by anyone's preference.",
        ],
      },
      {
        heading: "The life of an action",
        body: "The action plan is the instrument you are most likely to meet by name: a list of actions, each with an owner and a date, annexed to the financing agreement, which makes every line a contractual commitment. Actions open from the due diligence, from a monitoring finding, from an incident or complaint — or from the project itself disclosing something, which is the origin that reflects best and is the rarest. A well-formed action has: a SPECIFIC deliverable, not an aspiration; a named owner, not a department; a date; the EVIDENCE that will close it — the field most often left blank; and whether it is tied to a disbursement. An action closes when the agreed evidence has been produced and VERIFIED. Not when the owner says it is done, not when a tracker says closed, and not because time has passed.",
        points: [
          "★ The commonest defect in any tracker is an action marked closed with no evidence attached. A reviewer reopens every one of them — and draws a conclusion about the tracker rather than about the actions.",
        ],
      },
      {
        heading: "What actually stops the money",
        points: [
          "A condition precedent unmet — the cleanest stop: nothing is disputed, the gate has not opened.",
          "Overdue action plan items tied to a disbursement — the commonest cause in practice, and the one nobody on site sees coming.",
          "A serious incident, particularly a fatality or a community incident — notification, a special report, and often a pause.",
          "A finding that the management system cannot be relied upon — slower and more damaging, because it reopens everything rather than one item.",
          "Regulatory action, or a complaint to an accountability mechanism — scrutiny the project does not control.",
          "★ Overdue actions are the usual cause, and the most preventable. Each one has a name against it.",
        ],
      },
      {
        heading: "Where you sit",
        body: "The point is not that you should read a financing agreement. It is that you should be able to place your own work in a chain that ends at a bank. Operating plant, driving, labouring: you are the last link, and what you do is the performance — everything above it is a plan. Supervising: you turn a plan into an instruction and a record — whether the induction happened, whether the register is contemporaneous, whether a problem is raised or absorbed. HR, procurement, camp management: you hold several action plan items without necessarily knowing it — contracts, age records, payslips, accommodation, subcontract clauses. E&S and HSE: you are the interface with the action plan and the consultant. Management: you decide what the trade is when a requirement costs programme or money — and whether the person who raised it is supported.",
        points: [
          "★ The induction that did not happen becomes an overdue action, and the overdue action becomes a tranche that does not arrive.",
        ],
      },
    ],
    activities: [
      {
        type: "match",
        title: "Three instruments, three effects",
        prompt: "Pair each instrument with what happens when it is not met.",
        pairs: [
          { l: "Condition precedent", r: "The gate does not open — the money is not released" },
          { l: "Covenant", r: "A breach, with a cure period; persistent breach reaches default" },
          { l: "ESAP action tied to a disbursement", r: "Overdue — and the payment it is tied to stops" },
          { l: "Incident notification threshold", r: "Immediate notification, on occurrence — not on the reporting cycle" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — the money",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "The independent consultant can instruct the contractor.", truth: false, tip: "Myth — they observe, assess and report to the lenders. The consequence arrives later, through the money." },
          { text: "Nobody on the project is more than three steps from the money.", truth: true, tip: "Fact — a missed induction becomes an overdue action, and an overdue action becomes a tranche that does not arrive." },
          { text: "An action closes when its owner confirms it is done.", truth: false, tip: "Myth — it closes when the agreed evidence has been produced and verified." },
          { text: "Standards become contractually binding at financial close.", truth: true, tip: "Fact — from signature, the Performance Standards are loan obligations, not guidance." },
          { text: "A serious incident is the commonest reason a disbursement stops.", truth: false, tip: "Myth — the commonest cause is overdue action plan items tied to a disbursement, and nobody on site sees it coming." },
        ],
      },
    ],
  },
  {
    id: "m4",
    code: "A4",
    order: 4,
    pathway: "A",
    title: "The ESMS",
    type: "quiz",
    duration: "12–15 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "schema",
    summary: "From a plan on a shelf to what happens on site.",
    tldr: "A management system is not a set of documents. It is the machinery that keeps the documents true and makes them operate. When people say a project has an ESMS but it does not work, what they mean is that it has the documents and not the machinery.",
    overview: "The seven elements PS1 requires and what each delivers, the difference between a policy, a plan, a procedure and a record, why organisational capacity is the element that fails most often, what makes an emergency arrangement real, the loop that changes things — and five questions that tell you which kind of system you have.",
    lesson: [
      {
        heading: "The plan nobody used",
        body: "A project holds a complete management system. Policy, procedures, plans for traffic, waste, borrow pits, camps, community engagement. Several hundred pages, approved, current, indexed. On site, the traffic management plan refers to two haul routes changed eleven months ago. The waste procedure names a disposal facility the project stopped using. The camp plan was written for 180 workers and there are 340. No supervisor has opened any of them. Nothing here was done in bad faith — the plans were produced by people who knew what they were doing and approved by people who read them. Then the project started, and the plans stopped. A management system is not a set of documents. It is the machinery that keeps the documents true and makes them operate.",
        image: "/images/lm3.jpg",
        caption: "When people say a project has a system but it does not work, what they mean is that it has the documents and not the machinery.",
      },
      {
        heading: "Seven elements",
        body: "PS1 requires a management system proportionate to the project's risks. Seven elements — and notice how much of the list is about people and authority rather than documents:",
        points: [
          "POLICY — what the organisation commits to, signed at the top, communicated to everyone including contractors. Real when someone on site can say roughly what it commits the project to; otherwise it is a poster.",
          "IDENTIFICATION OF RISKS AND IMPACTS — the assessment, across the whole area of influence including ancillary facilities. Real when a new borrow pit triggers an assessment rather than a mobilisation.",
          "MANAGEMENT PROGRAMMES — the plans, with measures, responsibilities, resources and timing. Real when they describe what is actually being done, revised when the works changed.",
          "ORGANISATIONAL CAPACITY AND COMPETENCY — named roles, real authority, adequate resourcing, competent people.",
          "EMERGENCY PREPAREDNESS AND RESPONSE — coordinated with authorities, communicated to communities.",
          "STAKEHOLDER ENGAGEMENT — disclosure, consultation, a grievance mechanism, and reporting back. Real when there are grievances in the register and complainants were told the outcome.",
          "MONITORING AND REVIEW — the only element that changes the other six.",
        ],
      },
      {
        heading: "Four words, four objects",
        body: "Policy, plan, procedure, record are used interchangeably on most projects and describe four different things. A POLICY is what we commit to — one or two pages, signed high up; nobody uses it daily; it sets the bar. A PLAN is what we will do about a defined risk over a defined period — managers use it to organise; it is the object that goes stale when the works change. A PROCEDURE is how one task is done, step by step — the person doing the task uses it at the moment of doing it. A RECORD is evidence that something happened — everyone uses it afterwards, including every external reader. A worker who asks what to do when he uncovers a grave needs a PROCEDURE. Handing him a ninety-page heritage plan is a correct answer to a question he did not ask — and it is why he will ask his foreman instead next time.",
        points: [
          "★ The test of a system is whether the person doing a task can reach the thing that tells them how, in under a minute, in a language they read.",
        ],
      },
      {
        heading: "The element that fails",
        body: "Of the seven, organisational capacity and competency produces the most findings and is hardest to fix, because it is not a document problem. What inadequate capacity looks like:",
        points: [
          "An E&S manager with no budget, who must ask for funds from the person whose programme the requirement affects.",
          "An E&S function reporting to the production manager — so every escalation goes through the person being escalated about.",
          "One officer for ninety kilometres of corridor and four hundred workers — a resourcing decision presented as a staffing level.",
          "No authority to stop work, so the only response to an unsafe condition is persuasion.",
          "Competence assumed rather than established. Contractor E&S staff paid by the contractor and measured on not causing delay.",
          "Every other element improves by producing something. This one improves only by a decision about money, reporting lines and authority.",
          "★ A reviewer who concludes the E&S function lacks authority will read every other finding in that light.",
        ],
      },
      {
        heading: "Has anyone driven it?",
        body: "The difference between a real emergency arrangement and a written one is four things. The scenarios are CREDIBLE for this project — a haulage collision involving community members, a bitumen spill in a settlement, a blasting incident, a camp fire, a flood affecting works and community together; not a generic fire-and-first-aid plan. The times are MEASURED, not assumed — drive from the furthest working point to the nearest facility with surgical capability and time it; on several corridors the honest answer is over three hours, which changes where the clinic goes and whether you work that chainage at night. People OUTSIDE the project know it exists — the health facility, the local authority and the community need to know what you will do, what you will not, and how to reach you at three in the morning. And it has been RUN — a drill, with the night shift included, with the lessons recorded.",
        points: [
          "★ A plan that has never been exercised is a description of an intention.",
        ],
      },
      {
        heading: "The loop that changes things",
        body: "Monitoring and review is what turns documents into a system, because it is the only element that changes the others. MONITOR: data collected against defined parameters at defined frequencies by competent people — breaks when data is collected and never looked at, or collected retrospectively. ASSESS: someone compares the data against the requirement and the trend and forms a view — breaks when nobody owns the comparison. ACT: a corrective action with an owner, a date and verification that the condition changed — breaks when actions are recorded and never verified. REVIEW: management examines whether the system as a whole is working and changes it — the step most often absent entirely.",
        points: [
          "★ Name one thing in this project's system that changed this year because of something that was monitored. If nobody can answer, you have a monitoring programme and not a management system.",
        ],
      },
      {
        heading: "Five questions",
        body: "These five tell you within ten minutes whether a project has a system or a set of documents. Is the traffic management plan current with the haul routes in use today? Who is the E&S lead, what is their budget, and can they stop work? How long does it take to get a serious casualty from the furthest chainage to surgical care? How would a worker raise a complaint about his supervisor? Name one thing in the system that changed this year because of something monitored. A working system answers all five with a name, a number or an example. A documented one answers with a document reference.",
        points: [
          "★ A project with rough documents and five confident answers will outperform a project with perfect documents and none of them, on every measure that matters.",
        ],
      },
    ],
    activities: [
      {
        type: "match",
        title: "How you know each element is real",
        prompt: "Pair each element with the sign that it actually operates.",
        pairs: [
          { l: "Policy", r: "Someone on site can say what it commits the project to" },
          { l: "Risk identification", r: "A new borrow pit triggers an assessment, not a mobilisation" },
          { l: "Organisational capacity", r: "The E&S lead has a budget and can stop something" },
          { l: "Emergency preparedness", r: "Somebody has driven the route to the hospital and timed it" },
          { l: "Stakeholder engagement", r: "Grievances exist — and complainants were told the outcome" },
          { l: "Monitoring and review", r: "Something changed this year because of something monitored" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — the system",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "A complete, approved document set proves the management system works.", truth: false, tip: "Myth — it proves the documents exist. The machinery is what keeps them true and makes them operate." },
          { text: "A worker facing a task needs a procedure, not a plan.", truth: true, tip: "Fact — a plan organises the risk for managers. A procedure tells the person doing the task what to do now." },
          { text: "Organisational capacity can be fixed by producing a better document.", truth: false, tip: "Myth — it improves only by a decision about money, reporting lines and authority, taken by someone senior." },
          { text: "An emergency plan that has never been drilled is a description of an intention.", truth: true, tip: "Fact — real arrangements have credible scenarios, measured times, external awareness and an actual drill." },
        ],
      },
    ],
  },
  {
    id: "m5",
    code: "A5",
    order: 5,
    pathway: "A",
    title: "KPIs & Reporting",
    type: "quiz",
    duration: "12–15 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "monitoring",
    summary: "From a form at the gate to a decision at a bank.",
    tldr: "Indicators are not a reporting exercise. They are the mechanism by which what a driver noticed becomes something a manager can act on and a lender can rely on — and the most important lesson in this module runs against instinct: a perfect number is a warning.",
    overview: "The five-link chain from a procedure to a disbursement and where it usually breaks, the four properties that make a number usable, leading and lagging indicators and the one that is both, the five families a financed project reports on, why a perfect number is a warning, and the five readers of one honest set of numbers.",
    lesson: [
      {
        heading: "The form at the gate",
        body: "A storeman signs an induction register. A driver reports that he nearly hit someone at a junction. A supervisor records a bund full of rainwater. A liaison officer logs a complaint about dust. None of those four thinks of themselves as producing data — each is filling in a form because they were told to. Eleven weeks later a page in a report to the lenders shows that near misses rose through the dry season, that they cluster at three junctions, and that two of the three are on a haul route the project changed in February. A decision follows: the route changes again, or the hours change, or somebody accepts a risk in writing.",
        image: "/images/lm14.jpg",
        caption: "Indicators are how what a driver noticed becomes something a manager can act on and a lender can rely on.",
      },
      {
        heading: "Five links, and one that usually breaks",
        points: [
          "1 · THE PROCEDURE — something happens and someone records that it happened. Breaks when it is not followed, or followed and not recorded.",
          "2 · THE DATA — a form, a register, a reading, made at the time by a named person. Breaks when recorded retrospectively, which makes it fiction.",
          "3 · THE INDICATOR — many data points compressed into a number you can compare over time and against a target. Breaks when defined differently in different months.",
          "4 · THE DECISION — somebody looks at the number, forms a view, and does something. THE COMMONEST BREAK: the number is produced, reported, filed, and nobody acts.",
          "5 · THE ASSURANCE — the lenders see performance they can rely on and the conditions on the money are met. Breaks when the records behind the numbers were found unreliable.",
          "★ Same test as the ESMS module: name one thing that changed this year because of a number.",
        ],
      },
      {
        heading: "Four properties, and a denominator",
        body: "A number missing any one of these can still be reported — and cannot be relied on. DEFINED: everyone calculating it uses the same definition, including subcontractors; a rate calculated on a different basis in two months is not a trend, it is two unrelated figures. SOURCED: traceable back to the records it came from; a number you cannot walk back to a register is an assertion. COMPLETE: covering everyone it should — an injury rate excluding the labour supplier's twenty-two workers is not your injury rate, and their absence is invisible in the number. COMPARABLE: against last period, against a target, against a benchmark. And watch the DENOMINATOR: most frequency indicators are a count divided by exposure, and the denominator is compiled separately, often by another department, and rarely checked.",
        points: [
          "★ Before comparing any rate to anything, establish that the denominator was compiled the same way. This one check finds more reporting errors than any other.",
        ],
      },
      {
        heading: "Leading, lagging, and the one that is both",
        body: "LAGGING indicators measure outcomes that already happened — injuries, spills, exceedances, grievances received. Reliable and countable, and they arrive too late to prevent what they measure. LEADING indicators measure the activities meant to prevent those outcomes — inspections completed, inductions delivered, permits audited, actions closed on time. Predictive, and easy to game: a hundred shallow inspections produce an excellent number and no safety, so check quality, not only quantity. THE NEAR MISS is both: a lagging indicator of an event that happened and a leading indicator of one that has not. A rising count is usually good news, because it means people are reporting. A falling count is usually bad news — and a count of zero is not a safety result.",
        points: [
          "★ How you respond to the first near miss a worker reports decides the value of that indicator for the rest of the project. Criticise the reporter once and the number is permanently worthless.",
        ],
      },
      {
        heading: "Five families",
        points: [
          "OCCUPATIONAL SAFETY — injury rates, lost days, near misses, inspections, training hours, permits.",
          "ENVIRONMENT — monitoring against limits for dust, noise, effluent and water; exceedances and their closure; waste by stream; fuel and water use; greenhouse gases where the threshold applies.",
          "SOCIAL AND COMMUNITY — grievances received, resolved and closed; average closure time; engagement events; community incidents; local employment and procurement.",
          "LABOUR — workforce by category INCLUDING third parties, written terms in place, age verification completed, accommodation occupancy against standard, worker grievances.",
          "LAND AND RESETTLEMENT — affected persons identified, compensated and paid; livelihood measures delivered; and land accessed without compensation, which should be zero.",
          "★ Mark each of your project's indicators as leading or lagging. Most projects find they report almost entirely lagging ones — every number they look at describes something that already went wrong.",
        ],
      },
      {
        heading: "A perfect number is a warning",
        body: "This runs against instinct and it is the most important thing in this module. Zero near misses this quarter does not mean excellent safety — it means nobody is reporting. Zero grievances beside a host community does not mean strong relations — it means the mechanism is unknown or distrusted. Every monitoring result within limits every month means the monitoring points are in the wrong places, the readings are not taken at the times that matter, or the data is reconstructed. Every action closed on time means items are being marked closed without evidence — a reviewer will sample five and reopen them. An injury rate far below the sector benchmark usually means under-reporting or a padded denominator. A real project has bad numbers in it. Their presence is evidence that the system detects. Their absence is evidence that it does not.",
        points: [
          "★ When a number looks perfect, ask why before reporting it as an achievement — and say in the report what you asked and what you found.",
        ],
      },
      {
        heading: "One set of numbers, five readers",
        body: "The site wants to know where to act this week, and fixes the thing the number points at before it becomes an incident. Project management wants to know where to put resources and what to escalate, and moves people and money. The borrower and the client want to know whether the project is deliverable and defensible, and answer to their own board or ministry. The lenders want to know whether the conditions attached to the money are being met, and release or withhold accordingly. And the independent consultant wants to know whether the picture the numbers paint matches the site — where the two diverge, the divergence is the finding. One set of honest numbers serves all five.",
        points: [
          "★ Two sets — a working one and a presentable one — is the worst document a project can hold. The existence of two versions is itself the finding, and no explanation survives it.",
        ],
      },
    ],
    activities: [
      {
        type: "match",
        title: "Who reads the numbers, and what they do",
        prompt: "Pair each reader with what they do with the report.",
        pairs: [
          { l: "The site", r: "Fixes the thing the number points at, this week" },
          { l: "Project management", r: "Moves people and money; decides what to accept" },
          { l: "The lenders", r: "Release or withhold; set the next visit's agenda" },
          { l: "The independent consultant", r: "Tests the numbers against the site — divergence is the finding" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — the numbers",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "Zero near misses this quarter is excellent safety performance.", truth: false, tip: "Myth — it means nobody is reporting. A rising near-miss count is usually the good news." },
          { text: "An injury rate that excludes the labour supplier's workers is incomplete.", truth: true, tip: "Fact — PS2 covers workers engaged by third parties, and their exclusion is invisible in the number itself." },
          { text: "Before comparing two rates, check the denominator was compiled the same way.", truth: true, tip: "Fact — this single check finds more reporting errors than any other." },
          { text: "A hundred inspections is proof of a strong safety culture.", truth: false, tip: "Myth — leading indicators are easy to game. An inspection that never finds anything is not an inspection." },
        ],
      },
    ],
  },
  {
    id: "m6",
    code: "A6",
    order: 6,
    pathway: "A",
    title: "Capstone: the full ESG simulation",
    type: "capstone",
    duration: "20–25 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "sports_esports",
    summary: "Twelve live decisions that decide whether the financing holds.",
    tldr: "No more reading — this is the game. Twelve situations from the whole course land on your desk, one by one. Every decision moves the project's financing health up or down. Get 10 of 12 right and the lenders stay with you.",
    glossary: [
      { term: "Financing health", plain: "The meter in the simulation — it stands for the lenders' confidence in the project. Good calls raise it, bad calls sink it." },
      { term: "Good call", plain: "The decision the course taught: protect people first, follow the stricter rule, report honestly, use the grievance mechanism." },
    ],
    overview:
      "The capstone brings the whole pathway together. You play the contractor’s site ESG lead through twelve real decisions on a lender-financed PPP project — each one moves the project's financing health. Score at least 10 of 12 to pass and keep the lenders on side.",
    lesson: [
      {
        heading: "How the capstone works",
        body: "There is no reading here — this module IS the simulation. You'll face twelve situations drawn from Modules A1–A5: environmental impacts, the rules, the financing, the ESMS and the KPIs. Choose wisely; the lenders are watching.",
        image: "/images/course-hero.jpg",
        caption: "Twelve live decisions on a financed project — everything you've learned, applied.",
      },
      {
        heading: "What you'll need",
        points: [
          "The mitigation hierarchy and E vs S impacts (A1).",
          "The stricter-standard rule and the four rulebooks (A2).",
          "Conditions, covenants and the action plan (A3).",
          "The ESMS: documents vs machinery (A4).",
          "Honest KPIs, and why a perfect number is a warning (A5).",
        ],
        image: "/images/lm2.jpg",
        caption: "Five modules of knowledge, one project to protect.",
      },
    ],
    objectives: [
      "Apply ESG judgement across the whole project lifecycle.",
      "Protect the project's financing through good ESG decisions.",
    ],
  },
  {
    id: "b1",
    code: "B1",
    order: 7,
    pathway: "B",
    title: "Land, Compensation & Livelihoods",
    type: "quiz",
    duration: "16–19 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "home_work",
    summary: "PS5 on a road corridor — and the one rule that cannot be undone.",
    tldr: "The area that stops more projects than any other. Who counts as affected (including the people who appear on no title), what full replacement cost really means, what makes a cut-off date enforceable — and the single rule in this whole pathway that cannot be corrected afterwards: never enter land before the money is available.",
    overview: "IFC Performance Standard 5 applied to a road corridor: the two kinds of displacement and the one everybody misses, the three eligibility categories, full replacement cost without depreciation, the cut-off date, livelihood restoration measured by outcome, and the sequencing rule on land entry.",
    lesson: [
      {
        heading: "The count that was wrong",
        body: "A census recorded 412 affected households on a section. It was done properly, over eleven days, by a competent firm. Eight months later, 63 more were found — almost all women running roadside trade, and pastoralist families whose grazing routes crossed the alignment. Neither group was present on the days the enumerators walked the corridor. The money was manageable. The credibility was not: once a community learns the count was wrong, every later figure is disbelieved, including the correct ones. Households already paid began to submit claims, reasoning that if the project was wrong once it might be wrong in their favour. The project spent two years rebuilding trust it lost in one afternoon.",
        image: "/images/lm6.jpg",
        caption: "A register built from titles is a correct list of owners — and a wrong list of the people your project has affected.",
      },
      {
        heading: "Compensation is step four, not step one",
        body: "PS5 is usually read as a compensation rulebook. It is not, or not first. It begins by requiring the project to AVOID displacement, and where avoidance is impossible to minimise it, by exploring alternative designs — the mitigation hierarchy from Pathway A, applied to people. On a road this matters enormously, because avoidance is cheap early and impossible later:",
        points: [
          "A thirty metre shift during design can remove twelve houses and four shops permanently.",
          "The same twelve houses, once the alignment is fixed, cost compensation, replacement sites, moving allowances, livelihood restoration, monitoring and two years of grievances.",
          "It depends on one thing: whether the social team sees the alignment BEFORE it is frozen.",
          "★ The cheapest resettlement measure available on any road project is a small change of alignment, agreed early.",
        ],
      },
      {
        heading: "Nobody moved, so nothing happened. Wrong.",
        body: "Two kinds of displacement. Physical means losing your home — counted correctly on most projects, because a house is visible. Economic means losing assets, access or income, whether or not you move — missed on almost all projects, and where most unresolved grievances come from. Missed routinely:",
        points: [
          "Roadside traders in the road reserve. Tenants, while the owner is paid. Employees of a displaced business. Sharecroppers.",
          "Herders whose seasonal route is severed — their claim is temporal, so a one-day census cannot see it.",
          "Users of firewood, water points and fishing access. Households whose remaining land is now too small to farm.",
          "A workshop that keeps its land and loses its frontage to an embankment.",
          "★ If someone can no longer earn what they earned before because of this project, they are displaced — even if nothing was taken from them.",
        ],
      },
      {
        heading: "Three categories, and the third is the one that matters",
        body: "PS5 sets out who is eligible, in three categories. (a) Formal legal rights, such as a certificate of occupancy: compensated for land and assets at full replacement cost. (b) No formal title but a claim recognisable under national law, including customary rights: same entitlement. (c) No recognisable legal right or claim to the land they occupy: not compensated for the land, but compensated for their structures and assets, and entitled to resettlement assistance and livelihood restoration. That third category is where PS5 departs furthest from national law, and on many African corridors it is a LARGE share of those affected. The reasoning is simple: her legal position decides whether she is paid for land. It does not decide whether your project has taken away her income.",
        points: [
          "★ Do not use the word 'squatter'. It is not a legal category, it implies wrongdoing, and it makes it easier to leave someone off a register. Say: a person without recognisable legal claim to the land they occupy.",
        ],
      },
      {
        heading: "Full replacement cost, and why depreciation is wrong",
        body: "PS5 requires compensation at full replacement cost: what it will cost the affected person to obtain an equivalent asset, with NO deduction for depreciation, INCLUDING transaction costs. So a twenty-two year old house is compensated at the cost of building an equivalent new one — not at construction cost less two percent a year for age. This feels wrong to anyone trained in valuation, because in valuation depreciation is correct. The difference is the purpose: the project is not buying an investment from a willing seller. It is depriving someone of shelter they did not choose to give up, and they must be able to obtain equivalent shelter with what they receive. And depreciation is not a technicality here — the oldest structures belong to the poorest households, so depreciation takes the most from the people with the least.",
        points: [
          "★ Also check what is missing: transaction costs, transport, the age and species of trees, the number of seasons of crops, and business income during transition.",
        ],
      },
      {
        heading: "Paying correctly is not the same as restoring a livelihood",
        body: "Two separate obligations — discharging the first does not discharge the second. PS5 requires that livelihoods are restored, and where possible improved; the measure is the OUTCOME, not the payment. Cash alone usually fails, and not because people spend badly: a lump sum meets urgent, rational needs first — fees, medicine, a debt, a roof. Land prices rise when two hundred households seek replacement land at once. A farmer with money and no land is not a farmer. And the payment often reaches the household head while the lost activity was run by someone else, usually a woman. Restoration means land for land where land is the livelihood, a trading position with actual footfall, transitional support until the new activity produces, and measurement against a baseline.",
        points: [
          "★ A market built 600 metres from the traffic is a correct payment and a destroyed livelihood. The trader's asset was the footfall, not the stall.",
        ],
      },
      {
        heading: "The average hides the people it hurts most",
        body: "A resettlement programme can restore average household income and still impoverish a quarter of the people affected. Only disaggregation shows it:",
        points: [
          "Female-headed households — less likely to hold title, less likely to be recorded as the affected party, less able to reach a payment point.",
          "Elderly people living alone — cannot rebuild, cannot re-establish an occupation, and rely on neighbours that relocation removes.",
          "People with disabilities — housing arrangements are specific, and access to a consultation or payment point may be impossible.",
          "Tenants and employees — lose home or work while the money goes to the owner.",
          "Herders and seasonal users — their claim is about time, not place; a one-day census cannot see them at all.",
          "★ Enumerate women separately, with female facilitators. Record women's assets in their own names. Send the process to people who cannot come to it.",
        ],
      },
      {
        heading: "Fix the date, or lose the argument forever",
        body: "A cut-off date fixes who is eligible. It protects the project against structures appearing after news of a compensation programme spreads — a real and predictable phenomenon. What makes it valid is not setting it. It is COMMUNICATING it:",
        points: [
          "Announce it in advance, in the languages people actually use, through channels they actually receive: meetings, local radio, places of worship, market announcements, notices along the corridor. Keep dated evidence of every one.",
          "Record what exists on the date — photographs and imagery of the corridor. That is what lets a later claim be assessed instead of argued about.",
          "Then open a grievance window, around sixty days, for anyone left off the register. Longer sounds generous and simply prolongs uncertainty for the people already correctly registered.",
          "★ A date you cannot prove you announced is one you can neither enforce nor afford to abandon.",
        ],
      },
      {
        heading: "One thing here cannot be undone",
        body: "Almost everything in this module can be corrected later. A depreciated valuation can be recalculated and topped up. A missing trader can be enumerated and paid. An unassessed borrow pit can be assessed. One thing cannot. PS5 requires that land is taken only after compensation has been MADE AVAILABLE — meaning the person can actually collect the money. Not calculated. Not approved. Not budgeted. Not sitting in an account they cannot reach. Once an excavator moves onto land that has not been paid for, every negotiation that follows happens with the works already there, and the person has lost the only leverage they had. Paying afterwards repairs the money and not the breach.",
        points: [
          "Three sentences that should stop work: 'The payment is being processed.' 'The community has agreed we can start.' 'We will regularise it later.'",
          "★ If you take one rule from this module: never enter land before the money is available. Everything else is fixable. This is not.",
        ],
      },
    ],
    activities: [
      {
        type: "order",
        title: "Put it in order: land access",
        prompt: "Your section needs access to a parcel next week. Put these five actions in the order they must happen.",
        items: [
          "Confirm the parcel is inside the resettlement register",
          "Enumerate who uses the parcel, including seasonal and informal users",
          "Value the losses at full replacement cost",
          "Make compensation available to every affected person",
          "Enter the land and begin works",
        ],
      },
      {
        type: "categorize",
        title: "Who is affected?",
        prompt: "Sort each situation: is this an affected person under PS5, or not?",
        categories: [
          { id: "yes", label: "Affected" },
          { id: "no", label: "Not affected" },
        ],
        items: [
          { id: "coc", text: "House inside the right of way, with a certificate of occupancy", cat: "yes" },
          { id: "stall", text: "Roadside stall on the road reserve, no papers", cat: "yes" },
          { id: "tenant", text: "Tenant family in a compound being acquired", cat: "yes" },
          { id: "field", text: "Field bisected — farmer keeps title and house", cat: "yes" },
          { id: "herd", text: "Grazing route crossing the alignment, no one present", cat: "yes" },
          { id: "far", text: "House 400 m away, unaffected by works or access", cat: "no" },
        ],
      },
      {
        type: "categorize",
        title: "Fix the number",
        prompt: "Is this compensation calculation correct at full replacement cost — or short?",
        categories: [
          { id: "ok", label: "Correct" },
          { id: "short", label: "Short" },
        ],
        items: [
          { id: "depr", text: "Construction cost of an equivalent house, minus 2% per year for age", cat: "short" },
          { id: "new", text: "Cost of an equivalent new house, plus transfer fees and transport", cat: "ok" },
          { id: "tree", text: "Flat rate per tree, regardless of species or age", cat: "short" },
          { id: "crop", text: "One season of crops, where the land is unusable for three", cat: "short" },
          { id: "land", text: "Land of equivalent productive potential, plus registration and legal fees", cat: "ok" },
          { id: "nego", text: "An amount the household negotiated and accepted, below replacement cost", cat: "short" },
        ],
      },
    ],
  },
  {
    id: "b2",
    code: "B2",
    order: 8,
    pathway: "B",
    title: "Workers, Subcontractors & The Camp",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "engineering",
    summary: "PS2 in practice: the workers you never employed are still yours.",
    tldr: "Labour findings are created by people who never think of themselves as making an E&S decision. Who counts as your worker (including the twenty men from the labour supplier), the four pay checks, the two absolute prohibitions, the camp — and why your real leverage sits in the subcontract.",
    overview: "IFC Performance Standard 2 applied to a construction workforce: scope by relationship rather than contract, terms and pay, the age rule that matters on a site, the six arrangements that mean someone cannot leave, the camp and the one design decision that matters, the worker grievance channel, and subcontractor management.",
    lesson: [
      {
        heading: "Twenty workers nobody employed",
        body: "A subcontractor brings twenty men onto your section through a labour supplier. Their contracts are with the supplier. They are paid in cash on Fridays by a man who visits once a week. He holds their identity documents, he says for safekeeping, because the camp has no lockers. A foreman mentions that two of them look young. He is told they are nineteen and twenty. Nobody can check, because the documents are with the supplier. Nobody here thinks they are doing anything wrong. And what is present is: retained documents, unverifiable ages on a hazardous site, cash with no payslip so no way to know whether the wage is lawful, no written terms, and no way for these men to raise anything with anyone.",
        image: "/images/lm7.jpg",
        caption: "Every one of those is a finding against your project. PS2 covers workers engaged by third parties — the contract distance is paperwork, not a defence.",
      },
      {
        heading: "Who counts as your worker",
        body: "PS2 defines scope by the relationship to the project, not by who signed the contract. Four groups:",
        points: [
          "Directly engaged — your own employees.",
          "Contracted workers — anyone engaged through a third party for core project functions: subcontractors, labour suppliers, security, catering, transport, plant hire with operators.",
          "Primary supply chain — workers of suppliers of essential goods: quarries, asphalt plants, sand operations. Covered where there is child or forced labour risk or significant safety issues.",
          "Migrant workers — engaged on substantially equivalent terms to comparable local workers.",
          "Two groups get forgotten almost everywhere: security guards, and drivers hired with their vehicle. Both usually third-party, both usually work the longest hours, and neither ever appears in a labour assessment.",
          "★ Ask who will be on site next Tuesday, then ask which of them appear on a payroll you control. The gap is usually a third to a half of the workforce.",
        ],
      },
      {
        heading: "Four checks that find most pay problems",
        body: "Written terms, in a language the worker understands, are a requirement. A contract in English handed to someone who reads only Hausa is a piece of paper, not terms. Then four checks:",
        points: [
          "Is there a payslip? Cash with no payslip makes every other check impossible — for you as much as for an auditor. Usually the cheapest thing on this list to fix.",
          "Do the deductions have a legal basis? Tax, social insurance and pension do. Tools, transport and PPE do not. A PPE deduction is a finding on its own.",
          "Is overtime paid at the lawful premium, on hours actually worked?",
          "Are statutory contributions REMITTED, not just deducted? Verify payment to the institution, not deduction from the worker.",
          "★ On hours, compare the busiest dry-season timesheets with the plant hour meters. Where the two diverge, the timesheets are the fiction.",
        ],
      },
      {
        heading: "On a construction site, the age is eighteen",
        body: "PS2 prohibits employing children in work that is exploitative, hazardous, harmful to health or development, or that interferes with education. It also applies a separate and stricter test, drawn from ILO Convention 182: nobody under eighteen in hazardous work. Almost everything on a civil works site IS hazardous work — operating or working near plant, work at height, confined spaces, electrical work, crushing, blasting, night shifts, heavy manual handling, solvents, bitumen, fuels. So the operative threshold on your site is eighteen, whatever the national minimum working age says. Verify at recruitment, with a documented method, and extend the verification to every third party — a supplier's assurance is not verification.",
        points: [
          "★ If you find someone under eighteen in hazardous work, remove them from that work and REMEDIATE. Do not simply dismiss them: a child dismissed from a site moves to work that is more dangerous and less visible.",
        ],
      },
      {
        heading: "Six arrangements that mean someone cannot leave",
        body: "Forced labour means work not performed voluntarily, exacted under threat of force or penalty. It almost never arrives labelled as such. It arrives as arrangements that each look administrative:",
        points: [
          "The employer holds identity documents — explained as safekeeping; the effect is that the worker cannot leave, travel or seek other work.",
          "A recruitment fee was charged — the worker starts in debt to the person who employs him.",
          "Wages withheld or paid far in arrears — a man owed three weeks cannot afford to walk away.",
          "Deductions for food, transport or accommodation consume most of the wage — he is working to stay, not to earn.",
          "Workers restricted from leaving the camp — security controls entry; a control that stops people leaving is a different thing.",
          "Penalties for resigning.",
          "★ Act on the indicator, do not wait for certainty. Documents go back the same day. And do not confront a supplier in front of his workers: they carry the retaliation risk, not you.",
        ],
      },
      {
        heading: "The camp, and the one design decision that matters",
        body: "Where the project provides accommodation, PS2 requires policies on its quality and management. The figures come from the IFC and EBRD guidance note on workers' accommodation — read them there rather than from memory. What gets assessed: floor area and occupancy, toilets and showers per person separated by sex, lighting and lockable doors, water, food safety, ventilation and heat, women's accommodation, fire safety and drills, medical access, and any deductions for accommodation. The recurring failures are predictable: occupancy set by the number of beds that fit rather than by the ratio; triple bunks; facilities counted against nominal capacity instead of peak occupancy; showers that exist and are unlit, which makes them unusable at night; catering subcontracted and never inspected.",
        points: [
          "★ Manage the camp separately from employment, so a worker who complains about the camp is not risking the bed and the job together. That single design decision does more for camp conditions than any inspection regime.",
        ],
      },
      {
        heading: "A channel the twenty men can actually reach",
        body: "PS2 requires a grievance mechanism for workers: available to directly engaged AND contracted workers, prompt, understandable, giving timely feedback, operating without retribution. Four design rules decide whether it works:",
        points: [
          "It is not the community mechanism — different users, different subjects, different confidentiality.",
          "It must reach contracted workers — so it cannot depend on a company email, an intranet, or a box in an office they never enter.",
          "It cannot run only through the line manager, because a large share of worker complaints are about the line manager.",
          "Retaliation kills it. The first case sets the credibility: if the first person to use it is identified and not renewed, the channel is dead and everyone knows it.",
          "★ A mechanism with no grievances on a workforce of several hundred is not a good result. It means the channel is unknown, distrusted or unsafe. Report it that way.",
        ],
      },
      {
        heading: "Your leverage is in the subcontract",
        body: "Most of this module is not an HR subject. It is a procurement one, and that is where the leverage sits:",
        points: [
          "Screen before award — registration, licences, insurance, past performance, and whether the third party has any labour management system at all. A supplier with no written terms for its own workers will not produce them for yours.",
          "Flow down SPECIFICALLY, not generally: written terms, age records, no recruitment fees, no retention of documents, PPE at the employer's cost, accommodation standards, access to your grievance mechanism, right of audit.",
          "Induct the subcontractor's MANAGEMENT, not only its workers. The person who decides how many beds go in a room needs to have been told the rule.",
          "Then verify: payroll sampling, age records, camp inspection, worker interviews away from supervisors. An assurance letter is not verification.",
          "★ One reliable early indicator: a supplier priced well below the market is absorbing a loss or evading a cost others bear — and the cost most often evaded is labour.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Covered by PS2, or not?",
        prompt: "Is this person covered by PS2 as your worker?",
        categories: [
          { id: "cov", label: "Covered" },
          { id: "not", label: "Not covered" },
        ],
        items: [
          { id: "guard", text: "A security guard from a private firm", cat: "cov" },
          { id: "driver", text: "A driver hired with his tipper truck", cat: "cov" },
          { id: "kitchen", text: "A caterer's kitchen staff", cat: "cov" },
          { id: "shop", text: "A shopkeeper in the village who sells to your workers", cat: "not" },
          { id: "quarry", text: "Workers at the quarry supplying most of your aggregate", cat: "cov" },
          { id: "inspector", text: "A government inspector visiting site", cat: "not" },
        ],
      },
      {
        type: "categorize",
        title: "Indicator, or ordinary practice?",
        prompt: "Forced labour indicator, or ordinary practice?",
        categories: [
          { id: "ind", label: "Indicator" },
          { id: "ord", label: "Ordinary" },
        ],
        items: [
          { id: "docs", text: "Employer holds identity documents", cat: "ind" },
          { id: "fee", text: "A placement fee deducted from the first month", cat: "ind" },
          { id: "arrears", text: "Wages paid monthly in arrears as stated in the contract", cat: "ord" },
          { id: "exit", text: "Workers cannot leave the camp outside working hours", cat: "ind" },
          { id: "entry", text: "Security checks at the camp entrance", cat: "ord" },
          { id: "net", text: "Deductions leaving almost no net pay", cat: "ind" },
        ],
      },
      {
        type: "order",
        title: "Manage the subcontractor, in order",
        prompt: "Put the subcontractor labour management steps in the order that works.",
        items: [
          "Screen the third party before award",
          "Flow specific labour obligations into the subcontract",
          "Induct the subcontractor's management",
          "Verify through payroll sampling, age records and worker interviews",
          "Act contractually on what you find",
        ],
      },
    ],
  },
  {
    id: "b3",
    code: "B3",
    order: 9,
    pathway: "B",
    title: "Communities, Traffic & Labour Influx",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "groups",
    summary: "The biggest risk is not on your site — it is the fleet, on a public road.",
    tldr: "Assigned to the full workforce, because the people who control the dominant risk are drivers and plant operators, not managers. Haulage on public roads, what arriving workers do to a place, the health pathways nobody designed, severance, and an emergency plan that has actually been driven.",
    overview: "IFC Performance Standard 4 applied to a road corridor: why haulage is different from ordinary traffic and what actually reduces it, labour influx reduced before it is managed, community health pathways, severance and access, and emergency preparedness with the community in it.",
    lesson: [
      {
        heading: "The biggest risk is not on your site",
        body: "Ask a site team what the biggest safety risk is and you will hear about work at height, or excavations, or plant movement. All real. None of them is the answer. On a road project in this region, the activity that kills the most people is haulage on public roads: tippers, bowsers and low-loaders, on roads used by children walking to school, traders, livestock and motorcycles. The World Health Organization reports the African region as having the highest road traffic death rate of any region in the world — and a construction project adds heavy vehicles, driven under schedule pressure, to those roads. PS4 requires the project to anticipate and avoid impacts on community health and safety in ROUTINE circumstances. A daily haulage cycle is routine. Its risks are foreseeable.",
        image: "/images/lm8.jpg",
        caption: "A fatality inside the fence produces an investigation. A fatality on the haul road produces that, plus a community that has lost a child to a project it did not ask for.",
      },
      {
        heading: "Why haulage is different from ordinary traffic",
        body: "Three things make it different, and each points to a different control:",
        points: [
          "The vehicles are heavy and the other road users are not. A loaded tipper meeting a pedestrian, a motorcycle or livestock is not a collision between equals — so the control cannot be shared responsibility. It has to sit with the vehicle.",
          "The exposure repeats. The same fleet passes the same points several times a day for months. A dangerous location is not met once; it is met a thousand times. Every incident at one of those points was foreseeable.",
          "The pressure is built in. Cycle time drives production. Nobody tells a driver to speed — the incentive is in how progress is measured. So speed has to be engineered, not requested.",
          "★ Map the hazard points before anything else: schools and their REAL opening times, markets and their days, water points, informal crossings, livestock routes, junctions.",
        ],
      },
      {
        heading: "What actually reduces haulage risk",
        body: "A traffic management plan is a document. What reduces risk is a short list of decisions, most taken away from the road:",
        points: [
          "ROUTING. The shortest route is often the most populated. A longer route avoiding a settlement, a school and a market removes more risk than every other control combined. A commercial decision, made as one.",
          "TIMING. No haulage through defined zones at school opening and closing, and on market days — built into the production plan, not bolted onto it.",
          "SPEED, ENGINEERED. Governors fitted, tracking data reviewed by someone who can act. A limit nobody monitors is an aspiration.",
          "DRIVER HOURS. Maximum hours, mandatory rest, rotation. Fatigue is created by the schedule, not by the driver.",
          "FLEET CONDITION. Brakes, tyres, mirrors, reversing alarms, and loads covered.",
          "★ Routing removes the encounter. Everything else only reduces how bad the encounter is.",
        ],
      },
      {
        heading: "What arriving workers do to a place",
        body: "Three hundred workers arriving beside a village of two thousand is not a neutral event. The effects are documented and repeated, which is why PS4 treats them as impacts to assess rather than circumstances to regret:",
        points: [
          "Prices rise — staples, rent, fuel and transport, in a local economy that suddenly has several hundred wage earners in it.",
          "Water and sanitation come under pressure, and the people who walk further for water are women and girls.",
          "The clinic sized for a village now serves a village plus a workforce.",
          "Communicable disease moves in both directions, and stays in the community after the project leaves.",
          "Large income gaps produce transactional sex, including with minors — covered in full in Module B4.",
          "Local hiring expectations get disappointed, and children leave school for casual work around the camp.",
          "★ Every one of these is predictable. None of them is an accident, and all of them are assessable before the first worker arrives.",
        ],
      },
      {
        heading: "Reduce the number before you manage the camp",
        body: "It is the mitigation hierarchy again: fewer people arriving beats better accommodation for the people who arrive. REDUCE: hire locally, genuinely — every role filled locally is one person who does not arrive, does not need a bed, and does not need a share of the water. Train to widen what 'local' means. Transport rather than accommodate, where the workforce is within commuting distance. Phase the workforce, because peak numbers are usually short. THEN MANAGE: camp siting away from the settlement, with its own water and its own waste; self-sufficiency in food, power and health; a signed code of conduct; agreed no-go areas; local buying that is spread and given notice, so it supports the economy instead of inflating it.",
        points: [
          "★ A camp connected to the village borehole is a design error that no management procedure corrects.",
        ],
      },
      {
        heading: "The health pathways nobody designed",
        body: "Most of the health effects a road project has on a community are created by activities undertaken for entirely unrelated reasons:",
        points: [
          "STANDING WATER. Borrow pits, poorly drained excavations and blocked culverts hold water after the rains, creating mosquito breeding sites within walking distance of housing. On a corridor through a malaria area this is the largest and longest-lasting health impact of the whole works.",
          "Dust on housing, on drying food, and on the road where it reduces visibility.",
          "Camp effluent, workshop run-off and fuel reaching a stream people drink from or wash in.",
          "Open excavations beside paths people walk at night.",
          "Fuel, bitumen and solvents moving through settlements.",
          "Night piling and blasting near houses — lost sleep is a health impact and a cracked wall is a livelihood one.",
          "★ Pit closure is a health decision as much as an environmental one. Design it before extraction starts, not after.",
        ],
      },
      {
        heading: "A road connects places and cuts others in half",
        body: "Severance is a real impact and it is usually unassessed, because it produces no land acquisition and no construction incident. A settlement split, with the school on one side and most of the children on the other. A field or a well now across a carriageway that is hard to cross. A market cut off from the people who used to walk to it. A footpath ending at an embankment. It appears years later, as a pattern of pedestrian deaths at an informal crossing the design did not provide for. The controls are design controls: crossings where people ACTUALLY cross, underpasses or livestock crossings where the flow justifies them, service roads keeping local access, median breaks where local movement needs them. Cheap at design stage. Unaffordable afterwards.",
        points: [
          "★ Walk the alignment with community members and ask where people cross, not where they should cross. Informal crossings appear on no drawing — and that is where the deaths happen.",
        ],
      },
      {
        heading: "Three hours to a hospital",
        body: "PS4 requires emergency arrangements that take account of affected communities, coordinated with local authorities and communicated to the people who would be affected. Three failures recur: the plan covers the workforce only — a fuel tanker overturning in a village is a community emergency, and a plan that mobilises the site medic and says nothing about evacuating houses is incomplete. The plan has never been driven — the time from the furthest working point to a facility with surgical capability is a measurable number; measure it. On several corridors the honest answer is over three hours, and that changes where the clinic goes and whether you work that chainage at night. And nobody outside the project knows it exists — the district health facility, the local authority and the community need to know what you will do, what you will not, and how to reach you at three in the morning.",
        points: [
          "★ An emergency plan that has never been driven is not a plan. It is a document about a plan.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Removes the encounter, or only reduces it?",
        prompt: "Does this control remove the encounter, or only reduce how bad it is?",
        categories: [
          { id: "rem", label: "Removes it" },
          { id: "red", label: "Only reduces it" },
        ],
        items: [
          { id: "reroute", text: "Reroute around the village", cat: "rem" },
          { id: "gov", text: "Fit speed governors", cat: "red" },
          { id: "hours", text: "Ban haulage at school hours", cat: "rem" },
          { id: "banksman", text: "Post a banksman at the school gate", cat: "red" },
          { id: "cover", text: "Cover the loads", cat: "red" },
          { id: "pit", text: "Source from a pit on the works side of the village", cat: "rem" },
        ],
      },
      {
        type: "categorize",
        title: "Reduce influx, or manage it?",
        prompt: "Does this measure reduce the number of people arriving, or manage those who arrive?",
        categories: [
          { id: "reduce", label: "Reduces influx" },
          { id: "manage", label: "Manages it" },
        ],
        items: [
          { id: "local", text: "Hire and train locally", cat: "reduce" },
          { id: "site", text: "Site the camp away from the settlement", cat: "manage" },
          { id: "bus", text: "Bus workers in daily from within commuting distance", cat: "reduce" },
          { id: "bore", text: "Give the camp its own borehole", cat: "manage" },
          { id: "phase", text: "Phase the workforce to cut the peak", cat: "reduce" },
          { id: "nogo", text: "Agree no-go areas with the community", cat: "manage" },
        ],
      },
    ],
  },
  {
    id: "b4",
    code: "B4",
    order: 10,
    pathway: "B",
    title: "Harassment, Security & Human Rights",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "security",
    summary: "The three rules with no exceptions, and the people who guard the project.",
    tldr: "This module covers sexual exploitation, abuse and harassment, and the conduct of the people who guard the project. It contains no graphic content. You can stop at any point and come back. If anything here affects you personally, support is available — the project's named responder can be reached through your training administrator, at any time.",
    overview: "Why the project owns this risk, the three distinct things behind SEA/H, the three absolute rules, the prevention architecture that must exist before mobilisation, what to do — and not do — if someone tells you something, and the six requirements governing security personnel, including where public forces protect the project.",
    lesson: [
      {
        heading: "Before we start",
        body: "This module covers sexual exploitation, abuse and harassment, and the conduct of people who guard the project. It contains no graphic descriptions and no images of people. It does describe situations that some people will recognise from their own lives. You can stop at any point and come back, or not come back — nobody is told whether you completed it in one sitting. If anything here affects you personally, support is available: the project's named responder and referral pathway can be reached through your training administrator, including outside working hours. The reason this module exists is simple: a project like this one creates situations that put some people at risk. Everyone working here needs to know the rules, and everyone needs to know where to report.",
        points: [
          "★ You do not need to be the person affected to use the reporting route. If you see something, or are told something, it is yours to pass on.",
        ],
      },
      {
        heading: "Why this is about the project, not about individuals",
        body: "This project brought several hundred regular wages into a place where most people have far less cash. It brought supervisors who decide who works tomorrow. It brought gatekeepers who control access to jobs, to compensation files, to the grievance channel and to the site. Every one of those relationships holds an imbalance of power. Most of the time nothing happens. Where something does happen, it happens through that imbalance, and it almost never looks like force. It looks like a supervisor mentioning that shifts are being decided this week. A gatekeeper suggesting a way to make an application move. An arrangement offered in exchange for food, for work, or for a file to progress. That imbalance was created by the project. So the risk arising from it belongs to the project, not only to whoever acts on it.",
        image: "/images/lm9.jpg",
        caption: "This is why it is treated as a risk to be designed out, not only as misconduct to be punished after the fact.",
      },
      {
        heading: "Three different things",
        body: "The letters SEA/H cover three categories, kept separate because the people involved, the rules and the response all differ:",
        points: [
          "Sexual EXPLOITATION — abusing a position of power, trust or someone's vulnerability for sexual purposes, including profiting from it. Typically a project worker and a community member.",
          "Sexual ABUSE — physical intrusion of a sexual nature, by force or under coercive conditions. A criminal matter everywhere this project operates.",
          "Sexual HARASSMENT — unwelcome sexual conduct, remarks or requests. Usually between people working here, often supervisor to worker.",
          "Why separation matters: a harassment complaint between two workers is handled through the worker grievance process. An allegation involving a community member is not — it needs confidentiality a workplace process cannot give, and a referral to services a workplace process does not have.",
          "★ Running all three through one channel either exposes people or buries complaints. Usually both.",
        ],
      },
      {
        heading: "Three rules with no exceptions",
        body: "Almost everything in this pathway involves judgement. These three do not.",
        points: [
          "ONE. No sexual activity with anyone under eighteen. No exception. Believing someone was older is not a defence. This rule applies whatever the age of consent is in national law, because it is the rule this project sets for itself and everyone it engages.",
          "TWO. No exchange of money, work, goods, assistance or any project benefit for sex. Including anything presented as a gift, a favour, or help with an application.",
          "THREE. No retaliation against anyone who reports, supports a report, or takes part in an investigation. Retaliation is treated as seriously as the conduct reported.",
          "These three rules are in the code of conduct that every person on this project signs, including every subcontractor and every supplier.",
          "★ The rules do not prohibit relationships between adults. Where one person decides the other's shifts, file or pay, the relationship must be declared and that decision moved to someone else.",
        ],
      },
      {
        heading: "What has to exist before anything happens",
        body: "Prevention is a set of things that must be in place before mobilisation, not a training session after an incident:",
        points: [
          "A risk assessment: where are the gatekeeping points, and where does the workforce meet the community?",
          "A code of conduct signed INDIVIDUALLY, by name, after it has been explained, in a language the person understands. Company-level signature by a subcontractor binds a company and tells no worker anything.",
          "Training that works — the test is whether a worker can state the rule about minors and name where to report, without being prompted.",
          "A reporting route built for this: more than one entry point, at least one outside the management line and at least one reachable without entering a project facility.",
          "A referral pathway identified and confirmed in advance: health, psychosocial, legal, and police if the person wants it.",
          "Lighting, lockable doors, separate women's facilities, agreed no-go areas. Physical controls do more than policies.",
          "★ If a community member has to walk through the gate she is afraid of in order to report, the channel does not exist.",
        ],
      },
      {
        heading: "If someone tells you something",
        body: "Most disclosures reach someone who was not expecting one. That person is often not trained. It may be you.",
        points: [
          "Move somewhere private. Listen. Take the account once, in their words.",
          "Do not ask what happened in detail. You are not the investigator, and each retelling causes harm.",
          "Ask what they need and what would make them safe. Do not decide for them, and do not arrange anything they have not agreed to.",
          "Be honest about confidentiality: explain who you will need to tell and why, BEFORE you tell anyone. Never promise you will tell nobody, because you cannot deliver it.",
          "Explain the options — health care, support, and police if they choose. Do not advise them either way; that decision is theirs.",
          "Then refer to the named trained person. Do not investigate. Do not approach anyone named. Never bring the two people together.",
          "★ Three things are never acceptable: mediation between the two people, a payment to close a complaint, or an identifiable description in any report.",
        ],
      },
      {
        heading: "The people who guard the project",
        body: "A guard sits in two frameworks at once. Under PS2 he is a worker, usually engaged through a third party, owed written terms, lawful pay, reasonable hours and a grievance channel. Under PS4 he is a risk to the community. Projects that manage only one half manage neither. Six requirements: assess the security risk first, which usually establishes that arming the guard force is not warranted; screen individuals for past abuses; train in conduct and use of force before deployment; set written rules — force only for preventive and defensive purposes, proportionate to the threat; give the community a way to raise concerns about security conduct, and make sure it is NOT the guard post — the requirement most often missing; and investigate allegations. Quietly removing a guard so the provider can redeploy him elsewhere is not action.",
        points: [
          "★ Where the state deploys police or military to protect the project, you do not command them. You are still expected to engage on the deployment, document what you asked for, and escalate what you hear.",
        ],
      },
      {
        heading: "An empty register is a question, not a result",
        body: "A project with several hundred workers beside a host community, reporting no complaints of this kind in a quarter, has not demonstrated that nothing is happening. It has demonstrated that nobody used the channel — which usually means one of three things: the channel is unknown, it is not trusted, or using it is not safe. The most common failure in this area is not a cover-up. It is a project that waits for a complaint it has made structurally impossible to submit, and then reports a clean register in good faith. So the questions to ask are not about the numbers. Can a woman in the village name the person she would tell? Can she reach them without entering the gate? Does she believe anything would happen? And does everyone on this project, including the labour supplier's people, know the three rules?",
        points: [
          "★ Report an empty register as an open question about the channel, not as a performance result. A reviewer will read it that way regardless of your covering note.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Which pathway?",
        prompt: "Workplace pathway (worker grievance process), or community pathway (separate channel)?",
        categories: [
          { id: "work", label: "Workplace pathway" },
          { id: "comm", label: "Community pathway" },
        ],
        items: [
          { id: "remarks", text: "A supervisor making unwelcome remarks to a worker", cat: "work" },
          { id: "file", text: "A gatekeeper suggesting a compensation file could move faster", cat: "comm" },
          { id: "pressure", text: "Two colleagues, one repeatedly pressuring the other", cat: "work" },
          { id: "food", text: "A worker offering food to a community member in exchange for sex", cat: "comm" },
        ],
      },
      {
        type: "categorize",
        title: "Do, or do not?",
        prompt: "Someone has just told you something. Sort each response.",
        categories: [
          { id: "do", label: "Do" },
          { id: "dont", label: "Do not" },
        ],
        items: [
          { id: "once", text: "Take the account once, in their words", cat: "do" },
          { id: "details", text: "Ask for details of what happened", cat: "dont" },
          { id: "explain", text: "Explain who you will need to tell, before telling them", cat: "do" },
          { id: "promise", text: "Promise you will tell nobody", cat: "dont" },
          { id: "accompany", text: "Offer to accompany them to a service", cat: "do" },
          { id: "clearup", text: "Suggest speaking to the person named to clear it up", cat: "dont" },
        ],
      },
    ],
  },
  {
    id: "b5",
    code: "B5",
    order: 11,
    pathway: "B",
    title: "Pollution, Borrow Pits & Waste",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "recycling",
    summary: "PS3 on a civil works site — and the one hole that engages six standards.",
    tldr: "Pollution control is the part of E&S technical teams find most familiar, which is exactly why it fails: everyone assumes the controls are known and applied, and the last part is usually false. Small, known, cheap controls — deferred. And the borrow pit: the single activity that generates findings under six standards at once.",
    overview: "IFC Performance Standard 3 and the EHS Guidelines on a civil works site: the hierarchy applied to pollution, where the numbers come from, dust, water and noise, borrow pits and closure designed before extraction, waste segregation and the disposal trail, fuel and spills, and greenhouse gases.",
    lesson: [
      {
        heading: "Four days, and half a per cent",
        body: "On a coastal section, earthworks ran through the rainy season with no silt fencing and no settlement ponds. Sediment reached a creek used for fishing and washing. The community reported a collapse in catch and skin complaints among children. The fix was silt fences, check dams and a settlement pond — a fraction of one per cent of the section value, four days to install. What the omission cost: a work stoppage, a lender finding with a corrective action plan, a water monitoring programme imposed for the rest of construction, and a community relationship that never fully recovered. Almost every control in this module has that same shape: small, known, cheap, and deferred.",
        image: "/images/lm10.jpg",
        caption: "The gap between what prevention costs and what failure costs is the whole economic argument for this module.",
      },
      {
        heading: "Most sites start at step three",
        body: "PS3 requires pollution to be avoided or minimised, and the hierarchy applies unchanged. Take dust from a haul road past a settlement. AVOID: route the haulage away, source material from a pit on the works side, or seal the section permanently. MINIMISE: reduce speed — which cuts dust more than most people expect — fewer trips, covered loads. CONTROL: bowsers on a schedule matched to weather and traffic, not to a fixed timetable; screens at the closest houses. COMPENSATE: what is left, and what is owed for it. Teams reach straight for the bowser, which is step three, and then argue about how many bowsers. The question nobody asked was whether the haulage needed to pass the settlement at all — and that question had an answer when the pit was chosen.",
        points: [
          "★ A control applied at step three is not wrong. It is incomplete if steps one and two were never considered and written down.",
        ],
      },
      {
        heading: "Where the numbers come from",
        body: "PS3 sets the requirement. The EHS Guidelines set the levels — without them most of PS3 cannot be measured. The rule is in the Guidelines themselves: where a national regulation differs from the Guideline level, you achieve whichever is stricter. Run it parameter by parameter, not document by document — a national standard may be stricter on one parameter and absent on the next. For each parameter, write down the national limit with its source and the Guideline level with its table reference. Take the stricter. Where there is no national limit, the Guideline governs and there is nothing to compare. Keep the written comparison: it is the first thing an independent consultant will ask for. And note Section 4 of the General Guidelines — construction and decommissioning — the one written for projects like yours.",
        points: [
          "★ Noise is the clearest example: many national regulations set one figure with no day and night split. The Guidelines set a lower night limit, so the night limit governs.",
        ],
      },
      {
        heading: "Dust, water, noise",
        points: [
          "DUST. Suppress where there are receptors, on a schedule matched to conditions. Cover loads. Reduce speed, which costs nothing. NEVER use waste oil for suppression — it is a contamination event presented as a dust control. And measure at the RECEPTOR, not at the source: a reading at the plant boundary tells you nothing about the house downwind.",
          "WATER. Sediment is the largest impact and the cheapest to control: silt fences, check dams, settlement ponds, and timing clearance against the rains. Concrete washout is high pH and lethal to aquatic life — contain it. Treat camp and workshop effluent, and sample the receiving water where people actually use it, downstream. Establish a borehole's yield and its existing users BEFORE abstracting.",
          "NOISE. Night limits are lower than day limits — sleep disruption is a health impact. Before blasting, survey the condition of nearby structures, or every crack for two kilometres becomes yours and you cannot prove otherwise.",
          "★ Three controls cost nothing and are skipped anyway: reduce speed, cover loads, and sample downstream where people draw water.",
        ],
      },
      {
        heading: "One pit, six standards",
        body: "A borrow pit is the most under-managed environmental issue on African road projects, and the only single activity that can generate findings under six standards at once. Outside the assessed scope: PS1. Extraction without a mineral title: national law — in most jurisdictions a borrow pit is a MINING activity requiring a title from a different authority than the one that gave you your environmental permit. Dust, noise, sediment and fuel at the pit: PS3. An unfenced face and standing water near housing: PS4 — drowning risk and vector breeding. Land taken from users, including seasonal ones: PS5. Clearance without habitat screening: PS6. Something uncovered during excavation: PS8.",
        points: [
          "A landowner's consent does not confer a mineral right. The two are held by different authorities, and a signature from one does not substitute for the other.",
          "★ No other activity on a road project produces that many findings from a single omission.",
        ],
      },
      {
        heading: "Design the closure before you dig",
        body: "This is the counter-intuitive part, and it is the whole point of the pit screens. A pit worked for maximum yield is deep, steep-faced and irregular. It cannot be safely closed afterwards at any price, because the material to backfill it no longer exists nearby and the faces cannot be battered without removing more than the pit produced. A pit designed for closure is benched, with battered faces, a planned final profile, topsoil stripped and stockpiled separately from day one, and drainage that stops it holding water. It yields somewhat less — and it can be closed.",
        points: [
          "Six things are decided BEFORE the first excavator arrives: topsoil handling, final profile, benching, drainage, fencing during operation, and a closure budget line. None can be retrofitted.",
          "Topsoil driven over and mixed with overburden is gone — reinstatement then means importing a growing medium at real cost.",
          "★ Handing back a nine-metre flooded hole is not a handover. It is the transfer of a hazard to people with no means to manage it.",
        ],
      },
      {
        heading: "One filter contaminates the whole skip",
        body: "PS3 requires waste to be avoided, then reduced, reused or recycled, then treated and disposed of properly. The most common waste failure on a construction site is a single act: someone puts a used oil filter in a general skip. Hazardous mixed with general contaminates the whole load, turning a small quantity of controlled waste into a large one. Segregate: general, inert construction, recyclable, hazardous, medical from the camp clinic, and sludge from treatment systems and interceptors. For every hazardous load, the record answers four questions: what it was, how much, who carried it, and where it ended up. A carrier's receipt is not a disposal record — verify the facility and keep its licence on file. And empty drums have local value; some end up holding drinking water. Render hazardous containers unusable before they leave site.",
        points: [
          "★ A site reporting no spills is a site not reporting spills, and an auditor reads it exactly that way.",
        ],
      },
      {
        heading: "The data already exists",
        body: "PS3 requires greenhouse gas emissions to be reduced, and quantified where the project is expected to exceed 25,000 tonnes of CO2-equivalent a year — a threshold a large road programme generally crosses. The sources are plant and haulage fuel, generator and purchased power, cement, lime and bitumen, and land clearance. The data almost always exists already, because the commercial team records fuel and materials for cost reasons; what is usually missing is anyone whose job it is to convert it. The reductions available are also cost reductions: haulage distance is the biggest lever on a road project, and pit selection decides it. Then material reuse and cut-to-fill balance, cement content where the specification allows, and plant idling — invisible in cost reporting and large in aggregate.",
        points: [
          "★ Every significant emissions reduction on a road project is also a cost reduction. The obstacle is not data and not money — it is that nobody owns the conversion.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Avoidance, or a later step?",
        prompt: "For dust from a haul road: is this control avoidance, or a later step of the hierarchy?",
        categories: [
          { id: "avoid", label: "Avoidance" },
          { id: "later", label: "Later step" },
        ],
        items: [
          { id: "route", text: "Route haulage away from the settlement", cat: "avoid" },
          { id: "bowser", text: "Run bowsers twice a day", cat: "later" },
          { id: "source", text: "Source material from a pit on the works side", cat: "avoid" },
          { id: "cover", text: "Cover the loads", cat: "later" },
          { id: "screen", text: "Fit dust screens at the nearest houses", cat: "later" },
        ],
      },
      {
        type: "categorize",
        title: "Decided before extraction, or can wait?",
        prompt: "Which pit decisions must be taken before the first excavator arrives?",
        categories: [
          { id: "before", label: "Before extraction" },
          { id: "wait", label: "Can wait" },
        ],
        items: [
          { id: "topsoil", text: "Topsoil stripping and separate stockpiling", cat: "before" },
          { id: "profile", text: "Final profile and side slopes", cat: "before" },
          { id: "drain", text: "Drainage to prevent standing water", cat: "before" },
          { id: "fence-end", text: "Which contractor removes the fencing at the end", cat: "wait" },
          { id: "bench", text: "Benching rather than a single deep face", cat: "before" },
          { id: "species", text: "The exact reinstatement planting species", cat: "wait" },
        ],
      },
      {
        type: "order",
        title: "The spill",
        prompt: "A hydraulic hose bursts and diesel is running towards a drain. Put the response in order.",
        items: [
          "Stop the source if it is safe to do so",
          "Contain before it reaches the drain",
          "Absorb and recover, treating the absorbent as hazardous waste",
          "Remove contaminated soil to the depth of penetration",
          "Record it, including the cause",
        ],
      },
    ],
  },
  {
    id: "b6",
    code: "B6",
    order: 12,
    pathway: "B",
    title: "Biodiversity & Cultural Heritage",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 12 },
    icon: "forest",
    summary: "PS6 and PS8 — what stops a project, and the five steps every operator knows cold.",
    tldr: "PS6 and PS8 protect things that are invisible from a drawing, and both are screened BEFORE work rather than managed during it. Both contain a category — critical habitat, critical cultural heritage — where the correct answer may be that the project does not proceed as designed. And both share the same failure mode: screening done after clearance, which establishes only what was lost.",
    overview: "Three kinds of habitat and why critical habitat is not the same as a protected area, the screening sequence before any clearance, no net loss as a measurement, the invasive species pathways a project creates, cultural heritage beyond monuments, and the chance find procedure as a drill.",
    lesson: [
      {
        heading: "Two hours on a Friday",
        body: "A grader stripping topsoil for a haul road exposes human remains. The operator stops, calls his foreman, the foreman calls the section manager. Nobody knows what happens next, so the machine is moved and work continues fifty metres along while someone tries to find out. By Monday the community knows. The site is now a place where a project dug up a grave and kept working. What that grave was, whose it was, and whether it was even recent has become impossible to establish, because the context was destroyed on Friday afternoon. The procedure that would have prevented this takes about two hours to write and five minutes to explain: stop, do not touch, secure a radius, call the number, nobody resumes until the named person attends.",
        image: "/images/lm12.jpg",
        caption: "The test is not whether the procedure is in the management plan. It is whether the operator knows what to do in the first five minutes, in his own language, without calling anyone to ask.",
      },
      {
        heading: "Three kinds of habitat, three sets of rules",
        body: "PS6 classifies habitat into three categories and the requirements get stricter across them:",
        points: [
          "MODIFIED habitat — substantially altered by human activity: farmland, plantations, settled areas. Most of a road corridor sits here. Minimise conversion, and improve habitat where you can.",
          "NATURAL habitat — largely native species assemblages. The project may proceed where there is no feasible alternative, with mitigation designed for NO NET LOSS of biodiversity where feasible.",
          "CRITICAL habitat — identified against defined criteria: highly threatened ecosystems, habitat important to Critically Endangered or Endangered species, endemic or restricted-range species, globally significant migratory concentrations, key evolutionary processes. A demanding set of conditions must ALL be met before a project may proceed at all, and the outcome sought is a NET GAIN.",
          "★ Critical habitat and protected area are different things. A site can meet a criterion without being gazetted, protected, or known to any authority.",
        ],
      },
      {
        heading: "Screen before you clear, not after",
        body: "Four steps, almost always compressed, because they sit between a design decision and a production activity and belong to neither:",
        points: [
          "Desk screening against recognised sources: the Integrated Biodiversity Assessment Tool, the IUCN Red List, Protected Planet and the World Database on Protected Areas, plus national registers. This tells you what the field survey must look for.",
          "Field survey ACROSS SEASONS. One dry-season survey misses migratory species, seasonal wetland function, and under-records flora. If the programme cannot allow multiple seasons, say so in the report rather than leaving a reviewer to work it out.",
          "Classify the habitat — and where indicated, run a critical habitat assessment against the criteria rather than against an impression.",
          "Then the design response: avoid, minimise, restore, offset, in that order, with each rejected option written down.",
          "And screen EVERY footprint, not just the alignment: pits, camps, tracks, laydown, spoil areas, haul routes.",
          "★ Ancillary footprints are where unscreened clearance almost always happens, because the contractor picks them after the assessment was written.",
        ],
      },
      {
        heading: "No net loss is a measurement",
        body: "The hierarchy applies here as everywhere. What is different about PS6 is that the result is expressed as a quantity. AVOID: realign around the wetland, the forest patch, the movement corridor; site the pit outside natural habitat; delete a spur. Close to free, and available only for a short window during design. MINIMISE: narrow the crossing, bridge rather than embank, restrict clearance width, work outside breeding seasons, no night lighting near water — most of the practical gains sit here. RESTORE: reinstate water flow, revegetate with native species, replant temporary access and pits (this needs the topsoil that Module B5 explained how projects lose). OFFSET: a measured biodiversity gain elsewhere — additional, like for like, secured long term and monitored. A payment to a conservation body is NOT an offset: cash is how an offset might be funded, and funding a thing is not achieving it.",
        points: [
          "★ A reviewer will ask what avoidance options you considered and expect a written answer. An offset proposed by a project that skipped step one is the hardest position to defend in this module.",
        ],
      },
      {
        heading: "Your project is a distribution system",
        body: "PS6 requires no intentional introduction of alien species, and measures to avoid the accidental introduction and spread of invasive ones. A road project is extremely good at spreading them, and most of the pathways are ordinary logistics:",
        points: [
          "Plant and vehicles — seed and plant material in mud on tracks, tyres and tipper bodies, moved across catchments every day. Wash down at defined points, especially when plant arrives from another section, project or country.",
          "Imported fill — seed banks travel in borrowed material. Inspect the source.",
          "Landscaping and erosion control — species chosen for fast growth and hardiness, exactly the traits that make a species invasive. Several standard slope stabilisation species are serious invasives in parts of this region.",
          "The corridor itself — a cleared, disturbed linear strip is ideal habitat for colonisers and a highway along which they travel.",
          "★ Check the landscaping specification against the national invasive species list BEFORE the contract is awarded. Once a species is in the bill of quantities nobody revisits it.",
        ],
      },
      {
        heading: "Heritage is more than monuments",
        body: "National antiquities law protects declared monuments and registered sites. PS8 is broader, and the difference is exactly where the risk sits:",
        points: [
          "Tangible and known: monuments, registered sites. Rarely missed — they are on a map.",
          "Tangible and unknown: burials, shrines, archaeological deposits, unregistered historic structures. On no map, found by an excavator.",
          "Natural features with cultural significance: a tree, a rock, a spring, a grove. Physically unremarkable, culturally central — invisible to a survey team and obvious to anyone who lives there.",
          "Intangible: procession routes, ceremonial grounds, seasonal practices. Cannot be surveyed at all.",
          "Critical cultural heritage: recognised heritage, or heritage essential to the identity or spiritual life of a community. Strictest requirements — a project may be unable to proceed as designed.",
          "★ Three of those five can only be found by ASKING, separately from whoever speaks for the community by default, and with the understanding that some sites are not discussed openly.",
        ],
      },
      {
        heading: "Within living memory",
        body: "PS8 requires consultation with affected communities who use, or have used WITHIN LIVING MEMORY, the heritage in question. That phrase matters on a corridor: a site not used for thirty years is not thereby available. Someone remembers it, and that someone is often not at the meeting. A heritage screening that is a desk study plus a walkover will find the monuments and miss everything that matters locally — the structured consultation is not an optional refinement; it is the survey method for three of the five categories. Ask separately of women, of elders, and of any minority or settler group. Accept that some sites are known only to certain people, that some will not be named to a stranger, and that a public meeting is the wrong setting for several of them.",
        points: [
          "★ If nobody has asked anyone who lives there, the heritage screening has not started — however many specialists walked the line.",
        ],
      },
      {
        heading: "Five steps, and you need to know them cold",
        body: "This part applies to everyone who operates a machine, whatever else you do on this project.",
        points: [
          "1 · Stop. Switch off. Do not drive back through the area.",
          "2 · Do not touch, move, collect or photograph anything.",
          "3 · Mark and secure a radius. Keep everyone out, including colleagues who want to look.",
          "4 · Call the number. One number, on your induction card, in your cab.",
          "5 · Nobody works in that area again until the named person has attended and released it.",
          "Behind those five steps there has to be a real person who answers and attends, a relationship with the national antiquities authority established before the first find, and a route to the community — because where the find is a burial, the people to consult first may be related to it.",
          "★ If a find can be overridden by programme pressure once, the procedure will not be followed the second time. That is what makes step five the one that actually matters.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Modified, natural, or possibly critical?",
        prompt: "Classify each area — and recognise when a critical habitat assessment is triggered.",
        categories: [
          { id: "mod", label: "Modified" },
          { id: "nat", label: "Natural" },
          { id: "crit", label: "Possibly critical" },
        ],
        items: [
          { id: "cassava", text: "Cassava farmland either side of the alignment", cat: "mod" },
          { id: "plantation", text: "A plantation of exotic timber", cat: "mod" },
          { id: "riverine", text: "An intact riverine forest strip with native species", cat: "nat" },
          { id: "wetland", text: "A seasonal wetland used by large numbers of migratory birds", cat: "crit" },
          { id: "verge", text: "A roadside verge of mixed weeds", cat: "mod" },
          { id: "endemic", text: "The only known site of a plant found nowhere else", cat: "crit" },
        ],
      },
      {
        type: "categorize",
        title: "Invasive pathway, or not?",
        prompt: "Is this an invasive species pathway your project creates?",
        categories: [
          { id: "path", label: "Pathway" },
          { id: "not", label: "Not a pathway" },
        ],
        items: [
          { id: "mud", text: "Mud on plant tracks moving between sections", cat: "path" },
          { id: "fill", text: "Imported fill from an infested borrow area", cat: "path" },
          { id: "spec", text: "A fast-growing slope stabilisation species in the specification", cat: "path" },
          { id: "dust", text: "Dust from the haul road", cat: "not" },
          { id: "corridor", text: "The cleared corridor edge itself", cat: "path" },
          { id: "washout", text: "Concrete washout", cat: "not" },
        ],
      },
      {
        type: "order",
        title: "The chance find drill",
        prompt: "Your bucket exposes something. Put the five steps in order — and learn them cold.",
        items: [
          "Stop and switch off",
          "Do not touch or move anything",
          "Mark and secure a radius",
          "Call the number",
          "Wait for the named person to attend and release the area",
        ],
      },
    ],
  },
  {
    id: "c1",
    code: "C1",
    order: 13,
    pathway: "C",
    title: "Instructing a Subcontractor",
    type: "quiz",
    duration: "16–20 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "assignment",
    summary: "Turning a requirement into something a third party will actually do.",
    tldr: "Pathways A and B taught what the requirements are. Pathway C teaches what to do when meeting them is contested, inconvenient, or resisted by someone whose cooperation you need — which is where most E&S failures actually occur.",
    overview: "Why a general compliance clause has never prevented a single failure, the five management steps and the two everyone skips, what a real instruction contains, the four kinds of refusal — including the one backed by a credible commercial threat — and how to escalate a decision instead of a frustration.",
    lesson: [
      {
        heading: "The clause that has never worked",
        body: "Every subcontract in the industry says the subcontractor will comply with all applicable laws and with the main contract. That clause has never once prevented retained identity documents, unverified ages, a camp with one shower for forty men, or a payroll with no payslips. Not because subcontractors are dishonest — because a general clause hands someone the job of working out what compliance means, and they have no reason to interpret it generously and often no capacity to interpret it at all. Compare: 'Comply with all applicable labour law' against 'Provide every worker with written terms and a payslip showing gross pay, each deduction with its basis, and net pay.' The second one gets done.",
        image: "/images/lm13.jpg",
        caption: "Specificity is the entire point of a flow-down clause. Everything else in this module depends on it.",
      },
      {
        heading: "Five steps, and the two everyone skips",
        points: [
          "Screen before award — registration, licences, insurance, past performance, and whether they have any labour management system at all. A supplier with no written terms for its own people will not produce them for yours.",
          "Flow down specifically — the specific obligations, as schedules, with a right of audit and defined consequences.",
          "Induct the MANAGEMENT, not only the workers. The person who decides how many beds go in a room needs to have been told the rule, and to have signed that they were told. Almost universally skipped.",
          "Verify — payroll sampling, age records, camp inspection, worker interviews away from supervisors. An assurance letter is not verification.",
          "Act contractually — a right of audit with no consequence attached is decorative. The other step everyone skips, and the one that makes the other four credible.",
          "★ The second time you find something and nothing happens, the subcontractor has learned the real position. Everything after that is theatre — and you taught them.",
        ],
      },
      {
        heading: "What a real instruction contains",
        body: "Most instructions fail for reasons unrelated to the subject: vague, undated, unevidenced, or delivered to someone who cannot act on them. Five elements: the specific thing to be done; the date; the source of the obligation — clause, appendix or standard; the evidence that will close it; and what happens if it is not done, with its own date. Weak: 'we need to sort out the accommodation in Block B, can you look at it this week.' Strong: 'Block B has three-tier bunks and occupancy above the figure at Appendix Y. Remove the third tier and reduce occupancy to that figure by Friday 14th. Send me the revised occupancy schedule and photographs of each room by close of business Friday. If it is not done I will raise a formal non-conformity, which under clause 14 carries a seven day cure period before payment is affected.' The second is not more aggressive. It is actionable without another conversation, and it removes the question of whether the requirement exists.",
        points: [
          "★ Be warm about the person and immovable about the obligation, and never confuse the two. The most effective people in this role do both at once.",
        ],
      },
      {
        heading: "Four kinds of no",
        body: "Recognising which refusal you are facing is most of the work:",
        points: [
          "CAPABILITY — 'We do not have the systems for that.' Often true, and often the most honest thing said in the conversation. Help, and set a date. Give them the template. Then verify.",
          "COST — 'That was not in our price.' Check whether it was in the subcontract. If it was, the price is their problem. If it was not, your flow-down failed: say so honestly, price the variation, and fix it for the next award.",
          "PRACTICE — 'This is how it works in this region.' Often an accurate description. Never a reason. Acknowledge the description and restate the obligation without arguing about the sector.",
          "LEVERAGE — 'If you push this, we will demobilise.' The hardest, and the one people concede to.",
          "★ Do not concede in the room. Do not escalate in the room either. Say you will write it up and put it to the person who can decide.",
        ],
      },
      {
        heading: "When they threaten to pull the workers",
        body: "Three things are usually true at once, and holding all three is what lets you respond well. The threat may be real — sections do stop and programmes do slip, and pretending otherwise makes you easy to dismiss. The exposure runs the other way — a section ahead of programme carrying a forced labour indicator is not a strong position; it is an undisclosed liability sitting on a good production figure, and it will be found. And their leverage often rests on the arrangement itself — where the issue is retained documents or withheld wages, fixing it does not remove their workers; it removes their CONTROL over those workers, which is a different thing, and not one the project needs to protect. So: 'I hear you, and I am not going to resolve this here. The requirement is in your subcontract and I cannot waive it. I will write up what we have discussed and put it to the person who can decide, with the programme implication attached.'",
        points: [
          "★ If the supplier does withdraw, that is information about him — and it is better obtained now than during an audit.",
        ],
      },
      {
        heading: "Escalate the decision, not the frustration",
        body: "Escalation is a skill, not an admission that you failed. Escalate the DECISION: a decision is required, here are the options, here is what each costs — not 'the subcontractor is being difficult'. QUANTIFY: an unquantified risk is an opinion. 'Forty workers with no age verification records' lands differently from 'concerns about the labour supplier'. Give OPTIONS with costs, and a recommendation: a director shown a controlled path usually takes it; a director shown only a compliance failure looks for a way around it. And ONE PAGE: situation, exposure, options, recommendation, date a decision is needed. Longer than one page and the decision moves to whoever summarises it.",
        points: [
          "★ The framing that works is not that a rule has been broken. It is that an unquantified liability is sitting on the project and somebody with authority needs to decide what to do about it.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Which kind of refusal?",
        prompt: "Name the refusal you are facing — that is most of the work.",
        categories: [
          { id: "cap", label: "Capability" },
          { id: "cost", label: "Cost" },
          { id: "prac", label: "Practice" },
          { id: "lev", label: "Leverage" },
        ],
        items: [
          { id: "payroll", text: "“We don't have a payroll system that produces payslips”", cat: "cap" },
          { id: "price", text: "“That wasn't in our price”", cat: "cost" },
          { id: "region", text: "“Everybody in this region holds documents”", cat: "prac" },
          { id: "pull", text: "“Push this and we pull the crew on Monday”", cat: "lev" },
        ],
      },
      {
        type: "scenario",
        title: "The demobilisation threat",
        intro: "Your subcontractor's labour supplier holds 22 workers' identity documents. When you raise it, the manager says the supplier will pull the crew if you interfere — and the section is ahead of programme.",
        steps: [
          {
            prompt: "What do you do in the room?",
            options: [
              { text: "Neither concede nor escalate: say you will write it up and put the decision to whoever has authority, with the programme implication attached", outcome: "good", feedback: "Right. It does not concede, it does not make it personal, and it moves a decision with a real consequence to the person with authority to take it." },
              { text: "Insist on immediate compliance and let the confrontation happen", outcome: "bad", feedback: "Escalating in the room makes it personal and puts you in a position you cannot back out of without losing the requirement." },
              { text: "Accept the arrangement — the section is ahead of programme", outcome: "bad", feedback: "A section ahead of programme carrying a forced labour indicator is an undisclosed liability sitting on a good production figure. It will be found." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c2",
    code: "C2",
    order: 14,
    pathway: "C",
    title: "Preparing for an IESC Visit",
    type: "quiz",
    duration: "16–20 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "content_paste_search",
    summary: "What the independent consultant looks for — and what they conclude when they cannot find it.",
    tldr: "The IESC is appointed by the lenders and reports to the lenders. They are not your adviser, they are not the regulator, and their report drives money. The single highest-value action available to you is an honest gap register, handed over at the start.",
    overview: "Who the IESC works for and the three sources they triangulate, what they conclude from patterns, the fortnight before a visit, the helpful arrangements that compromise independence, disclosure on arrival, and what to do during and after.",
    lesson: [
      {
        heading: "They do not work for you",
        body: "The Independent Environmental and Social Consultant is appointed by the lenders and reports to the lenders. EP4 Principle 7 covers review before financial close, Principle 9 covers monitoring for the life of the loan. So three things follow. They are not your adviser: they may say useful things, and they are not there to help you pass. They are not the regulator: they assess against the applicable standards and your own commitments, not national law alone. And their report drives money, through the action plan and ultimately through disbursement. They use three sources and they triangulate: documents tell them whether the system exists, the site tells them whether it operates, and people tell them how to read the other two. Where the three disagree, the disagreement is the finding.",
        image: "/images/lm14.jpg",
        caption: "A complete document set with nothing behind it is the easiest thing to produce and the least convincing on its own.",
      },
      {
        heading: "What an empty register tells them",
        body: "The biggest judgement they make is not about any single issue. It is whether your management system can be relied on, and they form that from patterns:",
        points: [
          "A finding you found, recorded, escalated and were already fixing: detection and correction work. One instance of a problem is normal on any project.",
          "The same finding, found by them, with no trace in your records: the system does not detect. Everything else you hold is now in doubt, including the accurate parts.",
          "A register with nothing in it — no near misses, no grievances, no incidents: not excellent performance. An unknown, unused or unsafe channel, and a project that cannot see its own operation.",
          "Monitoring sheets filled in one handwriting on one date for a whole month: the data is reconstructed, and that is a governance finding treated far more seriously than whatever was being measured.",
          "★ Individual findings close. A conclusion that your system cannot be relied on does not — and it widens every corrective action from the item to the process behind it.",
        ],
      },
      {
        heading: "The fortnight before",
        body: "DOCUMENTS: index the pack; check every plan is current and has a named owner; reconcile your registers against each other — the incident register, the monthly report, the action plan tracker and the site diary should not disagree, and where they do you want to have explained it rather than have it found. SITE: walk it yourself at the hours the activity actually happens — a camp at nine at night is a different camp from a camp at eleven in the morning. Fix what can be fixed. PEOPLE: tell the workforce the visit is happening, who is coming, and that they may be asked questions. Tell them to answer honestly — that is the only instruction anyone should give about the content of an interview. And one thing you must not do: do not create a document that should already have existed and date it as though it had.",
        points: [
          "★ There is nothing wrong with fixing things before a visit. There is a great deal wrong with fixing them only before a visit.",
        ],
      },
      {
        heading: "Helpful arrangements that are findings",
        body: "Several ordinary arrangements compromise independence, and they are almost always the project's own suggestion, offered helpfully:",
        points: [
          "Staff accompanying every interview — workers and community members will not speak freely and the reviewer knows it. Accompany for access, then withdraw, and say so proactively.",
          "The project choosing who they meet — a curated sample, and they will treat it as one. Offer a list and invite them to select from beyond it.",
          "Providing all transport, including to communities — constrains where they go and when they leave.",
          "Holding interviews in the project office — every community member walks through the gate past your staff.",
          "Asking for findings informally before the report — easy to read as an attempt to shape it.",
          "★ A reviewer who suspects coaching discounts the interviews and leans harder on documents and the site. That is rarely to your advantage.",
        ],
      },
      {
        heading: "Hand them the gap register first",
        body: "The highest-value thing available to you on the day is an honest gap register handed over at the start: what you know is not compliant, what you are doing about each item, who owns it, by when — including the uncomfortable ones. This is not about goodwill. It changes what is being assessed: they stop testing whether you know your own position and start testing whether your corrective plan is adequate, which is a far better conversation. It also protects the findings you missed: disclose eleven and miss one, and you are a project with a working system and a gap. Disclose nothing and have twelve found, and you are a project with no system. Try: 'before we start, here is our current gap register, eleven open items, four high severity. Three have corrective actions under way with dates. One we have not solved and I would value your view. I would rather you hear it from us than find it on Thursday.'",
        points: [
          "★ It removes their most damaging question — which is not what went wrong, but whether you knew.",
        ],
      },
      {
        heading: "During, and afterwards",
        body: "Answer what is asked. Do not volunteer a defence to a question nobody put, which tells them where to look. If you do not know, say so, offer a time, and come back by it. At the closeout, listen and take notes; disagree on facts with evidence; do not argue about severity ratings in the room. On the draft report, correct errors of fact and attach the evidence. Do not try to soften the wording of a finding you accept — reviewers notice, and the attempt reads as an admission. Then work the action plan: a finding you accepted and have not closed by the next visit is worse than the original finding, because two visits make a pattern, and a pattern is what changes a disbursement conversation.",
        points: [
          "★ The visit is not the event. What you do with the report between visits is what the next report will say about you.",
        ],
      },
    ],
    activities: [
      {
        type: "match",
        title: "What does this tell a reviewer?",
        prompt: "Pair what the reviewer sees with what they conclude.",
        pairs: [
          { l: "A finding you recorded and were already fixing", r: "The system works" },
          { l: "The same finding found by them, not in your records", r: "The system does not detect" },
          { l: "A grievance register with no entries", r: "The channel is unknown or unsafe" },
          { l: "Monitoring sheets in one handwriting for a month", r: "The data is reconstructed" },
          { l: "Plans current, owned and visibly used", r: "Capacity is real" },
        ],
      },
      {
        type: "scenario",
        title: "Nine days before the visit",
        intro: "Preparing the pack, you find the traffic management plan was last revised before two haul routes changed, and no toolbox record exists for the revised routes. The visit is in nine days.",
        steps: [
          {
            prompt: "What do you do?",
            options: [
              { text: "Revise the plan now, dated today, deliver the briefings this week, and disclose both the gap and the correction", outcome: "good", feedback: "Correct — fixing it now and saying so demonstrates the system working, which is what the visit is actually assessing." },
              { text: "Revise the plan and date it to when the routes changed", outcome: "bad", feedback: "Back-dating turns a routine finding into an integrity one. It is usually detectable, and it makes everything else the project says unreliable." },
              { text: "Leave it and explain if asked", outcome: "bad", feedback: "Passive. The gap is ordinary; found undisclosed, it reads as a system that does not detect." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c3",
    code: "C3",
    order: 15,
    pathway: "C",
    title: "Investigating an Incident",
    type: "quiz",
    duration: "16–20 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "troubleshoot",
    summary: "The first hour, the root cause, and a report that survives being read in two years.",
    tldr: "Almost everything that goes wrong in an incident investigation was determined in the first sixty minutes, before anybody thought of themselves as investigating. Make safe, care for people, preserve the scene, notify, record — and only then investigate.",
    overview: "The first-hour sequence and the three things that destroy an investigation, notification deadlines that start at the incident, root cause beyond the last human action, evidence and uncontaminated interviews, and a report written for a stranger reading it in a dispute.",
    lesson: [
      {
        heading: "The first hour decides the rest",
        body: "Almost everything that goes wrong in an investigation was determined in the first sixty minutes, before anyone thought of themselves as investigating. Make safe first: stop the activity, isolate the energy, control the hazard that caused it and the one it created. Care for people, using the route and the travel time you measured in advance rather than working it out now. Preserve the scene: rope it off — nothing moved, cleaned, repaired or restarted, including plant that other people want back. Notify: internal, the engineer, the regulator and the lenders where the threshold is met, and the community where they are affected. Write it down now: times, names, positions, conditions, what was observed. Only then investigate.",
        image: "/images/lm2.jpg",
        caption: "Three things destroy an investigation in the first hour: the scene is cleared so work can resume, the plant is repaired before it is examined, and the people present go home before anyone takes their account.",
      },
      {
        heading: "Notify before you are certain",
        body: "Notification deadlines are contractual and statutory and they start running at the moment of the incident, not at the moment you understand it:",
        points: [
          "Internally, immediately — delayed internal notification is the most common reason an external deadline gets missed.",
          "The engineer, per the contract, usually immediately for anything significant. Late notification is itself a breach and it is easy to evidence.",
          "The regulator, per national law: fatalities, serious injury, environmental release above a threshold, and in several jurisdictions the discovery of human remains. Often a short fixed period, and in some jurisdictions personal liability attaches.",
          "The lenders, per the financing agreement. A lender learning of a fatality from the press rather than from you changes the relationship permanently.",
          "The community, where they are affected or will hear about it — which on a corridor is within hours. Silence in the first day is read as concealment, and the account that fills the silence will not be yours.",
          "★ Know your thresholds and deadlines before an incident. A team looking them up in the first hour is a team that will miss one.",
        ],
      },
      {
        heading: "The last human action is not the cause",
        body: "Most site investigations stop at the last person who did something, because that is where the sequence visibly breaks and because it offers an ending. It is almost never the cause. 'He was not wearing his harness' misses why the anchor point was thirty metres away, why nobody raised it, and why the method statement assumed edge protection that was never installed. 'The procedure was not followed' misses whether the procedure was workable, whether anyone had ever done it that way, and whether following it would have stopped production. Three questions get past blame: Why did this make sense to the person at the time? Has it been done this way before — because if so, the practice was tolerated, and the tolerance is the cause? And what would have had to be true for this to be impossible?",
        points: [
          "★ If your corrective actions are retraining, a toolbox talk and a reminder, you found the last human action and stopped. A good investigation produces at least one action that changes a CONDITION rather than a behaviour.",
        ],
      },
      {
        heading: "Take the accounts today",
        body: "People who discuss an event converge on a shared version within hours. After that it is nobody's account. So: separately, and early — everyone who was present, as soon as they are able. Open questions first: ask them to describe what happened in their own words, uninterrupted, before you ask anything specific. No leading questions — 'was he wearing his harness' produces a different answer from 'what was he wearing'. Without their supervisor present, and say why: you want their account, not a version agreed with anyone. Say what the interview is for — where people expect blame, an account given in fear of dismissal is not information. Then read it back and have it confirmed.",
        points: [
          "★ Collect the scene, the plant data, the paperwork and the hours worked in the preceding days on the same day. All four degrade or disappear.",
        ],
      },
      {
        heading: "Write it for a stranger in two years",
        body: "Write for someone who is not in the room, not on your side, and reading it in a dispute two years from now with nobody available to explain it:",
        points: [
          "What happened: a factual sequence with times. No characterisation, no adjectives.",
          "What was found: the evidence, with its source, separated from inference by a visible boundary.",
          "Why it happened: causes reaching conditions rather than stopping at actions — and where something is inferred rather than established, say so.",
          "What we do not know: the section most reports omit and the one that most establishes credibility. A reader who finds an unacknowledged gap distrusts the whole document.",
          "Corrective actions with an owner by name, a date, and how completion will be verified.",
          "Notifications made, to whom and when — read closely in any dispute about timeliness.",
          "★ Assume the report will be disclosed — to a lender, a regulator, an accountability mechanism or a court. A document written to be internal and then disclosed always reads badly.",
        ],
      },
      {
        heading: "Then close it, and verify",
        body: "A corrective action without an owner and a date is a sentiment. One without a verification step is a hope. For each action: who by name, by when, and what evidence will show it is done. Then somebody checks the evidence on the date, and closes it or does not. Verify that it WORKED, not only that it happened: edge protection installed is evidence the action was completed; edge protection present at the next three inspections is evidence the condition changed. Share what was learned beyond the section where it happened — the same conditions usually exist on all of them. And check back at three months: most corrective actions decay, and the decay is invisible unless somebody looks.",
        points: [
          "★ A finding closed on paper and reopened in practice is worse than one that stayed open, because it also proves your verification does not work.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Helps the account, or contaminates it?",
        prompt: "Sort each interviewing practice.",
        categories: [
          { id: "helps", label: "Helps" },
          { id: "cont", label: "Contaminates" },
        ],
        items: [
          { id: "sep", text: "Interview separately within hours", cat: "helps" },
          { id: "sup", text: "Interview with the supervisor present", cat: "cont" },
          { id: "own", text: "Ask them to describe it in their own words first", cat: "helps" },
          { id: "lead", text: "Ask whether he was wearing his harness", cat: "cont" },
          { id: "purpose", text: "Explain what the interview is for", cat: "helps" },
          { id: "group", text: "Interview the group together", cat: "cont" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — the first hour",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "You should establish the facts before notifying the lenders.", truth: false, tip: "Myth — notify what you know and update. Deadlines run from the incident, not from understanding it." },
          { text: "Plant involved in an incident is quarantined and examined before repair.", truth: true, tip: "Fact — repair destroys the evidence of the failure, and the pressure to release the plant is exactly why the rule exists." },
          { text: "A police instruction to open the road removes your duty to record the scene.", truth: false, tip: "Myth — follow the instruction, ask for the time you need, and record what you can before anything changes." },
          { text: "Retraining and a toolbox talk are usually signs the investigation stopped too early.", truth: true, tip: "Fact — those are step-four controls. A good investigation changes at least one condition." },
        ],
      },
    ],
  },
  {
    id: "c4",
    code: "C4",
    order: 16,
    pathway: "C",
    title: "Handling a Sensitive Grievance",
    type: "quiz",
    duration: "16–20 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "forum",
    summary: "Intake, investigation, resolution — and the feedback step everybody skips.",
    tldr: "A grievance mechanism is judged by one test: will a person who has a problem use it a second time? Every design decision follows from that — and the step that decides it is the one most projects skip: telling the complainant what happened.",
    overview: "Why grievance mechanisms fail, the five steps and the separation rule, the four kinds that need different handling — anonymous, retaliatory-risk, SEA/H and compensation — how to say no defensibly, and when a matter leaves your hands.",
    lesson: [
      {
        heading: "Judged by whether they come back",
        body: "Almost every project has a grievance mechanism. Most do not work, for consistent reasons. Nobody uses it — which is not good performance but an unknown, distrusted or unsafe channel. Intake sits with the wrong people: the only box is inside the gate, or the team receiving complaints is the team delivering project messaging. Investigation is done by the people complained about, so a correct outcome is disbelieved. And nobody tells the complainant what happened — so from their side, nothing happened at all. Every design decision follows from one test: will a person with a problem use this a second time?",
        image: "/images/lm3.jpg",
        caption: "High closure rates with low resolution rates means closure is recorded when the project decided — not when the complainant was told.",
      },
      {
        heading: "Five steps, and the one everyone skips",
        points: [
          "INTAKE — multiple entry points, at least one outside any project facility and one outside the line. Anonymous submission possible. Recorded on receipt with a reference given to the complainant so they can follow it up.",
          "ACKNOWLEDGEMENT — within a published period. Confirm what you understood, say what happens next and by when.",
          "INVESTIGATION — proportionate, by someone independent of the subject matter, in a defined timeframe.",
          "RESOLUTION — a decision, a remedy where one is due, and where the answer is no, a reason.",
          "FEEDBACK — tell the complainant the outcome and the reason, in person where it matters, record what they were told and what they said, and only then close it. Skipped on most projects, and it decides whether anybody uses the mechanism again.",
          "★ Delivering project information and receiving grievances should not sit with the same person at the same moment. Nobody interrupts a briefing about the project to complain about the project.",
        ],
      },
      {
        heading: "Four kinds that need different handling",
        points: [
          "ANONYMOUS — accept it: a mechanism that only takes named complaints excludes the people most at risk. Be honest that you cannot come back for detail or give feedback. Investigate what can be checked independently, and treat a cluster on one subject as information about a system.",
          "RETALIATORY RISK — where the complaint is about someone with power over the complainant, the first question is safety, not substance. Never put them in the same room. And follow up two to eight weeks later, because that is when retaliation appears — as a non-renewal or a reassignment nobody connects.",
          "SEA/H — does not run through this mechanism at all. It goes to the separate channel and the trained responder from Module B4. If one arrives here anyway, you are now a first responder and the ordinary process stops.",
          "COMPENSATION — the most common category, and the one most likely to escalate outside the mechanism.",
          "★ Mediation is never appropriate where there is a power imbalance, and never in a SEA/H matter.",
        ],
      },
      {
        heading: "Three different compensation complaints",
        body: "A compensation grievance usually merges three questions, and answering them as one produces a response that addresses none of them. Am I eligible at all? — a question about the register and the eligibility categories. Was everything counted? — the inventory of losses. Was it valued correctly? — full replacement cost. Separate them, and investigate against the entitlement framework and the register — not against what the neighbour received, which is the comparison the complainant will make and which is usually not a like comparison. And watch for the moment the complaint stops being individual: if depreciation was applied across the whole register, this is not a grievance. It is a finding.",
        points: [
          "★ Treating a systematic error as a series of individual cases is how a project pays a hundred claims one at a time instead of correcting once.",
        ],
      },
      {
        heading: "How to say no",
        body: "Most training assumes grievances are valid. Many are not, and how you say no decides whether the mechanism survives. Confirm what was claimed, in their words, so they can see you understood it. Say what you checked and against what — name the document, the register, the measurement. Give the reason SPECIFICALLY: not 'the claim was not substantiated', but 'the structure is forty metres outside the right of way and the register records the boundary at this chainage'. Say what would change the answer, if anything would. And tell them what they can do next, including outside the project — PS1 requires that the mechanism not impede access to other remedies, so a mechanism presenting itself as the only avenue is neither credible nor compliant.",
        points: [
          "★ Often the right answer is a no to the question they asked and a yes to a question they did not know to ask. Loss of access is not land acquisition — and it is compensable.",
        ],
      },
      {
        heading: "When it leaves your hands",
        body: "Escalate outside the project when any of these are true: an allegation of criminal conduct — your process does not replace the criminal one, and for SEA/H the decision to report belongs to the survivor. The subject is senior enough that no internal investigator is independent of them. The complaint concerns the conduct of public security forces. A pattern has crossed from cases into a systemic finding — at which point it belongs in the action plan and in the report to the lenders, not in a case file. Or the complainant has gone to an accountability mechanism, the press or a court — at that point your task is to cooperate and fix the underlying issue, not to manage the complaint. And follow up on retaliation: it appears weeks later, and nobody connects it unless somebody is looking.",
        points: [
          "★ A complainant who goes outside the mechanism is telling you the mechanism failed. That is the finding, whatever the merits of their complaint turn out to be.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Which channel?",
        prompt: "Ordinary grievance mechanism, or the separate SEA/H channel from Module B4?",
        categories: [
          { id: "ord", label: "Ordinary mechanism" },
          { id: "b4", label: "Separate B4 channel" },
        ],
        items: [
          { id: "dust", text: "A dust complaint from a household", cat: "ord" },
          { id: "gate", text: "An allegation that a gatekeeper asked for a relationship in exchange for progressing a file", cat: "b4" },
          { id: "trees", text: "A dispute about the number of trees counted", cat: "ord" },
          { id: "harass", text: "A worker reporting harassment by a supervisor", cat: "b4" },
          { id: "path", text: "A claim that a borrow pit blocked a footpath", cat: "ord" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — grievances",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "An almost-empty grievance register means community relations are strong.", truth: false, tip: "Myth — it means the channel is unknown, distrusted or unsafe, and a reviewer reads it that way." },
          { text: "The reference number issued at intake is mainly for the complainant.", truth: true, tip: "Fact — without it they have no way to follow the case up. Internal tracking works without giving them anything." },
          { text: "Mediation is a useful first step where both parties are willing.", truth: false, tip: "Myth — willingness across a power imbalance is not a reliable signal, and in a SEA/H matter mediation re-exposes the survivor." },
          { text: "A case is closed only after the complainant has been told the outcome and the reason.", truth: true, tip: "Fact — closure recorded when the project decided, not when the complainant was informed, is the most common failure." },
        ],
      },
    ],
  },
  {
    id: "c5",
    code: "C5",
    order: 17,
    pathway: "C",
    title: "Building a Record That Holds",
    type: "quiz",
    duration: "15–18 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "fact_check",
    summary: "Contemporaneous, attributable, complete, consistent — and safe to disclose.",
    tldr: "Your record will be read by one of five people: an independent consultant, a lender, a regulator, an accountability mechanism, or a court. None of them will have you available to explain it. Four properties make a record hold — miss any one and it stops being evidence.",
    overview: "The four properties of a record that holds, the retrospective register and what it really costs, consistency across systems, registers full of named people and data protection, writing for a stranger, and the one document never to create.",
    lesson: [
      {
        heading: "Five readers, none of them you",
        body: "Teams keep records because they are required to, and that framing produces records that satisfy a requirement and fail every other use they are put to. Your record will be read by one of five people: an independent consultant judging your management system, a lender deciding on a disbursement, a regulator considering enforcement, an accountability mechanism assessing a community complaint, or a court. None of them will have you there to explain it. Four properties make a record hold. Contemporaneous: made at the time. Attributable: who made it and when. Complete: including the entries that reflect badly. Consistent: agreeing with the other places the same event appears. Miss any one and the record still exists. It just stops being evidence.",
        image: "/images/lm4.jpg",
        caption: "A register with no bad entries is not a good register. A reviewer who notices a gap will assume the worst available explanation.",
      },
      {
        heading: "Filled in on Friday for the whole week",
        body: "This is the most damaging record-keeping failure there is, and it is almost never done to deceive. A supervisor is behind on paperwork. On Friday he completes the week's monitoring sheets, toolbox records and inspection log from memory and from what was probably true. The activity may genuinely have happened. The record is still false. And it is detectable: one handwriting, one pen, no variation between entries, readings that do not move with conditions that did. What it costs is not the finding about that week — it is the conclusion that your records cannot be relied on, which reaches every other record you hold, including the accurate ones. After that, everything has to be established from the site and from people. Slower, and almost never in your favour.",
        points: [
          "★ The fix is a design fix: make recording take less time than avoiding it, put the register where the work is, and never criticise anyone for an honest bad entry. A sheet marked 'not taken, plant down' is a STRONGER record than an invented value.",
        ],
      },
      {
        heading: "Four places, one story",
        body: "Most projects hold the same event in four or five places, and reviewers compare them because comparison is cheap and revealing. An incident sits in the incident register, the site diary, the monthly report to the lenders, the corrective action tracker and, where applicable, a regulator notification — dates and severity ratings diverge, and sometimes an event in the diary never reached the register at all. A grievance sits in the grievance register, the engagement log, the monthly report and the compensation file — the usual divergence is cases in the engagement log that were never logged as grievances. An exceedance sits in the monitoring data and should sit in the report, and often does not, because the report was compiled from a summary rather than from the data. And ESAP actions get marked closed with no evidence attached — the commonest single defect in any tracker.",
        points: [
          "★ Reconcile before someone else does. A discrepancy you found and explained is housekeeping. The same one found by a reviewer is concealment or loss of control — and they will not know which.",
        ],
      },
      {
        heading: "Registers full of named people",
        body: "Several registers this programme requires are databases of named individuals and their circumstances: the compensation register, the grievance register, worker records, consultation attendance, and SEA/H case files. In every jurisdiction here, that is personal data, and in most it falls under a national data protection regime — including the Nigeria Data Protection Act 2023. So: a lawful basis and a defined purpose. Access control — not everyone who can open the shared drive should be able to open the compensation register. Secure transmission — circulating a full register by unsecured email is a breach and a personal risk to the people in it. Retention limits. And minimisation in reporting: report numbers and categories. A case narrative with a location and a role identifies somebody in a small community.",
        points: [
          "★ A SEA/H case file is the most sensitive document your project will ever hold. Restricted by name, no narrative in any report, no copy anywhere else.",
        ],
      },
      {
        heading: "Would a stranger understand it?",
        body: "Write for someone reading it in two years with nobody available to explain it. Abbreviations that everybody here knows. Local shorthand. A chainage with no indication of which section. An initial with no name against it anywhere. A reference to 'what we agreed' with no record of the agreement. None of these survive. The same applies to what is left out: an entry that makes sense only if you know something that is not written down is an entry that will be misread — and it will be misread against you, because the reader fills the gap with the explanation that fits their concern. Read your own register as if you had never seen the project; the entries that need you to interpret them are the ones to rewrite.",
        points: [
          "★ The test is not whether it is accurate. It is whether it is accurate to someone who was not there.",
        ],
      },
      {
        heading: "Write it as though it will be disclosed",
        body: "Because it will be — to a lender, a regulator, an accountability mechanism, or in a dispute. Which means: no speculation stated as fact. No conclusions about liability. Nothing you would be uncomfortable having read aloud. And NO SECOND VERSION: a project that keeps a real record and a presentable one has created the worst document in its possession, because the existence of two versions is itself the finding, and no explanation survives it. This is not about caution. A record written honestly from the first draft is faster to produce, easier to defend and more useful to you — because it is the one that tells you what is actually happening on your project.",
        points: [
          "★ The record is not the compliance task. It is the instrument that lets you see your own operation — and a project that cannot see its own operation is managing something else.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Housekeeping, or a finding?",
        prompt: "Sort each situation.",
        categories: [
          { id: "house", label: "Housekeeping" },
          { id: "find", label: "A finding" },
        ],
        items: [
          { id: "explained", text: "A discrepancy you found and explained before the visit", cat: "house" },
          { id: "found", text: "The same discrepancy found by the reviewer", cat: "find" },
          { id: "noevi", text: "An ESAP action closed with no evidence attached", cat: "find" },
          { id: "exceed", text: "An exceedance in the data that never reached the report", cat: "find" },
          { id: "note", text: "A reconciliation note explaining two different dates", cat: "house" },
        ],
      },
      {
        type: "swipe",
        title: "Myth or fact? — records",
        prompt: "Call each statement: myth or fact?",
        cards: [
          { text: "An estimated value is a stronger record than an honest gap.", truth: false, tip: "Myth — 'not taken, plant down' demonstrates the system is real. An invented value is a false record." },
          { text: "An unsigned, undated entry has no weight, however accurate it is.", truth: true, tip: "Fact — accuracy cannot be established without attribution, and the reader cannot ask the author anything." },
          { text: "Keeping a working record and a separate presentable version is sensible document control.", truth: false, tip: "Myth — two versions is itself the finding, and no explanation survives it." },
          { text: "The primary purpose of a good record is to let the project see its own operation.", truth: true, tip: "Fact — the reporting requirement is a by-product." },
        ],
      },
    ],
  },
  {
    id: "c6",
    code: "C6",
    order: 18,
    pathway: "C",
    title: "Deciding Under Programme Pressure",
    type: "capstone",
    duration: "25–35 min",
    status: "not_started",
    score: { earned: 0, total: 10 },
    icon: "balance",
    summary: "The Pathway C capstone: ten decisions, all of which cost something.",
    tldr: "You are the E&S lead on Section 3, eleven weeks behind on embankment, with an IESC visit in eight weeks. Over a simulated eight weeks you take ten decisions. Each costs something — programme, money, relationship or exposure. There is no path that pays nothing.",
    overview: "A branching simulation that tests not whether you know the standards — Pathways A and B tested that — but whether you can act on them when acting is expensive, when someone credible disagrees, and when the cheap option is available and nobody would immediately know.",
    lesson: [
      {
        heading: "Before you start",
        body: "You are the E&S lead on Section 3, a 52 km package. You joined nine weeks ago. Earthworks are 48 percent complete and the section is eleven weeks behind on embankment, which your project director has raised in the last two progress meetings. Around you: a competent section manager under pressure, a logistics manager measured on haulage cycle time, an earthworks subcontractor who is ahead of programme and uses a labour supplier, a well-regarded but overstretched community liaison officer, and a director who has never worked with an E&S function that raised anything difficult. The lenders' independent consultant visits in eight weeks. Every decision costs something — programme, money, relationship or exposure. There is no path that pays nothing. One thing to carry out of it: nearly every failure in this programme was a reasonable decision, taken under real pressure, by someone who was never shown the trade they were actually making. Your job, more than anything technical, is to put that trade in front of whoever has authority to make it.",
        image: "/images/lm1.jpg",
        caption: "Ten decisions, eight weeks, four currencies — and some costs that are irreversible.",
      },
    ],
  },
];

// A distinct accent colour per module (by id). Used for icon tiles, chart
// bars, lesson banners and card headers so each module is recognisable.
export const moduleAccents = {
  m1: "#06b6d4", // cyan — ESG in construction
  std: "#0ea5e9", // sky — the standards
  m2: "#f59e0b", // amber — regulatory framework
  m3: "#10b981", // emerald — financing
  m4: "#a855f7", // purple — the ESMS
  m5: "#3b82f6", // blue — KPIs & reporting
  m6: "#c99a2e", // gold — capstone
  b1: "#f59e0b",
  b2: "#6366f1",
  b3: "#0ea5e9",
  b4: "#f43f5e",
  b5: "#10b981",
  b6: "#22c55e",
  c1: "#8b5cf6",
  c2: "#0ea5e9",
  c3: "#ef4444",
  c4: "#f59e0b",
  c5: "#64748b",
  c6: "#d4a72c",
};

// Construction & public-infrastructure photos per module (royalty-free,
// Unsplash). Files live in /public/images and are served from the site root.
export const moduleImages = {
  m1: "/images/lm4.jpg", // managed construction site, work crew
  std: "/images/lm11.jpg", // standards in the field
  m2: "/images/lm5.jpg", // modern public/civic building (regulation)
  m3: "/images/lm2.jpg", // financial district (the financing)
  m4: "/images/lm3.jpg", // workers in PPE on site (ESMS in practice)
  m5: "/images/lm8.jpg", // solar array (measurable performance)
  m6: "/images/lm14.jpg", // capstone — the whole project, aerial Lagos highway
  b1: "/images/lm6.jpg",
  b2: "/images/lm7.jpg",
  b3: "/images/lm8.jpg",
  b4: "/images/lm9.jpg",
  b5: "/images/lm10.jpg",
  b6: "/images/lm12.jpg",
  c1: "/images/lm13.jpg",
  c2: "/images/lm14.jpg",
  c3: "/images/lm2.jpg",
  c4: "/images/lm3.jpg",
  c5: "/images/lm4.jpg",
  c6: "/images/lm1.jpg",
};

export const libraryItems = [
  {
    title: "Signed ESMS policy suite & Code of Conduct",
    note: "The governing policies, countersigned.",
    icon: "policy",
    accent: "#6366f1",
    doc: "code-of-conduct",
  },
  {
    title: "ESG Standards Foundation Reference",
    note: "IFC PS & Equator Principles, consolidated.",
    icon: "menu_book",
    accent: "#0ea5e9",
  },
  {
    title: "Security & Human Rights Handbook",
    note: "Voluntary Principles in practice.",
    icon: "shield",
    accent: "#10b981",
  },
  {
    title: "Job-aids A–E — keep at your post",
    note: "One-page reminders for daily tasks.",
    icon: "sticky_note_2",
    accent: "#f59e0b",
  },
  {
    title: "KPI sources — VHSE form, HSE report, HR workbook",
    note: "Where every reported number comes from.",
    icon: "bar_chart",
    accent: "#ef4444",
  },
  {
    title: "Conference pre-read pack — your workshop group",
    note: "Read before the next ESG workshop.",
    icon: "folder",
    accent: "#a855f7",
  },
];

// Library organised BY module — one line per module, each listing the
// documents related to it. An item with `doc` links to its in-app reading
// (see `documents`); the rest are placeholders ("coming soon").
export const libraryByModule = {
  m1: [
    { title: "What is ESG? — and what it is not", icon: "eco", doc: "what-is-esg" },
    { title: "E, S and G on site — the field guide", icon: "description", doc: "esg-impacts-guide" },
    { title: "The mitigation hierarchy & the chain of obligation", icon: "sticky_note_2", doc: "mitigation-hierarchy" },
  ],
  m2: [
    { title: "The four rulebooks & the more-stringent test", icon: "menu_book", doc: "ifc-equator-reference" },
    { title: "Jurisdiction file: Nigeria — law vs lender standards", icon: "gavel", doc: "nigeria-legal" },
  ],
  m3: [
    { title: "Reference pack — How the money works", icon: "account_balance", doc: "a3-money" },
  ],
  m4: [
    { title: "Reference pack — The ESMS", icon: "schema", doc: "a4-esms" },
    { title: "Signed ESMS policy suite & Code of Conduct", icon: "policy", doc: "code-of-conduct" },
  ],
  m5: [
    { title: "Reference pack — KPIs and reporting", icon: "monitoring", doc: "a5-kpis" },
  ],
  m6: [
    { title: "Launch the capstone simulation", icon: "sports_esports", to: "/capstone" },
  ],
  b1: [{ title: "Reference pack — Land, compensation & livelihoods", icon: "home_work", doc: "b1-land" }],
  b2: [{ title: "Reference pack — Workers, subcontractors & the camp", icon: "engineering", doc: "b2-workers" }],
  b3: [{ title: "Reference pack — Communities, traffic & labour influx", icon: "groups", doc: "b3-communities" }],
  b4: [{ title: "Reference pack — Harassment, security & human rights", icon: "security", doc: "b4-conduct" }],
  b5: [{ title: "Reference pack — Pollution, borrow pits & waste", icon: "recycling", doc: "b5-pollution" }],
  b6: [{ title: "Reference pack — Biodiversity & cultural heritage", icon: "forest", doc: "b6-biodiversity" }],
  c1: [{ title: "Reference pack — Instructing a subcontractor", icon: "assignment", doc: "c1-instructing" }],
  c2: [{ title: "Reference pack — Preparing for an IESC visit", icon: "content_paste_search", doc: "c2-iesc" }],
  c3: [{ title: "Reference pack — Investigating an incident", icon: "troubleshoot", doc: "c3-incident" }],
  c4: [{ title: "Reference pack — Handling a sensitive grievance", icon: "forum", doc: "c4-grievance" }],
  c5: [{ title: "Reference pack — Building a record that holds", icon: "fact_check", doc: "c5-records" }],
  c6: [{ title: "Launch the Pathway C simulation", icon: "sports_esports", to: "/capstone/c6" }],
};

// Company policies & official documents, grouped by category. An item with a
// `doc` key links to its in-app reading (see `documents` below); others are
// placeholders ("coming soon") ready to be filled as documents are provided.
export const resourceCategories = [
  {
    title: "Governance & Ethics",
    items: [
      {
        title: `${client.clientShort} Code of Conduct`,
        note: "Ethical standards for all staff, contractors & partners.",
        icon: "gavel",
        accent: "#6366f1",
        doc: "code-of-conduct",
      },
      {
        title: "Anti-Bribery, Anti-Corruption & AML Policy",
        note: "Bribery, conflicts of interest, KYC and AML controls.",
        icon: "account_balance",
        accent: "#f43f5e",
      },
      {
        title: "Whistleblowing Policy",
        note: "How to report concerns safely and without retaliation.",
        icon: "campaign",
        accent: "#0ea5e9",
      },
    ],
  },
  {
    title: "Health, Safety & Environment",
    items: [
      {
        title: "HSE Policy",
        note: "Safe systems of work, PPE and incident reporting.",
        icon: "health_and_safety",
        accent: "#10b981",
      },
      {
        title: "Environmental & Social Policy",
        note: "Pollution prevention, resource use and ESG commitments.",
        icon: "eco",
        accent: "#22c55e",
      },
      {
        title: "Emergency Preparedness & Response Plan",
        note: "Roles and procedures for accidents and emergencies.",
        icon: "emergency",
        accent: "#f59e0b",
      },
    ],
  },
  {
    title: "People & Community",
    items: [
      {
        title: "HR Employment Handbook",
        note: "Fair labour, working hours, rights and conduct.",
        icon: "groups",
        accent: "#a855f7",
      },
      {
        title: "GBVH / Anti-Harassment Policy",
        note: "Zero tolerance for harassment and gender-based violence.",
        icon: "diversity_3",
        accent: "#ec4899",
      },
      {
        title: "Community Grievance Mechanism (GRM)",
        note: "How host communities raise and resolve concerns.",
        icon: "forum",
        accent: "#14b8a6",
      },
    ],
  },
  {
    title: "Management System",
    items: [
      {
        title: "ESMS Manual",
        note: "The Environmental & Social Management System.",
        icon: "autorenew",
        accent: "#06b6d4",
      },
      {
        title: "Construction Environmental & Social Management Plan (CESMP)",
        note: "Project-specific ESG controls on site.",
        icon: "engineering",
        accent: "#3b82f6",
      },
    ],
  },
];

// The eight IFC Performance Standards — plain-language meaning + a concrete
// construction example for each. Used by the reference reading and the match
// exercise in Module 2.
export const ifcStandards = [
  {
    n: 1,
    title: "Assessment & Management of E&S Risks",
    plain:
      "The master standard: run a system (the ESMS) that finds, assesses and manages every E&S risk across the whole project.",
    example:
      "The contractor keeps a risk register, management plans and monitoring for a new road — one system covering all the other standards.",
  },
  {
    n: 2,
    title: "Labour & Working Conditions",
    plain:
      "Treat workers fairly and safely: fair pay and hours, no child or forced labour, safe conditions, and a grievance channel for workers.",
    example:
      "Giving every worker a written contract and PPE, and a way to report problems without fear of being sacked.",
  },
  {
    n: 3,
    title: "Resource Efficiency & Pollution Prevention",
    plain:
      "Use resources efficiently and prevent pollution of air, water and land; manage waste, emissions and greenhouse gases.",
    example:
      "Suppressing dust, reusing water, and sending used oil and chemicals only to licensed disposal.",
  },
  {
    n: 4,
    title: "Community Health, Safety & Security",
    plain:
      "Protect the surrounding community from project hazards; manage traffic, emergencies and security — with force only ever proportionate.",
    example:
      "Speed limits and signage where haul trucks pass a village, and guards trained never to use excessive force.",
  },
  {
    n: 5,
    title: "Land Acquisition & Involuntary Resettlement",
    plain:
      "Avoid or minimise displacing people; where unavoidable, compensate fairly and help restore their livelihoods.",
    example:
      "Paying fair compensation and helping a farmer re-establish income after land is taken for a bridge approach.",
  },
  {
    n: 6,
    title: "Biodiversity Conservation",
    plain:
      "Protect ecosystems and biodiversity; avoid critical habitat and manage living natural resources sustainably.",
    example:
      "Rerouting the works to avoid a wetland, and replanting the vegetation that had to be cleared.",
  },
  {
    n: 7,
    title: "Indigenous Peoples",
    plain:
      "Respect the rights, cultures and lands of Indigenous Peoples, and obtain Free, Prior & Informed Consent (FPIC) where required.",
    example:
      "Consulting an Indigenous community and securing FPIC before any work touches their ancestral land.",
  },
  {
    n: 8,
    title: "Cultural Heritage",
    plain:
      "Protect cultural heritage, and follow a chance-find procedure if artefacts are uncovered during works.",
    example:
      "Stopping excavation and calling in experts the moment a burial site or artefact is discovered.",
  },
];

// Equator Principles risk categories.
export const equatorCategories = [
  {
    id: "A",
    label: "Category A",
    color: "#f43f5e",
    level: "High risk",
    desc: "Potential significant adverse impacts that are diverse, irreversible or unprecedented.",
    example: "A new highway cutting through sensitive habitat and communities.",
  },
  {
    id: "B",
    label: "Category B",
    color: "#f59e0b",
    level: "Medium risk",
    desc: "Limited, mostly site-specific, largely reversible impacts that are readily managed.",
    example: "Upgrading an existing factory or widening a short road section.",
  },
  {
    id: "C",
    label: "Category C",
    color: "#10b981",
    level: "Low risk",
    desc: "Minimal or no adverse environmental or social impacts.",
    example: "A small office fit-out with no ground works.",
  },
];

// "Choose the right example" exercise: match a scenario to its Performance
// Standard. correct = index of the right option.
export const psMatchItems = [
  {
    prompt: "A worker gets a written contract, PPE, and a safe way to raise complaints.",
    options: ["PS2 — Labour & Working Conditions", "PS3 — Pollution Prevention", "PS5 — Land & Resettlement", "PS8 — Cultural Heritage"],
    correct: 0,
    tip: "Fair, safe treatment of workers is PS2.",
  },
  {
    prompt: "A farmer is fairly compensated and helped to restore income after land is taken.",
    options: ["PS4 — Community Health & Safety", "PS5 — Land Acquisition & Resettlement", "PS2 — Labour", "PS6 — Biodiversity"],
    correct: 1,
    tip: "Land take and livelihood restoration is PS5.",
  },
  {
    prompt: "Dust is suppressed and used oil is sent only to a licensed disposal site.",
    options: ["PS6 — Biodiversity", "PS7 — Indigenous Peoples", "PS3 — Resource Efficiency & Pollution Prevention", "PS1 — Assessment"],
    correct: 2,
    tip: "Preventing pollution and managing waste is PS3.",
  },
  {
    prompt: "Excavation stops immediately when a burial site is uncovered.",
    options: ["PS8 — Cultural Heritage", "PS4 — Community Health & Safety", "PS5 — Land & Resettlement", "PS2 — Labour"],
    correct: 0,
    tip: "Chance-find procedures for heritage are PS8.",
  },
  {
    prompt: "The team secures Free, Prior & Informed Consent before working on ancestral land.",
    options: ["PS5 — Land & Resettlement", "PS7 — Indigenous Peoples", "PS3 — Pollution Prevention", "PS1 — Assessment"],
    correct: 1,
    tip: "FPIC and Indigenous rights are PS7.",
  },
  {
    prompt: "Speed limits and signage are added where haul trucks pass a village.",
    options: ["PS2 — Labour", "PS6 — Biodiversity", "PS4 — Community Health, Safety & Security", "PS8 — Cultural Heritage"],
    correct: 2,
    tip: "Protecting the surrounding community is PS4.",
  },
];

// Capstone simulation — 5 ESG decisions on a PPP project that together decide
// whether the financing keeps flowing. Need `passNeeded` good calls to pass.
// The Pathway A capstone: twelve situations drawn from Modules A1-A5.
// Pass at 10 of 12. Per the Module A6 specification (v1.0).
export const capstoneSim = {
  title: "Capstone: keep the financing flowing",
  intro:
    "You are the site E&S lead on a financed road project. The lenders have signed, the standards are binding, and the independent consultant visits in eight weeks. Twelve situations will reach you — each one a real decision with a real cost. There is no option that costs nothing.",
  passNeeded: 10,
  steps: [
    {
      prompt: "A wetland sits on the alignment. The design team offers four ways forward.",
      options: [
        { text: "Ask first whether the alignment can shift to miss the wetland, and cost that option before any other", good: true, feedback: "Avoidance is step one, close to free during design, and unavailable later. The others are steps two to four — legitimate only once avoidance has been considered and documented." },
        { text: "Fund a wetland offset elsewhere", good: false, feedback: "Offset is the LAST step, and a reviewer's first question will be what avoidance you considered. Cash to a conservation body is not even an offset — it is how one might be funded." },
        { text: "Bridge the wetland rather than embank it", good: false, feedback: "Better than an embankment — but it is minimisation, step two. Nobody has yet asked whether the crossing is needed at all." },
        { text: "Cross now and restore the wetland afterwards", good: false, feedback: "Restoration is step three, and hydrological function rarely restores to what it was. The hierarchy exists precisely to stop this jump." },
      ],
    },
    {
      prompt: "Your environmental permit is valid. A community member tells your liaison officer the compensation schedule applied depreciation to every structure.",
      options: [
        { text: "Treat it as an open PS5 issue: check the valuation method, quantify any shortfall against full replacement cost, and plan top-ups", good: true, feedback: "A valid permit closes a legal question and no lender finding. Depreciation is the classic gap between national practice and PS5 — recalculate and top up, documented as such." },
        { text: "Point to the valid permit — the regulator approved the schedule", good: false, feedback: "The permit answers tier 1. The lender standards are a separate tier, and the regulator has no power to waive a standard it was never given to apply." },
        { text: "Refer the community member to the valuation office", good: false, feedback: "The valuation office applied national law correctly. The gap is the project's to close, not theirs." },
        { text: "Wait to see if a formal grievance is lodged", good: false, feedback: "If depreciation was applied across the register, this is a systematic finding, not a case. Waiting converts one correction into a hundred claims." },
      ],
    },
    {
      prompt: "A subcontractor's labour supplier holds his workers' identity documents — 'for safekeeping, the camp has no lockers'.",
      options: [
        { text: "Require the documents returned today, provide lockable storage, and address the supplier contractually", good: true, feedback: "A forced labour indicator, acted on regardless of intent. PS2 covers workers engaged by third parties — the contractual distance is paperwork, not a defence." },
        { text: "Treat it as the supplier's internal arrangement", good: false, feedback: "The finding lands on the project. PS2 applies to contracted workers, and PS1 requires you to manage and monitor third parties." },
        { text: "Ask the subcontractor to confirm in writing that the workers consent", good: false, feedback: "A consent letter for a forced labour indicator makes it worse: there is no legitimate reason to hold a worker's documents, and now the file proves you knew." },
        { text: "Note it for the next audit", good: false, feedback: "The correction costs nothing and removes a real harm today. Deferring it leaves twenty men unable to leave for another quarter." },
      ],
    },
    {
      prompt: "An ESAP action tied to the next disbursement is overdue. Work on it has started. Your PM wants it reported as 'on track'.",
      options: [
        { text: "Report it as overdue with a dated completion plan — progress is not closure, and the closing evidence has not been produced", good: true, feedback: "Right. An action closes on verified evidence, and an honest overdue with a plan is a manageable conversation. A false 'on track' discovered later is not." },
        { text: "Report it 'on track' — work has started", good: false, feedback: "Progress is not closure. When the disbursement is requested, the evidence will be asked for, and the report will be shown to have been wrong." },
        { text: "Mark it closed and finish the work before anyone checks", good: false, feedback: "A reviewer samples closed actions and asks for the evidence. One reopened action puts the whole tracker in doubt." },
        { text: "Ask for the action to be removed from the ESAP", good: false, feedback: "The ESAP is annexed to the financing agreement. Site does not amend it — and the request itself signals the project negotiates its commitments." },
      ],
    },
    {
      prompt: "The traffic management plan refers to haul routes changed eleven months ago. The consultant visits in three weeks.",
      options: [
        { text: "Revise it now, dated today, brief the drivers this week, and disclose both the gap and the correction", good: true, feedback: "Plans go stale when works change — ordinary, and fixable. Fixing it now and saying so demonstrates the system working." },
        { text: "Revise it and date it to when the routes changed", good: false, feedback: "IRREVERSIBLE. Back-dating converts a routine finding into an integrity one, it is usually detectable, and it poisons every other document you hold." },
        { text: "Leave it — the plan is approved and the routes work fine", good: false, feedback: "An approved stale plan is the textbook sign of documents without machinery, and it is the first thing a reviewer checks for currency." },
        { text: "Withdraw the plan from the document pack", good: false, feedback: "A missing mandatory plan is more conspicuous than a stale one, and the omission reads as deliberate." },
      ],
    },
    {
      prompt: "Your E&S officer asks for budget to fence three borrow pits near footpaths. Production says it is not in the price.",
      options: [
        { text: "Escalate it as a decision: the exposure quantified, the cost, the options — to someone with authority over the money", good: true, feedback: "Capacity is decided above you: money, reporting lines, authority. An unfenced pit beside a footpath is a life-safety exposure today, and 'not in the price' is an answer only a director can accept in writing." },
        { text: "Accept the answer — production owns the budget", good: false, feedback: "This is the capacity failure PS1 names: an E&S function that must beg funds from the person whose programme the requirement affects." },
        { text: "Tell the officer to keep asking", good: false, feedback: "Persuasion is what remains when the function has no authority. Six more weeks of asking is six more weeks of open pits." },
        { text: "Log it as a risk and move on", good: false, feedback: "A risk register entry does not fence a pit. The exposure is physical and daily." },
      ],
    },
    {
      prompt: "Four weeks of monitoring sheets were completed in one sitting, in one hand. The technician says he transcribed a notebook that no longer exists.",
      options: [
        { text: "Disclose the retrospective transcription, resume contemporaneous recording, and note it on the gap register", good: true, feedback: "The lapse is ordinary; concealing it is what turns it into a credibility finding that reaches every record the project holds." },
        { text: "Have the sheets redone with varied handwriting", good: false, feedback: "IRREVERSIBLE. Falsification — the worst option available, and the one most often suggested in the room." },
        { text: "Submit them as they are", good: false, feedback: "One hand, one pen, values that do not move with conditions that did: it is detectable, and the whole document set becomes assertion rather than evidence." },
        { text: "Remove the four weeks from the series", good: false, feedback: "An unexplained gap in a monitoring series is more conspicuous than the sheets, and the omission reads as deliberate." },
      ],
    },
    {
      prompt: "The grievance register shows zero entries this quarter — 400 workers, a host community, a live corridor.",
      options: [
        { text: "Report it as an open question about the channel, and test it: can a villager name the person she would tell, without entering the gate?", good: true, feedback: "An empty register is not a performance result. It usually means the channel is unknown, distrusted or unsafe — and a reviewer reads it that way whatever the covering note says." },
        { text: "Report it as a community relations achievement", good: false, feedback: "A perfect number is a warning. A project that cannot see its own operation is the conclusion the reviewer draws." },
        { text: "Report it without comment", good: false, feedback: "Silence invites the reviewer's own conclusion. Say what you checked and what you found." },
        { text: "Add a few informal complaints to make it look realistic", good: false, feedback: "Fabricating register entries is falsification — the same act as back-dating a document." },
      ],
    },
    {
      prompt: "The quarterly injury rate looks excellent — and you notice the hours exclude the labour supplier's 22 workers.",
      options: [
        { text: "Recalculate with everyone included, state the change of basis, and restate the prior period the same way", good: true, feedback: "A rate that excludes contracted workers is not the project's rate, and the exclusion is invisible in the number. PS2 covers workers engaged by third parties." },
        { text: "Accept it — they are not direct employees", good: false, feedback: "Scope is defined by the relationship to the project, not the contract. Incomplete numbers misstate the project's exposure." },
        { text: "Report both versions and let the reader choose", good: false, feedback: "Two versions of one indicator is exactly the document position a project must never hold." },
        { text: "Keep the basis and footnote it", good: false, feedback: "A footnote does not make an incomplete number complete. Fix the number, not the caption." },
      ],
    },
    {
      prompt: "The community asks that haulage stop during school hours. It costs nine percent of capacity. Your logistics manager says the banksman at the gate is enough.",
      options: [
        { text: "Impose the school-hour pause as an interim measure, and put the routing decision to the project director in writing, with cost and risk stated", good: true, feedback: "A decision with a foreseeable fatality at the end of it cannot sit with the person optimising haulage capacity. Six minutes is a price — someone with authority has to be shown the bill." },
        { text: "Let the logistics manager decide", good: false, feedback: "He has no authority to accept a fatality risk, and asking him to carry it is how the decision goes unmade." },
        { text: "Accept the banksman as the control", good: false, feedback: "Step four of the hierarchy: one point, part of the day, nothing for the two kilometres of shoulder the children walk." },
        { text: "Promise the community a study", good: false, feedback: "The interim measure costs nothing today. A study is how the exposure keeps running with a clear conscience." },
      ],
    },
    {
      prompt: "The independent consultant arrives. You hold a gap register with eleven open items, four of them high severity.",
      options: [
        { text: "Hand it over at the start — owners, dates, corrective actions, including the item you have not solved", good: true, feedback: "It changes what is assessed: from whether you know your position to whether your plan is adequate. And it protects the findings you missed — disclose eleven and miss one, and you are a project with a working system and a gap." },
        { text: "Hold it back and answer questions well", good: false, feedback: "Answering well protects nothing once the first undisclosed item is found. Their most damaging question is not what went wrong — it is whether you knew." },
        { text: "Disclose the comfortable seven and hold the four high-severity items", good: false, feedback: "Partial disclosure is discovered the same way as none, and it converts the seven disclosed items into camouflage." },
        { text: "Present the project's achievements first", good: false, feedback: "A curated opening is read as exactly that. The gap register IS the context." },
      ],
    },
    {
      prompt: "Your director asks you to confirm in writing that the project's E&S position is satisfactory.",
      options: [
        { text: "Decline, and offer the honest alternative: the gap register with owners, dates and corrective actions — the position, controlled", good: true, feedback: "A director shown a controlled path usually takes it. A written certification you know to be false converts technical findings into a personal integrity finding." },
        { text: "Sign it — the big items are in hand", good: false, feedback: "IRREVERSIBLE. It destroys the credibility of everything the E&S function says afterwards, and it will be quoted back at the worst moment." },
        { text: "Sign it with caveats noting the open items", good: false, feedback: "Worse than either alternative: the caveats prove you saw the problem and signed anyway." },
        { text: "Avoid answering until after the visit", good: false, feedback: "The question does not go away, and avoidance spends the credibility you will need at the closeout meeting." },
      ],
    },
  ],
};

// Pathway C capstone: "Deciding under programme pressure". You are the E&S
// lead on Section 3 — 52 km, 48% complete, eleven weeks behind on embankment,
// IESC visit in eight weeks. Ten decisions; every option costs something.
export const c6Sim = {
  title: "Deciding under programme pressure",
  intro:
    "You are the E&S lead on Section 3, eleven weeks behind on embankment, with the lenders' independent consultant visiting in eight weeks. Ten decisions over a simulated eight weeks — every option costs something.",
  passNeeded: 8,
  steps: [
    {
      prompt: "Week 1. A borrow pit close to the works has no mineral title and is not in the assessment. Using it would recover four weeks of programme. Your section manager wants to open it Monday.",
      options: [
        { text: "Do not open it: start the title application and screening now, and put the recovery option to the director with both the gain and the exposure stated", good: true, feedback: "Right. Regularising later leaves an unlawful extraction on the record for the whole period — and one unscreened pit can engage six standards plus national mining law." },
        { text: "Open it and regularise the title in parallel — permitting takes weeks you do not have", good: false, feedback: "Every day of extraction before the title is unlawful extraction on the record. 'Regularising later' feels proportionate and is the trap." },
        { text: "Open it, but limit extraction to what the embankment strictly needs", good: false, feedback: "A smaller unlawful extraction is still an unlawful extraction, and still an unassessed activity under PS1." },
        { text: "Refuse outright and absorb the four weeks without telling anyone why", good: false, feedback: "The refusal may be right, but a decision with a four-week programme cost taken silently by the E&S lead will not survive — put the trade in front of the person with authority to make it." },
      ],
    },
    {
      prompt: "Week 2. The compensation file for four parcels is with the ministry. The community leader offers written confirmation that the households are content for work to start.",
      options: [
        { text: "Do not enter. Escalate the payment delay and resequence the works to parcels where compensation is available", good: true, feedback: "Resequencing is available and nobody suggests it. A leader cannot waive an individual entitlement — the letter documents the breach rather than preventing it." },
        { text: "Take the letter and start — the community has agreed", good: false, feedback: "IRREVERSIBLE. Land entered before compensation is available cannot be corrected afterwards, and the letter makes the breach documented rather than deniable." },
        { text: "Start on the two parcels whose owners are present and consenting", good: false, feedback: "Consent given beside an excavator, before the money is available, is not consent in any sense a reviewer will accept." },
        { text: "Pay the households an advance from project funds and start", good: false, feedback: "A parallel, undocumented payment route outside the entitlement framework is its own serious finding." },
      ],
    },
    {
      prompt: "Week 3. Four pedestrian near misses on the haul road in four months — all recorded, none acted on. Rerouting costs nine percent of haulage capacity. The logistics manager says the banksman at the school gate is enough.",
      options: [
        { text: "Impose the school-hour pause today as an interim measure, and put the routing decision to the director in writing with cost and fatality risk stated", good: true, feedback: "Right. A decision with a foreseeable fatality at the end of it cannot sit with the person optimising haulage capacity — and four recorded events with no response is a PS1 system finding." },
        { text: "Accept the banksman and close the community request", good: false, feedback: "The banksman is step four of the hierarchy: one point, part of the day. It does nothing for the two kilometres of shoulder the children walk." },
        { text: "Let the logistics manager choose between rerouting and timed stoppages", good: false, feedback: "He cannot authorise a nine percent capacity reduction and should not be asked to carry this decision. That is exactly how it went unmade for four months." },
        { text: "Commission a road safety study reporting in six weeks", good: false, feedback: "Reasonable in isolation — and it leaves the exposure running for the length of the study, when the interim measure costs nothing today." },
      ],
    },
    {
      prompt: "Week 3. The labour supplier holds 22 workers' identity documents and charged placement fees. The subcontractor threatens to withdraw the crew if you interfere.",
      options: [
        { text: "Require the documents returned today, provide lockable storage, and write the decision up for the director with the programme implication attached", good: true, feedback: "The correction costs almost nothing and removes the harm today. His leverage rests on the arrangement itself: you are removing his control over the workers, not the workers." },
        { text: "Concede for now — the section is ahead of programme and the visit is in five weeks", good: false, feedback: "A section ahead of programme carrying a forced labour indicator is an undisclosed liability sitting on a good production figure. It will be found." },
        { text: "Escalate in the room: tell the manager his subcontract will be terminated", good: false, feedback: "Escalating in the room makes it personal and commits you to a position you cannot back out of. Write it up and move the decision to whoever has authority." },
        { text: "Report the supplier to the labour inspectorate and wait", good: false, feedback: "A legitimate later step, and it does nothing this week for 22 people who cannot leave." },
      ],
    },
    {
      prompt: "Week 4, Friday 16:20. A grader exposes possible human remains. The named chance find contact does not answer. The section manager suggests marking the spot and continuing thirty metres along until Monday.",
      options: [
        { text: "Secure the radius, stop work in that area entirely, escalate to the next named contact, and inform the community liaison officer tonight", good: true, feedback: "Working thirty metres away is still working in the area — it is how context is destroyed and how a community learns the project kept going. The upstream failure (one contact, no alternate) gets fixed next week." },
        { text: "Mark it and continue thirty metres along, as suggested", good: false, feedback: "IRREVERSIBLE. By Monday, whose grave it was can no longer be established — and the site becomes a place where the project dug up a grave and kept working." },
        { text: "Have the operator photograph it so a specialist can assess remotely over the weekend", good: false, feedback: "Photographing is handling, and it creates a circulating record of a sensitive site." },
        { text: "Backfill to protect the find and resume Monday", good: false, feedback: "Backfilling disturbs the find and looks, to anyone who learns of it later, indistinguishable from concealment." },
      ],
    },
    {
      prompt: "Week 5. Your liaison officer reports, without names, that compensation files are believed to move faster for those who visit a member of the land team at his accommodation. The grievance register is empty; its only intake point is the project office, where the land team sits.",
      options: [
        { text: "Remove the individual's discretion over file sequencing today, stand up a reporting route outside the project office, and confirm the referral pathway", good: true, feedback: "The control failure is actionable with no allegation at all: one person holding discretionary control over a benefit, with a route by which that discretion is believed to be traded." },
        { text: "Interview the women in the village to establish whether there is a case", good: false, feedback: "Seeking accounts before any confidentiality architecture, trained responder or referral pathway exists creates risk for the people who speak to you — and produces material you cannot handle safely." },
        { text: "Put it to the individual directly and record his response", good: false, feedback: "Achieves nothing evidentially and creates a retaliation risk against women he can identify from the substance of the question." },
        { text: "Ask the community leadership to look into it discreetly", good: false, feedback: "Delegates a matter the project owns to people who may be part of the gatekeeping, and removes every confidentiality protection at once." },
      ],
    },
    {
      prompt: "Week 6. You discover four weeks of dust monitoring sheets were completed in one sitting, in one hand. The technician says he transcribed them from a notebook that no longer exists. The IESC visit is in three weeks.",
      options: [
        { text: "Disclose that the four weeks were transcribed retrospectively and the source is lost, resume contemporaneous recording, and note it on the gap register", good: true, feedback: "Right. The underlying lapse is ordinary; hiding it is what turns it into a credibility finding that reaches every record the project holds." },
        { text: "Have the technician redo the sheets with varied handwriting and pens", good: false, feedback: "IRREVERSIBLE. That is falsification — the single worst option available, and the one most often suggested in the room." },
        { text: "Remove the four weeks from the monitoring pack", good: false, feedback: "An unexplained four-week gap in a monitoring series is more conspicuous than the sheets, and the omission reads as deliberate." },
        { text: "Submit the sheets as they are — the monitoring was probably done", good: false, feedback: "It is detectable: one hand, one pen, values that do not move with conditions that did. Submitting it converts a record-keeping problem into a credibility problem." },
      ],
    },
    {
      prompt: "Week 6. It is the driest month. The camp of 400 draws from a borehole shared with the village; the queue now starts before dawn and women are walking three kilometres to another source. No grievance has been submitted.",
      options: [
        { text: "Arrange interim water supply now, start a separate camp source, and go to the community before they come to you", good: true, feedback: "The agreement was made in the wet season by people who could not know what 400 daily users would mean now. A separate borehole costs a fraction of the grievance settlement, the water trucking and the two years of hostility." },
        { text: "Wait for a grievance so the response can be properly documented", good: false, feedback: "Waiting for the grievance is waiting for the relationship to break." },
        { text: "Reduce camp water use and monitor the yield weekly", good: false, feedback: "Necessary and insufficient — demand reduction will not restore a yield already failing at the wrong end of the dry season." },
        { text: "Nothing — the arrangement was agreed with the leadership", good: false, feedback: "Consent given without the information does not hold, and the community has not yet connected the queue to the project. It will." },
      ],
    },
    {
      prompt: "Week 7. Your director asks you to confirm in writing that the section's E&S position is satisfactory ahead of the visit.",
      options: [
        { text: "Decline the confirmation, and offer the honest alternative: the gap register with owners, dates and corrective actions — the position, controlled", good: true, feedback: "A confirmation you know to be false converts technical findings into a personal integrity finding. A director shown a controlled path usually takes it." },
        { text: "Sign it — the big items are being corrected anyway", good: false, feedback: "IRREVERSIBLE. A written certification of a position you knew to be false destroys the credibility of everything the E&S function says afterwards." },
        { text: "Sign it with caveats noting the outstanding items", good: false, feedback: "The caveat does not cure it — it demonstrates that you saw the problem and signed anyway. Worse than either alternative." },
        { text: "Avoid answering until after the visit", good: false, feedback: "The question does not go away, and avoidance spends the credibility you will need in the closeout meeting." },
      ],
    },
    {
      prompt: "Week 8. The visit. The reviewer sits down and asks how you would like to begin.",
      options: [
        { text: "Hand over the gap register: every open item, four high severity, owners and dates — including the one you have not solved, on which you ask her view", good: true, feedback: "It changes what is being assessed: from whether you know your position to whether your plan is adequate. And it protects the findings you missed — a project that discloses eleven and misses one has a working system and a gap." },
        { text: "Hand over nothing, and answer questions well as they come", good: false, feedback: "Answering well protects nothing once the first undisclosed finding is discovered. Their most damaging question is not what went wrong — it is whether you knew." },
        { text: "Present the section's achievements first to set the context", good: false, feedback: "Reviewers read a curated opening as exactly that. The gap register IS the context." },
        { text: "Disclose the comfortable items and hold back the compensation shortfall", good: false, feedback: "A quantified shortfall exists in a spreadsheet somebody has. Once found, the disclosed items stop being evidence of a working system." },
      ],
    },
  ],
};

// Simulations by module id (m6 = Pathway A capstone, c6 = Pathway C capstone).
export const capstoneSims = { m6: capstoneSim, c6: c6Sim };


// Reference documents rendered as in-app readings. `keyPoints` is a faithful
// summary for on-screen study; the full signed source is embedded via `pdf`.
export const documents = {
  "code-of-conduct": {
    title: `${client.clientShort} Code of Conduct`,
    org: client.clientLegal,
    ref: client.codeOfConduct.ref,
    owner: client.codeOfConduct.owner,
    accent: "#6366f1",
    pdf: client.codeOfConduct.pdf,
    acknowledge: true,
    intro:
      `The ethical principles and behavioural standards expected of all ${client.clientShort} employees, contractors, consultants, suppliers and partners, across every operation and project site. It is part of the company's ESMS and is read alongside the ESMS policies and HR Employment Handbook.`,
    sections: [
      {
        title: "Commitment & compliance",
        points: [
          "Conduct business with integrity, professionalism and sustainability.",
          "Comply with national laws, IFC Performance Standards, ILO Core Conventions, Equator Principles IV, the UN Guiding Principles (UNGPs) and the Voluntary Principles on Security & Human Rights (VPSHR).",
          "Meet anti-corruption, AML, sanctions and OHS requirements, including project-specific CESMPs.",
        ],
      },
      {
        title: "Health, Safety & Environment",
        points: [
          "Follow safe work procedures and use PPE at all times.",
          "Take part in toolbox talks, risk assessments and safety training.",
          "Report unsafe acts or incidents immediately; follow site traffic, security and emergency rules.",
          "Protect environmental resources and avoid pollution or waste. Smoking only in designated areas; drugs and alcohol strictly prohibited.",
        ],
      },
      {
        title: "Human rights & fair labour",
        points: [
          "No child labour or forced labour in any form.",
          "No discrimination, harassment or abuse of power; fair recruitment, equal pay and safe conditions.",
          "Uphold freedom of association, collective bargaining, rest days and just working hours.",
        ],
      },
      {
        title: "Gender-based violence & harassment (GBVH)",
        points: [
          "Zero tolerance for sexual harassment, abuse and gender-based violence.",
          "Complete GBVSH training; refrain from unwanted attention, harassment or coercion.",
          "Respect the dignity of women and all vulnerable groups at work and in the community.",
        ],
      },
      {
        title: "Anti-bribery, anti-corruption & AML",
        points: [
          "No bribery, kickbacks, facilitation payments or conflicts of interest.",
          "No dealings involving criminal proceeds or sanctioned parties; gifts must not influence decisions.",
          "KYC and AML/ABC screening required; all payments traceable through approved channels.",
        ],
      },
      {
        title: "Community, confidentiality & third parties",
        points: [
          "Respect local customs and cultural heritage; protect community access to water, roads and utilities.",
          "Handle grievances through the defined Grievance Redress Mechanism (GRM).",
          "Protect personal data and confidential information; use company systems responsibly.",
          "Suppliers and subcontractors must sign the Supplier Code, train staff and cooperate in audits.",
        ],
      },
      {
        title: "Reporting, whistleblowing & enforcement",
        points: [
          "Report violations to the HSE Manager, HR Manager or Managing Director, or via grievance boxes / anonymous channels.",
          "Retaliation against whistleblowers is prohibited; reports are handled confidentially.",
          "Breaches may lead to warnings, suspension, dismissal, contract termination or legal action.",
        ],
      },
    ],
    relatedModules: ["m4", "m1", "m2"],
  },

  "what-is-esg": {
    title: "What is ESG? — and what it is not",
    org: "Module 1 · reading 1 of 3 — start here",
    accent: "#06b6d4",
    image: "/images/esg-environment.jpg",
    intro:
      "ESG stands for Environmental, Social and Governance — the three non-financial dimensions along which a project is judged by banks, insurers, regulators, clients and communities. This reading explains what each pillar means on a construction site, the correction that matters most (E&S is NOT ESG minus the G), where the rules actually came from, and an honest answer to the question everyone asks but rarely out loud.",
    sections: [
      {
        title: "Why this discipline exists — a story that happens more often than the industry admits",
        body: [
          "A contractor opens a borrow pit to win laterite for an embankment. The land is scrubby, apparently unused, and nobody complains at first. Six weeks later the pit is twelve metres deep and full of standing water. Two children drown in it. The community blocks the haul road. Work stops on a fourteen-kilometre section. The lender's monitoring consultant arrives and finds no borrow pit management plan, no closure design, no fencing, no record of any consultation — and no evidence that anyone ever asked who used that land.",
          "The project's technical work was sound. The embankment was well built. But the project had failed anyway, and the failure was expensive: months of delay, a suspended disbursement, a compensation claim, and a story that will follow the contractor into its next tender.",
          "Nothing in that sequence required specialist knowledge to prevent. It required someone to ask, before the first excavator arrived, three ordinary questions: Who uses this land? What happens to this hole when we finish? Who has agreed to this? ESG is the discipline of making sure somebody asks those questions — and that the answers are written down, acted on, and checked.",
        ],
      },
      {
        title: "The three pillars, in site language",
        body: "For most of the twentieth century a company was assessed on one question: does it make money? ESG adds a second, asked with equal seriousness: is that money made in a way that does not destroy things, harm people, or depend on dishonesty?",
        points: [
          "Environmental — our effect on the physical and living world. On a road project: dust over a settlement, silt in a stream, a wetland drained, a borrow pit left open, fuel in the soil, trees cleared without a count.",
          "Social — how we treat the people we employ and the people who live with our impacts: a worker without a harness on a bridge deck, a camp with one latrine for eighty men, a farmer whose field is now a haul road, waiting for a payment.",
          "Governance — whether our systems, records and decisions are honest and verifiable: a payment to accelerate a permit, a safety register filled in on Friday for the whole week, a grievance logged as closed that was never resolved.",
        ],
      },
      {
        title: "The correction that matters most: E&S is not 'ESG minus the G'",
        body: [
          "You will very often hear that E&S is simply ESG without governance. That is wrong, and the mistake causes real confusion. E&S is not a smaller version of ESG — it is a different unit of analysis. ESG assesses an ORGANISATION. E&S assesses a PROJECT. Governance is fully present in both; at project level it appears under different names: management system, organisational capacity, competency, accountability, monitoring, reporting.",
          "IFC Performance Standard 1 requires an Environmental and Social Management System whose elements are: policy; identification of risks and impacts; management programmes; organisational capacity and competency; emergency preparedness and response; stakeholder engagement; and monitoring and review. Read that list again — it is governance, described in project language.",
          "So the honest formulation: E&S is the project-level, contractually binding scope that lenders assess and monitor. ESG is the broader corporate-level lens, much of which is voluntary. Governance runs through both.",
        ],
        example:
          "A useful test: can a company score well on ESG and still fail an E&S audit? Yes — routinely. A contractor may have an excellent published sustainability report and an appalling worker camp. Ratings measure disclosure; audits measure reality.",
      },
      {
        title: "Two more terms you will hear",
        points: [
          "Sustainability and CSR — looser umbrella terms for voluntary initiatives, donations and reporting. Do not confuse a school built as a goodwill gesture with a resettlement obligation owed under a financing agreement: one is a choice, the other is a debt.",
          "HSE / EHS / SHEQ — the safety and environment function most sites already have. It overlaps with E&S but is narrower: it typically stops at the site gate, whereas E&S extends to everyone the project affects — including people who will never set foot on the site.",
        ],
      },
      {
        title: "Where the rules came from: two family trees",
        body: [
          "People often tell the history of ESG as a single story beginning with a UN report in 2004. That is tidy, and misleading, because it merges two lineages that developed separately. The investor lineage: 'Who Cares Wins' (2004) coined the acronym and argued E&S+G factors are financially material; the Principles for Responsible Investment followed in 2006, then ratings and disclosure regimes. Powerful — but mostly not enforceable against a site foreman.",
          "The project finance lineage is the one that reaches your site, and it is older. The World Bank's Operational Policies (1980s–90s) created impact assessment (OP 4.01) and resettlement practice (OP 4.12 — people displaced by a project must be compensated and their livelihoods restored, whether or not they hold legal title). Private banks adopted the Equator Principles in 2003 (EP4 since 2020). The IFC published its Performance Standards in 2006, revised 2012 — the reference benchmark everything else points to.",
          "The Africa lens: the African Development Bank operates its own Integrated Safeguards System, updated in 2023 with ten Operational Safeguards. On co-financed projects you may be assessed against both frameworks — where they differ, the more stringent applies. And a precision worth having: the IFC is a member of the World Bank GROUP, not the World Bank itself. The World Bank lends to governments (its ESF has ten standards); the IFC finances private companies (eight Performance Standards). Knowing which institution finances your project tells you which rulebook you are audited against.",
        ],
      },
      {
        title: "An honest answer to an honest question: is ESG a foreign agenda?",
        body: [
          "This question is asked in every training room on the continent, usually not out loud, and it deserves a straight answer. What is fair in it: the industrial infrastructure of Europe and North America was built without impact assessment, without resettlement standards, and frequently with labour conditions that would today constitute serious violations. That asymmetry is real. So is the capacity cost: standards written in Washington carry assumptions about specialists and data that fall hardest on local contractors.",
          "What is not accurate: the substance is not imported. African states legislated environmental protection on their own authority — Nigeria's EIA regime dates from 1992, Kenya's framework from 1999. The African Development Bank, headquartered in Abidjan, runs its own safeguards. The African Charter on Human and Peoples' Rights (Nairobi, 1981) recognised the right to a satisfactory environment before equivalent European instruments did. And most importantly: the costs of unmanaged impacts are borne locally. The communities of the Niger Delta did not need a Performance Standard to know what happens when extraction proceeds without control — they needed one to be ENFORCED.",
          "The honest position: these standards are a body of accumulated learning about how large projects harm people — much of it paid for by African communities. The legitimate complaint is not that they are too demanding; it is that they arrived late, are applied unevenly, and the capacity to meet them has been under-invested in. The correct response is to build the capacity — which is what this pathway is for.",
        ],
      },
      {
        title: "Six things people believe that are not true",
        points: [
          "“ESG is just public relations.” On a financed project it is a binding contractual condition with money attached — conditions precedent, covenants and disbursement tests are legal instruments.",
          "“ESG slows us down.” Done early it is close to cost-neutral. Done late it becomes rework, stoppage and retrofit — the delay people remember is E&S having been left too late.",
          "“That is the ESG team's job.” The ESG team designs and verifies. It cannot wet a haul road, refuse an unsafe lift, log a grievance honestly or stop a grader at a burial site.",
          "“We comply with national law, so we are fine.” On almost any financed African project: national law PLUS the IFC Performance Standards PLUS the EHS Guidelines, the more stringent prevailing.",
          "“It is the subcontractor's problem.” The finding is recorded against the project. Naming the subcontractor is an explanation, not a defence.",
          "“If we do not write it down, it did not happen.” The opposite is true — an unrecorded incident that surfaces later is treated as concealment, a governance finding of a higher order than the original issue.",
        ],
      },
    ],
    relatedModules: ["m1", "m4", "m3"],
  },

  "esg-impacts-guide": {
    title: "E, S and G on site — the field guide",
    org: "Module 1 · reading 2 of 3",
    accent: "#06b6d4",
    image: "/images/lm3.jpg",
    intro:
      "The three pillars in operational depth: the eight environmental areas you are accountable for, the social requirements that most often stop a project, the four components of governance with what a failure actually costs — and the six actors watching, each holding a different instrument of pressure.",
    sections: [
      {
        title: "E — the eight areas you are accountable for",
        points: [
          "Air quality and dust — haul roads, crushing, earthworks settling on homes, crops and drying food; exhaust from plant (PS3; EHS Guidelines 1.1).",
          "Water — sediment run-off turning a stream brown, concrete washout raising pH, fuel and oil from workshops, untreated camp sewage, over-abstraction from a source a village depends on (PS3; EHS 1.3–1.4).",
          "Noise and vibration — night piling near homes, blasting cracking walls. Sleep disruption is a health impact, not an inconvenience (PS3, PS4; EHS 1.7 sets day AND night limits by receptor).",
          "Land, soil and erosion — stripped slopes gullying in the first heavy rain, topsoil buried instead of stockpiled, contaminated ground at fuel points (PS3, PS1).",
          "Borrow pits and quarries — the single most under-managed issue on African road projects: unlicensed extraction, no closure design, open water bodies, drowning risk, permanent land loss (PS1, PS3, PS4, PS5).",
          "Biodiversity and habitat — clearance without survey, wetlands crossed without hydrological design, critical habitat encountered late, invasive species on plant and imported fill (PS6).",
          "Waste and hazardous materials — used oil poured on roads for dust suppression, bitumen drums reused for drinking water, no segregation, no manifest, no licensed disposal route (PS3; EHS 1.6).",
          "Climate and greenhouse gases — unquantified emissions from plant, haulage, cement and clearance; flood and heat exposure designed for yesterday's climate rather than the asset's design life (PS3; EP4 climate risk assessment).",
        ],
        example:
          "On a coastal section, earthworks ran through the rainy season without silt fencing. Sediment reached a fishing creek; the community reported a collapse in catch and skin complaints among children. The fix — silt fences, check dams, a settlement pond — would have cost a fraction of one percent of the section value and taken four days. What it actually cost: a work stoppage, a corrective action plan, an imposed monitoring programme, and a community relationship that never fully recovered. That gap between prevention cost and failure cost is the entire economic argument for this pathway.",
      },
      {
        title: "S — your workforce (PS2)",
        points: [
          "Written terms of employment, in a language the worker understands; wages in full, on time, without unlawful deduction; hours within limits.",
          "Occupational health and safety through the hierarchy: eliminate, control at source, minimise, and only then PPE. A helmet is the last line of defence, not the strategy.",
          "Freedom of association without interference or retaliation — even where national law restricts it, alternative means to organise must not be restricted.",
          "Non-discrimination in recruitment, pay, training and promotion. Absolute prohibitions on child labour and forced labour (ILO 138/182 and 29/105) — withheld passports, debt bondage and recruitment fees are forced-labour indicators, whatever they are called locally.",
          "Worker accommodation to the IFC/EBRD standard: floor area, sanitation ratios, ventilation, food safety — and accommodation management SEPARATED from employment, so losing a bed does not mean losing the job.",
          "A worker grievance mechanism — separate from the community one, without retaliation, not impeding other remedies.",
          "Contractors and supply chain: PS2 extends to workers engaged by third parties. Subcontracting does not transfer the obligation — it transfers only the work.",
        ],
      },
      {
        title: "S — the communities around you (PS4, PS8)",
        points: [
          "Community health and safety: on a road project the dominant risk is TRAFFIC — construction haulage on public roads kills more people on African road projects than any single on-site hazard. Traffic management, speed governors, banned overtaking zones, driver rotation and school-hours restrictions are not optional refinements.",
          "Labour influx: several hundred workers beside a village of two thousand changes prices, water availability, disease transmission, sexual dynamics and local politics. Predictable and manageable — not an accident.",
          "Sexual exploitation, abuse and harassment: a distinct risk category with its own architecture — a code of conduct signed by every worker, mandatory training, a survivor-centred confidential reporting channel, and a referral pathway that exists BEFORE an incident.",
          "Security and human rights: assess risks, screen for past abuses, train in use of force, provide a grievance channel; where public security forces protect the project, the Voluntary Principles are the operative reference.",
          "Cultural heritage (PS8): a chance find procedure — what happens when a grader exposes a burial, a shrine or an artefact — must exist, be known to the operator, and stop the work.",
        ],
      },
      {
        title: "S — land and livelihoods (PS5): the highest-risk area on almost every road project",
        points: [
          "Compensation at FULL REPLACEMENT COST: market value plus transaction costs, WITHOUT deduction for depreciation. A twenty-year-old house is compensated at the cost of an equivalent NEW house. The most frequently mishandled calculation on the continent.",
          "Possession of land only AFTER compensation has been made available. Entering land before payment is one of the clearest and most serious findings a lender can make.",
          "Eligibility is NOT restricted to title holders: PS5 extends to recognisable claims under national law AND to those with no legal right at all. A cut-off date is established and communicated to fix eligibility.",
          "Livelihoods must be RESTORED, not merely compensated: a trader who loses a roadside stall needs a functioning place to trade, not only a cash sum.",
          "Vulnerable groups (PS1): female-headed households, the elderly, people with disabilities, pastoralists, informal traders. A census at ten in the morning on a market day systematically misses several of these categories — a methodological failure with real consequences.",
        ],
        example:
          "A resettlement census recorded 412 affected households. A verification eight months later found 63 more — almost all women running informal roadside trade and pastoralist families using seasonal grazing. The consequence was not only a compensation shortfall: once a community learns the count was wrong, every subsequent figure the project publishes is disbelieved, including the correct ones.",
      },
      {
        title: "G — the four components, and what a failure actually costs",
        body: "Governance is whether the environmental and social commitments are real or decorative. Four components: ethics and anti-corruption (a facilitation payment is unlawful under most financing agreements even where local practice tolerates it); record integrity (a falsified record is treated MORE seriously than the underlying failure, because it destroys the credibility of every other record); accountability (an E&S manager with no budget and no authority is a documented non-conformity); and speak-up channels (if the first person to use one is identified and punished, the channel is dead and everyone knows it). Forget the myth that one small bribe collapses the loan overnight — the actual mechanism is slower and more sobering:",
        points: [
          "1. Detection — internal audit, a complaint, the supervision engineer, or the lenders' IESC on a site visit.",
          "2. Finding — recorded as a non-conformity with a severity rating; the report goes to the lenders.",
          "3. Corrective action — into the ESAP with a named owner and a deadline. Most issues are resolved here.",
          "4. Escalation — persistent or severe failure triggers formal notice, with a cure period under the financing agreement.",
          "5. Financial consequence — suspended disbursement, additional conditions, and in the extreme an event of default.",
          "The realistic risk is cumulative: a pattern of small failures builds a monitoring record that makes the next disbursement conditional and the next contract unwinnable.",
        ],
      },
      {
        title: "Who cares about ESG — and what each of them can do to you",
        points: [
          "Lenders and investors — withhold a disbursement, impose conditions, require corrective actions at your cost, and in extremis declare default.",
          "Regulators — fines, stop-work notices, permit revocation, criminal prosecution of officers in some jurisdictions.",
          "Communities — block access, escalate to media and civil society, file with a lender's accountability mechanism, litigate.",
          "Client and host government — withhold certification and payment, apply penalties, exclude from future tenders.",
          "Workers — leave, strike, report externally; on a tight labour market, attrition of skilled staff is a direct commercial cost.",
          "Insurers and future clients — price up cover, decline cover, or disqualify at prequalification on past E&S performance.",
          "Only ONE of those six is a regulator. The idea that E&S is a matter between a company and a government agency is thirty years out of date.",
        ],
      },
      {
        title: "What good performance buys",
        points: [
          "Fewer people are harmed — the first reason, and it needs no financial justification.",
          "The money keeps flowing — disbursement is conditional, and meeting E&S conditions is what converts a signed facility into cash.",
          "The programme holds — blockades, stop-work notices and investigations are among the largest AND most preventable sources of delay.",
          "The next contract becomes winnable — E&S performance is now a prequalification criterion on most donor-funded and PPP tenders.",
          "It is cheaper — prevention costs are small, known and budgetable; remediation costs are large, unbudgeted, and arrive with legal and reputational consequences attached.",
        ],
        example:
          "A single construction fatality typically produces: an immediate stoppage, a regulatory investigation, a root-cause investigation, a lender notification, a special report, a corrective action plan, a settlement with the family — and a permanent entry in the incident record disclosed at every future prequalification. The measures that would have prevented it are almost always known, cheap, and already identified in a risk assessment somebody signed.",
      },
    ],
    relatedModules: ["m1"],
  },

  "mitigation-hierarchy": {
    title: "The mitigation hierarchy & the chain of obligation",
    org: "Module 1 · reading 3 of 3 — keep this at your post",
    accent: "#06b6d4",
    image: "/images/lm8.jpg",
    intro:
      "If you remember one technical concept from the whole pathway, make it the mitigation hierarchy — the organising logic of the entire discipline, and the thing auditors most reliably find missing. This reading also traces how a rule travels from a loan agreement in a bank to a specific instruction on your site, who checks, and the five questions to ask before you break ground.",
    sections: [
      {
        title: "The hierarchy: four steps, strictly in order",
        body: "PS1 requires the mitigation hierarchy to be applied to every identified risk and impact — favouring avoidance over minimisation, with compensation or offset only for residual impacts. Worked example: a wetland on the alignment.",
        points: [
          "1 · AVOID — can we design the impact out entirely? Realign the road around the wetland. Always the first question, and the one most often skipped because the alignment is treated as fixed before anyone has looked.",
          "2 · MINIMISE — reduce the crossing width, build a viaduct rather than an embankment, restrict works to the dry season, prohibit night lighting near the water.",
          "3 · RESTORE — reinstate hydrological connectivity, replant native species, regrade and revegetate temporary access.",
          "4 · COMPENSATE / OFFSET — deliver an equivalent gain elsewhere, to a measurable no-net-loss objective. Cash alone is not an offset.",
        ],
      },
      {
        title: "Three rules people get wrong",
        points: [
          "The order is BINDING, not advisory. You may not jump to compensation because it is cheaper or faster — a reviewer will ask what avoidance options were considered and why they were rejected, and expects a documented answer.",
          "It applies to PEOPLE as well as habitats: PS5 opens with a requirement to avoid displacement through alternative designs. Resettlement is step four, not step one — a thirty-metre alignment shift that avoids twelve houses is worth more than any compensation package.",
          "It applies to SAFETY: eliminate the hazard, then engineer controls, then administrative controls, then PPE. If your strategy begins and ends with issuing helmets, you started at step four.",
          "Why the hierarchy really fails: not ignorance, but timing — steps one and two require a decision earlier, by someone more senior. That is why the questions must be asked before the excavator arrives.",
        ],
      },
      {
        title: "The chain of obligation: how a rule reaches your site",
        points: [
          "1 · Lenders — a financing agreement with conditions precedent, E&S covenants, an action plan and reporting obligations.",
          "2 · Borrower / concessionaire — passes obligations into the construction contract, plus a duty to supervise and report.",
          "3 · EPC contractor — turns them into management plans: ESMP, traffic, waste, borrow pits, camp, code of conduct.",
          "4 · Subcontractors and suppliers — flow-down clauses, induction, right of audit.",
          "5 · The individual on site — a specific instruction: wet this haul road, log this grievance, do not enter that land, stop if you uncover a burial.",
          "The obligation flows down but the liability does NOT flow away: if a subcontractor employs a fifteen-year-old, the finding is against the project.",
          "Everything above the last link is a plan. Only what the operator does on the ground is performance — 'ESG is everybody's job' is a structural fact about how the chain terminates, not a slogan.",
        ],
      },
      {
        title: "Who checks — and the rule that decides how you are judged",
        points: [
          "Internal: your own E&S/HSE team — inspections, monitoring, self-monitoring reports to the lenders on a defined cycle.",
          "Client side: the employer's engineer, with authority to instruct and sometimes to suspend.",
          "Lender side: the IESC — appointed by and reporting to the lenders. Not your adviser, not there to help you pass: their function is to give lenders an accurate picture.",
          "Regulators: environmental agency, labour inspectorate, minerals authority, water regulator — independent powers of inspection and sanction.",
          "Communities: the grievance mechanism — and when that fails, the road block, the press, and the DFIs' accountability mechanisms.",
          "THE RULE: a problem you found, recorded and were correcting is evidence of a working system. The identical problem discovered by the IESC, absent from your records, is evidence the system does not work. Same facts — opposite conclusion about your organisation. Disclose.",
        ],
      },
      {
        title: "Case in point: the borrow pit at Km 214",
        body: [
          "You are eleven weeks behind on embankment. Your quarry manager finds a laterite source 800 m from the alignment: it cuts haulage by 19 km and recovers five weeks. A community leader says the land is unused, asks for two million naira to the community development committee, and offers to sign a consent letter. There is no management plan, the site is not in the approved ESIA, a seasonal stream runs 120 m east, and the minerals office takes eight weeks to issue a permit. The IESC visits in six weeks.",
          "Run the framework: step one of the hierarchy is not 'how do we manage this pit' but 'do we NEED this pit' — an already-permitted source, a commercial quarry, reused cut material. 'Uncultivated' is a claim, not a finding: scrubland is grazed, gathered, crossed and held sacred — none of which appears in one visit with the person who wants the payment. The lump-sum payment is not compensation: PS5 entitlements are calculated per affected person and paid directly; a community benefit is a separate, transparent negotiation, never a substitute. The consent letter is worth less than nothing — in a dispute it proves the project knew consent was required and chose the cheapest route to it.",
          "Nobody in this scenario is a bad actor. Almost every serious E&S failure looks exactly like this from the inside: individually reasonable decisions, under real pressure, by people who were not asked the question that mattered. That is why the framework exists as standing requirements rather than individual judgement.",
        ],
      },
      {
        title: "Job aid: five questions before you break ground",
        points: [
          "1 · Is this activity, at this location, inside the assessed and approved scope? New pits, camps, access tracks and spoil areas are usually the answer — and usually no. If unclear: stop, screen, notify.",
          "2 · Who USES this land, and how do I know? Not who owns it. Ask women, pastoralists and youth separately, away from whoever benefits from the answer. An informal user is still an affected person under PS5.",
          "3 · What is the impact, and have I applied the hierarchy IN ORDER — with what I rejected at each step written down?",
          "4 · What happens to this when we finish? Design the closure NOW — a pit designed only for maximum yield cannot be safely closed at any price.",
          "5 · If the IESC asked me today, could I show the record? The permit, the plan, the consultation record, the grievance log, the monitoring data.",
          "And the rule that overrides all five: if you find a problem, DISCLOSE it.",
        ],
      },
    ],
    relatedModules: ["m1"],
  },

  "ifc-equator-reference": {
    title: "The four rulebooks & the more-stringent test",
    org: "Module A2 · reading 1 of 2",
    accent: "#f59e0b",
    image: "/images/lm5.jpg",
    intro:
      "On a financed infrastructure project, four distinct bodies of requirement apply simultaneously — and satisfying one has no effect on the others. This reference explains the four tiers, the EP4 rule that decides which standards apply in Africa, how to run the more-stringent test properly, and the six areas where national frameworks characteristically fall short.",
    sections: [
      {
        title: "Four rulebooks, not one",
        points: [
          "Tier 1 · National law — statutes, regulations and permit conditions, enforced by regulators and courts with criminal and administrative sanction. Protects you from prosecution.",
          "Tier 2 · Lender standards — the IFC Performance Standards, the WBG EHS Guidelines, and where applicable the AfDB Safeguards; incorporated by reference into the financing agreement and enforced through the IESC, the ESAP and covenants. Protects your disbursement.",
          "Tier 3 · The project contract — the construction contract, the ESMP and the project's own plans, enforced by the employer's engineer with power to instruct and sometimes suspend. Protects your payment certificate.",
          "Tier 4 · Good international industry practice — the skill and foresight expected of competent professionals, applied by the IESC and, if it comes to it, a court. Protects you when something happens that none of the first three anticipated.",
          "Neither tier displaces another: the PS Overview requires compliance with national law IN ADDITION to the standards, and the EHS Guidelines expect whichever level is MORE STRINGENT to be achieved.",
        ],
      },
      {
        title: "EP4 Principle 3: the two categories of country",
        body: [
          "The Equator Principles are how the Performance Standards reach commercial bank financing, and Principle 3 is the single most consequential provision for anyone working in Africa. It divides the world into Designated Countries — essentially the high-income OECD, where national law is deemed to deliver equivalent protection — and Non-Designated Countries. Every country in Sub-Saharan Africa is Non-Designated.",
          "The consequence is direct and non-negotiable: on an EP-financed project, the applicable standard is host country law TOGETHER WITH the IFC Performance Standards and the WBG EHS Guidelines. A team that has read the national statute and stopped there has read about one quarter of what applies to it.",
          "A point of self-respect as well as compliance: the classification concerns the ENFORCEMENT environment, not the substance of national legislation — Nigeria's assessment statute is not weaker than a French one in what it requires; the gap is in resourcing and consistency of enforcement. And the practical effect of Non-Designated status is that communities receive MORE protection than national law alone would give them, particularly on land and labour.",
        ],
      },
      {
        title: "The rest of EP4, briefly",
        points: [
          "P1 Categorisation — A, B or C by magnitude of risk. Most major road and PPP work is Category A, with the fullest obligations.",
          "P2 Assessment — proportionate to risk, to the applicable standards, including climate risk for defined categories.",
          "P4 ESMS and Action Plan — the ESAP that governs your corrective actions exists because of this principle.",
          "P5 Stakeholder engagement — effective and ONGOING; one consultation event at design stage does not satisfy it.",
          "P6 Grievance mechanism — the community GRM is an EP4 obligation as well as a PS1 one.",
          "P7 & P9 Independent review and monitoring — the IESC before financial close and throughout the loan.",
          "P8 Covenants — the mechanism that converts a standard into money.",
          "P10 Reporting — why documents you consider internal become publicly available.",
        ],
      },
      {
        title: "Running the more-stringent test — five steps",
        points: [
          "1 · Identify the SPECIFIC requirement. Not 'compensation' — 'how is the value of a demolished dwelling calculated'.",
          "2 · State what national law requires, with the source: statute, section, regulation or permit condition.",
          "3 · State what the Performance Standard or EHS Guideline requires, with the paragraph.",
          "4 · Ask which outcome is better FOR THE AFFECTED PERSON or the receiving environment — that, not which is easier for the project, is what stringency means.",
          "5 · Apply that one, document the comparison, and retain it. The written comparison turns a defensible position into a demonstrable one.",
        ],
      },
      {
        title: "Three traps",
        points: [
          "“The standards are silent, so national law governs.” Often false: PS5 specifies no valuation method but requires the OUTCOME to equal full replacement cost. Silence on method is not silence on requirement.",
          "“National law is stricter here, so the standard falls away.” The stricter provision governs that requirement only — a stricter effluent limit does not disapply the rest of PS3.",
          "“The regulator approved it.” A regulator approves against the only standard it administers. Its approval is conclusive of tier 1 and irrelevant to tier 2 — it has no power to waive standards that were never its to apply.",
        ],
        example:
          "Night works on an urban section: the national regulation sets one noise limit with no day/night distinction; the EHS Guidelines set a substantially lower night-time limit by receptor type. The night limit governs. Get it wrong and the works proceed lawfully, generate a stream of grievances, and end in a finding requiring retrospective mitigation at far greater cost.",
      },
      {
        title: "The six gaps where national frameworks fall short",
        points: [
          "1 · Scope of assessment — national regimes are ENVIRONMENTAL; lenders expect environmental AND SOCIAL, with displacement, labour, community safety, gender and engagement as full workstreams. A compliant national EIA can contain none of these.",
          "2 · Land and resettlement — the widest gap: depreciation applied vs full replacement cost; title holders only vs occupants without title; no statutory resettlement plan vs RAP/LRP; no cut-off date; cash once vs livelihood restoration. And the irreversible one: possession only AFTER compensation.",
          "3 · Labour — narrow 'worker' definitions vs PS2's third-party coverage; national age thresholds vs ILO 182 (hazardous work under eighteen); accommodation standards; worker grievance mechanism; verify REMITTANCE of contributions, not deduction.",
          "4 · Engagement — national law requires a participation EVENT (display, hearing); PS1 requires a continuous PROCESS with a stakeholder plan, local-language disclosure and a grievance mechanism through construction, when grievances actually arise.",
          "5 · Biodiversity, heritage, cumulative impacts — PS6 classifies ALL habitat with a no-net-loss objective; PS8 requires a chance find procedure; PS1 requires cumulative assessment — induced development along a corridor routinely outweighs the road itself.",
          "6 · Numeric limits — compare parameter by parameter, never document by document; where a national limit is absent, the EHS Guideline fills the space; a less stringent level needs a full, health-based, documented justification.",
        ],
      },
      {
        title: "Closing the gap: supplementary assessment, or corrective framing",
        body: [
          "Before construction: the normal instrument is a SUPPLEMENTARY ASSESSMENT — it does not reopen the national approval; it addresses, to lender scope, what the national instrument did not cover: social impact, a resettlement instrument, an engagement plan and grievance mechanism, labour and community-safety assessments, biodiversity, heritage, cumulative impacts, and a consolidated ESMP. Holding a national EIA plus a supplementary ESIA is normal, expected practice — not a sign of failure.",
          "After construction has started: the analysis cannot be presented as pre-construction due diligence, because it is not — any competent reviewer sees through that framing, and it converts technical findings into a credibility finding about the whole E&S function. The correct posture is CORRECTIVE: state what occurred, assess what can still be avoided on the remaining works, quantify what must be restored or compensated, and set a time-bound plan with named owners. Lenders penalise the disguise, not the fact.",
          "On sequencing, the distinction reviewers examine on the dates: analytical work before approval (enumerating assets, verifying schedules) is generally defensible. Acts that create legal or physical facts (paying compensation, taking possession, clearing vegetation) are not. Counting is not taking.",
        ],
      },
    ],
    relatedModules: ["m2"],
  },

  "nigeria-legal": {
    title: "Jurisdiction file: Nigeria — and the applicable-requirements test",
    org: "Module A2 · reading 2 of 2",
    accent: "#f59e0b",
    image: "/images/lm5.jpg",
    intro:
      "Nigeria in operational depth — the environmental, land and labour tiers, what Nigerian law requires and what it does not — plus the one-page test to run whenever someone tells you something is approved, permitted or agreed. The method matters more than the content: the same file should be built for every country you operate in.",
    sections: [
      {
        title: "The environmental tier",
        points: [
          "EIA Act, Cap E12 (originally Decree 86 of 1992) — an environmental impact assessment before listed projects, administered by the Federal Ministry of Environment. Note the scope: it is an ENVIRONMENTAL statute — it requires no resettlement plan, no engagement plan, no labour assessment.",
          "NESREA Act 2007 — the national enforcement agency and its sectoral regulations, including the Construction Sector Regulations 2011 (oil and gas sits outside NESREA's remit, under separate regulators).",
          "State environmental agencies — independent powers in every state: a federal approval does NOT dispose of state requirements, and a corridor crossing several states must establish the position state by state.",
          "Minerals and Mining Act 2007 — frequently missed and directly relevant: extracting laterite, sand, gravel or rock requires a mineral title from the Mining Cadastre Office. A borrow pit without one is unlawful extraction (tier 1) and an unassessed activity (tier 2) at the same time. A landowner's consent does not confer a mineral right.",
          "Climate Change Act 2021 — national climate governance architecture, with obligations on larger entities.",
        ],
      },
      {
        title: "The land tier",
        points: [
          "Land Use Act 1978 — vests all land in each state's Governor, held in trust. Compensation on revocation of a right of occupancy is directed at UNEXHAUSTED IMPROVEMENTS — crops and structures — not the market value of bare land.",
          "Against PS5 this produces every sub-gap in the book: depreciation applied to structures, and occupants without a certificate of occupancy — frequently the MAJORITY of those affected on a road corridor — outside the statutory scheme.",
          "No Nigerian statute requires a Resettlement Action Plan. Where a RAP exists on a Nigerian project, it exists because a lender required it. Its absence is simultaneously NOT a breach of Nigerian law AND a red-flag non-conformity under PS5 — both statements are true at once.",
        ],
      },
      {
        title: "The labour and social tier",
        points: [
          "Labour Act, Cap L1 — core protections, with a 'worker' definition narrower than the PS2 concept and exemptions on young persons for family and agricultural undertakings.",
          "Child Rights Act 2003 — defines a child as under eighteen, but it is federal legislation requiring STATE-level adoption, which has been uneven: verify per state. PS2 and ILO 182 apply uniformly regardless.",
          "Employee's Compensation Act 2010 (NSITF), Pension Reform Act 2014, training levy, housing fund — verify REMITTANCE, not deduction: non-remittance is a tier 1 breach and PS2 evidence simultaneously.",
          "Collective agreements through the joint industrial council — PS2 expressly requires terms consistent with applicable collective agreements.",
          "Nigeria Data Protection Act 2023 — directly engaged by resettlement censuses, grievance registers, worker records and community photography: lawful basis, retention, security and data-subject rights apply to files projects historically treated as ordinary paperwork.",
        ],
      },
      {
        title: "The Nigeria position in one paragraph",
        body: "Nigerian law requires: an EIA before listed projects, a mineral title for extraction, compensation on revocation of occupancy rights, core employment protections, statutory contributions, and lawful handling of personal data. It does NOT require: a resettlement action plan, full replacement cost without depreciation, eligibility for occupants without title, a communicated cut-off date, livelihood restoration, a stakeholder engagement plan, or a grievance mechanism. Every one of those seven requirements exists on a financed Nigerian project — and every one exists because the Performance Standards exist and the financing agreement makes them binding.",
      },
      {
        title: "Around the region — same method, different statutes",
        points: [
          "Ghana — EPA assessment regime; Land Act 2020. Customary and stool land tenure sits alongside the statutory regime and must be mapped before any land access.",
          "Kenya — EMCA 1999 (NEMA); Land Act 2012 with the National Land Commission. The 2010 Constitution's environmental right and participation obligations are actively litigated.",
          "Senegal — Code de l'environnement; the national domain regime means much occupied land is untitled, sharply raising the PS5 eligibility gap.",
          "Côte d'Ivoire — Code de l'environnement (Loi 96-766); the purge of customary rights operates on fixed values generally BELOW full replacement cost.",
          "Tanzania — Environmental Management Act 2004; Land Act and Village Land Act 1999: the relevant land authority is often the village council.",
          "Best practice: a one-page jurisdiction file per country, owned by a named person, dated, reviewed annually. It takes a day to build and removes an entire class of avoidable error.",
        ],
      },
      {
        title: "Job aid: the applicable-requirements test",
        body: "Run these six questions whenever someone tells you something is approved, permitted or agreed:",
        points: [
          "1 · Which tier is this approval from? A permit is tier 1 — it says nothing about tiers 2, 3 or 4. Do not record the matter as closed.",
          "2 · What exactly does each tier say? Statute section on one side, PS paragraph or EHS table on the other. You cannot run the test on a summary.",
          "3 · Which outcome is better for the affected person or the environment? If the honest answer is the standard — apply it, and record the comparison.",
          "4 · Is this activity inside the approved assessment scope? New pits, camps, tracks and spoil areas usually are not.",
          "5 · Does it need a separate authorisation nobody mentioned? Mineral title, water abstraction, waste carrier licensing, state-level approval.",
          "6 · Has anything been done before it was authorised? Establish the dates; separate analytical activity from acts that created facts.",
          "The sentence to keep: a permit closes a legal question. It does not close a lender finding — and the regulator that issued it has no power to waive a standard it was never given to apply.",
        ],
      },
    ],
    relatedModules: ["m2"],
  },


  "b1-land": {
    title: "Land, compensation & livelihoods — PS5 on a road corridor",
    org: "Pathway B · Module B1 reference pack",
    accent: "#f59e0b",
    image: "/images/lm6.jpg",
    intro:
      "The area that stops more projects than any other. Performance Standard 5 applied to a road corridor: the two kinds of displacement, the three categories of eligible person, full replacement cost, the cut-off date, the one rule that can never be repaired afterwards — and why paying people correctly is not the same as restoring their livelihoods.",
    sections: [
      {
        title: "The count that was wrong",
        body: "A resettlement census recorded 412 affected households, professionally, over eleven days. Eight months later a verification exercise found 63 more — almost all women running informal roadside trade and pastoralist families using seasonal grazing routes, none of whom were present on the days the enumerators walked the corridor. The money was manageable. The other consequence was not: once a community learns the count was wrong, every subsequent figure the project publishes is disbelieved — the corrected register, the valuation method, the grievance mechanism. Households already correctly paid began submitting claims, reasoning that if the project was wrong once it might be wrong in their favour too. The project spent two years rebuilding a credibility it lost in one afternoon.",
      },
      {
        title: "Two kinds of displacement — and the one everybody misses",
        body: "PS5 covers physical displacement (relocation, loss of shelter) and economic displacement (loss of assets, loss of ACCESS to assets, or loss of income — without anyone necessarily moving). Physical displacement is counted correctly on most projects: a house is visible. Economic displacement is under-counted on almost all of them, and it is where most unresolved grievances originate. Eight forms routinely missed:",
        points: [
          "Roadside traders in the road reserve, whose entire customer base is the traffic that will be diverted.",
          "Tenants and sub-tenants — the compensation goes to the owner; they lose the home or the premises.",
          "Employees of a displaced business, who lose work and appear on no land register.",
          "Sharecroppers and labourers working land they do not own.",
          "Pastoralists whose seasonal routes are severed — their claim is temporal, so a snapshot census literally cannot see it.",
          "Users of common property: firewood, water points, fishing access, grazing. The land belongs to nobody and is used by hundreds.",
          "Households whose REMAINING land becomes unviable after partial acquisition — a total loss dressed as a partial one.",
          "Businesses that survive physically but lose frontage or passing trade to an embankment, a median or a barrier. A workshop that kept every square metre of its land and lost four fifths of its turnover was economically displaced — and never assessed, because the register was built from a land schedule instead of an impact analysis.",
        ],
      },
      {
        title: "Who counts: the three categories",
        body: "This is the provision that most sharply separates PS5 from national law. Eligibility comes in three categories:",
        points: [
          "(a) Formal legal rights — title, certificate of occupancy, registered lease. Compensated for land and assets at full replacement cost.",
          "(b) Recognisable claims — no formal title, but a claim recognisable under national law, including customary rights. Same entitlement as (a).",
          "(c) No recognisable claim — informal settlers, users of the road reserve, seasonal occupants. NOT compensated for the land itself, but compensated for structures and improvements they own, plus resettlement assistance and livelihood restoration.",
          "Why (c) exists: the project's purpose is not to settle a property dispute — it is to ensure people are not made worse off by a development they did not choose. On most African corridors category (c) is not a fringe group; it is sometimes the MAJORITY of those affected. A register built from titles is a correct schedule of owners and a wrong schedule of impacts.",
          "Retire the word 'squatter' from project language. It is not a PS5 category, it implies wrongdoing, and it makes it psychologically easier to leave someone off a register. The accurate term: a person without recognisable legal right or claim to the land they occupy.",
        ],
      },
      {
        title: "Full replacement cost",
        body: "PS5 requires compensation at full replacement cost: the value required to REPLACE the asset, calculated WITHOUT deduction for depreciation and INCLUDING the transaction costs of replacing it. The test is not what the asset was worth — it is what it will cost the affected person to obtain an equivalent one. The systematic errors:",
        points: [
          "Structures: applying depreciation. A twenty-two year old house is valued at the cost of a NEW equivalent. Depreciation is a mechanism by which the poorest households — who own the oldest structures — receive the largest reductions.",
          "Land: paying an administrative schedule rate that bears no relation to what land actually sells for locally. Required: land of equivalent productive potential, plus preparation, registration, transfer taxes and legal fees.",
          "Trees: a flat rate per tree regardless of species and age. A mature mango and a two-year seedling are not the same loss — compensate lost production until a replacement reaches equivalent yield.",
          "Crops: one season paid where the land is unusable for three.",
          "Businesses: structure compensated, income loss ignored. Net income during transition plus relocation costs are part of the entitlement.",
          "Transaction costs omitted entirely — which quietly puts EVERY payment below replacement cost.",
          "Where a state valuation office applied depreciation, do not argue with the valuer, who applied national law correctly. Recalculate the shortfall against full replacement cost and pay a documented top-up. And note: a negotiated shortfall the household 'accepted' is still a shortfall — agreement does not convert it into compliance.",
        ],
      },
      {
        title: "Census, baseline and the cut-off date",
        body: "Three separate exercises, frequently conflated: the census (WHO is affected), the inventory of losses (WHAT each person loses), and the socio-economic baseline (what standard of living existed BEFORE — the one most often skipped, and the most expensive omission: without it, restoration can never be demonstrated and the resettlement action stays open for the life of the loan). Then the cut-off date, which fixes eligibility. What makes it valid is not the setting of it — it is the COMMUNICATION:",
        points: [
          "Announced publicly, in advance, in the languages people actually use, through channels they actually receive — meetings, radio, markets, places of worship, notices along the corridor.",
          "Dated evidence of every communication retained.",
          "A visual record of what existed on the date — photographs, aerial or satellite imagery — so a late claim can be assessed rather than argued about.",
          "A grievance window (around sixty days) for anyone wrongly omitted. It is an eligibility-correction mechanism, not a price-negotiation mechanism.",
          "A date set internally and never announced, announced only at an official ceremony, or announced in a language people do not read, is a date the project can neither enforce against late claims nor afford to abandon — the worst of both positions.",
        ],
      },
      {
        title: "The sequencing rule: money before machines",
        body: "PS5 requires that the project take possession of land ONLY after compensation has been MADE AVAILABLE — meaning the affected person can actually collect it. Not calculated, not approved, not budgeted, not in a court account they cannot access. This is the most frequently breached provision in the standard, almost always by people acting in good faith under programme pressure — and it is the ONLY failure in resettlement that cannot be corrected afterwards. Compensation paid later repairs the financial loss, not the breach: the person was deprived of the only leverage they had. Three phrases that should stop work:",
        points: [
          "'The payment is being processed.' Processing is not availability. Ask for the date the person can collect.",
          "'The community has agreed we can start.' A community cannot waive an individual entitlement — and the person conveying the agreement is rarely the person bearing the loss.",
          "'We will regularise it later.' Land entry cannot be regularised later. Everything else in this module can be corrected. This cannot.",
          "Payment runs directly to the affected person — never to a committee, a chief or an intermediary. Into an account in their name where possible, with attention to WHO in the household bore the loss: where a woman's stall or garden is compensated, the payment reaches her.",
        ],
      },
      {
        title: "Livelihood restoration — measured by outcome, not by payment",
        body: "Compensation and livelihood restoration are DIFFERENT obligations, and discharging the first does not discharge the second. The most damaging finding available: households paid correctly, on time — and demonstrably poorer two years later. Why cash alone fails: lump sums are consumed on rational immediate priorities; land prices rise when two hundred households buy at once; a farmer with capital and no land is not a farmer; and the payment reaches the household head while the lost activity was run by someone else, usually a woman. What restoration actually requires:",
        points: [
          "Land for land where land is the livelihood — replacement land of equivalent productive potential is the PREFERRED option under PS5. Cash is the fallback, not the default.",
          "A restored trading position WITH FOOTFALL for traders. The commonest failure in road resettlement: a purpose-built market 600 metres from the road that no customer passes, while traders drift back to the roadside — now less safe than before. A trader's asset is the footfall, not the stall.",
          "Transitional support until the new activity produces — a replanted farmer has no harvest for one to three seasons.",
          "Measurement against the baseline. Restoration is a claim about a change, and a change cannot be demonstrated without a before.",
        ],
      },
      {
        title: "The ten failures — and two sentences to keep",
        points: [
          "1 · Depreciation applied to structures. 2 · Register built from titles, not impacts. 3 · Land entered before compensation was available — irreversible. 4 · No communicated cut-off date. 5 · Census done once, one season, one time of day. 6 · No socio-economic baseline. 7 · Payment via committees or intermediaries. 8 · Restoration treated as discharged by cash. 9 · Ancillary facilities (pits, camps, tracks) outside the resettlement instrument. 10 · Compensation grievances handled by the team that set the compensation.",
          "Sentence one: everything in resettlement can be corrected later except one thing — entering land before the money is available.",
          "Sentence two: a register built from titles will always be a correct schedule of owners and a wrong schedule of the people your project has affected.",
        ],
      },
    ],
    relatedModules: ["b1"],
  },

  "b2-workers": {
    title: "Workers, subcontractors & the camp — PS2 in practice",
    org: "Pathway B · Module B2 reference pack",
    accent: "#6366f1",
    image: "/images/lm7.jpg",
    intro:
      "Labour findings are created by people who never think of themselves as making an E&S decision: a recruitment officer accepting a labour supplier's rates, a procurement officer skipping a flow-down clause, a camp manager counting beds. PS2 applied to a construction workforce — who counts as a worker, the two absolute prohibitions, the hierarchy of controls, the camp, and the labour walk.",
    sections: [
      {
        title: "Twenty workers nobody employed",
        body: "An earthworks subcontractor brings twenty men onto a section through a labour supplier. Contracts are with the supplier; they are paid in cash on Fridays by a man who visits weekly; the supplier holds their identity documents 'for safekeeping'; two look young and nobody can check, because the documents are with the supplier. Nobody in this chain believes they are doing anything wrong — and every element is a finding against the PROJECT. PS2 applies to workers engaged by third parties, and PS1 requires the client to manage and monitor third-party performance. The contractual distance between the project and these twenty men is a fact about paperwork. It is not a defence.",
      },
      {
        title: "Who counts as a worker",
        body: "PS2 defines scope by the relationship to the project, not by who signed the contract. Four categories: directly engaged employees; CONTRACTED workers (subcontractors, labour suppliers, security, catering, transport, plant hire with operators) — the project must verify the third party is legitimate, monitor its performance, and give its workers access to a grievance mechanism; PRIMARY SUPPLY CHAIN workers (quarries, asphalt plants, aggregate suppliers) — where there is child labour, forced labour or serious safety risk, the project must identify and act on it; and MIGRANT workers, engaged on substantially equivalent terms to comparable non-migrants. The two categories most projects forget:",
        points: [
          "Security personnel — almost always third-party, almost never in the labour assessment, and simultaneously subject to PS4 conduct requirements. A guard is a worker you owe duties to AND a risk to the community. Both sides need managing.",
          "Drivers and operators supplied with equipment — paid by the plant owner, often working the longest hours on the project. Fatigue management for a driver hired with a truck is the project's problem: PS2 covers him, and PS4 covers the pedestrian he hits.",
          "Exercise: list everyone on site next Tuesday and mark who appears on a payroll the project controls. The gap is usually a third to half of the workforce.",
        ],
      },
      {
        title: "Terms, pay and hours",
        body: "Written terms, in a language the worker understands — a contract in English handed to a worker who reads only Hausa is not written terms, it is a piece of paper. Four pay checks that find most problems:",
        points: [
          "Is there a payslip? Cash with no payslip makes every other check impossible — usually the cheapest failure to fix.",
          "Do deductions have a legal basis? Deductions for PPE are NEVER acceptable. Accommodation deductions are frequently excessive.",
          "Is overtime paid at the lawful premium rate — not absorbed into a day rate that assumes twelve hours?",
          "Are statutory contributions REMITTED, not just deducted? Deducted-and-not-remitted is a legal breach and PS2 evidence from a single failure.",
          "Hours: the real issue is the dry-season push — twelve-hour shifts for weeks, rest days cancelled, and the same people driving plant at the end of it. Compare the busiest week's timesheets against the plant hour meters or the fuel log: where they diverge, the timesheets are the fiction.",
        ],
      },
      {
        title: "The two absolutes",
        body: "Most of PS2 is a standard to be met. Two provisions are prohibitions that do not bend to context, cost, programme or local practice. CHILD LABOUR: no one under eighteen in hazardous work — a separate and stricter test than the national minimum working age, from ILO Convention 182. Almost everything on a civil works site IS hazardous work, so the operative threshold on a construction site is eighteen, full stop. Verify age at recruitment with documented records, extend verification to every third party, and if you find an under-eighteen in hazardous work: remove from the task immediately, but do NOT simply dismiss — dismissal moves a child to more dangerous, less visible work. Remediate. FORCED LABOUR arrives as arrangements that each look administrative:",
        points: [
          "Identity documents held by employer or supplier ('for safekeeping') — the worker cannot leave or seek other work. Return the same day; provide lockable storage. There is no legitimate reason to hold a worker's documents.",
          "Recruitment fees charged to the worker — he starts in debt to the person employing him. Fees are the employer's cost. Reimburse and prohibit contractually.",
          "Wages withheld beyond the agreed period 'to discourage absconding' — a worker owed weeks of pay cannot afford to leave, which is the purpose of the retention.",
          "Deductions for food, transport or accommodation consuming most of the wage — the worker is working to stay, not to earn.",
          "Restrictions on LEAVING the camp. Security controls entry; a control preventing exit is a different thing.",
          "Act on the indicator — do not wait for certainty, and do not confront the supplier in front of the workers: the people at risk of retaliation are them, not you.",
        ],
      },
      {
        title: "Safety: the hierarchy of controls",
        body: "The mitigation hierarchy applied to hazards, in binding order: eliminate, substitute, engineering controls, administrative controls, and PPE — LAST. A safety strategy that consists of issuing harnesses has started at step five and skipped four opportunities to make the harness unnecessary. Five things PS2 requires that sites often lack:",
        points: [
          "Training in a language workers understand, with comprehension verified — a signed attendance sheet records presence, not understanding.",
          "PPE free of charge. Never deducted, never conditional. A PPE deduction is a finding by itself.",
          "Documented incident investigation including near misses. A project reporting no near misses is a project where near misses are not reported.",
          "Emergency preparedness TESTED, not written — drive the route from the furthest working point to a facility with surgical capability and time it. On several African corridors the honest answer is over three hours, which changes the whole plan. A plan that has never been driven is not a plan.",
          "Specific attention to threats to women: separate, lockable, well-located sanitary facilities, and a harassment route that does not run through the line manager.",
        ],
      },
      {
        title: "The camp",
        body: "Where the project provides accommodation, the operative reference is the joint IFC/EBRD guidance note on workers' accommodation — take the ratios from the source, because they are what an auditor measures against. The recurring failures: occupancy set by how many beds physically fit (triple bunks are not acceptable); sanitary ratios computed on nominal rather than peak occupancy; facilities that exist but are unlit and therefore unusable at night; drinking water untested; catering subcontracted and never inspected — the commonest cause of mass absence on a construction project is not injury, it is a kitchen; no women's block, which is then used to explain why no women are employed; fire extinguishers unserviced and no drill ever run with the night shift — the people asleep in the camp. The structural point: accommodation must be managed SEPARATELY from employment, so a worker who complains about the camp does not risk the bed and the job together. That one design decision does more for camp conditions than any inspection regime.",
      },
      {
        title: "Grievances, subcontractors and the labour walk",
        body: "The worker grievance mechanism is NOT the community one: different users, different confidentiality, different response times. It must reach contracted workers — the twenty men from the labour supplier — and it must not run only through the line manager, who is who a large share of grievances concern. Retaliation kills it: if the first person to use it is identified and not renewed, the channel is dead and everyone knows. And a mechanism with ZERO grievances on a workforce of hundreds is not performing — it is unknown, distrusted or unsafe. For subcontractors, the sequence that works: screen before award; flow down SPECIFIC obligations in the subcontract (written terms, age records, no fees, no document retention, PPE at employer's cost, camp standards, grievance access, right of audit); induct the subcontractor's MANAGEMENT; verify rather than rely — payroll sampling, camp inspection, worker interviews away from supervisors; and act contractually on what you find.",
        points: [
          "The labour walk, ninety minutes that finds most of what there is to find: ask five workers (away from supervisors) for their written terms and last payslip; ask who holds their identity documents; ask whether anyone paid to get the job; ask for age verification records — the records, not the assurance; walk the camp at night unannounced; ask three workers how they would complain about their supervisor; compare timesheets with plant hours.",
          "The sentence to keep: subcontracting transfers the work. It does not transfer the finding, and it does not transfer the person.",
        ],
      },
    ],
    relatedModules: ["b2"],
  },

  "b3-communities": {
    title: "Communities, traffic & labour influx — PS4 on the corridor",
    org: "Pathway B · Module B3 reference pack",
    accent: "#0ea5e9",
    image: "/images/lm8.jpg",
    intro:
      "On a road project the single largest cause of death is not on the site — it is the haulage fleet on public roads, among people who never agreed to be near it. PS4 applied to a corridor: traffic controls that are decisions rather than instructions, what a camp of three hundred does to a village of two thousand, the health pathways nobody designed, severance, and an emergency plan that has actually been driven.",
    sections: [
      {
        title: "The risk that is not on your site",
        body: "Ask a site team to name their biggest safety risk and you will hear about work at height or excavation collapse. All real, all managed — none the answer. On a road project in Sub-Saharan Africa, the activity that kills the most people is haulage on public roads: tippers, bowsers and low-loaders moving between pits, plants and the works, on roads used by pedestrians, children walking to school, traders, livestock and motorcycles. The WHO consistently records the African region as having the highest road traffic death rate of any region — and a project adds heavy vehicles, under schedule pressure, to roads that were already the most dangerous in the world. A fatality on the haul road produces everything a site fatality does, PLUS a community that lost a child to a project it did not ask for, a road block, and a relationship no engagement repairs. Three features make haulage risk different: the vehicles are heavy and the road users are not; the exposure repeats past the same points daily, so every incident was foreseeable; and the pressure is structural — cycle time drives production, so speed control must be ENGINEERED, not requested.",
      },
      {
        title: "Traffic management that actually works",
        body: "A traffic management plan is a document. What reduces risk is a small number of decisions, most taken away from the road:",
        points: [
          "ROUTING — the shortest route is frequently the most populated. A longer route avoiding a settlement, a school and a market removes more risk than every other control combined. It is a commercial decision and must be made as one, with the risk on the table. On one section, six minutes added per cycle was the hardest control to agree and the single most effective: every other measure reduced the severity of an encounter; the routing change removed the encounter.",
          "TIMING — no haulage through defined zones at school opening and closing and on market days. Matched to ACTUAL school movements, not published hours.",
          "SPEED, ENGINEERED — governors fitted, tracking data reviewed by someone with authority to act. A limit that is not monitored is an aspiration.",
          "DRIVER HOURS — fatigue is created by the schedule, not the driver. Maximum hours, mandatory rest, rotation.",
          "Map the hazard points by DRIVING the route twice — once at the busiest school hour, once on market day. A desk map misses the informal crossing four hundred people use every morning, because it is not a crossing, it is a gap in a hedge.",
          "On the road itself: signage in local language and symbols, physical pedestrian separation through settlements, load covering, dust suppression beside housing (a visibility control as well as an air-quality one), and reinstatement of public roads the project damaged.",
        ],
      },
      {
        title: "Labour influx: what actually happens to a place",
        body: "A camp of three hundred workers beside a village of two thousand is not a neutral event. The effects are documented, repeated and predictable — which is why PS4 treats them as impacts to assess, not circumstances to regret:",
        points: [
          "Price inflation on food, fuel, rent and transport — borne by everyone already there on a local income, hardest on marginal households.",
          "Pressure on water — borne by women and girls, who do the collection and walk further as a direct result.",
          "Pressure on the clinic, now serving a village plus a workforce.",
          "Communicable disease moving both ways between a mobile workforce and a settled community.",
          "Transactional sex across a large income gap — including, in documented cases, minors. The effect that most often becomes a serious incident (treated in full in the next reading).",
          "Social conflict from disappointed hiring expectations and perceived favouritism.",
          "Older children leaving school for casual work around the camp — permanently.",
        ],
      },
      {
        title: "Reduce influx, then manage it",
        body: "The mitigation hierarchy again: reduce the number of people arriving BEFORE designing how to accommodate them. Reduce: hire locally, genuinely — every locally-filled role is one person who needs no bed and no share of the water; train to widen what 'local' means; transport workers from within commuting distance instead of accommodating them; phase the workforce to smooth the peak. Then manage: camp siting with a SEPARATE water source and separate waste — a camp sharing a village borehole is a design error no procedure corrects (one camp of 280 workers on a shared borehole: by the second dry season the queue began before dawn and women walked three kilometres; a separate borehole would have cost a fraction of the grievance settlement, the water trucking and the two years of hostility); camp self-sufficiency in food, power and health; a signed and enforced code of conduct; no-go areas agreed with the community; local procurement spread and planned so it supports the economy instead of driving the inflation; a camp clinic so the workforce does not consume the village one; and MONITORING against a baseline — staple prices, clinic attendance, water yields, school enrolment, recorded before mobilisation. Without a baseline, every influx claim is an argument rather than a finding.",
      },
      {
        title: "Community health: the pathways nobody designed",
        points: [
          "STANDING WATER — borrow pits, poorly drained excavations and blocked culverts breeding mosquitoes within walking distance of housing. The largest health pathway a road project creates, made by earthworks staff who have no reason to think about vectors. Closure and drainage designed from the outset.",
          "Dust — respiratory effects, contamination of drying food, reduced road visibility. Suppress at receptors, cover loads, reduce speed. Measure at the RECEPTOR, not the source.",
          "Water contamination — camp effluent, workshop run-off, concrete washout, fuel reaching a watercourse people drink from. Monitor at the point of USE downstream, not the discharge point.",
          "Communicable disease — screening, awareness, coordination with the district health authority rather than a parallel project system.",
          "Open excavations — a trench left open overnight beside a footpath is a decision, not an accident. Fencing, backfilling on the same shift, lighting.",
          "Hazardous materials in transit — routing, scheduling, spill response along the route, notification to authorities.",
          "Noise and vibration — night piling near housing takes the NIGHT limit from the EHS Guidelines; sleep disruption is a health impact. Blasting requires pre-blast condition surveys, or every crack in every wall for two kilometres becomes the project's.",
        ],
      },
      {
        title: "Severance, access and the things people rely on",
        body: "A new road connects places and separates others. Severance produces no land acquisition and no incident, so it appears nowhere — until it shows up years later as pedestrian fatalities at an informal crossing the design ignored, and as unassessed livelihood loss: the school on one side and the children on the other, a well across a carriageway that is hard to cross, a market cut off from its customers, a business that kept its land and lost its frontage. The controls are design controls, cheap at design stage and unaffordable after: crossings where people ACTUALLY cross, livestock crossings, service roads, median breaks where local movement requires them. The reliable method: walk the alignment with community members and ask where people cross — not where they should. Ecosystem services follow the same logic: assess borehole yield BEFORE abstracting, map the fuelwood stands people use before clearing, design culverts for fish passage, identify grazing routes by talking to herders rather than looking at a map. And the connection to PS5 is direct: removing access to a service a household depended on for income or subsistence is economic displacement — whether or not any land was acquired.",
      },
      {
        title: "Emergency preparedness, with the community in it",
        body: "PS4 requires emergency arrangements that take account of affected communities, coordinated with local authorities and communicated. The three failures: the plan covers the workforce only (a fuel tanker overturning in a settlement is a community emergency); the plan has never been driven — the transport time from the furthest working point to a facility with surgical capability is a measurable number, so measure it; and nobody outside the project knows the plan exists. What the arrangement contains: credible scenarios (a haulage collision involving community members, a spill near a settlement, a camp fire, a flood, an outbreak); a role reachable at any hour with a number the community HAS; measured transport times on a route driven at the worst time of year; coordination agreed with authorities in advance, not negotiated during an incident; and a drill actually conducted, with lessons recorded.",
      },
    ],
    relatedModules: ["b3"],
  },

  "b4-conduct": {
    title: "Harassment, security & human rights — conduct and the code",
    org: "Pathway B · Module B4 reference pack",
    accent: "#f43f5e",
    image: "/images/lm9.jpg",
    intro:
      "A project brings wages, authority and gatekeeping into a place — and therefore owns the risk that arises from them. Sexual exploitation, abuse and harassment as three distinct things; the absolute rules, including the one about minors; what a survivor-centred response means and rules out; what makes a code of conduct enforceable; and the six requirements governing the people who guard the project.",
    sections: [
      {
        title: "The gap that creates the risk",
        body: "A construction project brings several hundred people with regular wages into a place where most people have far less cash and no comparable opportunity. It brings supervisors who decide who works tomorrow, and gatekeepers who control access to jobs, to compensation files, to the grievance mechanism, to the site. Every one of those relationships contains an imbalance of power. Where something happens, it happens through that imbalance — and it is almost never announced as coercion. It appears as a supervisor mentioning that shifts are decided this week; as a gatekeeper suggesting a way of making an application progress; as an arrangement offered in exchange for food, money, a job or a file that moves; as a relationship that looks voluntary from one side and does not look that way from the other. This is treated as a distinct risk category rather than individual misconduct because the imbalance is CREATED BY THE PROJECT — which therefore owns the risk.",
      },
      {
        title: "Three things, not one",
        body: "SEA/H covers three distinct categories, separated because the relationships, rules and response pathways differ. Sexual EXPLOITATION: abuse of a position of vulnerability, power or trust for sexual purposes — a project worker and a community member, where consent cannot be assumed freely given across an imbalance the project created. Sexual ABUSE: actual or threatened physical intrusion of a sexual nature — a criminal matter in every jurisdiction, and the project's response must never obstruct or substitute for the criminal process. Sexual HARASSMENT: unwelcome sexual conduct BETWEEN project personnel — a workplace matter under PS2, and frequently the earliest visible signal that the wider environment is unsafe. Why the distinction matters: a harassment complaint between two workers goes through the worker grievance mechanism and discipline. An allegation involving a community member does not — it needs confidentiality a workplace process cannot provide, referral to health and psychosocial services, and a decision about criminal reporting that belongs to the survivor, not the project. Projects that run all three through one channel end up exposing survivors or burying complaints — usually both.",
      },
      {
        title: "The absolute rules",
        points: [
          "RULE 1 — No sexual activity with anyone under eighteen. No exception. Mistaken belief about age is not a defence; consent by a person under eighteen is not consent for these purposes. This applies REGARDLESS of the national age of majority or consent: it is the standard the project imposes on itself and everyone it engages.",
          "RULE 2 — No exchange of money, employment, goods, services, assistance or any project benefit for sex. Including anything presented as a gift, a favour, help with an application, or a promise about future work.",
          "RULE 3 — No retaliation against anyone who reports, supports a report, or participates in an investigation. Retaliation is a separate and equally serious matter.",
          "Relationships between consenting adults are not prohibited — a policy attempting that would drive everything underground. What is addressed is the IMBALANCE: a relationship between a supervisor and someone whose shifts he allocates must be declared, and the person holding the power moved out of the decision affecting the other. Not a moral position — a conflict-of-interest control that protects both people.",
        ],
      },
      {
        title: "Prevention: what has to exist before anything happens",
        body: "Prevention is an architecture, not a training session. Seven components, all in place before mobilisation:",
        points: [
          "A risk assessment: where are the gatekeeping points, where does the workforce meet the community, where are the vulnerable groups, what is the state of local services?",
          "A code of conduct signed INDIVIDUALLY by every person including third parties, explained in a language they understand.",
          "Training that is not a signature sheet — the test is whether a worker can state the rule about minors and where to report, unprompted.",
          "A reporting channel designed for this specifically: multiple entry points, at least one outside line management and at least one reachable WITHOUT entering a project facility. A community member cannot use a channel that runs through the gate she is afraid of.",
          "A referral pathway that exists in advance — health, psychosocial, legal, police if the survivor wishes — identified, contacted and CONFIRMED before it is needed.",
          "A named, trained responder. Not the community liaison officer by default, and not the line manager.",
          "Camp and site design: lighting on routes and at sanitary facilities, lockable doors, women's accommodation not reached through male areas. Physical controls do more than any policy.",
        ],
      },
      {
        title: "The code of conduct",
        body: "On a financed project the code is a contractual instrument, and its enforceability rests on how it was issued: signed individually, by name, before starting work — NOT accepted at company level by an employer on behalf of its workforce; explained before signature, in a language the signatory understands; flowed down to every subcontractor, labour supplier, security provider, caterer and transport operator with the same individual-signature requirement; consequences stated plainly, including dismissal and criminal referral; and applied to senior people on the same terms as everyone else — the single most important determinant of whether anyone believes it. One project held signed codes for its own workforce and main subcontractor, while the labour supplier's forty workers had 'signed' at company level: none individually, none inducted, none able to say what the code contained — the arrangement with the LEAST oversight was the one where nobody had been told the rules.",
      },
      {
        title: "Survivor-centred response",
        body: "The phrase does not mean believing every allegation. It means the person who was harmed makes the decisions about what happens next, and the project's need to establish facts never overrides their safety, dignity or choice. Four principles: SAFETY first, before any investigative step; CONFIDENTIALITY — information shared only with those who need it to act, never in a report with enough detail to identify anyone; RESPECT — the survivor decides what to report, to whom, and whether to go to the police; NON-DISCRIMINATION — the same response whoever the survivor is and however senior the accused. A first responder listens and takes the account ONCE, asks what the person needs, explains the options and who will be told before telling anyone, records minimally and securely, and refers to the trained responder. A first responder does NOT ask for details of the incident, decide for the person, promise absolute secrecy, contact family or employer without agreement, or attempt to investigate. Three things that must NEVER happen:",
        points: [
          "Mediation between a survivor and an accused person — it is not conflict resolution, and it re-exposes the survivor to the person who harmed them.",
          "A settlement paid to a family for silence or withdrawal — whatever it is called locally, it is the purchase of a criminal matter and a governance failure of the first order.",
          "An identifiable case description in any report, including internal ones. Communities are small; two details are often enough.",
          "And note the register that is EMPTY: on a project with several hundred workers beside a host community, zero SEA/H reports is not a performance result. It is a question — usually about a channel nobody can safely use.",
        ],
      },
      {
        title: "Security personnel — and public forces",
        body: "A guard sits in two frameworks at once: under PS2 he is a worker (usually third-party) owed lawful terms and a grievance channel; under PS4 he is a risk to the community. An underpaid guard on a twelve-hour shift with no training is both a labour finding and a community safety risk, and the two are connected. The six requirements: ASSESS the security risk first — in most civil works contexts armed security is not warranted, and arming a force that does not need arms creates the risk it was meant to address; SCREEN individuals for past abuses; TRAIN in conduct and use of force before deployment; establish RULES on force — preventive and defensive purposes only, proportionate, written, understood at every gate; provide a COMMUNITY CHANNEL for concerns about security conduct — the requirement most often missing, and it cannot be the guard post; and INVESTIGATE and act — quietly letting the provider redeploy a guard elsewhere is not action. Where the STATE deploys police or military to protect the project: the project cannot command or discipline them, but responsibility does not disappear — it changes shape. The Voluntary Principles on Security and Human Rights are the operative framework: engage on the deployment and rules of engagement, DOCUMENT what the project asked for and was told, keep a community channel open for conduct concerns including by public forces, and do not provide equipment, transport or payment in ways that make the project a participant in conduct it cannot control. Two projects may face the same incident; the one with the record of having engaged, documented and escalated will not face the same consequences.",
      },
    ],
    relatedModules: ["b4"],
  },

  "b5-pollution": {
    title: "Pollution, borrow pits & waste — PS3 and the EHS Guidelines",
    org: "Pathway B · Module B5 reference pack",
    accent: "#10b981",
    image: "/images/lm10.jpg",
    intro:
      "Pollution control is the part of E&S technical teams find most familiar — which is exactly why it fails: everyone assumes the controls are obvious, known and applied, and the third is usually false. The hierarchy applied to pollution, where the numbers come from, the borrow pit that generates findings under six standards from one omission, waste that leaves site and ends up in a field, and the greenhouse gas threshold.",
    sections: [
      {
        title: "Four days and half a per cent",
        body: "On a coastal section, earthworks ran through the rainy season with no silt fencing or settlement ponds. Sediment reached a creek used for fishing and washing; the community reported a collapse in catch and skin complaints among children. The engineering remedy — silt fences, check dams, a settlement pond — cost a fraction of one per cent of the section value and took four days to install. The omission cost a work stoppage, a lender finding with a corrective action plan, an imposed water quality monitoring programme for the remainder of construction, and a community relationship that never fully recovered. That gap between what prevention costs and what failure costs is the entire economic argument of this reading, and it holds for almost every control in it.",
      },
      {
        title: "The hierarchy, and where the numbers come from",
        body: "PS3 sets the requirement; the World Bank Group EHS Guidelines set the LEVELS — without them most of PS3 cannot be measured. Where host country regulations differ from the Guidelines, the project achieves whichever is MORE STRINGENT — compared parameter by parameter, never document by document. Where a national limit does not exist for a parameter, the Guideline level simply governs. Retain the written comparison: it is what converts a defensible position into a demonstrable one, and the first document an independent consultant asks for. And the hierarchy applies to pollution unchanged — most sites enter it at step three: teams reach immediately for the dust bowser (control) and argue about how many, when the question never asked was whether the haulage needed to pass the settlement at all (avoid) — a question that had an answer at the point the pit was selected.",
      },
      {
        title: "Air, water and noise",
        points: [
          "Dust is the impact communities raise first. Suppress at receptors on a schedule matched to weather and traffic — a bowser running at 08:00 daily regardless of conditions is a procedure, not a control. Cover loads. Reduce speed, which cuts dust substantially and costs nothing. Measure at the RECEPTOR: a reading at the plant boundary says nothing about the house downwind.",
          "NEVER use waste oil for dust suppression. It is a recurring practice, it is a soil and groundwater contamination event, and it is unambiguous under PS3 and the Guidelines.",
          "Sediment is the largest water impact on a civil works site — silt fences, check dams, settlement ponds, slope stabilisation, clearance timed against the rains. Cheap, and almost always deferred.",
          "Concrete washout: high pH, lethal to aquatic life, routinely discharged to the nearest ditch. Lined containment, residue removed as waste.",
          "Hydrocarbons: interceptors at workshops and wash bays, bunding at fuel points, spill response that exists physically rather than in a procedure. Abstraction: establish yield and existing users BEFORE abstracting — above a threshold it usually needs a permit nobody applied for.",
          "Noise: the EHS Guidelines set limits by receptor and by day/night, with the night limit substantially lower — many national rules set a single figure, making noise the clearest everyday example of the more-stringent rule. Night piling near housing takes the night limit. Blasting requires pre-blast condition surveys and a claims route that works.",
        ],
      },
      {
        title: "Borrow pits: six standards from one hole",
        body: "The most under-managed environmental issue on African road projects. One unscreened pit engages: PS1 (an activity outside the assessed scope), national mining law (extraction without a mineral title — a landowner's consent does NOT confer a mineral right, which is issued by a different authority), PS3 (dust, noise, sediment, fuel), PS4 (open water and unfenced faces near housing — drowning and vector breeding), PS5 (land taken from users, including seasonal and informal ones), PS6 (clearance without habitat screening) and PS8 (chance finds nobody recorded). No other single activity on a road project does that. And CLOSURE IS A DESIGN DECISION TAKEN BEFORE EXTRACTION: a pit worked for maximum yield is deep, steep-faced and irregular, and cannot be safely closed at any price — the backfill no longer exists. A closable pit has, from day one:",
        points: [
          "Topsoil stripped and stockpiled separately — once driven over and mixed with overburden it is gone, and reinstatement then needs imported growing medium.",
          "A planned final profile, battered faces and benching rather than a single deep face.",
          "A drainage design that prevents standing water after closure — the largest, longest-lasting health pathway a road project creates.",
          "Fencing and signage during operation — an open face near a footpath is a drowning risk, and the person most likely to be involved is a child.",
          "A closure and reinstatement plan with a budget line, and an agreement with the landowner and users about what the land will BE when handed back. 'Handing it back to the community' as a nine-metre flooded hole with vertical faces is not a handover; it is the transfer of a hazard to people with no capacity to manage it.",
          "Every one of these is decided before the first excavator arrives. None can be retrofitted.",
        ],
      },
      {
        title: "Waste and hazardous materials",
        body: "PS3 requires waste avoided, then reduced, reused or recycled, then treated and disposed of soundly. The single most common failure: hazardous waste mixed into a general skip — one used oil filter converts a small quantity of controlled substance into a whole contaminated load. Streams: general (licensed disposal); inert construction material (reuse on site — the largest stream by weight and the easiest to reduce); recyclables (usually positive value); HAZARDOUS — used oil, filters, contaminated rags, batteries, paint, solvents, bitumen residues, empty chemical containers — segregated, labelled, bunded storage, licensed carrier, licensed facility, manifest retained; medical waste from the camp clinic; and wastewater sludge, forgotten until the system fails. The disposal trail answers four questions for every hazardous load: what it was, how much, who carried it, where it ended up. A carrier's receipt is NOT a disposal record — the chain must reach a licensed facility whose licence is on file. The routine failure: waste collected by a contractor paid per load whose route nobody verified; the paperwork is complete, the loads are tipped in a field, and the contaminated site eventually traces back. And empty drums: containers that held hazardous substances have local value and WILL leave site — some reused for drinking water storage, a documented and serious community health pathway. Render them unusable and route them through the hazardous stream, not the gate.",
      },
      {
        title: "Fuel, spills and contaminated land",
        body: "Prevention is most of it: bunded storage with the bund intact and FREE OF RAINWATER — the usual reason a bund fails on the day it is needed; impermeable surfaces and interceptors at refuelling points and wash bays; drip trays under static plant; controlled refuelling with a pump and a person; spill kits located where spills happen, stocked and practised. Response: stop the source, contain before it reaches a drain — minutes matter more than procedure — absorb and recover, remove contaminated soil to the depth of penetration, RECORD it including small spills (a site reporting no spills is a site not reporting spills), and investigate: a spill at the same point twice is a design failure, not an incident. At handover: workshops, fuel points and plant yards leave contaminated ground. Take a baseline BEFORE occupying the site — without it, the project cannot demonstrate what it caused and will be assumed to have caused everything found.",
      },
      {
        title: "Greenhouse gases and resource efficiency",
        body: "PS3 requires quantification of direct emissions (and relevant indirect energy emissions) where the project is expected to produce more than 25,000 tonnes of CO2-equivalent annually — a threshold a large road programme generally crosses, through plant and haulage fuel, cement, bitumen and clearance. The data almost always exists in fuel and materials records; what is missing is anyone whose job it is to convert and report it. And almost every emissions reduction available is also a cost reduction: haulage distance (pit selection is the biggest single lever), cut-to-fill balance and material reuse, cement content, plant idling, and water efficiency — which in a water-scarce area is a community relations matter as much as an environmental one.",
      },
    ],
    relatedModules: ["b5"],
  },

  "b6-biodiversity": {
    title: "Biodiversity & cultural heritage — PS6 and PS8",
    org: "Pathway B · Module B6 reference pack",
    accent: "#22c55e",
    image: "/images/lm12.jpg",
    intro:
      "PS6 and PS8 share a structure: both protect things invisible from a drawing, both are screened BEFORE work rather than managed during it, and both contain a category — critical habitat, critical cultural heritage — where the correct answer may be that the project does not proceed as designed. They also share a failure mode: screening done after clearance, which establishes only what was lost.",
    sections: [
      {
        title: "Two hours on a Friday",
        body: "A grader stripping topsoil exposes human remains. The operator stops, calls his foreman, the foreman calls the section manager — nobody knows what to do, so the machine is moved and work continues fifty metres along. By Monday the community knows: the site is now a place where a project dug up a grave and kept working, and whose grave it was has become impossible to establish, because the context was destroyed on Friday afternoon. The chance find procedure that would have prevented this takes two hours to write and five minutes to explain. Its test is not whether it appears in the ESMP — it is whether the grader operator knows what to do in the first five minutes, in his own language, without calling anyone to ask.",
      },
      {
        title: "Three kinds of habitat",
        body: "PS6 classifies habitat into three categories, with progressively stricter requirements — and classification determines everything that follows:",
        points: [
          "MODIFIED habitat — farmland, plantations, settled areas. Minimise conversion, improve where feasible. Most of a road corridor sits here.",
          "NATURAL habitat — viable assemblages of largely native species. The project may proceed only where there is no feasible alternative, benefits outweigh costs, and mitigation is designed to achieve NO NET LOSS where feasible.",
          "CRITICAL habitat — identified against defined criteria: highly threatened ecosystems, habitat of Critically Endangered and Endangered species, endemic and restricted-range species, globally significant migratory concentrations, key evolutionary processes. A demanding set of conditions must ALL be met to proceed at all, the outcome sought is a NET GAIN, and long-term monitoring is required.",
          "The point that catches projects out: critical habitat is NOT the same as a protected area. A site can meet a critical habitat criterion without being gazetted, protected or known to any national authority — scrub that looks like nothing, holding a restricted-range species that occurs nowhere else. A project can hold every national clearance, sit inside critical habitat, and not know. That is why screening exists, and why it happens before clearance.",
        ],
      },
      {
        title: "Screening, before anything is cleared",
        body: "Four steps, almost always compressed or skipped because they sit between a design decision and a production activity and belong to neither: DESK SCREENING against recognised sources (IBAT, the IUCN Red List, Protected Planet and the World Database on Protected Areas, national registers); FIELD SURVEY ACROSS SEASONS — a single dry-season survey misses migratory species, seasonal wetland function and much of the flora, and where seasons cannot be covered, the limitation is stated in the report rather than left for a reviewer to find; HABITAT CLASSIFICATION by someone competent, against the criteria; then the DESIGN RESPONSE — avoid, minimise, restore, offset, in that order, each rejected option documented. The screening covers EVERY footprint, not only the alignment: pits, quarries, camps, tracks, laydown and spoil areas — which is where unscreened clearance almost always occurs, because they are selected by the contractor after the assessment was written. And the useful question for any design team: when did the ecologist first see the alignment? If the answer is after approval, then avoidance — the only step that costs almost nothing — was never available.",
      },
      {
        title: "No net loss is a measurement, not a statement",
        body: "What is distinctive about PS6 is that the outcome of the hierarchy is expressed as a measurable quantity. No net loss requires: a quantified account of what is lost (habitat area by type and condition, and the values for which it matters); a quantified account of what is gained through restoration and offset, in the same units, against the same values; ADDITIONALITY — a gain that would have happened anyway is not a gain; LIKE FOR LIKE — an offset must address the values lost, not a different set that is easier to secure; and long-term security with monitoring capable of demonstrating the outcome. A payment to a conservation body is NOT an offset: an offset is a measured biodiversity outcome, and funding a thing is not achieving it. Offsets are the last resort — demanding, expensive, and frequently proposed by projects that skipped avoidance, which is the first question a reviewer asks.",
      },
      {
        title: "Invasive species — the pathways you create",
        body: "A road project is an efficient distribution system for invasive species, and most pathways are created by ordinary logistics:",
        points: [
          "Plant and vehicles — seeds carried in mud on tracks, tyres and tipper bodies, moved across catchments daily. Control: wash-down at defined points, especially when plant moves between sections or arrives from another project. The most efficient dispersal pathway a project operates, and the cheapest to interrupt.",
          "Imported fill and aggregate — seed banks from an infested source. Inspect source areas.",
          "Erosion control and landscaping — species chosen for rapid growth and hardiness, which are the same characteristics that make a species invasive. Check the specification against the national invasive species list BEFORE contract award — once it is in the bill of quantities nobody revisits it.",
          "The corridor itself — a cleared, disturbed linear strip is ideal coloniser habitat and a highway along which they travel. Rapid native revegetation, and monitoring of corridor edges through the defects period.",
        ],
      },
      {
        title: "Cultural heritage: more than monuments",
        body: "National antiquities law protects declared monuments and registered sites. PS8 is broader, and the difference is where the risk sits. Five forms: tangible-known (on a map, rarely missed); tangible-UNKNOWN — burials, shrines, sacred groves, unregistered deposits — on no map, found by an excavator, which is what the chance find procedure exists for; NATURAL FEATURES with cultural significance — a tree, a rock, a spring — physically unremarkable, culturally central, invisible to a survey team and obvious to anyone who lives there; INTANGIBLE — procession routes, ceremonial grounds, seasonal practices — cannot be surveyed at all; and CRITICAL cultural heritage — heritage essential to a community's identity or spiritual life — where a project may be unable to proceed as designed. Three of the five categories cannot be found by a specialist walking a corridor. They are found by ASKING people who live there — separately from whoever speaks for the community by default, with attention to the fact that some sites are known only to certain people (ask women and elders separately) and will not be disclosed at a public meeting. A heritage screening that is a desk study plus a walkover finds the monuments and misses everything that matters locally. And 'within living memory' matters: a site unused for thirty years is not thereby available — someone remembers it.",
      },
      {
        title: "The chance find procedure, as a drill",
        body: "The only part of PS8 that operates at the moment it matters, and the one content every plant operator learns regardless of role. The five steps: 1 · STOP. Switch off. Do not move the machine through the area again. 2 · Do not touch, move, collect or photograph anything. 3 · Mark and secure a radius — keep everyone out, including colleagues who want to look. 4 · Call the number — one number, on the induction card, in the cab. 5 · Nobody resumes work in that area until the named person has attended and released it. Behind those five steps must exist: a named, reachable person who attends; a relationship with the antiquities authority established BEFORE the first find; a route to the community — particularly for a burial, because the people to consult first may be related to it; a written record; and an accepted programme consequence — a procedure everyone knows will be overridden by schedule pressure will not be followed the second time. Human remains engage the police and coroner in most jurisdictions, and relocation of a burial, where unavoidable, is a consultative process with the family conducted according to their practice, at the project's cost — never a works activity. Run it as a drill: if the operator would 'call his foreman and ask', the procedure does not exist yet, however well it is written.",
      },
    ],
    relatedModules: ["b6"],
  },

"b6-chance-find": {
    title: "The chance find drill — five steps every operator knows",
    org: "Micro-module · the chance find drill",
    accent: "#22c55e",
    image: "/images/lm12.jpg",
    intro:
      "The one part of cultural heritage protection that operates at the moment it matters — delivered to every plant operator, whatever their pathway. Five steps, five minutes to learn, and a project saved from destroying the one thing that can never be re-established: the context of a find.",
    sections: [
      {
        title: "Two hours on a Friday",
        body: "A grader stripping topsoil exposes human remains. The operator stops, calls his foreman, the foreman calls the section manager — nobody knows what to do, so the machine is moved and work continues fifty metres along. By Monday the community knows: the site is now a place where a project dug up a grave and kept working, and whose grave it was has become impossible to establish, because the context was destroyed on Friday afternoon. The procedure that would have prevented this takes two hours to write and five minutes to explain — and its test is not whether it appears in the management plan. It is whether YOU know what to do in the first five minutes, in your own language, without calling anyone to ask.",
      },
      {
        title: "The five steps",
        points: [
          "1 · STOP. Switch off. Do not move the machine through the area again.",
          "2 · Do not touch, move, collect or photograph anything.",
          "3 · Mark and secure a radius — keep everyone out, including colleagues who want to look.",
          "4 · Call the number. One number, on the induction card, in the cab.",
          "5 · Nobody resumes work in that area until the named person has attended and released it.",
        ],
      },
      {
        title: "Why the steps are what they are",
        body: "A find is not known to be archaeological — or recent — until someone competent has seen it in place. Moving it, cleaning it or photographing it before that destroys the context that lets anyone establish what it was. Human remains need the greatest care and the least improvisation: in most jurisdictions their discovery also engages the police, and where a burial must ever be relocated, that is a consultative process with the family, according to their practice, at the project's cost — never a works activity. A find stops work in that area, and everyone above you has accepted that consequence in advance: nobody will be blamed for stopping. The operator who stops is the one who did it right.",
      },
    ],
    relatedModules: ["b6"],
  },

"c1-instructing": {
    title: "Instructing a subcontractor — reference pack",
    org: "Pathway C · Module C1",
    accent: "#8b5cf6",
    image: "/images/lm13.jpg",
    intro:
      "Turning a requirement into something a third party will actually do. Why the general compliance clause has never worked, the five management steps and the two everyone skips, the anatomy of a real instruction, the four kinds of refusal, and how to escalate a decision instead of a frustration.",
    sections: [
      {
        title: "General clause vs specific obligation",
        body: "Every subcontract contains an obligation to comply with all applicable laws. It has never once prevented retained identity documents, unverified ages, or a payroll with no payslips — because a general clause transfers the job of working out what compliance means to a party with no reason to interpret it expansively. Replace each general clause with its specific counterpart:",
        points: [
          "'Comply with all applicable labour law' → Provide every worker with written terms and a payslip showing gross pay, each deduction with its basis, and net pay.",
          "'Comply with the project's E&S requirements' → Retain age verification records for every worker and make them available on request within 24 hours.",
          "'Maintain a safe working environment' → No worker under eighteen engaged in the listed hazardous activities: work at height, plant operation, night shifts.",
          "'Treat workers fairly' → No recruitment fee charged to any worker. No retention of identity documents in any circumstances.",
          "'Provide suitable accommodation' → Accommodation assessed against the listed parameters, with the project entitled to inspect without notice.",
          "'Cooperate with the main contractor' → The project may audit records, inspect accommodation and interview workers without a supervisor present, on 24 hours' notice, and may suspend payment where access is refused.",
        ],
      },
      {
        title: "Five steps, and the two everyone skips",
        points: [
          "1 · Screen before award (procurement, with E&S input) — frequently done as a financial and technical check only.",
          "2 · Flow down specifically (procurement and legal) — the highest leverage per unit of effort.",
          "3 · Induct the MANAGEMENT (site management) — almost universally skipped. A two-hour session with the subcontractor's site manager, camp manager and HR person, with a signed record, prevents more findings than any number of worker inductions.",
          "4 · Verify (E&S and HSE) — payroll sampling, age records, camp inspection, worker interviews away from supervisors.",
          "5 · Act contractually (commercial, on E&S advice) — non-conformity notices, cure periods, payment withholding where the contract provides. The step that makes the other four credible. After the second time an audit finds something and nothing happens, the subcontractor has learned the true position — and it is the project that taught them.",
        ],
      },
      {
        title: "The instruction: five elements, three delivery rules",
        body: "The five elements: the specific thing to be done; the date; the source of the obligation (clause, appendix, standard); the evidence required to close it; and what happens if it is not done, with its own date. Weak: 'We need to sort out the accommodation situation in Block B, can you look at it this week?' Strong: 'Block B currently has three-tier bunks and occupancy above the figure at Appendix Y of your subcontract. Remove the third tier and reduce occupancy to that figure by Friday 14th. Send me the revised occupancy schedule and photographs of each room by close of business Friday. If it is not done I will raise a formal non-conformity, which under clause 14 carries a cure period of seven days before payment is affected.'",
        points: [
          "In writing, always — even after a verbal conversation. Without it you have a recollection, and in six weeks you will have two conflicting recollections.",
          "To the person who can do it, copied to the person who can make them do it.",
          "Separate the requirement from the relationship: entirely cordial about a requirement that is entirely non-negotiable.",
        ],
      },
      {
        title: "Four kinds of no",
        points: [
          "CAPABILITY — 'We do not have the systems for that.' Often true. Help, and set a date: provide the template, the form, the format. Then verify.",
          "COST — 'That was not in our price.' Establish whether it was in the subcontract. If yes, the price is their problem. If no, the flow-down failed: say so, price the variation, fix it for the next award.",
          "PRACTICE — 'This is how it works in this region.' Sometimes accurate, never a reason. Acknowledge the description, restate the obligation.",
          "LEVERAGE — 'If you push this, we will demobilise.' Three things are usually true at once: the threat may be real; the exposure runs the other way (a section ahead of programme carrying a forced labour indicator is an undisclosed liability); and their leverage often rests on the arrangement itself — correcting retained documents removes their control over the workers, not the workers.",
          "The line that works: 'I hear you, and I am not going to resolve this here. The requirement is in your subcontract and I do not have authority to waive it. I will write up what we have discussed and put it to [name] with the programme implication attached.'",
        ],
      },
      {
        title: "Escalating well — and the instruction card",
        body: "Escalate the decision, not the frustration. Quantify — 'forty workers with no age verification records' lands differently from 'concerns about the labour supplier'. Present two or three options with their costs and a recommendation. One page: situation, exposure, options, recommendation, decision date. Before you speak: is this obligation actually in their subcontract? Am I speaking to the person who can do it? Do I know what evidence would satisfy me? After: confirm in writing the same day; diarise the date; on the date, verify — do not accept an assurance in place of the evidence you asked for; and if it is not done, do what you said you would do.",
        points: [
          "A general compliance clause has never prevented a single one of these failures. Specificity is the whole point of a flow-down.",
          "A right of audit with no consequence attached is decorative. The second time you do not act, the requirement is gone.",
        ],
      },
    ],
    relatedModules: ["c1"],
  },

  "c2-iesc": {
    title: "Preparing for an IESC visit — reference pack",
    org: "Pathway C · Module C2",
    accent: "#0ea5e9",
    image: "/images/lm14.jpg",
    intro:
      "The Independent Environmental and Social Consultant is appointed by the lenders and reports to the lenders. What they assess, what they conclude from what they cannot find, the fortnight before, independence in practice, and the single highest-value action available on the day: an honest gap register, handed over at the start.",
    sections: [
      {
        title: "Who they are, and what they assess",
        body: "They are not your adviser — they are not there to help you pass. They are not the regulator — they assess against the applicable standards and the project's own commitments, not national law alone. And their report drives money: findings enter the ESAP, and persistent or severe findings reach disbursement. They triangulate three sources, and where the three disagree, the disagreement is the finding:",
        points: [
          "DOCUMENTS — whether the system exists on paper. The failure: a complete document set with nothing behind it — the easiest thing to produce and the least convincing on its own.",
          "THE SITE — whether the system is operating. Experienced reviewers arrive early, ask to see something not on the itinerary, and go back at night.",
          "PEOPLE — what workers, community members and staff say when asked. The source that decides how the other two are read. Interviews with a supervisor present, or with people selected by the project, are findings in themselves.",
        ],
      },
      {
        title: "What they conclude from patterns",
        points: [
          "A finding you identified, recorded and were already correcting → detection, escalation and correction all work.",
          "The same finding, discovered by them, absent from your records → the system does not detect. Everything else in your records is now in doubt, including the accurate parts.",
          "A register with no entries → not excellence: an unknown, unused or unsafe channel, and a project that cannot see its own operation.",
          "Monitoring data in one handwriting on one date for a month → reconstructed data: a governance finding, treated more seriously than whatever was measured.",
          "Plans current, owned by a named person, visibly used → organisational capacity is real, which colours everything that follows.",
          "Individual findings close. A conclusion that the system cannot be relied upon does not.",
        ],
      },
      {
        title: "The two weeks before",
        points: [
          "Documents: assemble and INDEX the pack. Check currency — a plan dated three years ago tells them it is not used. Reconcile the registers against each other, and explain the reconciliation rather than leaving it to be found.",
          "Site: walk it yourself, at the times activity actually happens. Fix what can be fixed. Document honestly what cannot be fixed in two weeks, with a dated plan, rather than hoping it is not seen.",
          "People: tell the workforce the visit is happening, who is coming, and to answer honestly — the only instruction that should be given about the content of any interview.",
          "THE LINE NOT TO CROSS: never create a document that should already have existed and date it as though it did. It is usually detectable, and it converts a technical position into an integrity one.",
        ],
      },
      {
        title: "Independence, in practice",
        points: [
          "Staff accompanying every interview → accompany for safety and access, then withdraw, and say so proactively.",
          "Selecting who the reviewer meets → offer a list, invite them to choose beyond it.",
          "Providing all transport → make it available rather than scheduled; do not set the community itinerary.",
          "Interviews in the project office → meet in the community, or somewhere the person chose.",
          "Asking for findings informally before the report → ask for a closeout meeting, which is normal practice, and accept the answer.",
        ],
      },
      {
        title: "Disclosure on arrival — and after",
        body: "Hand the reviewer an honest gap register at the start: what is not compliant, what you are doing about each item, who owns it, by when. It changes what is being assessed — from whether you know your position to whether your plan is adequate. It protects the findings you missed: disclose eleven and miss one, you have a working system and a gap; disclose nothing and have twelve found, you have no system. During: answer what is asked; if you do not know, say so and come back by a stated time. At closeout: listen, disagree on facts with evidence, never argue severity in the room. On the draft: correct errors of fact with evidence attached; do not soften findings you accept. Then work the ESAP — a finding accepted and not closed by the next visit is worse than the original, because two visits make a pattern.",
      },
    ],
    relatedModules: ["c2"],
  },

  "c3-incident": {
    title: "Investigating an incident — reference pack",
    org: "Pathway C · Module C3",
    accent: "#ef4444",
    image: "/images/lm2.jpg",
    intro:
      "The first hour, the root cause, and a report that survives being read in two years. Almost everything that goes wrong in an investigation was determined in the first sixty minutes, before anybody thought of themselves as investigating.",
    sections: [
      {
        title: "The first hour",
        points: [
          "1 · Make safe. Stop the activity, isolate energy, control the hazard that caused it AND the one it created. Nothing else happens first.",
          "2 · Care for people — using the route and travel time you measured in advance.",
          "3 · Preserve the scene. Rope it off. Nothing moved, cleaned, repaired or restarted — including plant other people want back in service.",
          "4 · Notify: internal, the engineer, and where the threshold is met, the regulator and the lenders. Deadlines are contractual and statutory and start running NOW.",
          "5 · Record, immediately: times, names, positions, weather, what was observed. Written within hours, not reconstructed next week.",
          "Only then, investigate. Three things destroy an investigation in the first hour: the scene cleared so work can resume, the plant repaired before it is examined, and the people present sent home before anyone took their account.",
        ],
      },
      {
        title: "Notification: who, when, why",
        points: [
          "Internal management — any incident, immediately. Delayed internal notification is the most common reason external deadlines are missed.",
          "The engineer — per the construction contract. Late notification is itself a breach and easy to evidence.",
          "The regulator — per national law: fatalities, serious injury, releases above a threshold, and in several jurisdictions the discovery of human remains. Short fixed periods; personal liability attaches in some jurisdictions.",
          "The lenders — per the financing agreement. A lender learning of a fatality from the press changes the relationship permanently.",
          "The community — where they are affected or will hear about it, which on a corridor is within hours. Silence in the first day is read as concealment.",
          "Know your thresholds and timings BEFORE an incident.",
        ],
      },
      {
        title: "Root cause, not blame",
        body: "Most site investigations terminate at the last human action before the harm — 'he was not wearing his harness', 'the procedure was not followed', 'the brake failed', 'the supervisor should have stopped it'. Each of those misses the conditions behind it: the anchor point 30 m away, the unworkable procedure, the maintenance backlog, the authority the supervisor did not actually have. Three questions get past blame:",
        points: [
          "Why did this make sense to the person at the time? People do not usually take risks they perceive as risks.",
          "Has this been done this way before? If yes and nothing happened, the practice was tolerated — and the tolerance is the cause.",
          "What would have had to be true for this to be impossible? This moves the answer up the hierarchy of control.",
          "The test of a corrective action: if the actions are retraining, a toolbox talk and a reminder, the investigation found the last human action and stopped. A good investigation produces at least one action that changes a CONDITION.",
        ],
      },
      {
        title: "Evidence and interviews",
        points: [
          "Collect on day one: the scene (photos, measurements, positions, condition of controls); the plant (hour meters, tracker data, maintenance records, the item itself, quarantined); the paperwork (permits, method statement, risk assessment, toolbox records, roster and hours worked in the preceding days); the conditions; the accounts.",
          "Interview separately and early — people converge on a shared version within hours, and after that it is nobody's account.",
          "Open questions first; no leading questions ('was he wearing his harness' produces a different answer from 'what was he wearing').",
          "Without their supervisor present, and say why. Say what the interview is for — an account given in fear of dismissal is not information.",
          "Record it, read it back, have it confirmed.",
        ],
      },
      {
        title: "A report that holds",
        points: [
          "What happened — a factual sequence with times. No characterisation, no adjectives.",
          "What was found — the evidence, with its source, separated from inference by a visible boundary.",
          "Why it happened — causes reaching conditions; where a cause is inferred rather than established, say so.",
          "What we do not know — the section most reports omit and that most establishes credibility.",
          "Corrective actions — owner by name, date, and how completion will be verified. At least one that changes a condition. And verify it HELD: check back at three months, because most corrective actions decay.",
          "Notifications made — to whom, when, by whom.",
          "Never write: speculation stated as fact, conclusions about liability, or anything you would not want read aloud. Assume the report will be disclosed — a document written to be internal and then disclosed always reads badly.",
        ],
      },
    ],
    relatedModules: ["c3"],
  },

  "c4-grievance": {
    title: "Handling a sensitive grievance — reference pack",
    org: "Pathway C · Module C4",
    accent: "#f59e0b",
    image: "/images/lm3.jpg",
    intro:
      "Intake, investigation, resolution — and the feedback step everybody skips. A grievance mechanism is judged by whether a person who has a problem will use it a second time. Every design decision follows from that.",
    sections: [
      {
        title: "Why mechanisms fail",
        points: [
          "Nobody uses it — an empty register on a large project means the channel is unknown, distrusted or unsafe. Not that nothing is happening.",
          "Intake sits with the wrong people — the only entry point is the project office, or the team receiving complaints also delivers project messaging.",
          "Investigation by the interested party — compensation grievances investigated by the land team that set the compensation. A correct outcome is disbelieved.",
          "No feedback — cases marked closed with no record of what the complainant was told. From their side, nothing happened. The single most common reason a mechanism is used once and not again.",
          "Closed means dismissed — high closure rates, low resolution rates: closure recorded when the project decided, not when the complainant was informed.",
        ],
      },
      {
        title: "The five steps",
        points: [
          "1 · INTAKE — multiple entry points, at least one outside any project facility and one outside the line. Anonymous submission possible. Recorded on receipt, reference given to the complainant.",
          "2 · ACKNOWLEDGEMENT — within a defined, published period. Confirm what was understood, say what happens next and by when.",
          "3 · INVESTIGATION — proportionate, by someone independent of the subject matter, in a defined timeframe.",
          "4 · RESOLUTION — a decision, a remedy where one is due, and where the answer is no, a reason.",
          "5 · FEEDBACK AND CLOSURE — tell the complainant the outcome and the reason, in person where it matters. Record what they were told and their response. Close only after that.",
          "THE SEPARATION RULE: delivering project information and receiving grievances are different functions. Same for investigation: whoever set the compensation does not investigate the complaint about it, however competent and honest they are.",
        ],
      },
      {
        title: "Four kinds that need different handling",
        points: [
          "ANONYMOUS — accept it; a mechanism that only accepts named complaints excludes the people most at risk. Be honest about what anonymity costs. Investigate what can be checked independently. A cluster on one subject is information about a system.",
          "RETALIATORY RISK — first question is safety, not substance. Never the same room. Follow up two to eight weeks later: that is when retaliation appears, as a non-renewal or reassignment nobody connects.",
          "SEA/H — does not run through this mechanism at all: the separate channel, trained responder and referral pathway from B4. If one arrives here anyway, you are now a first responder and the ordinary process stops.",
          "COMPENSATION — separate the three questions the complainant may have merged: eligibility, inventory, valuation. Investigate against the entitlement framework, not against the neighbour's payment. And where the complaint reveals a systematic error — depreciation across the register — it is no longer a grievance. It is a finding.",
        ],
      },
      {
        title: "Saying no defensibly",
        points: [
          "Confirm what was claimed, in their words.",
          "Say what was checked and against what — name the document, the register, the measurement.",
          "Give the reason SPECIFICALLY: 'the structure is 40 m outside the right of way and the register records the boundary at chainage 12+400.'",
          "Say what would change the answer, if anything would.",
          "Tell them what they can do next, including routes outside the project — PS1 requires that the mechanism not impede access to other remedies.",
          "Often the right answer is a no to the question they asked and a yes to a question they did not know to ask: loss of access is not land acquisition, and it is compensable.",
        ],
      },
      {
        title: "When to escalate outside the project",
        points: [
          "Any allegation of criminal conduct — the project's process does not replace the criminal one; for SEA/H the decision to report belongs to the survivor.",
          "The subject is senior enough that no internal investigator is independent of them.",
          "The complaint concerns the conduct of public security forces.",
          "A pattern has crossed from cases into a systemic finding — it belongs in the ESAP and in the report to the lenders, not in a case file.",
          "The complainant has gone to an accountability mechanism, the press or a court — cooperate and fix the underlying issue; do not manage the complaint.",
        ],
      },
    ],
    relatedModules: ["c4"],
  },

  "c5-records": {
    title: "Building a record that holds — reference pack",
    org: "Pathway C · Module C5",
    accent: "#64748b",
    image: "/images/lm4.jpg",
    intro:
      "Contemporaneous, attributable, complete, consistent — and safe to disclose. A record will be read, at some point, by an independent consultant, a lender, a regulator, an accountability mechanism, or a court. None of them will have you available to explain it.",
    sections: [
      {
        title: "The four properties",
        points: [
          "CONTEMPORANEOUS — made at the time, or as close as the work allows. A register completed on Friday for the whole week is a reconstruction, and usually visible as one.",
          "ATTRIBUTABLE — who made it, and when. An unsigned, undated entry has no author and therefore no weight.",
          "COMPLETE — including the entries that reflect badly. A register with no bad entries is not a good register.",
          "CONSISTENT — across systems. The incident register, the monthly report, the ESAP tracker, the site diary and the monitoring data should tell the same story.",
        ],
      },
      {
        title: "The retrospective register",
        body: "The single most damaging record-keeping failure, and almost always committed with no intent to deceive: a supervisor behind on paperwork fills in the week's sheets on Friday, from memory and from what was probably true. The activity may genuinely have happened. The record is still false — and detectable: one handwriting, one pen, no variation, values that do not move with conditions that did. What it costs is not the finding about that week. It is the conclusion that the project's records cannot be relied upon, which reaches every record it holds, including the accurate ones.",
        points: [
          "The fix is a design fix: make recording take less time than avoiding it (eight fields, not forty); record where the work happens; accept gaps honestly — 'not taken, plant down' is a BETTER record than an invented value; and never punish an honest bad entry.",
        ],
      },
      {
        title: "Consistency across systems",
        points: [
          "An incident appears in the incident register, the site diary, the monthly report, the corrective action tracker, and any regulator notification — different dates, different severity ratings, or an event in the diary that never reached the register are the divergences reviewers find.",
          "A grievance: cases in the engagement log that were never logged as grievances, because the receiver did not think of them as grievances.",
          "A monitoring exceedance in the data that never reached the report — because the report was compiled from a summary.",
          "ESAP actions marked closed with no evidence attached — the most common single defect in any tracker.",
          "Reconcile before someone else does. A discrepancy you identified and explained is housekeeping. The same one found by a reviewer is concealment or loss of control — and they will not know which.",
        ],
      },
      {
        title: "Records that contain people",
        points: [
          "The compensation register, the grievance register, worker records, consultation attendance and SEA/H case files are databases of named individuals — personal data under national law, including the Nigeria Data Protection Act 2023.",
          "A lawful basis and defined purpose. Access control — not everyone who can open the shared drive should open the compensation register. Security in transmission — circulating a full register by unsecured email is a breach and a personal risk to the people in it. Retention limits and secure disposal.",
          "Minimisation in reporting: numbers and categories. A case narrative with a location and a role identifies someone in a small community.",
          "THE SEA/H EXCEPTION: restricted access by name, secure storage, no narrative in any report, no copy anywhere else.",
        ],
      },
      {
        title: "The record test",
        points: [
          "Was it made at the time? Does it say who made it and when? Does it contain the entries that reflect badly? Does it agree with the other places this event appears?",
          "Would it make sense to a stranger in two years with nobody to explain it? Abbreviations, local shorthand and unstated assumptions do not survive.",
          "Does it contain personal data, and is it held and shared accordingly?",
          "Would you be content for it to be disclosed? Assume it will be — and never keep a second, presentable version: two versions is itself the finding.",
          "One reconstructed register turns your whole document set from evidence into assertion. After that, everything has to be proved from the site and from people — slower, and almost never in your favour.",
        ],
      },
    ],
    relatedModules: ["c5"],
  },

"a3-money": {
    title: "How the money works — reference pack",
    org: "Module A3 reference pack",
    accent: "#0ea5e9",
    image: "/images/lm2.jpg",
    intro:
      "Conditions, covenants, and the consultant who comes to check. A contractor completes a milestone, certifies it, invoices — and the payment does not arrive, because four actions on the Environmental and Social Action Plan are overdue and one is attached to this disbursement. None of the four is a construction matter.",
    sections: [
      {
        title: "Who is at the table",
        points: [
          "LENDERS — development finance institutions, commercial banks under the Equator Principles, export credit agencies, often several as a syndicate with one acting as agent. They can release or withhold a disbursement, impose conditions, require corrective actions at the borrower's cost, and in the extreme declare an event of default.",
          "THE BORROWER OR SPONSOR — the entity that signed the loan; on a PPP often a special purpose vehicle. Owes every obligation in the financing agreement, passes them into the construction contract, and cannot waive what the lenders imposed.",
          "THE CLIENT — certifies work, instructs, pays. THE ENGINEER — supervises, instructs the contractor, approves method statements, and in many contracts can suspend an activity.",
          "THE CONTRACTOR — executes, and holds the obligations that were passed down.",
          "THE INDEPENDENT CONSULTANT (IESC) — appointed by and reporting to the LENDERS. Reviews before financial close, monitors afterwards. Does not instruct anyone; reports what they find, and the consequences arrive later, through the money.",
          "The distinction people get wrong: site teams treat the consultant as an inspector to be satisfied on the day. They are forming a view about whether your management system can be relied upon — and that view outlives the visit.",
        ],
      },
      {
        title: "Three instruments, three different effects",
        points: [
          "CONDITION PRECEDENT — a gate: something that must be satisfied before financial close or before a particular disbursement. Not met → the event does not happen. Nothing to cure; the gate has not opened.",
          "COVENANT — a continuing obligation during the life of the loan: maintain an ESMS, report on a cycle, comply with the applicable standards. Not met → a breach, usually with a cure period; persistent or material breach reaches an event of default.",
          "ENVIRONMENTAL AND SOCIAL ACTION PLAN — a schedule of specific corrective actions, each with an owner and a deadline, annexed to the agreement. Some actions are tied to a disbursement — which is how an overdue action stops a payment.",
          "Why it matters to someone who will never read a loan agreement: the chain is short. An ESAP action says a worker grievance mechanism will exist by a date. Someone has to build it, tell the workforce, and be able to show both happened. The distance between a foreman not running an induction and a tranche not being released is three steps. Most people believe it is infinite.",
        ],
      },
      {
        title: "The cycle, and where you joined it",
        points: [
          "Screening and categorisation (EP4 Principle 1) → due diligence against the applicable standards, where the ESAP is first drafted → independent review before financial close for Category A and certain Category B (Principle 7) → financial close, from which the standards are contractually binding → construction, with disbursements against milestones, the ESAP running, and the consultant visiting two to four times a year → completion and operation, with completion audits where required (notably resettlement) and monitoring for the life of the loan.",
          "Almost everyone joins at construction, and most have never seen the due diligence report or the ESAP that came out of it. The obligations you work under were agreed by people you have never met, in a document you have never read, about a period before you arrived.",
        ],
      },
      {
        title: "Category A, and what it brings",
        points: [
          "Category A — potential significant adverse impacts, diverse, irreversible or unprecedented: major road corridors, ports, large hydropower, significant resettlement, critical habitat. Category B — limited, site-specific, largely reversible. Category C — minimal or none.",
          "Category A brings: a full ESIA to lender scope; independent review before financial close; independent monitoring for the life of the loan; INFORMED consultation and participation; public reporting under Principle 10.",
          "If someone says the requirements seem heavy: they are the requirements for the risk category the project actually sits in, and the category was determined by what the project does.",
        ],
      },
      {
        title: "The life of an action",
        points: [
          "Actions open from due diligence, from a monitoring visit, from an incident or complaint — or from the project disclosing something it found, the origin that reflects best and is the rarest.",
          "A well-formed action: a SPECIFIC deliverable ('prepare and implement a livelihood restoration plan for the 63 traders at Section 3', not 'improve resettlement outcomes'); a named owner, not a department; a date; the EVIDENCE that will close it — the field most often left blank; and whether it is tied to a disbursement.",
          "An action closes when the agreed evidence has been produced and VERIFIED. Not when the owner says it is done, not when a tracker says closed, not because time has passed.",
          "The most common defect in any ESAP tracker: actions marked closed with no evidence attached. A reviewer reopens every one, and draws a conclusion about the tracker as a whole.",
        ],
      },
      {
        title: "The monitoring cycle, and what actually moves the money",
        points: [
          "Self-monitoring report (borrower, monthly or quarterly). Independent monitoring visit (two to four times a year). Independent monitoring report to the lenders after each visit. ESAP update each cycle. Incident notification IMMEDIATELY on occurrence, per thresholds — not on the reporting cycle. Public reporting, usually annual.",
          "What stops the money is rarely a single event. A condition precedent unmet — the cleanest stop. Overdue ESAP actions tied to a disbursement — the most common cause, and the one nobody on site sees coming. A serious incident. A finding that the management system cannot be relied upon — slower and more damaging, because it reopens everything. Regulatory action or an accountability mechanism complaint.",
          "The sentence to keep: nobody on this project is more than three steps from the money.",
        ],
      },
    ],
    relatedModules: ["m3"],
  },

  "a4-esms": {
    title: "The ESMS — reference pack",
    org: "Module A4 reference pack",
    accent: "#8b5cf6",
    image: "/images/lm3.jpg",
    intro:
      "From a plan on a shelf to what happens on site. An environmental and social management system is not a set of documents — it is the machinery that keeps the documents true and makes them operate. A project with the documents and not the machinery has plans referring to haul routes changed eleven months ago, and no supervisor who has opened any of them.",
    sections: [
      {
        title: "The seven elements, and how you know each is real",
        points: [
          "POLICY — a short commitment signed at the top, communicated to everyone including contractors. Real when someone on site can say what it commits the project to; otherwise it is a poster.",
          "IDENTIFICATION OF RISKS AND IMPACTS — the assessment, across the area of influence including ancillary facilities and cumulative effects. Real when a new borrow pit triggers an assessment rather than a mobilisation.",
          "MANAGEMENT PROGRAMMES — the ESMP and the topic plans, with measures, responsibilities, resources and timing. Real when revised as the works changed.",
          "ORGANISATIONAL CAPACITY AND COMPETENCY — named roles, defined authority, adequate resourcing, competent people. Real when the E&S lead has a budget and can stop something.",
          "EMERGENCY PREPAREDNESS AND RESPONSE — coordinated with authorities, communicated to communities. Real when somebody has driven the route to the hospital and timed it.",
          "STAKEHOLDER ENGAGEMENT — identification, disclosure, consultation, a grievance mechanism, reporting back. Real when there are grievances in the register and complainants were told the outcome.",
          "MONITORING AND REVIEW — data collected, performance assessed, the system changed in response. The only element that changes the other six.",
        ],
      },
      {
        title: "Policy, plan, procedure, record",
        points: [
          "POLICY — what we commit to. One or two pages, signed at director level. Nobody uses it daily; it sets the standard. Changes rarely.",
          "PLAN — what we will do about a defined risk over a defined period. Managers organise with it; supervisors know what is required from it. Changes when the works change — the object that goes stale.",
          "PROCEDURE — how a specific task is done, step by step: the chance find procedure, the grievance intake, the permit to work. Used by the person doing the task, at the moment of doing it.",
          "RECORD — evidence that something happened: registers, monitoring data, inductions, receipts. Created continuously; read by everyone afterwards, including every external reader.",
          "A worker who asks what to do when he uncovers a grave needs a PROCEDURE. Handing him a 90-page heritage plan is a correct answer to a question he did not ask. The test of a system: can the person doing a task reach the thing that tells them how, in under a minute, in a language they read?",
        ],
      },
      {
        title: "The element that fails: capacity",
        points: [
          "An E&S manager with no budget line, requesting funds from the person whose programme the requirement affects. An E&S function reporting to the production manager, so every escalation goes through the person being escalated about. One officer for 90 km and 400 workers. No authority to stop work, so the only response to an unsafe condition is persuasion. Competence assumed rather than established. Contractor E&S staff paid by the contractor and measured on not causing delay.",
          "Every other element can be improved by producing something. Capacity improves only by a decision about money, reporting lines and authority, taken by someone senior — which is why it is the element most often left open through several monitoring cycles.",
          "It also determines whether the others work: a reviewer who concludes the E&S function lacks authority reads every other finding in that light.",
        ],
      },
      {
        title: "Emergency arrangements that are real",
        points: [
          "Credible scenarios FOR THIS PROJECT: a haulage collision involving community members, a fuel or bitumen spill in a settlement, a blasting incident, a camp fire, a flood affecting works and community together, a disease outbreak, a serious injury at the furthest chainage.",
          "Times MEASURED, not assumed — drive it. On several African corridors the honest answer is over three hours, which changes where the clinic goes and whether night work is viable at that chainage.",
          "People OUTSIDE the project know it exists: the district health facility, the local authority, the community — what you will do, what you will not, and how to reach you at three in the morning.",
          "It has been RUN, with the night shift included, lessons recorded, plan changed. A plan that has never been exercised is a description of an intention.",
        ],
      },
      {
        title: "The loop, and the five questions",
        points: [
          "MONITOR → ASSESS → ACT → REVIEW. Breaks: data collected and never looked at; nobody owns the comparison; actions recorded and never verified; and review — management changing the system — absent entirely, which is why the same findings recur.",
          "The test: name one thing in this project's management system that changed this year because of something that was monitored. No answer = a monitoring programme, not a management system.",
          "Five questions that tell you which you have: Is the traffic plan current with today's haul routes? Who is the E&S lead, what is their budget, can they stop work? How long to surgical care from the furthest chainage — measured? How would a worker complain about his supervisor? Name one thing that changed because of monitoring.",
          "A working system answers with a name, a number or an example. A documented one answers with a document reference — and the first will outperform the second on every measure that matters.",
        ],
      },
    ],
    relatedModules: ["m4"],
  },

  "a5-kpis": {
    title: "KPIs and reporting — reference pack",
    org: "Module A5 reference pack",
    accent: "#10b981",
    image: "/images/lm14.jpg",
    intro:
      "From a form at the gate to a decision at a bank. Indicators are not a reporting exercise — they are the mechanism by which what a driver noticed becomes something a manager can act on and a lender can rely on. And the most counter-intuitive lesson in the programme: a perfect number is a warning.",
    sections: [
      {
        title: "The chain, and where it breaks",
        points: [
          "1 · THE PROCEDURE — something happens and someone records it. Breaks: not followed, or followed and not recorded.",
          "2 · THE DATA — made at the time, by a named person. Breaks: recorded retrospectively, which makes it fiction.",
          "3 · THE INDICATOR — many data points compressed into a comparable number. Breaks: defined differently in different months, or a denominator nobody agreed.",
          "4 · THE DECISION — somebody looks, forms a view, does something. THE COMMONEST BREAK: produced, reported, filed, and nothing changes.",
          "5 · THE ASSURANCE — the lenders see performance they can rely on. Breaks: the records behind the numbers were found unreliable.",
          "On most projects links 1-3 work and link 4 does not — the state Module A4 calls a monitoring programme rather than a management system.",
        ],
      },
      {
        title: "What makes a number usable",
        points: [
          "DEFINED — the same definition for everyone, including subcontractors. A rate calculated on a different basis in two months is not a trend; it is two unrelated figures.",
          "SOURCED — traceable back to the records. A number that cannot be walked back to a register is an assertion.",
          "COMPLETE — covering everyone it should. An injury rate excluding the labour supplier's 22 workers is not the project's rate, and the exclusion is invisible in the number.",
          "COMPARABLE — against the previous period, a target, a benchmark.",
          "THE DENOMINATOR PROBLEM — most frequency indicators are a count divided by exposure, and the denominator is compiled separately, by a different department, and rarely checked. Before comparing any rate to anything, establish that the denominator was compiled the same way. This single check finds more reporting errors than any other.",
        ],
      },
      {
        title: "Leading, lagging, and the near miss",
        points: [
          "LAGGING — outcomes that already happened: injuries, spills, exceedances, grievances. Reliable, countable — and too late to prevent what they measure. Watch the trend, not the month.",
          "LEADING — activities meant to prevent the outcomes: inspections, inductions, permits audited, actions closed on time. Predictive — and easy to game: a hundred shallow inspections produce an excellent number and no safety. Check quality, not only quantity.",
          "THE NEAR MISS is both — lagging for an event that happened, leading for one that has not. A rising count usually means people are reporting; a count of zero is a statement that the channel is unknown, unused or unsafe.",
          "How the project responds to the FIRST near miss a worker reports determines the value of the indicator for the rest of the project. Criticise the reporter once, and the number becomes permanently worthless.",
        ],
      },
      {
        title: "The five families",
        points: [
          "OCCUPATIONAL SAFETY — injury frequency rates, lost days, near misses, inspections, training hours, permits. From the incident register, timesheets, inspection and induction records.",
          "ENVIRONMENT — monitoring against limits (dust, noise, effluent, water), exceedances and closure, waste by stream, fuel and water consumption, greenhouse gases where the 25,000 tCO2e threshold applies.",
          "SOCIAL AND COMMUNITY — grievances received/resolved/closed and average closure time, engagement events, community incidents, local employment and procurement.",
          "LABOUR — workforce by category INCLUDING third parties, written terms, age verification, accommodation occupancy against standard, worker grievances.",
          "LAND AND RESETTLEMENT — affected persons identified, compensated, paid; livelihood measures delivered; land accessed without compensation — which should be zero.",
        ],
      },
      {
        title: "Why a perfect number is a warning",
        points: [
          "Zero near misses → nobody is reporting. Zero grievances beside a host community → the mechanism is unknown or distrusted. 100% within limits every month → wrong monitoring points, wrong times, or reconstructed data. 100% of actions closed on time → closed without evidence; a reviewer samples five and reopens them. An injury rate far below the benchmark → under-reporting, or a padded denominator.",
          "A real project has bad numbers in it. Their presence is evidence the system detects; their absence is evidence it does not.",
          "When a number looks perfect, ask why BEFORE reporting it as an achievement — and say in the report what you asked and what you found.",
        ],
      },
      {
        title: "Who reads it",
        points: [
          "The site — where to act this week. Project management — where to put resources, what to escalate. The borrower and client — whether the project is deliverable and defensible. The lenders — whether the conditions on the money are met: release or withhold. The independent consultant — whether the picture matches the site; where they diverge, the divergence is the finding.",
          "One set of honest numbers serves all five. Two sets — a working one and a presentable one — is the worst document a project can hold: the existence of two versions is itself the finding, and no explanation survives it.",
        ],
      },
    ],
    relatedModules: ["m5"],
  },

  "ps-reference": {
    title: "The eight Performance Standards — reference sheets",
    org: "The standards · reference library",
    accent: "#0ea5e9",
    image: "/images/lm5.jpg",
    intro:
      "One sheet per standard: what it is about in one line, when it applies, what it actually requires, and the misreading that most often produces a finding. These are plain-language restatements — in any submission, cite the primary text.",
    sections: [
      {
        title: "PS1 — Assessment and Management of E&S Risks and Impacts",
        body: "The standard that organises all the others: find out what your project will do to people and the environment, decide what you will do about it, build an organisation capable of delivering it, and talk honestly to the people affected throughout. Applies to EVERY project — the other seven apply where their risk is present; PS1 establishes whether it is present.",
        points: [
          "An ESMS with seven elements: policy; risk identification; management programmes; capacity and competency; emergency preparedness; stakeholder engagement; monitoring and review.",
          "Risks identified across the area of influence: associated facilities, cumulative impacts, induced development, vulnerable groups.",
          "The mitigation hierarchy, applied in order — the backbone of the whole framework.",
          "Third parties managed and monitored to the project's own commitments.",
          "A community grievance mechanism, and engagement as a process for the whole project life.",
          "Misreading: 'PS1 is paperwork.' Capacity findings are the hardest to close — they are about people and authority, not documents.",
        ],
      },
      {
        title: "PS2 — Labor and Working Conditions",
        body: "How the project treats the people who build it — including the people it did not hire. Scope follows the relationship to the PROJECT: direct workers, contracted workers, primary supply chain, migrants.",
        points: [
          "Written terms in a language the worker understands; lawful wages, hours and deductions.",
          "Accommodation to the IFC/EBRD note where the project houses workers; freedom of association; non-discrimination; managed retrenchment.",
          "A worker grievance mechanism without retaliation, reaching contracted workers.",
          "No child labour — and NO HAZARDOUS WORK under eighteen, which on a site is the operative threshold whatever national law says.",
          "No forced labour: withheld documents, debt bondage, recruitment fees.",
          "Misreading: 'the supplier gave written assurance.' That shows you asked and did not check — verify ages and terms yourself, third parties included.",
        ],
      },
      {
        title: "PS3 — Resource Efficiency and Pollution Prevention",
        body: "Emissions, effluent, waste, hazardous materials, resource use and greenhouse gases — with the numeric levels supplied by the EHS Guidelines, or the national standard where stricter.",
        points: [
          "GHG quantified above 25,000 tCO2e per year — a large road programme usually crosses it.",
          "Waste: avoid → reduce/reuse/recycle → treat → licensed disposal, hazardous waste segregated with a manifest trail.",
          "Bunded fuel storage, spill kits, concrete washout containment, dust suppression, silt control through the wet season.",
          "Borrow pit closure is a DESIGN decision taken before extraction starts — a pit designed for maximum yield cannot be safely closed at any price.",
          "Misreading: 'a national limit closes the question.' Compare parameter by parameter; the more stringent governs each one separately.",
        ],
      },
      {
        title: "PS4 — Community Health, Safety, and Security",
        body: "The risks the project creates for the people living alongside it, and the conduct of anyone guarding it. On a road corridor: continuously, along the entire length.",
        points: [
          "The dominant risk is haulage on public roads — the traffic management plan is the control that saves lives.",
          "Disease exposure: communicable disease with a non-local workforce; vector-borne disease from standing water the works create.",
          "Labour influx assessed and managed: prices, water, health facilities, hiring expectations.",
          "Emergency response coordinated with authorities and communicated to the community.",
          "Security: risks assessed, personnel screened and trained, a community channel — Voluntary Principles where public forces are deployed.",
          "Misreading: 'community safety is about the site boundary.' The greatest risk is kilometres from any site.",
        ],
      },
      {
        title: "PS5 — Land Acquisition and Involuntary Resettlement",
        body: "What happens when a project takes land or restricts its use and someone loses a home, an asset, access or an income. Physical AND economic displacement — the most under-counted impact on almost every corridor.",
        points: [
          "Avoidance first: alternative designs documented before displacement is accepted.",
          "Full replacement cost — no depreciation, transaction costs included; payment direct to the person, never to a committee.",
          "Possession only AFTER compensation is available — the one requirement that cannot be cured retrospectively.",
          "Three eligibility categories, including occupants with NO recognisable claim; a communicated cut-off date.",
          "A RAP or LRP with budget and timetable; livelihoods restored against a baseline; a completion audit.",
          "Misreading: 'the household agreed, so it is compliant.' Agreement does not convert a shortfall into compliance.",
        ],
      },
      {
        title: "PS6 — Biodiversity Conservation",
        body: "Habitats, species, ecosystem services and living natural resources — the standard that can stop a project outright in the most sensitive areas.",
        points: [
          "Habitat classified modified / natural / critical, with progressively stricter requirements.",
          "Natural habitat: no feasible alternative + no net loss where feasible. Critical habitat: ALL conditions met + net gain.",
          "Screening BEFORE clearance — desk sources then seasonal field survey; one dry-season pass misses what matters.",
          "No invasive species: clean plant, inspect imported fill; wildlife crossings where the alignment severs a corridor.",
          "Misreading: 'cash to a conservation body is an offset.' An offset is a measurable outcome — and never a substitute for feasible avoidance.",
        ],
      },
      {
        title: "PS7 — Indigenous Peoples",
        body: "Applies where communities meet the standard's CHARACTERISTICS — self-identification, collective attachment to distinct territories, customary institutions, distinct language — regardless of the vocabulary of national law.",
        points: [
          "Baseline: Informed Consultation and Participation across the project life.",
          "Free, Prior and Informed CONSENT in three circumstances: impacts on lands under traditional ownership or customary use; relocation from such lands; significant impacts on critical cultural heritage.",
          "FPIC is a process — one leader's signature is not a community's consent.",
          "The documented screening IS the deliverable: without it a project cannot demonstrate PS7 does not apply.",
        ],
      },
      {
        title: "PS8 — Cultural Heritage",
        body: "Tangible and intangible heritage — including routes, practices and uses of a place that appear on no map — and the procedure for what a grader uncovers.",
        points: [
          "The chance find procedure is the operative control: in the operator's language, part of induction, and it STOPS the work.",
          "The test: does the grader driver know what to do in the first five minutes after exposing a burial? Who stops, who is called, who decides when work resumes.",
          "Consultation with communities who use, or used within living memory, the heritage in question.",
          "Misreading: 'national antiquities law covers it.' National regimes protect what is DECLARED; PS8 exists for what was never recorded.",
        ],
      },
    ],
    relatedModules: ["std"],
  },

  "ep4-ehs-reference": {
    title: "EP4 & the EHS Guidelines — how standards become binding numbers",
    org: "The standards · reference library",
    accent: "#0ea5e9",
    image: "/images/lm2.jpg",
    intro:
      "Two instruments complete the system: the Equator Principles, which make the Performance Standards contractually binding on bank-financed projects, and the EHS Guidelines, which supply the numeric levels everything is measured against.",
    sections: [
      {
        title: "Which framework governs YOUR financing",
        points: [
          "Commercial banks under the Equator Principles → national law + IFC Performance Standards + EHS Guidelines (the position across Sub-Saharan Africa).",
          "The IFC or an aligned DFI → the Performance Standards and EHS Guidelines directly.",
          "The World Bank lending to a government → the ESF and its ten ESS standards — broadly parallel, differently numbered (ESS5 ≈ PS5).",
          "The African Development Bank → the updated ISS, ten Operational Safeguards (effective 31 May 2024); on co-financed projects both may apply and the more stringent governs.",
          "Export credit agencies → usually the OECD Common Approaches, which point back to the Performance Standards.",
          "The rule above all of them: national law always applies and is never displaced — the more stringent requirement governs.",
        ],
      },
      {
        title: "EP4 — voluntary for the bank, contractual for you",
        body: "EP4 is a voluntary framework adopted by financial institutions — no regulator enforces it. But once the facility agreement incorporates it, it binds the borrower like any other contractual term, and breach carries financial consequence.",
        points: [
          "P1 Categorisation: A, B or C by magnitude of risk — most major infrastructure is Category A.",
          "P2 Assessment proportionate to risk, now including climate risk. P3 Applicable standards: all of Sub-Saharan Africa is Non-Designated.",
          "P4 ESMS + Action Plan — where your ESAP comes from. P5 ongoing engagement; P6 community grievance mechanism.",
          "P7 independent review before financial close; P8 covenants; P9 independent monitoring for the life of the loan (the IESC); P10 public reporting.",
          "What it triggers: conditions precedent before first disbursement, an ESAP with owners and deadlines, an IESC reporting to the LENDERS, and a direct link between E&S performance and the release of money.",
          "Misreading: 'the IESC is there to help us pass.' Their function is to give lenders an accurate picture.",
        ],
      },
      {
        title: "The EHS Guidelines — the numbers",
        body: "The Performance Standards set outcomes; the EHS Guidelines set the LEVELS: emission limits, effluent quality, noise by receptor and time of day, occupational exposure limits. Without them, most of the framework cannot be measured.",
        points: [
          "Structure: General Guidelines in four sections — environmental; occupational H&S; community H&S; and CONSTRUCTION & DECOMMISSIONING, the most relevant to civil works and the most overlooked.",
          "Sector guidelines: Toll Roads for road projects; quarrying, concrete and asphalt where those components exist.",
          "The applicability rule: where national regulations differ, achieve whichever is MORE STRINGENT — parameter by parameter, never document by document.",
          "A less stringent level requires a full, documented, health-based justification — a demanding route, not an escape hatch.",
          "Keep the written parameter-by-parameter comparison on file: it is what converts a defensible position into a demonstrable one.",
          "Misreading: 'guidelines are guidance.' The financing agreement makes them binding, and the IESC measures against them.",
        ],
      },
    ],
    relatedModules: ["std"],
  },

  "loan-esg-conditions": {
    title: "Loan ESG conditions — summary",
    org: "Module 3 · What the facility agreement asks of the project",
    accent: "#10b981",
    image: "/images/lm2.jpg",
    intro:
      "When lenders finance a project, the loan (facility) agreement carries a set of ESG conditions. This summary explains the main types of condition you will meet, in plain language, and what each one means for the site.",
    sections: [
      {
        title: "Where the conditions come from",
        body: [
          "During the ESDD (the lenders' Environmental & Social Due Diligence), consultants review the project's ESIA, permits, plans and track record against the IFC Performance Standards and Equator Principles.",
          "What the ESDD finds shapes everything: the project's Equator category (A / B / C), the corrective actions in the ESAP, and the conditions written into the loan.",
        ],
        image: "/images/lm1.jpg",
      },
      {
        title: "Conditions precedent (CPs)",
        body: "Actions that must be completed BEFORE money moves — either before signing or before the first disbursement.",
        points: [
          "An approved ESIA and the key environmental permits in place.",
          "The ESMS established, with named ESG/HSE staff.",
          "Priority ESAP actions closed (the 'do this first' list).",
          "A working grievance mechanism for workers and communities.",
        ],
        example:
          "The first drawdown is blocked until the project submits proof that its EIA approval is valid and its grievance mechanism is live. No proof, no funds.",
      },
      {
        title: "Ongoing covenants",
        body: "Promises that apply for the LIFE of the loan — breaking one is a covenant breach.",
        points: [
          "Comply with applicable E&S law AND the IFC Performance Standards (the stricter-standard rule).",
          "Implement the ESMS and the management plans (CESMP, waste, traffic, emergency…).",
          "Deliver the ESAP actions by their deadlines.",
          "Maintain the grievance mechanism and keep engaging affected communities.",
          "Give the IESC access to the site, records and people.",
        ],
      },
      {
        title: "Reporting & notification covenants",
        points: [
          "Submit self-monitoring reports on schedule (monthly or quarterly).",
          "Notify lenders of serious incidents — a fatality, a major spill, a community conflict — within a fixed short deadline (often 24–48 hours).",
          "Report honestly: an incident found later by the IESC is far more damaging than one reported on time.",
        ],
        example:
          "A fuel truck overturns and spills near a stream. The covenant requires notification within 48 hours — the site reports it the same day, with the containment actions taken. Trust preserved.",
      },
      {
        title: "What happens on a breach",
        points: [
          "Step 1 — the lenders ask for a corrective action plan with deadlines (often added to the ESAP).",
          "Step 2 — disbursements can be withheld until the actions close.",
          "Step 3 — persistent or serious failure can become an event of default: the loan can be called in.",
          "At every step, transparency and fast corrective action are what bring the project back.",
        ],
        image: "/images/esg-pollution.jpg",
      },
    ],
    relatedModules: ["m3", "m2", "m5"],
  },
  "esap-template": {
    title: "ESAP — Environmental & Social Action Plan",
    org: "Module 3 · Template & guide",
    accent: "#10b981",
    image: "/images/esg-reporting.jpg",
    intro:
      "The ESAP is the project's fix-it list: every gap the ESDD found, turned into a concrete action with an owner, a deadline and evidence of completion. It is agreed with the lenders and usually annexed to the loan agreement — which makes it binding.",
    sections: [
      {
        title: "The columns every ESAP has",
        points: [
          "# — action ID, so everyone refers to the same item.",
          "Action — what must be done, written so completion can be verified.",
          "Reference — the standard it serves (e.g. IFC PS2, PS4) or the ESDD finding.",
          "Responsible — ONE named owner (a role, not a committee).",
          "Deadline — a date, or a milestone ('before first drawdown', 'before earthworks').",
          "Status — open / in progress / completed / overdue.",
          "Evidence — the proof: a record, a photo, a report the IESC can check.",
        ],
      },
      {
        title: "Example rows",
        body: "Three typical ESAP actions, the way they would actually be written:",
        points: [
          "#04 · Recruit and appoint a site GBVSH focal point (PS2) — HR Manager — before mobilisation — Evidence: appointment letter + training record.",
          "#11 · Install bunding and spill kits at all fuel storage areas (PS3) — Site Manager — within 60 days — Evidence: photos + inspection checklist.",
          "#17 · Establish the community grievance mechanism and publicise it in local languages (PS1/PS4) — Community Relations — before first disbursement — Evidence: procedure, register, awareness materials.",
        ],
        example:
          "Notice the pattern: verifiable action + one owner + a real deadline + named evidence. 'Improve safety culture' is not an ESAP action; 'deliver induction training to 100% of workers by 30 June, evidenced by signed registers' is.",
      },
      {
        title: "How the ESAP lives during the project",
        points: [
          "Reviewed at every reporting period — each action's status is updated in the self-monitoring report.",
          "Verified by the IESC on site visits — evidence is checked, not just claimed.",
          "New actions can be added after incidents, audits or IESC findings.",
          "An action is only closed when the EVIDENCE exists — not when the work is merely promised.",
        ],
        image: "/images/lm4.jpg",
      },
      {
        title: "Golden rules",
        points: [
          "One owner per action — shared ownership means no ownership.",
          "Deadlines tied to project milestones beat calendar dates that slip.",
          "Keep the evidence as you go; reconstructing it later is painful.",
          "An overdue action flagged early, with a recovery plan, is manageable. A hidden one is a trust problem.",
        ],
      },
    ],
    relatedModules: ["m3", "m4", "m5"],
  },
  "self-monitoring-template": {
    title: "Self-monitoring report — template & guide",
    org: "Module 3 · What goes in, who reads it",
    accent: "#10b981",
    image: "/images/lm8.jpg",
    intro:
      "The self-monitoring report is the project's regular account of its own ESG performance, sent to the lenders and verified by the IESC. It is the main channel through which site reality reaches the people financing the work.",
    sections: [
      {
        title: "The standard structure",
        points: [
          "1 · Period & summary — the reporting month/quarter and the headlines, good and bad.",
          "2 · KPIs — safety (LTIFR, near-misses), environment (spills, waste, water), social (grievances raised/closed, local employment, training hours). See Module 5.",
          "3 · Incidents & near-misses — what happened, root cause, corrective action, status.",
          "4 · Grievances — new, open and closed, with resolution times.",
          "5 · ESAP progress — status of every action, evidence attached.",
          "6 · Permits & compliance — permit status, inspections, any non-compliances.",
          "7 · Training & engagement — inductions, toolbox talks, community meetings held.",
          "8 · Photos & annexes — the visual evidence trail.",
        ],
      },
      {
        title: "The golden rules",
        points: [
          "Honest — report the bad month. A concealed incident found by the IESC costs far more than the incident itself.",
          "On time — a late report is itself a covenant issue.",
          "Evidence-backed — every number traceable to a register, checklist or record.",
          "Consistent — same definitions every period, so trends are real (Module 5: garbage in, garbage out).",
        ],
        example:
          "A report states 'zero incidents' for a period in which the IESC later finds an unreported lost-time injury. Result: every other number in every past report is now in doubt — and disbursements pause while everything is re-verified.",
      },
      {
        title: "Who does what",
        points: [
          "Site teams — collect the raw data daily (VHSE forms, registers, checklists).",
          "ESG/HSE manager — compiles, checks and owns the report.",
          "Project director — signs it off; accountability sits at the top.",
          "Lenders & IESC — review it against the loan's ESG conditions and the ESAP.",
        ],
        image: "/images/lm4.jpg",
      },
      {
        title: "A reviewer's eye",
        body: "Lenders read reports the way you should write them: they scan the KPI trends first, then check whether incidents match the narrative, then verify ESAP deadlines. A report that acknowledges problems and shows the corrective path builds MORE confidence than one that is suspiciously perfect.",
      },
    ],
    relatedModules: ["m3", "m5", "m4"],
  },
  "kpi-sources": {
    title: "KPI sources — VHSE form, HSE report, HR workbook",
    org: "Module 5 · Where every number is born",
    accent: "#3b82f6",
    image: "/images/lm4.jpg",
    intro:
      "Every KPI on the dashboard starts life as an entry on a site form. This guide maps the main data sources: what each one captures, who fills it in, and how often. If the form is wrong, every number downstream is wrong.",
    sections: [
      {
        title: "The VHSE form — the daily pulse",
        body: "The Vehicle/HSE daily and weekly forms are the site's heartbeat. Filled in by supervisors at the workface.",
        points: [
          "Hours worked (the denominator of LTIFR and TRIR — get this wrong and every rate is wrong).",
          "Incidents and near-misses, however small.",
          "Inspections carried out, unsafe conditions found and fixed.",
          "Vehicle and plant checks, PPE compliance.",
        ],
        example:
          "A supervisor logs '2 near-misses at the culvert crossing' on Tuesday's VHSE form. By month-end that entry is part of the near-miss KPI, has triggered a toolbox talk, and appears — anonymised — in the lenders' report. One form entry, three uses.",
      },
      {
        title: "The HSE report — incidents & environment",
        points: [
          "Incident investigations — what happened, root cause, corrective action, closure evidence.",
          "Emergency drills — held, attendance, lessons.",
          "Environmental logs — spills (number & volume), waste by type and licensed destination, water abstraction, dust/noise monitoring.",
          "Permit inspections and any non-compliances.",
        ],
      },
      {
        title: "The HR workbook — the people numbers",
        points: [
          "Headcount by category — direct, subcontracted, and where they're from.",
          "Local employment % (the ≥50% target lives here) and female participation %.",
          "Training registers — inductions, toolbox talks, role-specific training hours.",
          "Working hours compliance — the 48+12 cap and rest days (Module 4).",
        ],
      },
      {
        title: "The grievance register",
        points: [
          "Every complaint — from workers or the community — with date received, description, owner.",
          "Action taken, date closed, and whether closed within the target window.",
          "Feeds the grievance KPIs: received, closed on time, average days to close.",
        ],
      },
      {
        title: "Rules of the source",
        points: [
          "Record it when it happens — reconstructed data is guessed data.",
          "One definition per field — a 'near-miss' must mean the same thing on every crew.",
          "Keep the paper (or the app record) — the IESC audits sources, not summaries.",
        ],
        image: "/images/lm5.jpg",
      },
    ],
    relatedModules: ["m5", "m4", "m3"],
  },
  "kpi-definitions": {
    title: "KPI definitions & targets",
    org: "Module 5 · The dictionary of the dashboard",
    accent: "#3b82f6",
    image: "/images/lm8.jpg",
    intro:
      "A KPI is only useful if everyone calculates it the same way. This register defines the core ESG KPIs, how each is computed, and a typical target. (Targets shown are illustrative — each project agrees its own with the lenders.)",
    sections: [
      {
        title: "Safety KPIs",
        points: [
          "LTIFR — lost-time injuries × 1,000,000 ÷ hours worked. Typical target: < 1.0.",
          "TRIR — all recordable injuries × 1,000,000 ÷ hours worked. Trends matter more than the level.",
          "Near-misses reported — count per month. Target: HIGH and rising is healthy (people are reporting).",
          "Toolbox talks held — count vs plan. Target: 100% of plan.",
          "Emergency drills — held vs scheduled. Target: 100%.",
        ],
        example:
          "500,000 hours worked this quarter, 1 lost-time injury → LTIFR = 2.0. Against a target of < 1.0 that's red: the report must explain the injury, the root cause, and the fix.",
      },
      {
        title: "Environmental KPIs",
        points: [
          "Spills — number and volume, by severity; target: zero significant spills.",
          "Waste — tonnes by type, % to licensed disposal; target: 100% licensed.",
          "Water use — m³ abstracted vs permit limit; target: within permit, always.",
          "Dust/noise complaints — count; target: falling trend, all responded to.",
        ],
      },
      {
        title: "Social KPIs",
        points: [
          "Grievances received — count. Zero usually means the mechanism isn't trusted.",
          "Grievances closed on time — % closed within the window (e.g. 30 days). Target: ≥ 90%.",
          "Local employment — % of workforce from host communities. Target: ≥ 50%.",
          "Female participation — % of workforce. Target: agreed per project, trending up.",
          "Training hours — per worker per month, from the HR workbook.",
        ],
      },
      {
        title: "Compliance KPIs",
        points: [
          "Permits valid — all required permits current. Target: 100%, no exceptions.",
          "ESAP actions closed by deadline — %. Target: 100%; every overdue action explained.",
          "Audit findings — open vs closed, aging. Target: none older than the agreed window.",
        ],
      },
      {
        title: "Reading the dashboard",
        points: [
          "Green = on target · Amber = watch, explain in the report · Red = act now, tell the lenders first.",
          "Compare against the trend, not just the target — three ambers in a row is a red.",
          "Every red number in a report should sit next to its corrective action.",
        ],
        image: "/images/esg-reporting.jpg",
      },
    ],
    relatedModules: ["m5", "m3"],
  },
  "raci-matrix": {
    title: "RACI matrix — ESG responsibilities",
    org: "Module 4 · Who does what, and who answers for it",
    accent: "#8b5cf6",
    image: "/images/lm4.jpg",
    intro:
      "A RACI chart removes the most dangerous phrase on a site: 'I thought someone else was handling it.' For every ESG activity it names who is Responsible, Accountable, Consulted and Informed — one letter per person, one A per row.",
    sections: [
      {
        title: "The four letters",
        points: [
          "R — Responsible: does the work. There can be several Rs.",
          "A — Accountable: owns the outcome and answers for it. Exactly ONE per activity.",
          "C — Consulted: gives input before the decision (two-way).",
          "I — Informed: told after the fact (one-way).",
        ],
      },
      {
        title: "A typical ESG RACI",
        body: "Illustrative rows for a construction project (each project tailors its own):",
        points: [
          "ESG policy & objectives — A: Managing Director · R: ESG/HSE Manager · C: Project Directors · I: all staff.",
          "Environmental permits — A: Project Director · R: ESG/HSE Manager · C: consultants · I: lenders.",
          "Daily site inspections — A: Site Manager · R: HSE Supervisors · C: foremen · I: ESG/HSE Manager.",
          "Grievance handling — A: ESG/HSE Manager · R: Community Relations Officer · C: HR · I: Project Director.",
          "Subcontractor ESG compliance — A: Project Director · R: HSE Unit + contract managers · C: procurement · I: lenders via reports.",
          "Self-monitoring report — A: Project Director (signs) · R: ESG/HSE Manager (compiles) · C: site teams · I: lenders & IESC.",
        ],
        example:
          "Note the pattern: accountability climbs (Director level), responsibility sits with the specialist who does the work, and the lenders appear as Informed — through the reports of Module 3.",
      },
      {
        title: "Rules that make a RACI work",
        points: [
          "Exactly one A per row — two owners is no owner.",
          "Every worker appears somewhere: ESG is everyone's job (Module 1), and the RACI shows each person their part.",
          "Review it when people change — a RACI naming someone who left is a gap, not a chart.",
          "Top management holds the ultimate A: accountability sits at the top (Module 4).",
        ],
        image: "/images/esg-governance.jpg",
      },
    ],
    relatedModules: ["m4", "m1"],
  },
  "grievance-procedure": {
    title: "Grievance mechanism procedure",
    org: "Module 4 · How a concern becomes a resolution",
    accent: "#8b5cf6",
    image: "/images/esg-social.jpg",
    intro:
      "The grievance mechanism is the project's safety valve: a safe, known, free way for any worker or community member to raise a concern and have it answered. Its two non-negotiables come straight from the policy suite: confidentiality, and zero retaliation.",
    sections: [
      {
        title: "Who can use it, and how",
        points: [
          "Anyone — workers (direct or subcontracted), community members, suppliers.",
          "Channels: grievance boxes on site, email, phone, in person to the Community Relations Officer — or anonymously.",
          "In appropriate local languages, publicised where people actually see it.",
          "Free to use, and usable without fear: retaliation against anyone who reports in good faith is strictly prohibited.",
        ],
      },
      {
        title: "The six steps",
        points: [
          "1 · Receive & register — every grievance is logged with a date and reference number, whoever it comes from.",
          "2 · Acknowledge — the person is told it was received, and by when to expect an answer.",
          "3 · Investigate — the owner looks into the facts; serious cases (GBVSH, safety) escalate immediately.",
          "4 · Resolve & respond — action is taken and explained to the person who raised it.",
          "5 · Close — with the person's acknowledgement where possible, inside the target window (e.g. 30 days).",
          "6 · Learn — trends feed the KPIs (Module 5) and the management review (Module 4).",
        ],
        example:
          "A villager reports trucks speeding through the market at school closing time. Registered Monday, acknowledged Tuesday, investigated with the traffic plan that week — speed limits enforced, a flagman posted, response delivered, closed in 12 days. The trend ('traffic complaints') appears in the month's KPIs.",
      },
      {
        title: "Special cases",
        points: [
          "GBVSH — confidential channels, survivor support, immediate escalation to the focal point (never handled informally).",
          "Whistleblowing (bribery, fraud) — may go directly to top management; whistleblowers are protected.",
          "Subcontractor workers — must be able to use the project mechanism, not only their employer's.",
        ],
      },
      {
        title: "What good looks like",
        points: [
          "Grievances ARRIVE — zero received usually means zero trust, not zero problems.",
          "Closed on time — ≥ 90% within the window is a typical target.",
          "No retaliation, ever — one retaliation destroys years of trust.",
          "Reported honestly to lenders — grievance numbers are a standing KPI in the self-monitoring report.",
        ],
        image: "/images/lm8.jpg",
      },
    ],
    relatedModules: ["m4", "m5", "m1"],
  },
  "subcontractor-esg": {
    title: "Subcontractor ESG requirements",
    org: "Module 4 · The same standards, flowed down the chain",
    accent: "#8b5cf6",
    image: "/images/lm2.jpg",
    intro:
      "Much of the work on a construction project is done by subcontractors — but responsibility is not subcontracted with it. The main contractor answers to the lenders for everything that happens on site, so its ESG standards flow down the chain through contracts, training and audits.",
    sections: [
      {
        title: "Before they start",
        points: [
          "Signed Subcontractor Agreement — E&S, HSE, labour and grievance obligations written into the contract.",
          "Suppliers sign the Supplier Code of Conduct — ethical sourcing, fair labour, road safety.",
          "Due diligence & screening — counterparties checked (including against sanctions lists) before onboarding.",
          "HSE induction for every subcontracted worker before their first shift.",
        ],
      },
      {
        title: "The standing requirements",
        points: [
          "Local hiring — target at least 50% local employment, with commitments to female participation.",
          "Formal employment — all workers registered for social security, fairly paid, given PPE.",
          "An appointed HSE Supervisor, daily toolbox talks, risk assessments and safety reporting.",
          "Their own grievance mechanism, cooperating with the project-level one.",
          "HSE documentation delivered to the main contractor's HSE unit.",
        ],
        example:
          "A subcontractor mobilises 40 workers for earthworks. Before day one: contract signed, all 40 inducted and issued PPE, an HSE supervisor named, 22 of the 40 hired from the host community. That is the standard working normally.",
      },
      {
        title: "Checking and enforcement",
        points: [
          "Routine inspections, document reviews and audits by the main contractor.",
          "Non-conformances must be closed within set deadlines.",
          "Repeated failure → penalties or contract termination.",
          "Remember Module 1: a subcontractor's conduct is the main contractor's responsibility — there is no 'their problem' on a financed project.",
        ],
        image: "/images/lm4.jpg",
      },
    ],
    relatedModules: ["m4", "m1", "m3"],
  },
};

// Per-module question banks, keyed by module id. Each question:
// { tag, prompt, options[4], correct (index), tip (shown after answering) }.
export const quizzes = {
  "m1": {
    "passMark": 0.8,
    "questions": [
      // ——— E.1 Multiple choice, single answer (14 in bank, 5 served) ———
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "Pillars",
        "prompt": "Which of these is a GOVERNANCE failure, rather than Environmental or Social?",
        "options": [
          "A safety register completed on Friday for the whole week",
          "Sediment run-off reaching a stream",
          "One latrine for eighty men in a worker camp",
          "Night piling next to homes"
        ],
        "correct": 0,
        "tip": "The failure is in the integrity of the record, not in what the record describes. The others are E or S impacts."
      },
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "E&S vs ESG",
        "prompt": "E&S is best described as…",
        "options": [
          "The project-level scope lenders assess and monitor contractually",
          "ESG with the Governance pillar removed",
          "A voluntary corporate reporting framework",
          "The site HSE function under another name"
        ],
        "correct": 0,
        "tip": "Governance is fully present at project level — as management system, capacity, monitoring and review. And E&S reaches beyond the site gate, unlike HSE."
      },
      {
        "fmt": "mcq", "difficulty": "medium", "tag": "E&S vs ESG",
        "prompt": "ESG assesses a ______ and E&S assesses a ______.",
        "options": [
          "Company; project",
          "Project; company",
          "Regulator; lender",
          "Country; company"
        ],
        "correct": 0,
        "tip": "The unit of analysis is what separates the two terms — not the number of pillars."
      },
      {
        "fmt": "mcq", "difficulty": "hard", "tag": "E&S vs ESG",
        "prompt": "Can a company score well on ESG and still fail an E&S audit?",
        "options": [
          "Yes, routinely — ratings measure disclosure; audits measure site reality",
          "No, since ESG includes E&S",
          "Only if the rating agency made an error",
          "Only on Category C projects"
        ],
        "correct": 0,
        "tip": "A contractor may publish an excellent sustainability report and run an appalling worker camp."
      },
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "The rules",
        "prompt": "Under EP4, Nigeria, Ghana, Kenya and Senegal are…",
        "options": [
          "Non-Designated Countries",
          "Designated Countries",
          "Exempt from the Equator Principles",
          "Classified case by case per project"
        ],
        "correct": 0,
        "tip": "Non-Designated status is what brings the Performance Standards into full application, on top of national law."
      },
      {
        "fmt": "mcq", "difficulty": "medium", "tag": "The rules",
        "prompt": "The IFC is…",
        "options": [
          "The private sector arm of the World Bank Group",
          "A department of the World Bank lending to governments",
          "An agency of the United Nations",
          "The body that licenses national regulators"
        ],
        "correct": 0,
        "tip": "The World Bank lends to governments under the ESF. The IFC finances companies under the Performance Standards."
      },
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "The rules",
        "prompt": "The Equator Principles were first adopted in 2003. The IFC Performance Standards were first issued in…",
        "options": [
          "2006, and revised in 2012",
          "2004, following the Who Cares Wins report",
          "1992, with the first EIA laws",
          "2020, with EP4"
        ],
        "correct": 0,
        "tip": "Who Cares Wins (2004) is an investor text — it coined 'ESG' but is not the source of project finance standards."
      },
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "Hierarchy",
        "prompt": "The mitigation hierarchy, in order, is…",
        "options": [
          "Avoid, minimise, restore, compensate",
          "Assess, mitigate, monitor, report",
          "Plan, do, check, act",
          "Compensate, restore, minimise, avoid"
        ],
        "correct": 0,
        "tip": "'Assess–mitigate–monitor–report' describes a management cycle, not the hierarchy. And the order is binding, never reversed."
      },
      {
        "fmt": "mcq", "difficulty": "medium", "tag": "Hierarchy",
        "prompt": "Applied to occupational safety, the mitigation hierarchy means…",
        "options": [
          "Eliminate the hazard first; personal protective equipment last",
          "Issue correct PPE first; engineer controls if budget allows",
          "Train workers first, then assess the hazard",
          "Insure the risk, then reduce it"
        ],
        "correct": 0,
        "tip": "A safety strategy that begins with helmets has started at step four."
      },
      {
        "fmt": "mcq", "difficulty": "hard", "tag": "Hierarchy",
        "prompt": "You may move to compensation before avoidance…",
        "options": [
          "Never — unless avoidance has been considered and documented as not feasible",
          "Whenever compensation costs less than redesign",
          "When the client approves the payment",
          "When construction has already started"
        ],
        "correct": 0,
        "tip": "Cost is a factor within feasibility. It is not a licence to skip a step — and the reviewer will ask for the documented comparison."
      },
      {
        "fmt": "mcq", "difficulty": "easy", "tag": "Chain of obligation",
        "prompt": "In the chain of obligation, requirements originate with…",
        "options": [
          "The lenders, through the financing agreement",
          "The site HSE team",
          "The national regulator",
          "The subcontractors' method statements"
        ],
        "correct": 0,
        "tip": "The HSE team implements requirements — it does not create them. They flow down from the financing agreement."
      },
      {
        "fmt": "mcq", "difficulty": "medium", "tag": "Chain of obligation",
        "prompt": "Why does the LAST link in the chain — the person on site — matter most?",
        "options": [
          "Only what happens on the ground is performance; everything above is a plan",
          "Site staff carry personal legal liability for every breach",
          "The last link writes the monitoring reports",
          "Lenders only ever inspect the site level"
        ],
        "correct": 0,
        "tip": "Personal liability exists in some jurisdictions, but that is not why the last link matters. Plans only become performance at the ground."
      },
      {
        "fmt": "mcq", "difficulty": "medium", "tag": "Law vs standards",
        "prompt": "A twenty-two year old house must be demolished for the road. It is compensated at…",
        "options": [
          "The cost of an equivalent new structure, no depreciation, plus transaction costs",
          "Market value less depreciation for age and condition",
          "The rateable value in the state valuation schedule",
          "A goodwill amount agreed with the community leader"
        ],
        "correct": 0,
        "tip": "Depreciated valuation is standard national practice — and it is exactly the gap PS5's full replacement cost closes."
      },
      {
        "fmt": "mcq", "difficulty": "hard", "tag": "Governance",
        "prompt": "Which statement about the consequences of a governance failure is most accurate?",
        "options": [
          "It normally enters a defined process: finding, corrective action, escalation, financial consequence if uncured",
          "Any bribe triggers immediate default across the loan",
          "It is a matter for internal discipline and does not concern lenders",
          "It only matters if a regulator becomes involved"
        ],
        "correct": 0,
        "tip": "Overstating the consequence is counterproductive. The realistic risk is cumulative, not catastrophic — a record that makes the next disbursement conditional."
      },
      // ——— E.2 Multiple response (5 in bank, 2 served) ———
      {
        "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "ESMS",
        "prompt": "Which of these are elements of the management system PS1 requires? Select all that apply.",
        "options": [
          "Policy",
          "Organisational capacity and competency",
          "Monitoring and review",
          "A published sustainability report",
          "An ESG rating from an external agency",
          "Emergency preparedness and response"
        ],
        "correct": [0, 1, 2, 5],
        "tip": "An external rating measures disclosure at company level — no standard requires one. And emergency preparedness IS one of the seven elements; on a construction project it is among the most consequential."
      },
      {
        "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "Hierarchy",
        "prompt": "A settlement lies 40 m from a proposed crusher. Which of these are STEP ONE — avoidance — rather than later steps? Select all that apply.",
        "options": [
          "Relocate the crusher to a site 2 km away",
          "Source aggregate from an existing commercial quarry",
          "Install acoustic screening around the crusher",
          "Restrict crushing to daytime hours",
          "Redesign the pavement to reduce aggregate demand",
          "Compensate affected households for noise disturbance"
        ],
        "correct": [0, 1, 4],
        "tip": "Screening and daytime hours are legitimate — and they are step two, minimisation: they reduce the impact rather than removing it. Compensation is step four."
      },
      {
        "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "Chain of obligation",
        "prompt": "Which of these can result in a finding recorded against YOUR project? Select all that apply.",
        "options": [
          "A labour supplier withholding passports from its workers",
          "A quarry operator supplying you without an extraction licence",
          "A subcontractor's uninsured vehicle injuring a pedestrian on your haul route",
          "A neighbouring farmer burning crop residue",
          "A community member's unrelated land dispute with the state",
          "Your catering contractor's kitchen failing a hygiene inspection"
        ],
        "correct": [0, 1, 2, 5],
        "tip": "The farmer and the land dispute arise neither from the project nor from a party engaged by it. Over-inclusion is a real error too: treat every local issue as your finding and you lose the ability to prioritise the ones that are."
      },
      {
        "fmt": "multi", "type": "multi", "difficulty": "hard", "tag": "Law vs standards",
        "prompt": "Your project holds a valid national environmental permit. Which of these questions does that permit leave OPEN? Select all that apply.",
        "options": [
          "Whether compensation was calculated at full replacement cost",
          "Whether occupants without title were included in the register",
          "Whether the project complies with the national EIA statute",
          "Whether a worker grievance mechanism exists",
          "Whether habitat classification was screened under PS6",
          "Whether the environmental fee was paid to the regulator"
        ],
        "correct": [0, 1, 3, 4],
        "tip": "The EIA statute and the fee are the only questions the permit actually answers. Every other option sits in a tier the regulator does not administer."
      },
      {
        "fmt": "multi", "type": "multi", "difficulty": "hard", "tag": "Disclosure",
        "prompt": "Which of these make a DISCLOSED finding better received than a discovered one? Select all that apply.",
        "options": [
          "It shows the detection mechanism works",
          "It shows escalation happened",
          "It shows corrective action was already under way",
          "It reduces the technical severity of the underlying issue",
          "It means the finding will not appear in the report",
          "It preserves confidence in the project's other records"
        ],
        "correct": [0, 1, 2, 5],
        "tip": "Disclosure does not reduce severity and does not remove the finding from the report — believing it does is why teams conceal. What it changes is the conclusion drawn about the organisation."
      },
      // ——— E.3 Sequencing (3 in bank, 1 served) ———
      {
        "fmt": "order", "type": "order", "difficulty": "medium", "tag": "Hierarchy",
        "prompt": "A borrow pit will remove seasonal grazing land. Put these in the required order.",
        "items": [
          "Use an existing licensed quarry instead",
          "Reduce the pit footprint and avoid the main grazing corridor",
          "Reinstate and revegetate the pit on completion",
          "Compensate the herders for the loss of grazing"
        ],
        "tip": "Avoid, minimise, restore, compensate — and this is a SOCIAL impact: the hierarchy applies identically. PS5 requires displacement to be avoided through alternative designs before compensation is considered."
      },
      {
        "fmt": "order", "type": "order", "difficulty": "easy", "tag": "Chain of obligation",
        "prompt": "Put the chain of obligation in order — from where a requirement originates to where it is performed.",
        "items": [
          "The financing agreement between lenders and borrower",
          "The construction contract between borrower and contractor",
          "The EPC contractor's management plans",
          "The subcontract with the earthworks company",
          "The plant operator wetting the haul road"
        ],
        "tip": "Obligations flow down this chain. Liability does not flow back up it."
      },
      {
        "fmt": "order", "type": "order", "difficulty": "hard", "tag": "Disclosure",
        "prompt": "You discover an unrecorded diesel spill at a fuel point. Put these in a sensible order.",
        "items": [
          "Make the area safe and stop the source",
          "Record it in the incident register",
          "Notify the engineer and your E&S lead",
          "Sample the soil and define the extent",
          "Investigate the cause and define corrective action"
        ],
        "tip": "Making safe always comes first. Recording BEFORE notifying matters: a notification without a register entry reads as reconstruction after the fact."
      },
      // ——— E.4 Categorisation (4 in bank, 2 served) ———
      {
        "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "Pillars",
        "prompt": "Sort each situation into Environmental, Social or Governance.",
        "categories": [
          { "id": "e", "label": "Environmental" },
          { "id": "s", "label": "Social" },
          { "id": "g", "label": "Governance" }
        ],
        "items": [
          { "id": "piling", "text": "Night piling near homes", "cat": "e" },
          { "id": "grievance", "text": "A grievance logged as closed that was never resolved", "cat": "g" },
          { "id": "favours", "text": "A supervisor demanding favours for shifts", "cat": "s" },
          { "id": "drums", "text": "Bitumen drums reused for drinking water", "cat": "e" },
          { "id": "gift", "text": "A gift accepted from a supplier during tender", "cat": "g" },
          { "id": "school", "text": "A haul route past a school at closing time", "cat": "s" },
          { "id": "seeds", "text": "Invasive seeds carried in on imported fill", "cat": "e" }
        ],
        "tip": "The drums are Environmental as a contamination pathway — and they also raise community health under PS4. Real issues rarely sit in one pillar."
      },
      {
        "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "Hierarchy",
        "prompt": "Avoidance — or something later in the hierarchy?",
        "categories": [
          { "id": "avoid", "label": "Avoidance (step 1)" },
          { "id": "later", "label": "Later step" }
        ],
        "items": [
          { "id": "shift", "text": "Shift the alignment 30 m to miss twelve houses", "cat": "avoid" },
          { "id": "pay", "text": "Pay full replacement cost for the twelve houses", "cat": "later" },
          { "id": "bridge", "text": "Choose a bridge over an embankment across the wetland", "cat": "later" },
          { "id": "spur", "text": "Delete a spur road that serves no traffic demand", "cat": "avoid" },
          { "id": "water", "text": "Water the haul road to suppress dust", "cat": "later" },
          { "id": "fund", "text": "Fund restoration of an equivalent wetland", "cat": "later" }
        ],
        "tip": "The bridge is frequently miscategorised: it reduces the footprint and the hydrological interruption, but it does not remove the crossing — minimisation, not avoidance."
      },
      {
        "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "Law vs standards",
        "prompt": "Does national compliance SETTLE this — or is the lender standard still open?",
        "categories": [
          { "id": "settled", "label": "Settled" },
          { "id": "open", "label": "Standard still open" }
        ],
        "items": [
          { "id": "permit", "text": "Environmental permit obtained for the alignment", "cat": "open" },
          { "id": "depr", "text": "Compensation paid per the state schedule, with depreciation", "cat": "open" },
          { "id": "fees", "text": "Environmental fees paid to the regulator", "cat": "settled" },
          { "id": "register", "text": "Register limited to certificate-of-occupancy holders", "cat": "open" },
          { "id": "licence", "text": "Extraction licence obtained for a borrow pit — is its SCOPE assessed?", "cat": "open" },
          { "id": "hearing", "text": "Public hearing held at design stage", "cat": "open" }
        ],
        "tip": "The extraction licence settles the LEGAL question and says nothing about whether the pit sits inside the assessed scope — the standard stays open. The fee is the one card the regulator fully answers."
      },
      {
        "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "Chain of obligation",
        "prompt": "Who enforces this — the regulator, or the lenders?",
        "categories": [
          { "id": "lenders", "label": "The lenders" },
          { "id": "regulator", "label": "The regulator" }
        ],
        "items": [
          { "id": "cp", "text": "Conditions precedent to first disbursement", "cat": "lenders" },
          { "id": "stopwork", "text": "A stop-work notice for unlicensed extraction", "cat": "regulator" },
          { "id": "esap", "text": "The Environmental and Social Action Plan", "cat": "lenders" },
          { "id": "fine", "text": "A fine for exceeding a permitted effluent limit", "cat": "regulator" },
          { "id": "iesc", "text": "A finding raised by the independent consultant", "cat": "lenders" },
          { "id": "prosecution", "text": "Prosecution of an officer for falsified monitoring returns", "cat": "regulator" }
        ],
        "tip": "Both routes can be triggered by one event: an unlicensed pit produces a regulator's notice AND a lender's finding from a single omission."
      },
      // ——— E.5 Visual / tap (2 in bank, 1 served) ———
      {
        "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "Spot the site",
        "prompt": "Five things seen on one site. Four are findings — tap the ONE that is NOT a finding.",
        "boxes": [
          "An unfenced flooded excavation beside a footpath",
          "A fuel drum on bare ground, no bund",
          "A worker at height without fall protection",
          "A water bowser suppressing dust beside housing",
          "A skip of mixed, unsegregated waste"
        ],
        "correct": 3,
        "hint": "Not everything on a site is a finding.",
        "tip": "Dust suppression beside housing is exactly what is expected — a compliant control. The other four are findings under PS4, PS3, PS2 and PS3 respectively."
      },
      {
        "fmt": "tap", "type": "diagramtap", "difficulty": "hard", "tag": "The borrow pit file",
        "prompt": "A proposed borrow pit's file contains: the national environmental approval, a landowner's consent letter, and the construction contract with ESMP. All four documents below are missing — tap the one whose absence breaks the LAW and the STANDARDS at the same time.",
        "boxes": [
          "Extraction / mineral title from the minerals authority",
          "Pit management and closure plan",
          "Screening confirming the pit is inside the assessed scope",
          "Independent record of who uses the land"
        ],
        "correct": 0,
        "hint": "One of these is a criminal matter as well as a lender finding.",
        "tip": "Without a mineral title, extraction is unlawful under national law AND the pit is an unassessed activity under PS1 — two findings from one omission. The other three are serious lender findings. And note: the consent letter in the file is worth less than it looks — one signature from one interested party is not a consultation record."
      },
      // ——— E.6 Scenario, best first action (2 in bank, 1 served) ———
      {
        "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — Km 214",
        "prompt": "You are eleven weeks behind on embankment. Your quarry manager finds a laterite source 800 m off the alignment that would recover five weeks. A community leader says the land is unused, offers a letter of consent, and asks for a payment to the community development committee. The site is not in the approved assessment. The IESC visits in six weeks. What do you do FIRST?",
        "options": [
          "Establish who actually uses the land, independently of the leader, before anything else",
          "Take the letter, make the payment, start, and add the pit to the next assessment revision",
          "Start extraction and apply for the permit in parallel, since permitting takes ten weeks",
          "Decline the site entirely and absorb the eleven-week delay"
        ],
        "correct": 0,
        "tip": "Option b fails on three counts at once: a lump payment to a committee is not compensation, one interested signature is not consultation, and a later revision does not make the activity assessed. Option c creates two findings from one decision. Option d is not wrong — just premature: you cannot know if the site is usable until someone establishes who uses it."
      },
      {
        "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the labour supplier",
        "prompt": "Your earthworks subcontractor brought in twenty workers through a labour supplier. Your foreman reports two of them look young, and the supplier holds their identity documents. The subcontractor says this is the supplier's arrangement and none of your business. What do you do FIRST?",
        "options": [
          "Suspend the affected workers' deployment, verify ages directly, require the documents returned — then address the supplier contractually",
          "Accept it: the employment relationship is between the workers and the supplier",
          "Report it to the labour inspectorate and let them handle it",
          "Raise it at the next monthly subcontractor meeting"
        ],
        "correct": 0,
        "tip": "PS2 extends to workers engaged by third parties — the finding lands on the project regardless of who signed the contract. Withheld identity documents are a forced-labour indicator: a monthly meeting is the wrong instrument for something that requires action this afternoon. Notifying the inspectorate is a legitimate LATER step."
      }
    ]
  },
  "m2": {
    "passMark": 0.8,
    "questions": [
      {
        "tag": "Two layers",
        "prompt": "True or false: Nigerian law is the maximum standard the contractor has to meet.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "tip": "Local law is the minimum (the floor); lenders require international standards on top."
      },
      {
        "tag": "IFC",
        "prompt": "PS8 concerns…",
        "options": [
          "Cultural Heritage",
          "Labour",
          "Water use",
          "Financing"
        ],
        "correct": 0,
        "tip": "PS8 — Cultural Heritage, incl. chance-find procedures."
      },
      {
        "tag": "IFC",
        "difficulty": "hard",
        "prompt": "FPIC — central to PS7 — stands for…",
        "options": [
          "Free, Prior and Informed Consent",
          "Final Project Inspection Certificate",
          "Fixed Price Import Contract",
          "Formal Public Investment Clause"
        ],
        "correct": 0,
        "tip": "FPIC applies to Indigenous Peoples (PS7)."
      },
      {
        "tag": "Nigeria",
        "image": "/images/lm5.jpg",
        "prompt": "NESREA's role is to…",
        "options": [
          "Set and enforce environmental standards",
          "Supply electricity",
          "Regulate banks",
          "Build roads"
        ],
        "correct": 0,
        "tip": "NESREA is the environmental enforcement agency."
      },
      {
        "tag": "Nigeria",
        "image": "/images/esg-environment.jpg",
        "prompt": "The EIA Act requires…",
        "options": [
          "An approved EIA before major works begin",
          "A tax return",
          "A marketing plan",
          "A dividend policy"
        ],
        "correct": 0,
        "tip": "An approved EIA is a precondition for major projects."
      },
      {
        "tag": "Equator",
        "prompt": "Equator Principles Category A means…",
        "options": [
          "High, diverse or irreversible risk",
          "No risk",
          "Medium risk",
          "Purely financial risk"
        ],
        "correct": 0,
        "tip": "A = highest E&S risk."
      },
      {
        "tag": "Equator",
        "prompt": "Category C projects have…",
        "options": [
          "Minimal or no adverse impact",
          "The highest risk",
          "Medium risk",
          "Unknown risk"
        ],
        "correct": 0,
        "tip": "C = minimal/no impact."
      },
      {
        "type": "multi",
        "tag": "Select all",
        "prompt": "Which of these are Nigerian legal instruments/bodies?",
        "options": [
          "EIA Act",
          "NESREA",
          "IFC Performance Standards",
          "Land Use Act"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "tip": "IFC PS is international, not Nigerian law."
      },
      {
        "tag": "Stricter rule",
        "prompt": "True or false: when local law and an international standard conflict, the contractor follows the cheaper option.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "tip": "You apply the stricter, more protective requirement."
      },
      {
        "tag": "Equator",
        "prompt": "The Equator Principles are used by…",
        "options": [
          "Banks, to assess and monitor project finance",
          "Road contractors, to price jobs",
          "Tax authorities",
          "Insurers only"
        ],
        "correct": 0,
        "tip": "They are a lender framework."
      },
      {
        "tag": "IFC",
        "difficulty": "medium",
        "prompt": "PS3 is about…",
        "options": [
          "Resource Efficiency & Pollution Prevention",
          "Cultural Heritage",
          "Indigenous Peoples",
          "Labour"
        ],
        "correct": 0,
        "tip": "PS3 — pollution prevention, resources, emissions."
      },
      {
        "tag": "Nigeria",
        "prompt": "Which Nigerian law requires an approved Environmental Impact Assessment before a major project proceeds?",
        "options": [
          "The EIA Act",
          "The Land Use Act",
          "The Finance Act",
          "The Evidence Act"
        ],
        "correct": 0,
        "tip": "The EIA Act makes an approved EIA a precondition for major projects."
      },
      {
        "tag": "Regulator",
        "prompt": "NESREA is Nigeria's…",
        "options": [
          "Environmental standards & regulations enforcement agency",
          "National power utility",
          "Stock-market regulator",
          "Road-safety corps"
        ],
        "correct": 0,
        "tip": "NESREA sets and enforces environmental standards."
      },
      {
        "tag": "International",
        "image": "/images/lm2.jpg",
        "prompt": "The IFC Performance Standards are…",
        "options": [
          "The international benchmark for managing ESG risk on financed projects",
          "A Nigerian tax code",
          "An accounting standard",
          "A trade-union charter"
        ],
        "correct": 0,
        "tip": "There are eight IFC PS — the global reference for financed projects."
      },
      {
        "tag": "Equator",
        "prompt": "Under the Equator Principles, lenders categorise a project by…",
        "options": [
          "Its level of ESG risk (A / B / C)",
          "Its loan size only",
          "The borrower's age",
          "The time of year"
        ],
        "correct": 0,
        "tip": "Category A = highest risk, C = minimal — it reflects ESG risk, not money."
      },
      {
        "tag": "Stricter rule",
        "prompt": "When Nigerian law and an international standard differ, the contractor applies…",
        "options": [
          "The stricter, more protective requirement",
          "Whichever is cheaper",
          "Only local law",
          "Neither"
        ],
        "correct": 0,
        "tip": "Lenders require the more stringent standard to be met."
      },
      {
        "tag": "PS",
        "prompt": "Which is one of the eight IFC Performance Standards?",
        "options": [
          "Labour & Working Conditions",
          "Corporate Tax Planning",
          "Advertising Standards",
          "Shareholder Dividends"
        ],
        "correct": 0,
        "tip": "PS2 is Labour & Working Conditions — the others aren't IFC PS."
      },
      {
        "type": "order",
        "tag": "Puzzle",
        "prompt": "Order the assessment process on a project.",
        "items": [
          "Assess the impacts (ESIA)",
          "Set the controls (ESMP)",
          "Monitor performance",
          "Report to the lender"
        ],
        "hint": "You can't control what you haven't assessed, and you can't report what you haven't monitored.",
        "tip": "Assess → control → monitor → report."
      },
      {
        "type": "fillblank",
        "tag": "Fill the blanks",
        "prompt": "Complete the stricter-standard rule.",
        "segments": [
          "Where local law and an international standard differ, the contractor applies the ",
          {
            "options": [
              "stricter",
              "cheaper"
            ],
            "correct": 0
          },
          " requirement — usually the ",
          {
            "options": [
              "international",
              "local"
            ],
            "correct": 0
          },
          " standard."
        ],
        "hint": "Lenders always want the more protective option.",
        "tip": "Apply the stricter, more protective requirement — usually the international standard."
      },
      {
        "tag": "Solve it",
        "image": "/images/lm3.jpg",
        "difficulty": "hard",
        "prompt": "SOLVE THE CASE: during excavation on this building site, workers uncover old pottery and carved stones. What applies, and what do you do?",
        "options": [
          "PS8 chance-find: stop work at that spot, protect the find, notify the authorities",
          "Keep digging — the schedule is tight",
          "PS6 biodiversity: relocate the stones to a forest",
          "Sell the artifacts to fund community projects"
        ],
        "correct": 0,
        "hint": "Cultural heritage has its own Performance Standard — and a fixed procedure for surprises.",
        "tip": "PS8 Cultural Heritage: a chance-find procedure means stop at the spot, protect, and notify — works resume once cleared."
      },
      {
        "tag": "Solve it",
        "image": "/images/esg-environment.jpg",
        "difficulty": "medium",
        "prompt": "SOLVE THE CASE: the road alignment must cross this green corridor. Under PS6, the project's biodiversity goal is…",
        "options": [
          "No net loss — avoid, minimise, then restore or offset habitat",
          "Clear it quickly before anyone objects",
          "Pay a fine and proceed",
          "Biodiversity only matters in national parks"
        ],
        "correct": 0,
        "hint": "Think of the mitigation hierarchy applied to nature.",
        "tip": "PS6 aims for no net loss of biodiversity — the mitigation hierarchy applied to habitats and species."
      },
      {
        "type": "order",
        "tag": "Puzzle",
        "prompt": "Put the ESIA journey in the correct order.",
        "items": [
          "Screening — is a full assessment needed?",
          "Baseline studies — measure before works",
          "Impact assessment — predict the changes",
          "Approval — the regulator signs off"
        ],
        "hint": "You can't assess impacts before you know the starting point.",
        "tip": "Screen → baseline → assess → approve: no major works before the ESIA is approved."
      },
      {
        "type": "fillblank",
        "tag": "Fill the blanks",
        "prompt": "Complete the Equator categories.",
        "segments": [
          "Category ",
          {
            "options": [
              "A",
              "C"
            ],
            "correct": 0
          },
          " projects carry the highest ESG risk, while Category ",
          {
            "options": [
              "C",
              "A"
            ],
            "correct": 0
          },
          " projects have minimal or no adverse impacts."
        ],
        "hint": "The alphabet runs from most to least risky.",
        "tip": "A = significant/irreversible risk, B = limited and manageable, C = minimal."
      },
      {
        "type": "hotspot",
        "tag": "Spot it",
        "prompt": "The ESIA baseline team surveys this area. Tap the PROJECT FOOTPRINT itself — the corridor the works will occupy.",
        "image": "/images/lm12.jpg",
        "zones": [
          {
            "x": 47,
            "y": 62,
            "label": "The road corridor",
            "correct": true
          },
          {
            "x": 15,
            "y": 45,
            "label": "Farmland (part of the surroundings studied)"
          },
          {
            "x": 85,
            "y": 30,
            "label": "Distant fields (wider study area)"
          }
        ],
        "hint": "The footprint is the land the works themselves take — the strip being built.",
        "tip": "The corridor is the project footprint; the ESIA studies it AND the surrounding area it affects."
      },
      {
        "type": "categorize",
        "tag": "Puzzle",
        "prompt": "Sort each rule: Nigerian law or international standard?",
        "categories": [
          {
            "id": "ng",
            "label": "Nigerian law"
          },
          {
            "id": "int",
            "label": "International standard"
          }
        ],
        "items": [
          {
            "text": "EIA Act approval",
            "cat": "ng"
          },
          {
            "text": "IFC PS6 no-net-loss of biodiversity",
            "cat": "int"
          },
          {
            "text": "NESREA enforcement notice",
            "cat": "ng"
          },
          {
            "text": "Equator Category A scrutiny",
            "cat": "int"
          }
        ],
        "hint": "Acts and agencies are national; PS and Equator come from the lenders' world.",
        "tip": "The EIA Act and NESREA are the Nigerian floor; IFC PS and Equator are the international bar."
      },
      {
        "type": "diagramtap",
        "tag": "Tap the diagram",
        "prompt": "The ESIA journey. Tap the step where you measure the environment BEFORE any works begin.",
        "boxes": [
          "Screening",
          "Baseline studies",
          "Impact assessment",
          "Approval"
        ],
        "correct": 1,
        "hint": "You need a 'before' picture to predict the changes.",
        "tip": "Baseline studies capture the starting point — air, water, biodiversity, livelihoods — before works."
      },
      {
        "type": "connect",
        "tag": "Link them",
        "prompt": "Link each body or rule to what it does.",
        "pairs": [
          {
            "l": "NESREA",
            "r": "Enforces Nigerian environmental standards"
          },
          {
            "l": "EIA Act",
            "r": "Requires an approved study before major works"
          },
          {
            "l": "IFC PS",
            "r": "The eight lender benchmark standards"
          },
          {
            "l": "Equator Principles",
            "r": "How banks apply the standards to loans"
          }
        ],
        "hint": "Two are Nigerian, two are international.",
        "tip": "NESREA enforces, the EIA Act requires the study, the IFC PS set the bar, Equator applies it to finance."
      }
    ]
  },
  "m3": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S2 — The consultant",
        "prompt": "The independent consultant (IESC) reports to…",
        "options": ["The lenders", "The borrower who pays their fees", "The engineer", "The national regulator"],
        "correct": 0,
        "tip": "Fees are often paid by the borrower under the agreement. The reporting line is to the lenders — and that is what independence means." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Who instructs",
        "prompt": "Who can instruct a contractor to change a method statement?",
        "options": ["The engineer or supervision consultant", "The independent consultant", "The lenders' agent bank", "The community liaison officer"],
        "correct": 0,
        "tip": "The consultant observes and reports. An instruction from them would compromise the independence of their own later assessment." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S3 — Covenants",
        "prompt": "A covenant is…",
        "options": ["A continuing obligation for the life of the loan", "A precondition to financial close", "A corrective action with a deadline", "A type of insurance"],
        "correct": 0,
        "tip": "A precondition to close is a condition precedent. A covenant runs afterwards, continuously." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Which is it?",
        "prompt": "An obligation to maintain a management system throughout construction is…",
        "options": ["A covenant", "A condition precedent", "An ESAP action", "A voluntary commitment"],
        "correct": 0,
        "tip": "Conditions precedent are gates before an event. This one runs continuously, so it is a covenant." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — Binding",
        "prompt": "Standards become contractually binding at…",
        "options": ["Financial close", "Categorisation", "The first monitoring visit", "Construction start"],
        "correct": 0,
        "tip": "Categorisation determines which standards and what scrutiny. The agreement is what binds." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S5 — Category A",
        "prompt": "Category A means potential impacts that are…",
        "options": ["Significant, diverse, irreversible or unprecedented", "Limited, site specific and reversible", "Minimal or none", "Not yet assessed"],
        "correct": 0,
        "tip": "Limited, site-specific and reversible is Category B. Almost every project in this programme is Category A." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — The blank field",
        "prompt": "The field most often left blank on an ESAP action is…",
        "options": ["The evidence that will close it", "The owner", "The date", "The action description"],
        "correct": 0,
        "tip": "Owners are usually named. Without defined closing evidence, the action cannot be verified and stays open." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S7 — The system finding",
        "prompt": "A finding that the management system cannot be relied upon is more damaging than a single severe finding because…",
        "options": ["It reopens every record rather than one item", "It attracts a larger financial penalty", "It must be reported to the regulator", "It requires a new assessment"],
        "correct": 0,
        "tip": "The consequence is scope, not penalty. Every other record becomes assertion rather than evidence." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S8 — Your link",
        "prompt": "A supervisor's link in the chain to the money is…",
        "options": ["Converting a plan into an instruction and a record", "Reporting to the lenders", "Approving disbursements", "None — supervisors are outside the chain"],
        "correct": 0,
        "tip": "Nobody at supervisor level reports to a lender. What they produce is the evidence the report is built from." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S7 — What stops the money",
        "prompt": "The commonest cause of a stopped disbursement in practice is…",
        "options": ["Overdue action plan items tied to a disbursement", "A fatality", "Regulatory prosecution", "A community blockade"],
        "correct": 0,
        "tip": "And it is the most preventable cause — each overdue action has a name against it." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6 — A well-formed action",
        "prompt": "What does a well-formed ESAP action contain? Select all that apply.",
        "options": ["A specific deliverable, not an aspiration", "A named owner, not a department", "A date", "A severity colour", "The evidence that will close it", "Whether it is tied to a disbursement"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "A severity colour is presentation. The closing evidence is the field most often left blank — and the reason actions stay open." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — What Category A brings",
        "prompt": "Which of these does Category A bring? Select all that apply.",
        "options": ["A full assessment to lender scope", "Independent review before financial close", "Independent monitoring for the life of the loan", "Exemption from national permitting", "Informed consultation and participation", "Public reporting"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Nothing exempts a project from national permitting — the tiers stack, they never replace each other." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S4 — The cycle",
        "prompt": "Put the project cycle in order.",
        "items": ["Screening and categorisation", "Due diligence against the applicable standards", "Independent review of the documentation", "Financial close", "Construction and periodic monitoring"],
        "tip": "Almost everyone joins at the last stage — and has never seen the due diligence report that produced the obligations they work under." },
      { "fmt": "order", "type": "order", "difficulty": "hard", "tag": "S6 — Life of an action",
        "prompt": "Put the life of an ESAP action in order.",
        "items": ["A gap is identified in due diligence or a monitoring visit", "The action is written: deliverable, owner, date, closing evidence", "The work is done and the agreed evidence produced", "The evidence is verified", "The action is closed"],
        "tip": "Not when the owner says it is done, not when a tracker says closed, and not because time has passed. Verified evidence closes an action." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S2 — Instructs or reports?",
        "prompt": "Can this party instruct the contractor — or do they observe and report?",
        "categories": [{ "id": "inst", "label": "Can instruct" }, { "id": "rep", "label": "Observes / reports" }],
        "items": [
          { "id": "engineer", "text": "The engineer or supervision consultant", "cat": "inst" },
          { "id": "iesc", "text": "The independent consultant appointed by the lenders", "cat": "rep" },
          { "id": "client", "text": "The client, through the contract", "cat": "inst" },
          { "id": "agent", "text": "The lenders' agent bank", "cat": "rep" }
        ],
        "tip": "The consultant's consequences arrive later, through the money — never through an instruction on the day." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S3 — Gate or obligation?",
        "prompt": "Condition precedent, or covenant?",
        "categories": [{ "id": "cp", "label": "Condition precedent" }, { "id": "cov", "label": "Covenant" }],
        "items": [
          { "id": "esms-close", "text": "An ESMS in place before financial close", "cat": "cp" },
          { "id": "maintain", "text": "Maintain the ESMS throughout the loan", "cat": "cov" },
          { "id": "rap", "text": "A resettlement plan approved before the land-works disbursement", "cat": "cp" },
          { "id": "report", "text": "Report E&S performance quarterly", "cat": "cov" },
          { "id": "comply", "text": "Comply with the applicable standards at all times", "cat": "cov" },
          { "id": "insurance", "text": "Insurance certificates delivered before first drawdown", "cat": "cp" }
        ],
        "tip": "A gate before an event is a condition precedent — nothing to cure, the gate simply has not opened. A continuing obligation is a covenant, with breach and cure periods." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S6 — The tracker",
        "prompt": "Five entries in an ESAP tracker. Four are defects — tap the ONE that is well-formed.",
        "boxes": ["'Improve resettlement outcomes' — no owner, ongoing", "Closed last month, no evidence attached", "Owner: 'the E&S department', date TBC", "'Prepare and implement a livelihood restoration plan for the 63 traders at Section 3' — named owner, dated, evidence defined", "Overdue 90 days, reported as 'on track' because work has started"],
        "correct": 3,
        "hint": "Specific deliverable, named owner, date, closing evidence.",
        "tip": "A reviewer reopens every action closed without evidence — and draws a conclusion about the tracker as a whole rather than about the actions." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the overdue action",
        "prompt": "An ESAP action tied to the next disbursement — 'worker grievance mechanism implemented and communicated' — falls due Friday. The boxes are installed but no worker has been told and no procedure is published. Your PM wants it reported as complete since 'the work is done'.",
        "options": ["Report it honestly as overdue with a dated completion plan, and finish the communication this week — the closing evidence is what counts", "Report it complete: the boxes are installed", "Report it 'on track' without a date", "Remove it from this month's report"],
        "correct": 0,
        "tip": "An action closes when the agreed evidence has been produced and verified. Reporting it complete creates a record the reviewer can disprove by asking one worker where to complain." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the unresourced action",
        "prompt": "Your E&S officer asks for a budget to fence three borrow pits — an open ESAP action. Production says it is not in the price and the request dies there. The pits sit near footpaths.",
        "options": ["Escalate it as a decision: the exposure quantified, the cost, the disbursement link, and a date a decision is needed", "Accept the answer — production owns the budget", "Fence one pit with materials on hand and close the action", "Wait for the consultant to raise it at the next visit"],
        "correct": 0,
        "tip": "This is a capacity decision and it belongs above you. An unfunded action is still a contractual commitment — and an unfenced pit beside a footpath is a life-safety exposure today." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — before the visit",
        "prompt": "Reviewing the ESAP a fortnight before the monitoring visit, you find three actions marked closed with no evidence attached — by a predecessor, in good faith.",
        "options": ["Reopen the three, attach or produce the evidence where it exists, and disclose the correction at the visit", "Leave them closed — reopening looks worse", "Attach retrospective memos dated last year", "Delete the tracker history and start a clean version"],
        "correct": 0,
        "tip": "A correction you made and explained is housekeeping. Back-dated memos and cleaned histories convert a tidy-up into an integrity finding that reaches every other record." }
    ]
  },
  "m4": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S2 — Seven elements",
        "prompt": "How many elements comprise the management system under PS1?",
        "options": ["Seven", "Four", "Ten", "Three"],
        "correct": 0,
        "tip": "Policy, risk identification, management programmes, capacity and competency, emergency preparedness, stakeholder engagement, monitoring and review." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Which object?",
        "prompt": "A worker asks what to do if he uncovers a grave. He needs…",
        "options": ["A procedure", "The cultural heritage management plan", "The policy", "A toolbox talk"],
        "correct": 0,
        "tip": "A plan tells managers how the risk is organised. A procedure tells the person doing the task what to do now." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Goes stale",
        "prompt": "Which object goes stale when the works change?",
        "options": ["The plan", "The policy", "The record", "The procedure"],
        "correct": 0,
        "tip": "Policies change every few years. Plans describe a defined period and a defined configuration of works." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S4 — Reporting line",
        "prompt": "An E&S function reporting to the production manager is a problem because…",
        "options": ["Every escalation runs through the person being escalated about", "It reduces the E&S manager's seniority", "It slows down reporting", "It is prohibited by PS1 explicitly"],
        "correct": 0,
        "tip": "Seniority is secondary. The reporting line determines whether an escalation is possible at all." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S4 — Incentives",
        "prompt": "Contractor E&S staff paid by the contractor and measured on not causing delay are…",
        "options": ["A capacity finding, because the incentive runs against the function", "Acceptable, since the contractor holds the obligation", "A cost saving", "Standard practice and unremarkable"],
        "correct": 0,
        "tip": "Holding the obligation is exactly why the incentive matters. The arrangement makes raising a problem personally costly." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S5 — Real arrangements",
        "prompt": "An emergency arrangement is real when…",
        "options": ["The times are measured, outsiders know it exists, and it has been drilled", "It is approved and current", "It names the district hospital", "It covers fire and first aid"],
        "correct": 0,
        "tip": "Approval is a document state. None of the real tests is satisfied by approval." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — The absent step",
        "prompt": "The step most often absent from the monitoring loop is…",
        "options": ["Review, where management changes the system", "Monitor", "Assess", "Act"],
        "correct": 0,
        "tip": "Without review the system can be maintained but not improved — which is why the same findings recur." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S7 — The fast test",
        "prompt": "The fastest way to test whether a system works is…",
        "options": ["Ask five questions and listen for names, numbers and examples", "Audit the document register", "Count the approved plans", "Check the certification"],
        "correct": 0,
        "tip": "A document register tells you what exists. The five questions tell you what operates." },
      { "fmt": "multi", "type": "multi", "difficulty": "easy", "tag": "S2 — The elements",
        "prompt": "Which are elements of the management system PS1 requires? Select all that apply.",
        "options": ["Policy", "Identification of risks and impacts", "Organisational capacity and competency", "An external sustainability rating", "Emergency preparedness and response", "Monitoring and review"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "No standard requires an external rating — it measures disclosure at company level, not operation at project level." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S4 — Inadequate capacity",
        "prompt": "Which of these are signs of inadequate organisational capacity? Select all that apply.",
        "options": ["An E&S manager with no budget line", "An E&S function reporting to the production manager", "No authority to stop work", "An E&S team of more than two people", "Competence assumed rather than established", "One officer for 90 km of corridor and 400 workers"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Team size alone proves nothing either way — what matters is budget, reporting line, authority and competence." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S6 — The loop",
        "prompt": "Put the monitoring loop in order.",
        "items": ["Monitor against defined parameters", "Assess the data against the requirement and the trend", "Act, with an owner, a date and verification", "Review whether the system as a whole is working"],
        "tip": "Review is the step most often absent entirely — and the only one that lets the system improve rather than merely be maintained." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S3 — Four objects",
        "prompt": "Policy, plan, procedure or record?",
        "categories": [{ "id": "pol", "label": "Policy" }, { "id": "plan", "label": "Plan" }, { "id": "proc", "label": "Procedure" }, { "id": "rec", "label": "Record" }],
        "items": [
          { "id": "grave", "text": "What to do when you uncover human remains", "cat": "proc" },
          { "id": "tmp", "text": "The traffic management plan", "cat": "plan" },
          { "id": "commit", "text": "A signed commitment from the director", "cat": "pol" },
          { "id": "sheet", "text": "A monitoring sheet for last Tuesday", "cat": "rec" },
          { "id": "intake", "text": "The grievance intake steps", "cat": "proc" },
          { "id": "register", "text": "An induction attendance register", "cat": "rec" }
        ],
        "tip": "Four different objects with four different lifespans. Confusing them is why people get handed a document that does not answer their question." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S7 — Which system?",
        "prompt": "Is this the answer of a WORKING system, or a DOCUMENTED one?",
        "categories": [{ "id": "work", "label": "Working system" }, { "id": "docd", "label": "Documented system" }],
        "items": [
          { "id": "revision", "text": "'Yes — here is the revision that changed the plan when the routes moved'", "cat": "work" },
          { "id": "approved", "text": "'All our plans are approved and current'", "cat": "docd" },
          { "id": "drove", "text": "'Two hours ten minutes — I drove it in March'", "cat": "work" },
          { "id": "annex", "text": "'The emergency plan is at Annex F'", "cat": "docd" },
          { "id": "example", "text": "'We moved the fuel point after the March monitoring data'", "cat": "work" },
          { "id": "reference", "text": "'The grievance procedure is document GRV-002'", "cat": "docd" }
        ],
        "tip": "A working system answers with a name, a number or an example. A documented one answers with a document reference." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S1 — The noticeboard",
        "prompt": "Four items on a site office noticeboard. Three are findings — tap the ONE that is correct as posted.",
        "boxes": ["A traffic plan referring to haul routes changed eleven months ago", "An organisation chart with the E&S role vacant for five months", "An emergency notice for a plan that has never been drilled", "A grievance poster naming a person, a number, and an entry point outside the gate"],
        "correct": 3,
        "hint": "One of these gives a name and a route that works.",
        "tip": "Current, named, reachable — that is what real looks like. The other three are documents describing intentions." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the stale plan",
        "prompt": "Nine days before a monitoring visit you find the traffic management plan predates two haul route changes, and no briefing records exist for the new routes.",
        "options": ["Revise the plan now, dated today, deliver the briefings this week, and disclose both the gap and the correction", "Revise the plan and date it to when the routes changed", "Leave it and explain if asked", "Remove the plan from the document pack"],
        "correct": 0,
        "tip": "The underlying issue is ordinary — plans go stale when works change. Back-dating is what turns it into an integrity finding." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the refused budget",
        "prompt": "Your E&S lead has requested a budget three times to fence open excavations near a footpath. Production has refused each time — 'not in the price'. Nothing has happened for six weeks.",
        "options": ["Escalate it as a capacity decision: quantify the exposure, name the cost, and put it to someone with authority over money and reporting lines", "Keep asking production", "Note it in the monthly report and wait", "Have the E&S lead buy materials from petty cash"],
        "correct": 0,
        "tip": "Capacity improves only by a decision about money, reporting lines and authority, taken by someone senior. Six weeks of persuasion IS the capacity finding." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the data nobody read",
        "prompt": "You discover six months of dust monitoring data, properly collected, showing a worsening trend at two houses — and no evidence anyone ever looked at it. No exceedance was reported because nobody compared the numbers to the limit.",
        "options": ["Assess the data now against the limits, act on the exceedances with dated corrective actions, and fix the loop by naming an owner for the monthly comparison", "File the data — collection is what the plan requires", "Restart monitoring from this month with a clean series", "Report the trend without acting, to keep the record consistent"],
        "correct": 0,
        "tip": "Data collected and never looked at is the classic broken loop: a monitoring programme, not a management system. The fix is an owner for the comparison — not more data." }
    ]
  },
  "m5": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — The broken link",
        "prompt": "The link in the chain that most commonly breaks is…",
        "options": ["The decision — the number is produced, reported, filed, and nobody acts", "The data", "The procedure", "The assurance"],
        "correct": 0,
        "tip": "Data collection usually works. What fails is that nobody inside the organisation draws a conclusion from it." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Completeness",
        "prompt": "An injury rate that excludes a labour supplier's workers is…",
        "options": ["Incomplete — and the exclusion is invisible in the number", "Acceptable, since they are not direct employees", "More accurate", "A conservative estimate"],
        "correct": 0,
        "tip": "PS2 covers workers engaged by third parties. Excluding them understates the rate and misstates the project's exposure." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S3 — The denominator",
        "prompt": "Before comparing a rate to a previous period you should check…",
        "options": ["That the denominator was compiled the same way", "That the target has not changed", "That the report was on time", "That the same person calculated it"],
        "correct": 0,
        "tip": "Two months can look like an improvement when only the hours changed. This check finds more errors than any other." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — Leading",
        "prompt": "'Inspections completed against plan' is…",
        "options": ["A leading indicator", "A lagging indicator", "Both", "Neither"],
        "correct": 0,
        "tip": "It measures an activity intended to prevent an outcome, not the outcome itself." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — The weakness",
        "prompt": "The weakness of leading indicators is…",
        "options": ["They are easy to game: many shallow inspections produce a good number and no safety", "They arrive too late to act on", "They cannot be counted", "They only apply to safety"],
        "correct": 0,
        "tip": "Arriving too late is the weakness of LAGGING indicators. Leading ones are timely — and gameable." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — The near miss",
        "prompt": "A near miss is…",
        "options": ["Both: lagging for an event that happened, leading for one that has not", "A lagging indicator only", "A leading indicator only", "Not an indicator"],
        "correct": 0,
        "tip": "It is the most useful number on a construction project — and the one most projects report worst." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — Zero grievances",
        "prompt": "Zero grievances on a corridor beside a host community indicates…",
        "options": ["A mechanism that is unknown or distrusted", "Effective community engagement", "A satisfied community", "Good luck"],
        "correct": 0,
        "tip": "A reviewer reads it as a project that cannot see its own operation, whatever the covering note says." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S7 — Divergence",
        "prompt": "When the numbers and the site diverge, the divergence is…",
        "options": ["The finding", "A data quality issue to be corrected quietly", "Normal variation", "The consultant's problem"],
        "correct": 0,
        "tip": "It may indeed be a data issue — and either way the reviewer's conclusion is about whether the reporting can be relied on." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S3 — A usable number",
        "prompt": "What makes a number usable? Select all that apply.",
        "options": ["Defined the same way by everyone, including subcontractors", "Traceable to the records it came from", "Covering everyone it should cover", "Reported on time", "Comparable against a previous period or a target"],
        "correct": [0, 1, 2, 4],
        "tip": "Timeliness is a reporting obligation. It says nothing about whether the number can be relied on." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — The families",
        "prompt": "Which are indicator families a financed infrastructure project reports on? Select all that apply.",
        "options": ["Occupational safety", "Environment", "Social and community", "Share price performance", "Labour", "Land and resettlement"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Share price is a corporate ESG concern, not a project E&S indicator. The five families do not change from project to project — the specific indicators do." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S2 — The chain",
        "prompt": "Put the chain in order.",
        "items": ["The procedure", "The data", "The indicator", "The decision", "The assurance to the lenders"],
        "tip": "On most projects the first three work and the fourth does not: reports go out on time, and nothing changes as a result." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S4 — Leading or lagging?",
        "prompt": "Leading, or lagging?",
        "categories": [{ "id": "lead", "label": "Leading" }, { "id": "lag", "label": "Lagging" }],
        "items": [
          { "id": "ltifr", "text": "Lost time injury frequency rate", "cat": "lag" },
          { "id": "inspections", "text": "Inspections completed against plan", "cat": "lead" },
          { "id": "exceed", "text": "Effluent exceedances recorded", "cat": "lag" },
          { "id": "inductions", "text": "Inductions delivered to new starters", "cat": "lead" },
          { "id": "grievances", "text": "Grievances received", "cat": "lag" },
          { "id": "closed", "text": "Action plan items closed on time", "cat": "lead" }
        ],
        "tip": "Most projects discover they report almost entirely lagging indicators — every number describes something that already went wrong." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S6 — What the reviewer reads",
        "prompt": "Does this figure read as PERFORMANCE — or as a WARNING SIGN?",
        "categories": [{ "id": "perf", "label": "Performance" }, { "id": "warn", "label": "Warning sign" }],
        "items": [
          { "id": "rising", "text": "A rising near-miss count on a new section", "cat": "perf" },
          { "id": "zerogriev", "text": "Zero grievances beside a host community", "cat": "warn" },
          { "id": "allwithin", "text": "100% of monitoring results within limits, every month", "cat": "warn" },
          { "id": "closedexc", "text": "An exceedance recorded, investigated and closed with evidence", "cat": "perf" },
          { "id": "benchmark", "text": "An injury rate far below the sector benchmark", "cat": "warn" },
          { "id": "feedback", "text": "38 of 41 grievances closed WITH recorded feedback to the complainant", "cat": "perf" }
        ],
        "tip": "A real project has bad numbers in it. Their presence is evidence the system detects; their absence is evidence it does not." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S6 — The report page",
        "prompt": "Five elements on a monthly report page. Four are defects — tap the ONE that is correct as presented.",
        "boxes": ["An injury rate whose hours exclude the labour supplier's workers", "A perfect monitoring series with no explanation offered", "A rate compared to last quarter after the denominator method changed", "A near-miss trend shown against last quarter, with the junction cluster named and an action attached", "A grievance count with no comparison to any period or target"],
        "correct": 3,
        "hint": "Defined, sourced, complete, comparable — and acted on.",
        "tip": "The near-miss trend is the chain working: data, indicator, comparison, decision. The other four each break one of the four properties." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the perfect quarter",
        "prompt": "Your dry-season quarter shows zero near misses across a fleet of 22 tippers on public roads. Last quarter there were nine. Your PM wants it highlighted as an achievement in the lender report.",
        "options": ["Ask why before reporting it: check whether reporting collapsed after a driver was criticised, and say in the report what you checked and found", "Highlight it as requested — the number is the number", "Report it without comment", "Adjust last quarter's figure downward for consistency"],
        "correct": 0,
        "tip": "A falling near-miss count usually means reporting fell, not risk. A reviewer who sees a perfect number with no explanation forms a conclusion about the reporting rather than the performance." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the changed denominator",
        "prompt": "The injury rate improved 40% this quarter. Digging in, you find HR started including the labour supplier's hours in the denominator in April — the incidents counted did not change.",
        "options": ["Report the rate with the method change stated, restate the prior quarter on the same basis, and fix the definition so it cannot silently change again", "Report the improvement — the new method is more complete", "Revert to the old denominator", "Report both numbers and let the reader choose"],
        "correct": 0,
        "tip": "The new basis is actually the right one — but an unexplained 'improvement' from a denominator change is exactly the kind of trend a reviewer dismantles in one question." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the second version",
        "prompt": "Ahead of the lender report, your director asks for 'a presentable version' of the indicator tables — the working set shows two exceedances and a rising grievance count.",
        "options": ["Refuse the second version: send the honest set with the exceedances, their closure actions, and a note on what the grievance trend means", "Produce both versions and keep the working one internal", "Smooth the two exceedances into next month", "Delay the report until the numbers improve"],
        "correct": 0,
        "tip": "Two sets is the worst document position a project can hold — the existence of two versions is itself the finding, and no explanation survives it. Bad numbers, explained and acted on, are evidence the system works." }
    ]
  },
  "b1": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Avoidance",
        "prompt": "The cheapest resettlement measure available on a road project is usually…",
        "options": ["A small alignment change agreed during design", "A higher compensation rate agreed early", "A well-run relocation site", "A generous disturbance allowance"],
        "correct": 0,
        "tip": "Avoidance is close to free during design and unavailable once the alignment is fixed." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Economic displacement",
        "prompt": "A farmer keeps his title and his house but can no longer reach half his field. This is…",
        "options": ["Economic displacement, and he is an affected person", "Not a PS5 matter, since no land was acquired from him", "A drainage design question", "Compensable only through the courts"],
        "correct": 0,
        "tip": "PS5 covers loss of access to assets, not only acquisition. This is the most common professional error in the module." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — Category (c)",
        "prompt": "PS5 eligibility category (c) covers…",
        "options": ["People with no recognisable legal right or claim to the land they occupy", "People whose customary rights are recognised under national law", "Holders of a registered lease", "Only people displaced physically"],
        "correct": 0,
        "tip": "Customary rights recognisable under national law are category (b). Category (c) is where PS5 departs furthest from national law." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Category (c)",
        "prompt": "Category (c) persons are NOT compensated for…",
        "options": ["The land itself", "Their structures and other assets", "Their standard of living", "Anything at all"],
        "correct": 0,
        "tip": "They are compensated for structures and assets and assisted to restore their standard of living — just not for land they hold no claim to." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S6 — Replacement cost",
        "prompt": "Full replacement cost is calculated…",
        "options": ["Without deduction for depreciation, and including transaction costs", "At depreciated market value, plus a disturbance allowance", "At the state valuation office schedule rate", "At the price the household will accept"],
        "correct": 0,
        "tip": "A disturbance allowance does not convert a depreciated figure into replacement cost." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S7 — Sequencing",
        "prompt": "Compensation has been approved internally but not yet disbursed. You may…",
        "options": ["Not enter the land — available means the person can collect it", "Enter, provided disbursement follows within the month", "Enter with the community leader's written agreement", "Enter on the parcels where the owner consents"],
        "correct": 0,
        "tip": "An approved calculation is not an available payment. The threshold is payment, not paperwork." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S8 — Livelihoods",
        "prompt": "For an agricultural household, PS5 prefers…",
        "options": ["Replacement land of equivalent productive potential", "Cash compensation, as it gives the household choice", "A rental allowance for two seasons", "Employment on the project"],
        "correct": 0,
        "tip": "Cash is the fallback where land for land is not feasible, not the default. A farmer with capital and no land is not a farmer." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S9 — Cut-off date",
        "prompt": "The purpose of the grievance window after the cut-off date is…",
        "options": ["To allow anyone wrongly omitted to come forward before eligibility is fixed", "To allow renegotiation of compensation rates", "To collect late structure surveys", "To extend eligibility to newcomers"],
        "correct": 0,
        "tip": "It is an eligibility correction mechanism, not a price mechanism." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S3 — Who is displaced",
        "prompt": "Which of these are economically displaced by a road project? Select all that apply.",
        "options": ["A trader operating in the road reserve", "A tenant in an acquired compound", "A sharecropper working land he does not own", "A household 400 m from the alignment with no works or access nearby", "Employees of a displaced business", "A herder whose seasonal route is severed"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "The household at 400 m is deliberately included: not everyone near a project is displaced, and over-inclusion undermines the credibility of the register." },
      { "fmt": "multi", "type": "multi", "difficulty": "hard", "tag": "S9 — Cut-off date",
        "prompt": "What makes a cut-off date enforceable? Select all that apply.",
        "options": ["Announced in advance through channels people actually receive", "Announced in the languages people use", "Dated evidence of each communication retained", "Recorded in the resettlement action plan", "A visual record of what existed on the date", "A grievance window for anyone omitted"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Recording it in the plan is necessary and nowhere near sufficient. Setting the date is not the requirement — communicating it, and being able to prove you did, is." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6 — Replacement cost",
        "prompt": "Which are part of full replacement cost? Select all that apply.",
        "options": ["The cost of an equivalent replacement structure at current prices", "Registration, transfer fees and legal costs", "The cost of moving", "A deduction for the age and condition of the structure", "Lost production from trees until a replacement yields", "Net business income lost during transition"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "The deduction is the defect everyone recognises. The items most often missed are the transaction costs and the moving cost, which quietly put every payment below replacement cost." },
      { "fmt": "order", "type": "order", "difficulty": "hard", "tag": "S7 — Land access",
        "prompt": "Your section needs access to a parcel next week. Put these five actions in the required order.",
        "items": ["Confirm the parcel is inside the resettlement register", "Enumerate who uses the parcel, including seasonal and informal users", "Value the losses at full replacement cost", "Make compensation available to every affected person", "Enter the land and begin works"],
        "tip": "Four of these five can be corrected if done badly. Entering land before compensation is available cannot." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S2 — The hierarchy",
        "prompt": "Twelve houses sit on the alignment. Put these in the order PS5 requires.",
        "items": ["Shift the alignment thirty metres to miss them", "Narrow the right of way so only four are affected", "Restore access and reinstate disturbed land around the retained houses", "Compensate the households at full replacement cost"],
        "tip": "The mitigation hierarchy applied to people. Resettlement is step four, and a project that starts there has skipped the only step that was nearly free." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S6 — Correct or short?",
        "prompt": "Is this compensation correct at full replacement cost — or short?",
        "categories": [{ "id": "ok", "label": "Correct" }, { "id": "short", "label": "Short" }],
        "items": [
          { "id": "new", "text": "Cost of an equivalent new structure, plus transfer fees and transport", "cat": "ok" },
          { "id": "depr", "text": "Construction cost less two percent per year for age", "cat": "short" },
          { "id": "tree", "text": "Flat rate per tree regardless of species, age or productive stage", "cat": "short" },
          { "id": "land", "text": "Land of equivalent productive potential plus registration and legal fees", "cat": "ok" },
          { "id": "crop", "text": "One season of crops where the land is unusable for three", "cat": "short" },
          { "id": "nego", "text": "An amount the household negotiated and accepted, below replacement cost", "cat": "short" }
        ],
        "tip": "Agreement does not convert a shortfall into compliance. The entitlement is not waivable by acceptance, and a reviewer treats a negotiated shortfall exactly as an imposed one." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S4 — Which category?",
        "prompt": "Category (a), (b) or (c)?",
        "categories": [{ "id": "a", "label": "(a) Formal rights" }, { "id": "b", "label": "(b) Recognisable claim" }, { "id": "c", "label": "(c) No recognisable claim" }],
        "items": [
          { "id": "coc", "text": "Holder of a certificate of occupancy", "cat": "a" },
          { "id": "cust", "text": "A family farming under recognised customary tenure", "cat": "b" },
          { "id": "trader", "text": "A trader in the road reserve with no papers", "cat": "c" },
          { "id": "lease", "text": "A registered leaseholder", "cat": "a" },
          { "id": "occ", "text": "A household occupying land it has no claim to under national law", "cat": "c" },
          { "id": "comm", "text": "A community with customary rights recognisable under national law", "cat": "b" }
        ],
        "tip": "(a) and (b) receive compensation for land and assets at full replacement cost. (c) is compensated for structures and assets and assisted to restore its standard of living." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S3 — The corridor scene",
        "prompt": "Seven situations along the corridor. Six are affected persons — tap the ONE that is NOT affected.",
        "boxes": ["A house inside the marked right of way", "A roadside stall in the reserve", "A field bisected by the alignment", "A well now across the carriageway", "A workshop behind a new barrier", "A tenanted compound being acquired", "A house 400 m away with no works or access near it"],
        "correct": 6,
        "hint": "Not everyone near a project is displaced.",
        "tip": "Over-inclusion has its own cost: a register that includes everyone is as hard to defend as one that excludes the people it should have found." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the section already paid",
        "prompt": "You take over a section where compensation is 'complete': 512 households paid from the state valuation schedule with depreciation applied, no baseline, no cut-off date on file. Walking the corridor you count ninety trading positions, fourteen on the register. Works are 55% complete; the IESC visits in seven weeks. Your director asks you to confirm in writing that resettlement is finished. What do you do?",
        "options": ["Decline; stop further land entry, stand up an independent grievance route, enumerate the corridor, quantify the shortfall, and hand a dated corrective plan to the IESC on arrival", "Confirm it, since the compensation programme was completed and closed", "Decline, and commission an independent audit to report in three months", "Confirm it with a caveat noting the outstanding items"],
        "correct": 0,
        "tip": "A confirmation — with or without a caveat — creates a written record that the E&S function certified a position it knew to be false. The audit is the right instinct at the wrong speed: land entry and the missing traders are getting worse daily." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — mobilise Monday",
        "prompt": "The compensation file for four parcels is with the ministry; payment dates are unconfirmed. A community leader offers written confirmation that the households are content for work to begin. Your section manager wants to mobilise on Monday.",
        "options": ["Do not enter. Escalate the payment delay, and resequence the works to parcels where compensation is available", "Mobilise, holding the leader's written confirmation on file", "Mobilise only on parcels where the owner is present and consenting", "Pay an advance directly to the households from project funds"],
        "correct": 0,
        "tip": "A leader cannot waive an individual entitlement — written confirmation makes the breach documented rather than deniable. And a parallel payment route outside the entitlement framework is its own serious finding. Resequencing is usually available." }
    ]
  },
  "b2": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S2 — Scope",
        "prompt": "PS2 defines its scope by…",
        "options": ["The relationship to the project, not by who signed the contract", "The employment contract, which determines the employer", "The nationality of the worker", "The payroll the project controls"],
        "correct": 0,
        "tip": "A labour supplier's contract does not remove the project's obligation or the finding." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Forgotten workers",
        "prompt": "Which categories are most often forgotten from a labour assessment?",
        "options": ["Security guards and drivers hired with their vehicle", "Office administrative staff", "Direct employees on night shift", "Apprentices"],
        "correct": 0,
        "tip": "Both are third-party engaged and usually work the longest hours on the project." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Contributions",
        "prompt": "Statutory contributions are deducted from wages but never remitted. This is…",
        "options": ["A legal breach and PS2 evidence that terms are not honoured, from one act", "A finance matter outside E&S scope", "Acceptable if remitted at year end", "The worker's problem to raise"],
        "correct": 0,
        "tip": "Verify remittance to the institution, not deduction from the worker." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — The age rule",
        "prompt": "The operative age threshold for work on a civil works site is…",
        "options": ["Eighteen, because almost all site work is hazardous work", "The national minimum working age", "Sixteen with parental consent", "Whatever the subcontract states"],
        "correct": 0,
        "tip": "ILO Convention 182 applies a separate and stricter test for hazardous work." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S4 — Remediation",
        "prompt": "You find a sixteen year old operating a compactor. The correct response is…",
        "options": ["Remove from hazardous work, verify, and remediate", "Dismiss immediately to remove the exposure", "Move him to the day shift", "Ask the subcontractor to handle it"],
        "correct": 0,
        "tip": "Dismissal moves a child to work that is more dangerous and less visible — and reads as evidence disposal." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S5 — Documents",
        "prompt": "An employer holding workers' identity documents is…",
        "options": ["A forced labour indicator, acted on regardless of intent", "Acceptable where there is no secure storage", "Standard practice in the region and therefore acceptable", "A matter between worker and employer"],
        "correct": 0,
        "tip": "Provide lockable personal storage instead. There is no legitimate reason to hold a worker's documents." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — The camp",
        "prompt": "Camp sanitary ratios should be assessed against…",
        "options": ["Actual peak occupancy", "Nominal design capacity", "The number of beds that fit", "The day-shift headcount"],
        "correct": 0,
        "tip": "A camp compliant at design capacity routinely fails during a dry season push." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S7 — Grievances",
        "prompt": "The worker grievance mechanism must…",
        "options": ["Be separate from the community mechanism and reach contracted workers", "Route all complaints through the line manager for triage", "Accept only written, named complaints", "Be managed by the community liaison team"],
        "correct": 0,
        "tip": "A large share of worker complaints concern the line manager — a channel that runs only through him is not a channel." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — Indicators",
        "prompt": "Which of these are forced labour indicators? Select all that apply.",
        "options": ["Employer holds identity documents", "A recruitment fee charged to the worker", "Wages withheld beyond the agreed period", "Security checks on entry to the camp", "Deductions leaving almost no net pay", "A one month notice period in the contract"],
        "correct": [0, 1, 2, 4],
        "tip": "Controlling entry is ordinary security and a lawful notice period is ordinary employment. Over-flagging has a cost: a team that calls everything an indicator will be believed about nothing." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S8 — Flow-down",
        "prompt": "Which of these belong in a subcontract flow-down clause for labour? Select all that apply.",
        "options": ["Age verification records to be retained and available", "No recruitment fees charged to workers", "No retention of workers' identity documents", "A general obligation to comply with applicable law", "PPE provided at the subcontractor's cost", "Right of audit with defined consequences"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "The general obligation is already in every subcontract and has never once prevented any of these failures. Specificity is the whole point of a flow-down clause." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6 — The camp review",
        "prompt": "Which of these are assessed in a worker accommodation review? Select all that apply.",
        "options": ["Floor area per person in sleeping quarters", "Toilets and showers per person, separated by sex", "Lighting of sanitary facilities", "The worker's job title", "Fire drill actually conducted with the night shift", "Any deduction taken for accommodation"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Lighting is frequently missed — an unlit shower block is unusable and unsafe after dark, which in practice means it does not exist." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S6 — Hierarchy of controls",
        "prompt": "Workers are exposed to falls from a bridge deck. Put these controls in the required order.",
        "items": ["Assemble the parapet at ground level and lift it into place", "Install edge protection and working platforms", "Impose permits to work and exclusion zones", "Issue harnesses and lanyards"],
        "tip": "Eliminate, engineering, administrative, PPE. PPE is what protects the worker when everything above has failed — not the plan for keeping them safe." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S8 — Subcontractors",
        "prompt": "Put the subcontractor labour management steps in a sensible order.",
        "items": ["Screen the third party before award", "Flow specific labour obligations into the subcontract", "Induct the subcontractor's management", "Verify through payroll sampling, age records and worker interviews", "Act contractually on what you find"],
        "tip": "Most projects do step two and then nothing else. A right of audit with no verification and no consequence is decorative." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S2 — Covered or not?",
        "prompt": "Covered by PS2 as a worker on your project, or not?",
        "categories": [{ "id": "cov", "label": "Covered" }, { "id": "not", "label": "Not covered" }],
        "items": [
          { "id": "guard", "text": "A guard from a private security firm", "cat": "cov" },
          { "id": "operator", "text": "A plant operator supplied with a hired excavator", "cat": "cov" },
          { "id": "asphalt", "text": "Workers at the asphalt plant supplying your section", "cat": "cov" },
          { "id": "trader", "text": "A trader selling food outside the gate", "cat": "not" },
          { "id": "supplied", "text": "A labour supplier's twenty-two men", "cat": "cov" },
          { "id": "visitor", "text": "A government inspector visiting site", "cat": "not" }
        ],
        "tip": "The asphalt plant workers are covered as primary supply chain where there is child or forced labour risk or significant safety issues." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S3 — Deductions",
        "prompt": "Lawful deduction, or a finding?",
        "categories": [{ "id": "law", "label": "Lawful" }, { "id": "find", "label": "A finding" }],
        "items": [
          { "id": "tax", "text": "Income tax", "cat": "law" },
          { "id": "pension", "text": "Pension contribution", "cat": "law" },
          { "id": "ppe", "text": "Cost of hard hat and boots", "cat": "find" },
          { "id": "transport", "text": "Employer transport to site, required to attend, charged to the worker", "cat": "find" },
          { "id": "union", "text": "Union dues where authorised by the worker", "cat": "law" },
          { "id": "fee", "text": "A placement fee for getting the job", "cat": "find" }
        ],
        "tip": "The placement fee is also a forced labour indicator. And where attendance is only possible using employer transport, charging for it reduces the wage for a cost the employer imposed." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S6 — The camp at night",
        "prompt": "Five things seen in a camp block at night. Four are findings — tap the ONE that is correct as built.",
        "boxes": ["Three-tier bunks", "An unlit shower block", "A fire exit obstructed by stored material", "Lockable personal storage beside each bed", "Food stored at ambient temperature in the kitchen"],
        "correct": 3,
        "hint": "One of these is also the answer to the identity-document problem.",
        "tip": "Lockable personal storage is correct as built — and it removes the 'no secure storage' excuse for holding workers' documents. Not everything in a camp is a finding." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the supplier's documents",
        "prompt": "A labour supplier holds the identity documents of 22 workers on a section that is ahead of programme. The subcontractor says this is standard regional practice and that if you interfere the supplier will withdraw the workers. Your director has praised the section's progress twice this month. What do you do FIRST?",
        "options": ["Require the documents returned today and provide lockable storage, then address the supplier contractually", "Raise it in the next monthly subcontractor meeting", "Report the supplier to the labour inspectorate and await the outcome", "Accept it for now and write it into the next audit plan"],
        "correct": 0,
        "tip": "The corrective action costs almost nothing and removes the harm today. The supplier's leverage rests on the arrangement itself: returning documents removes his control over the workers, not the workers — and if he withdraws, that is information about him." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — no payslips",
        "prompt": "Three workers from different gangs tell you, separately and unprompted, that they have never received a payslip and are not sure how their overtime is calculated. All three are paid in cash by their subcontractor. Your own employees are all on payroll.",
        "options": ["Require payslips from the subcontractor within a defined period, and sample the payroll yourself", "Nothing — your own workforce is compliant", "Ask the subcontractor to confirm in writing that it pays lawfully", "Raise it with the workers' union representative"],
        "correct": 0,
        "tip": "The written confirmation is the most tempting option because it produces a document. An assurance letter is not verification — and holding one after a finding is worse than holding nothing, because it shows you asked and did not check." }
    ]
  },
  "b3": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S1 — Routine risk",
        "prompt": "PS4 requires impacts on community health and safety to be anticipated in…",
        "options": ["Both routine and non-routine circumstances", "Emergency and non-routine circumstances only", "The construction phase only", "Circumstances the community raises"],
        "correct": 0,
        "tip": "Routine is the word that matters. A daily haulage cycle is routine and its risks are foreseeable." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Asymmetry",
        "prompt": "Why can haulage risk not be managed as shared responsibility with other road users?",
        "options": ["The vehicles are heavy and the other users are not — the consequence sits entirely on one side", "Because other road users are untrained", "Because national road law does not apply to project vehicles", "Because pedestrians are unpredictable"],
        "correct": 0,
        "tip": "Asymmetry, not competence, is what puts the control on the vehicle." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S3 — Routing",
        "prompt": "Which control REMOVES the encounter rather than reducing its severity?",
        "options": ["Rerouting away from the settlement", "Fitting speed governors", "Posting a banksman at the school gate", "Covering the loads"],
        "correct": 0,
        "tip": "Governors, banksmen and covered loads reduce how bad an encounter is. Routing removes it." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Speed",
        "prompt": "A speed limit with no tracking data is…",
        "options": ["An aspiration, because the incentive runs the other way", "Adequate where drivers are experienced", "A control, once it is signed", "Enforceable through toolbox talks"],
        "correct": 0,
        "tip": "Cycle time drives production. Nobody instructs a driver to speed — the pressure is structural, so speed has to be engineered." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — Influx",
        "prompt": "Which is a documented effect of labour influx?",
        "options": ["Inflation of staple food and rent prices in the host economy", "Improved local health outcomes from project clinics", "Lower school drop-out rates", "Reduced pressure on water sources"],
        "correct": 0,
        "tip": "Project clinics serve the workforce. Influx increases pressure on community facilities, not the reverse." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S5 — Local hiring",
        "prompt": "Local hiring is an influx control because…",
        "options": ["Every role filled locally is one person who does not arrive and does not need water, a bed or services", "It improves community relations", "It reduces the wage bill", "It is required by national law"],
        "correct": 0,
        "tip": "Relations improve too — but the mechanism is that it reduces the number of arrivals, which is step one of the hierarchy." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — Standing water",
        "prompt": "The longest-lasting health impact a road project typically leaves behind is…",
        "options": ["Standing water in unclosed borrow pits and blocked drainage", "Dust during earthworks", "Noise from night works", "Camp effluent"],
        "correct": 0,
        "tip": "Dust ends with the works. A flooded pit breeds vectors for as long as it holds water." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S8 — Emergency",
        "prompt": "An emergency plan is adequate when…",
        "options": ["The transport time has been measured and the arrangement is known to local authorities and the community", "The nearest hospital has been identified and the distance recorded", "The site medic has been appointed", "It has been filed in the ESMP"],
        "correct": 0,
        "tip": "Distance is not time — and a plan nobody outside the project knows about cannot be activated by anyone outside it." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S2 — Hazard mapping",
        "prompt": "Which of these should be mapped before setting a haul route? Select all that apply.",
        "options": ["Schools and their actual opening and closing times", "Markets and the days they are held", "Informal crossings where people actually walk", "The location of the contractor's head office", "Livestock routes and the times they are used", "Water collection points"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Published school hours and real school hours differ on most corridors. Map the real ones, from the people there." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S4 — Influx effects",
        "prompt": "Which of these are recognised effects of labour influx on a host community? Select all that apply.",
        "options": ["Price inflation on staples and rent", "Pressure on water and sanitation", "Pressure on health facilities", "Improved road surface quality", "Transactional sex across a large income gap", "Children leaving school for casual work"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Project traffic generally degrades local road surfaces — which is a separate obligation to reinstate, not an influx benefit." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6 — Health pathways",
        "prompt": "Which community health pathways does a civil works project typically create without intending to? Select all that apply.",
        "options": ["Standing water in pits and blocked drainage", "Dust on housing and on drying food", "Run-off reaching a stream used for drinking", "Open excavations beside footpaths used at night", "Improved vaccination coverage", "Night-time noise disrupting sleep"],
        "correct": [0, 1, 2, 3, 5],
        "tip": "Sleep disruption is frequently dismissed as an inconvenience. It is a health impact — the EHS Guidelines set separate night-time noise limits for that reason." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S3 — The school",
        "prompt": "Haulage passes a school. Put these controls in the required order.",
        "items": ["Reroute haulage away from the village", "Fit speed governors and restrict haulage hours", "Install signage and pedestrian separation at the gate", "Post a banksman at the school gate"],
        "tip": "Avoid, minimise, engineering control, administrative control. Most projects start at the last one because it is the only one a site team can authorise." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S5 — Influx",
        "prompt": "Put these labour influx measures in the required order.",
        "items": ["Hire and train from the local labour market", "Bus workers daily from within commuting distance", "Give the camp its own borehole and waste system", "Agree no-go areas and a signed code of conduct"],
        "tip": "The first two reduce the number of arrivals. The last two manage the people who still arrive. Reduction comes first." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S3 — Decision or instruction?",
        "prompt": "A management decision, or a site instruction?",
        "categories": [{ "id": "mgmt", "label": "Management decision" }, { "id": "site", "label": "Site instruction" }],
        "items": [
          { "id": "route", "text": "Choosing a longer route that avoids two villages", "cat": "mgmt" },
          { "id": "cover", "text": "Requiring loads to be covered", "cat": "site" },
          { "id": "hours", "text": "Setting maximum driver hours and rotation", "cat": "mgmt" },
          { "id": "nearmiss", "text": "Reporting a near miss", "cat": "site" },
          { "id": "gov", "text": "Fitting speed governors to the fleet", "cat": "mgmt" },
          { "id": "banksman", "text": "Using a banksman when reversing on a public road", "cat": "site" }
        ],
        "tip": "The three management items remove or engineer the risk and none can be delivered by a driver. Where a project's only controls are instructions, management has not yet made a decision." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S7 — Severance?",
        "prompt": "Severance and access impact, or not?",
        "categories": [{ "id": "yes", "label": "Severance / access" }, { "id": "no", "label": "Something else" }],
        "items": [
          { "id": "school", "text": "School on one side of the new alignment, most children on the other", "cat": "yes" },
          { "id": "path", "text": "A footpath terminating at an embankment", "cat": "yes" },
          { "id": "shop", "text": "A shop losing frontage to a barrier", "cat": "yes" },
          { "id": "dust", "text": "Dust during earthworks", "cat": "no" },
          { "id": "graze", "text": "A grazing route cut by the carriageway", "cat": "yes" },
          { "id": "reloc", "text": "A household relocated from the right of way", "cat": "no" }
        ],
        "tip": "The relocated household is physical displacement under PS5 and is already captured. Severance is what happens to the people who were NOT moved." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S6 — The corridor drive",
        "prompt": "Five things seen on one corridor. Four are findings — tap the ONE that is correct as shown.",
        "boxes": ["An unfenced flooded borrow pit near housing", "An uncovered tipper load", "An open trench beside a footpath", "Haulage passing the school gate during its opening hour", "A water bowser suppressing dust beside housing"],
        "correct": 4,
        "hint": "Not everything on a corridor is a finding.",
        "tip": "Dust suppression beside housing is both an air quality and a visibility control — exactly what is expected. The other four are findings." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — six minutes",
        "prompt": "Four recorded near misses with pedestrians in four months, none of which produced any change. The community asks you to stop haulage at school times. Rerouting costs 9% of haulage capacity, timed stoppages 11%. Your logistics manager says either puts the embankment programme at risk, and points out a banksman is already posted at the school gate.",
        "options": ["Impose the timing restriction now as an interim measure, and put the routing decision in writing to the project director with cost and risk stated", "Accept the banksman as the control and record the community request as closed", "Ask the logistics manager to decide between the two options", "Commission a road safety study and decide when it reports"],
        "correct": 0,
        "tip": "A logistics manager cannot authorise a 9% capacity reduction and should not be asked to carry a decision with a foreseeable fatality at the end of it. And the more serious finding is that reporting works and response does not — a PS1 management system finding." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the borehole in February",
        "prompt": "It is February. Your camp of 400 workers draws from a borehole shared with the nearest village — an arrangement agreed with the community leadership in the wet season. The queue now starts before dawn and women are walking to a source three kilometres away. No grievance has been submitted.",
        "options": ["Arrange interim water supply now, start a separate camp source, and go to the community before they come to you", "Nothing yet — the arrangement was agreed and no grievance has been raised", "Wait for a grievance so the response can be properly documented", "Reduce camp water use and monitor the yield"],
        "correct": 0,
        "tip": "The agreement was made by people who had no way of knowing what 400 additional daily users would mean in February. Waiting for the grievance is waiting for the relationship to break — and a separate borehole costs a fraction of what follows." }
    ]
  },
  "b4": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S2 — The imbalance",
        "prompt": "The project owns the SEA/H risk because…",
        "options": ["It created the power imbalance through wages, authority and gatekeeping", "Its employees may commit offences", "Communities expect it to", "Lenders require a policy"],
        "correct": 0,
        "tip": "Individual misconduct is a consequence. The imbalance is the cause, and the project brought it." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Three things",
        "prompt": "A supervisor pressuring a worker for sexual favours is…",
        "options": ["Sexual harassment, handled through the workplace pathway", "Sexual exploitation, handled through the community pathway", "A private matter between colleagues", "A criminal matter in every case"],
        "correct": 0,
        "tip": "Exploitation concerns a community member across a project-created imbalance. Between project personnel it is harassment — a workplace matter under PS2." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — The age rule",
        "prompt": "The project's age rule is…",
        "options": ["Eighteen, regardless of the national age of consent", "The national age of consent in the jurisdiction", "Eighteen for workers, national law for others", "Set by each subcontractor"],
        "correct": 0,
        "tip": "The project imposes eighteen on itself and on everyone it engages, and writes it into the code every person signs." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Exchange",
        "prompt": "A worker offers to help a community member with a job application in exchange for a relationship. This is…",
        "options": ["Prohibited absolutely, as an exchange of a project benefit for sex", "Permissible if both are adults and both agree", "A matter for the community leadership", "Only prohibited if money changes hands"],
        "correct": 0,
        "tip": "Consent is not the test where the benefit is controlled by one side. The exchange itself is prohibited." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S5 — The channel",
        "prompt": "A reporting channel whose only entry point is the project office fails because…",
        "options": ["A community member cannot use a channel that runs through the gatekeeper she is reporting", "Office hours are too limited", "It is too formal", "It cannot guarantee anonymity"],
        "correct": 0,
        "tip": "At least one entry point must sit outside any project facility." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — Survivor-centred",
        "prompt": "Survivor-centred means…",
        "options": ["The person harmed decides what happens next, and safety and dignity come before establishing facts", "Every allegation is treated as true", "The survivor conducts the investigation", "No investigation takes place"],
        "correct": 0,
        "tip": "It is about who decides, not about what is believed. Investigation still happens — on the survivor's terms." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S7 — Security",
        "prompt": "Before deploying armed security, the project must…",
        "options": ["Assess the security risk, which usually establishes that arming is not warranted", "Obtain the provider's licence and insurance", "Notify the community", "Issue uniforms and identification"],
        "correct": 0,
        "tip": "Licensing is necessary and does not answer whether arms are warranted. Arming a force that does not need to be armed creates the risk it was meant to address." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S8 — The empty register",
        "prompt": "An empty SEA/H register should be reported as…",
        "options": ["An open question about the channel", "Evidence that prevention is working", "A performance result", "A reason to reduce the responder's hours"],
        "correct": 0,
        "tip": "Nobody used the channel — which usually means it is unknown, not trusted, or not safe." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — Before mobilisation",
        "prompt": "Which of these must exist BEFORE mobilisation? Select all that apply.",
        "options": ["A code of conduct signed individually by every person including third parties", "A confirmed referral pathway for health and psychosocial support", "A reporting entry point outside any project facility", "A completed incident register", "A named, trained responder reachable outside working hours", "Lighting and lockable doors at camp sanitary facilities"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "A register is a container. Building it is not prevention — and an empty one proves nothing about whether the architecture exists." },
      { "fmt": "multi", "type": "multi", "difficulty": "hard", "tag": "S6 — The disclosure",
        "prompt": "Someone discloses to you unexpectedly. Which of these should you do? Select all that apply.",
        "options": ["Move somewhere private", "Take the account once, in their words", "Explain who you will need to tell, before telling anyone", "Ask them to describe exactly what happened", "Ask what would make them safe", "Promise you will tell nobody"],
        "correct": [0, 1, 2, 4],
        "tip": "You are not the investigator and each retelling causes harm. And you cannot deliver a promise of secrecy — a broken one destroys the channel for everyone watching." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S7 — Security requirements",
        "prompt": "Which of these are PS4 requirements for security personnel? Select all that apply.",
        "options": ["Assess the security risk before deciding the arrangement", "Screen individuals for implication in past abuses", "Train in conduct and use of force before deployment", "Issue uniforms and identification badges", "Provide a community channel for concerns about security conduct", "Investigate allegations and act on them"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Uniforms are ordinary practice, not a standard requirement — the kind of visible measure that gets mistaken for the substantive ones." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S6 — The disclosure",
        "prompt": "Someone discloses to you. Put these in a sensible order.",
        "items": ["Move somewhere private", "Listen, once", "Ask what they need and what would make them safe", "Explain the options and who you will need to tell", "Refer to the named trained responder"],
        "tip": "Privacy comes before anything is said. Referral comes last — and only after the person understands what it means." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S5 — Prevention",
        "prompt": "Put these prevention steps in the order they must happen.",
        "items": ["Assess where the gatekeeping and contact points are", "Confirm the referral pathway and name the responder", "Explain the code and take individual signatures", "Mobilise the workforce"],
        "tip": "Every one of the first three comes before mobilisation. A project that mobilises first will do all of them afterwards — in response to something." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S6 — Never acceptable",
        "prompt": "Acceptable, or never acceptable?",
        "categories": [{ "id": "ok", "label": "Acceptable" }, { "id": "never", "label": "Never acceptable" }],
        "items": [
          { "id": "accompany", "text": "Offering to accompany someone to a health facility", "cat": "ok" },
          { "id": "together", "text": "Bringing the two people together to resolve it", "cat": "never" },
          { "id": "record", "text": "Recording the date, the referral made and what was agreed", "cat": "ok" },
          { "id": "payment", "text": "A payment to a family to close a complaint", "cat": "never" },
          { "id": "limits", "text": "Explaining confidentiality limits before telling anyone", "cat": "ok" },
          { "id": "narrative", "text": "A case narrative with location and role in a monthly report", "cat": "never" }
        ],
        "tip": "Communities are small. A location and a role are often enough to identify someone. Report numbers and categories, never narratives." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S7 — The guard",
        "prompt": "A PS2 question about the guard as a worker, or a PS4 question about the guard as a community risk?",
        "categories": [{ "id": "ps2", "label": "PS2 — worker" }, { "id": "ps4", "label": "PS4 — community risk" }],
        "items": [
          { "id": "shifts", "text": "Twelve-hour shifts with no rest break", "cat": "ps2" },
          { "id": "force", "text": "Rules on proportionate use of force", "cat": "ps4" },
          { "id": "terms", "text": "No written terms from the security provider", "cat": "ps2" },
          { "id": "screen", "text": "Screening for implication in past abuses", "cat": "ps4" },
          { "id": "grievance", "text": "No grievance channel for the guards themselves", "cat": "ps2" },
          { "id": "channel", "text": "No channel for the community to report a guard's conduct", "cat": "ps4" }
        ],
        "tip": "Both halves have to be managed, and they are connected: an underpaid, untrained guard on a twelve-hour shift is a labour finding and a community risk at the same time." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S5 — The camp plan",
        "prompt": "Five features of a camp plan at night. Four are findings — tap the ONE that is correct as shown.",
        "boxes": ["An unlit path between accommodation and the sanitary facilities", "A women's block reached by passing through the male area", "A sanitary block with no lock", "A grievance box located only inside the project office, beyond the gate", "A posted sign at the gate giving a reporting number"],
        "correct": 4,
        "hint": "One of these is exactly the requirement.",
        "tip": "An entry point that can be used without entering the facility is exactly what the standard asks for. The other four are findings." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the file that moved",
        "prompt": "A liaison officer tells you, without names, that people in one village believe compensation files move faster for those willing to visit a member of the land team at his accommodation. Nothing is in the grievance register — whose only intake point is the project office, where the land team sits. There is no separate SEA/H channel and no confirmed referral pathway.",
        "options": ["Remove the individual's discretion over file sequencing, stand up a reporting route outside the project office, and confirm the referral pathway", "Interview the women in the village to establish whether there is a case", "Put it to the individual directly and record his response", "Ask the community leadership to look into it and report back"],
        "correct": 0,
        "tip": "The control failure is actionable with no allegation at all: one person holding discretionary control over a benefit. Seeking accounts before a confidentiality architecture exists creates risk for the people who speak to you." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the police detachment",
        "prompt": "The state has deployed a police detachment to protect your project. You do not select, command or discipline them. Your liaison officer reports that people are avoiding a section of road where the detachment operates a checkpoint, and two households have asked to move their market trading elsewhere.",
        "options": ["Engage on the deployment, document what you asked for and what you were told, maintain a community channel covering their conduct, and escalate what it receives", "Nothing — the deployment is a government matter outside the project's control", "Withdraw the liaison officer from that section until the situation settles", "Provide the detachment with vehicles so they can patrol rather than stand at a checkpoint"],
        "correct": 0,
        "tip": "The absence of command does not remove the responsibility; it changes what it consists of. And providing equipment or transport without assessing the exposure can make the project a participant in conduct it cannot control." }
    ]
  },
  "b5": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — The hierarchy",
        "prompt": "A water bowser on the haul road is which step of the hierarchy?",
        "options": ["Step three — control of the release", "Step one — avoidance", "Step two — minimisation", "Step four — compensation"],
        "correct": 0,
        "tip": "Minimisation reduces the source. A bowser suppresses what is already generated." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S3 — The numbers",
        "prompt": "Where a national limit is stricter than the EHS Guideline level…",
        "options": ["The national limit governs for that parameter, and the rest of the standard still applies", "The EHS Guidelines are disapplied for that subject", "The project may choose either", "The looser level applies"],
        "correct": 0,
        "tip": "The comparison runs parameter by parameter, not document by document." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — The Guidelines",
        "prompt": "Which section of the General EHS Guidelines is written for civil works projects?",
        "options": ["Section 4, construction and decommissioning", "Section 1, environmental", "Section 2, occupational health and safety", "The toll roads sector guideline only"],
        "correct": 0,
        "tip": "Section 1 applies too. Section 4 is the one teams skip because they go straight to the sector guideline." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S4 — Waste oil",
        "prompt": "Waste oil used to suppress dust on an access road is…",
        "options": ["A soil and groundwater contamination event presented as a dust control", "Acceptable where no alternative suppressant is available", "Good resource efficiency", "Acceptable away from housing"],
        "correct": 0,
        "tip": "There is no circumstance in which this is acceptable under PS3 or the Guidelines." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Blasting",
        "prompt": "Before blasting near housing you must…",
        "options": ["Survey the condition of nearby structures", "Notify the community on the day", "Lower the charge size", "Obtain the residents' signatures"],
        "correct": 0,
        "tip": "Without a pre-blast survey, every crack for two kilometres becomes the project's — and it cannot prove otherwise." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S5 — The pit in law",
        "prompt": "In most jurisdictions in scope, a borrow pit is…",
        "options": ["A mining activity requiring a mineral title from the minerals authority", "A temporary works area covered by the construction permit", "Covered by the landowner's consent", "Exempt below a volume threshold"],
        "correct": 0,
        "tip": "This is the most consistently missed tier-1 obligation on road projects. A landowner's consent does not confer a mineral right." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — Closure",
        "prompt": "A pit worked for maximum yield…",
        "options": ["Cannot be safely closed afterwards at any price", "Can be closed at additional cost", "Closes naturally once it floods", "Needs only fencing at the end"],
        "correct": 0,
        "tip": "The material to backfill no longer exists nearby, and battering the faces would remove more than the pit produced. Closure is designed before extraction." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S7 — The trail",
        "prompt": "A defensible hazardous waste record shows…",
        "options": ["What it was, how much, who carried it and where it ended up", "The carrier's receipt and the date of collection", "The weighbridge ticket", "The contractor's licence number"],
        "correct": 0,
        "tip": "A receipt proves collection. The chain has to reach a licensed facility whose licence is on file." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — One pit, six standards",
        "prompt": "An unassessed borrow pit near a settlement engages which standards? Select all that apply.",
        "options": ["PS1 — activity outside the assessed scope", "PS3 — dust, noise and sediment", "PS4 — open face and standing water near housing", "PS5 — if anyone used the land", "PS7 — in all cases", "PS8 — if excavation uncovers heritage"],
        "correct": [0, 1, 2, 3, 5],
        "tip": "PS7 applies only where the affected community meets the characteristics in the standard. Screening determines it — it is not automatic." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6 — Before extraction",
        "prompt": "Which must be decided BEFORE extraction begins? Select all that apply.",
        "options": ["Topsoil stripping and separate stockpiling", "The final profile and side slopes", "Benching rather than a single deep face", "The reinstatement planting list", "Drainage preventing standing water after closure", "A closure budget line"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "The planting list can be settled later. Everything else on this list cannot be retrofitted once the pit is deep." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S7 — Hazardous stream",
        "prompt": "Which belong in the hazardous waste stream? Select all that apply.",
        "options": ["Used oil and oil filters", "Contaminated rags and spill absorbents", "Empty bitumen and chemical drums", "Timber offcuts", "Batteries and fluorescent tubes", "Clinic sharps from the camp"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Drums are frequently treated as scrap with local value — some end up holding drinking water. Render them unusable before disposal. Sharps go in a separate medical stream." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S4 — The spill",
        "prompt": "A hydraulic hose bursts and diesel is running towards a drain. Put these in order.",
        "items": ["Stop the source if it is safe to do so", "Contain before it reaches the drain", "Absorb and recover, treating the absorbent as hazardous waste", "Remove contaminated soil to the depth of penetration", "Record it, including the cause"],
        "tip": "Containment is where minutes matter. Everything after it can be done properly at normal pace." },
      { "fmt": "order", "type": "order", "difficulty": "hard", "tag": "S3 — The comparison",
        "prompt": "Put the more-stringent comparison in order.",
        "items": ["Identify the parameters that apply to this project", "Record the national limit with its source", "Record the EHS Guideline level with its table reference", "Take the stricter value for that parameter", "Retain the written comparison"],
        "tip": "The last step is the one projects skip — and it is the one an independent consultant asks for first." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S7 — Which stream?",
        "prompt": "General waste, or hazardous?",
        "categories": [{ "id": "gen", "label": "General / recyclable" }, { "id": "haz", "label": "Hazardous" }],
        "items": [
          { "id": "filter", "text": "Used oil filter", "cat": "haz" },
          { "id": "rubble", "text": "Concrete rubble", "cat": "gen" },
          { "id": "solvent", "text": "Empty solvent container", "cat": "haz" },
          { "id": "food", "text": "Canteen food waste", "cat": "gen" },
          { "id": "absorbent", "text": "Spill absorbent after use", "cat": "haz" },
          { "id": "rebar", "text": "Reinforcement offcuts", "cat": "gen" }
        ],
        "tip": "One hazardous item in a general skip reclassifies the whole load. That is the mechanism behind most waste findings." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S2 — What does it cost?",
        "prompt": "Costs nothing (or near nothing), or costs money?",
        "categories": [{ "id": "free", "label": "Costs nothing" }, { "id": "money", "label": "Costs money" }],
        "items": [
          { "id": "speed", "text": "Reducing haulage speed", "cat": "free" },
          { "id": "cover", "text": "Covering loads", "cat": "free" },
          { "id": "pond", "text": "Building a settlement pond", "cat": "money" },
          { "id": "sample", "text": "Sampling downstream where people draw water", "cat": "free" },
          { "id": "seal", "text": "Sealing a haul road section", "cat": "money" },
          { "id": "oil", "text": "Not using waste oil for dust suppression", "cat": "free" }
        ],
        "tip": "Four of the six cost effectively nothing and are skipped anyway. That is a management attention problem, not a budget problem." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S5 — The pit scene",
        "prompt": "Five features of a working borrow pit. Four are findings — tap the ONE that is correct as shown.",
        "boxes": ["A near-vertical face nine metres deep", "Standing water with no fencing beside a footpath", "Topsoil mixed into spoil and driven over", "An unbunded fuel drum at the pit floor", "A silt fence at the downslope outfall"],
        "correct": 4,
        "hint": "Sediment control at the downslope edge is expected.",
        "tip": "The silt fence is exactly what should be there. The other four are findings — and the open face beside a footpath is the one that is a life safety risk today." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the pit at month fourteen",
        "prompt": "A pit worked for fourteen months: nine metres deep, vertical faces, unfenced, holds water, a footpath along its edge to a settlement 400 m away. Not in the approved assessment, no mineral title. Four months of embankment remain and this pit has the material; the alternative is a licensed quarry 31 km away through two villages.",
        "options": ["Fence and sign the pit today, start the title application, work the remaining extraction to a closable profile, and disclose the position with a corrective plan", "Continue to completion, then apply for the title retrospectively", "Stop extraction immediately and switch to the commercial quarry", "Continue and address it in the next assessment revision"],
        "correct": 0,
        "tip": "The unfenced nine-metre face beside a footpath is the only life-safety risk today and needs no approval to fix. Switching to the quarry is a real option to compare — it imports 31 km of haulage through two villages — but continuing by default, undecided, is what is actually happening." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — just past the junction",
        "prompt": "Your waste contractor is paid per load and collects hazardous waste weekly. Manifests are complete and signed. A driver mentions in passing that the disposal site is 'just past the junction' — 40 km closer than the licensed facility named on the manifests.",
        "options": ["Suspend hazardous collections, verify the disposal facility and its licence, and inspect the route end to end", "Nothing — the manifests are complete and signed", "Ask the contractor to confirm in writing that it uses the licensed facility", "Raise it at the next contract review"],
        "correct": 0,
        "tip": "A complete manifest trail that ends somewhere other than a licensed facility is worse than no trail — it documents that the project believed the waste was handled correctly. And a written assurance verifies nothing." }
    ]
  },
  "b6": {
    "passMark": 0.8,
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S2 — Habitat",
        "prompt": "PS6 classifies habitat as…",
        "options": ["Modified, natural or critical", "Protected or unprotected", "Terrestrial or aquatic", "High, medium or low value"],
        "correct": 0,
        "tip": "Protection status is a separate question with its own additional requirements." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — Critical habitat",
        "prompt": "In critical habitat, the outcome sought is…",
        "options": ["A net gain for the biodiversity values for which it was identified", "No net loss of biodiversity", "Minimised conversion", "Offset funding secured"],
        "correct": 0,
        "tip": "No net loss applies in natural habitat. Critical habitat requires more — and a demanding set of conditions must all be met first." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Seasons",
        "prompt": "A four-day dry season survey most likely fails to detect…",
        "options": ["Migratory species and seasonal wetland function", "Large mammals", "Invasive species", "Farmland boundaries"],
        "correct": 0,
        "tip": "Seasonality is the systematic blind spot, and the most common failure in African ecological baselines." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Scope",
        "prompt": "Biodiversity screening must cover…",
        "options": ["Every footprint, including pits, camps, tracks, laydown and spoil areas", "The alignment and the permanent works", "Only areas of natural habitat", "Only areas over one hectare"],
        "correct": 0,
        "tip": "Ancillary footprints are chosen by the contractor after the assessment was written — which is why unscreened clearance happens there." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Offsets",
        "prompt": "An offset must be…",
        "options": ["Additional, like for like, secured long term and measured", "Proportionate in value to the impact", "Funded through a conservation body", "Agreed with the regulator"],
        "correct": 0,
        "tip": "Value is not the unit. The unit is the biodiversity outcome, measured against the values lost. Funding a thing is not achieving it." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S5 — Invasives",
        "prompt": "The most efficient invasive dispersal pathway a project operates is…",
        "options": ["Plant and vehicles moving between sections carrying mud", "Workers walking between sites", "Wind along the corridor", "Camp food supplies"],
        "correct": 0,
        "tip": "It is also the cheapest to interrupt — wash-down at defined points, especially when plant moves between sections." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — Heritage",
        "prompt": "Which category of cultural heritage cannot be found by any survey?",
        "options": ["Intangible heritage such as procession routes and seasonal practices", "Unregistered archaeological deposits", "Declared monuments", "Historic structures"],
        "correct": 0,
        "tip": "Deposits are found by excavation — which is what the chance find procedure is for. Intangible heritage is found only by asking." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S8 — Chance find",
        "prompt": "On exposing a possible find, the FIRST action is…",
        "options": ["Stop, switch off, and do not drive back through the area", "Photograph it for the record", "Move it carefully to a safe place", "Call the community leader"],
        "correct": 0,
        "tip": "Photography delays securing the area — and in many cases the operator should not be near the find at all." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S3 — Screening",
        "prompt": "Which belong in a pre-clearance screening? Select all that apply.",
        "options": ["Desk screening against recognised biodiversity data sources", "Field survey covering more than one season, or a stated limitation", "Habitat classification against the PS6 categories", "A photographic record of the cleared area", "Structured community consultation on groves, graves, springs and routes", "Screening of every ancillary footprint"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "A photographic record of the cleared area is a record of clearance, not a screening. It establishes what was lost." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S6/S7 — What counts",
        "prompt": "Which are cultural heritage under PS8? Select all that apply.",
        "options": ["A registered colonial-era building", "An unmarked burial ground in annual ceremonial use", "A spring regarded as sacred", "A modern water tank built by an NGO", "A procession route used once a year", "A grove last used for ceremonies thirty years ago"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "'Within living memory' is the test. Someone remembers the grove — and that person may not be at the meeting." },
      { "fmt": "multi", "type": "multi", "difficulty": "hard", "tag": "S8 — Behind the five steps",
        "prompt": "What has to exist behind the five chance find steps? Select all that apply.",
        "options": ["A named person who answers and attends", "A relationship with the antiquities authority established before the first find", "A route to the community, particularly for burials", "A budget for archaeological excavation of every find", "A written record of what, where, when and what was decided", "An accepted programme consequence, so a find genuinely stops work"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Not every find requires excavation. What every find requires is that someone competent attends before work resumes." },
      { "fmt": "order", "type": "order", "difficulty": "easy", "tag": "S8 — The drill",
        "prompt": "Put the chance find steps in order.",
        "items": ["Stop and switch off", "Do not touch, move or collect anything", "Secure a radius and keep everyone out", "Call the number", "Wait until the named person attends and releases the area"],
        "tip": "Step five is the one that matters most. If a find can be overridden by programme pressure once, the procedure will not be followed the second time." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S3 — The sequence",
        "prompt": "Put the screening sequence in order.",
        "items": ["Desk screening against recognised data sources", "Field survey across seasons", "Classify the habitat, and assess for critical habitat if indicated", "Design response: avoid, minimise, restore, offset"],
        "tip": "The desk screening defines what the field survey must look for. Running the survey first produces a species list rather than an answer." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S2 — Classify",
        "prompt": "Modified, natural, or requires a critical habitat assessment?",
        "categories": [{ "id": "mod", "label": "Modified" }, { "id": "nat", "label": "Natural" }, { "id": "crit", "label": "Critical assessment" }],
        "items": [
          { "id": "farm", "text": "Farmland under continuous cultivation", "cat": "mod" },
          { "id": "timber", "text": "Exotic timber plantation", "cat": "mod" },
          { "id": "forest", "text": "Intact riverine forest with native assemblages", "cat": "nat" },
          { "id": "birds", "text": "Wetland holding globally significant numbers of migratory birds", "cat": "crit" },
          { "id": "endemic", "text": "Habitat of a species found nowhere else", "cat": "crit" },
          { "id": "verge", "text": "Disturbed roadside verge", "cat": "mod" }
        ],
        "tip": "You are recognising TRIGGERS, not making determinations. Recognising that an assessment is needed is the skill this item tests." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S6/S7 — How it is found",
        "prompt": "Found by a walkover, or only by asking?",
        "categories": [{ "id": "walk", "label": "Walkover" }, { "id": "ask", "label": "Only by asking" }],
        "items": [
          { "id": "monument", "text": "A registered monument", "cat": "walk" },
          { "id": "tree", "text": "A sacred tree indistinguishable from its neighbours", "cat": "ask" },
          { "id": "structure", "text": "A standing historic structure", "cat": "walk" },
          { "id": "route", "text": "A procession route", "cat": "ask" },
          { "id": "burial", "text": "A burial ground with no markers", "cat": "ask" },
          { "id": "gazetted", "text": "A gazetted archaeological site", "cat": "walk" }
        ],
        "tip": "A screening with no structured consultation has not begun — most of what matters locally sits in the second bucket." },
      { "fmt": "tap", "type": "diagramtap", "difficulty": "medium", "tag": "S3 — The corridor plan",
        "prompt": "Five features on a corridor plan. Four are findings — tap the ONE that is correct as shown.",
        "boxes": ["A borrow pit outside the screened envelope", "A camp and access track outside the screened envelope", "A seasonal depression recorded 'dry' by a dry-season survey", "A stand of trees with no consultation record", "A wash-down point at the section boundary"],
        "correct": 4,
        "hint": "One of these interrupts an invasive pathway.",
        "tip": "The wash-down point is exactly what is expected when machines move between sections. The other four are the classic screening failures." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the grove at 14+200",
        "prompt": "Clearance starts next week on 6 km recorded as farmland and degraded bush, from a four-day February survey. Your liaison officer is told a 0.4 ha stand of trees is where the community buries its dead and holds an annual ceremony. Separately, a drainage team notes a depression that holds water in the wet season, recorded as dry ground. The clearance contractor is on standing time.",
        "options": ["Stop clearance approaching that chainage, consult properly on the grove, assess the depression, and run the hierarchy with realignment as step one", "Clear as planned and deal with both during clearance", "Fence the grove and clear around it", "Proceed and record both in the next assessment revision"],
        "correct": 0,
        "tip": "Screening during clearance is not screening — it is recording. And fencing a burial ground without asking anyone what it is, is its own finding. The two discoveries share a cause: seasonality and community knowledge are systematic blind spots — re-run the screening for the remaining alignment." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — Friday, 16:20",
        "prompt": "An operator exposes what may be a burial at 16:20 on a Friday. He stops and calls his foreman. The named chance find contact does not answer. The section manager, under pressure to finish the formation before the rains, suggests marking the spot, continuing thirty metres further along, and dealing with it on Monday.",
        "options": ["Secure the radius, stop work in that area entirely, escalate to the next named contact, and inform the community liaison officer tonight", "Mark it and continue thirty metres along as suggested", "Have the operator photograph it so the specialist can assess remotely", "Backfill the area to protect the find and resume on Monday"],
        "correct": 0,
        "tip": "Working thirty metres away is still working in the area — it is exactly how context is destroyed, and how a community learns the project kept going. The real failure is upstream: a single contact with no alternate, on a Friday evening." }
    ]
  },
  "c1": {
    "passMark": 0.8,
    "serveMix": { "mcq": 4, "multi": 1, "order": 1, "cat": 1, "scenario": 3 },
    "questions": [
      { "fmt": "mcq", "difficulty": "medium", "tag": "S1 — The clause",
        "prompt": "A general compliance clause fails because…",
        "options": ["It hands a party with no incentive and often no capacity the job of working out what compliance means", "Subcontractors do not read their contracts", "It is legally unenforceable", "It duplicates national law"],
        "correct": 0,
        "tip": "Most subcontractors do read their contracts. The clause tells them nothing specific enough to act on." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Screening",
        "prompt": "Screening before award should establish…",
        "options": ["Whether the third party has any labour management system at all", "That the price is competitive and references check out", "The size of the workforce", "The nationality of the owners"],
        "correct": 0,
        "tip": "A supplier with no written terms for its own workers will not produce them for yours, whatever its references say." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — The audit right",
        "prompt": "A right of audit with no defined consequence is…",
        "options": ["Decorative", "Sufficient, since the right itself creates pressure", "A strong deterrent", "Standard practice and adequate"],
        "correct": 0,
        "tip": "The second time you find something and nothing happens, the subcontractor has learned the real position." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — The instruction",
        "prompt": "'Improve the accommodation this week' fails as an instruction because…",
        "options": ["It has no specific action, no evidence requirement and no consequence", "It is not sufficiently firm in tone", "It was delivered verbally", "It should have gone to the director"],
        "correct": 0,
        "tip": "Tone is not the problem. An instruction can be entirely cordial and completely actionable." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S4 — Cost refusal",
        "prompt": "A subcontractor says a requirement was not in their price. Your first step is…",
        "options": ["Establish whether it was in the subcontract", "Explain why the requirement matters", "Concede a variation", "Escalate as a breach"],
        "correct": 0,
        "tip": "If it was in the subcontract, the price is their problem. If it was not, your flow-down failed — and the honest answer is to say so." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Practice refusal",
        "prompt": "'This is how it works in this region' is…",
        "options": ["An accurate description and not a reason", "A cultural consideration to be respected", "Grounds for a waiver", "Evidence of bad faith"],
        "correct": 0,
        "tip": "Acknowledge the description, then restate the obligation. The contract answers it — not a debate about the sector." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S5 — Leverage",
        "prompt": "Faced with a credible demobilisation threat, you should…",
        "options": ["Neither concede nor escalate in the room — write it up and put the decision to whoever has authority", "Hold firm and insist on immediate compliance", "Concede and note it for the audit", "Match the threat with one of your own"],
        "correct": 0,
        "tip": "Insisting in the room makes it personal and puts you in a position you cannot back out of without losing the requirement." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S6 — Escalation",
        "prompt": "An escalation memo should present…",
        "options": ["Options with their costs and a recommendation", "A clear statement of what the subcontractor must be made to do", "The full history of the issue", "A request for a meeting"],
        "correct": 0,
        "tip": "A director shown a controlled path usually takes it. A director shown only a compliance failure looks for a way around it." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S3 — The five elements",
        "prompt": "Which elements must an instruction contain? Select all that apply.",
        "options": ["The specific thing to be done", "The date", "The clause or appendix it comes from", "An explanation of why the standard exists", "The evidence that will close it", "What happens if it is not done"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "The explanation is sometimes useful and not an element. An instruction that has to justify the requirement invites a negotiation about whether the requirement exists." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S6 — The memo",
        "prompt": "Put an escalation memo in order.",
        "items": ["The situation, in two or three sentences", "The exposure, quantified", "Two or three options with their costs", "The recommendation", "The date a decision is needed"],
        "tip": "One page. Longer than that and the decision moves to whoever summarises it." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S1 — General or specific?",
        "prompt": "General clause, or specific obligation?",
        "categories": [{ "id": "gen", "label": "General clause" }, { "id": "spec", "label": "Specific obligation" }],
        "items": [
          { "id": "law", "text": "Comply with all applicable labour law", "cat": "gen" },
          { "id": "age", "text": "Retain age verification records and make them available within 24 hours", "cat": "spec" },
          { "id": "safe", "text": "Maintain a safe working environment", "cat": "gen" },
          { "id": "docs", "text": "No retention of workers' identity documents in any circumstances", "cat": "spec" },
          { "id": "fair", "text": "Treat workers fairly", "cat": "gen" },
          { "id": "interview", "text": "The project may interview workers without a supervisor present on 24 hours' notice", "cat": "spec" }
        ],
        "tip": "The left column is what most subcontracts say. The right column is what gets done." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the documents",
        "prompt": "Your earthworks subcontractor's labour supplier holds 22 workers' identity documents. The manager says it is standard regional practice, the supplier will withdraw the crew if you interfere, and the section is ahead of programme. Your director has praised the section twice this month.",
        "options": ["Require the documents returned today, provide lockable storage, and write it up for the director with the programme implication attached", "Raise it at the monthly subcontractor meeting", "Report the supplier to the labour inspectorate and await the outcome", "Accept it and include it in the next audit plan"],
        "correct": 0,
        "tip": "The meeting and the audit plan both leave 22 people unable to leave for another month. The corrective action costs almost nothing and removes the harm today." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — no payroll system",
        "prompt": "You instruct a subcontractor to produce payslips. He tells you he has no payroll system capable of it and pays 38 people in cash every Friday. He is not defensive — he appears to be telling the truth.",
        "options": ["Provide a payslip template and a payroll format, set a date two weeks out, and verify by sampling on that date", "Issue a non-conformity notice with a seven day cure period", "Accept cash payment and require a signed receipt book instead", "Escalate to the director as a breach"],
        "correct": 0,
        "tip": "A capability problem treated as resistance produces a dispute rather than payslips. And a receipt book records that money changed hands — not gross pay, deductions or their basis, which is what makes the payslip the control." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the bunks came back",
        "prompt": "A camp inspection finds three-tier bunks in the subcontractor's block. You raise it; it is corrected within a week. Six weeks later the third tier is back, and occupancy is higher than before.",
        "options": ["Instruct again — and this time induct the subcontractor's camp manager formally with a signed record, and act on the contractual consequence for the repeat", "Instruct again, with a firmer deadline", "Escalate immediately to termination", "Accept that occupancy fluctuates and monitor monthly"],
        "correct": 0,
        "tip": "A repeat after correction is not an instruction problem. It is evidence that the person taking the decision was never inducted and that the first instruction carried no consequence." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — no access clause",
        "prompt": "A subcontractor refuses to let you interview his workers without a supervisor present. The right of audit in his subcontract is a general cooperation clause with no specific access provision.",
        "options": ["Note that the flow-down is deficient, secure access by agreement for now, and fix the access provision for this and every future subcontract", "Insist, on the basis of the cooperation clause", "Suspend his payment until access is granted", "Conduct the interviews with supervisors present"],
        "correct": 0,
        "tip": "Insisting rests on a clause that does not say what you need it to say — and losing that argument once makes the next one harder. Interviews with supervisors present are worse than none: they generate a record that looks like verification." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the cheap quarry",
        "prompt": "A quarry supplying most of your aggregate quotes well below every other supplier. A site visit finds no written terms, no age verification, and workers breaking rock by hand without eye protection.",
        "options": ["Treat it as a primary supply chain matter under PS2: raise specific requirements with a date, verify, and prepare an alternative source in case they cannot or will not comply", "Nothing — they are a supplier, not a subcontractor", "Terminate immediately and source elsewhere", "Report them to the minerals authority"],
        "correct": 0,
        "tip": "PS2 extends to the primary supply chain where there is child or forced labour risk or significant safety issues, to the extent the project can exercise influence — and buying most of their output is considerable influence. Terminating first removes that influence at the moment it could do the most good." }
    ]
  },
  "c2": {
    "passMark": 0.8,
    "serveMix": { "mcq": 4, "multi": 1, "order": 1, "cat": 1, "scenario": 3 },
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S1 — Who they work for",
        "prompt": "The IESC assesses against…",
        "options": ["The applicable standards and the project's own commitments", "National law and the permits held", "The construction contract only", "The project's annual report"],
        "correct": 0,
        "tip": "A valid permit answers a different question and closes no lender finding." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S1 — Three sources",
        "prompt": "Which source decides how the other two are read?",
        "options": ["What people say when asked", "The document pack", "The site inspection", "The monthly reports"],
        "correct": 0,
        "tip": "Documents show the system exists. The site shows whether it operates. People's answers colour everything else." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — The empty register",
        "prompt": "An empty near-miss register on a large site indicates…",
        "options": ["A reporting channel that is unknown, unused or unsafe", "Strong safety performance", "A quiet period", "Good supervision"],
        "correct": 0,
        "tip": "The conclusion is a project that cannot see its own operation — worse than a register with entries in it." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — One handwriting",
        "prompt": "Monitoring sheets completed in one hand on one date for a month is…",
        "options": ["A governance finding, treated more seriously than what was being measured", "A record-keeping lapse to be corrected", "Acceptable if the values are plausible", "A training issue"],
        "correct": 0,
        "tip": "It puts every other record in doubt, including the accurate ones." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Registers",
        "prompt": "Registers that disagree with each other should be…",
        "options": ["Reconciled before the visit, with the reconciliation explained", "Left as they are, since each has its own purpose", "Merged into one master register", "Archived and restarted"],
        "correct": 0,
        "tip": "An unexplained discrepancy found by a reviewer is read as concealment or as loss of control. Neither is what happened." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S3 — Back-dating",
        "prompt": "Creating a document that should have existed and dating it accordingly is…",
        "options": ["The single most damaging thing a project can do before a visit", "Acceptable where the underlying activity genuinely occurred", "A judgement call for the E&S lead", "Common practice and low risk"],
        "correct": 0,
        "tip": "It is usually detectable and it converts a technical position into an integrity one." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — The workforce",
        "prompt": "The right instruction to a workforce before a visit is…",
        "options": ["That the visit is happening, who is coming, and to answer honestly", "To keep answers brief and refer questions to management", "To highlight the project's achievements", "To avoid the visitors unless approached"],
        "correct": 0,
        "tip": "Anything more is coaching — it is detectable, and it makes everything the project says unreliable." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — Between visits",
        "prompt": "A finding accepted at one visit and still open at the next is…",
        "options": ["Worse than the original finding, because two visits make a pattern", "Acceptable where the corrective action is complex", "Normal on large projects", "A matter for the next ESAP revision"],
        "correct": 0,
        "tip": "Complexity is a reason for a longer dated plan — not for an open item with no progress." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S4 — Independence",
        "prompt": "Which of these compromise the independence of a review? Select all that apply.",
        "options": ["Staff present at worker interviews", "The project selecting who the reviewer meets", "Interviews held in the project office", "Providing transport and making clear it is available rather than scheduled", "Asking for findings informally before the report"],
        "correct": [0, 1, 2, 4],
        "tip": "Transport made available — rather than scheduled — is fine. The others curate the sample or the setting, and the reviewer treats them as findings." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S3 — The fortnight",
        "prompt": "Put the visit preparation in a sensible order.",
        "items": ["Index the requested pack and check every plan for currency and ownership", "Reconcile the registers against each other and explain any differences", "Walk the site at the hours activity actually happens, and fix what can be fixed", "Brief the workforce that the visit is happening and to answer honestly", "Finalise the gap register and hand it over at the start"],
        "tip": "The gap register comes last because it collects everything the other steps surfaced — and first on the day." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S2 — What it tells them",
        "prompt": "What does this tell the reviewer about your management system?",
        "categories": [{ "id": "works", "label": "The system works" }, { "id": "doubt", "label": "The system is in doubt" }],
        "items": [
          { "id": "disclosed", "text": "A finding you recorded, escalated and were already fixing", "cat": "works" },
          { "id": "found", "text": "The same finding, discovered by them, absent from your records", "cat": "doubt" },
          { "id": "empty", "text": "A register with no entries at all", "cat": "doubt" },
          { "id": "hand", "text": "Monitoring data in one handwriting on one date for a month", "cat": "doubt" },
          { "id": "owned", "text": "Plans current, owned by a named person, visibly used", "cat": "works" }
        ],
        "tip": "Same facts, opposite conclusions. A finding you disclosed proves the system works; the same finding discovered proves it does not." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the shortfall",
        "prompt": "Your gap register has eleven open items, four high severity. One is a compensation shortfall you have quantified but not yet funded, and your director would prefer it not be raised until funding is agreed.",
        "options": ["Disclose all eleven, including the shortfall, and say that funding is not yet agreed", "Disclose ten and hold the shortfall until funding is confirmed", "Disclose the shortfall verbally but not in the register", "Disclose nothing and answer questions as they come"],
        "correct": 0,
        "tip": "Holding it back will be discovered — a quantified shortfall exists in a spreadsheet somebody has. Once found, the ten disclosed items stop being evidence of a working system. Disclosed with no funding agreed, it is an open item. Withheld, it is a credibility finding." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — six workers of her choosing",
        "prompt": "The reviewer asks to interview six workers of her choosing, without supervisors present, in a location she picks. Your HSE manager is uncomfortable and suggests providing a list of six experienced workers and a meeting room in the office.",
        "options": ["Facilitate exactly what she asked for, and say proactively that you will withdraw", "Provide the list and the room as suggested", "Provide the list but allow her to choose others if she wishes", "Ask the lenders to clarify the scope of her access"],
        "correct": 0,
        "tip": "A curated sample is treated as one — and asking the lenders to intervene reads as obstruction. The access she asked for is ordinary practice under Principle 9." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — nine days out",
        "prompt": "Preparing the pack, you find the traffic management plan was last revised before two haul routes changed, and no toolbox record exists for the revised routes. The visit is in nine days.",
        "options": ["Revise the plan now, dated today, deliver the briefings this week, and disclose both the gap and the correction", "Revise the plan and date it to when the routes changed", "Leave it and explain if asked", "Revise the plan and omit the missing briefing records from the pack"],
        "correct": 0,
        "tip": "Back-dating and omission are the two actions that turn a routine finding into an integrity one. The underlying issue is entirely ordinary; the cover-up is not." }
    ]
  },
  "c3": {
    "passMark": 0.8,
    "serveMix": { "mcq": 4, "multi": 1, "order": 1, "cat": 1, "scenario": 3 },
    "questions": [
      { "fmt": "mcq", "difficulty": "easy", "tag": "S1 — First",
        "prompt": "The first action after an incident is…",
        "options": ["Make safe: control the hazard that caused it and the one it created", "Preserve the scene", "Notify the lenders", "Begin taking accounts"],
        "correct": 0,
        "tip": "Preservation matters and it comes after the hazard is controlled. Nobody investigates a live hazard." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S1 — The plant",
        "prompt": "Plant involved in an incident should be…",
        "options": ["Quarantined and examined before repair", "Repaired and returned to service once inspected", "Released if production needs it", "Sold to avoid dispute"],
        "correct": 0,
        "tip": "Repair destroys the evidence of the failure. The pressure to release it is the reason this rule exists." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — Deadlines",
        "prompt": "Notification deadlines run from…",
        "options": ["The time of the incident", "The time the investigation establishes what happened", "The next working day", "The engineer's confirmation"],
        "correct": 0,
        "tip": "This is why a team looking up deadlines in the first hour will miss one. Notify what you know and update." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — The lenders",
        "prompt": "A lender learning of a fatality from the press…",
        "options": ["Changes the relationship permanently, independently of the incident itself", "Is acceptable where the notification threshold was unclear", "Is the engineer's failure, not yours", "Has no contractual consequence"],
        "correct": 0,
        "tip": "Where the threshold is unclear, notify. An unnecessary notification costs nothing; a missed one is not recoverable." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Tolerance",
        "prompt": "'Has this been done this way before?' matters because…",
        "options": ["If yes and nothing happened, the practice was tolerated — and the tolerance is the cause", "It establishes whether the worker was experienced", "It identifies who to discipline", "It shortens the investigation"],
        "correct": 0,
        "tip": "Established, tolerated practice is a condition — and conditions are what corrective actions should change." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S3 — Corrective actions",
        "prompt": "A good investigation produces at least one action that…",
        "options": ["Changes a condition rather than a behaviour", "Assigns clear accountability", "Retrains the crew involved", "Updates the risk register"],
        "correct": 0,
        "tip": "Accountability may follow. An action that only instructs people sits at the bottom of the hierarchy of control." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — Accounts",
        "prompt": "Accounts should be taken…",
        "options": ["Separately, within hours, before people discuss it", "Once the immediate response is complete and everyone has rested", "In a group, so versions can be compared", "By the supervisor of those involved"],
        "correct": 0,
        "tip": "People converge on a shared version within hours — and after that it is nobody's account." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S5 — The report",
        "prompt": "The section most reports omit, and which most establishes credibility, is…",
        "options": ["What we do not know", "The corrective action plan", "The executive summary", "The notification log"],
        "correct": 0,
        "tip": "A reader who finds an unacknowledged gap distrusts the whole document, including the parts that are sound." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S5 — What belongs",
        "prompt": "Which belong in the incident report? Select all that apply.",
        "options": ["A factual sequence with times", "Evidence with its source, separated from inference", "A section on what is not known", "A conclusion on who is liable", "Corrective actions with owner, date and verification method", "Notifications made, to whom and when"],
        "correct": [0, 1, 2, 4, 5],
        "tip": "Liability is someone else's determination — and a phrase about it in your report will be quoted back." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S1 — The first hour",
        "prompt": "Put the first hour in order.",
        "items": ["Make safe", "Care for people", "Preserve the scene", "Notify", "Record times, names and conditions", "Begin investigating"],
        "tip": "The first five are compressed into the hour. Investigation starts after it." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S1 — Do or do not",
        "prompt": "In the first hour: do, or do not?",
        "categories": [{ "id": "do", "label": "Do" }, { "id": "dont", "label": "Do not" }],
        "items": [
          { "id": "rope", "text": "Rope off the scene — nothing moved, cleaned or restarted", "cat": "do" },
          { "id": "release", "text": "Release the plant because someone needs it", "cat": "dont" },
          { "id": "notify", "text": "Notify what you know, and update later", "cat": "do" },
          { "id": "wait", "text": "Wait for certainty before notifying", "cat": "dont" },
          { "id": "write", "text": "Write down times, names and conditions now", "cat": "do" },
          { "id": "home", "text": "Send the people present home to rest before taking accounts", "cat": "dont" }
        ],
        "tip": "Three things destroy an investigation in the first hour: the scene cleared, the plant repaired, and the witnesses gone home." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the haul road",
        "prompt": "A tipper has struck a pedestrian on the haul road. The casualty has been taken to hospital. Traffic is backing up, the community is gathering, and your logistics manager wants the vehicle moved and the road opened.",
        "options": ["Keep the scene closed, photograph and measure, notify internally and externally, and arrange a diversion", "Move the vehicle and open the road, then photograph from memory of the positions", "Move the vehicle only, marking its position first", "Open the road on police instruction and take accounts later"],
        "correct": 0,
        "tip": "The vehicle's position is the single most important physical fact, and marking it does not preserve the surface evidence around it. A diversion is recoverable; the scene is not. A police instruction is followed — and it does not remove your duty to record what you can first." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the fall",
        "prompt": "A worker fell from a bridge deck. He was not clipped on. The nearest anchor point was 30 m away. The method statement assumed edge protection that was never installed because the section was behind programme. Three other workers say everybody works that way there.",
        "options": ["Root cause: edge protection omitted under programme pressure, creating a working method in which clipping on was impractical and tolerated — install edge protection, review the method statement against actual practice, and examine why the omission was never raised", "Root cause: failure to use fall protection — retraining and disciplinary process", "Root cause: inadequate supervision — add a supervisor", "Root cause: anchor point spacing — install more anchor points"],
        "correct": 0,
        "tip": "'He was not clipped on' is the last human action, and stopping there guarantees recurrence, because the condition that made it sensible is untouched." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the brake",
        "prompt": "Your draft report states that the brake was defective. The plant is quarantined but not yet tested; the assessment is based on the driver's account and the maintenance backlog.",
        "options": ["State what is established, state that the brake has not yet been tested, and record it in the 'what we do not know' section with a date for the test", "State that the brake was defective, as the evidence points that way", "Omit the brake question until the test is complete", "State that the brake was probably defective"],
        "correct": 0,
        "tip": "An untested inference stated as a finding poisons the report: if the test later shows the brake was serviceable, every other conclusion becomes questionable. And an unacknowledged gap is worse than a stated one." }
    ]
  },
  "c4": {
    "passMark": 0.8,
    "serveMix": { "mcq": 4, "multi": 1, "order": 1, "cat": 1, "scenario": 3 },
    "questions": [
      { "fmt": "mcq", "difficulty": "hard", "tag": "S1 — The register",
        "prompt": "An almost empty grievance register on a large corridor project means…",
        "options": ["The channel is unknown, distrusted or unsafe", "Community relations are strong", "The community has no complaints", "The liaison team is effective"],
        "correct": 0,
        "tip": "A project that cannot see its own operation is the conclusion — and a reviewer will read it that way whatever the covering note says." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — The reference",
        "prompt": "A reference number issued at intake matters because…",
        "options": ["Without it the complainant has no way to follow the case up", "It supports internal tracking", "It is required by the regulator", "It anonymises the case"],
        "correct": 0,
        "tip": "Internal tracking works without giving the complainant anything. The reference is for them." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — Independence",
        "prompt": "Investigation of a compensation complaint should be carried out by…",
        "options": ["Someone independent of the team that set the compensation", "The land team, who hold the records and know the case", "The community liaison officer", "The complainant's representative"],
        "correct": 0,
        "tip": "Competence is not the issue. Perceived independence is — and perception is the whole mechanism." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Anonymous",
        "prompt": "An anonymous complaint should be…",
        "options": ["Accepted, with honest limits explained, and investigated to the extent it can be independently", "Rejected, since it cannot be substantiated or fed back", "Logged and closed", "Referred to the police"],
        "correct": 0,
        "tip": "A mechanism that only takes named complaints excludes the people most at risk." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S3 — Retaliation",
        "prompt": "Retaliation after a complaint typically appears…",
        "options": ["Two to eight weeks later, as a non-renewal, reassignment or reduction in work", "Immediately, as an open confrontation", "Only where the complaint was upheld", "Rarely, and only in extreme cases"],
        "correct": 0,
        "tip": "Which is why nobody connects it unless someone follows up deliberately." },
      { "fmt": "mcq", "difficulty": "easy", "tag": "S3 — Mediation",
        "prompt": "Mediation between a complainant and the person complained about is…",
        "options": ["Never appropriate where there is a power imbalance, and never in a SEA/H matter", "A useful first step where both are willing", "Standard practice for community disputes", "Acceptable if the leadership facilitates"],
        "correct": 0,
        "tip": "Willingness across a power imbalance is not a reliable signal — and in a SEA/H matter it re-exposes the survivor." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S4 — The pattern",
        "prompt": "A complaint reveals that depreciation was applied across the whole compensation register. This is…",
        "options": ["A finding, not a grievance", "A grievance to be resolved and then replicated for others who raise it", "A matter for the valuation office", "Outside the mechanism's scope"],
        "correct": 0,
        "tip": "Treating it case by case is how a project pays a hundred claims one at a time instead of correcting once." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — Outside",
        "prompt": "A complainant goes to an accountability mechanism. This tells you…",
        "options": ["Your mechanism failed, whatever the merits of the complaint turn out to be", "The complainant is acting in bad faith", "The complaint is serious", "The case should be closed as escalated"],
        "correct": 0,
        "tip": "People go outside when going inside did not work — or when they believed it would not." },
      { "fmt": "multi", "type": "multi", "difficulty": "medium", "tag": "S4 — Three questions",
        "prompt": "A compensation complaint may be contesting which of these? Select all that apply.",
        "options": ["Whether they are eligible at all", "Whether everything was counted", "How it was valued", "What the neighbour received", "Whether the project should exist"],
        "correct": [0, 1, 2],
        "tip": "The neighbour is the comparison the complainant will make — and usually not a like comparison. Investigate against the entitlement framework, not against the next payment along." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S2 — Five steps",
        "prompt": "Put the five grievance steps in order.",
        "items": ["Record on receipt and give a reference", "Acknowledge within the published period", "Investigate", "Decide and remedy", "Tell the complainant the outcome and the reason"],
        "tip": "The last step is the one most projects skip — and the one that decides whether anybody uses the mechanism again." },
      { "fmt": "cat", "type": "categorize", "difficulty": "hard", "tag": "S6 — Inside or outside?",
        "prompt": "Handled inside the mechanism, or escalated beyond it?",
        "categories": [{ "id": "in", "label": "Inside the mechanism" }, { "id": "out", "label": "Escalate beyond it" }],
        "items": [
          { "id": "criminal", "text": "An allegation of criminal conduct", "cat": "out" },
          { "id": "senior", "text": "A complaint about someone so senior no internal investigator is independent", "cat": "out" },
          { "id": "trees", "text": "A dispute about the number of trees counted", "cat": "in" },
          { "id": "police", "text": "A complaint about the conduct of public security forces", "cat": "out" },
          { "id": "dust", "text": "A household dust complaint", "cat": "in" },
          { "id": "systemic", "text": "A pattern revealing depreciation across the whole register", "cat": "out" }
        ],
        "tip": "The systemic pattern goes to the ESAP and the report to the lenders — it has stopped being a case." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the workshop owner",
        "prompt": "A workshop owner complains he should have been compensated. His land was not acquired; the new embankment and barrier have blocked his frontage and his trade has collapsed. He is not on the land schedule, and the register is correct.",
        "options": ["Explain that the land question is correctly answered no, and open a separate assessment of loss of access and trade as economic displacement, with a date to come back to him", "Explain that no land was acquired and close the case", "Refer him to the courts", "Offer a goodwill payment to close the matter"],
        "correct": 0,
        "tip": "Closing the case answers the question he asked and misses the one he did not know to ask — loss of access and income is economic displacement under PS5. And a goodwill payment converts an entitlement into a favour, outside the entitlement framework." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the anonymous note",
        "prompt": "An anonymous note alleges that a foreman is taking money from workers in exchange for shifts. No names, no dates. Your HR manager says nothing can be done without a complainant.",
        "options": ["Investigate what can be checked independently: shift allocation records, patterns in who works, and confidential interviews across the gang, without identifying the source", "Record it and close it as unsubstantiated", "Ask the foreman directly", "Ask the gang who wrote it"],
        "correct": 0,
        "tip": "A great deal can be checked without a complainant — allocation patterns are records, and records do not need a name. Confronting the foreman or hunting the author creates a retaliation risk against someone you cannot identify and therefore cannot protect." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — 38 closed files",
        "prompt": "Your register shows 46 grievances received, 41 closed, average closure 9 days. Reviewing the files, you find that 38 of the 41 have no record of what the complainant was told.",
        "options": ["Report that 38 cases were closed without recorded feedback, treat it as a mechanism failure, and go back to those complainants", "Report the closure rate and the average time, which are good", "Add a feedback field to the form for future cases", "Record feedback retrospectively from the case officers' recollection"],
        "correct": 0,
        "tip": "Both headline figures measure the project's activity — neither measures the complainant's experience. From 38 people's side, nothing happened. And reconstructing a record of a conversation that may not have occurred is the same act as back-dating a document." }
    ]
  },
  "c5": {
    "passMark": 0.8,
    "serveMix": { "mcq": 4, "multi": 1, "order": 1, "cat": 1, "scenario": 3 },
    "questions": [
      { "fmt": "mcq", "difficulty": "medium", "tag": "S1 — Attribution",
        "prompt": "An unsigned, undated register entry…",
        "options": ["Has no author and therefore no weight", "Is valid if the content is accurate", "Can be attributed later", "Counts as contemporaneous"],
        "correct": 0,
        "tip": "Accuracy cannot be established without attribution — and the reader cannot ask the author anything." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S1 — No bad entries",
        "prompt": "A grievance register with no unresolved or unfavourable entries suggests…",
        "options": ["Entries are being filtered, and the reviewer will assume the worst available explanation", "Effective grievance management", "A satisfied community", "Nothing in particular"],
        "correct": 0,
        "tip": "Every real project has unfavourable entries. Their absence is information about the register, not about the project." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S2 — The cost",
        "prompt": "The cost of one reconstructed register is…",
        "options": ["That the whole document set becomes assertion rather than evidence", "A finding on the period concerned", "A minor deduction at the next audit", "Nothing, if the activity genuinely happened"],
        "correct": 0,
        "tip": "The finding on the period is minor. The conclusion about reliability reaches everything you hold." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S2 — The fix",
        "prompt": "Which change most reduces retrospective completion?",
        "options": ["Shorten the form and put the register where the work happens", "Increase supervision of record keeping", "Discipline the supervisor responsible", "Digitise the forms"],
        "correct": 0,
        "tip": "A forty-field form two kilometres away will always be filled in on Friday, whoever is supervising." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S3 — Consistency",
        "prompt": "Registers that disagree should be…",
        "options": ["Reconciled and the reconciliation explained, before anyone else compares them", "Left alone, since each serves a different purpose", "Aligned to the monthly report", "Restarted from a clean sheet"],
        "correct": 0,
        "tip": "Different purposes do not produce different dates for the same event." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S4 — SEA/H files",
        "prompt": "A SEA/H case file requires…",
        "options": ["Restricted access by name, no narrative in any report, and no copy elsewhere", "The same controls as the grievance register", "Password protection on the shared drive", "Monthly circulation to management"],
        "correct": 0,
        "tip": "It is the most sensitive document a project holds, and the controls are stricter than for any other register." },
      { "fmt": "mcq", "difficulty": "medium", "tag": "S5 — The stranger",
        "prompt": "An entry that only makes sense to someone who was there…",
        "options": ["Will be misread, and misread against you", "Is acceptable within the project team", "Saves time and is good practice", "Can be explained at the visit"],
        "correct": 0,
        "tip": "The reader fills the gap with the explanation that fits their concern — which is rarely the benign one." },
      { "fmt": "mcq", "difficulty": "hard", "tag": "S6 — The purpose",
        "prompt": "The primary purpose of a good record is…",
        "options": ["To let the project see its own operation", "To satisfy the reporting requirement", "To protect the project in a dispute", "To feed the monthly report"],
        "correct": 0,
        "tip": "A project that cannot see its own operation is managing something else. The reporting requirement is a by-product." },
      { "fmt": "multi", "type": "multi", "difficulty": "easy", "tag": "S1 — Four properties",
        "prompt": "Which properties make a record hold? Select all that apply.",
        "options": ["Contemporaneous", "Attributable", "Complete, including the entries that reflect badly", "Approved by management", "Consistent with the other places the event appears"],
        "correct": [0, 1, 2, 4],
        "tip": "Approval is not one of the four. Miss any of the others and the record still exists — it just stops being evidence." },
      { "fmt": "order", "type": "order", "difficulty": "medium", "tag": "S3 — The discrepancy",
        "prompt": "Before a visit you find your incident register and the site diary disagree about an event. Put the response in order.",
        "items": ["Establish what actually happened", "Correct every register that holds the event", "Attach a dated reconciliation note explaining the divergence", "Explain the reconciliation proactively at the visit"],
        "tip": "Correcting without explaining creates a new problem: a register amended with no record of why, which is worse than the original inconsistency." },
      { "fmt": "cat", "type": "categorize", "difficulty": "medium", "tag": "S4 — Personal data",
        "prompt": "Handled lawfully, or a breach?",
        "categories": [{ "id": "ok", "label": "Lawful" }, { "id": "breach", "label": "A breach" }],
        "items": [
          { "id": "email", "text": "The full compensation register circulated by unsecured email", "cat": "breach" },
          { "id": "numbers", "text": "Numbers and categories in the monthly grievance summary", "cat": "ok" },
          { "id": "narrative", "text": "A SEA/H case narrative with location and role in a monthly report", "cat": "breach" },
          { "id": "restricted", "text": "The register held on an access-controlled drive with named access", "cat": "ok" },
          { "id": "shared", "text": "A SEA/H case file on the project shared drive", "cat": "breach" }
        ],
        "tip": "A location, a role and a gender identify one person in a small community. Report numbers and categories, never narratives." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — four weeks in one hand",
        "prompt": "Preparing for a visit you find four weeks of dust monitoring sheets completed in one sitting, in one hand, with almost identical values. The monitoring was probably done; the technician says he recorded it in a notebook and transferred it later — and the notebook no longer exists.",
        "options": ["Disclose that these four weeks were transcribed retrospectively and the source is lost, resume proper contemporaneous recording, and re-monitor going forward", "Submit the sheets as they are", "Have the technician redo the sheets with more varied handwriting", "Omit the four weeks from the pack"],
        "correct": 0,
        "tip": "Redoing the sheets is falsification — the single worst option available, and the one most often suggested in the room. And an unexplained four-week gap in a series is more conspicuous than the sheets." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — three versions of one event",
        "prompt": "Your incident register records a plant collision on the 14th, rated minor. The site diary records it on the 13th and describes a worker taken to hospital. The monthly report does not mention it. All three were compiled by different people.",
        "options": ["Establish what actually happened, correct all three with a dated reconciliation note, and treat the absence from the monthly report as a reporting failure to investigate", "Correct the register to match the diary and move on", "Leave it, since each document has a different purpose", "Remove the diary entry, which is the informal record"],
        "correct": 0,
        "tip": "Destroying the record that disagrees is the most serious response available — and the diary is usually the most reliable of the three, because it is the most contemporaneous." },
      { "fmt": "scenario", "difficulty": "hard", "tag": "Scenario — the grievance summary",
        "prompt": "Your monthly report to the lenders includes a grievance summary. A colleague has drafted an entry reading: 'complaint from a female trader at Km 14 regarding conduct of a security guard at the north gate, under investigation.'",
        "options": ["Replace with a category and a number, and hold the detail in the restricted case file", "Publish as drafted, since no name is given", "Remove the entry entirely", "Publish with the location removed but the role retained"],
        "correct": 0,
        "tip": "A location, a role and a gender identify one person in a small community — this entry has four details. And omitting it entirely understates the grievance position; report the number and the category." }
    ]
  }
};
