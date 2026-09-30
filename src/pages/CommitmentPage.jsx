import { useState } from "react";
import { Link } from "react-router-dom";
import { useCourse } from "../CourseContext.jsx";
import { useAuth } from "../AuthContext.jsx";
import { documents, course } from "../data.js";
import { client } from "../config/clients.js";
import { REQUIRED_SIGNATURES, COMMITMENT_DOC_ID } from "../config/jobRoles.js";
import MaterialIcon from "../components/MaterialIcon.jsx";
import Confetti from "../components/Confetti.jsx";

// ============================================================================
// THE COMMITMENT — the last step of the pathway. Once the eleven modules are
// passed and every policy is signed, the learner signs ONE closing HITECH
// declaration: "I have read the policies, and I will apply them in my work."
// Their name is on it, and it is logged like every other signature.
// ============================================================================

const POLICY_SLUGS = REQUIRED_SIGNATURES.filter((s) => s !== COMMITMENT_DOC_ID);

export default function CommitmentPage() {
  const { modules, progress, acknowledgements, acknowledge } = useCourse();
  const { profile, user } = useAuth();
  const [name, setName] = useState(
    profile?.full_name || user?.user_metadata?.full_name || user?.email?.split("@")[0] || course.learner
  );
  const [checked, setChecked] = useState(false);

  const modulesDone = modules.every((m) => m.status === "completed");
  const policiesSigned = POLICY_SLUGS.every((s) => acknowledgements.some((a) => a.id === s));
  const ready = modulesDone && policiesSigned;
  const signed = acknowledgements.find((a) => a.id === COMMITMENT_DOC_ID);
  const missing = POLICY_SLUGS.filter((s) => !acknowledgements.some((a) => a.id === s));

  if (!ready && !signed) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-3 text-center">
        <MaterialIcon name="lock" className="text-5xl text-outline" />
        <p className="text-body-lg text-on-surface-variant">
          The commitment declaration is the final step — it opens once the eleven modules are
          passed and every policy is signed.
        </p>
        <p className="text-body-md text-on-surface-variant">
          {progress.completed} of {progress.total} modules · {POLICY_SLUGS.length - missing.length} of{" "}
          {POLICY_SLUGS.length} policies signed
        </p>
        <Link to="/" className="rounded-lg bg-primary px-6 py-3 text-label-md text-on-primary">
          Back to the pathway
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {signed && <Confetti />}
      <p className="mb-1 text-caption font-bold uppercase tracking-[0.28em] text-secondary">
        The final step
      </p>
      <h1 className="mb-6 text-headline-lg text-primary">Your commitment</h1>

      {/* The declaration — set like a formal HITECH paper */}
      <div className="overflow-hidden rounded-2xl border border-outline-variant bg-[#fbfaf6] shadow-sm">
        <div className="border-b-4 border-[#c8102e] bg-white px-8 py-5">
          <p className="text-title-lg font-black text-primary">{client.clientLegal}</p>
          <p className="text-caption uppercase tracking-widest text-on-surface-variant">
            Policy acknowledgement & commitment declaration
          </p>
        </div>
        <div className="px-8 py-6">
          <p
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="mb-4 text-[16px] leading-[1.7] text-on-surface"
          >
            I, <span className="font-bold">{signed ? signed.name : name.trim() || "…"}</span>, confirm
            that I have completed Our Sustainability Pathway, and that I have read, understood and
            signed the {POLICY_SLUGS.length} company policies listed below. I commit to applying them
            in my work and in my day-to-day conduct, on site and towards the communities we work
            alongside.
          </p>
          <div className="mb-4 grid gap-1.5 sm:grid-cols-2">
            {POLICY_SLUGS.map((slug) => {
              const d = documents[slug];
              const a = acknowledgements.find((x) => x.id === slug);
              return (
                <p key={slug} className="flex items-start gap-1.5 text-body-sm text-on-surface-variant">
                  <MaterialIcon name="check" className="mt-0.5 text-[15px] text-emerald-600" />
                  {d?.title ?? slug}
                  {a && <span className="text-outline"> · {a.date}</span>}
                </p>
              );
            })}
          </div>

          {signed ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-stack-md">
              <p
                style={{ fontFamily: "'Great Vibes', cursive" }}
                className="text-[34px] leading-none text-primary"
              >
                {signed.name}
              </p>
              <p className="mt-1 text-caption uppercase tracking-widest text-emerald-800">
                Signed on {signed.date} · logged to the training-evidence register
              </p>
            </div>
          ) : (
            <>
              <label className="mb-3 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mt-1 h-5 w-5"
                  style={{ accentColor: "#14532d" }}
                />
                <span className="text-body-md text-on-surface">
                  This declaration carries my name and stands as my signature.
                </span>
              </label>
              <div className="flex flex-col gap-stack-md sm:flex-row sm:items-center">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-outline-variant bg-white px-4 py-2.5 text-body-md focus:border-primary focus:outline-none sm:w-64"
                />
                <button
                  disabled={!checked || !name.trim()}
                  onClick={() =>
                    acknowledge({
                      id: COMMITMENT_DOC_ID,
                      title: "Policy acknowledgement & commitment declaration",
                      name: name.trim(),
                      date: new Date().toISOString().slice(0, 10),
                    })
                  }
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-label-md font-bold text-on-primary transition-transform hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MaterialIcon name="draw" className="text-[18px]" /> Sign my commitment
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {signed && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/evidence"
            className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
          >
            <MaterialIcon name="workspace_premium" /> Your certificate
          </Link>
          <Link
            to="/"
            className="rounded-xl border border-outline-variant px-6 py-3 text-label-md font-semibold text-on-surface hover:border-primary"
          >
            Back to the pathway
          </Link>
        </div>
      )}
    </div>
  );
}
