// ============================================================================
// OUR SUSTAINABILITY PATHWAY — the simplified pathway shown to every learner.
//
// Content is PASTED AS IS from the module packs (S1–S5 core, C/H&S/E/S role
// modules, v1.0). Screen lengths are deliberate — text is the only channel
// (no narration) — so do not shorten or rewrite bodies here.
//
// Structure per module:
//   screens[]  heading, body[] (one string per paragraph), takeaway,
//              jargon[] ({term, plain}), visual (the illustration brief,
//              stored for the art pass — not rendered yet),
//              trades[] on the closing "Where you come in" screen:
//              TWELVE lines, same trades, same order, in every module.
//   quiz[]     four questions, two formats only:
//              single  {stem, options[4], correct, feedback{i: text}, general}
//              tf      {stem, answer, reasons[3], correctReason, feedback}
//              No pass mark, no gate, no score recorded — completion records
//              that the learner answered, and feedback teaches.
// ============================================================================

// The twelve trades of the "Where you come in" screen. FIXED: same twelve,
// same order, in all nine modules. Do not reorder, do not remove.
export const TRADES = [
  { key: "pm", label: "Project managers", icon: "engineering" },
  { key: "foreman", label: "Foremen", icon: "construction" },
  { key: "plant", label: "Plant managers", icon: "local_shipping" },
  { key: "workshop", label: "Mechanical workshop", icon: "build" },
  { key: "batching", label: "Batching plants", icon: "factory" },
  { key: "hse", label: "HSE", icon: "health_and_safety" },
  { key: "occhealth", label: "Occupational health", icon: "medical_services" },
  { key: "hr", label: "Human Resources & site administration", icon: "badge" },
  { key: "procurement", label: "Procurement", icon: "receipt_long" },
  { key: "security", label: "Security", icon: "security" },
  { key: "community", label: "Community relations & liaison", icon: "groups" },
  { key: "subcontractor", label: "Subcontractors", icon: "handshake" },
];

export const OSP_MODULES = [
  // ──────────────────────────────────────────────────────────── WELCOME ──
  {
    id: "w",
    code: "W",
    block: "welcome",
    order: 0,
    title: "Welcome",
    subtitle: "Three screens, three minutes",
    minutes: 3,
    icon: "waving_hand",
    screens: [
      {
        heading: "Our Sustainability Pathway",
        body: [
          "Together shaping a responsible future. Embrace the journey.",
          "This is the training behind the conference. It exists so that everyone on this project — whatever your trade — knows what our lenders require, why it reaches your work, and where you come in.",
          "It takes about an hour and a quarter, in short modules you can pause any time.",
        ],
        takeaway: "Nothing here is scored. This pathway is about understanding, not testing.",
      },
      {
        heading: "How the pathway works",
        body: [
          "Five core modules first, for everyone: what this is about, who lends to us, the documents, how we are checked, and a day on this project. About fifty minutes.",
          "Then your role modules — one or two, assigned to your job: Community, Health and Safety, Environment, or Security and conduct.",
          "Each module ends with four light questions. No pass mark, no blocking, unlimited retries. The feedback is the teaching.",
        ],
        takeaway: "Every module ends with a screen called Where you come in. Find your line — it is written for your trade.",
      },
      {
        heading: "Before you start",
        body: [
          "Every new term is explained on the screen where it appears — look for the jargon buster.",
          "The glossary and the memo sheets stay available from the menu at any time, during and after the pathway.",
          "If anything in the Security and conduct module affects you personally, a support link on every screen of that module gives you the person you can speak to.",
        ],
        takeaway: "That's it. Start with core module S1 — it takes eight minutes.",
      },
    ],
    quiz: [],
    closing: "Next: what this is about, and who it affects.",
  },

  // ──────────────────────────────────────────────────────────────── S1 ──
  {
    id: "s1",
    code: "S1",
    block: "core",
    order: 1,
    title: "What this is about, and who it affects",
    subtitle: "Six screens and four questions, about eight minutes",
    minutes: 8,
    icon: "public",
    screens: [
      {
        heading: "Two letters you will hear all week",
        body: [
          "E and S. Environmental and Social.",
          "Environmental is what our work does to the place: the air, the water, the ground, the trees, the animals.",
          "Social is what our work does to people: the ones we employ, and the ones who live where we build.",
          "Neither is about paperwork. Both are about consequences that somebody lives with after we leave.",
        ],
        takeaway: "On these projects, the social side stops more work than the environmental side. That surprises most people.",
        visual: "A corridor divided into the place and the people, with one road running through both.",
      },
      {
        heading: "What we do to the place",
        body: [
          "Dust from a haul road settling on a house and on food drying outside.",
          "Mud washing off a stripped slope into a stream people drink from.",
          "Diesel soaking into the ground at a fuel point.",
          "A borrow pit left open and full of water when we finish.",
          "Trees cleared before anyone checked what was growing there.",
        ],
        takeaway: "Almost all of it is preventable, and almost all of it is cheap to prevent. It becomes expensive only after it happens.",
        visual: "Five pictograms showing dust, run-off, a fuel spill, a flooded borrow pit and cleared vegetation.",
      },
      {
        heading: "What we do to people",
        body: [
          "A worker with no written terms, paid in cash, who cannot say what he is owed.",
          "A camp with one working shower for forty men.",
          "A farmer whose field is now a haul road, still waiting to be paid.",
          "A child walking to school along a shoulder our trucks use.",
          "A woman who will not report something because she does not know who to tell.",
        ],
        takeaway: "This is the side that blocks roads, stops sections and reaches the lenders fastest. It is also the side most of us were never trained on.",
        visual: "Five pictograms showing an unsigned contract, a camp shower block, a field crossed by a haul road, a school beside a road, and an unclear reporting route.",
      },
      {
        heading: "And the third letter",
        body: [
          "You will also hear ESG. The G is Governance: whether our systems and our records are honest.",
          "A register filled in on Friday for the whole week. An inspection recorded that nobody carried out. A payment made to move a permit along.",
          "None of those harms the ground or a person directly. All of them destroy the value of everything else we record.",
        ],
        takeaway: "A false record is treated more seriously than the problem it was hiding. Once one record is doubted, they all are.",
        jargon: [
          { term: "ESG", plain: "Environmental, Social and Governance. The wider term, used when talking about a company." },
          { term: "E&S", plain: "Environmental and Social. What is assessed on a project like ours. Governance is inside it, as the way we run the system and keep the records." },
        ],
        visual: "A register page with identical entries in one handwriting, cracked across. Caption: one doubtful entry, every entry doubted.",
      },
      {
        heading: "Who is affected",
        body: [
          "Our own workers, and the workers of every subcontractor and labour supplier on site.",
          "Households and farmers whose land, crops or access we take or cut.",
          "Traders working along the road, including those with no papers for their spot.",
          "Fishermen and herders whose water and routes we cross.",
          "Everyone who walks, rides or drives on the roads our trucks use.",
        ],
        takeaway: "Having no papers does not mean having no rights. Someone trading on the road reserve for fifteen years is affected, and the lenders treat them as affected.",
        visual: "A corridor from above with five affected zones marked: the site, the land taken, the roadside, the water and routes crossed, and the public road.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers, roads and bridges, decide what gets resourced and carry what is accepted.",
          "Foremen turn a plan into an instruction, and a shift into a record.",
          "Plant managers hold the trucks, the cranes and the mechanics: speed, hours, condition and who is driving.",
          "The mechanical workshop holds fuel, oil, waste, and the brakes and tyres that keep a truck on the road.",
          "Batching plants hold cement, admixtures, wash water and dust, in the largest quantities on this project.",
          "HSE, from the manager to the coordinators, officers and flagmen, holds the controls and the evidence.",
          "Occupational health and the clinic hold worker health, medical records and clinical waste.",
          "Human Resources, and site administration representing it on the yard, hold contracts, ages, pay and the camp.",
          "Procurement holds the suppliers and the hauliers, and what their contracts require of them.",
          "Security, the chief security officer and the guard force, hold conduct towards people and property.",
          "The community relations manager and the liaison officers hold the relationship and the complaints.",
          "Subcontractors, including dredging, clearing and iron bending, are held to the same rules and their people are our responsibility.",
        ],
        takeaway: "Find your line. Every module in this pathway ends with one.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "Which side of this work stops more sections on our projects?",
        options: ["Environmental.", "Social.", "They are equal.", "Neither, only technical problems stop work."],
        correct: 1,
        feedback: {
          0: "Understandable, because environmental problems are the visible ones. But land, workers and communities are what block roads and reach the lenders fastest.",
          3: "Technical problems stop work too. The difference is that a community can stop a section without anything on the site being wrong.",
        },
      },
      {
        format: "tf",
        stem: "A trader on the road reserve with no papers for the spot is not affected by our project.",
        answer: false,
        reasons: [
          "Having no papers does not mean having no rights, and the lenders treat her as affected.",
          "She is affected only if she has traded there more than ten years.",
          "She is affected only if a structure is demolished.",
        ],
        correctReason: 0,
        feedback: "This is the single most common mistake on projects like ours. People without papers are often the majority of those affected.",
      },
      {
        format: "single",
        stem: "A supervisor fills in a week of inspection records on Friday, from memory. The work was actually done. What is the problem?",
        options: [
          "There is none, since the work was done.",
          "The record is false, and once one record is doubted they all are.",
          "He should have used a different form.",
          "It only matters if an inspector asks.",
        ],
        correct: 1,
        feedback: {
          0: "The work being done is exactly what makes this painful. The record still says something that did not happen the way it says, and that is what a checker sees.",
          3: "Someone will ask. And a record written afterwards is usually recognisable: one handwriting, one pen, no variation.",
        },
      },
      {
        format: "single",
        stem: "A labour supplier brings twenty men onto your section. Whose responsibility are they?",
        options: ["The supplier's alone.", "The subcontractor who hired the supplier.", "Ours, as well as theirs.", "Nobody's until they are inducted."],
        correct: 2,
        feedback: {
          0: "Both are true and neither removes our part. On a financed project, anyone working on our site is our responsibility, whoever signed their contract.",
          1: "Both are true and neither removes our part. On a financed project, anyone working on our site is our responsibility, whoever signed their contract.",
        },
      },
    ],
    closing: "Next: who lends to us, and what they require.",
  },

  // ──────────────────────────────────────────────────────────────── S2 ──
  {
    id: "s2",
    code: "S2",
    block: "core",
    order: 2,
    title: "Who lends to us, and what they require",
    subtitle: "Seven screens and four questions, about ten minutes",
    minutes: 10,
    icon: "account_balance",
    screens: [
      {
        heading: "Money with conditions attached",
        body: [
          "Our corridors are not funded out of company cash. They are financed by international lenders.",
          "That financing is not a simple loan. It carries conditions about how we build, written into the agreement.",
          "Land settled and permits in hand before a section opens. Evidence produced continuously. Commitments on communities, workers, security and heritage treated as conditions, not intentions.",
          "If the conditions are not met, the money does not move.",
        ],
        takeaway: "The conditions are attached to the money itself. That is why a lender takes an interest in your camp.",
        visual: "A financing agreement with three conditions pinned to a site image: land settled, permits held, evidence produced.",
      },
      {
        heading: "Who is actually lending",
        body: [
          "Not one bank. A group, and the word for it is a syndicate.",
          "It includes development finance institutions, which are public bodies lending for development.",
          "It includes commercial banks, and it can include export credit agencies, which are state bodies supporting exports.",
          "They act together, under one set of rules, and one of them speaks for the group.",
        ],
        takeaway: "They lend for twenty years or more. That is why they care what this corridor looks like long after we leave.",
        jargon: [
          { term: "Syndicate", plain: "A group of lenders financing one project together, under one agreement." },
          { term: "Development finance institution", plain: "A public institution that lends for development purposes rather than for profit alone." },
        ],
        visual: "Three types of lender feeding into a single lending group that finances the project.",
      },
      {
        heading: "Eight standards, and what they cover",
        body: [
          "The rules the lenders apply are the IFC Performance Standards. IFC is the International Finance Corporation, part of the World Bank Group.",
          "There are eight, numbered 1 to 8. You will hear them called PS1 to PS8.",
          "PS1 is how risks are assessed and managed. PS2 is workers. PS3 is pollution and resources. PS4 is community health, safety and security.",
          "PS5 is land and resettlement. PS6 is biodiversity. PS7 is Indigenous Peoples, which does not apply here. PS8 is cultural heritage.",
        ],
        takeaway: "You do not need to memorise the numbers. You need to know that every one of them has an owner on this project, and that one of them is probably you.",
        jargon: [
          { term: "IFC Performance Standards (PS1 to PS8)", plain: "The eight international rules our lenders apply to how a project is built." },
          { term: "International Finance Corporation (IFC)", plain: "The private sector arm of the World Bank Group, which wrote those standards." },
        ],
        visual: "Eight numbered Performance Standard tiles with the seventh greyed out as not applicable.",
      },
      {
        heading: "How the standards reach a bank",
        body: [
          "A commercial bank is not obliged by the IFC to do anything. So how do the standards reach it?",
          "Through the Equator Principles, a framework banks adopt voluntarily. You will hear EP4, the fourth version.",
          "A bank that has adopted them agrees not to finance a large project unless environmental and social risk is managed to a defined standard.",
          "For a project in Nigeria, that standard is national law plus the IFC Performance Standards.",
        ],
        takeaway: "Voluntary for the bank. Contractual for us. Once it is in the financing agreement, it binds this project.",
        jargon: [
          { term: "Equator Principles (EP4)", plain: "The framework through which banks apply the IFC standards to the projects they finance." },
        ],
        visual: "A chain from the Equator Principles through the financing agreement to the site.",
      },
      {
        heading: "And Nigerian law",
        body: [
          "Nigerian law applies in full and is never set aside. The environmental assessment statute, the labour law, the land law, the mining law for borrow pits.",
          "It sets the legal minimum, and breaking it carries fines, stop-work notices and prosecution.",
          "But it does not cover everything the lenders require. There is no Nigerian requirement to prepare a resettlement plan, for example.",
          "So a valid permit answers the legal question and leaves the lender question open.",
        ],
        takeaway: "Our permits are necessary and they are not sufficient. Both sentences are true at the same time.",
        visual: "Two overlapping circles showing national law and lender requirements, with areas covered by only one of them.",
      },
      {
        heading: "When the two differ, the stricter one wins",
        body: [
          "Where national law and the lender standard say different things about the same requirement, we follow the stricter one.",
          "Take night noise near houses. If the national limit is one figure day and night, and the lender standard sets a lower limit at night, we work to the night limit.",
          "Stricter means better for the person or the place affected. Not cheaper for us, and not easier.",
          "And we write down the comparison, because the comparison is what we will be asked for.",
        ],
        takeaway: "This one rule answers most of the questions you will have about which requirement applies.",
        visual: "Two limit values side by side with the stricter one marked as applied, beside a note to record the comparison.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers answer for the conditions attached to their section, roads and bridges alike.",
          "Foremen apply the stricter requirement at the workface, usually without being told which rule it came from.",
          "Plant managers hold the standards on speed, driver hours, cranes and vehicle condition.",
          "The mechanical workshop holds the standards on fuel, oil, waste and hazardous materials.",
          "Batching plants hold the standards on effluent, chemicals, dust and water use.",
          "HSE holds the comparison between national limits and lender limits, and the records that prove it.",
          "Occupational health holds the standards on worker health surveillance and clinical waste.",
          "Human Resources, and site administration on the yard, hold the labour requirements: contracts, ages, pay, the camp.",
          "Procurement passes every one of these requirements into supplier and haulier contracts, or they do not apply.",
          "Security holds the requirements on conduct, use of force and human rights.",
          "Community relations and liaison officers hold what the standards require on engagement, complaints and land.",
          "Subcontractors, dredging, clearing, iron bending and others, are bound by the same standards through their contract with us.",
        ],
        takeaway: "Find your line. You do not need the numbers. You need to know which requirements land on your desk.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "Why does a lender take an interest in our worker camp?",
        options: ["Curiosity.", "Because conditions on how we build are attached to the money itself.", "Because the camp is expensive.", "It does not, only the regulator does."],
        correct: 1,
        feedback: {
          3: "The regulator does too. The difference is that the regulator can fine us and the lender can stop paying us.",
        },
      },
      {
        format: "tf",
        stem: "We hold a valid environmental permit, so the environmental question is settled.",
        answer: false,
        reasons: [
          "The permit answers Nigerian law and the lenders require more.",
          "Permits expire.",
          "Permits do not cover construction.",
        ],
        correctReason: 0,
        feedback: "Both statements are true at once: we are lawful, and there is more to meet. That is normal on a financed project.",
      },
      {
        format: "single",
        stem: "The national noise limit is one figure. The lender standard sets a lower limit at night. Which applies to night work?",
        options: ["The national limit.", "The lower night limit.", "Whichever the site prefers.", "Neither, if the permit is silent."],
        correct: 1,
        feedback: {
          0: "The permit is not wrong. It simply answers a different question from the one the lender is asking.",
        },
      },
      {
        format: "single",
        stem: "How many IFC Performance Standards are there?",
        options: ["Four.", "Six.", "Eight.", "Ten."],
        correct: 2,
        general: "Eight, and seven of them apply here. PS7 on Indigenous Peoples does not apply to these corridors.",
      },
    ],
    closing: "Next: the documents that govern this project.",
  },

  // ──────────────────────────────────────────────────────────────── S3 ──
  {
    id: "s3",
    code: "S3",
    block: "core",
    order: 3,
    title: "The documents that govern this project",
    subtitle: "Seven screens and four questions, about ten minutes",
    minutes: 10,
    icon: "description",
    screens: [
      {
        heading: "Four documents, and one of them is yours",
        body: [
          "People throw four sets of initials around on this project. They are not the same thing and they do not do the same job.",
          "The ESIA is the study. The ESDD is the lenders' check. The ESMP is our plan. The ESAP is our list of corrections.",
          "One describes, one verifies, one instructs, one corrects.",
          "The one that touches your daily work is almost always the ESMP, and the plans and procedures that sit under it.",
        ],
        takeaway: "If you only remember one: the ESMP is the one that tells your site what to do.",
        visual: "Four documents labelled describes, verifies, instructs and corrects.",
      },
      {
        heading: "The study",
        body: [
          "The Environmental and Social Impact Assessment, or ESIA, is the study done before we build.",
          "It describes what is there: the people, the land, the water, the habitats, the heritage. Then it predicts what our works will do to all of it.",
          "Then it says what we will do about each impact. Those measures become our obligations.",
          "It is submitted to the Nigerian authorities for approval, and it is read by the lenders.",
        ],
        takeaway: "If an activity is not in the ESIA, it has not been assessed. A new borrow pit is a new activity.",
        jargon: [
          { term: "Environmental and Social Impact Assessment (ESIA)", plain: "The study of what our works will do, and what we will do about it." },
        ],
        visual: "An impact study with three layers: baseline, predicted impacts, and mitigation measures.",
      },
      {
        heading: "The lenders' check",
        body: [
          "Before lending, the lenders send their own specialists to examine the project. That examination is the Environmental and Social Due Diligence, or ESDD.",
          "They read the ESIA, look at the site, and compare what exists against what the standards require.",
          "Where they find a gap, it does not stop the financing. It becomes an action with a name and a date against it.",
          "Those actions become the ESAP.",
        ],
        takeaway: "The due diligence is where the corrective list comes from. It is a photograph of the project before the money moves.",
        jargon: [
          { term: "Environmental and Social Due Diligence (ESDD)", plain: "The lenders' own examination of the project before they lend." },
        ],
        visual: "A due diligence examination of a project file producing a numbered list of gaps.",
      },
      {
        heading: "Our plan, and the plans under it",
        body: [
          "The Environmental and Social Management Plan, the ESMP, is how we will meet our obligations during construction.",
          "It does not stand alone. Under it sit the plans that run daily work: traffic management, waste management, borrow pit management, camp management, community engagement, emergency response.",
          "Each one names measures, an owner and a frequency.",
          "And under the plans sit the procedures: the steps somebody follows at the moment of doing the task.",
        ],
        takeaway: "A plan is written once. A procedure is used every day. The procedure is what produces the evidence.",
        jargon: [
          { term: "Environmental and Social Management Plan (ESMP)", plain: "Our plan for meeting our obligations while we build." },
        ],
        visual: "An ESMP above six management plans, with procedures shown one level below.",
      },
      {
        heading: "The correction list",
        body: [
          "The Environmental and Social Action Plan, the ESAP, is the list of things we must fix or put in place, agreed with the lenders.",
          "Each line has a specific deliverable, a named owner and a date. Some lines are attached to a payment.",
          "An action closes when the agreed evidence exists and someone has checked it. Not when the owner says it is done, and not when the date passes.",
          "The most common defect is an action marked closed with nothing attached to it.",
        ],
        takeaway: "When a payment is held on this project, an overdue ESAP action is the usual reason.",
        jargon: [
          { term: "Environmental and Social Action Plan (ESAP)", plain: "The agreed list of corrective actions, with owners and dates." },
        ],
        visual: "An action card with deliverable, owner, date and closing evidence, with the evidence field highlighted.",
      },
      {
        heading: "From a policy to a piece of evidence",
        body: [
          "Four levels, and they connect.",
          "A policy says what the company commits to. A plan says what we will do about a defined risk. A procedure says how one task is done, step by step. A record proves it happened.",
          "Most people on this project never open a policy and use a procedure every day.",
          "When a checker asks whether a control was applied, they are asking for the record at the end of that chain.",
        ],
        takeaway: "The chain only breaks in one place on this project: between the procedure and the record.",
        visual: "Four linked blocks from policy to record, with the final link marked as the one that breaks.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers answer for the ESAP actions on their section and for whether they are resourced.",
          "Foremen use procedures and produce the records that close actions.",
          "Plant managers own the traffic and plant sections of the management plans.",
          "The mechanical workshop owns the waste, fuel and hazardous materials procedures.",
          "Batching plants own the effluent, chemical storage and dust procedures.",
          "HSE holds the ESMP, keeps the plans current and tracks the ESAP.",
          "Occupational health owns the health surveillance and clinical waste procedures.",
          "Human Resources owns the labour and worker grievance procedures; site administration runs them on the yard.",
          "Procurement flows the plans into contracts, which is how a subcontractor becomes bound by them.",
          "Security owns the security management and conduct procedures.",
          "Community relations and liaison officers own the engagement plan and the community grievance procedure.",
          "Subcontractors work to the same plans and must produce the same records.",
        ],
        takeaway: "Find your line. You do not need to read the ESMP. You need to know which procedure under it is yours.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "Which document tells your site what to do during construction?",
        options: ["The ESIA.", "The ESDD.", "The ESMP.", "The ESAP."],
        correct: 2,
        feedback: {
          0: "The ESIA says what the impacts are and what we promised. The ESMP turns those promises into what we do.",
        },
      },
      {
        format: "single",
        stem: "An ESAP action is marked closed. What must exist for that to be true?",
        options: ["The owner's confirmation.", "The date has passed.", "The agreed evidence, checked by someone.", "An entry in the tracker."],
        correct: 2,
        feedback: {
          0: "Both happen without the evidence existing, which is exactly why this is the most common defect in any action tracker.",
          3: "Both happen without the evidence existing, which is exactly why this is the most common defect in any action tracker.",
        },
      },
      {
        format: "tf",
        stem: "A plan and a procedure are the same thing written at different lengths.",
        answer: false,
        reasons: [
          "A plan organises a risk over a period; a procedure tells one person how to do one task, now.",
          "A plan is approved and a procedure is not.",
          "A plan is longer.",
        ],
        correctReason: 0,
        feedback: "This matters on site. Someone who asks what to do needs a procedure, and handing them a ninety page plan answers a question they did not ask.",
      },
      {
        format: "single",
        stem: "You open a new borrow pit that is not named in the ESIA. What is the position?",
        options: ["Fine, it is inside the project.", "It is an unassessed activity, whatever else is in order.", "Fine if the landowner agreed.", "Fine if it is temporary."],
        correct: 1,
        general: "And it is usually not the only problem: extraction also needs a mineral title, which a landowner cannot give.",
      },
    ],
    closing: "Next: how we are checked.",
  },

  // ──────────────────────────────────────────────────────────────── S4 ──
  {
    id: "s4",
    code: "S4",
    block: "core",
    order: 4,
    title: "How we are checked",
    subtitle: "Seven screens and four questions, about ten minutes",
    minutes: 10,
    icon: "fact_check",
    screens: [
      {
        heading: "Four sets of eyes",
        body: [
          "Our own people check first: HSE inspections, supervisor checks, the monthly report we produce ourselves.",
          "The client's engineer checks, and can instruct us and sometimes stop an activity.",
          "The regulators check: the environmental agency, the labour inspectorate, the minerals authority.",
          "And the lenders send their own consultant, several times a year, for the life of the loan.",
        ],
        takeaway: "Only one of those four can stop the money. That is the one most people on site have never met.",
        visual: "Four checking parties around a site, each labelled with what it can do.",
      },
      {
        heading: "What we check ourselves",
        body: [
          "Self-monitoring is not a formality. It is the first and most frequent check, and it is ours.",
          "Inspections against the plans. Monitoring of dust, noise, water and effluent against limits. Registers of incidents, near misses and grievances.",
          "It rolls up into a report that goes to the lenders on a fixed cycle.",
          "A report that says everything is fine every month is not reassuring. It tells a reader that nothing is being detected.",
        ],
        takeaway: "Our own monitoring is where a problem should be found. Everything after it is a second chance.",
        visual: "A monthly report assembled from inspections, monitoring data, incident and grievance registers.",
      },
      {
        heading: "The consultant the lenders send",
        body: [
          "They are called the Independent Environmental and Social Consultant, or IESC.",
          "They are appointed by the lenders and report to the lenders. They are not our adviser and they are not the regulator.",
          "They come two to four times a year. They read our documents, walk our sites, and talk to our people and to the community.",
          "They cannot instruct anyone on site. What they can do is write what they found, and send it to the people who pay.",
        ],
        takeaway: "They are not there to help us pass. They are there to give the lenders an accurate picture.",
        jargon: [
          { term: "Independent Environmental and Social Consultant (IESC)", plain: "The specialist appointed by the lenders to check this project on their behalf." },
        ],
        visual: "An independent consultant reporting to the lenders, with no instruction line to the site.",
      },
      {
        heading: "What they look at",
        body: [
          "Three things, and they compare them against each other.",
          "The documents: are the plans current, are the registers filled in as the work happened, do the numbers agree between one report and another.",
          "The site: the camp at nine at night, the pit that is not on the itinerary, the haul road at school time.",
          "The people: what a worker says when asked, without his supervisor standing there.",
        ],
        takeaway: "Where the three disagree, the disagreement is the finding. Not the document, not the site: the gap between them.",
        visual: "Three overlapping circles for documents, site and people, with findings where they do not agree.",
      },
      {
        heading: "What happens afterwards",
        body: [
          "They write a report. It goes to the lenders, and we get to comment on the facts.",
          "Each finding gets a severity and a corrective action, with an owner and a date. Those go onto the ESAP.",
          "Most findings close there. That is the normal life of a finding and nobody should fear it.",
          "What escalates is the finding that stays open across two visits, because two visits make a pattern.",
        ],
        takeaway: "A payment is rarely stopped by one finding. It is stopped by a list of actions nobody closed.",
        visual: "A finding becoming an action, then either closing or carrying over to the next visit as a pattern.",
      },
      {
        heading: "Found by you, or found by them",
        body: [
          "Take one problem. An effluent tank overflowing for three weeks.",
          "Version one: we found it, recorded it, told the engineer, sampled the water and were already fixing it. The finding is written, and the system is judged to work.",
          "Version two: they found it, and there is no trace of it anywhere in our records. Now the finding is not about the tank. It is about whether anything we record can be trusted.",
          "Same facts. Opposite conclusion about us.",
        ],
        takeaway: "Nobody is ever penalised here for finding a problem. People are penalised for a problem that was found for them.",
        visual: "Two identical findings with opposite conclusions depending on who found them.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers face the closing meeting and answer for the open actions on their section.",
          "Foremen are the people a consultant will ask, and their registers are the first thing read.",
          "Plant managers are asked for speed data, driver hours and vehicle inspection records.",
          "The mechanical workshop is asked for waste transfer records, fuel storage and spill response.",
          "Batching plants are asked for effluent results, chemical storage and water abstraction records.",
          "HSE prepares the pack, walks the site first, and hands over the gap list.",
          "Occupational health is asked for health surveillance, clinic records and clinical waste disposal.",
          "Human Resources and site administration are asked for contracts, ages, payslips and camp occupancy.",
          "Procurement is asked how subcontractors were screened and what their contracts require.",
          "Security is asked how guards were screened and trained, and how complaints about them are handled.",
          "Community relations and liaison officers are asked for the grievance register and what complainants were told.",
          "Subcontractors are inspected exactly as we are, and their records are read as ours.",
        ],
        takeaway: "Find your line. Whatever your trade, the question you will be asked is the same: show me.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "Who does the independent consultant work for?",
        options: ["Us.", "The client.", "The lenders.", "The regulator."],
        correct: 2,
        feedback: {
          0: "They may say useful things to us. They are not our adviser, and treating them as one leads people to expect help they will not get.",
        },
      },
      {
        format: "tf",
        stem: "A grievance register with no entries this quarter is a good result.",
        answer: false,
        reasons: [
          "It usually means nobody knows the channel, does not trust it, or does not feel safe using it.",
          "It means complaints were resolved verbally.",
          "It means the quarter was short.",
        ],
        correctReason: 0,
        feedback: "A checker reads an empty register as a project that cannot see its own operation, whatever the covering note says.",
      },
      {
        format: "single",
        stem: "You find a problem ten days before a visit and fix it. What else should you do?",
        options: ["Nothing, it is resolved.", "Record it, tell the engineer, and show the whole thing at the visit.", "Record it internally and leave it out.", "Wait and see if they notice."],
        correct: 1,
        feedback: {
          0: "Both turn a technical problem into a trust problem, which is far harder to close and reaches every other record we hold.",
          2: "Both turn a technical problem into a trust problem, which is far harder to close and reaches every other record we hold.",
        },
      },
      {
        format: "single",
        stem: "What usually causes a payment to be held?",
        options: ["One severe finding.", "A list of actions nobody closed.", "A regulator's fine.", "A community complaint."],
        correct: 1,
        general: "Each of the others can contribute. The common cause is overdue actions, and each of those has a name against it.",
      },
    ],
    closing: "Next: a day on this project.",
  },

  // ──────────────────────────────────────────────────────────────── S5 ──
  {
    id: "s5",
    code: "S5",
    block: "core",
    order: 5,
    title: "A day on this project",
    subtitle: "Seven screens and four questions, about ten minutes",
    minutes: 10,
    icon: "today",
    screens: [
      {
        heading: "Where the evidence is born",
        body: [
          "Everything the lenders read starts as something somebody did on an ordinary day.",
          "An induction signed. A permit issued. An inspection walked. A near miss reported. A complaint written down.",
          "None of those people is thinking about a lender. Each of them is the first link in a chain that ends at one.",
          "This module follows one day, from the morning meeting to the end of the shift.",
        ],
        takeaway: "The gap the monitors keep finding is not in the work. It is between the task and the record of it.",
        visual: "A single working day with five points where a record is created.",
      },
      {
        heading: "Before the shift",
        body: [
          "The morning meeting is where the day's risks get named and the controls get allocated. It is also a record.",
          "Permits are issued for the work that needs one: hot work, excavation, work at height, confined space, lifting.",
          "A permit is not paperwork. It is the moment somebody checks that the control exists before the work starts.",
          "And the inductions: anyone new on site today, including a subcontractor's people, is inducted before they start.",
        ],
        takeaway: "A permit signed after the work has started is worse than no permit. It records a check that never happened.",
        visual: "A morning sequence of meeting, permits and induction, each producing a record.",
      },
      {
        heading: "During the shift",
        body: [
          "Procedures are what you actually use. The chance find procedure. The spill response. The grievance intake. The permit to work.",
          "Each one exists because somebody, one day, needed to know what to do in the first five minutes.",
          "Inspections happen against the plans: the camp, the pits, the fuel point, the haul road, the workface.",
          "And the monitoring: dust, noise, water, effluent, measured where the people are, not at the fence.",
        ],
        takeaway: "A plan is read once a year. A procedure is used the day something happens. That is the difference that matters.",
        visual: "A shift with three lanes showing procedures used, inspections done and monitoring taken.",
      },
      {
        heading: "The record, and what makes it good",
        body: [
          "Four things. Written at the time, or as close as the work allows. Signed, so it has an author. Complete, including the entries that look bad. And consistent with the other places the same event appears.",
          "A week of sheets filled in on Friday fails the first. An unsigned entry fails the second.",
          "A register with no bad entries fails the third, because every real week has something in it.",
          "And an incident dated the 13th in the diary and the 14th in the register fails the fourth.",
        ],
        takeaway: "If it was not written down, it is very hard to prove it happened. If it was written down afterwards, it is worse.",
        visual: "A register entry marked as contemporaneous, signed, complete and consistent.",
      },
      {
        heading: "When something goes wrong",
        body: [
          "Stop, and make it safe. That comes before anything else, including the record.",
          "Tell someone. Your supervisor, the HSE officer, whoever the procedure names. Do not wait for the end of the shift.",
          "Write it down the same day, while you still have the times and the names.",
          "And report the near misses too, the ones where nothing happened. Those are the cheapest information this project will ever get.",
        ],
        takeaway: "Nobody on this project should ever be criticised for reporting something. The day that happens once, the reporting stops.",
        visual: "Four steps of stop, tell and write, with near misses feeding back into prevention.",
      },
      {
        heading: "Where your day ends up",
        body: [
          "Those records are collected and become our monthly report to the lenders.",
          "The same records show whether the measures in the ESMP are actually being applied, or only written.",
          "And when an ESAP action says a control will be in place by a date, your records are the evidence that closes it.",
          "That is the whole chain: a procedure followed, a record made, a plan proved, an action closed, a payment released.",
        ],
        takeaway: "The distance between a form at the gate and a decision at a bank is five steps. It is shorter than anyone thinks.",
        visual: "Five linked steps from a form on site to a released payment.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers make sure the day has the time and the people for the controls it needs.",
          "Foremen run the morning meeting, issue or request permits, and own most of the day's records.",
          "Plant managers log hours, speeds and vehicle checks, and act on what the logs show.",
          "The mechanical workshop records maintenance, fuel movements, waste transfers and spills, including small ones.",
          "Batching plants record batches, chemical use, wash water and any discharge.",
          "HSE runs the inspections and monitoring and assembles what the day produced.",
          "Occupational health records consultations, health surveillance and clinical waste movements.",
          "Site administration records inductions, contracts, attendance and camp occupancy for Human Resources.",
          "Procurement records supplier screening and what arrived on site, which is the start of the material trail.",
          "Security records incidents, patrols and any use of force, however minor.",
          "Community relations and liaison officers log every complaint the day produced and what the complainant was told.",
          "Subcontractors keep the same records and hand them over on the same cycle.",
        ],
        takeaway: "Find your line. On this project, one record a day per person is roughly what separates done from proved.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "What is a permit to work actually for?",
        options: ["Paperwork.", "Checking that the control exists before the work starts.", "Recording who was on site.", "Satisfying the regulator."],
        correct: 1,
        feedback: {
          0: "That belief is why permits get signed afterwards, and a permit signed afterwards records a check that never happened.",
        },
      },
      {
        format: "tf",
        stem: "A week of inspection sheets completed on Friday is acceptable if the inspections were done.",
        answer: false,
        reasons: [
          "The record is not contemporaneous, and it is usually recognisable, which puts every other record in doubt.",
          "Friday is not a valid inspection day.",
          "The sheets must be typed.",
        ],
        correctReason: 0,
        feedback: "This is the single most common finding across both corridors. The work being real is what makes it painful.",
      },
      {
        format: "single",
        stem: "Something goes wrong during your shift. What comes first?",
        options: ["Write it in the register.", "Stop and make it safe.", "Tell the HSE officer.", "Finish the task, then report."],
        correct: 1,
        general: "Then tell someone, then write it down the same day. The order matters and it is short enough to remember.",
      },
      {
        format: "single",
        stem: "Your daily records eventually prove which of these?",
        options: [
          "That the ESMP measures are applied and that ESAP actions can close.",
          "That the ESIA was accurate.",
          "Nothing, they stay on site.",
          "Only that people attended work.",
        ],
        correct: 0,
        general: "That is why a missing record is not an administrative matter. It is the reason an action stays open and a payment waits.",
      },
    ],
    closing: "Next: your role modules.",
  },

  // ──────────────────────────────────────────────────────────────── R1 ──
  {
    id: "r1",
    code: "C",
    block: "role",
    order: 6,
    title: "Community",
    subtitle: "Eight screens and four questions, about twelve minutes",
    minutes: 12,
    icon: "diversity_3",
    screens: [
      {
        heading: "The people on the other side of the fence",
        body: [
          "They did not choose this road. They live along it, farm beside it, trade on it and cross it.",
          "Some of them lose land, crops, a shop or a route because of us. Others lose nothing and live with the dust, the noise and the trucks.",
          "They have no contract with us, no induction, and no way of knowing what we are supposed to do.",
          "Everything in this module is about that asymmetry.",
        ],
        takeaway: "A community cannot stop a section on paper. It can stop one on the ground, and it does.",
        visual: "A corridor fence with the site on one side and the surrounding community on the other.",
      },
      {
        heading: "Who counts as affected",
        body: [
          "Anyone who loses land, assets, access or income because of this project. Three groups, and only the first has papers.",
          "People with a title or a certificate of occupancy.",
          "People with a claim recognised under Nigerian law, including customary rights.",
          "And people with no recognisable claim at all: the trader on the road reserve, the seasonal user, the household nobody registered.",
          "The third group is compensated for what they built and own, and helped to restore their living, even though they are not paid for the land.",
        ],
        takeaway: "On most corridors, the people without papers are the largest group. Leaving them out is how a project makes an enemy of a whole village.",
        visual: "Three equally weighted eligibility groups with what each receives.",
      },
      {
        heading: "Paying correctly is not the end of it",
        body: [
          "Two rules decide whether compensation was right.",
          "It is calculated at the cost of replacing the asset, with nothing taken off for age. A twenty-year-old house is paid at the price of building an equivalent new one.",
          "And nobody enters the land until the money is available to collect. Not calculated, not approved, not budgeted. Available.",
          "Then there is the part people forget: a trader who is paid but has nowhere with customers to trade has not been restored.",
        ],
        takeaway: "Everything in this module can be corrected later except one thing: entering land before the money is there.",
        visual: "A gate showing that only compensation available to collect allows entry onto land.",
      },
      {
        heading: "When several hundred of us arrive",
        body: [
          "A camp beside a village changes that village. This is predictable and it is assessed, not regretted afterwards.",
          "Prices rise: food, rent, transport. The clinic sized for a village serves a village and a workforce.",
          "Water comes under pressure, and the people who walk further for it are women and girls.",
          "Local hiring expectations get disappointed, and that is where most of the resentment starts.",
          "And a large income gap between workers and residents creates risks covered in the Security module.",
        ],
        takeaway: "The first control is not a better camp. It is fewer arrivals: hire locally, train locally, bus people in where you can.",
        visual: "A camp beside a village with five labelled effects running between them.",
      },
      {
        heading: "The community grievance mechanism",
        body: [
          "Every affected person must have a way to raise a problem with us and get an answer. That is the community grievance mechanism.",
          "It is run by the community relations manager and the liaison officers. The workers' channel is a separate one, run by Human Resources, and is covered in the Health and Safety module.",
          "It needs more than one way in, and at least one that does not require walking through our gate.",
          "Every complaint is logged the day it arrives, acknowledged, investigated by someone not involved in it, and answered.",
          "And then the step everyone skips: telling the complainant what was decided and why.",
        ],
        takeaway: "A mechanism is judged on one thing only: whether somebody with a problem uses it a second time.",
        jargon: [
          { term: "Grievance mechanism", plain: "The formal route for a complaint and its answer. There are two on this project and they are deliberately separate. The community one is run by community relations and the liaison officers. The workers' one is run by Human Resources with the worker representatives." },
        ],
        visual: "A funnel narrowing from complaints received to complainants actually informed of the outcome.",
      },
      {
        heading: "Engagement is a process, not an event",
        body: [
          "A public meeting held two years ago at design stage satisfied a legal requirement. It is not engagement.",
          "Engagement means knowing who is affected, telling them what is coming before it arrives, and listening while the works are running.",
          "It means talking separately to the people who will not speak in a general meeting: women, herders, young people, newcomers.",
          "And it means going back with the answer, not only with the question.",
        ],
        takeaway: "Almost every grievance arises during construction. That is exactly when most projects stop engaging.",
        visual: "A project timeline with one consultation event at design stage against a continuous engagement requirement.",
      },
      {
        heading: "The plans and procedures behind all this",
        body: [
          "This module is not advice. Each part of it sits in a document you can open.",
          "The stakeholder engagement plan says who we talk to, about what, and how often.",
          "The grievance procedure says how a complaint is received, logged, investigated, answered and closed.",
          "The resettlement instrument says who is entitled to what, at what value, and by when.",
          "All three sit under the ESMP, and the actions that correct them sit on the ESAP.",
        ],
        takeaway: "The plan is written once. The procedure is used the day someone complains. Learn the procedure, know where the plan is.",
        visual: "Three community plans under the ESMP, with their procedures shown below.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers decide whether land is settled before a section opens, and carry it when it is not.",
          "Foremen stop work when they see someone on land we have not paid for, rather than assuming somebody checked.",
          "Plant managers keep haulage off the routes and hours the community has asked us to avoid.",
          "The mechanical workshop keeps its noise, run-off and waste from reaching the households next to the yard.",
          "Batching plants are among the noisiest and dustiest neighbours we have, and they run at night.",
          "HSE feeds the community register when a site activity causes a complaint, and does not own it.",
          "Occupational health often treats a community member after an incident involving us, which is the first contact.",
          "Human Resources and site administration handle local hiring, where most community resentment begins or ends.",
          "Procurement decides how much we buy locally, which is what turns a project into an economic neighbour.",
          "Security is the face of this company to anyone who approaches the gate.",
          "The community relations manager and the liaison officers own the community grievance mechanism end to end.",
          "Subcontractors meet the same obligations, and their conduct towards a village is ours.",
        ],
        takeaway: "Find your line. If someone outside the fence is affected by what you do today, this module is yours.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "A woman has traded on the road reserve for fifteen years with no papers. Is she affected?",
        options: [
          "No, she has no right to be there.",
          "Yes, and she is compensated for her structure and helped to restore her living.",
          "Only if her stall is demolished.",
          "Only if she is a resident of the village.",
        ],
        correct: 1,
        feedback: {
          0: "She is not paid for the land. She is affected, and leaving her out is the single most common cause of conflict on corridors like ours.",
        },
      },
      {
        format: "tf",
        stem: "Compensation has been approved internally, so work can start on the parcel.",
        answer: false,
        reasons: [
          "The money must be available to collect, not approved.",
          "Work can start once the community leader agrees.",
          "Work can start if payment follows within a month.",
        ],
        correctReason: 0,
        feedback: "This is the one thing in this module that cannot be corrected afterwards. Everything else can.",
      },
      {
        format: "single",
        stem: "Which step of the grievance process is most often skipped?",
        options: ["Logging the complaint.", "Investigating it.", "Telling the complainant the outcome.", "Acknowledging receipt."],
        correct: 2,
        general: "And from the complainant's side, a case closed without being told is a case where nothing happened.",
      },
      {
        format: "single",
        stem: "What is the first control for the effects of several hundred workers arriving?",
        options: ["A better camp.", "Fewer arrivals: hire and train locally, transport people in.", "A community fund.", "More security."],
        correct: 1,
        general: "Camp design matters and comes second. Reducing the number of people arriving is the control with the largest effect.",
      },
    ],
    closing: "Your community plans and the grievance procedure are on the platform under Documents.",
  },

  // ──────────────────────────────────────────────────────────────── R2 ──
  {
    id: "r2",
    code: "H&S",
    block: "role",
    order: 7,
    title: "Health and Safety",
    subtitle: "Nine screens and four questions, about thirteen minutes",
    minutes: 13,
    icon: "health_and_safety",
    screens: [
      {
        heading: "Protective equipment is the last line, not the plan",
        body: [
          "When a hazard appears, there is an order to work through, and most sites start at the end of it.",
          "Remove the hazard. Can the parapet be assembled on the ground and lifted in, so nobody works at the edge?",
          "If not, reduce it. A shorter exposure, a smaller quantity, a mechanical lift instead of hands.",
          "Then engineer it out: edge protection, guarding, bunding, ventilation.",
          "Then change how people work: permits, exclusion zones, rotation.",
          "Then, last, the helmet and the harness.",
        ],
        takeaway: "If your answer to a hazard is protective equipment, four better answers were skipped before you got there.",
        visual: "Five descending steps of hazard control ending with personal protective equipment.",
      },
      {
        heading: "Every person on this site, whoever pays them",
        body: [
          "Our employees. The subcontractor's people. The labour supplier's men. The caterers, the drivers, the guards.",
          "All of them must have written terms in a language they understand, and a payslip showing what they earned and what was taken off.",
          "Protective equipment is provided free. It is never deducted from a wage.",
          "And nobody under eighteen does hazardous work, whatever the national minimum working age says. On a site like this, almost all work is hazardous.",
        ],
        takeaway: "Subcontracting moves the work. It does not move the responsibility, and it does not move the finding.",
        visual: "Concentric rings of workforce categories, all within one boundary of responsibility.",
      },
      {
        heading: "Six arrangements that mean a man cannot leave",
        body: [
          "These rarely look like coercion. They look like administration.",
          "His employer holds his identity documents, for safekeeping.",
          "He paid a fee to get the job and is working it off.",
          "His wages are held back, or paid far in arrears.",
          "Deductions for food, transport or a bed take most of what he earns.",
          "He cannot leave the camp outside working hours. Or there is a penalty if he resigns.",
        ],
        takeaway: "If you see one of these, act on it. Do not wait until you are certain. Documents go back the same day.",
        visual: "Six cards pairing the routine explanation for an arrangement with its effect on the worker.",
      },
      {
        heading: "Occupational health and the clinic",
        body: [
          "Occupational health is not the same function as safety, and on this project it runs its own clinic.",
          "It holds health surveillance: who is exposed to dust, noise, chemicals or heat, and what that exposure is doing to them over time.",
          "It holds the medical records, which are confidential and are not shared with a supervisor.",
          "It holds the emergency medical route: the time from the furthest working point to a facility that can treat a serious injury, measured and not assumed.",
          "And it produces clinical waste, which is handled as its own stream.",
        ],
        takeaway: "Health surveillance is the only control that detects harm before anyone is injured. Nothing else on this module does that.",
        visual: "A clinic with health surveillance, confidential records, the emergency medical route and clinical waste.",
      },
      {
        heading: "The camp",
        body: [
          "Where we accommodate people, the standard covers floor space per person, toilets and showers per person, lighting, water, food safety and ventilation.",
          "Occupancy is set by the standard, not by how many beds fit in the room. Three-tier bunks are not acceptable.",
          "Facilities are counted against the number of people actually there at the peak, not the design figure.",
          "Women need separate accommodation and separate facilities, lit and lockable, not reached by walking through the men's area.",
        ],
        takeaway: "Keep camp management separate from employment. A man who risks his bed by complaining about the camp will not complain.",
        jargon: [
          { term: "The camp figures", plain: "The figures come from the accommodation standard the project applies. Take them from that document, not from memory." },
        ],
        visual: "A camp block annotated with the parameters assessed, without numeric values.",
      },
      {
        heading: "The worker grievance channel",
        body: [
          "Workers need their own way to raise a problem, and it is not the community mechanism.",
          "Ours is run by Human Resources, with worker representatives, including union representatives where they are present.",
          "It must reach contracted workers, including the labour supplier's men, who never enter our offices.",
          "It cannot run only through the line manager, because a large share of complaints are about the line manager.",
          "And nobody is ever penalised for using it. The first case decides whether there is a second.",
        ],
        takeaway: "Two mechanisms on this project, deliberately separate. If you can only remember one thing, remember that they are two.",
        visual: "Two separate grievance channels, one for workers run by Human Resources and one for the community run by community relations.",
      },
      {
        heading: "The trucks, and the road",
        body: [
          "More people are killed by haulage on public roads than by anything inside our fence.",
          "The controls that work are decisions, not instructions: the route, the hours, speed limiters fitted, driver hours capped and rotated.",
          "The instructions matter too: covered loads, no overtaking in marked zones, a banksman before reversing on a public road.",
          "Map the school times, the market days, the water points and the places people actually cross, which are rarely where a crossing is marked.",
        ],
        takeaway: "Rerouting removes the encounter. Everything else only reduces how bad the encounter is.",
        visual: "Four steps of haulage risk control from rerouting to a banksman at a single gate.",
      },
      {
        heading: "The plans and procedures behind all this",
        body: [
          "The traffic management plan sets routes, hours, speeds and driver rules.",
          "The camp management plan sets accommodation, catering, water and waste.",
          "The emergency response plan sets what happens in an incident, and it must have been driven: the time from the furthest point to a hospital is a measured number, not an assumption.",
          "And the procedures you use daily: permits to work, inspections, incident reporting, the worker grievance intake.",
          "All of it under the ESMP, with corrections tracked on the ESAP.",
        ],
        takeaway: "An emergency plan nobody has driven is a description of an intention. Drive it once, and write down the time.",
        visual: "Three health and safety plans under the ESMP with their daily procedures below.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers resource the controls and decide what is accepted when production and safety pull apart.",
          "Foremen run the morning meeting, issue or request permits, and stop work that should not be running.",
          "Plant managers own speed, driver hours, rotation, crane operations and who is behind the wheel.",
          "The mechanical workshop owns brakes, tyres, lights, mirrors and alarms, which are road safety before they are maintenance.",
          "Batching plants own chemical handling, silo work, confined spaces and dust exposure.",
          "HSE, with its coordinators, officers and flagmen, owns the inspection regime and the near miss culture.",
          "Occupational health runs the clinic, the health surveillance, the exposure records and the emergency medical route.",
          "Human Resources owns contracts, ages, payslips, deductions and the worker grievance channel with the worker representatives; site administration runs it on the yard.",
          "Procurement decides which hauliers and suppliers we use, and what their contracts demand of them.",
          "Security manages the guard force, whose own hours and pay are a labour matter as much as a security one.",
          "Community relations and liaison officers carry the community side of a haulage incident and hear of it first.",
          "Subcontractors, including iron bending and clearing crews, meet every one of these requirements.",
        ],
        takeaway: "Find your line. On this module, the plant, workshop and haulage lines are where people are killed.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "A worker is at risk of falling from a bridge deck. What is the first thing to consider?",
        options: ["Issue a harness.", "Assemble at ground level so nobody works at the edge.", "Post a supervisor.", "Write a permit."],
        correct: 1,
        feedback: {
          0: "The harness is the last line, not the plan. Four better answers sit above it.",
        },
      },
      {
        format: "tf",
        stem: "The labour supplier holds his men's identity documents for safekeeping, so it is not our concern.",
        answer: false,
        reasons: [
          "It is a sign a man cannot leave, and anyone on our site is our responsibility.",
          "It is acceptable if a locker is unavailable.",
          "It is the supplier's contract, not ours.",
        ],
        correctReason: 0,
        feedback: "Provide lockers instead. And there is no legitimate reason to hold a worker's documents.",
      },
      {
        format: "single",
        stem: "How many grievance channels does this project have?",
        options: ["One, for everybody.", "Two: one for workers, one for the community.", "One per section.", "Three."],
        correct: 1,
        general: "Running them together either exposes people or buries complaints, and usually both.",
      },
      {
        format: "single",
        stem: "Which control removes a haulage encounter rather than softening it?",
        options: ["Speed limiters.", "Covered loads.", "Rerouting away from the settlement.", "A banksman at the school gate."],
        correct: 2,
        general: "The other three are real and they all assume the encounter still happens.",
      },
    ],
    closing: "Your traffic, camp and emergency plans are on the platform under Documents.",
  },

  // ──────────────────────────────────────────────────────────────── R3 ──
  {
    id: "r3",
    code: "E",
    block: "role",
    order: 8,
    title: "Environment",
    subtitle: "Nine screens and four questions, about thirteen minutes",
    minutes: 13,
    icon: "eco",
    screens: [
      {
        heading: "Four days, and half a per cent",
        body: [
          "On one coastal section we ran earthworks through the rains with no silt fencing and no settlement pond.",
          "Mud reached a creek people fish and wash in. The catch fell. Children developed skin complaints.",
          "The fix was silt fences, check dams and a pond. Four days, and a fraction of one per cent of the section value.",
          "What it cost instead: a stoppage, a finding, imposed water monitoring for the rest of construction, and a relationship that never fully recovered.",
        ],
        takeaway: "Almost every control in this module is cheap before and expensive after. That gap is the whole argument.",
        visual: "Two bars comparing the small cost of prevention against the much larger cost of the omission.",
      },
      {
        heading: "Dust, water and noise",
        body: [
          "Dust. Suppress where people live, on a schedule matched to the weather and the traffic, not a fixed time. Cover loads. Slow down, which cuts dust and costs nothing. Never use waste oil on a road.",
          "Water. Silt fences and settlement ponds before the rains, not after the first storm. Contain concrete washout, which is lethal to fish. Treat camp and workshop effluent, and sample downstream where people draw water.",
          "Noise. The limit at night is lower than the limit by day, because lost sleep is a health effect. Before blasting, survey the nearby structures, or every crack for two kilometres becomes ours.",
        ],
        takeaway: "Measure at the house, not at the fence. A reading at the plant boundary tells you nothing about the people downwind.",
        visual: "Three columns of controls for dust, water and noise with the zero cost control highlighted.",
      },
      {
        heading: "The batching plant",
        body: [
          "We are building a concrete pavement, so the batching plants are the largest environmental operation on this project.",
          "Wash water from drums and chutes is strongly alkaline and kills fish. It is contained and settled, never sent to a ditch.",
          "Admixtures are chemicals: bunded storage, labels kept legible, spill kit beside the tank, and a safety data sheet where the operator can reach it.",
          "Cement and aggregate dust travel further than people expect. Enclose, suppress, and watch the wind towards the nearest houses.",
          "Curing water is abstracted in large volumes. Know where it comes from and who else draws on that source.",
        ],
        takeaway: "Cement is also the largest single source of emissions on this project, ahead of fuel. That is a procurement and a design question as much as a site one.",
        visual: "A batching plant with wash water, dust, chemical storage and water abstraction marked as its four environmental flows.",
      },
      {
        heading: "Waste, fuel and the whole skip",
        body: [
          "One used oil filter dropped into a general skip turns the whole load into hazardous waste.",
          "So segregate: general, inert rubble, recyclable, hazardous, clinical waste from the clinic, and sludge from treatment. Clinical waste never enters the general stream.",
          "For every hazardous load, the record answers four questions: what it was, how much, who carried it, and where it ended up. A carrier's receipt is not a disposal record.",
          "Fuel: bunded storage with the bund empty of rainwater, drip trays, spill kits where spills happen and not in a store, and a spill recorded even when it is small.",
        ],
        takeaway: "Empty drums leave site and end up holding drinking water. Render hazardous containers unusable before they go.",
        visual: "A general skip containing one hazardous item, with the whole load reclassified, beside a four step disposal trail.",
      },
      {
        heading: "The borrow pit, and the day you finish",
        body: [
          "A pit is the single activity that creates the most problems at once: unassessed scope, extraction without a mineral title, dust and sediment, an open face and standing water near housing, land taken from someone, clearance without screening.",
          "A landowner's consent is not a mineral right. Those are issued by different authorities.",
          "And closure is decided before extraction, not after. Topsoil stripped and stockpiled separately. A planned final profile. Benches instead of one deep face. Drainage so it does not hold water.",
          "A pit worked for maximum yield cannot be closed safely afterwards at any price.",
        ],
        takeaway: "Standing water in an abandoned pit is the longest lasting thing we will leave behind, and children drown in them.",
        visual: "Two borrow pit sections compared, one worked for yield and one designed for closure.",
      },
      {
        heading: "Look before you clear",
        body: [
          "Before any clearance, on the alignment or at a pit or a camp, somebody checks what is there.",
          "Habitat, protected species, wetlands that are dry in February and full in August, and the trees and plants people actually use.",
          "Screening after clearance tells you only what was lost.",
          "And do not carry species between sites. Mud on tracks and imported fill are how invasive plants travel down a corridor.",
        ],
        takeaway: "A survey done once, in the dry season, will miss the wetland and the migrating birds. Say so in the report rather than letting it be found.",
        visual: "A corridor with the alignment screened and four ancillary areas marked as usually unscreened.",
      },
      {
        heading: "If you uncover something",
        body: [
          "Graves, shrines, pots, old walls. Most of what matters is on no map, because nobody ever recorded it.",
          "Five steps, and they are the same for everyone who operates a machine.",
          "Stop and switch off. Do not touch, move or photograph anything. Mark and secure a radius and keep everyone out, including people who want to look.",
          "Call the number on your induction card. And nobody works there again until the named person has attended and released it.",
        ],
        takeaway: "Learn these five cold. They are the only part of this module you may need in the next five minutes.",
        visual: "Five numbered chance find steps: stop, do not touch, secure a radius, call, wait for release.",
      },
      {
        heading: "The plans and procedures behind all this",
        body: [
          "The waste management plan sets the streams, the storage and the disposal route.",
          "The borrow pit management and closure plan sets extraction, working method and the final profile.",
          "The hazardous materials and spill response procedure sets storage, handling and what to do in the first minutes.",
          "The monitoring plan sets what is measured, where, how often and against which limit.",
          "And the chance find procedure sets the five steps on the previous screen. All under the ESMP.",
        ],
        takeaway: "The monitoring plan is where the limits live. Do not work from a number somebody remembers.",
        visual: "Four environmental plans under the ESMP with their procedures below.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers decide whether a pit is opened before it is assessed and licensed.",
          "Foremen run the daily controls: suppression, covers, containment, segregation, and stopping at a find.",
          "Plant managers own dust and noise from the fleet, load covering, and washing plant down between sections.",
          "The mechanical workshop owns fuel, oil, filters, bunding, spill response and waste transfer records.",
          "Batching plants own wash water, cement dust, admixtures and curing water, the largest environmental flows on a concrete pavement.",
          "HSE owns monitoring, the limits, the waste trail and the pit closure plans.",
          "Occupational health owns clinical waste, which never enters the general stream.",
          "Site administration owns camp waste, water and sanitation with the camp plan.",
          "Procurement chooses the quarries and suppliers, and a price far below the market usually has a reason.",
          "Security controls what leaves site, including drums that end up holding drinking water.",
          "Community relations and liaison officers hear about dust, water and pits before we measure them.",
          "Subcontractors, especially clearing crews, decide what is cut before anyone has screened it.",
        ],
        takeaway: "Find your line. On this module, the batching plant, the workshop and the pit are where most findings are made.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "When should the closure of a borrow pit be designed?",
        options: ["When extraction finishes.", "Before extraction starts.", "When the landowner asks.", "At handover."],
        correct: 1,
        feedback: {
          0: "By then the material to backfill it is gone and the faces cannot be battered. A pit worked for yield cannot be closed at any price.",
        },
      },
      {
        format: "tf",
        stem: "The landowner has agreed, so we can start taking material.",
        answer: false,
        reasons: [
          "Extraction needs a mineral title from a different authority, and the pit must be inside the assessed scope.",
          "We also need the chief's agreement.",
          "We need it in writing.",
        ],
        correctReason: 0,
        feedback: "Two separate permissions, two separate authorities. A signature from one does not substitute for the other.",
      },
      {
        format: "single",
        stem: "A used oil filter is dropped into a general waste skip. What happens?",
        options: ["Nothing, it is one filter.", "The whole load becomes hazardous waste.", "It is removed at the landfill.", "It only matters if inspected."],
        correct: 1,
        general: "One small item turns a small quantity of controlled waste into a large one. That is the mechanism behind most waste findings.",
      },
      {
        format: "single",
        stem: "Your bucket exposes what looks like a grave. What do you do first?",
        options: ["Photograph it.", "Stop and switch off.", "Call your foreman and keep working nearby.", "Cover it over."],
        correct: 1,
        general: "Then do not touch it, secure a radius, call the number, and nobody works there until the named person attends.",
      },
    ],
    closing: "Your waste, pit, spill and monitoring plans are on the platform under Documents.",
  },

  // ──────────────────────────────────────────────────────────────── R4 ──
  {
    id: "r4",
    code: "S",
    block: "role",
    order: 9,
    title: "Security and conduct",
    subtitle: "Seven screens and four questions, about ten minutes",
    minutes: 10,
    icon: "shield_person",
    support: true, // persistent support link on every screen of this module
    screens: [
      {
        heading: "Before we start",
        body: [
          "This module covers conduct towards people outside the company, harassment at work, and the behaviour of the people who guard our sites.",
          "There are no graphic descriptions and no images of people. It does describe situations some of us will recognise.",
          "You can stop and come back. Nothing here is scored.",
          "If anything in it affects you personally, the link at the top of every screen gives the person on this project you can speak to, and where to get support.",
        ],
        takeaway: "You do not have to be the person affected to use that link. If you see something, or are told something, it is yours to pass on.",
      },
      {
        heading: "The gap this project creates",
        body: [
          "We brought several hundred regular wages into a place where most people have far less cash.",
          "We brought supervisors who decide who works tomorrow, and gatekeepers who control access to jobs, to compensation files and to the site.",
          "Most of the time nothing happens. When something does, it happens through that gap, and it almost never looks like force.",
          "It looks like a favour offered, a file that could move faster, a shift that could be arranged.",
        ],
        takeaway: "The gap was created by the project. So the risk that comes out of it belongs to the project, not only to whoever acts on it.",
        visual: "A tilted balance showing the wages and authority the project brought against the absence of comparable opportunity.",
      },
      {
        heading: "Three rules with no exceptions",
        body: [
          "No sexual activity with anyone under eighteen. None. Believing someone was older is not a defence, and this applies whatever the age of consent is in national law.",
          "No exchange of money, work, goods, assistance or any project benefit for sex. Including anything presented as a gift or as help with an application.",
          "No retaliation against anyone who reports, supports a report, or takes part in an investigation.",
          "All three are in the code of conduct that every person on this project signs, including every subcontractor and every supplier.",
        ],
        takeaway: "These rules do not prohibit relationships between adults. Where one person decides the other's shifts, pay or file, it must be declared and that decision moved.",
        visual: "Three blocks stating the three absolute rules.",
      },
      {
        heading: "If someone tells you something",
        body: [
          "Most disclosures reach someone who was not expecting one. It may be you.",
          "Move somewhere private. Listen. Take the account once, in their words. Do not ask what happened in detail: you are not the investigator, and each retelling causes harm.",
          "Ask what they need and what would make them safe. Be honest about who you will have to tell, before you tell anyone. Never promise you will tell nobody.",
          "Then pass it to the named trained person. Do not investigate, do not approach anyone named, and never bring the two people together.",
        ],
        takeaway: "Three things are never acceptable: mediation between them, a payment to close a complaint, or a case description in any report.",
        visual: "Two columns of what to do and what not to do when receiving a disclosure.",
      },
      {
        heading: "Conduct towards the people around us",
        body: [
          "Beyond the three rules, the code of conduct covers how we behave towards the village we work beside.",
          "No intimidation, no abusive language, no entering homes, no taking what is not ours, including firewood and water.",
          "Respect for local norms, for places of worship and for burial grounds.",
          "Prohibited areas and prohibited hours, agreed with the community rather than imposed on it.",
          "Every person signs this individually, by name, after it is explained, in a language they understand. A company signature binds a company and tells no worker anything.",
        ],
        takeaway: "Most community incidents are not crimes. They are ordinary rudeness by people who never knew what was expected of them.",
        visual: "A code of conduct with a signature line beside the behaviours it covers.",
      },
      {
        heading: "The people who guard us",
        body: [
          "A guard sits in two places at once. He is a worker owed written terms, lawful pay and reasonable hours. And he is a risk to the community.",
          "Manage only one half and you manage neither: an underpaid guard on a twelve hour shift with no training is a labour problem and a community problem together.",
          "Before arming anyone, assess whether it is warranted. Usually it is not, and arming a force that does not need to be armed creates the risk it was meant to prevent.",
          "Screen who is hired, train them in conduct and in the limits on force, and give the community a way to complain about a guard that is not the guard post.",
        ],
        takeaway: "The chief security officer owns all of this. Where the state deploys police or soldiers to protect us, we do not command them, and we are still expected to engage, write down what we asked for, and escalate what we hear.",
        visual: "A guard post with two lines, one marking the guard as a worker and one as a community risk.",
      },
      {
        heading: "Where you come in",
        trades: [
          "Project managers set the tone, and decide whether a well-regarded person is treated like anyone else.",
          "Foremen are the most common gatekeepers on this project, because they decide who works.",
          "Plant managers decide who drives, which is a gatekeeping power like any other.",
          "The mechanical workshop controls access to work and to overtime in the same way.",
          "Batching plants run shifts at night, where supervision is thinnest.",
          "HSE keeps the reporting channel visible and makes sure it is not the only one.",
          "Occupational health is often the first place someone goes, and is bound by confidentiality before anything else.",
          "Human Resources holds recruitment, contracts and the code of conduct signatures, including for third parties.",
          "Procurement makes the code binding on suppliers, or it binds nobody outside our payroll.",
          "The chief security officer and the guard force are why this module exists: screening, training, proportionate force, and a route for complaints about them.",
          "Community relations and liaison officers hear the first signal, usually informally and without names.",
          "Subcontractors sign the same code individually, and their conduct is ours.",
        ],
        takeaway: "Find your line. If your job lets you decide who gets something, this module is about you.",
      },
    ],
    quiz: [
      {
        format: "single",
        stem: "The national age of consent is sixteen. A seventeen year old is involved. What applies?",
        options: ["National law.", "The project rule of eighteen, with no exception.", "It depends on consent.", "It depends on the country of the worker."],
        correct: 1,
        general: "The project sets eighteen for itself and for everyone it engages, and it is in the code every person signs.",
      },
      {
        format: "tf",
        stem: "Someone tells you something. You should bring them and the person named together to clear it up.",
        answer: false,
        reasons: [
          "Never. It is not a misunderstanding, and it re-exposes the person who was harmed.",
          "Only with a witness.",
          "Only if both agree.",
        ],
        correctReason: 0,
        feedback: "Listen once, ask what they need, be honest about who you must tell, and pass it to the named trained person.",
      },
      {
        format: "single",
        stem: "Your subcontractor signed the code of conduct at company level for its forty workers. Is that enough?",
        options: ["Yes, the company is bound.", "No. Individual signature, by name, after it is explained.", "Yes if it is in the contract.", "Yes for suppliers, no for subcontractors."],
        correct: 1,
        general: "A company signature binds a company. Forty people have still been told nothing.",
      },
      {
        format: "single",
        stem: "Which requirement about security guards is most often missing on projects like ours?",
        options: ["Uniforms.", "A way for the community to complain about a guard.", "Shift rosters.", "A contract with a registered provider."],
        correct: 1,
        general: "And it cannot be the guard post. Nobody with a complaint about a guard can be asked to raise it with a guard.",
      },
    ],
    closing: "The support link stays available to you from the pathway menu after this module.",
  },
];

export const OSP_BY_ID = Object.fromEntries(OSP_MODULES.map((m) => [m.id, m]));
export const CORE_MODULES = OSP_MODULES.filter((m) => m.block === "core");
export const ROLE_MODULES = OSP_MODULES.filter((m) => m.block === "role");
