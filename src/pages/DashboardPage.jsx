import { Link } from "react-router-dom";
import { useCourse, isUnlocked, statusMeta } from "../CourseContext.jsx";
import { client } from "../config/clients.js";
import MaterialIcon from "../components/MaterialIcon.jsx";

// ============================================================================
// HOME — Our Sustainability Pathway.
// The conference identity (the green, the diagonal, the two lines), then the
// journey exactly as it runs: welcome → the five core modules → the role
// modules — and the old course as an open library underneath.
// ============================================================================

function ModuleCard({ m, modules, size = "md" }) {
  const unlocked = isUnlocked(modules, m);
  const meta = statusMeta(m);
  const done = m.status === "completed";
  const inner = (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border transition-all ${
        unlocked
          ? "border-outline-variant bg-surface-container-lowest hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
          : "border-outline-variant/60 bg-surface-container-low opacity-70"
      }`}
    >
      {m.cover && (
        <div className="relative h-24 w-full shrink-0">
          <img src={m.cover} alt="" loading="lazy" className={`h-full w-full object-cover ${unlocked ? "" : "grayscale"}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 items-start gap-3 p-4">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          done ? "bg-secondary-container text-on-secondary-container" : "bg-primary-container text-white"
        }`}
      >
        <MaterialIcon name={done ? "check" : unlocked ? m.icon : "lock"} className="text-[22px]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-caption font-bold uppercase tracking-widest text-secondary">
          {m.code} · {m.minutes} min
        </p>
        <p className={`font-bold leading-snug text-primary ${size === "lg" ? "text-body-lg" : "text-body-md"}`}>
          {m.title}
        </p>
        <span className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-caption font-semibold ${meta.pill}`}>
          {meta.label}
        </span>
      </div>
      </div>
    </div>
  );
  return unlocked ? (
    <Link to={`/pathway/${m.id}`} className="block h-full">{inner}</Link>
  ) : (
    <div className="h-full cursor-not-allowed" title="Locked — follow the pathway in order">{inner}</div>
  );
}

export default function DashboardPage() {
  const { modules, libraryModules, progress } = useCourse();
  const welcomeMods = modules.filter((m) => m.block === "welcome");
  const core = modules.filter((m) => m.block === "core");
  const role = modules.filter((m) => m.block === "role");
  const next =
    modules.find((m) => m.status !== "completed" && isUnlocked(modules, m)) || null;
  const allDone = progress.completed === progress.total && progress.total > 0;

  return (
    <div className="mx-auto max-w-[1080px] px-margin-mobile py-8">
      {/* ── HERO: the conference identity — the green, the diagonal, and a
             HITECH photo behind it (their gold and red as the accents) ── */}
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-primary-container text-white">
        <img
          src="/images/hitech-paving.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-primary-container/30" />
        <div
          className="absolute inset-y-0 right-0 w-2/3 bg-secondary-container/85"
          style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 12% 100%)" }}
        />
        <img
          src="/images/hitech-skyline.webp"
          alt=""
          className="absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-30"
          style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 12% 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-2/3 bg-[#c8102e]/85"
          style={{ clipPath: "polygon(34% 0, 38% 0, 12% 100%, 8% 100%)" }}
        />
        <div className="relative px-8 py-12 md:px-12">
          <p className="text-caption font-bold uppercase tracking-[0.25em] text-secondary-fixed">
            {client.clientShort}
          </p>
          <h1 className="mt-2 max-w-md text-display-sm font-black leading-tight md:text-[42px]">
            Our Sustainability Pathway
          </h1>
          <p className="mt-3 max-w-sm text-body-lg text-white/90">
            {client.taglines?.[0]}
            <br />
            <span className="font-bold text-secondary-fixed">{client.taglines?.[1]}</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {next && (
              <Link
                to={`/pathway/${next.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-label-md font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {progress.completed === 0 ? "Begin — one minute" : `Continue: ${next.title}`}
                <MaterialIcon name="arrow_forward" />
              </Link>
            )}
            {allDone && (
              <Link
                to="/evidence"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-label-md font-bold text-primary shadow-lg"
              >
                <MaterialIcon name="workspace_premium" /> Pathway complete — your certificate
              </Link>
            )}
            <span className="rounded-full bg-primary-container/80 px-3 py-1.5 text-caption font-semibold text-white">
              {progress.completed} of {progress.total} modules · about 1h15 in total
            </span>
          </div>
        </div>
      </div>

      {/* ── 1 · Welcome ── */}
      {welcomeMods.length > 0 && (
        <section className="mb-8">
          <div className="mb-3 flex items-baseline gap-3">
            <span className="text-headline-md font-black text-secondary">1</span>
            <div>
              <h2 className="text-headline-md text-primary">Welcome</h2>
              <p className="text-caption text-on-surface-variant">A personal word from the Managing Director, then the welcome. Everything starts here.</p>
            </div>
          </div>
          <div className="grid max-w-3xl gap-3 sm:grid-cols-2">
            {welcomeMods.map((m) => (
              <ModuleCard key={m.id} m={m} modules={modules} size="lg" />
            ))}
          </div>
        </section>
      )}

      {/* ── 2 · The core ── */}
      <section className="mb-8">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-headline-md font-black text-secondary">2</span>
          <div>
            <h2 className="text-headline-md text-primary">The core — for everyone</h2>
            <p className="text-caption text-on-surface-variant">
              Five modules, in order, about fifty minutes. What this is about, who lends to us, the documents, how we are checked, and a day on this project.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((m) => (
            <ModuleCard key={m.id} m={m} modules={modules} />
          ))}
        </div>
      </section>

      {/* ── 3 · Your role modules ── */}
      <section className="mb-10">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-headline-md font-black text-secondary">3</span>
          <div>
            <h2 className="text-headline-md text-primary">Your role modules</h2>
            <p className="text-caption text-on-surface-variant">
              Assigned to your job. They open once the five core modules are done.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {role.map((m) => (
            <ModuleCard key={m.id} m={m} modules={modules} />
          ))}
        </div>
      </section>

      {/* ── Always available ── */}
      <section className="mb-8 grid gap-3 sm:grid-cols-2">
        <Link
          to="/glossary"
          className="flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 transition-all hover:border-secondary hover:shadow-md"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
            <MaterialIcon name="translate" className="text-[22px]" />
          </span>
          <div>
            <p className="font-bold text-primary">Glossary</p>
            <p className="text-caption text-on-surface-variant">Every term in plain words — open any time, during and after the pathway.</p>
          </div>
        </Link>
        <Link
          to="/resources"
          className="flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 transition-all hover:border-secondary hover:shadow-md"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
            <MaterialIcon name="folder_open" className="text-[22px]" />
          </span>
          <div>
            <p className="font-bold text-primary">Documents & memo sheets</p>
            <p className="text-caption text-on-surface-variant">The plans, procedures and memo sheets referenced in the modules.</p>
          </div>
        </Link>
      </section>

      {/* ── Go further: the reference course, open reading ── */}
      <section className="rounded-2xl border border-dashed border-outline-variant bg-surface-container-low p-stack-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="flex items-center gap-2 text-headline-md text-primary">
              <MaterialIcon name="auto_stories" className="text-secondary" /> Go further
            </h2>
            <p className="mt-1 max-w-xl text-body-md text-on-surface-variant">
              The full reference course behind this pathway — {libraryModules.length} in-depth modules on the standards, free to read in any order. Nothing here is required or tracked.
            </p>
          </div>
          <Link
            to="/reference"
            className="inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 text-label-md font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
          >
            Browse the reference course <MaterialIcon name="arrow_forward" />
          </Link>
        </div>
      </section>
    </div>
  );
}
