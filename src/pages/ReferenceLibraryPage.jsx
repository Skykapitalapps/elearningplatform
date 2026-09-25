import { Link } from "react-router-dom";
import { useCourse } from "../CourseContext.jsx";
import MaterialIcon from "../components/MaterialIcon.jsx";

// ============================================================================
// GO FURTHER — the full reference course behind Our Sustainability Pathway.
// The in-depth modules on the standards, kept as the project's normative
// base (this is what stands behind us in front of a lender). Free reading,
// any order, nothing required, nothing tracked.
// ============================================================================
const GROUPS = [
  { key: "A", title: "Foundations", note: "The mechanism: E&S, the rulebooks, the financing, the management system, the KPIs." },
  { key: "B", title: "The standards on the ground", note: "Land, workers, communities, conduct, pollution, biodiversity & heritage — in depth." },
  { key: "C", title: "Practitioner skills", note: "Instructing, IESC visits, investigations, sensitive grievances, records that hold." },
];

export default function ReferenceLibraryPage() {
  const { libraryModules } = useCourse();

  return (
    <div className="mx-auto max-w-[1080px] px-margin-mobile py-8">
      <Link to="/" className="mb-4 inline-flex items-center gap-1 text-label-md font-semibold text-on-surface-variant hover:text-primary">
        <MaterialIcon name="arrow_back" /> Back to the pathway
      </Link>
      <h1 className="flex items-center gap-2 text-headline-lg text-primary">
        <MaterialIcon name="auto_stories" className="text-secondary" /> Go further
      </h1>
      <p className="mb-8 mt-1 max-w-2xl text-body-md text-on-surface-variant">
        The full reference course behind the pathway — our normative base on the
        lenders' standards. Open to everyone, in any order. Nothing here is
        required, gated or tracked; each module carries a downloadable memo
        sheet (the whole module on one page).
      </p>

      {GROUPS.map((g) => {
        const mods = libraryModules.filter((m) => (m.pathway || "A") === g.key);
        if (!mods.length) return null;
        return (
          <section key={g.key} className="mb-8">
            <h2 className="text-headline-md text-primary">{g.title}</h2>
            <p className="mb-3 text-caption text-on-surface-variant">{g.note}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {mods.map((m) => (
                <Link
                  key={m.id}
                  to={`/module/${m.id}`}
                  className="group flex items-start gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 transition-all hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: m.accent || "#1B4D3E" }}
                  >
                    <MaterialIcon name={m.icon || "menu_book"} className="text-[20px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-caption font-bold uppercase tracking-widest text-secondary">{m.code}</p>
                    <p className="font-bold leading-snug text-primary group-hover:underline">{m.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-caption text-on-surface-variant">{m.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
