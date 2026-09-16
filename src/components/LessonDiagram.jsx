import MaterialIcon from "./MaterialIcon.jsx";

// ============================================================================
// LESSON DIAGRAM — a small scheme inside a lesson section, defined as data:
//   diagram: { type, title, note?, items: [{ t, s? }] }
// Types:
//   flow  — boxes left→right (top→bottom on phones) with arrows between
//   cycle — a flow that loops back on itself (closing "repeat" arrow)
//   steps — a vertical numbered ladder
//   cards — a grid of side-by-side boxes (pillars, rules, facets)
// Pure HTML/CSS so it stays crisp and responsive on any screen.
// ============================================================================
export default function LessonDiagram({ diagram, accent }) {
  const { type, title, note, items } = diagram;
  return (
    <div
      className="mt-4 rounded-xl border p-stack-md"
      style={{ borderColor: `${accent}55`, background: `${accent}08` }}
    >
      <p
        className="mb-3 flex items-center gap-1.5 text-caption font-bold uppercase tracking-wider"
        style={{ color: accent }}
      >
        <MaterialIcon name="schema" className="text-[16px]" /> {title}
      </p>

      {type === "steps" ? (
        <ol className="space-y-0">
          {items.map((it, i) => (
            <li key={it.t} className="relative flex gap-3 pb-4 last:pb-0">
              {i < items.length - 1 && (
                <span
                  className="absolute left-[13px] top-7 bottom-0 w-0.5"
                  style={{ background: `${accent}44` }}
                />
              )}
              <span
                className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-caption font-bold text-white"
                style={{ background: accent }}
              >
                {i + 1}
              </span>
              <span className="pt-1">
                <span className="block text-body-md font-semibold text-on-surface">{it.t}</span>
                {it.s && <span className="text-caption text-on-surface-variant">{it.s}</span>}
              </span>
            </li>
          ))}
        </ol>
      ) : type === "cards" ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-lg border bg-white p-3"
              style={{ borderColor: `${accent}44` }}
            >
              <p className="text-body-md font-bold" style={{ color: accent }}>
                {it.t}
              </p>
              {it.s && <p className="mt-1 text-caption text-on-surface-variant">{it.s}</p>}
            </div>
          ))}
        </div>
      ) : (
        /* flow / cycle */
        <div className="flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center">
          {items.map((it, i) => (
            <div key={it.t} className="flex flex-col items-center sm:flex-row">
              {i > 0 && (
                <MaterialIcon
                  name="arrow_downward"
                  className="my-1 shrink-0 sm:my-0 sm:mx-1.5 sm:rotate-[-90deg]"
                  style={{ color: accent }}
                />
              )}
              <div
                className="w-full rounded-lg border bg-white px-3 py-2.5 text-center sm:w-auto sm:max-w-[180px]"
                style={{ borderColor: `${accent}55` }}
              >
                <p className="text-caption font-bold leading-snug text-on-surface">{it.t}</p>
                {it.s && (
                  <p className="mt-0.5 text-[11px] leading-snug text-on-surface-variant">{it.s}</p>
                )}
              </div>
            </div>
          ))}
          {type === "cycle" && (
            <span
              className="mt-2 flex items-center gap-1 self-center text-caption font-semibold sm:mt-0 sm:ml-1.5"
              style={{ color: accent }}
            >
              <MaterialIcon name="replay" className="text-[18px]" /> and again
            </span>
          )}
        </div>
      )}

      {note && (
        <p className="mt-3 text-caption italic text-on-surface-variant">{note}</p>
      )}
    </div>
  );
}
