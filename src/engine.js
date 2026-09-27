// The learning engine: a rules-based model of what each student knows, concept by concept.
//
// Data model (all in localStorage, shaped so it can later sync to a backend):
//   learner
//    ├── q[questionKey]      latest result per question  { c: correct, n: attempts, p: picked choice }
//    ├── cs[conceptKey]      mastery per concept         { m: 0–1, n, ok, streak, due, last }
//    ├── hist[]              practice history            { k: questionKey, t: time, ok }
//    ├── diag[courseId]      last diagnostic             { t, right, total }
//    ├── known, frq, mine, days, recent                  flashcards, free responses, courses, streak days
//
// questionKey = "course|unit|q"   (authored question)  or  "course|unit|t<term>" (generated from a flashcard)
// conceptKey  = "course|unit|concept"

const Engine = (() => {
  const DAY = 86400000;
  const REVIEW_DAYS = [1, 3, 7, 14, 30];

  /* ---------- Content annotation ---------- */

  // Copy concept tags and wrong-answer notes from content/diagnostics/<id>.js onto question objects.
  function annotate(id, content) {
    const d = (window.AP_DIAG && window.AP_DIAG[id]) || {};
    const traps = (window.AP_TRAPS && window.AP_TRAPS[id]) || {};
    if (content.extends) {
      Object.entries(content.patches || {}).forEach(([u, p]) => (p.concepts || []).forEach((c, i) => { c.trap = traps[`p${u}.${i}`]; }));
      content.units.forEach((u, ui) => u.concepts.forEach((c, i) => { c.trap = traps[`u${ui}.${i}`]; }));
    } else {
      content.units.forEach((u, ui) => u.concepts.forEach((c, i) => { c.trap = traps[`${ui}.${i}`]; }));
    }
    const tag = (q, entry, offset = 0) => {
      q.concept = entry ? entry[0] + offset : 0;
      q.why = entry ? entry[1] : {};
    };
    if (content.extends) {
      Object.entries(content.patches || {}).forEach(([u, p]) =>
        (p.questions || []).forEach((q, i) => tag(q, d[`p${u}.${i}`], BASE_CONCEPTS[content.extends]?.[u] || 0)));
      content.units.forEach((u, ui) => u.questions.forEach((q, i) => tag(q, d[`u${ui}.${i}`])));
    } else {
      content.units.forEach((u, ui) => u.questions.forEach((q, i) => tag(q, d[`${ui}.${i}`])));
      BASE_CONCEPTS[id] = content.units.map((u) => u.concepts.length);
    }
  }
  const BASE_CONCEPTS = {};

  // Append the extra concepts in content/deep/<id>.js to each unit. They go after the
  // original concepts, so saved concept keys keep pointing at the same concepts. Each extra
  // concept brings its own AP trap and flashcards; termOwner ties those cards to it.
  function deepen(id, content) {
    const deep = (window.AP_DEEP && window.AP_DEEP[id]) || {};
    content.units.forEach((u, ui) => {
      u.core = u.concepts.length;
      (deep[content.extends ? `u${ui}` : ui] || []).forEach(({ terms = [], ...c }) => {
        const ci = u.concepts.length;
        u.concepts.push({ ...c, deep: true });
        terms.forEach((t) => { u.terms.push(t); (u.termOwner ||= [])[u.terms.length - 1] = ci; });
      });
    });
  }

  // Map each flashcard term to the concept whose text mentions it (fallback: best word overlap).
  const termMaps = {};
  function termConcepts(courseId, unitIdx) {
    const k = `${courseId}|${unitIdx}`;
    if (termMaps[k]) return termMaps[k];
    const unit = window.AP_CONTENT[courseId].units[unitIdx];
    const texts = unit.concepts.map((c) => `${c.title} ${c.simple} ${c.detail} ${c.example || ""} ${c.hook || ""}`.toLowerCase());
    const words = (s) => new Set(s.toLowerCase().match(/[a-z]{4,}/g) || []);
    termMaps[k] = unit.terms.map(([term, def], ti) => {
      if (unit.termOwner?.[ti] !== undefined) return unit.termOwner[ti];
      const t = term.toLowerCase().replace(/\s*\(.*?\)\s*/g, " ").trim();
      const parts = t.split(/\s*\/\s*/);
      let best = texts.findIndex((x) => parts.some((p) => p.length > 2 && x.includes(p)));
      if (best < 0) {
        const w = words(`${term} ${def}`);
        let score = -1;
        texts.forEach((x, i) => {
          const s = [...w].filter((y) => x.includes(y)).length;
          if (s > score) { score = s; best = i; }
        });
      }
      return Math.max(0, best);
    });
    return termMaps[k];
  }

  // A multiple-choice question generated from a flashcard term (term → definition or definition → term).
  function termQuestion(courseId, unitIdx, termIdx) {
    const units = window.AP_CONTENT[courseId].units;
    const [term, def] = units[unitIdx].terms[termIdx];
    let others = units[unitIdx].terms.filter((_, i) => i !== termIdx);
    if (others.length < 3) others = others.concat(units.flatMap((u, i) => (i === unitIdx ? [] : u.terms)));
    const distractors = shuffle(others).slice(0, 3);
    const forward = Math.random() < 0.5;
    const opts = shuffle([[term, def], ...distractors]);
    const answer = opts.findIndex(([t]) => t === term);
    const why = {};
    opts.forEach(([t, d], i) => {
      if (i === answer) return;
      why[i] = forward ? `That's the definition of "${t}".` : `"${t}" means: ${d}`;
    });
    return {
      gen: true,
      concept: termConcepts(courseId, unitIdx)[termIdx],
      q: forward ? `Which best describes "${term}"?` : `Which term matches this description?\n"${def}"`,
      choices: opts.map(([t, d]) => (forward ? d : t)),
      answer,
      explain: `"${term}" means: ${def}`,
      why,
    };
  }

  /* ---------- Items ---------- */

  const item = (courseId, unitIdx, qIdx) => {
    const q = window.AP_CONTENT[courseId].units[unitIdx].questions[qIdx];
    return { courseId, unitIdx, key: `${courseId}|${unitIdx}|${qIdx}`, q };
  };
  const termItem = (courseId, unitIdx, termIdx) =>
    ({ courseId, unitIdx, key: `${courseId}|${unitIdx}|t${termIdx}`, q: termQuestion(courseId, unitIdx, termIdx) });

  // Every question that practices one concept: authored ones first, then flashcard-generated ones.
  function pool(courseId, unitIdx, conceptIdx) {
    const unit = window.AP_CONTENT[courseId].units[unitIdx];
    const authored = unit.questions.map((q, i) => (q.concept === conceptIdx ? i : -1)).filter((i) => i >= 0);
    const terms = termConcepts(courseId, unitIdx).map((c, i) => (c === conceptIdx ? i : -1)).filter((i) => i >= 0);
    return { authored, terms };
  }

  // n questions for one concept, mixing authored and generated so there's always enough to practice.
  function conceptItems(courseId, unitIdx, conceptIdx, n, excludeKey) {
    const { authored, terms } = pool(courseId, unitIdx, conceptIdx);
    const out = shuffle(authored).map((i) => item(courseId, unitIdx, i)).filter((x) => x.key !== excludeKey);
    const unitTerms = window.AP_CONTENT[courseId].units[unitIdx].terms.map((_, i) => i);
    const termOrder = [...shuffle(terms), ...shuffle(unitTerms.filter((i) => !terms.includes(i)))];
    const filler = [];
    for (const t of termOrder) {
      if (out.length + filler.length >= n) break;
      const it = termItem(courseId, unitIdx, t);
      if (terms.includes(t)) out.push(it);
      else filler.push({ ...it, q: { ...it.q, concept: conceptIdx } }); // unit-level filler still counts toward this concept
    }
    return [...shuffle(out), ...filler].slice(0, n); // the concept's own questions come first
  }

  /* ---------- Learner state ---------- */

  const conceptKey = (courseId, unitIdx, conceptIdx) => `${courseId}|${unitIdx}|${conceptIdx}`;
  const state = (key) => store.data.cs[key] || { m: 0, n: 0, ok: 0, streak: 0, due: 0, last: 0 };

  function status(s) {
    if (!s.n) return { id: "new", label: "Not started" };
    if (s.m >= 0.8) return { id: "strong", label: "Strong" };
    if (s.m >= 0.5) return { id: "learning", label: "Developing" };
    return { id: "weak", label: "Needs review" };
  }

  // Update question, concept and history after an answer. Returns the concept change for the UI.
  function record(it, picked, ok) {
    const now = Date.now();
    const prev = store.data.q[it.key] || { n: 0 };
    store.data.q[it.key] = { c: ok, n: prev.n + 1, p: picked };
    store.data.hist.push({ k: it.key, t: now, ok, p: picked });
    if (store.data.hist.length > 4000) store.data.hist = store.data.hist.slice(-4000);

    const ck = conceptKey(it.courseId, it.unitIdx, it.q.concept);
    const s = { ...state(ck) };
    const before = s.n ? s.m : 0;
    if (!s.n) s.m = ok ? 0.6 : 0.15;
    else s.m = ok ? s.m + (1 - s.m) * 0.35 : s.m * 0.6;
    s.n++; s.ok += ok ? 1 : 0; s.last = now;
    s.streak = ok ? s.streak + 1 : 0;
    s.due = ok ? now + REVIEW_DAYS[Math.min(s.streak - 1, REVIEW_DAYS.length - 1)] * DAY : now;
    store.data.cs[ck] = s;
    markStudied();
    store.save();
    return { ck, before, after: s.m, state: s };
  }

  const reviewInDays = (s) => Math.max(0, Math.round((s.due - Date.now()) / DAY));

  /* ---------- Course-level views ---------- */

  function concepts(courseId) {
    const content = window.AP_CONTENT[courseId];
    return content.units.flatMap((u, ui) => u.concepts.map((c, ci) => {
      const key = conceptKey(courseId, ui, ci);
      return { courseId, unitIdx: ui, conceptIdx: ci, key, title: c.title, unitTitle: u.title, s: state(key) };
    }));
  }

  function unitMastery(courseId, unitIdx) {
    const u = window.AP_CONTENT[courseId].units[unitIdx];
    const ss = u.concepts.map((_, ci) => state(conceptKey(courseId, unitIdx, ci)));
    const tried = ss.filter((s) => s.n).length;
    const pct = Math.round((ss.reduce((a, s) => a + s.m, 0) / ss.length) * 100);
    const count = (id) => ss.filter((s) => status(s).id === id).length;
    return { pct, tried, total: ss.length, strong: count("strong"), developing: count("learning"), weak: count("weak"), fresh: count("new") };
  }

  function courseMastery(courseId) {
    const cs = concepts(courseId);
    return {
      pct: Math.round((cs.reduce((a, c) => a + c.s.m, 0) / cs.length) * 100),
      total: cs.length,
      tried: cs.filter((c) => c.s.n).length,
      strong: cs.filter((c) => status(c.s).id === "strong").length,
      weak: cs.filter((c) => status(c.s).id === "weak").length,
      developing: cs.filter((c) => status(c.s).id === "learning").length,
      due: cs.filter((c) => c.s.n && c.s.due <= Date.now()).length,
    };
  }

  /* ---------- Session builders ---------- */

  // ~12 authored questions spread across every unit, one concept at a time.
  // Quick diagnostic: ~12 written questions spread across every unit.
  // Full diagnostic (full = true): every concept at least once, then more questions up to n (default 42).
  function diagnostic(courseId, n = 12, full = false) {
    const units = window.AP_CONTENT[courseId].units;
    if (full) {
      const used = new Set();
      const out = [];
      const add = (it) => { if (it && !used.has(it.key) && out.length < n) { used.add(it.key); out.push(it); } };
      // Pass 1: one question per concept (a written one when it exists), taking turns between
      // units so every unit is covered even when n is smaller than the number of concepts.
      const queues = units.map((u, ui) => {
        const cs = shuffle(u.concepts.map((_, ci) => ci));
        return [...cs.filter((ci) => pool(courseId, ui, ci).authored.length), ...cs.filter((ci) => !pool(courseId, ui, ci).authored.length)];
      });
      while (out.length < n && queues.some((q) => q.length)) {
        queues.forEach((q, ui) => {
          if (!q.length) return;
          const ci = q.shift();
          const a = shuffle(pool(courseId, ui, ci).authored);
          if (a.length) add(item(courseId, ui, a[0]));
          else add(conceptItems(courseId, ui, ci, 6).find((it) => !used.has(it.key))); // skip generated questions already used
        });
      }
      // Pass 2: the remaining written questions, then flashcard-generated ones, round-robin by concept.
      const rest = units.flatMap((u, ui) => u.questions.map((_, qi) => item(courseId, ui, qi))).filter((it) => !used.has(it.key));
      shuffle(rest).forEach(add);
      for (let round = 0; out.length < n && round < 4; round++) {
        units.forEach((u, ui) => u.concepts.forEach((_, ci) => { conceptItems(courseId, ui, ci, 3).forEach(add); }));
      }
      return shuffle(out);
    }
    const perUnit = units.map((u, ui) => shuffle(u.concepts.map((_, ci) => ci).filter((ci) => pool(courseId, ui, ci).authored.length)));
    const out = [];
    for (let round = 0; out.length < n && perUnit.some((l) => l.length); round++) {
      perUnit.forEach((list, ui) => {
        if (out.length >= n || !list.length) return;
        const ci = list.shift();
        const qi = shuffle(pool(courseId, ui, ci).authored)[0];
        out.push(item(courseId, ui, qi));
      });
    }
    return out;
  }

  // Due reviews first, then weak concepts, then new ones in course order, then the least-mastered rest.
  function smartSession(courseIds, n = 10, focusKeys = [], exclude = new Set()) {
    const now = Date.now();
    const all = courseIds.flatMap((id) => concepts(id));
    const focus = focusKeys.map((k) => all.find((c) => c.key === k)).filter(Boolean);
    const due = all.filter((c) => c.s.n && c.s.due <= now).sort((a, b) => a.s.m - b.s.m);
    const weak = all.filter((c) => c.s.n && c.s.m < 0.5).sort((a, b) => a.s.m - b.s.m);
    const fresh = all.filter((c) => !c.s.n);
    const rest = all.filter((c) => c.s.n).sort((a, b) => a.s.m - b.s.m);
    const seen = new Set();
    const picked = [];
    const tagged = [
      ...focus.map((c) => [c, "focus"]), ...due.map((c) => [c, "due"]), ...weak.map((c) => [c, "weak"]),
      ...fresh.map((c) => [c, "new"]), ...rest.map((c) => [c, "practice"]),
    ];
    for (const [c, reason] of tagged) {
      if (picked.length >= n) break;
      if (seen.has(c.key) || exclude.has(c.key)) continue;
      seen.add(c.key);
      picked.push({ ...c, reason });
    }
    return picked.map((c) => {
      const { authored } = pool(c.courseId, c.unitIdx, c.conceptIdx);
      // Prefer an authored question the student hasn't gotten right yet.
      const open = authored.filter((i) => !store.data.q[`${c.courseId}|${c.unitIdx}|${i}`]?.c);
      const qi = shuffle(open.length ? open : authored)[0];
      const it = qi != null ? item(c.courseId, c.unitIdx, qi) : conceptItems(c.courseId, c.unitIdx, c.conceptIdx, 1)[0];
      return it && { ...it, reason: c.reason };
    }).filter(Boolean);
  }

  // "What should I study today?": a time-boxed plan from open mistakes, due reviews, weak and new concepts.
  const MIN_PER_QUESTION = 1;
  function studyPlan(minutes, courseIds) {
    const n = Math.max(3, Math.round(minutes / MIN_PER_QUESTION));
    const open = mistakesIn(courseIds).slice(0, Math.ceil(n * 0.3));
    const redo = open.map((m) => ({ ...item(m.courseId, m.unitIdx, m.qIdx), reason: "mistake" }));
    const covered = new Set(redo.map((it) => conceptKey(it.courseId, it.unitIdx, it.q.concept)));
    const rest = smartSession(courseIds, n - redo.length, [], covered);
    const items = [...redo, ...rest];
    const blocks = ["mistake", "due", "weak", "new", "practice"].map((reason) => {
      const its = items.filter((it) => it.reason === reason);
      const titles = [...new Set(its.map((it) => window.AP_CONTENT[it.courseId].units[it.unitIdx].concepts[it.q.concept].title))];
      return { reason, count: its.length, titles };
    }).filter((b) => b.count);
    return { items: interleave(items), blocks, minutes: Math.round(items.length * MIN_PER_QUESTION) };
  }

  // Avoid long runs of the same concept or course.
  function interleave(items) {
    const out = [];
    const pool = items.slice();
    while (pool.length) {
      const last = out[out.length - 1];
      const i = pool.findIndex((x) => !last || x.q.concept !== last.q.concept || x.unitIdx !== last.unitIdx);
      out.push(pool.splice(i < 0 ? 0 : i, 1)[0]);
    }
    return out;
  }

  // Open (still wrong) authored mistakes, newest first.
  function mistakesIn(courseIds) {
    const last = {};
    store.data.hist.forEach((h) => { last[h.k] = h.t; });
    return Object.entries(store.data.q)
      .filter(([k, r]) => !r.c && /\|\d+$/.test(k))
      .map(([k, r]) => { const [courseId, u, q] = k.split("|"); return { key: k, courseId, unitIdx: +u, qIdx: +q, picked: r.p, t: last[k] || 0 }; })
      .filter((m) => courseIds.includes(m.courseId) && window.AP_CONTENT[m.courseId]?.units?.[m.unitIdx]?.questions?.[m.qIdx])
      .sort((a, b) => b.t - a.t);
  }

  // Which concept a question key belongs to (authored "u|q" or flashcard-generated "u|t<term>").
  function conceptOfKey(key) {
    const [courseId, u, q] = key.split("|");
    const unit = window.AP_CONTENT[courseId]?.units?.[+u];
    if (!unit) return null;
    const ci = q[0] === "t" ? termConcepts(courseId, +u)[+q.slice(1)] : unit.questions[+q]?.concept;
    return ci == null ? null : conceptKey(courseId, +u, ci);
  }

  // Everything we know about a student's errors on one concept.
  function errorProfile(ck) {
    const [courseId, u, c] = ck.split("|");
    const wrong = store.data.hist.filter((h) => !h.ok && conceptOfKey(h.k) === ck);
    const notes = [];
    const seen = new Set();
    [...wrong].reverse().forEach((h) => {
      const [, , q] = h.k.split("|");
      if (q[0] === "t") return;
      const qq = window.AP_CONTENT[courseId].units[+u].questions[+q];
      const pick = h.p ?? store.data.q[h.k]?.p;
      const note = qq && pick != null && qq.why && qq.why[pick];
      if (note && !seen.has(note)) { seen.add(note); notes.push(note); }
    });
    const concept = window.AP_CONTENT[courseId].units[+u].concepts[+c];
    return { misses: wrong.length, notes: notes.slice(0, 2), trap: concept.trap, concept };
  }

  // Unit check: two questions per concept (written first, flashcard-generated to fill).
  function unitCheck(courseId, unitIdx, perConcept = 2) {
    const u = window.AP_CONTENT[courseId].units[unitIdx];
    return interleave(shuffle(u.concepts.flatMap((_, ci) =>
      conceptItems(courseId, unitIdx, ci, pool(courseId, unitIdx, ci).authored.length ? perConcept : 1))));
  }

  // A focused review around specific weak concepts (used after diagnostics and unit checks).
  function focusedReview(keys, perConcept = 3) {
    return interleave(keys.flatMap((k) => {
      const [courseId, u, c] = k.split("|");
      return conceptItems(courseId, +u, +c, perConcept);
    }));
  }

  /* ---------- Analytics ---------- */

  function weakest(courseIds, n = 5) {
    return courseIds.flatMap((id) => concepts(id))
      .filter((c) => c.s.n && status(c.s).id !== "strong")
      .sort((a, b) => a.s.m - b.s.m || b.s.last - a.s.last)
      .slice(0, n);
  }

  function due(courseIds) {
    const now = Date.now();
    return courseIds.flatMap((id) => concepts(id)).filter((c) => c.s.n && c.s.due <= now);
  }

  function weekStats() {
    const since = Date.now() - 7 * DAY;
    const week = store.data.hist.filter((h) => h.t >= since);
    return {
      answered: week.length,
      correct: week.filter((h) => h.ok).length,
      mistakes: week.filter((h) => !h.ok).length,
    };
  }

  // One clear "do this next" suggestion.
  function recommend(courseIds) {
    const active = courseIds.filter((id) => concepts(id).some((c) => c.s.n));
    const d = due(active);
    if (d.length) return { kind: "review", title: `Review ${d.length} concept${d.length === 1 ? "" : "s"} due today`, reason: "Spaced review locks in what you've learned before you forget it.", courses: [...new Set(d.map((c) => c.courseId))] };
    const w = weakest(active, 1)[0];
    if (w) return { kind: "concept", title: `Fix your weakest concept: ${w.title}`, reason: `${courseById[w.courseId].name} · Unit ${w.unitIdx + 1}. You're at ${Math.round(w.s.m * 100)}% mastery.`, concept: w };
    // The diagnostic is optional: courses the student chose to skip it for get "start learning" instead.
    const needsDiag = courseIds.find((id) => !store.data.diag[id] && !store.data.skip?.[id] && !active.includes(id));
    if (needsDiag) return { kind: "diagnostic", title: `Take the ${courseById[needsDiag].name} diagnostic`, reason: "5 minutes to find out exactly which concepts you don't know yet. Optional: you can skip it and start learning.", courseId: needsDiag };
    const fresh = courseIds.find((id) => !active.includes(id));
    if (!active.length && fresh) return { kind: "learn", title: `Start learning ${courseById[fresh].name}`, reason: "Begin with Unit 1's concepts. Each question you answer builds your mastery.", courseId: fresh };
    const next = active[0] || courseIds[0];
    return next ? { kind: "smart", title: "Continue smart practice", reason: "Keep building mastery on concepts you haven't locked in yet.", courseId: next } : null;
  }

  // Rebuild concept states from older question-only progress (saved before the engine existed).
  function migrate() {
    if (store.data.v >= 2) return;
    Object.entries(store.data.q).forEach(([key, r]) => {
      const [courseId, u, q] = key.split("|");
      const qq = window.AP_CONTENT[courseId]?.units?.[+u]?.questions?.[+q];
      if (!qq) return;
      const ck = conceptKey(courseId, +u, qq.concept);
      const s = { ...state(ck) };
      s.m = s.n ? (r.c ? s.m + (1 - s.m) * 0.35 : s.m * 0.6) : (r.c ? 0.6 : 0.15);
      s.n++; s.ok += r.c ? 1 : 0; s.streak = r.c ? s.streak + 1 : 0;
      s.due = Date.now() + (r.c ? DAY : 0); s.last = Date.now();
      store.data.cs[ck] = s;
    });
    store.data.v = 2;
    store.save();
  }

  return {
    annotate, deepen, pool, conceptItems, item, record, state, status, conceptKey, reviewInDays,
    concepts, unitMastery, courseMastery, diagnostic, smartSession, weakest, due, weekStats, recommend, migrate,
    studyPlan, mistakesIn, conceptOfKey, errorProfile, unitCheck, focusedReview, MIN_PER_QUESTION,
  };
})();
