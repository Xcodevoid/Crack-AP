// Crack AP: an adaptive AP learning system in one static page.
// Course metadata: data/catalog.js. Study guides: content/<id>.js. Concept tags and
// wrong-answer diagnoses: content/diagnostics/<id>.js. Learning engine: src/engine.js.
// build.py inlines everything into one self-contained index.html.

const app = document.getElementById("app");
const courseById = Object.fromEntries(COURSES.map((c) => [c.id, c]));
const GUIDE_IDS = COURSES.filter((c) => c.guide).map((c) => c.id);
const LETTERS = ["A", "B", "C", "D", "E"];

/* ================= Icons ================= */

const ICON_PATHS = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  cards: '<rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.3 1.3 2.8 2.5 2.8z"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M21 14v7H3V3h7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  stethoscope: '<path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3z"/>',
  sigma: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
  feather: '<path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',
  palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 0 0 0 20c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7h2A5.6 5.6 0 0 0 22 11c0-5-4.5-9-10-9z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M14.5 8.5l2 2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
};
const icon = (name, size = 18) =>
  `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;

const CAT_META = {
  "History & Social Sciences": { color: "#d97706", icon: "landmark" },
  "Math & Computer Science": { color: "#4f46e5", icon: "sigma" },
  "Sciences": { color: "#059669", icon: "flask" },
  "English": { color: "#e11d48", icon: "feather" },
  "Arts": { color: "#c026d3", icon: "palette" },
  "World Languages & Cultures": { color: "#0284c7", icon: "globe" },
  "AP Capstone": { color: "#64748b", icon: "compass" },
  "Career Kickstart": { color: "#ea580c", icon: "briefcase" },
  "SAT": { color: "#0077c8", icon: "target" },
};
// "AP" for AP courses, "SAT" for SAT: used in labels like "AP Trap" and "AP-style question".
const examOf = (courseId) => courseById[courseId]?.examName || "AP";
const catVars = (cat) => `--c:${(CAT_META[cat] || CAT_META["AP Capstone"]).color}`;
const catIcon = (cat, size = 20) => icon((CAT_META[cat] || CAT_META["AP Capstone"]).icon, size);


/* ================= Storage (per browser; one progress file per student code; see src/engine.js) ================= */

// Signed out (guest), progress lives only in memory and is gone on refresh, so the next person
// on a shared computer starts clean. Signing in with a student code saves progress under
// "apprep.v1.s.<CODE>", so students sharing a computer each keep their own.
const STORE_KEY = "apprep.v1";
const STUDENT_KEY = "apprep.student";
const EMPTY = () => ({ v: 2, q: {}, cs: {}, hist: [], diag: {}, skip: {}, expl: {}, known: {}, mine: [], frq: {}, days: [], recent: null });
const keyFor = (code) => (code ? `${STORE_KEY}.s.${code}` : STORE_KEY);
function readProgress(code) {
  try {
    const raw = localStorage.getItem(keyFor(code));
    if (raw) { const saved = JSON.parse(raw); return { ...EMPTY(), ...saved, v: saved.v || 1 }; }
  } catch (_) { /* private mode or blocked storage: start empty */ }
  return EMPTY();
}
const hasProgress = (d) => d.hist.length > 0 || Object.keys(d.q).length > 0 || Object.keys(d.known).length > 0 || d.mine.length > 0;
const store = (() => {
  let student = null;
  try {
    student = localStorage.getItem(STUDENT_KEY) || null;
    localStorage.removeItem(keyFor(null)); // older versions saved guest progress; clear it
  } catch (_) {}
  const data = student ? readProgress(student) : EMPTY();
  const save = () => {
    if (store.student) try { localStorage.setItem(keyFor(store.student), JSON.stringify(data)); } catch (_) {}
    updateMistakeCount();
  };
  // Swap in another progress file. `data` is changed in place so every reference stays valid.
  const replace = (next) => { Object.keys(data).forEach((k) => delete data[k]); Object.assign(data, EMPTY(), next); };
  return { data, save, replace, student };
})();

const today = () => new Date().toISOString().slice(0, 10);

function markStudied() {
  const d = today();
  if (!store.data.days.includes(d)) { store.data.days.push(d); store.data.days = store.data.days.slice(-400); }
}

function streak() {
  const days = new Set(store.data.days);
  const d = new Date();
  if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1); // today not studied yet: count up to yesterday
  let n = 0;
  while (days.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// Missed authored questions (generated flashcard questions only feed concept mastery).
function mistakes() {
  return Object.entries(store.data.q)
    .filter(([k, r]) => !r.c && /\|\d+$/.test(k))
    .map(([k, r]) => { const [courseId, u, q] = k.split("|"); return { key: k, courseId, unitIdx: +u, qIdx: +q, picked: r.p }; })
    .filter((m) => window.AP_CONTENT?.[m.courseId]?.units?.[m.unitIdx]?.questions?.[m.qIdx]);
}

function updateMistakeCount() {
  const el = document.getElementById("mistake-count");
  if (!el) return;
  const n = mistakes().length;
  el.hidden = n === 0;
  el.textContent = n;
}

/* ================= Helpers ================= */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// Plain-text math in the content ("e^(−t/RC)", "x^2", "v_t") → real superscripts and subscripts.
// Runs on already-escaped HTML; "_____" blanks are untouched because a subscript needs a letter before it.
function mathify(h) {
  let out = "";
  for (let i = 0; i < h.length; ) {
    if (h[i] === "^" && h[i + 1] === "(") {
      let depth = 0, j = i + 1;
      for (; j < h.length; j++) { if (h[j] === "(") depth++; else if (h[j] === ")" && --depth === 0) break; }
      if (j < h.length) { out += `<sup>${mathify(h.slice(i + 2, j))}</sup>`; i = j + 1; continue; }
    }
    out += h[i++];
  }
  return out
    .replace(/\^([−-]?(?:∞|[A-Za-z0-9]+(?:\.[0-9]+)?))/g, "<sup>$1</sup>")
    .replace(/([A-Za-zΔ\u0370-\u03ff])_([A-Za-z0-9₀-₉]+)/g, "$1<sub>$2</sub>");
}
// Content text → HTML. ```code blocks``` keep their indentation and `inline code` is monospaced;
// neither gets math formatting (so a_b or x^y in code stay as written).
const fmt = (s) => String(s ?? "").split(/```\n?([\s\S]*?)\n?```\n?/).map((part, i) =>
  i % 2 ? `<pre class="code"><code>${esc(part)}</code></pre>`
    : part.split(/`([^`\n]+)`/).map((t, j) => (j % 2 ? `<code>${esc(t)}</code>` : mathify(esc(t)).replace(/\n/g, "<br>"))).join("")
).join("");
// Like esc() but with math formatting, for text shown as HTML content (never inside attributes).
const txt = (s) => mathify(esc(s));
const bar = (pct, cls = "") => `<div class="bar ${cls}" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;
const pctOf = (m) => Math.round(m * 100);

function ring(pct, size = 56, stroke = 5, label = `${pct}%`) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-track"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-fill"
        stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    </svg><span>${label}</span></div>`;
}

// Spaced review prompt: "You learned this 5 days ago. Let's see if you still remember it."
// Captured on first display, since answering updates the concept's last-practiced time.
function memoryCheck(it, mode) {
  if (mode === "diagnostic") return "";
  if (it.memo === undefined) {
    const s = Engine.state(Engine.conceptKey(it.courseId, it.unitIdx, it.q.concept));
    const days = s.n ? Math.floor((Date.now() - s.last) / 86400000) : 0;
    it.memo = days >= 1 ? { days, weak: s.m < 0.5 } : null;
  }
  if (!it.memo) return "";
  const { days, weak } = it.memo;
  const ago = days === 1 ? "yesterday" : `${days} days ago`;
  return `<div class="memory-check">${icon("calendar", 14)} ${weak
    ? `You struggled with this concept ${ago}. Let's see if it has stuck.`
    : `You learned this ${ago}. Let's see if you still remember it.`}</div>`;
}

// Concept status chip: Not started / Needs review / Developing / Strong.
// "6 strong · 4 developing · 2 need review" for a unit or course (zero counts are left out).
function breakdown(m, cls = "") {
  const parts = [[m.strong, "strong", "strong"], [m.developing, "developing", "learning"], [m.weak, m.weak === 1 ? "needs review" : "need review", "weak"]]
    .filter(([n]) => n).map(([n, label, id]) => `<span class="bd bd-${id}"><i class="dot dot-${id}"></i>${n} ${label}</span>`);
  return parts.length ? `<span class="breakdown-line ${cls}">${parts.join("")}</span>` : "";
}

const chip = (s) => { const st = Engine.status(s); return `<span class="st st-${st.id}">${st.label}</span>`; };

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function badgesFor(c) {
  const b = [];
  if (c.guide) b.push(`<span class="badge badge-guide">${icon("zap", 12)} Adaptive</span>`);
  if (c.status === "new") b.push('<span class="badge badge-new">New course</span>');
  if (c.status === "changed") b.push('<span class="badge badge-changed">Changes for 2027</span>');
  return b.join("");
}

const weightText = (u, long) => u.weightLabel || (u.weight ? `${u.weight} of ${long ? "the " : ""}exam` : "");

// Seconds per multiple-choice question on the real exam, parsed from e.g. "45 questions · 1 hr 45 min".
function mcqPace(course) {
  const mc = course.exam.find((s) => /multiple choice/i.test(s.name));
  if (!mc) return 90;
  const q = +(mc.detail.match(/(\d+)\s*questions/) || [])[1];
  const hr = +(mc.detail.match(/(\d+)\s*hr/) || [0, 0])[1];
  const min = +(mc.detail.match(/(\d+)\s*min/) || [0, 0])[1];
  const secs = (hr * 60 + min) * 60;
  return q && secs ? Math.round(secs / q) : 90;
}

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("is-in"));
  setTimeout(() => { t.classList.remove("is-in"); setTimeout(() => t.remove(), 300); }, 2400);
}

const crumbs = (...parts) => `<nav class="crumbs">${parts.map((p, i) => (i < parts.length - 1 ? `<a href="${p[1]}">${esc(p[0])}</a> ${icon("arrowR", 12)}` : `<span>${esc(p[0])}</span>`)).join(" ")}</nav>`;

/* ================= Content loading ================= */

const loaded = {};
function loadContent(id) {
  if (!loaded[id]) {
    const pre = window.AP_CONTENT && window.AP_CONTENT[id];
    const raw = pre
      ? Promise.resolve(pre) // already inlined by build.py
      : new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = `content/${id}.js`;
          s.onload = () => resolve(window.AP_CONTENT[id]);
          s.onerror = () => reject(new Error(`Could not load study guide for ${id}`));
          document.head.appendChild(s);
        });
    loaded[id] = raw.then(async (c) => {
      if (c && c.extends) await loadContent(c.extends); // base must be tagged first (concept offsets)
      if (c) { Engine.annotate(id, c); Engine.deepen(id, c); }
      return c && c.extends ? mergeGuide(id, c) : c;
    });
  }
  return loaded[id];
}

// A guide can extend another (Calculus BC extends AB): reuse the base units with
// optional per-unit weight overrides and appended BC-only material, then add new units.
async function mergeGuide(id, raw) {
  const base = await loadContent(raw.extends);
  const units = base.units.map((u, i) => {
    const p = (raw.patches && raw.patches[i]) || {};
    // BC-only concepts sit right after the base unit's original concepts (where their questions
    // are tagged), and the base unit's extra "deep" concepts move after them.
    const pc = p.concepts || [];
    return {
      ...u,
      weight: (raw.weights && raw.weights[i]) || u.weight,
      concepts: [...u.concepts.slice(0, u.core), ...pc, ...u.concepts.slice(u.core)],
      core: u.core + pc.length,
      termOwner: u.termOwner && u.termOwner.map((ci) => (ci >= u.core ? ci + pc.length : ci)),
      terms: [...u.terms, ...(p.terms || [])],
      mistakes: [...u.mistakes, ...(p.mistakes || [])],
      questions: [...u.questions, ...(p.questions || [])],
    };
  });
  // `own` counts only material unique to this guide, so site-wide totals don't double-count.
  const own = {
    units: raw.units.length,
    questions: raw.units.reduce((n, u) => n + u.questions.length, 0) +
      Object.values(raw.patches || {}).reduce((n, p) => n + (p.questions || []).length, 0),
  };
  const merged = { ...raw, extends: undefined, own, units: [...units, ...raw.units] };
  window.AP_CONTENT[id] = merged;
  return merged;
}

const loadAllGuides = () => Promise.all(GUIDE_IDS.map((id) => loadContent(id).catch(() => null)));
const guideReady = (id) => { const c = window.AP_CONTENT && window.AP_CONTENT[id]; return c && !c.extends && c.units[0].questions[0].concept !== undefined; };

/* ================= Router ================= */

let cleanup = null;      // teardown for the current view (timers, key handlers)
let pendingFocus = [];   // concept keys handed from a diagnostic report to smart practice

async function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  closePalette();
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const section = parts[0] === "course" && parts[1] === "sat" ? "sat" : parts[0] === "course" || !parts[0] ? "home" : parts[0] === "practice" ? "today" : parts[0];
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("is-active", a.dataset.nav === section));
  try {
    await loadAllGuides();
    Engine.migrate();
    if (parts[0] === "course" && courseById[parts[1]]) {
      const course = courseById[parts[1]];
      if (parts[2] === "unit" && parts[4] === "check") renderUnitCheck(course, +parts[3] - 1);
      else if (parts[2] === "unit") {
        await renderUnit(course, +parts[3] - 1, parts[4] || "learn");
        const target = parts[5] != null && document.getElementById(`concept-${parts[5]}`);
        if (target) { target.scrollIntoView({ block: "start" }); target.classList.add("is-flash"); }
      }
      else if (parts[2] === "quiz") await renderQuizSetup(course);
      else if (parts[2] === "diagnostic") renderDiagnostic(course);
      else if (parts[2] === "smart") renderSmart([course.id], `Smart practice · ${course.name}`, course);
      else await renderCourse(course);
    } else if (parts[0] === "practice" && parts[1] === "concept" && courseById[parts[2]]) {
      renderConceptPractice(parts[2], +parts[3], +parts[4]);
    } else if (parts[0] === "practice" && parts[1] === "review") {
      const active = GUIDE_IDS.filter((id) => Engine.due([id]).length);
      renderSmart(active.length ? active : GUIDE_IDS, "Today's review");
    } else if (parts[0] === "today") {
      renderToday();
    } else if (parts[0] === "review") {
      renderReview();
    } else if (parts[0] === "dashboard") {
      renderDashboard();
    } else if (parts[0] === "support") {
      renderSupport();
    } else {
      renderHome();
    }
  } catch (err) {
    console.error(err);
    app.innerHTML = `<div class="page"><div class="card empty"><h2>Something went wrong</h2><p>${esc(err.message)}</p><a class="btn" href="#/">Back to courses</a></div></div>`;
  }
  window.scrollTo(0, 0);
}


/* ================= Home ================= */

const homeState = { query: "", cat: "All" };

function renderHome() {
  document.title = "Crack AP | Find what you don't know. Fix it. Keep it.";
  const days = Math.ceil((new Date(EXAM_WINDOW.start + "T08:00:00") - new Date()) / 86400000);
  const active = GUIDE_IDS.filter((id) => Engine.concepts(id).some((c) => c.s.n));
  const totalQ = GUIDE_IDS.reduce((n, id) => { const c = window.AP_CONTENT[id]; return n + (c.own ? c.own.questions : c.units.reduce((a, u) => a + u.questions.length, 0)); }, 0);
  const plan = active.length ? Engine.studyPlan(12, active) : null;

  app.innerHTML = `
    <section class="hero">
      <div class="page hero-inner">
        <div class="hero-copy">
          ${days > 0 ? `<div class="eyebrow">${icon("clock", 14)} <b>${days} days</b> until AP Exams · May 3–14, 2027</div>` : ""}
          <h1>Stop rereading.<br><span class="grad">Find what you actually don't know.</span></h1>
          <p class="lead">Not a textbook. A personal AP coach that tests you, finds your weak concepts, explains
          <em>why</em> you're getting them wrong, and tells you exactly what to study next.</p>
          <div class="btn-row hero-ctas">
            ${active.length
              ? `<a class="btn btn-primary btn-xl" href="#/today">${icon("zap", 20)} What should I study today?</a>
                 <button class="btn btn-lg" data-pick-diagnostic>${icon("stethoscope", 18)} New diagnostic</button>`
              : `<button class="btn btn-primary btn-xl" data-pick-diagnostic>${icon("stethoscope", 20)} Start diagnostic</button>
                 <button class="btn btn-lg" data-pick-learn>${icon("book", 18)} Skip it: learn concepts</button>`}
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="mock mock-q1">
            <div class="mock-top">${catIcon("History & Social Sciences", 14)} AP Microeconomics · Unit 2</div>
            <div class="mock-q">Incomes rise and pizza is a normal good. In the pizza market:</div>
            <div class="mock-choice is-wrong">${icon("x", 14)} Quantity demanded rises along the curve</div>
            <div class="mock-why"><b>⚠️ AP Trap:</b> a change in quantity demanded is NOT a change in demand.</div>
          </div>
          <div class="mock mock-weak">
            <div class="mock-top warn">${icon("target", 14)} Weak concept detected</div>
            <div class="mock-term">Shifts vs. movements</div>
            <div class="mock-def">3 targeted questions · mastery 34% → 81%</div>
          </div>
          <div class="mock mock-review">${icon("calendar", 18)}<div><b>Review scheduled</b><span>in 3 days, so it sticks</span></div></div>
        </div>
      </div>
      <div class="page loop-strip">
        <div class="loop-step"><div class="loop-ico">${icon("stethoscope", 22)}</div><b>Test what you know</b><span>A quick 12-question check or a full diagnostic of up to 50 questions</span></div>
        <div class="loop-arrow">${icon("arrowR", 20)}</div>
        <div class="loop-step"><div class="loop-ico">${icon("target", 22)}</div><b>Find your weak concepts</b><span>Concept by concept, with the misconception behind each miss</span></div>
        <div class="loop-arrow">${icon("arrowR", 20)}</div>
        <div class="loop-step"><div class="loop-ico">${icon("zap", 22)}</div><b>Practice them</b><span>Targeted questions, AP traps, and review before you forget</span></div>
        <div class="loop-arrow">${icon("arrowR", 20)}</div>
        <div class="loop-step"><div class="loop-ico">${icon("chart", 22)}</div><b>Track mastery</b><span>Real mastery per concept, not "pages completed"</span></div>
      </div>
    </section>

    <div class="page">
      ${plan ? `
        <a class="card today-cta" href="#/today">
          <div class="nb-ico">${icon("zap", 22)}</div>
          <div class="grow"><div class="overline">What should I study today?</div>
            <h2>Your ${plan.minutes}-minute personalized review is ready</h2>
            <p class="muted">${plan.blocks.map((b) => `${b.count} ${REASON_LABEL[b.reason].short}`).join(" · ")}</p></div>
          <span class="btn btn-primary btn-lg">Start ${icon("arrowR", 16)}</span>
        </a>` : ""}

      <div class="section-head" id="start"><h2>${active.length ? "Your courses" : "Pick a course to diagnose"}</h2>
        <span class="muted">${GUIDE_IDS.length} adaptive courses · ${totalQ} written questions + ones generated from every flashcard</span></div>
      <div class="grid">${(active.length ? [...new Set([...active, ...store.data.mine.filter((id) => GUIDE_IDS.includes(id)), ...GUIDE_IDS])] : GUIDE_IDS).map((id) => courseCard(courseById[id])).join("")}</div>

      <a class="card sat-banner" href="#/course/sat" style="${catVars("SAT")}">
        <div class="cat-icon lg">${catIcon("SAT", 28)}</div>
        <div class="grow"><div class="overline">Also here: SAT prep</div>
          <h2>Digital SAT, concept by concept</h2>
          <p class="muted">Reading and Writing plus Math, organized by the eight official content domains, with the same diagnostic, drills, mistake analysis and spaced review.</p></div>
        <span class="btn btn-primary btn-lg">Open SAT prep ${icon("arrowR", 16)}</span>
      </a>

      <div class="versus card">
        <h2>Why not just use a textbook?</h2>
        <div class="versus-grid">
          <div><div class="overline muted">A textbook</div><ul>
            <li>Here's everything. Good luck.</li><li>Same chapter for every student</li><li>Checks answers, never asks <em>why</em> you missed</li><li>"Completed 7/10 lessons"</li></ul></div>
          <div class="us"><div class="overline">Crack AP</div><ul>
            <li>${icon("check", 14)} Here's what <b>you</b> don't know yet</li><li>${icon("check", 14)} Picks what you study each day</li><li>${icon("check", 14)} Names the misconception behind every miss</li><li>${icon("check", 14)} "Elasticity: 43% → 71% mastery"</li></ul></div>
        </div>
      </div>

      <div class="section-head" id="browse"><h2>All ${AP_COURSES.length} AP courses</h2><span class="muted">Exam formats, 2027 changes and official links for every course</span></div>
      <div class="filters">
        <div class="filter-search">${icon("search", 18)}<input id="search" type="search" placeholder="Filter courses…" value="${esc(homeState.query)}" aria-label="Filter courses" /></div>
        <div class="chips" id="chips">
          ${["All", "Adaptive", ...CATEGORIES].map((c) => `<button class="chip ${homeState.cat === c ? "is-active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
      </div>
      <div id="course-results"></div>

      <a class="card home-support" href="#/support">
        <div><span class="support-ico">${icon("heart", 20)}</span><span><b>Support Crack AP.</b> <span class="muted">Found a mistake or have an idea? Tell us.</span></span></div>
        <span class="btn">Support us ${icon("arrowR", 16)}</span>
      </a>
    </div>
  `;

  const results = document.getElementById("course-results");
  const draw = () => {
    const q = homeState.query.trim().toLowerCase();
    const match = (c) =>
      (!q || c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q)) &&
      (homeState.cat === "All" || (homeState.cat === "Adaptive" ? c.guide : c.cat === homeState.cat));
    const html = CATEGORIES.map((cat) => {
      const list = AP_COURSES.filter((c) => c.cat === cat && match(c));
      return list.length ? `<h3 class="cat-title" style="${catVars(cat)}"><span class="cat-dot">${catIcon(cat, 16)}</span>${esc(cat)} <span class="muted">${list.length}</span></h3><div class="grid">${list.map(courseCard).join("")}</div>` : "";
    }).join("");
    results.innerHTML = html || `<div class="card empty"><p>No courses match "${esc(homeState.query)}".</p></div>`;
  };
  draw();

  document.getElementById("search").addEventListener("input", (e) => { homeState.query = e.target.value; draw(); });
  document.getElementById("chips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    homeState.cat = btn.dataset.cat;
    document.querySelectorAll("#chips .chip").forEach((b) => b.classList.toggle("is-active", b === btn));
    draw();
  });
}

const REASON_LABEL = {
  mistake: { short: "mistakes to redo", icon: "rotate", title: "Redo recent mistakes" },
  due: { short: "reviews due", icon: "calendar", title: "Spaced review (due today)" },
  weak: { short: "weak concepts", icon: "target", title: "Your weakest concepts" },
  focus: { short: "focus concepts", icon: "target", title: "Focus concepts" },
  new: { short: "new concepts", icon: "sparkle", title: "New concepts to try" },
  practice: { short: "to strengthen", icon: "trend", title: "Strengthen what you know" },
};

// Course picker for "Start diagnostic" and "Skip it: learn concepts".
function openDiagnosticPicker(learn = false) {
  const el = document.createElement("div");
  el.className = "palette-overlay";
  el.innerHTML = `
    <div class="palette picker" role="dialog" aria-label="Choose a course">
      <div class="picker-head"><h2>Which course are you taking?</h2><button class="icon-btn" data-close aria-label="Close">${icon("x", 18)}</button></div>
      <p class="muted">${learn
        ? "Start with Unit 1's concepts. Your mastery builds as you practice, and you can take the diagnostic any time."
        : "Choose a quick check (12 questions) or a full diagnostic (up to 50 questions across every unit). At the end you'll see exactly which concepts you understand, and which ones to fix first."}</p>
      <div class="picker-grid">${GUIDE_IDS.map((id) => {
        const c = courseById[id];
        return `<a class="picker-item" href="#/course/${id}/${learn ? "unit/1" : "diagnostic"}" ${learn ? `data-skip-diag="${id}"` : ""} style="${catVars(c.cat)}"><span class="cat-icon sm">${catIcon(c.cat, 16)}</span><span>${esc(c.name)}</span></a>`;
      }).join("")}</div>
    </div>`;
  const close = () => { el.remove(); document.body.classList.remove("no-scroll"); document.removeEventListener("keydown", onKey); };
  const onKey = (e) => { if (e.key === "Escape") close(); };
  el.addEventListener("click", (e) => { if (e.target === el || e.target.closest("[data-close]") || e.target.closest(".picker-item")) close(); });
  document.addEventListener("keydown", onKey);
  document.body.appendChild(el);
  document.body.classList.add("no-scroll");
  el.querySelector(".picker-item").focus();
}
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-pick-diagnostic]")) openDiagnosticPicker();
  else if (e.target.closest("[data-pick-learn]")) openDiagnosticPicker(true);
  // Choosing to learn without a diagnostic: stop recommending that course's diagnostic.
  const skip = e.target.closest("[data-skip-diag]");
  if (skip) { store.data.skip[skip.dataset.skipDiag] = true; store.save(); }
});

/* ================= "What should I study today?" ================= */

const todayState = { minutes: 12, scope: "all" };

function renderToday() {
  document.title = "Study today | Crack AP";
  const active = GUIDE_IDS.filter((id) => Engine.concepts(id).some((c) => c.s.n));
  if (!active.length) {
    app.innerHTML = `
      <div class="page narrow">
        <div class="page-head"><div class="cat-icon lg">${icon("zap", 26)}</div><div><h1>What should I study today?</h1>
        <p class="muted">We plan your study time from your mistakes, mastery and review schedule. First we need to know where you stand.</p></div></div>
        <div class="card empty"><div class="empty-ico">${icon("stethoscope", 26)}</div><h3>Start with a diagnostic, or skip it</h3>
        <p class="muted">A 12-question diagnostic finds your weak concepts fastest. Or skip it and learn concept by concept: once you've answered a few questions, this page builds a personalized plan every day.</p>
        <div class="btn-row center"><button class="btn btn-primary btn-lg" data-pick-diagnostic>${icon("stethoscope", 16)} Start diagnostic</button>
        <button class="btn btn-lg" data-pick-learn>${icon("book", 16)} Skip it: learn concepts</button></div></div>
      </div>`;
    return;
  }
  if (todayState.scope !== "all" && !active.includes(todayState.scope)) todayState.scope = "all";
  const scope = todayState.scope === "all" ? active : [todayState.scope];
  const plan = Engine.studyPlan(todayState.minutes, scope);
  const week = Engine.weekStats();
  const open = Engine.mistakesIn(scope).length;
  const dueN = Engine.due(scope).length;
  const tried = scope.flatMap((id) => Engine.concepts(id)).filter((c) => c.s.n).length;

  app.innerHTML = `
    <div class="page narrow">
      <div class="page-head"><div class="cat-icon lg">${icon("zap", 26)}</div><div class="grow"><h1>What should I study today?</h1>
      <p class="muted">You don't have to decide. Tell us how much time you have.</p></div>
      <span class="muted small streak-pill">${icon("flame", 14)} ${streak()}-day streak</span></div>

      <div class="card plan-setup">
        <div class="setup-label">I have…</div>
        <div class="seg big" id="mins">${[5, 12, 20, 30].map((m) => `<button data-m="${m}" class="${todayState.minutes === m ? "is-active" : ""}">${m} min</button>`).join("")}</div>
        ${active.length > 1 ? `<div class="setup-label" style="margin-top:16px">Study…</div>
        <div class="chips" id="scope">${[["all", "All my courses"], ...active.map((id) => [id, courseById[id].name])].map(([k, label]) => `<button class="chip ${todayState.scope === k ? "is-active" : ""}" data-s="${k}">${esc(label)}</button>`).join("")}</div>` : ""}
      </div>

      <div class="card plan">
        <div class="plan-head"><div><div class="overline">${icon("zap", 12)} Your personalized plan</div><h2>${plan.items.length} questions · about ${plan.minutes} minutes</h2></div></div>
        <div class="plan-blocks">
          ${plan.blocks.map((b) => `
            <div class="plan-block reason-${b.reason}">
              <div class="pb-ico">${icon(REASON_LABEL[b.reason].icon, 18)}</div>
              <div class="grow"><b>${REASON_LABEL[b.reason].title}</b><span class="muted small">${b.titles.slice(0, 4).map(esc).join(" · ")}${b.titles.length > 4 ? ` · +${b.titles.length - 4} more` : ""}</span></div>
              <span class="pb-count">${b.count}</span>
            </div>`).join("")}
        </div>
        <p class="muted small plan-why">${icon("bulb", 14)} Built from your ${open} open mistake${open === 1 ? "" : "s"}, ${dueN} review${dueN === 1 ? "" : "s"} due, and mastery on ${tried} concept${tried === 1 ? "" : "s"}. ${week.answered} questions answered this week.</p>
        <button class="btn btn-primary btn-xl btn-block" id="go">${icon("play", 18)} Start my ${plan.minutes}-minute review</button>
      </div>
    </div>`;
  app.querySelectorAll("[data-m]").forEach((b) => b.addEventListener("click", () => { todayState.minutes = +b.dataset.m; renderToday(); }));
  app.querySelectorAll("[data-s]").forEach((b) => b.addEventListener("click", () => { todayState.scope = b.dataset.s; renderToday(); }));
  app.querySelector("#go").addEventListener("click", () => {
    app.innerHTML = `<div class="page narrow">${crumbs(["Study today", "#/today"], [`${plan.minutes}-minute review`])}<div id="quiz-body"></div></div>`;
    runSession(document.getElementById("quiz-body"), plan.items, { title: `Your ${plan.minutes}-minute review`, mode: "smart", showSource: true, onRestart: renderToday });
  });
}

function recHref(rec) {
  if (rec.kind === "review") return "#/today";
  if (rec.kind === "concept") return `#/practice/concept/${rec.concept.courseId}/${rec.concept.unitIdx}/${rec.concept.conceptIdx}`;
  if (rec.kind === "diagnostic") return `#/course/${rec.courseId}/diagnostic`;
  if (rec.kind === "learn") return `#/course/${rec.courseId}/unit/1`;
  return `#/course/${rec.courseId}/smart`;
}

function courseCard(c) {
  const ready = c.guide && guideReady(c.id);
  const m = ready ? Engine.courseMastery(c.id) : null;
  const diag = store.data.diag[c.id];
  let foot;
  if (m && m.tried) {
    foot = `<div class="cc-mastery">
      <div class="cc-row"><span>${m.strong}/${m.total} concepts strong</span><b>${m.pct}%</b></div>${bar(m.pct)}
      ${m.due ? `<span class="due-pill">${icon("calendar", 12)} ${m.due} due</span>` : ""}</div>`;
  } else if (ready) {
    foot = `<span class="cc-cta">${icon("book", 14)} ${diag ? "Continue practice" : "Start learning"}</span><span class="meta">${m.total} concepts</span>`;
  } else {
    foot = `<div class="badges">${badgesFor(c)}</div><span class="meta">${c.units ? `${c.units.length} units` : "Exam overview"}</span>`;
  }
  const href = `#/course/${c.id}`;
  return `
    <a class="card course-card" href="${href}" style="${catVars(c.cat)}">
      <div class="course-card-top">
        <div class="cat-icon">${catIcon(c.cat)}</div>
        ${m && m.tried ? ring(m.pct, 40, 4) : ready ? `<span class="badge badge-guide">${icon("zap", 12)} Adaptive</span>` : ""}
      </div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.blurb)}</p>
      <div class="course-card-foot">${foot}</div>
    </a>`;
}

/* ================= Course overview ================= */

async function renderCourse(course) {
  document.title = `${course.name} | Crack AP`;
  const content = course.guide ? await loadContent(course.id) : null;
  const isMine = store.data.mine.includes(course.id);
  const m = content ? Engine.courseMastery(course.id) : null;
  const diag = store.data.diag[course.id];

  const weighted = course.exam.filter((x) => x.weight != null);
  const examHtml = `
    ${weighted.length ? `<div class="stack">${weighted.map((x, i) => `<span style="width:${x.weight}%;opacity:${1 - i * 0.22}" title="${esc(x.name)}: ${x.weight}%"></span>`).join("")}</div>` : ""}
    <div class="exam-rows">${course.exam.map((x) => `
      <div class="exam-row">
        <span class="swatch" style="opacity:${x.weight != null ? 1 - weighted.indexOf(x) * 0.22 : 0.25}"></span>
        <div class="grow"><div class="name">${esc(x.name)}</div><div class="detail">${esc(x.detail)}</div></div>
        <span class="pct">${x.weight != null ? `${x.weight}%` : ""}</span>
      </div>`).join("")}</div>`;

  let unitsHtml;
  if (content) {
    unitsHtml = `<div class="unit-list">${content.units.map((u, i) => {
      const um = Engine.unitMastery(course.id, i);
      const dots = u.concepts.map((c, ci) => {
        const s = Engine.state(Engine.conceptKey(course.id, i, ci));
        return `<span class="dot dot-${Engine.status(s).id}" title="${esc(c.title)}: ${Engine.status(s).label}"></span>`;
      }).join("");
      return `
        <a class="card unit-row ${um.strong === um.total ? "is-done" : ""}" href="#/course/${course.id}/unit/${i + 1}">
          <div class="unit-num">${um.strong === um.total ? icon("check", 20) : i + 1}</div>
          <div class="grow">
            <h3>${esc(u.title)}</h3>
            <div class="sub">${esc(weightText(u))} · ${u.concepts.length} concepts · ${u.questions.length} questions</div>
          </div>
          <div class="unit-state"><div class="dots">${dots}</div><span>${um.tried ? `<b>${um.pct}% mastery</b>` : "Not started"}</span>${um.tried ? breakdown(um) : ""}</div>
          ${icon("arrowR", 18)}
        </a>`;
    }).join("")}</div>
    <div class="legend"><span><i class="dot dot-strong"></i>Strong</span><span><i class="dot dot-learning"></i>Developing</span><span><i class="dot dot-weak"></i>Needs review</span><span><i class="dot dot-new"></i>Not started</span></div>`;
  } else {
    const related = course.related && courseById[course.related];
    unitsHtml = `
      <div class="card empty">
        <div class="empty-ico">${icon("book", 26)}</div>
        <h3>Adaptive study guide coming soon</h3>
        <p class="muted">We're writing concepts, practice questions and misconception notes for this course. Until then, use the official
        course and exam description linked on this page.</p>
        ${related ? `<p>Tip: <a href="#/course/${related.id}">${esc(related.name)}</a> is fully adaptive.</p>` : ""}
      </div>
      ${course.units ? `<div class="card"><h3 class="card-title">Course units</h3><ol class="plain-units">${course.units.map((u) => `<li>${esc(u)}</li>`).join("")}</ol></div>` : ""}`;
  }

  const weak = content ? Engine.weakest([course.id], 3) : [];
  app.innerHTML = `
    <section class="course-hero" style="${catVars(course.cat)}">
      <div class="page">
        ${crumbs(["Courses", "#/"], [course.cat])}
        <div class="course-hero-grid">
          <div>
            <div class="course-title-row"><div class="cat-icon lg">${catIcon(course.cat, 28)}</div><h1>${esc(course.name)}</h1></div>
            <p class="lead">${esc(course.blurb)}</p>
            <div class="badges">${badgesFor(course)}</div>
            <div class="btn-row hero-actions">
              ${content ? (diag || m.tried
                ? `<a class="btn btn-primary btn-lg" href="#/course/${course.id}/smart">${icon("zap", 16)} Smart practice</a>
                   <a class="btn btn-lg" href="#/course/${course.id}/diagnostic">${icon("stethoscope", 16)} Retake diagnostic</a>`
                : `<a class="btn btn-primary btn-lg" href="#/course/${course.id}/diagnostic">${icon("stethoscope", 16)} Take the 5-minute diagnostic</a>
                   <a class="btn btn-lg" href="#/course/${course.id}/unit/1" data-skip-diag="${course.id}">${icon("book", 16)} Skip it: learn concepts</a>`) : ""}
              <button class="btn btn-lg ${isMine ? "is-starred" : ""}" id="star">${icon("star", 16)} ${isMine ? "In my courses" : "Add to my courses"}</button>
            </div>
          </div>
          ${m ? `
          <div class="card hero-progress">
            ${ring(m.pct, 88, 8)}
            <div>
              <div class="overline">Course mastery</div>
              <div class="hp-line"><b>${m.strong}</b>/${m.total} concepts strong</div>
              <div class="hp-line"><b>${m.developing}</b> developing · <b>${m.weak}</b> need review · <b>${m.due}</b> due</div>
              ${diag ? `<div class="hp-line muted small">Diagnostic: ${diag.right}/${diag.total} on ${new Date(diag.t).toLocaleDateString()}</div>` : ""}
            </div>
          </div>` : ""}
        </div>
      </div>
    </section>

    <div class="page course-body">
      ${course.changes ? `<div class="callout callout-warn">${icon("alert", 18)}<div><strong>What's new for 2026-27</strong>${esc(course.changes)}</div></div>` : ""}
      ${weak.length ? `
        <div class="card weak-strip" style="${catVars(course.cat)}">
          <div class="overline">${icon("target", 12)} Your weakest concepts</div>
          <div class="weak-list">${weak.map((w) => `
            <a class="weak-item" href="#/practice/concept/${w.courseId}/${w.unitIdx}/${w.conceptIdx}">
              <div class="grow"><b>${esc(w.title)}</b><span class="muted small">Unit ${w.unitIdx + 1} · ${pctOf(w.s.m)}% mastery</span></div>
              <span class="btn btn-sm">Practice</span></a>`).join("")}</div>
        </div>` : ""}
      <div class="course-grid">
        <div class="course-main">
          <div class="section-head"><h2>Units</h2>${content ? `<a href="#/course/${course.id}/quiz">${icon("shuffle", 14)} Mixed quiz</a>` : ""}</div>
          ${content && content.intro ? `<p class="muted intro">${esc(content.intro)}</p>` : ""}
          ${unitsHtml}
          ${content ? chainsHtml(course.id) : ""}
        </div>
        <aside class="course-aside" style="${catVars(course.cat)}">
          <div class="card">
            <h3 class="card-title">${icon("chart", 16)} Exam at a glance</h3>
            ${examHtml}
          </div>
          ${content && content.tips ? `
          <div class="card">
            <h3 class="card-title">${icon("bulb", 16)} Exam strategy</h3>
            <ul class="tips">${content.tips.map((t) => `<li>${txt(t)}</li>`).join("")}</ul>
          </div>` : ""}
          <div class="card">
            <h3 class="card-title">${icon("external", 16)} Official resources</h3>
            <div class="link-list">
              ${course.links ? course.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${esc(label)} ${icon("external", 14)}</a>`).join("") : `
              ${course.ced ? `<a href="${course.ced}" target="_blank" rel="noopener">Course & Exam Description (PDF) ${icon("external", 14)}</a>` : ""}
              <a href="${course.page}" target="_blank" rel="noopener">AP Central course page ${icon("external", 14)}</a>
              <a href="${EXAM_WINDOW.schedule}" target="_blank" rel="noopener">2027 exam schedule ${icon("external", 14)}</a>`}
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;

  document.getElementById("star").addEventListener("click", () => {
    const i = store.data.mine.indexOf(course.id);
    if (i >= 0) store.data.mine.splice(i, 1); else store.data.mine.push(course.id);
    store.save();
    toast(i >= 0 ? "Removed from My courses" : `${icon("star", 14)} Added to My courses`);
    renderCourse(course);
  });
}


/* ================= Unit page ================= */

const TABS = [
  ["learn", "Learn", "book"],
  ["practice", "Practice", "check"],
  ["drills", "Drills", "zap"],
  ["cards", "Flashcards", "cards"],
  ["frq", "Free response", "pen"],
  ["watch", "Watch out", "alert"],
];
let conceptView = "both"; // "simple" | "both"

async function renderUnit(course, idx, tab) {
  const content = await loadContent(course.id);
  const unit = content && content.units[idx];
  if (!unit) { location.hash = `#/course/${course.id}`; return; }
  document.title = `${unit.title} | ${course.name}`;
  store.data.recent = { c: course.id, u: idx, tab, t: Date.now() };
  store.save();
  const base = `#/course/${course.id}/unit/${idx + 1}`;
  const um = Engine.unitMastery(course.id, idx);
  const cm = Engine.courseMastery(course.id);

  const sideList = content.units.map((u, i) => {
    const m = Engine.unitMastery(course.id, i);
    const done = m.strong === m.total;
    return `<a class="side-unit ${i === idx ? "is-active" : ""} ${done ? "is-done" : ""}" href="#/course/${course.id}/unit/${i + 1}">
      <span class="side-num">${done ? icon("check", 14) : i + 1}</span>
      <span class="side-title">${esc(u.title)}</span>
      ${m.tried ? `<span class="side-pct">${m.pct}%</span>` : ""}
    </a>`;
  }).join("");

  app.innerHTML = `
    <div class="page unit-layout" style="${catVars(course.cat)}">
      <aside class="unit-side">
        <a class="side-course" href="#/course/${course.id}">
          <div class="cat-icon">${catIcon(course.cat)}</div>
          <div><div class="side-course-name">${esc(course.name)}</div><div class="muted small">${cm.pct}% mastery · ${cm.strong}/${cm.total} strong</div></div>
        </a>
        ${bar(cm.pct)}
        <details class="side-details" open>
          <summary>${icon("list", 16)} All units</summary>
          <nav class="side-units">${sideList}</nav>
        </details>
        <a class="btn btn-primary btn-block" href="#/course/${course.id}/smart">${icon("zap", 16)} Smart practice</a>
        <a class="btn btn-block" href="#/course/${course.id}/quiz">${icon("shuffle", 16)} Mixed quiz</a>
      </aside>

      <section class="unit-main">
        ${crumbs(["Courses", "#/"], [course.name, `#/course/${course.id}`], [`Unit ${idx + 1}`])}
        <div class="unit-head">
          <div>
            <div class="overline">Unit ${idx + 1} · ${esc(weightText(unit, true))}</div>
            <h1>${esc(unit.title)}</h1>
          </div>
          <div class="unit-head-side">
            <div class="unit-head-stat">${ring(um.pct, 56, 5)}<div class="small muted">${um.tried ? `${um.pct}% mastery · ${um.total} concepts${breakdown(um, "stack")}` : `${um.total} concepts · not started`}</div></div>
            <a class="btn btn-primary" href="#/course/${course.id}/unit/${idx + 1}/check">${icon("stethoscope", 16)} Check this unit</a>
          </div>
        </div>
        <nav class="tabs" role="tablist">
          ${TABS.filter(([k]) => k !== "frq" || unit.frq).map(([k, label, ic]) => `<a class="tab ${k === tab ? "is-active" : ""}" href="${base}/${k}" role="tab" aria-selected="${k === tab}">${icon(ic, 16)}<span>${label}</span></a>`).join("")}
        </nav>
        <div id="tab-body" class="tab-body"></div>
        <div class="unit-nav">
          ${idx > 0 ? `<a class="nav-card" href="#/course/${course.id}/unit/${idx}"><span class="muted small">${icon("arrowL", 14)} Previous</span><b>Unit ${idx}: ${esc(content.units[idx - 1].title)}</b></a>` : "<span></span>"}
          ${idx < content.units.length - 1
            ? `<a class="nav-card next" href="#/course/${course.id}/unit/${idx + 2}"><span class="muted small">Next ${icon("arrowR", 14)}</span><b>Unit ${idx + 2}: ${esc(content.units[idx + 1].title)}</b></a>`
            : `<a class="nav-card next" href="#/course/${course.id}/smart"><span class="muted small">Finished the course? ${icon("arrowR", 14)}</span><b>Smart practice across all units</b></a>`}
        </div>
      </section>
    </div>
  `;
  if (window.innerWidth < 900) app.querySelector(".side-details").open = false;
  const body = document.getElementById("tab-body");

  if (tab === "learn") renderLearn(body, course, idx, unit);
  else if (tab === "cards") renderFlashcards(body, course, idx, unit);
  else if (tab === "drills") renderDrills(body, course, idx, unit);
  else if (tab === "practice") {
    body.innerHTML = `<p class="muted small practice-note">${icon("zap", 14)} Get one wrong and we'll pinpoint the concept, explain the misconception, and give you targeted follow-up questions.</p><div id="session"></div>`;
    runSession(body.querySelector("#session"), unit.questions.map((_, i) => Engine.item(course.id, idx, i)), {
      title: `Unit ${idx + 1} practice`, mode: "practice",
      onRestart: () => renderUnit(course, idx, "practice"),
    });
  } else if (tab === "frq" && unit.frq) renderFrq(body, course, idx, unit);
  else renderWatchOut(body, content, unit);
}

// Learn tab: Concept → Example → AP Trap → AP-style question → Explain your answer → Similar question.
function renderLearn(body, course, idx, unit) {
  const draw = () => {
    body.innerHTML = `
      <div class="tldr"><div class="tldr-ico">${icon("sparkle", 18)}</div><div><span class="label">The big idea</span>${fmt(unit.tldr)}</div></div>
      <div class="learn-bar">
        <span class="muted small">${unit.concepts.length} concepts · each one: explanation → ${examOf(course.id)} trap → try an ${examOf(course.id)}-style question</span>
        <div class="seg" role="group" aria-label="Explanation level">
          <button data-view="simple" class="${conceptView === "simple" ? "is-active" : ""}">Plain English</button>
          <button data-view="both" class="${conceptView === "both" ? "is-active" : ""}">+ Exam detail</button>
        </div>
      </div>
      <nav class="concept-index" aria-label="Concepts in this unit">
        ${unit.concepts.map((c, i) => {
          const st = Engine.status(Engine.state(Engine.conceptKey(course.id, idx, i)));
          return `<button data-jump="${i}" title="${esc(st.label)}"><span class="ci-dot st-${st.id}"></span><span class="n">${i + 1}</span>${esc(c.title)}</button>`;
        }).join("")}
      </nav>
      ${unit.concepts.map((c, i) => {
        const s = Engine.state(Engine.conceptKey(course.id, idx, i));
        return `
        <article class="card concept" id="concept-${i}">
          <div class="concept-head">
            <h3><span class="n">${i + 1}</span>${esc(c.title)}</h3>
            <span class="concept-status" data-status="${i}">${chip(s)}${s.n ? ` <span class="muted small">${pctOf(s.m)}%</span>` : ""}</span>
          </div>
          <p class="simple">${fmt(c.simple)}</p>
          <details ${conceptView === "both" ? "open" : ""}>
            <summary>Go deeper: what the exam expects</summary>
            <p>${fmt(c.detail)}</p>
          </details>
          ${c.example ? `<div class="note note-example"><b>${icon("pen", 14)} Example</b><div>${fmt(c.example)}</div></div>` : ""}
          ${c.hook ? `<div class="note note-hook"><b>${icon("bulb", 14)} Memory hook</b><div>${fmt(c.hook)}</div></div>` : ""}
          ${c.trap ? `<div class="note note-trap"><b>⚠️ ${examOf(course.id)} Trap</b><div>${fmt(c.trap)}</div></div>` : ""}
          ${connectionsHtml(course.id, idx, i)}
          <div class="explain-own" data-explain="${i}"></div>
          <div class="tryit" data-try="${i}"></div>
        </article>`;
      }).join("")}
    `;
    body.querySelectorAll("[data-view]").forEach((b) => b.addEventListener("click", () => { conceptView = b.dataset.view; draw(); }));
    body.querySelectorAll("[data-jump]").forEach((b) => b.addEventListener("click", () => {
      body.querySelector(`#concept-${b.dataset.jump}`).scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    body.querySelectorAll("[data-try]").forEach((el) => tryIt(el, course, idx, +el.dataset.try));
    body.querySelectorAll("[data-explain]").forEach((el) => explainOwn(el, course, idx, +el.dataset.explain));
  };
  draw();
}

// An inline AP-style question for one concept: answer, explain your reasoning, check, then a similar question.
function tryIt(el, course, unitIdx, conceptIdx, excludeKey = null, label = `Try an ${examOf(course.id)}-style question`) {
  let queue = Engine.conceptItems(course.id, unitIdx, conceptIdx, 6, excludeKey);
  if (!queue.length) queue = Engine.conceptItems(course.id, unitIdx, conceptIdx, 6);
  let k = 0;
  let picked = null;
  let revealed = false;
  let change = null;
  const collapsed = () => {
    el.innerHTML = `<button class="tryit-start">${icon("play", 16)} <b>${label}</b> <span class="muted small">on this concept</span></button>`;
    el.querySelector("button").addEventListener("click", () => { k = 0; drawQ(); });
  };
  const drawQ = () => {
    const it = queue[k % queue.length];
    if (!it.perm) it.perm = shuffle(it.q.choices.map((_, j) => j));
    const q = it.q;
    const ans = it.perm.indexOf(q.answer);
    const ok = picked === ans;
    el.innerHTML = `
      <div class="tryit-card">
        <div class="tryit-top"><span class="overline">${icon("target", 12)} ${examOf(course.id)}-style question ${k + 1}</span>${q.gen ? `<span class="q-source gen">${icon("cards", 12)} From flashcards</span>` : ""}</div>
        <div class="q-text">${fmt(q.q)}</div>
        <div class="choices">${it.perm.map((orig, ci) => {
          let cls = "";
          if (revealed && ci === ans) cls = "is-correct";
          else if (revealed && ci === picked) cls = "is-wrong";
          else if (!revealed && ci === picked) cls = "is-picked";
          else if (revealed) cls = "is-dim";
          return `<button class="choice" data-ci="${ci}" ${revealed ? "disabled" : ""}><span class="letter">${LETTERS[ci]}</span><span class="choice-text">${fmt(q.choices[orig])}</span></button>`.replace('class="choice"', `class="choice ${cls}"`);
        }).join("")}</div>
        ${picked !== null && !revealed ? `
          <div class="explain-box">
            <label for="why-${conceptIdx}"><b>Explain your answer</b> <span class="muted small">One sentence: why is ${LETTERS[picked]} right? Explaining it is what makes it stick.</span></label>
            <textarea id="why-${conceptIdx}" rows="2" placeholder="Because…"></textarea>
            <div class="btn-row end"><button class="btn btn-ghost" id="skip">Skip, just check</button><button class="btn btn-primary" id="check">Check my answer</button></div>
          </div>` : ""}
        ${revealed ? `
          <div class="feedback ${ok ? "good" : "bad"}">
            <div class="fb-ico">${icon(ok ? "check" : "alert", 20)}</div>
            <div class="grow"><strong>${ok ? "Correct!" : `Not quite. The answer is ${LETTERS[ans]}.`}</strong>
              ${!ok && q.why && q.why[it.perm[picked]] ? `<div class="fb-why"><span class="fb-label">Why ${LETTERS[picked]} is tempting</span><p>${fmt(q.why[it.perm[picked]])}</p></div>` : ""}
              <div class="fb-why"><span class="fb-label">Explanation</span><p>${fmt(q.explain)}</p></div>
              ${change ? `<div class="mastery-line"><span class="muted small">Mastery</span> <span class="delta ${change.after >= change.before ? "up" : "down"}">${pctOf(change.before)}% ${icon("arrowR", 12)} ${pctOf(change.after)}%</span></div>` : ""}
            </div>
          </div>
          <div class="btn-row end"><button class="btn btn-ghost" id="close">Done</button><button class="btn btn-primary" id="similar">${icon("shuffle", 16)} Similar question</button></div>` : ""}
      </div>`;
    el.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => { if (revealed) return; picked = +b.dataset.ci; drawQ(); el.querySelector("textarea")?.focus(); }));
    const check = () => {
      revealed = true;
      change = Engine.record(it, it.perm[picked], picked === ans);
      drawQ();
      const s = Engine.state(change.ck);
      const st = el.closest(".concept")?.querySelector("[data-status]");
      if (st) st.innerHTML = `${chip(s)} <span class="muted small">${pctOf(s.m)}%</span>`;
    };
    el.querySelector("#check")?.addEventListener("click", check);
    el.querySelector("#skip")?.addEventListener("click", check);
    el.querySelector("#similar")?.addEventListener("click", () => {
      k++; picked = null; revealed = false; change = null;
      if (k % queue.length === 0) queue = Engine.conceptItems(course.id, unitIdx, conceptIdx, 6);
      drawQ();
    });
    el.querySelector("#close")?.addEventListener("click", () => { picked = null; revealed = false; change = null; collapsed(); });
  };
  collapsed();
}

/* ================= Unit check ================= */

function renderUnitCheck(course, unitIdx) {
  const unit = window.AP_CONTENT[course.id]?.units?.[unitIdx];
  if (!unit) { location.hash = `#/course/${course.id}`; return; }
  document.title = `Unit ${unitIdx + 1} check | ${course.name}`;
  const items = Engine.unitCheck(course.id, unitIdx);
  const crumb = crumbs(["Courses", "#/"], [course.name, `#/course/${course.id}`], [`Unit ${unitIdx + 1}`, `#/course/${course.id}/unit/${unitIdx + 1}`], ["Unit check"]);
  app.innerHTML = `
    <div class="page narrow" style="${catVars(course.cat)}">
      ${crumb}
      <div class="card diag-intro">
        <div class="cat-icon lg">${icon("stethoscope", 28)}</div>
        <h1>Unit ${unitIdx + 1} check: ${esc(unit.title)}</h1>
        <p class="lead">${items.length} questions, two per concept, about ${Math.round(items.length * Engine.MIN_PER_QUESTION)} minutes. At the end you'll see which of the ${unit.concepts.length} concepts you understand, and get a short review built around the ones you don't.</p>
        <button class="btn btn-primary btn-lg" id="go">${icon("play", 16)} Start unit check</button>
      </div>
    </div>`;
  app.querySelector("#go").addEventListener("click", () => {
    app.innerHTML = `<div class="page narrow" style="${catVars(course.cat)}">${crumb}<div id="quiz-body"></div></div>`;
    runSession(document.getElementById("quiz-body"), items, { title: "Unit check", mode: "diagnostic", courseId: course.id, unitIdx, showSource: false });
  });
}

function renderFlashcards(body, course, idx, unit) {
  const cardKey = (t) => `${course.id}|${idx}|${t}`;
  let order = unit.terms.map((_, i) => i);
  let pos = 0;
  let flipped = false;

  const draw = () => {
    const known = unit.terms.filter(([t]) => store.data.known[cardKey(t)]).length;
    const [term, def] = unit.terms[order[pos]];
    const isKnown = !!store.data.known[cardKey(term)];
    body.innerHTML = `
      <div class="flash-wrap">
        <div class="flash-meta"><span>Card <b>${pos + 1}</b> of ${order.length}</span><span>${known}/${unit.terms.length} known</span></div>
        ${bar(Math.round((known / unit.terms.length) * 100))}
        <div class="flashcard ${flipped ? "is-flipped" : ""}" id="fc" tabindex="0" role="button" aria-label="Flip card">
          <div class="flashcard-inner">
            <div class="flash-face front">${isKnown ? `<span class="known-tag">${icon("check", 12)} Known</span>` : ""}<div class="term">${txt(term)}</div><div class="hint">Click or press Space to flip</div></div>
            <div class="flash-face back"><div class="def">${txt(def)}</div><div class="hint">${txt(term)}</div></div>
          </div>
        </div>
        <div class="flash-controls">
          <button class="btn btn-icon" id="prev" ${pos === 0 ? "disabled" : ""} aria-label="Previous card">${icon("arrowL")}</button>
          <button class="btn btn-bad" id="learning">Still learning</button>
          <button class="btn btn-good" id="gotit">${icon("check", 16)} Got it</button>
          <button class="btn btn-icon" id="next" ${pos === order.length - 1 ? "disabled" : ""} aria-label="Next card">${icon("arrowR")}</button>
        </div>
        <div class="flash-controls secondary">
          <button class="btn btn-ghost" id="shuffle">${icon("shuffle", 16)} Shuffle</button>
          <button class="btn btn-ghost" id="unknown">${icon("target", 16)} Only cards I don't know</button>
        </div>
        <p class="kbd-hint"><kbd>Space</kbd> flip · <kbd>←</kbd> <kbd>→</kbd> move</p>
      </div>
      <div class="card term-card">
        <h3 class="card-title">${icon("list", 16)} All terms in this unit</h3>
        <table class="term-table">
          ${unit.terms.map(([t, d]) => `<tr><td>${store.data.known[cardKey(t)] ? `<span class="known">${icon("check", 14)}</span>` : ""}${txt(t)}</td><td>${txt(d)}</td></tr>`).join("")}
        </table>
      </div>
    `;
    const fc = body.querySelector("#fc");
    fc.addEventListener("click", () => { flipped = !flipped; fc.classList.toggle("is-flipped", flipped); });
    body.querySelector("#prev").addEventListener("click", () => move(-1));
    body.querySelector("#next").addEventListener("click", () => move(1));
    body.querySelector("#gotit").addEventListener("click", () => mark(true));
    body.querySelector("#learning").addEventListener("click", () => mark(false));
    body.querySelector("#shuffle").addEventListener("click", () => { order = shuffle(order); pos = 0; flipped = false; draw(); toast("Cards shuffled"); });
    body.querySelector("#unknown").addEventListener("click", () => {
      const rest = unit.terms.map((_, i) => i).filter((i) => !store.data.known[cardKey(unit.terms[i][0])]);
      if (!rest.length) { toast("You know every card in this unit. Nice work!"); return; }
      order = rest; pos = 0; flipped = false; draw();
    });
  };
  const move = (d) => { pos = Math.max(0, Math.min(order.length - 1, pos + d)); flipped = false; draw(); };
  const mark = (isKnown) => {
    const k = cardKey(unit.terms[order[pos]][0]);
    if (isKnown) store.data.known[k] = true; else delete store.data.known[k];
    markStudied();
    store.save();
    if (pos < order.length - 1) move(1); else { flipped = false; draw(); }
  };
  const onKey = (e) => {
    if (e.target.matches("input, textarea") || paletteOpen()) return;
    if (e.key === " " && e.target.matches("button, a")) return; // native activation already handles it
    if (e.key === " ") { e.preventDefault(); flipped = !flipped; body.querySelector("#fc")?.classList.toggle("is-flipped", flipped); }
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
  };
  document.addEventListener("keydown", onKey);
  cleanup = () => document.removeEventListener("keydown", onKey);
  draw();
}

function renderFrq(body, course, idx, unit) {
  if (!unit.frq) { body.innerHTML = `<div class="card empty"><p class="muted">No free-response practice for this unit yet.</p></div>`; return; }
  const key = `${course.id}|${idx}`;
  const saved = store.data.frq[key] || { text: "", checked: [], shown: false };
  body.innerHTML = `
    <div class="frq">
      <div class="card">
        <div class="overline">Free-response practice</div>
        <div class="frq-prompt">${fmt(unit.frq.prompt)}</div>
        <textarea id="frq-text" placeholder="Write your answer the way you would on the exam…">${esc(saved.text)}</textarea>
        <div class="frq-foot">
          <span class="muted small" id="frq-saved">${saved.text ? (store.student ? "Saved in this browser" : "Kept until you refresh (sign in to save)") : store.student ? "Your answer saves automatically" : "Sign in to save your answer"}</span>
          <div class="btn-row">
            <button class="btn btn-ghost" id="clear">Clear</button>
            <button class="btn btn-primary" id="reveal">${saved.shown ? "Hide" : "Show"} scoring guide</button>
          </div>
        </div>
      </div>
      <div class="card rubric-card" id="rubric" ${saved.shown ? "" : "hidden"}>
        <div class="rubric-head"><h3 class="card-title">${icon("check", 16)} Scoring guide</h3><span class="score-pill" id="frq-score"></span></div>
        <p class="muted small">Check off each point your answer earned. Be honest: this is how you find what to fix.</p>
        <ul class="rubric">
          ${unit.frq.points.map((p, i) => `<li><label><input type="checkbox" data-i="${i}" ${saved.checked[i] ? "checked" : ""}/> <span>${fmt(p)}</span></label></li>`).join("")}
        </ul>
      </div>
    </div>`;
  const persist = () => { store.data.frq[key] = saved; store.save(); };
  const score = () => {
    const n = unit.frq.points.filter((_, i) => saved.checked[i]).length;
    body.querySelector("#frq-score").textContent = `${n} / ${unit.frq.points.length} points`;
  };
  score();
  let typingTimer;
  body.querySelector("#frq-text").addEventListener("input", (e) => {
    saved.text = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => { markStudied(); persist(); body.querySelector("#frq-saved").textContent = store.student ? "Saved in this browser" : "Kept until you refresh (sign in to save)"; }, 400);
  });
  body.querySelector("#reveal").addEventListener("click", (e) => {
    saved.shown = !saved.shown; persist();
    body.querySelector("#rubric").hidden = !saved.shown;
    e.currentTarget.textContent = `${saved.shown ? "Hide" : "Show"} scoring guide`;
  });
  body.querySelector("#clear").addEventListener("click", () => {
    if (!confirm("Clear your answer and checkmarks for this question?")) return;
    delete store.data.frq[key]; store.save(); renderFrq(body, course, idx, unit);
  });
  body.querySelectorAll(".rubric input").forEach((cb) => cb.addEventListener("change", () => {
    saved.checked[+cb.dataset.i] = cb.checked; persist(); score();
  }));
}

function renderWatchOut(body, content, unit) {
  body.innerHTML = `
    <div class="card">
      <h3 class="card-title">${icon("alert", 16)} Common mistakes in this unit</h3>
      <ul class="notes-list bad">${unit.mistakes.map((m) => `<li>${txt(m)}</li>`).join("")}</ul>
    </div>
    ${content.tips ? `<div class="card">
      <h3 class="card-title">${icon("bulb", 16)} Exam strategy for this course</h3>
      <ul class="notes-list good">${content.tips.map((t) => `<li>${txt(t)}</li>`).join("")}</ul>
    </div>` : ""}
  `;
}


/* ================= Session runner: the learning loop ================= */
//
//   Question → Answer → Why (your answer vs. the right one, and the misconception behind it)
//     └─ wrong? → "Weak concept detected" → 30-second refresher → 3 targeted questions
//                 → "Concept recovered" (re-test scheduled) or "Still shaky" (back tomorrow)
//
// items: [{ courseId, unitIdx, key, q }] from Engine.item / Engine.conceptItems.
// opts: { title, mode: practice|smart|diagnostic|review|concept|quiz, pace, showSource, onRestart, onDone }

function runSession(body, items, opts = {}) {
  const mode = opts.mode || "practice";
  const adaptive = opts.adaptive ?? ["practice", "smart", "review", "quiz"].includes(mode);
  const feedback = mode !== "diagnostic";
  // Shuffle answer order on every attempt so students learn content, not letter positions.
  const prep = (it, extra = {}) => ({ ...it, ...extra, perm: shuffle(it.q.choices.map((_, k) => k)) });
  const queue = items.map((it) => prep(it));
  let i = 0;
  let picked = null;          // display index chosen for the current question
  let change = null;          // concept mastery change from Engine.record
  let stage = "question";     // question | weak | recovered
  let rem = null;             // active remediation { ck, courseId, unitIdx, conceptIdx, title, total, right, done }
  const results = [];
  const remediated = new Set();
  const startMastery = new Map(); // conceptKey -> mastery before this session
  let timeLeft = opts.pace ? opts.pace * queue.length : null;
  let timer = null;

  if (timeLeft) {
    timer = setInterval(() => {
      timeLeft--;
      const el = body.querySelector("#timer span");
      if (el) { el.textContent = fmtTime(timeLeft); el.parentElement.classList.toggle("is-low", timeLeft <= 30); }
      if (timeLeft <= 0) { clearInterval(timer); finish(true); }
    }, 1000);
  }

  const conceptOf = (it) => {
    const u = window.AP_CONTENT[it.courseId].units[it.unitIdx];
    return { ...u.concepts[it.q.concept], idx: it.q.concept, unit: u };
  };

  const header = () => {
    const done = i + (picked !== null ? 1 : 0);
    const right = results.filter((r) => r.ok).length;
    return `
      <div class="quiz-top">
        <span class="small"><b>${Math.min(i + 1, queue.length)}</b> <span class="muted">of ${queue.length}</span></span>
        ${bar(Math.round((done / queue.length) * 100))}
        ${feedback ? `<span class="small score-live">${icon("check", 14)} ${right}</span>` : ""}
        ${timeLeft != null ? `<span class="timer" id="timer">${icon("clock", 14)}<span>${fmtTime(timeLeft)}</span></span>` : ""}
        ${mode === "diagnostic" && queue.length > 12 && results.length ? `<button class="btn btn-sm btn-ghost" id="finish-early">Finish & see report</button>` : ""}
      </div>
      ${rem && !rem.done ? `<div class="rem-banner">${icon("target", 14)} Targeted practice: <b>${esc(rem.title)}</b> · ${Math.min(rem.answered + (picked !== null && queue[i].rem ? 0 : 1), rem.total)} of ${rem.total}</div>` : ""}`;
  };

  const masteryLine = (it) => {
    if (!change) return "";
    const c = conceptOf(it);
    const up = change.after >= change.before;
    return `<div class="mastery-line">
      <span class="muted small">Concept</span> <b>${esc(c.title)}</b>
      <span class="delta ${up ? "up" : "down"}">${pctOf(change.before)}% ${icon("arrowR", 12)} ${pctOf(change.after)}%</span>
    </div>`;
  };

  const drawQuestion = () => {
    const it = queue[i];
    const { q, courseId, unitIdx, perm } = it;
    const answerPos = perm.indexOf(q.answer);
    const answered = picked !== null;
    const correct = answered && picked === answerPos;
    const course = courseById[courseId];
    const unitTitle = window.AP_CONTENT[courseId].units[unitIdx].title;
    const whyPicked = answered && !correct ? q.why && q.why[perm[picked]] : null;
    const showWeakBtn = answered && !correct && adaptive && !rem && !remediated.has(`${courseId}|${unitIdx}|${q.concept}`);

    body.innerHTML = `
      <div class="quiz">
        ${header()}
        <div class="card q-card ${it.rem ? "is-rem" : ""}">
          <div class="q-meta">
            ${opts.showSource || it.rem ? `<span class="q-source" style="${catVars(course.cat)}">${catIcon(course.cat, 14)} ${esc(course.name)} · Unit ${unitIdx + 1}${opts.showSource ? `: ${esc(unitTitle)}` : ""}</span>` : ""}
            ${q.gen ? `<span class="q-source gen">${icon("cards", 14)} From your flashcards</span>` : ""}
          </div>
          ${memoryCheck(it, mode)}
          <div class="q-text">${fmt(q.q)}</div>
          <div class="choices">
            ${perm.map((orig, ci) => {
              let cls = "";
              if (answered && feedback && ci === answerPos) cls = "is-correct";
              else if (answered && ci === picked) cls = feedback ? "is-wrong" : "is-picked";
              else if (answered) cls = "is-dim";
              return `<button class="choice ${cls}" data-ci="${ci}" ${answered ? "disabled" : ""}><span class="letter">${LETTERS[ci]}</span><span class="choice-text">${fmt(q.choices[orig])}</span></button>`;
            }).join("")}
          </div>
          ${answered && feedback ? (correct ? `
            <div class="feedback good">
              <div class="fb-ico">${icon("check", 20)}</div>
              <div class="grow"><strong>Correct!</strong><p>${fmt(q.explain)}</p>${masteryLine(it)}</div>
            </div>` : `
            <div class="feedback bad">
              <div class="fb-ico">${icon("alert", 20)}</div>
              <div class="grow">
                <div class="fb-grid">
                  <div><span class="fb-label bad">Your answer</span><div>${LETTERS[picked]}. ${fmt(q.choices[perm[picked]])}</div></div>
                  <div><span class="fb-label good">Correct</span><div>${LETTERS[answerPos]}. ${fmt(q.choices[q.answer])}</div></div>
                </div>
                ${whyPicked ? `<div class="fb-why"><span class="fb-label">What you misunderstood</span><p>${fmt(whyPicked)}</p></div>` : ""}
                <div class="fb-why"><span class="fb-label">Why ${LETTERS[answerPos]} is correct</span><p>${fmt(q.explain)}</p></div>
                ${rememberNote(it)}
                ${masteryLine(it)}
              </div>
            </div>`) : ""}
          ${answered && feedback ? `
            <div class="quiz-actions">
              ${showWeakBtn ? `<button class="btn btn-ghost" id="next">Skip</button><button class="btn btn-primary" id="weak">${icon("target", 16)} Fix this concept</button>`
                : `<button class="btn btn-primary" id="next">${i === queue.length - 1 ? "See results" : "Next question"} ${icon("arrowR", 16)}</button>`}
            </div>` : ""}
        </div>
        <p class="kbd-hint"><kbd>1</kbd>–<kbd>${q.choices.length}</kbd> answer · <kbd>Enter</kbd> ${showWeakBtn ? "fix this concept" : "next"}</p>
      </div>`;
    body.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => choose(+b.dataset.ci)));
    body.querySelector("#finish-early")?.addEventListener("click", () => { if (confirm(`Finish now? We'll grade the ${results.length} question${results.length === 1 ? "" : "s"} you've answered.`)) finish(false); });
    body.querySelector("#next")?.addEventListener("click", next);
    body.querySelector("#weak")?.addEventListener("click", () => { stage = "weak"; draw(); });
    (body.querySelector("#weak") || body.querySelector("#next"))?.focus({ preventScroll: true });
  };

  // "Weak concept detected": a 30-second refresher, then 3 targeted questions.
  const drawWeak = () => {
    const it = queue[i];
    const c = conceptOf(it);
    const s = Engine.state(Engine.conceptKey(it.courseId, it.unitIdx, c.idx));
    body.innerHTML = `
      <div class="quiz">
        <div class="card weak-card" style="${catVars(courseById[it.courseId].cat)}">
          <div class="weak-top">${icon("target", 18)} Weak concept detected</div>
          <h2>${esc(c.title)}</h2>
          <p class="muted small">${esc(courseById[it.courseId].name)} · Unit ${it.unitIdx + 1}: ${esc(c.unit.title)} · ${pctOf(s.m)}% mastery</p>
          <div class="refresher">
            <div class="overline">The 30-second version</div>
            <p>${fmt(c.simple)}</p>
            ${c.hook ? `<div class="note note-hook"><b>${icon("bulb", 14)} Memory hook</b><div>${fmt(c.hook)}</div></div>` : ""}
            ${c.example ? `<div class="note note-example"><b>${icon("pen", 14)} Example</b><div>${fmt(c.example)}</div></div>` : ""}
            <details><summary>Go deeper</summary><p>${fmt(c.detail)}</p></details>
          </div>
          <div class="quiz-actions">
            <button class="btn btn-ghost" id="skip">Skip for now</button>
            <button class="btn btn-primary" id="drill">${icon("play", 16)} Practice 3 targeted questions</button>
          </div>
        </div>
      </div>`;
    body.querySelector("#skip").addEventListener("click", () => { stage = "question"; next(); });
    body.querySelector("#drill").addEventListener("click", startRemediation);
    body.querySelector("#drill").focus({ preventScroll: true });
  };

  const startRemediation = () => {
    const it = queue[i];
    const ck = `${it.courseId}|${it.unitIdx}|${it.q.concept}`;
    const extra = Engine.conceptItems(it.courseId, it.unitIdx, it.q.concept, 3, it.key).map((x) => prep(x, { rem: true }));
    remediated.add(ck);
    rem = { ck, courseId: it.courseId, unitIdx: it.unitIdx, conceptIdx: it.q.concept, title: conceptOf(it).title, total: extra.length, answered: 0, right: 0, done: false };
    queue.splice(i + 1, 0, ...extra);
    if (timeLeft != null) timeLeft += (opts.pace || 60) * extra.length;
    stage = "question";
    next();
  };

  const drawRecovered = () => {
    const s = Engine.state(rem.ck);
    const ok = rem.right >= Math.ceil(rem.total * 0.6);
    const days = Engine.reviewInDays(s);
    body.innerHTML = `
      <div class="quiz">
        <div class="card recovered ${ok ? "good" : "bad"}">
          <div class="rec-ico">${icon(ok ? "check" : "rotate", 28)}</div>
          <h2>${ok ? "Concept recovered" : "Still shaky, and that's OK"}</h2>
          <p><b>${esc(rem.title)}</b>: ${rem.right}/${rem.total} targeted questions right · now ${pctOf(s.m)}% mastery ${chip(s)}</p>
          <p class="muted">${ok
            ? `We'll re-test it ${days <= 1 ? "tomorrow" : `in ${days} days`} so it sticks.`
            : "We'll bring it back in your next session. Reread the concept once before then."}</p>
          <div class="btn-row center">
            ${ok ? "" : `<a class="btn" href="#/course/${rem.courseId}/unit/${rem.unitIdx + 1}/learn">${icon("book", 16)} Reread the concept</a>`}
            <button class="btn btn-primary" id="cont">${i >= queue.length - 1 ? "See results" : "Continue"} ${icon("arrowR", 16)}</button>
          </div>
        </div>
      </div>`;
    body.querySelector("#cont").addEventListener("click", () => { rem = null; stage = "question"; advance(); });
    body.querySelector("#cont").focus({ preventScroll: true });
  };

  const draw = () => {
    if (stage === "weak") drawWeak(); else if (stage === "recovered") drawRecovered(); else drawQuestion();
    // Keep the new card in view when the previous one (e.g. a long explanation) left us scrolled down.
    const top = body.getBoundingClientRect().top;
    if (top < 72) window.scrollTo({ top: window.scrollY + top - 88, behavior: "smooth" });
  };

  const choose = (ci) => {
    if (picked !== null || stage !== "question") return;
    picked = ci;
    const it = queue[i];
    const ok = it.perm[ci] === it.q.answer;
    change = Engine.record(it, it.perm[ci], ok);
    if (!startMastery.has(change.ck)) startMastery.set(change.ck, change.before);
    results.push({ ...it, ok, pickedOrig: it.perm[ci] });
    if (it.rem && rem) { rem.answered++; if (ok) rem.right++; }
    if (!feedback) { setTimeout(next, 180); drawQuestion(); return; }
    draw();
  };

  // Move past the current question: show the remediation result card when a drill just ended.
  const next = () => {
    if (rem && !rem.done && queue[i].rem && (i + 1 >= queue.length || !queue[i + 1].rem)) {
      rem.done = true; stage = "recovered"; picked = null; draw(); return;
    }
    advance();
  };
  const advance = () => {
    if (i >= queue.length - 1) { finish(false); return; }
    i++; picked = null; change = null; draw();
  };

  const finish = (timedOut) => {
    if (timer) clearInterval(timer);
    document.removeEventListener("keydown", onKey);
    if (mode === "diagnostic") return renderDiagnosticReport(body, results, opts);
    const right = results.filter((r) => r.ok).length;
    const n = results.length || 1;
    const pct = Math.round((right / n) * 100);
    const touched = [...new Map(results.map((r) => [`${r.courseId}|${r.unitIdx}|${r.q.concept}`, r])).values()];
    const courses = [...new Set(results.map((r) => r.courseId))];
    const rec = Engine.recommend(courses);
    const msg = pct >= 85 ? "Excellent. These concepts are in great shape." : pct >= 60 ? "Solid progress. The concepts below that need work are already scheduled." : "Good diagnostic info. Every miss told us exactly what to practice next.";
    body.innerHTML = `
      <div class="quiz">
        <div class="card results">
          ${timedOut ? `<div class="callout callout-warn">${icon("clock", 18)}<div><strong>Time's up!</strong>Unanswered questions weren't counted.</div></div>` : ""}
          <div class="overline">${esc(opts.title || "Practice")} complete</div>
          <div class="results-score">${ring(pct, 120, 10)}<div><div class="score-big">${right}<span>/${results.length}</span></div><p>${msg}</p></div></div>
          ${mode === "concept" && touched.length ? (() => {
            const k = `${touched[0].courseId}|${touched[0].unitIdx}|${touched[0].q.concept}`;
            const b = startMastery.get(k) ?? 0, a = Engine.state(k).m;
            return `<div class="mastery-jump ${a >= b ? "up" : "down"}"><span class="muted">Mastery</span><b>${pctOf(b)}%</b>${icon("arrowR", 22)}<b>${pctOf(a)}%</b>${chip(Engine.state(k))}</div>`;
          })() : ""}
          <h3 class="card-title left">${icon("target", 16)} Mastery change by concept</h3>
          <div class="concept-results">
            ${touched.map((r) => {
              const key = `${r.courseId}|${r.unitIdx}|${r.q.concept}`;
              const s = Engine.state(key);
              const c = window.AP_CONTENT[r.courseId].units[r.unitIdx].concepts[r.q.concept];
              const before = startMastery.get(key) ?? 0;
              return `<a class="cr-row" href="#/practice/concept/${r.courseId}/${r.unitIdx}/${r.q.concept}">
                <div class="grow"><b>${esc(c.title)}</b><span class="muted small">${courses.length > 1 ? esc(courseById[r.courseId].name) + " · " : ""}Unit ${r.unitIdx + 1}</span></div>
                ${chip(s)}<span class="delta ${s.m >= before ? "up" : "down"}">${pctOf(before)}% ${icon("arrowR", 12)} ${pctOf(s.m)}%</span></a>`;
            }).join("")}
          </div>
          ${rec ? `<a class="next-step" href="${recHref(rec)}"><div class="grow"><div class="overline">${icon("zap", 12)} Recommended next</div><b>${esc(rec.title)}</b><p class="muted small">${esc(rec.reason)}</p></div>${icon("arrowR", 18)}</a>` : ""}
          <div class="btn-row center">
            ${opts.onRestart ? `<button class="btn" id="again">${icon("rotate", 16)} Go again</button>` : ""}
            ${results.some((r) => !r.ok) ? `<a class="btn" href="#/review">Review my mistakes</a>` : ""}
            <a class="btn btn-ghost" href="#/dashboard">View progress</a>
          </div>
        </div>
      </div>`;
    body.querySelector("#again")?.addEventListener("click", opts.onRestart);
    opts.onDone?.(results);
  };

  const onKey = (e) => {
    if (e.target.matches("input, textarea") || paletteOpen()) return;
    if (e.key === "Enter" && e.target.matches("button, a")) return; // native click already fires
    if (stage !== "question") return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= queue[i].q.choices.length) choose(n - 1);
    else if (e.key === "Enter" && picked !== null) (body.querySelector("#weak") || body.querySelector("#next"))?.click();
  };
  document.addEventListener("keydown", onKey);
  cleanup = () => { if (timer) clearInterval(timer); document.removeEventListener("keydown", onKey); };
  if (!queue.length) {
    body.innerHTML = `<div class="card empty"><p class="muted">No questions to practice here yet.</p></div>`;
    return;
  }
  draw();
}

const fmtTime = (s) => `${Math.floor(Math.max(0, s) / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

/* ================= Diagnostic ================= */

function renderDiagnostic(course) {
  if (!course.guide) { location.hash = `#/course/${course.id}`; return; }
  document.title = `Diagnostic | ${course.name}`;
  const units = window.AP_CONTENT[course.id].units.length;
  const concepts = Engine.concepts(course.id).length;
  const fullN = Math.min(concepts, 50);
  const crumb = crumbs(["Courses", "#/"], [course.name, `#/course/${course.id}`], ["Diagnostic"]);
  app.innerHTML = `
    <div class="page narrow" style="${catVars(course.cat)}">
      ${crumb}
      <div class="card diag-intro">
        <div class="cat-icon lg">${icon("stethoscope", 28)}</div>
        <h1>${esc(course.name)} diagnostic</h1>
        <p class="lead">No hints and no explanations until the end: we just want an honest picture of what you know.
        Every question you miss is explained in the report.</p>
        <div class="diag-choice">
          <button class="diag-opt" data-len="quick">
            <span class="overline">Quick check</span>
            <b>12 questions</b>
            <span>About 5 minutes. Samples every one of the ${units} units to find your weakest areas fast.</span>
          </button>
          <button class="diag-opt is-full" data-len="full">
            <span class="overline">${icon("star", 12)} Full diagnostic</span>
            <b>${fullN} questions</b>
            <span>About ${Math.round(fullN * 0.8)} minutes, like a real AP multiple-choice section. ${fullN === concepts ? `Tests <b>all ${concepts} concepts</b>, so nothing is left unchecked.` : `Covers <b>${fullN} of the ${concepts} concepts</b>, spread across every unit.`}</span>
          </button>
        </div>
        <p class="muted small">Need to stop partway? Use "Finish & see report" at any time and we'll grade what you've answered.</p>
        <div class="diag-skip">
          <div><b>Rather learn concept by concept?</b>
          <span class="muted small">The diagnostic is optional. Your mastery builds as you practice each concept, and you can come back to the diagnostic any time.</span></div>
          <a class="btn" href="#/course/${course.id}/unit/1" data-skip-diag="${course.id}">${icon("book", 16)} Skip: start at Unit 1</a>
        </div>
      </div>
    </div>`;
  app.querySelectorAll("[data-len]").forEach((btn) => btn.addEventListener("click", () => {
    const full = btn.dataset.len === "full";
    const items = full ? Engine.diagnostic(course.id, fullN, true) : Engine.diagnostic(course.id, 12);
    app.innerHTML = `<div class="page narrow" style="${catVars(course.cat)}">${crumb}<div id="quiz-body"></div></div>`;
    runSession(document.getElementById("quiz-body"), items, { title: full ? "Full diagnostic" : "Diagnostic", mode: "diagnostic", courseId: course.id, full, showSource: true });
  }));
}

function renderDiagnosticReport(body, results, opts) {
  const courseId = opts.courseId;
  const unitScoped = opts.unitIdx != null;
  const right = results.filter((r) => r.ok).length;
  if (!unitScoped) { store.data.diag[courseId] = { t: Date.now(), right, total: results.length, full: !!opts.full }; store.save(); }
  const byConcept = new Map();
  results.forEach((r) => {
    const key = Engine.conceptKey(r.courseId, r.unitIdx, r.q.concept);
    const e = byConcept.get(key) || { key, r, ok: 0, n: 0 };
    e.n++; if (r.ok) e.ok++;
    byConcept.set(key, e);
  });
  const tested = [...byConcept.values()];
  const strong = tested.filter((e) => e.ok === e.n);
  const weak = tested.filter((e) => e.ok < e.n).sort((a, b) => a.ok / a.n - b.ok / b.n);
  const title = (e) => window.AP_CONTENT[e.r.courseId].units[e.r.unitIdx].concepts[e.r.q.concept].title;
  const list = (arr) => { const b = arr.map((x) => `<b>${x}</b>`); return b.length <= 1 ? b.join("") : `${b.slice(0, -1).join(", ")} and ${b[b.length - 1]}`; };
  const misses = results.filter((r) => !r.ok);
  const review = weak.length ? Engine.focusedReview(weak.map((e) => e.key), 3) : [];
  const mins = Math.max(1, Math.round(review.length * Engine.MIN_PER_QUESTION));
  const scopeLabel = unitScoped ? `Unit ${opts.unitIdx + 1} concepts` : "concepts we tested";
  const allConcepts = unitScoped ? window.AP_CONTENT[courseId].units[opts.unitIdx].concepts.length : Engine.concepts(courseId).length;

  body.innerHTML = `
    <div class="quiz">
      <div class="card results diag-report">
        <div class="overline">${unitScoped ? "Unit check" : "Diagnostic"} report</div>
        <div class="verdict">
          ${ring(Math.round((strong.length / Math.max(1, tested.length)) * 100), 110, 10, `${strong.length}/${tested.length}`)}
          <div>
            <h2>You understand ${strong.length} of ${tested.length} ${scopeLabel}.</h2>
            ${weak.length
              ? `<p>You're specifically struggling with ${list(weak.slice(0, 3).map((e) => esc(title(e))))}${weak.length > 3 ? ` (+${weak.length - 3} more)` : ""}.
                 Here's a <b>${mins}-minute review</b> designed around ${weak.length === 1 ? "that weakness" : `those ${weak.length} weaknesses`}.</p>`
              : `<p>No weak spots in what we tested. ${unitScoped ? "Move on to the next unit, or" : ""} keep it fresh with smart practice.</p>`}
            ${!unitScoped && tested.length < allConcepts ? `<p class="muted small">We tested ${tested.length} of ${allConcepts} concepts. ${opts.full ? `You finished early, so ${allConcepts - tested.length} weren't tested yet. Smart practice will cover them` : "Take the full diagnostic to test all of them, or let smart practice cover the rest"}.</p>` : ""}
            <p class="muted small">${right}/${results.length} questions correct.</p>
          </div>
        </div>
        ${weak.length ? `<button class="btn btn-primary btn-xl btn-block" id="fix">${icon("zap", 18)} Start my ${mins}-minute review</button>`
          : `<a class="btn btn-primary btn-lg btn-block" href="${unitScoped && opts.unitIdx + 1 < window.AP_CONTENT[courseId].units.length ? `#/course/${courseId}/unit/${opts.unitIdx + 2}` : `#/course/${courseId}/smart`}">${icon("arrowR", 16)} ${unitScoped ? "Next unit" : "Continue with smart practice"}</a>`}

        <div class="diag-cols">
          <div class="diag-col bad"><h3>${icon("target", 16)} Needs review <span>${weak.length}</span></h3>
            ${weak.length ? weak.map((e) => `<a href="#/practice/concept/${e.r.courseId}/${e.r.unitIdx}/${e.r.q.concept}"><b>${esc(title(e))}</b><span>${e.ok}/${e.n} right</span></a>`).join("") : `<p class="muted small">Nothing! Great start.</p>`}
          </div>
          <div class="diag-col good"><h3>${icon("check", 16)} Understood <span>${strong.length}</span></h3>
            ${strong.length ? strong.map((e) => `<a href="#/course/${e.r.courseId}/unit/${e.r.unitIdx + 1}"><b>${esc(title(e))}</b><span>${e.ok}/${e.n} right</span></a>`).join("") : `<p class="muted small">We'll build these up together.</p>`}
          </div>
        </div>

        ${misses.length ? `
          <h3 class="card-title left" style="margin-top:28px">${icon("rotate", 16)} What you missed, and why</h3>
          <div class="miss-list">${misses.map((r) => missCard(r, r.pickedOrig)).join("")}</div>` : ""}
      </div>
    </div>`;
  initMissTryIts(body);
  body.querySelector("#fix")?.addEventListener("click", () => {
    const course = courseById[courseId];
    body.innerHTML = "";
    body.closest(".page").querySelector(".crumbs").insertAdjacentHTML("afterend", `<div class="session-head"><div class="cat-icon lg">${icon("zap", 26)}</div><div><h1>Your ${mins}-minute review</h1><p class="muted">Built around ${list(weak.slice(0, 3).map((e) => esc(title(e))))}. Watch your mastery climb.</p></div></div>`);
    runSession(body, review, { title: `${mins}-minute review`, mode: "smart", showSource: false, onRestart: () => { location.hash = `#/course/${course.id}`; } });
  });
}

// A missed question, analyzed in five parts: what you misunderstood, the concept behind it,
// why your answer was wrong, what to remember, and a similar question to try right away.
function missCard(r, pickedOrig, actions = "") {
  const q = r.q;
  const c = window.AP_CONTENT[r.courseId].units[r.unitIdx].concepts[q.concept];
  const s = Engine.state(Engine.conceptKey(r.courseId, r.unitIdx, q.concept));
  const why = pickedOrig != null && q.why && q.why[pickedOrig];
  const step = (n, label, body) => `<div class="ma-step"><span class="ma-n">${n}</span><div class="grow"><span class="fb-label">${label}</span>${body}</div></div>`;
  return `
    <div class="miss" style="${catVars(courseById[r.courseId].cat)}">
      <div class="miss-q">${fmt(q.q)}</div>
      <div class="fb-grid">
        ${pickedOrig != null ? `<div><span class="fb-label bad">Your answer</span><div>${fmt(q.choices[pickedOrig])}</div></div>` : ""}
        <div><span class="fb-label good">Correct</span><div>${fmt(q.choices[q.answer])}</div></div>
      </div>
      <div class="miss-analysis">
        ${why ? step(1, "What you misunderstood", `<p>${fmt(why)}</p>`) : ""}
        ${step(why ? 2 : 1, "The concept behind it", `<p><b>${esc(c.title)}</b> ${chip(s)}<br>${fmt(c.simple)}</p>`)}
        ${step(why ? 3 : 2, "Why the correct answer is right", `<p>${fmt(q.explain)}</p>`)}
        ${c.trap ? step(why ? 4 : 3, "What to remember", `<p>${fmt(c.trap)}</p>`) : ""}
      </div>
      <div class="miss-foot">
        <div class="tryit" data-try-miss="${r.courseId}|${r.unitIdx}|${q.concept}" data-exclude="${esc(r.key || "")}"></div>
        ${actions === "" ? `<div class="btn-row"><a class="btn btn-sm" href="#/practice/concept/${r.courseId}/${r.unitIdx}/${q.concept}">${icon("play", 14)} Practice 5 similar</a></div>`
          : actions.trim() ? `<div class="btn-row">${actions}</div>` : ""}
      </div>
    </div>`;
}

// "What to remember" for a question's concept (its AP trap), shown after a wrong answer.
function rememberNote(it) {
  const c = window.AP_CONTENT[it.courseId].units[it.unitIdx].concepts[it.q.concept];
  if (!c) return "";
  return `<div class="fb-why"><span class="fb-label">Concept: ${esc(c.title)}${c.trap ? " · what to remember" : ""}</span>${c.trap ? `<p>${fmt(c.trap)}</p>` : ""}</div>`;
}

// Wire up the "similar question" slots inside rendered mistake cards.
function initMissTryIts(root) {
  root.querySelectorAll("[data-try-miss]").forEach((el) => {
    const [courseId, u, c] = el.dataset.tryMiss.split("|");
    tryIt(el, courseById[courseId], +u, +c, el.dataset.exclude || null, "Try a similar question");
  });
}



/* ================= Connecting concepts ================= */

// Resolve content/links/<id>.js chains ("2:Enzymes", "powers", "2:Cellular respiration", …) to concepts.
const chainCache = {};
function courseChains(id) {
  if (chainCache[id]) return chainCache[id];
  const units = window.AP_CONTENT[id]?.units || [];
  const find = (ref) => {
    const [u, ...rest] = ref.split(":");
    const want = rest.join(":").toLowerCase();
    const list = (units[+u]?.concepts || []).map((c) => c.title.toLowerCase());
    let ci = list.indexOf(want);
    if (ci < 0) { const hits = list.map((t, i) => (t.startsWith(want) ? i : -1)).filter((i) => i >= 0); ci = hits.length === 1 ? hits[0] : -1; }
    return ci < 0 ? null : { u: +u, c: ci, title: units[+u].concepts[ci].title };
  };
  return (chainCache[id] = ((window.AP_LINKS && window.AP_LINKS[id]) || []).map((ch) => {
    const nodes = ch.chain.filter((_, i) => i % 2 === 0).map(find);
    const rels = ch.chain.filter((_, i) => i % 2 === 1);
    return nodes.every(Boolean) ? { title: ch.title, nodes, rels } : null;
  }).filter(Boolean));
}

const conceptHref = (id, n) => `#/course/${id}/unit/${n.u + 1}/learn/${n.c}`;

// "How this connects" on a concept card: the links into and out of it.
function connectionsHtml(id, u, c) {
  const rows = [];
  courseChains(id).forEach((ch) => ch.nodes.forEach((n, k) => {
    if (n.u !== u || n.c !== c) return;
    if (k > 0) rows.push({ dir: "in", other: ch.nodes[k - 1], rel: ch.rels[k - 1], chain: ch.title });
    if (k < ch.nodes.length - 1) rows.push({ dir: "out", other: ch.nodes[k + 1], rel: ch.rels[k], chain: ch.title });
  }));
  if (!rows.length) return "";
  const where = (n) => (n.u === u ? "this unit" : `Unit ${n.u + 1}`);
  return `
    <div class="connections">
      <span class="fb-label">${icon("shuffle", 12)} How this connects</span>
      ${rows.map((r) => r.dir === "out"
        ? `<a class="conn" href="${conceptHref(id, r.other)}"><span class="conn-this">This</span><span class="conn-rel">${esc(r.rel)}</span><b>${esc(r.other.title)}</b><span class="muted small">${where(r.other)}</span></a>`
        : `<a class="conn" href="${conceptHref(id, r.other)}"><b>${esc(r.other.title)}</b><span class="muted small">${where(r.other)}</span><span class="conn-rel">${esc(r.rel)}</span><span class="conn-this">this</span></a>`).join("")}
    </div>`;
}

// Course page: every chain as Concept → relationship → Concept, with each concept's mastery.
function chainsHtml(id) {
  const chains = courseChains(id);
  if (!chains.length) return "";
  const node = (n) => {
    const s = Engine.state(Engine.conceptKey(id, n.u, n.c));
    return `<a class="chain-node st-border-${Engine.status(s).id}" href="${conceptHref(id, n)}"><span class="muted small">Unit ${n.u + 1}</span><b>${esc(n.title)}</b>${s.n ? `<span class="small">${pctOf(s.m)}%</span>` : ""}</a>`;
  };
  return `
    <div class="section-head"><h2>How the ideas connect</h2></div>
    <p class="muted intro">Concepts don't live alone. Follow each chain to see how one idea causes, powers or leads to the next, across units.</p>
    <div class="chains">${chains.map((ch) => `
      <div class="card chain">
        <h3>${esc(ch.title)}</h3>
        <div class="chain-flow">${ch.nodes.map((n, k) => `${node(n)}${k < ch.rels.length ? `<span class="chain-rel">${icon("arrowR", 14)} ${esc(ch.rels[k])}</span>` : ""}`).join("")}</div>
      </div>`).join("")}</div>`;
}

/* ================= Active learning: explain it, fill in the blank, matching, sorting ================= */

// "Explain it in your own words": write, compare with the key points, then rate yourself.
function explainOwn(el, course, unitIdx, conceptIdx) {
  const unit = window.AP_CONTENT[course.id].units[unitIdx];
  const c = unit.concepts[conceptIdx];
  const key = Engine.conceptKey(course.id, unitIdx, conceptIdx);
  const owned = unit.terms.filter((_, ti) => Engine.termConcepts(course.id, unitIdx)[ti] === conceptIdx).map(([t]) => t).slice(0, 4);
  const collapsed = () => {
    el.innerHTML = `<button class="tryit-start explain-start">${icon("pen", 16)} <b>Explain it in your own words</b> <span class="muted small">then compare</span></button>`;
    el.querySelector("button").addEventListener("click", open);
  };
  const open = () => {
    el.innerHTML = `
      <div class="explain-card">
        <div class="overline">${icon("pen", 12)} Explain "${esc(c.title)}" as if teaching a friend</div>
        <textarea rows="4" placeholder="What is it, why does it matter, and how would the exam test it?">${esc(store.data.expl[key] || "")}</textarea>
        <div class="btn-row end"><button class="btn btn-ghost" data-x="close">Cancel</button><button class="btn btn-primary" data-x="compare">Compare with the key points</button></div>
      </div>`;
    const ta = el.querySelector("textarea");
    ta.focus();
    ta.addEventListener("input", () => { store.data.expl[key] = ta.value; store.save(); });
    el.querySelector('[data-x="close"]').addEventListener("click", collapsed);
    el.querySelector('[data-x="compare"]').addEventListener("click", () => compare(ta.value));
  };
  const compare = (text) => {
    const lower = text.toLowerCase();
    el.innerHTML = `
      <div class="explain-card">
        <div class="explain-cols">
          <div><span class="fb-label">You wrote</span><p>${text.trim() ? fmt(text) : `<span class="muted">(nothing yet)</span>`}</p></div>
          <div><span class="fb-label good">Key points</span><p>${fmt(c.simple)}</p><p class="small">${fmt(c.detail)}</p></div>
        </div>
        ${owned.length ? `<div class="explain-terms"><span class="fb-label">Did you use these ideas?</span>${owned.map((t) => {
          const hit = lower.includes(t.toLowerCase().replace(/\s*\(.*?\)\s*/g, "").trim());
          return `<span class="xterm ${hit ? "is-hit" : ""}">${icon(hit ? "check" : "x", 12)} ${esc(t)}</span>`;
        }).join("")}</div>` : ""}
        <span class="fb-label">How did you do?</span>
        <div class="btn-row">
          <button class="btn btn-good" data-rate="good">${icon("check", 16)} I explained it well</button>
          <button class="btn" data-rate="part">Partly</button>
          <button class="btn btn-bad" data-rate="miss">I missed key ideas</button>
        </div>
      </div>`;
    el.querySelectorAll("[data-rate]").forEach((b) => b.addEventListener("click", () => {
      const r = b.dataset.rate;
      if (r !== "part") Engine.recordExplain(course.id, unitIdx, conceptIdx, r === "good");
      const s = Engine.state(key);
      el.innerHTML = `<div class="explain-card done">${icon(r === "good" ? "check" : "rotate", 16)} ${
        r === "good" ? "Nice. Explaining it is the best proof you understand it." :
        r === "part" ? "Good start. Reread the key points, then try the question below." :
        "That's useful to know. This concept is now scheduled for review."}
        <span class="muted small">Mastery: ${pctOf(s.m)}%</span> <button class="btn btn-sm btn-ghost" data-x="again">Try again</button></div>`;
      el.querySelector('[data-x="again"]').addEventListener("click", open);
      updateConceptStatus(el, key);
    }));
  };
  collapsed();
}

// Refresh the status chip on a Learn-tab concept card after a self-check.
function updateConceptStatus(el, key) {
  const card = el.closest(".concept");
  const s = Engine.state(key);
  const slot = card && card.querySelector(".concept-status");
  if (slot) slot.innerHTML = `${chip(s)}${s.n ? ` <span class="muted small">${pctOf(s.m)}%</span>` : ""}`;
}

// Terms that can reasonably be typed (no formulas), for fill-in-the-blank.
const typeable = (t) => /^[A-Za-z0-9 ,'’\-()\/.&]+$/.test(t) && t.length <= 40;
const normTerm = (t) => t.toLowerCase().replace(/\(.*?\)/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
function termVariants(term) {
  const v = new Set([normTerm(term)]);
  term.split("/").forEach((p) => v.add(normTerm(p)));
  const paren = term.match(/\((.*?)\)/);
  if (paren && paren[1].length > 3) v.add(normTerm(paren[1]));
  return [...v].filter(Boolean);
}
function editDistance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
function termMatches(answer, term) {
  const a = normTerm(answer);
  if (!a) return false;
  return termVariants(term).some((v) => a === v || (v.length >= 5 && editDistance(a, v) <= (v.length >= 9 ? 2 : 1)));
}
// Hide the term inside its own definition so the blank isn't given away.
function maskTerm(def, term) {
  let out = def;
  termVariants(term).concat([term.replace(/\s*\(.*?\)\s*/g, "").trim()]).forEach((v) => {
    if (v.length < 3) return;
    out = out.replace(new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "_____");
  });
  return out;
}

let drillMode = "blank";
function renderDrills(body, course, idx, unit) {
  const modes = [["blank", "Fill in the blank", "pen"], ["match", "Matching", "shuffle"], ["sort", "Sort by concept", "list"]];
  body.innerHTML = `
    <p class="muted small practice-note">${icon("zap", 14)} Active recall beats rereading. Every answer here updates your concept mastery.</p>
    <div class="seg drill-seg" role="group" aria-label="Drill type">${modes.map(([k, label, ic]) =>
      `<button data-mode="${k}" class="${drillMode === k ? "is-active" : ""}">${icon(ic, 14)} ${label}</button>`).join("")}</div>
    <div id="drill" class="drill"></div>`;
  body.querySelectorAll("[data-mode]").forEach((b) => b.addEventListener("click", () => { drillMode = b.dataset.mode; renderDrills(body, course, idx, unit); }));
  const el = body.querySelector("#drill");
  ({ blank: drillBlank, match: drillMatch, sort: drillSort })[drillMode](el, course, idx, unit);
}

function drillDone(el, title, score, total, again) {
  el.innerHTML = `
    <div class="card drill-done">
      ${ring(Math.round((score / Math.max(total, 1)) * 100), 64, 6, `${score}/${total}`)}
      <div class="grow"><h3>${esc(title)}</h3><p class="muted small">Correct answers raised mastery on their concepts; misses are scheduled for review.</p></div>
      <button class="btn btn-primary" data-x="again">${icon("rotate", 16)} Go again</button>
    </div>`;
  el.querySelector('[data-x="again"]').addEventListener("click", again);
}

function drillBlank(el, course, idx, unit) {
  const pool = shuffle(unit.terms.map((t, i) => i).filter((i) => typeable(unit.terms[i][0]))).slice(0, 8);
  if (pool.length < 3) { el.innerHTML = `<p class="muted">This unit's key terms are mostly formulas, so try Matching instead.</p>`; return; }
  let k = 0, score = 0;
  const draw = () => {
    if (k >= pool.length) return drillDone(el, `Fill in the blank: ${score} of ${pool.length}`, score, pool.length, () => drillBlank(el, course, idx, unit));
    const ti = pool[k];
    const [term, def] = unit.terms[ti];
    el.innerHTML = `
      <div class="card drill-card">
        <div class="overline">Fill in the blank · ${k + 1} of ${pool.length}</div>
        <p class="drill-prompt">${fmt(maskTerm(def, term))}</p>
        <label class="drill-input"><span class="muted small">Which term is this?</span>
          <input autocomplete="off" spellcheck="false" placeholder="Type the term…" /></label>
        <div id="fb"></div>
        <div class="btn-row"><button class="btn btn-ghost" data-x="hint">Hint</button><button class="btn btn-primary" data-x="check">Check</button></div>
      </div>`;
    const input = el.querySelector("input");
    input.focus();
    const check = () => {
      let ok = termMatches(input.value, term);
      const fb = el.querySelector("#fb");
      const finish = () => { Engine.recordTerm(course.id, idx, ti, ok); if (ok) score++; k++; draw(); };
      input.disabled = true;
      fb.innerHTML = `<div class="feedback ${ok ? "good" : "bad"}"><div class="fb-ico">${icon(ok ? "check" : "alert", 18)}</div>
        <div class="grow"><strong>${ok ? "Correct!" : "Not quite."}</strong><p>The term is <b>${esc(term)}</b>.</p></div></div>`;
      const row = el.querySelector(".btn-row");
      row.innerHTML = `${ok ? "" : `<button class="btn btn-ghost" data-x="override">I was right</button>`}<button class="btn btn-primary" data-x="next">Next ${icon("arrowR", 16)}</button>`;
      row.querySelector('[data-x="override"]')?.addEventListener("click", () => { ok = true; finish(); });
      row.querySelector('[data-x="next"]').addEventListener("click", finish);
      row.querySelector('[data-x="next"]').focus();
    };
    el.querySelector('[data-x="check"]').addEventListener("click", check);
    // preventDefault stops this same Enter press from also clicking the "Next" button that takes focus.
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } });
    el.querySelector('[data-x="hint"]').addEventListener("click", (e) => {
      const clean = term.replace(/\s*\(.*?\)\s*/g, "");
      e.target.outerHTML = `<span class="muted small">Starts with "<b>${esc(clean.slice(0, 2))}</b>" · ${clean.length} characters</span>`;
    });
  };
  draw();
}

function drillMatch(el, course, idx, unit) {
  const pick = shuffle(unit.terms.map((_, i) => i)).slice(0, 5);
  const defs = shuffle(pick.slice());
  const missed = new Set(), done = new Set();
  let sel = null;
  el.innerHTML = `
    <div class="card drill-card">
      <div class="overline">Matching · pick a term, then its definition</div>
      <div class="match-grid">
        <div class="match-col">${pick.map((ti) => `<button class="match-item term" data-t="${ti}">${txt(unit.terms[ti][0])}</button>`).join("")}</div>
        <div class="match-col">${defs.map((ti) => `<button class="match-item def" data-d="${ti}">${txt(unit.terms[ti][1])}</button>`).join("")}</div>
      </div>
    </div>`;
  el.querySelectorAll("[data-t]").forEach((b) => b.addEventListener("click", () => {
    if (done.has(+b.dataset.t)) return;
    el.querySelectorAll("[data-t]").forEach((x) => x.classList.remove("is-sel"));
    b.classList.add("is-sel"); sel = +b.dataset.t;
  }));
  el.querySelectorAll("[data-d]").forEach((b) => b.addEventListener("click", () => {
    const d = +b.dataset.d;
    if (sel === null || done.has(d)) return;
    const tBtn = el.querySelector(`[data-t="${sel}"]`);
    if (d === sel) {
      done.add(d);
      Engine.recordTerm(course.id, idx, d, !missed.has(d));
      tBtn.classList.remove("is-sel"); tBtn.classList.add("is-done"); b.classList.add("is-done");
      sel = null;
      if (done.size === pick.length) {
        const score = pick.filter((ti) => !missed.has(ti)).length;
        setTimeout(() => drillDone(el, `Matched ${score} of ${pick.length} on the first try`, score, pick.length, () => drillMatch(el, course, idx, unit)), 500);
      }
    } else {
      missed.add(sel);
      b.classList.add("is-wrong"); tBtn.classList.add("is-wrong");
      setTimeout(() => { b.classList.remove("is-wrong"); tBtn.classList.remove("is-wrong"); }, 450);
    }
  }));
}

function drillSort(el, course, idx, unit) {
  const map = Engine.termConcepts(course.id, idx);
  const byConcept = {};
  map.forEach((ci, ti) => { (byConcept[ci] ||= []).push(ti); });
  const groups = shuffle(Object.keys(byConcept).filter((ci) => byConcept[ci].length >= 2)).slice(0, 3).map(Number);
  if (groups.length < 2) { el.innerHTML = `<p class="muted">Not enough terms per concept in this unit to sort. Try Matching instead.</p>`; return; }
  const chips = shuffle(groups.flatMap((ci) => shuffle(byConcept[ci]).slice(0, 3)));
  const placed = {};
  let sel = null;
  const draw = (checked = false) => {
    const chipHtml = (ti) => {
      const right = checked && placed[ti] === map[ti];
      return `<button class="sort-chip ${sel === ti ? "is-sel" : ""} ${checked ? (right ? "is-right" : "is-wrong") : ""}" data-chip="${ti}" ${checked ? "disabled" : ""}>
        ${checked ? icon(right ? "check" : "x", 12) : ""} ${esc(unit.terms[ti][0])}</button>`;
    };
    const tray = chips.filter((ti) => placed[ti] === undefined);
    el.innerHTML = `
      <div class="card drill-card">
        <div class="overline">Sort by concept · which concept does each term belong to?</div>
        <div class="sort-tray">${tray.length ? tray.map(chipHtml).join("") : `<span class="muted small">All placed. Check your answers.</span>`}</div>
        <div class="sort-buckets">${groups.map((ci) => `
          <div class="sort-bucket" data-bucket="${ci}">
            <div class="sb-title">${esc(unit.concepts[ci].title)}</div>
            <div class="sb-chips">${chips.filter((ti) => placed[ti] === ci).map(chipHtml).join("")}</div>
            ${checked ? chips.filter((ti) => map[ti] === ci && placed[ti] !== ci).map((ti) => `<div class="sb-missing">${icon("arrowR", 12)} ${esc(unit.terms[ti][0])} belongs here</div>`).join("") : ""}
          </div>`).join("")}</div>
        <div class="btn-row">${checked
          ? `<button class="btn btn-primary" data-x="again">${icon("rotate", 16)} Go again</button>`
          : `<button class="btn btn-primary" data-x="check" ${tray.length ? "disabled" : ""}>Check</button>`}</div>
      </div>`;
    if (checked) { el.querySelector('[data-x="again"]').addEventListener("click", () => drillSort(el, course, idx, unit)); return; }
    el.querySelectorAll("[data-chip]").forEach((b) => b.addEventListener("click", (e) => {
      e.stopPropagation();
      const ti = +b.dataset.chip;
      if (placed[ti] !== undefined) { delete placed[ti]; sel = null; } else sel = sel === ti ? null : ti;
      draw();
    }));
    el.querySelectorAll("[data-bucket]").forEach((b) => b.addEventListener("click", () => {
      if (sel === null) return;
      placed[sel] = +b.dataset.bucket; sel = null; draw();
    }));
    el.querySelector('[data-x="check"]').addEventListener("click", () => {
      chips.forEach((ti) => Engine.recordTerm(course.id, idx, ti, placed[ti] === map[ti]));
      draw(true);
    });
  };
  draw();
}

/* ================= Smart practice & concept practice ================= */

function renderSmart(courseIds, title, course) {
  document.title = `${title} | Crack AP`;
  const focus = pendingFocus; pendingFocus = [];
  const items = Engine.smartSession(courseIds, 10, focus);
  const cat = course ? course.cat : "Math & Computer Science";
  const back = course ? [course.name, `#/course/${course.id}`] : ["Progress", "#/dashboard"];
  const due = Engine.due(courseIds).length;
  app.innerHTML = `
    <div class="page narrow" style="${catVars(cat)}">
      ${crumbs(["Courses", "#/"], back, [course ? "Smart practice" : title])}
      <div class="session-head">
        <div class="cat-icon lg">${icon("zap", 26)}</div>
        <div><h1>${esc(course ? "Smart practice" : title)}</h1>
        <p class="muted">${focus.length ? `Starting with the ${focus.length} weak concept${focus.length === 1 ? "" : "s"} from your diagnostic.` : due ? `${due} concept${due === 1 ? "" : "s"} due for review come first, then your weakest, then new ones.` : "Picked for you: your weakest concepts first, then new ones."}
        Miss one and we'll fix it on the spot.</p></div>
      </div>
      <div id="quiz-body"></div>
    </div>`;
  runSession(document.getElementById("quiz-body"), items, {
    title: course ? "Smart practice" : title, mode: "smart", showSource: true,
    onRestart: () => renderSmart(courseIds, title, course),
  });
}

function renderConceptPractice(courseId, unitIdx, conceptIdx) {
  const course = courseById[courseId];
  const unit = window.AP_CONTENT[courseId]?.units?.[unitIdx];
  const c = unit?.concepts?.[conceptIdx];
  if (!c) { location.hash = `#/course/${courseId}`; return; }
  document.title = `Practice: ${c.title} | Crack AP`;
  const s = Engine.state(Engine.conceptKey(courseId, unitIdx, conceptIdx));
  const items = Engine.conceptItems(courseId, unitIdx, conceptIdx, 5);
  app.innerHTML = `
    <div class="page narrow" style="${catVars(course.cat)}">
      ${crumbs(["Courses", "#/"], [course.name, `#/course/${courseId}`], [`Unit ${unitIdx + 1}`, `#/course/${courseId}/unit/${unitIdx + 1}`], ["Concept practice"])}
      <div class="session-head">
        <div class="cat-icon lg">${icon("target", 26)}</div>
        <div class="grow"><div class="overline">Concept practice · Unit ${unitIdx + 1}</div><h1>${esc(c.title)}</h1>
        <p class="muted">${items.length} questions on just this concept. ${chip(s)} ${s.n ? `${pctOf(s.m)}% mastery now.` : ""}</p></div>
      </div>
      <details class="card refresher-card"><summary>${icon("book", 16)} Quick refresher before you start</summary><p>${fmt(c.simple)}</p>${c.hook ? `<div class="note note-hook"><b>${icon("bulb", 14)} Memory hook</b><div>${fmt(c.hook)}</div></div>` : ""}</details>
      <div id="quiz-body"></div>
    </div>`;
  runSession(document.getElementById("quiz-body"), items, {
    title: `${c.title} practice`, mode: "concept", adaptive: false,
    onRestart: () => renderConceptPractice(courseId, unitIdx, conceptIdx),
  });
}

/* ================= Mixed quiz setup ================= */

async function renderQuizSetup(course) {
  const content = await loadContent(course.id);
  if (!content) { location.hash = `#/course/${course.id}`; return; }
  document.title = `Mixed quiz | ${course.name}`;
  const pace = mcqPace(course);
  const allQs = content.units.flatMap((u, ui) => u.questions.map((_, qi) => Engine.item(course.id, ui, qi)));
  const sel = { units: new Set(content.units.map((_, i) => i)), count: 10, timed: false };
  const crumb = crumbs(["Courses", "#/"], [course.name, `#/course/${course.id}`], ["Mixed quiz"]);

  const draw = () => {
    const pool = allQs.filter((x) => sel.units.has(x.unitIdx));
    const n = sel.count === "All" ? pool.length : Math.min(sel.count, pool.length);
    app.innerHTML = `
      <div class="page narrow" style="${catVars(course.cat)}">
        ${crumb}
        <div class="session-head"><div class="cat-icon lg">${icon("shuffle", 26)}</div><div><h1>Mixed practice quiz</h1>
        <p class="muted">Questions are shuffled across the units you pick, the way the real exam mixes topics. Turn on the timer to practice at exam pace.</p></div></div>
        <div class="card setup">
          <div class="setup-sec">
            <div class="setup-label">Units</div>
            <label class="check-row all"><input type="checkbox" id="all" ${sel.units.size === content.units.length ? "checked" : ""}/> <b>All units</b></label>
            <div class="unit-checks">
              ${content.units.map((u, i) => `<label class="check-row"><input type="checkbox" data-u="${i}" ${sel.units.has(i) ? "checked" : ""}/> <span>Unit ${i + 1}: ${esc(u.title)}</span> <span class="muted small">${u.questions.length}</span></label>`).join("")}
            </div>
          </div>
          <div class="setup-sec">
            <div class="setup-label">Number of questions</div>
            <div class="seg">${[5, 10, 20, "All"].map((k) => `<button data-n="${k}" class="${sel.count === k ? "is-active" : ""}">${k}</button>`).join("")}</div>
          </div>
          <div class="setup-sec">
            <div class="setup-label">Timing</div>
            <label class="switch"><input type="checkbox" id="timed" ${sel.timed ? "checked" : ""}/><span class="switch-ui"></span>
            <span>Exam pace: about ${Math.round(pace / 6) / 10} min per question, like the real multiple-choice section</span></label>
          </div>
          <button class="btn btn-primary btn-lg btn-block" id="go" ${pool.length ? "" : "disabled"}>${icon("play", 16)} Start quiz · ${n} question${n === 1 ? "" : "s"}</button>
        </div>
      </div>`;
    app.querySelector("#all").addEventListener("change", (e) => {
      sel.units = e.target.checked ? new Set(content.units.map((_, i) => i)) : new Set(); draw();
    });
    app.querySelectorAll("[data-u]").forEach((cb) => cb.addEventListener("change", () => {
      const u = +cb.dataset.u; cb.checked ? sel.units.add(u) : sel.units.delete(u); draw();
    }));
    app.querySelectorAll("[data-n]").forEach((b) => b.addEventListener("click", () => {
      sel.count = b.dataset.n === "All" ? "All" : +b.dataset.n; draw();
    }));
    app.querySelector("#timed").addEventListener("change", (e) => { sel.timed = e.target.checked; });
    app.querySelector("#go").addEventListener("click", () => {
      const picked = shuffle(pool).slice(0, n);
      app.innerHTML = `<div class="page narrow" style="${catVars(course.cat)}">${crumb}<div id="quiz-body"></div></div>`;
      runSession(document.getElementById("quiz-body"), picked, {
        title: "Mixed quiz", mode: "quiz", pace: sel.timed ? pace : null, adaptive: !sel.timed, showSource: true,
        onRestart: () => renderQuizSetup(course),
      });
    });
  };
  draw();
}


/* ================= Mistakes: every wrong answer becomes a lesson ================= */

function renderReview() {
  document.title = "My mistakes | Crack AP";
  const list = Engine.mistakesIn(GUIDE_IDS);
  if (!list.length) {
    app.innerHTML = `
      <div class="page narrow">
        <div class="page-head"><div class="cat-icon lg">${icon("rotate", 26)}</div><div><h1>My mistakes</h1><p class="muted">Your mistakes, organized by the concept behind them.</p></div></div>
        <div class="card empty">
          <div class="empty-ico good">${icon("check", 28)}</div>
          <h3>No open mistakes</h3>
          <p class="muted">When you miss questions, they're grouped here by concept, with your mastery, the error pattern behind
          your wrong answers, the AP trap for that concept, and targeted practice. Fix them and they leave this list.</p>
          <a class="btn btn-primary" href="#/today">What should I study today?</a>
        </div>
      </div>`;
    return;
  }

  // Group open mistakes by concept, weakest concept first.
  const groups = new Map();
  list.forEach((m) => {
    const it = Engine.item(m.courseId, m.unitIdx, m.qIdx);
    const ck = Engine.conceptKey(m.courseId, m.unitIdx, it.q.concept);
    if (!groups.has(ck)) groups.set(ck, { ck, courseId: m.courseId, unitIdx: m.unitIdx, conceptIdx: it.q.concept, items: [] });
    groups.get(ck).items.push({ ...m, ...it });
  });
  const concepts = [...groups.values()].map((g) => ({ ...g, s: Engine.state(g.ck), prof: Engine.errorProfile(g.ck) }))
    .sort((a, b) => a.s.m - b.s.m);
  const fixItems = () => Engine.focusedReview(concepts.map((c) => c.ck), 3);
  const mins = Math.round(concepts.length * 3 * Engine.MIN_PER_QUESTION);

  app.innerHTML = `
    <div class="page narrow">
      <div class="page-head">
        <div class="cat-icon lg">${icon("rotate", 26)}</div>
        <div class="grow"><h1>My mistakes</h1><p class="muted">${list.length} open mistake${list.length === 1 ? "" : "s"} come from <b>${concepts.length} concept${concepts.length === 1 ? "" : "s"}</b>. Fix the concept, not just the question.</p></div>
        <button class="btn btn-primary btn-lg" id="fix-all">${icon("zap", 16)} Fix all · ~${mins} min</button>
      </div>
      ${concepts.map((g) => {
        const c = courseById[g.courseId];
        const concept = g.prof.concept;
        return `
        <section class="card mc-card" style="${catVars(c.cat)}">
          <div class="mc-head">
            ${ring(pctOf(g.s.m), 58, 6)}
            <div class="grow">
              <h2>${esc(concept.title)} <span class="mc-pct">${pctOf(g.s.m)}% mastery</span></h2>
              <div class="muted small">${esc(c.name)} · Unit ${g.unitIdx + 1} · ${chip(g.s)}</div>
            </div>
          </div>
          <p class="mc-count">You've missed <b>${g.prof.misses} question${g.prof.misses === 1 ? "" : "s"}</b> involving this concept${g.items.length < g.prof.misses ? ` (${g.items.length} still open)` : ""}.</p>
          ${g.prof.notes.length ? `<div class="mc-block"><div class="fb-label bad">Your error pattern</div><ul>${g.prof.notes.map((n) => `<li>${fmt(n)}</li>`).join("")}</ul></div>` : ""}
          ${concept.trap ? `<div class="note note-trap"><b>⚠️ ${examOf(g.courseId)} Trap</b><div>${fmt(concept.trap)}</div></div>` : ""}
          <div class="mc-actions">
            <a class="btn btn-primary" href="#/practice/concept/${g.courseId}/${g.unitIdx}/${g.conceptIdx}">${icon("play", 16)} Practice 5 similar</a>
            <a class="btn" href="#/course/${g.courseId}/unit/${g.unitIdx + 1}/learn">${icon("book", 16)} Review the concept</a>
          </div>
          <details class="mc-qs"><summary>See the ${g.items.length} question${g.items.length === 1 ? "" : "s"} you missed</summary>
            <div class="miss-list">${g.items.map((it) => missCard(it, it.picked, " ")).join("")}</div>
          </details>
        </section>`;
      }).join("")}
    </div>
  `;
  initMissTryIts(app);
  app.querySelector("#fix-all").addEventListener("click", () => {
    app.innerHTML = `<div class="page narrow">${crumbs(["My mistakes", "#/review"], ["Fix all"])}<div id="quiz-body"></div></div>`;
    runSession(document.getElementById("quiz-body"), fixItems(), { title: "Mistake fix-up", mode: "review", showSource: true, onRestart: renderReview });
  });
}

/* ================= Dashboard: progress that means something ================= */

let dashSort = "weakest";

function renderDashboard() {
  document.title = "My progress | Crack AP";
  const active = GUIDE_IDS.filter((id) => Engine.concepts(id).some((c) => c.s.n) || store.data.mine.includes(id));
  const week = Engine.weekStats();
  const all = active.flatMap((id) => Engine.concepts(id));
  const strong = all.filter((c) => Engine.status(c.s).id === "strong").length;
  const tried = all.filter((c) => c.s.n).length;
  const weakest = Engine.weakest(active, 1)[0];
  const rec = active.length ? Engine.recommend(active) : null;
  const open = Engine.mistakesIn(GUIDE_IDS).length;
  const ago = (t) => { if (!t) return "–"; const d = Math.floor((Date.now() - t) / 86400000); return d <= 0 ? "Today" : d === 1 ? "Yesterday" : `${d} days ago`; };

  // Unit 3: 73% mastery · Strong 6 · Developing 4 · Needs review 2 · Not started 0
  const unitTable = (id) => `
    <table class="unit-table">
      <thead><tr><th>Unit</th><th>Mastery</th><th class="num">Strong</th><th class="num">Developing</th><th class="num">Needs review</th><th class="num">Not started</th></tr></thead>
      <tbody>${window.AP_CONTENT[id].units.map((u, ui) => {
        const um = Engine.unitMastery(id, ui);
        return `<tr>
          <td><a href="#/course/${id}/unit/${ui + 1}"><span class="muted">Unit ${ui + 1}</span> ${esc(u.title)}</a></td>
          <td class="ut-m">${um.tried ? `<b>${um.pct}%</b>${bar(um.pct)}` : `<span class="muted">—</span>`}</td>
          <td class="num st-strong-t">${um.strong || ""}</td><td class="num st-learning-t">${um.developing || ""}</td>
          <td class="num st-weak-t">${um.weak || ""}</td><td class="num muted">${um.fresh || ""}</td>
        </tr>`;
      }).join("")}</tbody>
    </table>`;

  const table = (id) => {
    let rows = Engine.concepts(id);
    if (dashSort === "weakest") rows = rows.slice().sort((a, b) => (a.s.n ? 0 : 1) - (b.s.n ? 0 : 1) || a.s.m - b.s.m);
    const started = rows.filter((r) => r.s.n);
    const rest = rows.filter((r) => !r.s.n);
    const row = (r) => `
      <tr class="${r.s.n ? "" : "is-new"}">
        <td><a href="#/course/${id}/unit/${r.unitIdx + 1}/learn">${esc(r.title)}</a><span class="muted small">Unit ${r.unitIdx + 1}</span></td>
        <td class="mt-bar">${r.s.n ? `${bar(pctOf(r.s.m), Engine.status(r.s).id === "strong" ? "good" : Engine.status(r.s).id === "weak" ? "bad" : "warn")}` : ""}</td>
        <td class="mt-pct">${r.s.n ? `${pctOf(r.s.m)}%` : "–"}</td>
        <td>${chip(r.s)}</td>
        <td class="mt-when muted small">${ago(r.s.last)}</td>
        <td><a class="btn btn-sm" href="#/practice/concept/${id}/${r.unitIdx}/${r.conceptIdx}">Practice</a></td>
      </tr>`;
    const w = Engine.weakest([id], 1)[0];
    return `
      <table class="mastery-table">
        <thead><tr><th>Concept</th><th colspan="2">Mastery</th><th>Status</th><th>Last practiced</th><th></th></tr></thead>
        <tbody>${(dashSort === "weakest" ? started : rows).map(row).join("")}</tbody>
        ${dashSort === "weakest" && rest.length ? `<tbody class="mt-rest" hidden>${rest.map(row).join("")}</tbody>` : ""}
      </table>
      ${dashSort === "weakest" && rest.length ? `<button class="btn btn-ghost btn-sm mt-more">Show ${rest.length} concepts not started yet</button>` : ""}
      ${w ? `<a class="rec-next" href="#/practice/concept/${id}/${w.unitIdx}/${w.conceptIdx}">${icon("zap", 16)} <span>Recommended next: <b>${esc(w.title)}</b> (${pctOf(w.s.m)}%)</span>${icon("arrowR", 16)}</a>` : ""}`;
  };

  app.innerHTML = `
    <div class="page">
      <div class="page-head"><div class="cat-icon lg">${icon("chart", 26)}</div><div class="grow"><h1>My progress</h1><p class="muted">Mastery per concept, not lessons completed. ${store.student ? `Signed in as <b>${esc(store.student)}</b>. Saved in this browser.` : `<b>You're a guest: this progress is erased when you refresh or close the page.</b> <a href="#" data-sign-in>Sign in with a student code</a> to keep it.`}</p></div>
        <div class="btn-row"><button class="btn btn-ghost" id="export">${icon("download", 16)} Back up</button><label class="btn btn-ghost">${icon("upload", 16)} Restore<input type="file" id="import" accept="application/json" hidden></label></div></div>

      ${rec ? `
        <a class="card next-best" href="${recHref(rec)}">
          <div class="nb-ico">${icon("zap", 22)}</div>
          <div class="grow"><div class="overline">Recommended next</div><h2>${esc(rec.title)}</h2><p class="muted">${esc(rec.reason)}</p></div>
          <span class="btn btn-primary btn-lg">Start ${icon("arrowR", 16)}</span>
        </a>` : ""}

      <div class="stat-grid">
        <div class="card stat"><div class="stat-ico good">${icon("target", 20)}</div><b>${strong}<small>/${tried || 0}</small></b><span>concepts mastered (of those started)</span></div>
        <div class="card stat"><div class="stat-ico bad">${icon("alert", 20)}</div><b class="stat-text">${weakest ? esc(weakest.title) : "–"}</b><span>${weakest ? `your weakest concept · ${pctOf(weakest.s.m)}%` : "your weakest concept"}</span></div>
        <div class="card stat"><div class="stat-ico">${icon("check", 20)}</div><b>${week.answered}</b><span>questions this week${week.answered ? ` · ${Math.round((week.correct / week.answered) * 100)}% right` : ""}</span></div>
        <div class="card stat"><div class="stat-ico flame">${icon("flame", 20)}</div><b>${week.mistakes}</b><span>mistakes this week · ${open} still open · ${streak()}-day streak</span></div>
      </div>

      ${active.length ? `
        <div class="section-head"><h2>Mastery by concept</h2>
          <div class="seg" id="sort"><button data-sort="weakest" class="${dashSort === "weakest" ? "is-active" : ""}">Weakest first</button><button data-sort="course" class="${dashSort === "course" ? "is-active" : ""}">Course order</button></div></div>
        ${active.map((id) => {
          const c = courseById[id];
          const m = Engine.courseMastery(id);
          return `
          <section class="card dash-table-card" style="${catVars(c.cat)}">
            <div class="dtc-head">
              <div class="cat-icon">${catIcon(c.cat)}</div>
              <div class="grow"><h3>${esc(c.name)}</h3><div class="muted small">${m.strong}/${m.total} concepts strong · ${m.developing} developing · ${m.weak} need review · ${m.due} due for review</div></div>
              ${ring(m.pct, 52, 5)}
            </div>
            ${unitTable(id)}
            ${table(id)}
          </section>`;
        }).join("")}
        <button class="btn btn-ghost danger" id="reset">Reset all progress</button>` : `
        <div class="card empty">
          <div class="empty-ico">${icon("stethoscope", 26)}</div>
          <h3>Let's find out what you know</h3>
          <p class="muted">Take a 5-minute diagnostic, or skip it and start learning concepts. Your mastery table, weakest concepts and recommendations show up here as soon as you answer questions.</p>
          <div class="btn-row center"><button class="btn btn-primary" data-pick-diagnostic>${icon("stethoscope", 16)} Start diagnostic</button>
          <button class="btn" data-pick-learn>${icon("book", 16)} Skip it: learn concepts</button></div>
        </div>`}
    </div>`;

  app.querySelectorAll("[data-sort]").forEach((b) => b.addEventListener("click", () => { dashSort = b.dataset.sort; renderDashboard(); }));
  app.querySelectorAll(".mt-more").forEach((b) => b.addEventListener("click", () => { b.previousElementSibling.querySelector(".mt-rest").hidden = false; b.remove(); }));
  app.querySelector("#reset")?.addEventListener("click", () => {
    if (!confirm(`Erase all ${store.student ? `of ${store.student}'s` : "guest"} progress, flashcards, saved answers and My courses in this browser? This can't be undone.`)) return;
    store.replace(EMPTY());
    store.save();
    toast("Progress reset");
    renderDashboard();
  });
  app.querySelector("#export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(store.data)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ap-prep-progress-${today()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`${icon("download", 14)} Progress downloaded`);
  });
  app.querySelector("#import").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!data || typeof data.q !== "object" || typeof data.cs !== "object") throw new Error("not a progress file");
      if (!confirm("Replace your current progress with this backup?")) return;
      store.replace(data);
      store.save();
      toast(`${icon("check", 14)} Progress restored`);
      renderDashboard();
    } catch (err) {
      toast(`That file isn't a valid progress backup.`);
    }
  });
}

/* ================= Support us ================= */

const CONTACT_EMAIL = "CodegamerA@gmail.com";
const SITE_URL = "https://xcodevoid.github.io/Crack-AP/";

function copyText(text, done) {
  const fallback = () => {
    const t = document.createElement("textarea");
    t.value = text; document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (_) {}
    t.remove();
  };
  (navigator.clipboard ? navigator.clipboard.writeText(text).catch(fallback) : Promise.resolve(fallback())).then(() => toast(`${icon("check", 14)} ${done}`));
}

function renderSupport() {
  document.title = "Support Crack AP";
  const mail = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  app.innerHTML = `
    <div class="page support">
      <div class="page-head"><div class="cat-icon lg">${icon("heart", 26)}</div><div class="grow"><h1>Support Crack AP</h1>
        <p class="muted">Crack AP is free and built by students in our school's Vibe Coding Club. Here's how you can help it get better.</p></div></div>
      <div class="support-grid">
        <div class="card support-card">
          <div class="support-ico">${icon("alert", 20)}</div>
          <h3>Report a mistake</h3>
          <p class="muted">Found a wrong answer, a typo or something confusing? Tell us the course, unit and question so we can fix it.</p>
          <a class="btn" href="${mail("Crack AP: mistake report")}">${icon("mail", 16)} Email a report</a>
        </div>
        <div class="card support-card">
          <div class="support-ico">${icon("bulb", 20)}</div>
          <h3>Suggest an idea</h3>
          <p class="muted">Want a new course, a feature, or more practice on a topic? We read every message.</p>
          <a class="btn" href="${mail("Crack AP: idea")}">${icon("mail", 16)} Email an idea</a>
        </div>
        <div class="card support-card">
          <div class="support-ico">${icon("user", 20)}</div>
          <h3>Share it with classmates</h3>
          <p class="muted">The best way to help is to tell a friend who's taking AP courses.</p>
          <button class="btn" data-copy="${SITE_URL}" data-done="Link copied">${icon("copy", 16)} Copy the link</button>
        </div>
      </div>
      <div class="card support-contact">
        <div>${icon("mail", 18)} Write to us at <b>${CONTACT_EMAIL}</b></div>
        <button class="btn btn-ghost btn-sm" data-copy="${CONTACT_EMAIL}" data-done="Email address copied">${icon("copy", 14)} Copy</button>
      </div>
      <p class="small muted">If the email buttons don't open your mail app, copy the address and send from any email service, such as QQ Mail or 163 Mail.</p>
    </div>`;
  app.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, b.dataset.done)));
}

/* ================= Search palette ================= */

let paletteEl = null;
const paletteOpen = () => !!paletteEl;

function buildSearchIndex() {
  const idx = COURSES.map((c) => ({ type: "Course", title: c.name, sub: c.cat, href: `#/course/${c.id}`, cat: c.cat, text: `${c.name} ${c.blurb} ${c.cat}` }));
  COURSES.filter((c) => c.guide).forEach((c) => {
    const content = window.AP_CONTENT && window.AP_CONTENT[c.id];
    if (!content || content.extends) return;
    content.units.forEach((u, i) => {
      idx.push({ type: "Unit", title: `Unit ${i + 1}: ${u.title}`, sub: c.name, href: `#/course/${c.id}/unit/${i + 1}`, cat: c.cat, text: `${u.title} ${u.concepts.map((k) => k.title).join(" ")}` });
      u.terms.forEach(([t, d]) => idx.push({ type: "Term", title: t, sub: `${c.name} · Unit ${i + 1}`, detail: d, href: `#/course/${c.id}/unit/${i + 1}/cards`, cat: c.cat, text: t }));
    });
  });
  return idx;
}

function openPalette() {
  if (paletteEl) return;
  const index = buildSearchIndex();
  paletteEl = document.createElement("div");
  paletteEl.className = "palette-overlay";
  paletteEl.innerHTML = `
    <div class="palette" role="dialog" aria-label="Search">
      <div class="palette-input">${icon("search", 20)}<input id="pal-q" placeholder="Search courses, units, key terms…" autocomplete="off" /><kbd>Esc</kbd></div>
      <div class="palette-results" id="pal-r"></div>
    </div>`;
  document.body.appendChild(paletteEl);
  document.body.classList.add("no-scroll");
  const input = paletteEl.querySelector("#pal-q");
  const out = paletteEl.querySelector("#pal-r");
  let sel = 0, hits = [];

  const draw = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      hits = index.filter((x) => x.type === "Course" && courseById[x.href.split("/")[2]].guide).slice(0, 9);
    } else {
      const words = q.split(/\s+/);
      hits = index
        .map((x) => {
          const t = x.title.toLowerCase(), all = x.text.toLowerCase();
          if (!words.every((w) => all.includes(w))) return null;
          const score = (t.startsWith(q) ? 0 : t.includes(q) ? 1 : 2) + (x.type === "Course" ? 0 : x.type === "Unit" ? 0.3 : 0.6);
          return { ...x, score };
        })
        .filter(Boolean).sort((a, b) => a.score - b.score).slice(0, 12);
    }
    sel = Math.min(sel, Math.max(0, hits.length - 1));
    out.innerHTML = hits.length ? `
      ${!q ? `<div class="pal-group">Study guides</div>` : ""}
      ${hits.map((h, i) => `
        <a class="pal-item ${i === sel ? "is-sel" : ""}" href="${h.href}" data-i="${i}" style="${catVars(h.cat)}">
          <span class="pal-ico">${h.type === "Term" ? icon("cards", 16) : h.type === "Unit" ? icon("book", 16) : catIcon(h.cat, 16)}</span>
          <span class="grow"><b>${esc(h.title)}</b><span class="muted small">${esc(h.sub)}${h.detail ? ` · ${esc(h.detail)}` : ""}</span></span>
          <span class="pal-type">${h.type}</span>
        </a>`).join("")}` : `<div class="pal-empty">No results for "${esc(input.value)}"</div>`;
  };
  const go = () => { if (hits[sel]) { location.hash = hits[sel].href; closePalette(); } };
  input.addEventListener("input", () => { sel = 0; draw(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(hits.length - 1, sel + 1); draw(); out.querySelector(".is-sel")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); draw(); out.querySelector(".is-sel")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "Enter") { e.preventDefault(); go(); }
  });
  out.addEventListener("mousemove", (e) => {
    const a = e.target.closest("[data-i]");
    if (a && +a.dataset.i !== sel) { sel = +a.dataset.i; out.querySelectorAll(".pal-item").forEach((x, k) => x.classList.toggle("is-sel", k === sel)); }
  });
  out.addEventListener("click", () => setTimeout(closePalette, 0));
  paletteEl.addEventListener("mousedown", (e) => { if (e.target === paletteEl) closePalette(); });
  draw();
  input.focus();
}

function closePalette() {
  if (!paletteEl) return;
  paletteEl.remove();
  paletteEl = null;
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", (e) => { if (e.target.closest("[data-open-search]")) openPalette(); });
document.addEventListener("keydown", (e) => {
  const typing = e.target.matches("input, textarea");
  if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); paletteOpen() ? closePalette() : openPalette(); }
  else if (e.key === "Escape" && paletteOpen()) closePalette();
});

/* ================= Student codes ================= */

// A student code picks which progress file this browser uses. No server, no email, no Google:
// codes work anywhere, including where Google services are blocked.
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I/L
const normCode = (s) => String(s || "").toUpperCase().replace(/\s+/g, "").replace(/[^A-Z0-9-]/g, "");
const validCode = (c) => /^[A-Z0-9-]{4,20}$/.test(c);
const codeExists = (c) => { try { return localStorage.getItem(keyFor(c)) !== null; } catch (_) { return false; } };
function newCode() {
  for (;;) {
    let c = "AP-";
    for (let i = 0; i < 6; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    if (!codeExists(c)) return c;
  }
}

function switchStudent(code, moveGuest = false) {
  // Guest progress is only in memory, so moving it means copying the current data.
  const next = code && moveGuest ? JSON.parse(JSON.stringify(store.data)) : code ? readProgress(code) : EMPTY();
  store.student = code || null;
  try { code ? localStorage.setItem(STUDENT_KEY, code) : localStorage.removeItem(STUDENT_KEY); } catch (_) {}
  store.replace(next);
  store.save(); // creates the code's file, so it's recognized next time
  updateAccountButton();
  route();
}

function updateAccountButton() {
  const btn = document.getElementById("account-btn");
  if (!btn) return;
  const code = store.student;
  btn.classList.toggle("is-in", !!code);
  btn.innerHTML = code
    ? `<span class="avatar" aria-hidden="true">${esc(code.replace(/^AP-/, "")[0] || "?")}</span><span class="account-label">${esc(code)}</span>`
    : `${icon("user", 16)}<span class="account-label">Sign in</span>`;
  btn.setAttribute("aria-label", code ? `Signed in as ${code}. Switch student or sign out` : "Sign in with a student code");
}

let signInEl = null;
function closeSignIn() {
  if (!signInEl) return;
  signInEl.remove(); signInEl = null;
  document.body.classList.remove("no-scroll");
}

function openSignIn(showForm = false) {
  if (signInEl) return;
  signInEl = document.createElement("div");
  signInEl.className = "palette-overlay signin-overlay";
  document.body.appendChild(signInEl);
  document.body.classList.add("no-scroll");
  signInEl.addEventListener("click", (e) => { if (e.target === signInEl || e.target.closest("[data-close]")) closeSignIn(); });
  const code = store.student;

  if (code && !showForm) {
    signInEl.innerHTML = `
      <div class="signin" role="dialog" aria-modal="true" aria-labelledby="si-title">
        <button class="icon-btn signin-x" data-close aria-label="Close">${icon("x", 16)}</button>
        <div class="signin-avatar">${esc(code.replace(/^AP-/, "")[0] || "?")}</div>
        <h2 id="si-title">Signed in as ${esc(code)}</h2>
        <p class="muted">Your progress on this device is saved under this code. Keep it somewhere safe: it's how you get back in.</p>
        <div class="signin-actions">
          <button class="btn btn-primary" id="si-switch">${icon("user", 16)} Switch student</button>
          <button class="btn btn-ghost" id="si-out">${icon("logout", 16)} Sign out</button>
        </div>
      </div>`;
    signInEl.querySelector("#si-out").addEventListener("click", () => { closeSignIn(); switchStudent(null); toast("Signed out. As a guest, progress isn't saved."); });
    signInEl.querySelector("#si-switch").addEventListener("click", () => { closeSignIn(); openSignIn(true); });
    signInEl.querySelector("#si-switch").focus();
    return;
  }
  drawSignInForm();
}

function drawSignInForm() {
  const guestHas = !store.student && hasProgress(store.data);
  signInEl.innerHTML = `
    <form class="signin" role="dialog" aria-modal="true" aria-labelledby="si-title" novalidate>
      <button type="button" class="icon-btn signin-x" data-close aria-label="Close">${icon("x", 16)}</button>
      <div class="signin-icon">${icon("key", 22)}</div>
      <h2 id="si-title">Sign in with your student code</h2>
      <p class="muted">Each code has its own progress: mastery, mistakes, flashcards and diagnostics. Everyone who shares this computer can have their own. Without a code, progress is erased when you refresh.</p>
      <label class="signin-field">
        <span>Student code</span>
        <input id="si-code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="e.g. AP-7K3QXM" />
      </label>
      <div id="si-msg" class="signin-msg" role="status"></div>
      <label class="signin-move" id="si-move-row" hidden><input type="checkbox" id="si-move" checked /> Move the progress I made as a guest into this code</label>
      <button class="btn btn-primary btn-block" id="si-go">Sign in</button>
      <p class="signin-new">New here? <button type="button" class="linklike" id="si-new">Create a code for me</button></p>
      <p class="small muted signin-note">Codes and progress are stored in this browser only, with no email and no tracking. To study on another device, use <b>Back up</b> and <b>Restore</b> on My progress.</p>
    </form>`;
  const form = signInEl.querySelector("form");
  const input = form.querySelector("#si-code");
  const msg = form.querySelector("#si-msg");
  const go = form.querySelector("#si-go");
  const moveRow = form.querySelector("#si-move-row");
  let created = null;      // code we just generated
  let confirmNew = null;   // unknown code the student has been warned about once

  const refresh = () => {
    const c = normCode(input.value);
    const fresh = validCode(c) && !codeExists(c);
    moveRow.hidden = !(guestHas && fresh);
    go.textContent = fresh && (c === created || c === confirmNew) ? `Start as ${c}` : "Sign in";
    if (c !== confirmNew && c !== created) { msg.textContent = ""; msg.className = "signin-msg"; }
  };
  input.addEventListener("input", refresh);
  form.querySelector("#si-new").addEventListener("click", () => {
    created = newCode();
    input.value = created;
    msg.className = "signin-msg is-info";
    msg.innerHTML = `${icon("alert", 14)} <span>Write down <b>${created}</b>. It's how you get back to your progress.</span>`;
    refresh();
    input.focus();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const c = normCode(input.value);
    if (!validCode(c)) {
      msg.className = "signin-msg is-err";
      msg.textContent = "Codes are 4–20 letters, numbers or dashes.";
      input.focus();
      return;
    }
    if (!codeExists(c) && c !== created && c !== confirmNew) {
      confirmNew = c;
      msg.className = "signin-msg is-info";
      msg.innerHTML = `${icon("alert", 14)} <span>There's no progress for <b>${esc(c)}</b> on this device yet. Check the spelling, or continue to start fresh with this code.</span>`;
      refresh();
      return;
    }
    const move = !moveRow.hidden && form.querySelector("#si-move").checked;
    closeSignIn();
    switchStudent(c, move);
    toast(`${icon("check", 14)} Signed in as ${esc(c)}${move ? ". Your guest progress moved with you." : ""}`);
  });
  input.focus();
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#account-btn")) openSignIn();
  else if (e.target.closest("[data-sign-in]")) { e.preventDefault(); openSignIn(); }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && signInEl) closeSignIn(); });


/* ================= Theme ================= */

(function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const media = matchMedia("(prefers-color-scheme: dark)");
  let saved = null;
  try { saved = localStorage.getItem("apprep.theme"); } catch (_) {}
  const apply = () => {
    const t = saved || (media.matches ? "dark" : "light");
    document.documentElement.dataset.theme = t;
    btn.innerHTML = icon(t === "dark" ? "sun" : "moon", 18);
    btn.setAttribute("aria-label", `Switch to ${t === "dark" ? "light" : "dark"} theme`);
  };
  apply();
  media.addEventListener?.("change", () => { if (!saved) apply(); });
  btn.addEventListener("click", () => {
    saved = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("apprep.theme", saved); } catch (_) {}
    apply();
  });
})();


/* ================= Boot ================= */

document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon, +el.dataset.size || 18); });
window.addEventListener("hashchange", () => { if (location.hash !== "#start") route(); });
updateAccountButton();
loadAllGuides().then(() => { Engine.migrate(); updateMistakeCount(); });
route();

