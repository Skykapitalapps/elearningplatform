import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourse, isUnlocked } from "../CourseContext.jsx";
import { TRADES } from "../data/osp.js";
import { client } from "../config/clients.js";
import MaterialIcon from "../components/MaterialIcon.jsx";
import Confetti from "../components/Confetti.jsx";

// A little joy: praise varies, streaks catch fire.
const PRAISE = ["🎯 Spot on!", "💪 Nice one!", "🌟 Exactly right!", "🚀 You've got this!", "👌 Sharp eye!", "✅ That's it!"];
const praiseFor = (i) => PRAISE[i % PRAISE.length];

// Pass mark: 75% — 6 of 8. Unlimited retries, and the feedback teaches.
const PASS_PCT = 0.75;
export const passNeededFor = (quiz) => Math.ceil(quiz.length * PASS_PCT);

function shuffled(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  // never start on the right answer
  return a.every((v, i) => v === i) ? a.reverse() : a;
}

// "Put the steps in order" — tap the arrows, then check. All-or-nothing.
function OrderQuestion({ q, revealed, onChecked }) {
  const [arr, setArr] = useState(() => shuffled(q.items.length));
  const move = (pos, dir) => {
    if (revealed) return;
    const next = [...arr];
    const to = pos + dir;
    if (to < 0 || to >= next.length) return;
    [next[pos], next[to]] = [next[to], next[pos]];
    setArr(next);
  };
  return (
    <div>
      <div className="space-y-2">
        {arr.map((itemIdx, pos) => {
          const right = revealed && itemIdx === pos;
          const wrong = revealed && itemIdx !== pos;
          return (
            <div
              key={itemIdx}
              className={`flex items-center gap-2 rounded-xl border p-3 text-body-md transition-colors ${
                right ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                : wrong ? "border-rose-400 bg-rose-50 text-rose-900"
                : "border-outline-variant bg-surface-container-lowest"
              }`}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-caption font-black ${right ? "bg-emerald-500 text-white" : wrong ? "bg-rose-400 text-white" : "bg-primary-container text-white"}`}>
                {pos + 1}
              </span>
              <span className="flex-1">{q.items[itemIdx]}</span>
              {revealed && wrong && (
                <span className="text-caption font-bold text-rose-500">→ {itemIdx + 1}</span>
              )}
              {!revealed && (
                <span className="flex flex-col">
                  <button onClick={() => move(pos, -1)} disabled={pos === 0} className="text-outline hover:text-primary disabled:opacity-20" aria-label="Move up">
                    <MaterialIcon name="keyboard_arrow_up" className="text-[20px]" />
                  </button>
                  <button onClick={() => move(pos, 1)} disabled={pos === arr.length - 1} className="text-outline hover:text-primary disabled:opacity-20" aria-label="Move down">
                    <MaterialIcon name="keyboard_arrow_down" className="text-[20px]" />
                  </button>
                </span>
              )}
            </div>
          );
        })}
      </div>
      {!revealed && (
        <button
          onClick={() => onChecked(arr.every((v, i) => v === i))}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
        >
          <MaterialIcon name="checklist" /> Check my order
        </button>
      )}
    </div>
  );
}

// "Sort into buckets" — tap a chip, tap its bucket; tap a placed chip to
// take it back. Check unlocks once everything is placed.
function CatQuestion({ q, revealed, onChecked }) {
  const [placed, setPlaced] = useState({}); // itemIdx -> catId
  const [sel, setSel] = useState(null);
  const unplaced = q.items.map((_, i) => i).filter((i) => placed[i] === undefined);
  const place = (catId) => {
    if (revealed || sel === null) return;
    setPlaced({ ...placed, [sel]: catId });
    setSel(null);
  };
  const takeBack = (i) => {
    if (revealed) return;
    const next = { ...placed };
    delete next[i];
    setPlaced(next);
  };
  return (
    <div>
      {unplaced.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {unplaced.map((i) => (
            <button
              key={i}
              onClick={() => setSel(sel === i ? null : i)}
              className={`rounded-full border px-3 py-1.5 text-caption font-semibold transition-all ${
                sel === i ? "scale-105 border-secondary bg-secondary-container text-on-secondary-container shadow-md" : "border-outline-variant bg-surface-container-lowest text-on-surface hover:border-secondary"
              }`}
            >
              {q.items[i].text}
            </button>
          ))}
        </div>
      )}
      {sel !== null && <p className="mb-2 text-caption font-semibold text-secondary">Now tap the right bucket ↓</p>}
      <div className={`grid gap-3 ${q.cats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {q.cats.map((c) => (
          <button
            key={c.id}
            onClick={() => place(c.id)}
            disabled={revealed || sel === null}
            className={`min-h-24 rounded-xl border-2 border-dashed p-3 text-left transition-colors ${
              sel !== null && !revealed ? "border-secondary bg-secondary-container/20" : "border-outline-variant bg-surface-container-low"
            }`}
          >
            <span className="mb-2 block text-caption font-black uppercase tracking-wider text-primary">{c.label}</span>
            <span className="flex flex-wrap gap-1.5">
              {q.items.map((it, i) => {
                if (placed[i] !== c.id) return null;
                const right = revealed && it.cat === c.id;
                const wrong = revealed && it.cat !== c.id;
                return (
                  <span
                    key={i}
                    onClick={(e) => { e.stopPropagation(); takeBack(i); }}
                    className={`rounded-full px-2.5 py-1 text-caption font-semibold ${
                      right ? "bg-emerald-100 text-emerald-800"
                      : wrong ? "bg-rose-100 text-rose-800 line-through"
                      : "bg-surface-container-highest text-on-surface"
                    }`}
                  >
                    {it.text}
                  </span>
                );
              })}
            </span>
          </button>
        ))}
      </div>
      {!revealed && (
        <button
          onClick={() => onChecked(q.items.every((it, i) => placed[i] === it.cat))}
          disabled={unplaced.length > 0}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          <MaterialIcon name="checklist" /> Check my sorting {unplaced.length > 0 ? `(${unplaced.length} left)` : ""}
        </button>
      )}
    </div>
  );
}

// ============================================================================
// OUR SUSTAINABILITY PATHWAY — module player.
// One screen at a time (the copy is pasted as-is from the module packs and
// carries the whole message: no narration, no filler). After the screens,
// the light quiz: four questions, two formats, no pass mark, no gate, no
// score recorded — feedback is the teaching. Completion records only that
// the learner answered.
// ============================================================================

const LETTERS = ["a", "b", "c", "d"];

// The Managing Director's portrait, with an initials medallion until the
// real photo lands at its path (public/images/dany-abboud.jpg).
function MdPortrait({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  if (failed || !src)
    return (
      <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-container to-[#2e6b45] text-headline-lg font-black text-white ring-4 ring-secondary-container">
        {initials}
      </span>
    );
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-secondary-container"
    />
  );
}

function SupportBanner() {
  const s = client.supportContact;
  if (!s) return null;
  return (
    <a
      href={`mailto:${s.email}`}
      className="mb-4 flex items-start gap-2 rounded-xl border border-secondary/40 bg-secondary-container/30 px-4 py-3 text-caption text-on-surface hover:bg-secondary-container/50"
    >
      <MaterialIcon name="support_agent" className="mt-0.5 text-[18px] text-secondary" />
      <span>
        {s.label} <span className="font-bold text-secondary">{s.name}</span> — this link stays on every screen of this module.
      </span>
    </a>
  );
}

function Takeaway({ text }) {
  if (!text) return null;
  return (
    <div className="mt-6 rounded-xl border-l-4 border-secondary bg-secondary-container/25 p-stack-md">
      <p className="mb-1 text-caption font-bold uppercase tracking-widest text-secondary">
        Key takeaway
      </p>
      <p className="text-body-md font-medium leading-relaxed text-on-surface">{text}</p>
    </div>
  );
}

function JargonBuster({ items }) {
  if (!items?.length) return null;
  return (
    <div className="mt-6 rounded-xl border border-outline-variant bg-surface-container-low p-stack-md">
      <p className="mb-2 flex items-center gap-1.5 text-caption font-bold uppercase tracking-widest text-primary">
        <MaterialIcon name="translate" className="text-[16px]" /> Jargon buster
      </p>
      {items.map((j) => (
        <p key={j.term} className="mb-1.5 text-body-md leading-relaxed text-on-surface-variant">
          <span className="font-bold text-on-surface">{j.term}.</span> {j.plain}
        </p>
      ))}
    </div>
  );
}

// The device that makes every trade find itself: TWELVE rows, always the same
// trades, always the same order, in two columns. Do not reorder or remove.
function WhereYouComeIn({ lines }) {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-2">
      {TRADES.map((t, i) => (
        <div
          key={t.key}
          className="flex items-start gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-3"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-container text-white">
            <MaterialIcon name={t.icon} className="text-[18px]" />
          </span>
          <p className="text-caption leading-relaxed text-on-surface">{lines[i]}</p>
        </div>
      ))}
    </div>
  );
}

// ── The light quiz ──────────────────────────────────────────────────────────
function LightQuiz({ module, onDone }) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null); // single: option index · tf: true/false
  const [reason, setReason] = useState(null); // tf second stage
  const [streak, setStreak] = useState(0); // display only — never recorded
  const [hits, setHits] = useState(0); // right answers this attempt
  const [praiseIdx, setPraiseIdx] = useState(0);
  const [checkedResult, setCheckedResult] = useState(null); // order/cat outcome
  const q = module.quiz[index];
  const isLast = index === module.quiz.length - 1;

  function next() {
    setChoice(null);
    setReason(null);
    setCheckedResult(null);
    if (isLast) onDone(hits);
    else setIndex(index + 1);
  }

  const revealed =
    q.format === "single" ? choice !== null
    : q.format === "tf" ? reason !== null
    : checkedResult !== null;
  const gotIt =
    q.format === "single" ? choice === q.correct
    : q.format === "tf" ? choice === q.answer && reason === q.correctReason
    : checkedResult === true;

  // Streak bookkeeping happens at the moment of the final tap.
  function settle(correct) {
    setStreak((s) => (correct ? s + 1 : 0));
    if (correct) {
      setPraiseIdx((i) => i + 1);
      setHits((h) => h + 1);
    }
  }

  // Wrong-answer explanation: the per-option text when the pack wrote one,
  // otherwise the general line, otherwise point to the right answer — the
  // learner always leaves the question with the teaching.
  const wrongText = (i) =>
    q.feedback?.[i] ??
    q.general ??
    `The answer is (${LETTERS[q.correct]}): ${q.options[q.correct]}`;

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-caption font-bold uppercase tracking-widest text-secondary">
          Question {index + 1} of {module.quiz.length} · pass at {passNeededFor(module.quiz)} of {module.quiz.length} · unlimited retries
        </p>
        {streak >= 2 && (
          <span className="animate-pop rounded-full bg-secondary-container px-3 py-1 text-caption font-black text-on-secondary-container">
            🔥 {streak} in a row
          </span>
        )}
      </div>
      <div className="mb-3 flex gap-1.5">
        {module.quiz.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < index ? "bg-secondary" : i === index ? "bg-secondary-container" : "bg-surface-container-highest"}`} />
        ))}
      </div>
      <h2 className="mb-4 text-headline-md leading-snug text-primary">{q.stem}</h2>
      {q.image && (
        <img src={q.image} alt="" loading="lazy" className="mb-4 max-h-56 w-full rounded-2xl object-cover shadow-sm" />
      )}

      {q.format === "single" && (
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const picked = choice === i;
            const correct = i === q.correct;
            return (
              <button
                key={i}
                disabled={choice !== null}
                onClick={() => { setChoice(i); settle(i === q.correct); }}
                className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-body-md transition-colors ${
                  choice === null
                    ? "border-outline-variant bg-surface-container-lowest hover:border-secondary"
                    : correct
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                      : picked
                        ? "border-rose-400 bg-rose-50 text-rose-900"
                        : "border-outline-variant bg-surface-container-lowest opacity-60"
                }`}
              >
                <span className="font-bold">({LETTERS[i]})</span>
                <span className="flex-1">{opt}</span>
                {choice !== null && correct && <MaterialIcon name="check_circle" fill className="text-emerald-500" />}
                {picked && !correct && <MaterialIcon name="cancel" fill className="text-rose-400" />}
              </button>
            );
          })}
        </div>
      )}

      {q.format === "order" && (
        <OrderQuestion
          key={index}
          q={q}
          revealed={revealed}
          onChecked={(correct) => { setCheckedResult(correct); settle(correct); }}
        />
      )}

      {q.format === "cat" && (
        <CatQuestion
          key={index}
          q={q}
          revealed={revealed}
          onChecked={(correct) => { setCheckedResult(correct); settle(correct); }}
        />
      )}

      {q.format === "tf" && (
        <>
          <div className="flex gap-3">
            {[true, false].map((v) => {
              const picked = choice === v;
              const correct = v === q.answer;
              return (
                <button
                  key={String(v)}
                  disabled={choice !== null}
                  onClick={() => setChoice(v)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 p-5 text-headline-md font-black transition-all active:scale-95 ${
                    choice === null
                      ? v
                        ? "border-emerald-300 bg-emerald-50/60 text-emerald-700 hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md"
                        : "border-rose-300 bg-rose-50/60 text-rose-700 hover:-translate-y-0.5 hover:border-rose-500 hover:shadow-md"
                      : correct
                        ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                        : picked
                          ? "border-rose-400 bg-rose-50 text-rose-800 opacity-80"
                          : "border-outline-variant bg-surface-container-low text-outline opacity-50"
                  }`}
                >
                  <MaterialIcon name={v ? "thumb_up" : "thumb_down"} fill className="text-[26px]" />
                  {v ? "True" : "False"}
                </button>
              );
            })}
          </div>
          {choice !== null && (
            <div className="mt-4">
              {choice !== q.answer && (
                <p className="mb-3 rounded-lg bg-amber-50 p-3 text-body-md text-amber-900">
                  Actually, the answer is <b>{q.answer ? "true" : "false"}</b> — and here is the part that matters: why?
                </p>
              )}
              <p className="mb-2 text-label-md font-bold text-primary">Why?</p>
              <div className="space-y-2">
                {q.reasons.map((r, i) => {
                  const picked = reason === i;
                  const correct = i === q.correctReason;
                  return (
                    <button
                      key={i}
                      disabled={reason !== null}
                      onClick={() => { setReason(i); settle(choice === q.answer && i === q.correctReason); }}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-body-md transition-colors ${
                        reason === null
                          ? "border-outline-variant bg-surface-container-lowest hover:border-secondary"
                          : correct
                            ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                            : picked
                              ? "border-rose-400 bg-rose-50 text-rose-900"
                              : "border-outline-variant opacity-60"
                      }`}
                    >
                      <span className="font-bold">({LETTERS[i]})</span>
                      <span className="flex-1">{r}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {/* Immediate feedback — the explanation IS the teaching. */}
      {revealed && (
        <div className="animate-fade-up mt-4">
          <p className={`mb-2 flex items-center gap-2 text-label-md font-black ${gotIt ? "text-emerald-600" : "text-[#c8102e]"}`}>
            <MaterialIcon name={gotIt ? "celebration" : "school"} fill className="text-[20px]" />
            {gotIt ? praiseFor(praiseIdx) : "Good try — here's the part that matters:"}
          </p>
          {q.format === "single" && choice !== q.correct && wrongText(choice) && (
            <p className="mb-2 rounded-xl bg-rose-50 p-stack-md text-body-md leading-relaxed text-rose-900">
              {wrongText(choice)}
            </p>
          )}
          {(q.format === "tf" ? q.feedback : q.general) && (
            <p className="rounded-xl bg-surface-container-low p-stack-md text-body-md leading-relaxed text-on-surface">
              {q.format === "tf" ? q.feedback : q.general}
            </p>
          )}
          <button
            onClick={next}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
          >
            {isLast ? "Finish" : "Next question"} <MaterialIcon name="arrow_forward" />
          </button>
        </div>
      )}
    </div>
  );
}

// ── The page ────────────────────────────────────────────────────────────────
export default function PathwayModulePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { modules, allPathwayModules, completeModule } = useCourse();
  const module = allPathwayModules.find((m) => m.id === id);
  const [screen, setScreen] = useState(0);
  const [phase, setPhase] = useState("read"); // read | quiz | failed | done
  const [quizKey, setQuizKey] = useState(0); // bumped on retry
  const [lastHits, setLastHits] = useState(0); // this attempt's right answers
  const [perfect, setPerfect] = useState(false); // 8/8 first taps

  const assigned = useMemo(() => modules.some((m) => m.id === id), [modules, id]);
  const nextModule = useMemo(() => {
    const i = modules.findIndex((m) => m.id === id);
    return i >= 0 ? modules[i + 1] : null;
  }, [modules, id]);

  if (!module) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-3 text-center">
        <MaterialIcon name="search_off" className="text-5xl text-outline" />
        <p className="text-body-lg text-on-surface-variant">This module does not exist.</p>
        <Link to="/" className="rounded-lg bg-primary px-6 py-3 text-label-md text-on-primary">Back to the pathway</Link>
      </div>
    );
  }
  if (!assigned || !isUnlocked(allPathwayModules, module)) {
    const welcomeDone = allPathwayModules
      .filter((m) => m.block === "welcome")
      .every((m) => m.status === "completed");
    const gateText = !assigned
      ? "This role module is not part of your assignment."
      : module.block === "welcome"
        ? "Start with the word from our Managing Director — it takes a minute."
        : !welcomeDone
          ? "Start with the welcome block — the word from our Managing Director, then three short screens."
          : module.block === "core"
            ? "Finish the previous module first — the core pathway runs in order."
            : "Your role modules open once the five core modules are done.";
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-3 text-center">
        <MaterialIcon name="lock" className="text-5xl text-outline" />
        <p className="text-body-lg text-on-surface-variant">{gateText}</p>
        <Link to="/" className="rounded-lg bg-primary px-6 py-3 text-label-md text-on-primary">Back to the pathway</Link>
      </div>
    );
  }

  const s = module.screens[screen];
  const total = module.screens.length;
  const isLastScreen = screen === total - 1;
  const hasQuiz = module.quiz.length > 0;

  // No quiz (the welcome): finish directly. With a quiz: 75% to pass —
  // fail is friendly, teaches, and offers unlimited retries.
  function finishModule(hits = null) {
    const quizLen = module.quiz.length;
    if (quizLen > 0 && hits !== null) {
      setLastHits(hits);
      if (hits < passNeededFor(module.quiz)) {
        setPhase("failed");
        return;
      }
      setPerfect(hits === quizLen);
    }
    if (module.status !== "completed") completeModule(module.id);
    setPhase("done");
  }

  return (
    <div className="mx-auto max-w-[760px] px-margin-mobile py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <button onClick={() => navigate("/")} className="flex items-center gap-1 text-label-md font-semibold text-on-surface-variant hover:text-primary">
          <MaterialIcon name="arrow_back" /> Pathway
        </button>
        <span className="rounded-full bg-primary-container px-3 py-1 text-caption font-bold uppercase tracking-widest text-white">
          {module.code} · {module.block === "core" ? "Core" : module.block === "role" ? "Role module" : "Welcome"}
        </span>
      </div>
      <h1 className="text-headline-lg leading-tight text-primary">{module.title}</h1>
      <p className="mb-5 mt-1 text-caption text-on-surface-variant">{module.subtitle}</p>

      {/* Progress dots */}
      {phase === "read" && (
        <div className="mb-6 flex items-center gap-1.5">
          {module.screens.map((_, i) => (
            <button
              key={i}
              onClick={() => i <= screen && setScreen(i)}
              className={`h-1.5 rounded-full transition-all ${i === screen ? "w-8 bg-secondary" : i < screen ? "w-4 bg-secondary/50" : "w-4 bg-surface-container-highest"}`}
              aria-label={`Screen ${i + 1}`}
            />
          ))}
          <span className="ml-2 text-caption text-on-surface-variant">
            Screen {screen + 1} of {total}
          </span>
        </div>
      )}

      <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-sm">
        {module.support && <SupportBanner />}

        {phase === "read" && s.md && (
          <div key={screen} className="animate-fade-up">
            <div className="mb-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <MdPortrait src={s.portrait} name={s.name} />
              <div>
                <p className="text-caption font-bold uppercase tracking-[0.2em] text-secondary">{s.heading}</p>
                <p className="mt-1 text-headline-md font-black leading-tight text-primary">{s.name}</p>
                <p className="text-caption text-on-surface-variant">{s.role}</p>
              </div>
            </div>
            <div className="rounded-2xl border-l-4 border-secondary-container bg-surface-container-low p-stack-lg">
              {s.body.map((p, i) => (
                <p key={i} className={`mb-3 leading-relaxed text-on-surface last:mb-0 ${i === 0 ? "text-body-lg font-semibold" : "text-body-lg"}`}>
                  {p}
                </p>
              ))}
              <p className="mt-5 text-body-lg font-black text-primary">— {s.name}</p>
              <p className="text-caption text-on-surface-variant">{s.role}</p>
            </div>
            <Takeaway text={s.takeaway} />
            <div className="mt-8 flex items-center justify-end">
              {isLastScreen ? (
                <button
                  onClick={finishModule}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  Thank you — continue <MaterialIcon name="arrow_forward" />
                </button>
              ) : (
                <button
                  onClick={() => setScreen(screen + 1)}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  Continue <MaterialIcon name="arrow_forward" />
                </button>
              )}
            </div>
          </div>
        )}

        {phase === "read" && !s.md && (
          <div key={screen} className="animate-fade-up">
            <h2 className="mb-4 text-headline-md leading-snug text-primary">{s.heading}</h2>
            {s.body?.map((p, i) => (
              <p key={i} className="mb-3 text-body-lg leading-relaxed text-on-surface">
                {p}
              </p>
            ))}
            {s.photo && (
              <img
                src={s.photo}
                alt={s.heading}
                loading="lazy"
                className="mt-4 aspect-[21/9] w-full rounded-2xl object-cover shadow-sm"
              />
            )}
            {s.trades && <WhereYouComeIn lines={s.trades} />}
            <JargonBuster items={s.jargon} />
            <Takeaway text={s.takeaway} />

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setScreen(Math.max(0, screen - 1))}
                disabled={screen === 0}
                className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-label-md font-semibold text-on-surface-variant hover:text-primary disabled:opacity-30"
              >
                <MaterialIcon name="arrow_back" /> Back
              </button>
              {!isLastScreen ? (
                <button
                  onClick={() => setScreen(screen + 1)}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  Continue <MaterialIcon name="arrow_forward" />
                </button>
              ) : hasQuiz ? (
                <button
                  onClick={() => setPhase("quiz")}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  {module.quiz.length} quick questions <MaterialIcon name="arrow_forward" />
                </button>
              ) : (
                <button
                  onClick={finishModule}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  {module.id === "w" ? "Start the pathway" : module.block === "welcome" ? "Thank you — continue" : "Finish"} <MaterialIcon name="check" />
                </button>
              )}
            </div>
          </div>
        )}

        {phase === "quiz" && (
          <LightQuiz key={quizKey} module={module} onDone={finishModule} />
        )}

        {phase === "failed" && (
          <div className="animate-fade-up py-6 text-center">
            <MaterialIcon name="restart_alt" className="text-6xl text-secondary" />
            <h2 className="mt-3 text-headline-md text-primary">
              {lastHits} out of {module.quiz.length} — almost there
            </h2>
            <p className="mx-auto mt-2 max-w-md text-body-md text-on-surface-variant">
              You need {passNeededFor(module.quiz)} of {module.quiz.length} to pass. No penalty, no limit —
              have another look at the screens or jump straight back in. The questions all come from what you just read.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => { setQuizKey((k) => k + 1); setPhase("quiz"); }}
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
              >
                <MaterialIcon name="refresh" /> Try again
              </button>
              <button
                onClick={() => { setScreen(0); setPhase("read"); }}
                className="rounded-xl border border-outline-variant px-6 py-3 text-label-md font-semibold text-on-surface hover:border-primary"
              >
                Reread the module
              </button>
            </div>
          </div>
        )}

        {phase === "done" && (
          <div className="animate-fade-up relative py-6 text-center">
            <Confetti />
            <MaterialIcon name="check_circle" fill className="animate-pop text-6xl text-emerald-500" />
            <h2 className="mt-3 text-headline-md text-primary">
              {module.block === "welcome" ? "You're set." : `${module.title} — done`}
            </h2>
            {hasQuiz && (
              <p className="mx-auto mt-1 text-body-md font-semibold text-on-surface-variant">
                {lastHits} out of {module.quiz.length} — passed ✔
              </p>
            )}
            {perfect && (
              <p className="animate-pop mx-auto mt-2 inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-4 py-1.5 text-label-md font-black text-on-secondary-container">
                ⭐ Perfect round — {module.quiz.length} out of {module.quiz.length}, first try!
              </p>
            )}
            {module.id === "s5" && (
              <p className="mx-auto mt-2 max-w-md text-body-lg font-bold text-secondary">
                🎉 Core complete — your role modules are now open.
              </p>
            )}
            <p className="mx-auto mt-2 max-w-md text-body-md text-on-surface-variant">{module.closing}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {nextModule && (
                <button
                  onClick={() => { setScreen(0); setPhase("read"); navigate(`/pathway/${nextModule.id}`); }}
                  className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-label-md font-bold text-on-primary transition-opacity hover:opacity-90"
                >
                  Next: {nextModule.title} <MaterialIcon name="arrow_forward" />
                </button>
              )}
              <Link to="/" className="rounded-xl border border-outline-variant px-6 py-3 text-label-md font-semibold text-on-surface hover:border-primary">
                Back to the pathway
              </Link>
              {hasQuiz && (
                <button
                  onClick={() => { setQuizKey((k) => k + 1); setPhase("quiz"); }}
                  className="flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline"
                >
                  <MaterialIcon name="refresh" className="text-[18px]" /> Try the questions again
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
