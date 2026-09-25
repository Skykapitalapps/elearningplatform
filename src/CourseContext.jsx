import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { modules as referenceModules, moduleAccents, moduleImages } from "./data.js";
import { OSP_MODULES } from "./data/osp.js";
import { useAuth } from "./AuthContext.jsx";
import { supabase, isSupabaseConfigured } from "./lib/supabase.js";
import { moduleAssigned } from "./config/jobRoles.js";

const CourseContext = createContext(null);
const STORAGE_KEY = "skykapital-progress-v1";

// The pathway (Our Sustainability Pathway): welcome + core + role modules.
const seededPathway = OSP_MODULES.map((m) => ({ ...m, status: "not_started" }));

// The old reference course, now the open "Go further" library: free reading,
// always unlocked, never counted in progress or certificates.
const seededLibrary = referenceModules.map((m) => ({
  ...m,
  accent: moduleAccents[m.id],
  image: moduleImages[m.id],
  library: true,
}));

// Load saved progress and overlay it onto the current seed. We persist only
// the *progress* (status/completedOn), never content — so code edits to
// modules still take effect while a learner's progress survives.
function loadInitial(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { modules: seededPathway, acknowledgements: [] };
    const saved = JSON.parse(raw);
    const byId = saved.progress || {};
    const modules = seededPathway.map((m) =>
      byId[m.id]
        ? {
            ...m,
            status: byId[m.id].status ?? m.status,
            completedOn: byId[m.id].completedOn ?? m.completedOn,
          }
        : m
    );
    return { modules, acknowledgements: saved.acknowledgements || [] };
  } catch {
    return { modules: seededPathway, acknowledgements: [] };
  }
}

export function CourseProvider({ children }) {
  // Progress is stored PER ACCOUNT when signed in (fresh accounts start at
  // zero); the shared key is only used in local demo mode without auth.
  const { enabled: authEnabled, user, profile } = useAuth();
  // Reviewers (manager) AND administrators browse the learner side with no
  // locks: every module open — full-platform preview access.
  const reviewer =
    authEnabled && (profile?.role === "manager" || profile?.role === "admin");
  _reviewerUnlock = reviewer;
  const storageKey =
    authEnabled && user ? `skykapital-progress-${user.id}` : STORAGE_KEY;

  const initial = loadInitial(storageKey);
  const [modules, setModules] = useState(initial.modules);
  const [acknowledgements, setAcknowledgements] = useState(
    initial.acknowledgements
  );

  // Switch data when a different account signs in (or out). `loadedKey`
  // guards the persist effect below: never write state that belongs to the
  // PREVIOUS key into the new one.
  const loadedKey = useRef(storageKey);
  useEffect(() => {
    const d = loadInitial(storageKey);
    setModules(d.modules);
    setAcknowledgements(d.acknowledgements);
    loadedKey.current = storageKey;
    // Signed in: the DATABASE is the source of truth for completions —
    // records survive any device and can back real certification.
    if (authEnabled && user && isSupabaseConfigured) {
      (async () => {
        const { data: mp } = await supabase
          .from("module_progress")
          .select("*")
          .eq("user_id", user.id);
        const { data: acks } = await supabase
          .from("acknowledgements")
          .select("*")
          .eq("user_id", user.id);
        if (mp?.length)
          setModules((prev) =>
            prev.map((m) => {
              const r = mp.find((x) => x.module_id === m.id);
              if (r && r.status === "completed" && m.status !== "completed")
                return {
                  ...m,
                  status: "completed",
                  completedOn: m.completedOn ?? (r.updated_at || "").slice(0, 10),
                };
              return m;
            })
          );
        if (acks?.length)
          setAcknowledgements(
            acks.map((a) => ({
              id: a.doc_id,
              title: a.doc_title,
              name: a.signed_name,
              date: (a.signed_at || "").slice(0, 10),
            }))
          );
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();
  const toastId = useRef(0);

  // Persist whenever progress or acknowledgements change — but only once the
  // state in memory actually belongs to this key (see loadedKey above).
  useEffect(() => {
    if (loadedKey.current !== storageKey) return;
    try {
      const progress = {};
      modules.forEach((m) => {
        progress[m.id] = { status: m.status, completedOn: m.completedOn };
      });
      localStorage.setItem(
        storageKey,
        JSON.stringify({ v: 2, progress, acknowledgements })
      );
    } catch {
      /* storage unavailable — ignore */
    }
  }, [modules, acknowledgements, storageKey]);

  function showToast(message, tone = "success") {
    toastId.current += 1;
    setToast({ id: toastId.current, message, tone });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3400);
  }

  // The learner only sees the pathway modules assigned to their trade:
  // welcome + the five core modules, plus their role modules.
  const assignedModules = useMemo(
    () => modules.filter((m) => moduleAssigned(m, profile)),
    [modules, profile]
  );

  const progress = useMemo(() => {
    const mods = assignedModules;
    const completed = mods.filter((m) => m.status === "completed").length;
    const total = mods.length;
    return {
      completed,
      total,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  }, [assignedModules]);

  // Marks a pathway module complete. No score is recorded anywhere — the
  // record is that the learner went through it and answered the questions.
  function completeModule(id) {
    // Permanent record in the database (per account, tamper-resistant).
    if (authEnabled && user && isSupabaseConfigured) {
      supabase
        .from("module_progress")
        .upsert(
          { user_id: user.id, module_id: id, status: "completed" },
          { onConflict: "user_id,module_id" }
        )
        .then(() => {});
    }
    setModules((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const next = { ...m, status: "completed" };
        if (!next.completedOn)
          next.completedOn = new Date().toISOString().slice(0, 10);
        return next;
      })
    );
    const mod = modules.find((m) => m.id === id);
    showToast(`${mod ? mod.title : "Module"} — completed`);
  }

  // Records a read-and-agree acknowledgement (e-signature) for a document.
  function acknowledge({ id, title, name, date }) {
    if (authEnabled && user && isSupabaseConfigured) {
      supabase
        .from("acknowledgements")
        .upsert(
          { user_id: user.id, doc_id: id, doc_title: title, signed_name: name },
          { onConflict: "user_id,doc_id" }
        )
        .then(() => {});
    }
    setAcknowledgements((prev) => {
      if (prev.some((a) => a.id === id)) return prev; // already signed
      return [...prev, { id, title, name, date }];
    });
    showToast(`Acknowledged: ${title}`);
  }

  // Clears all progress back to the seed (handy for demos).
  function resetProgress() {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      /* ignore */
    }
    setModules(seededPathway.map((m) => ({ ...m })));
    setAcknowledgements([]);
    showToast("Progress reset");
  }

  const value = {
    modules: assignedModules,
    allPathwayModules: modules,
    libraryModules: seededLibrary,
    progress,
    reviewer,
    acknowledgements,
    completeModule,
    acknowledge,
    resetProgress,
    toast,
    showToast,
  };
  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error("useCourse must be used within CourseProvider");
  return ctx;
}

// Set by the provider when the signed-in account is a reviewer/admin.
let _reviewerUnlock = false;

// PATHWAY GATING:
//  - the welcome block (the MD's word, then the welcome) runs first, in order,
//    and nothing can be reached before it is done;
//  - core modules S1–S5 open in order once the welcome block is done;
//  - role modules open together once all five core modules are done;
//  - library modules ("Go further") are always open — free consultation.
export function isUnlocked(modules, module) {
  if (module.library) return true;
  if (_reviewerUnlock) return true;
  if (module.status === "completed") return true;
  const welcomeBlock = modules.filter((m) => m.block === "welcome");
  if (module.block === "welcome") {
    const i = welcomeBlock.findIndex((m) => m.id === module.id);
    if (i <= 0) return true;
    return welcomeBlock[i - 1].status === "completed";
  }
  const welcomeDone = welcomeBlock.every((m) => m.status === "completed");
  if (!welcomeDone) return false;
  const core = modules.filter((m) => m.block === "core");
  if (module.block === "core") {
    const i = core.findIndex((m) => m.id === module.id);
    if (i <= 0) return true;
    return core[i - 1].status === "completed";
  }
  return core.every((m) => m.status === "completed");
}

// Shared status → { label, classes } mapping so badges are consistent.
export function statusMeta(module) {
  switch (module.status) {
    case "completed":
      return {
        label: "Completed",
        pill: "bg-secondary-container text-on-secondary-container",
        icon: "check_circle",
        iconClass: "text-secondary",
      };
    case "in_progress":
      return {
        label: "In progress",
        pill: "bg-primary-container text-white",
        icon: "radio_button_checked",
        iconClass: "text-secondary",
      };
    default:
      return {
        label: "Not started",
        pill: "bg-surface-container-high text-on-surface-variant",
        icon: "lock",
        iconClass: "text-outline",
      };
  }
}
