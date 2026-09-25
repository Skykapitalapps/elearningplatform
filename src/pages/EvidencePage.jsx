import { useCourse } from "../CourseContext.jsx";
import { useAuth } from "../AuthContext.jsx";
import { course } from "../data.js";
import { client } from "../config/clients.js";
import { downloadCertificatePdf } from "../lib/certificate.js";
import MaterialIcon from "../components/MaterialIcon.jsx";
import { Link } from "react-router-dom";

// ============================================================================
// MY PROGRESS — the training-evidence register for Our Sustainability Pathway.
// Completion records that a person went through a module and answered its
// questions. No scores exist anywhere on this pathway — by design.
// ============================================================================
export default function EvidencePage() {
  const { modules, progress, acknowledgements } = useCourse();
  const { profile, user } = useAuth();
  const learnerName = profile?.full_name || course.learner;
  const completed = modules.filter((m) => m.status === "completed");
  const done = progress.percent === 100 && progress.total > 0;

  const certOpts = {
    name: learnerName,
    certNo: user?.id
      ? "OSP-" + user.id.replace(/-/g, "").slice(0, 10).toUpperCase()
      : "OSP-DEMO",
    date:
      completed.map((m) => m.completedOn).filter(Boolean).sort().slice(-1)[0] ??
      new Date().toISOString().slice(0, 10),
    courseTitle: course.title,
    clientShort: client.clientShort,
    totalModules: progress.total,
  };

  return (
    <div className="mx-auto max-w-[900px] px-margin-mobile py-8">
      <h1 className="text-headline-lg text-primary">My progress</h1>
      <p className="mb-6 mt-1 max-w-xl text-body-md text-on-surface-variant">
        Every module you complete is logged here with your name and the date.
        Each module ends with eight quick questions — pass at 75%, unlimited
        retries. Only completion is recorded, never a score.
      </p>

      {/* Counter */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest px-6 py-4">
          <p className="text-headline-lg font-black text-primary">
            {progress.completed}
            <span className="text-headline-md text-outline">/{progress.total}</span>
          </p>
          <p className="text-caption text-on-surface-variant">modules completed</p>
        </div>
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest px-6 py-4">
          <p className="text-headline-lg font-black text-primary">{progress.percent}%</p>
          <p className="text-caption text-on-surface-variant">of your pathway</p>
        </div>
      </div>

      {/* Certificate */}
      {done ? (
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-primary-container p-stack-lg text-white">
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-secondary-container/80"
            style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 15% 100%)" }}
          />
          <div className="relative">
            <p className="text-caption font-bold uppercase tracking-[0.25em] text-secondary-fixed">
              Certificate of completion
            </p>
            <h2 className="mt-1 text-headline-lg">{learnerName}</h2>
            <p className="mt-1 max-w-md text-body-md text-white/85">
              has completed all {progress.total} modules of “{course.title}”,
              passing every assessment.
            </p>
            <button
              onClick={() => downloadCertificatePdf(certOpts)}
              className="mt-4 flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-label-md font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              <MaterialIcon name="download" className="text-[18px]" /> Download PDF certificate
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-dashed border-outline-variant bg-surface-container-low p-stack-md">
          <MaterialIcon name="workspace_premium" className="text-3xl text-outline" />
          <p className="text-body-md text-on-surface-variant">
            {progress.total - progress.completed} module{progress.total - progress.completed !== 1 ? "s" : ""} left
            before your certificate.{" "}
            <Link to="/" className="font-bold text-secondary hover:underline">Continue the pathway →</Link>
          </p>
        </div>
      )}

      {/* Register */}
      <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest">
        <table className="w-full text-left text-body-md">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low text-caption font-bold uppercase tracking-wider text-on-surface-variant">
              <th className="px-4 py-3">Module</th>
              <th className="px-4 py-3">Block</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Completed on</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/50">
            {modules.map((m) => (
              <tr key={m.id}>
                <td className="px-4 py-3 font-semibold text-primary">
                  {m.code} · {m.title}
                </td>
                <td className="px-4 py-3 capitalize text-on-surface-variant">{m.block}</td>
                <td className="px-4 py-3">
                  {m.status === "completed" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-0.5 text-caption font-bold text-on-secondary-container">
                      <MaterialIcon name="check" className="text-[14px]" /> Passed & completed
                    </span>
                  ) : (
                    <span className="text-caption text-outline">Not yet</span>
                  )}
                </td>
                <td className="px-4 py-3 text-on-surface-variant">{m.completedOn ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Acknowledgements (signed documents) */}
      {acknowledgements.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-headline-md text-primary">Signed documents</h2>
          <div className="space-y-2">
            {acknowledgements.map((a) => (
              <div key={a.id} className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-3">
                <MaterialIcon name="history_edu" className="text-secondary" />
                <div className="flex-1">
                  <p className="font-semibold text-primary">{a.title}</p>
                  <p className="text-caption text-on-surface-variant">
                    Signed {a.name} · {a.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
