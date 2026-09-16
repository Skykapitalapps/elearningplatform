import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "../components/MaterialIcon.jsx";
import { useCourse } from "../CourseContext.jsx";
import { GLOBAL_GLOSSARY, GLOSSARY_CATS, termUsage } from "../config/glossary.js";

// One page with every key word of the programme, in plain language — grouped,
// searchable, and pointing to the modules where each term is taught.
export default function GlossaryPage() {
  const { modules } = useCourse();
  const [q, setQ] = useState("");

  const usage = useMemo(() => termUsage(modules), [modules]);

  const needle = q.trim().toLowerCase();
  const matches = (g) =>
    !needle ||
    g.term.toLowerCase().includes(needle) ||
    g.plain.toLowerCase().includes(needle);

  return (
    <div className="mx-auto max-w-[960px] px-margin-mobile py-stack-lg md:px-margin-desktop">
      <nav className="mb-stack-md flex items-center gap-2 text-caption text-outline">
        <Link to="/" className="hover:text-primary">Home</Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="text-on-surface">Glossary</span>
      </nav>

      <div className="mb-stack-lg">
        <h1 className="mb-2 text-headline-lg text-primary md:text-headline-xl">
          The key words, in plain language
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          Every term the course uses, explained the way you'd say it at the
          gate. The same definitions pop up as tap-chips inside each lesson.
        </p>
      </div>

      {/* Search */}
      <label className="mb-stack-lg flex items-center gap-2 rounded-xl border border-outline-variant bg-white px-4 py-3 focus-within:border-secondary">
        <MaterialIcon name="search" className="text-outline" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a term — PS5, ESAP, cut-off date…"
          className="w-full bg-transparent text-body-md text-on-surface outline-none"
        />
      </label>

      {GLOSSARY_CATS.map((cat) => {
        const terms = GLOBAL_GLOSSARY.filter((g) => g.cat === cat.key).filter(matches);
        if (terms.length === 0) return null;
        return (
          <section key={cat.key} className="mb-stack-lg">
            <h2 className="mb-stack-md flex items-center gap-2 text-headline-md text-primary">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              {cat.label}
            </h2>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {terms.map((g) => {
                const where = usage[g.term] ?? [];
                return (
                  <div
                    key={g.term}
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md"
                  >
                    <p className="text-label-md font-bold text-primary">{g.term}</p>
                    <p className="mt-1 text-body-md leading-relaxed text-on-surface-variant">
                      {g.plain}
                    </p>
                    {where.length > 0 && (
                      <p className="mt-2 text-caption text-outline">
                        Appears in {where.join(", ")}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {needle &&
        GLOBAL_GLOSSARY.filter(matches).length === 0 && (
          <p className="rounded-xl border border-dashed border-outline-variant p-stack-lg text-center text-body-md text-on-surface-variant">
            No term matches "{q}". Try a shorter word.
          </p>
        )}
    </div>
  );
}
