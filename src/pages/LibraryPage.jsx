import { useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "../components/MaterialIcon.jsx";
import { useCourse, isUnlocked } from "../CourseContext.jsx";
import { libraryByModule } from "../data.js";

// "The Library" — one line per module, unlocked in sequence. A module's
// documents open only once the previous module is completed.
export default function LibraryPage() {
  const { modules } = useCourse();
  const [open, setOpen] = useState(modules[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-[1000px] px-margin-mobile py-stack-lg md:px-margin-desktop">
      <nav className="mb-stack-md flex items-center gap-2 text-caption text-outline">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="text-on-surface">The Library</span>
      </nav>

      <h1 className="mb-2 text-headline-lg text-primary md:text-headline-xl">
        The Library
      </h1>
      <p className="mb-stack-lg max-w-2xl text-body-lg text-on-surface-variant">
        All the reference documents and templates, organised by module. Each module's documents unlock when you reach it in the pathway.
      </p>

      <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
        {modules.map((m, idx) => {
          const docs = libraryByModule[m.id] ?? [];
          const unlocked = isUnlocked(modules, m);
          const locked = !unlocked;
          const prev = modules[idx - 1];
          const isOpen = open === m.id && unlocked;
          return (
            <div
              key={m.id}
              className={idx > 0 ? "border-t border-outline-variant" : ""}
            >
              {/* One line per module */}
              <button
                onClick={() => !locked && setOpen(isOpen ? null : m.id)}
                disabled={locked}
                className={`flex w-full items-center gap-4 px-stack-md py-stack-md text-left transition-colors ${
                  locked ? "cursor-not-allowed opacity-60" : "hover:bg-surface-container-low"
                }`}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ background: locked ? "#8a8f96" : m.accent }}
                >
                  <MaterialIcon
                    name={locked ? "lock" : m.icon}
                    className="text-[22px]"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-caption font-bold uppercase tracking-wider text-outline">
                    {m.code}
                  </span>
                  <span className="block truncate text-label-md font-semibold text-primary">
                    {m.title}
                  </span>
                </span>
                {locked ? (
                  <span className="flex shrink-0 items-center gap-1 text-caption font-semibold text-outline">
                    <MaterialIcon name="lock" className="text-[16px]" />
                    {(m.pathway || "A") === "A"
                      ? `Complete ${prev ? prev.code : "the previous module"}`
                      : "Complete Pathway A"}
                  </span>
                ) : (
                  <>
                    <span className="shrink-0 text-caption text-on-surface-variant">
                      {docs.length} {docs.length === 1 ? "doc" : "docs"}
                    </span>
                    <MaterialIcon
                      name={isOpen ? "expand_less" : "expand_more"}
                      className="shrink-0 text-on-surface-variant"
                    />
                  </>
                )}
              </button>

              {/* Documents for this module */}
              {isOpen && (
                <ul className="space-y-1 bg-surface-container-low px-stack-md pb-stack-md pt-1">
                  {docs.length === 0 && (
                    <li className="py-2 text-caption text-outline">
                      No documents for this module yet.
                    </li>
                  )}
                  {docs.map((d) => {
                    const target = d.to ?? (d.doc ? `/library/${d.doc}` : null);
                    const available = Boolean(target);
                    const isLaunch = Boolean(d.to);
                    const Row = available ? Link : "div";
                    const rowProps = available ? { to: target } : {};
                    return (
                      <Row
                        key={d.title}
                        {...rowProps}
                        className={`flex items-center gap-3 rounded-lg bg-white px-4 py-3 ${
                          available
                            ? "group cursor-pointer border border-outline-variant transition-colors hover:border-secondary"
                            : "border border-transparent opacity-70"
                        }`}
                      >
                        <MaterialIcon
                          name={d.icon}
                          className="shrink-0"
                          style={{ color: m.accent }}
                        />
                        <span className="min-w-0 flex-1 text-body-md text-on-surface">
                          {d.title}
                        </span>
                        {available ? (
                          <span className="flex shrink-0 items-center gap-1 text-label-md font-semibold text-secondary">
                            {isLaunch ? "Start" : "Read"}
                            <MaterialIcon
                              name={isLaunch ? "play_arrow" : "arrow_forward"}
                              className="text-[16px] transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        ) : (
                          <span className="shrink-0 rounded-full bg-surface-container-high px-2.5 py-0.5 text-caption font-semibold text-on-surface-variant">
                            Coming soon
                          </span>
                        )}
                      </Row>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Out-of-pathway reference library — on its own, at the end. Always
          available, consultable from any module, never evaluated and never
          counted in progress. */}
      <div className="mt-stack-lg overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
        <div className="flex items-center gap-3 border-b border-outline-variant bg-primary-container px-stack-md py-stack-sm">
          <MaterialIcon name="menu_book" className="text-secondary-fixed" />
          <div>
            <p className="text-label-md font-bold text-white">The standards — reference library</p>
            <p className="text-caption text-white/70">Always available · consult it from any module · not evaluated</p>
          </div>
        </div>
        {[
          { title: "The eight Performance Standards — reference sheets", icon: "menu_book", doc: "ps-reference" },
          { title: "EP4 & the EHS Guidelines — how standards become binding numbers", icon: "gavel", doc: "ep4-ehs-reference" },
          { title: "The chance find drill — five steps every operator knows (micro-module)", icon: "construction", doc: "b6-chance-find" },
        ].map((d) => (
          <Link
            key={d.doc}
            to={`/library/${d.doc}`}
            className="flex items-center gap-3 border-b border-surface-container px-stack-md py-stack-sm transition-colors last:border-0 hover:bg-surface-container-low"
          >
            <MaterialIcon name={d.icon} className="text-outline" />
            <span className="flex-1 text-body-md text-primary">{d.title}</span>
            <MaterialIcon name="arrow_forward" className="text-outline" />
          </Link>
        ))}
      </div>
    </div>
  );
}
