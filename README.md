# Crack AP 📘

**Stop rereading. Find what you actually don't know.**

A free, adaptive AP learning system built by our school's **Vibe Coding Club**. Instead of an AP
textbook on a website, it works like a personal coach: it diagnoses which concepts you're weak at,
explains *why* you're getting them wrong, drills exactly those concepts, and brings each one back
right before you'd forget it.

**[Live demo →](https://xcodevoid.github.io/Crack-AP/)**

## The learning loop

Learn what you need → understand it → practice it → identify mistakes → review weak areas → prove you mastered it.

```
5-minute diagnostic → weak concepts pinpointed → question → answer → why you picked it
      ↑                                                            │
      │                                           wrong? → "Weak concept detected"
      │                                                  → 30-second refresher
      │                                                  → 3 targeted questions
      │                                                  → "Recovered" or "Still shaky"
      └──────── spaced review after 1, 3, 7, 14, 30 days ◄────────┘
```

## Features

- ⚡ **"What should I study today?"**: pick 5, 12, 20 or 30 minutes and get a personalized plan built from your
  open mistakes, reviews due today, weakest concepts and new ones. No need to choose a course or unit.
- 📚 **Deep unit coverage**: about 1,000 key concepts across 19 AP courses plus SAT (6–10 per unit), each with a plain-English
  explanation, exam-level detail, and its own flashcards. A clickable concept list opens every unit.
- ⚠️ **AP Traps**: every concept has a hand-written trap showing how the exam catches students on it.
- 📝 **Learn → Trap → Try it**: every concept ends with an inline AP-style question, a prompt to explain your
  answer before checking it, and "Similar question" for more practice.
- 🔬 **Unit checks**: one or two questions per concept, ending with "You understand 3 of 4 Unit 2 concepts. You're
  struggling with Elasticity. Here's a 4-minute review designed around that weakness."
- 🩺 **Diagnostic, quick or full**: 12 questions (~5 min) across every unit, or a full diagnostic of up to 50
  questions that rotates through every unit (you can finish early). The report shows your strong and weak *concepts*
  (not just units), with an explanation for everything you missed.
  The diagnostic is optional: "Skip it: learn concepts" starts at Unit 1, and mastery builds as you practice.
- 🎯 **Concept-level mastery**: every question is tagged to a concept. Each concept has a mastery score
  and a status: Strong, Developing, Needs review, or Not started. Every unit shows "73% mastery ·
  6 strong · 4 developing · 2 need review", and Progress has a per-unit mastery table.
- ✍️ **Active learning**: each concept has "Explain it in your own words" (write, compare with the key
  points, rate yourself), and every unit has Drills built from its flashcards: fill in the blank, matching,
  and sorting terms into their concepts. All of it feeds mastery.
- 🔗 **Connected concepts**: 118 hand-written idea chains ("Enzymes → power → Cellular respiration → …")
  show how concepts cause or lead to each other across units, on each course page and each concept.
- 🧠 **Mistakes grouped by concept**: "Elasticity: 42% mastery. You've missed 4 questions involving this concept."
  Every missed question is analyzed in five parts: what you misunderstood, the concept behind it, why the
  correct answer is right, what to remember, and a similar question to try right there.
- ⚡ **Smart practice**: due reviews first, then your weakest concepts, then new ones. Miss a question and
  it detects the weak concept, gives a refresher, and drills it on the spot.
- 🗓️ **Spaced review**: concepts you get right come back after 1 → 3 → 7 → 14 → 30 days. Misses come
  back in the next session, with a prompt: "You learned this 5 days ago. Let's see if you still remember it."
- 🃏 **Unlimited targeted questions**: besides 566 written questions, every flashcard term becomes a
  generated question tied to its concept, so each concept always has enough to practice.
- 📈 **Progress = mastery**: a table of every concept with its mastery %, status and last practice date,
  sorted weakest first, plus "Recommended next" for each course.
- 📖 **Study guides**: plain-English concepts with exam-level detail, flashcards, free-response
  practice with scoring guides, common mistakes, and exam strategy for 19 AP courses.
- 🗂️ **All 42 AP courses (2026-27)**: exam formats, 2027 changes, and official CED links.
- 📝 **SAT prep**: the digital SAT's eight content domains (Reading and Writing plus Math) as units, with
  original practice questions and the same adaptive tools, plus links to the free official practice tests.
- 🔎 Search (`/` or `Ctrl K`), timed mixed quizzes, dark mode, mobile layout, keyboard shortcuts.
- 🔑 **Student codes**: sign in with a code like `AP-7K3QXM` (or make your own) and your progress is kept
  separate from everyone else who uses the same computer. No email, no Google, no server, so it works
  in China too. A guest's progress can move into a new code.
- 🔒 **Local-first**: no tracking. Progress lives in `localStorage`, with backup/restore as a JSON file
  (the way to move a code's progress to another device).
- 📄 **One file**: the whole site builds into a single self-contained `index.html`.

Adaptive courses: AP Precalculus, Calculus AB, Calculus BC, Physics 1, Physics 2, Physics C: Mechanics,
Physics C: E&M, Chemistry, Biology, Environmental Science, Microeconomics, Macroeconomics, Psychology,
U.S. History, World History: Modern, U.S. Government and Politics, Human Geography, English Language,
English Literature. Plus SAT prep.

## Running it locally

No dependencies. Just Python 3 to build.

```bash
git clone https://github.com/Xcodevoid/Crack-AP.git
cd Crack-AP
python3 build.py          # bundles everything into index.html
open index.html           # or double-click it; no server needed
```

**After editing anything in `src/`, `data/` or `content/`, run `python3 build.py` again.**
The deploy workflow also runs it automatically before publishing.

## Project structure

```
index.html                   GENERATED: the whole site in one file (don't edit by hand)
build.py                     inlines everything below into index.html
src/index.html               page template (header, footer, @inline markers)
src/style.css                design system: tokens, light/dark theme, components
src/engine.js                the learning engine: concept mastery, spaced review, diagnostic,
                             smart-practice selection, flashcard-generated questions, analytics
src/app.js                   views: home, course, unit tabs, session runner (the learning loop),
                             diagnostic report, mistakes, dashboard, search
data/catalog.js              all 42 courses: exam format, weights, units, 2026-27 changes, CED links
content/<id>.js              study guide for one course (concepts, terms, questions, FRQs)
content/diagnostics/<id>.js  concept tag + wrong-answer notes for every question in that guide
content/traps/<id>.js        one "AP Trap" per concept
content/deep/<id>.js         more key concepts per unit, each with its own trap and flashcards
content/links/<id>.js        idea chains connecting concepts across units (format in content/links/_README.txt)
research/                    notes from researching the official College Board CEDs
```

### The data model

Progress is stored per browser: `apprep.v1` for a guest and `apprep.v1.s.<CODE>` for each student
code (`apprep.student` remembers who is signed in). It's shaped so it can later sync to a backend:

```
learner
 ├── cs[course|unit|concept]   mastery 0–1, attempts, streak, next review date
 ├── q[course|unit|question]   latest result + the choice picked
 ├── hist[]                    every answer with a timestamp
 ├── diag[course]              last diagnostic score
 └── known, frq, mine, days    flashcards, free responses, my courses, study streak
```

Mastery update (rules-based): a first answer sets mastery to 60% if right or 15% if wrong. After that,
a right answer closes 35% of the gap to 100%, and a wrong answer keeps 60% of current mastery.

## Adding a study guide (great club project!)

1. Pick a course in `data/catalog.js` and note its `id` (e.g. `"chemistry"`).
2. Create `content/<id>.js`, copying the shape of `content/biology.js`. `build.py` picks it up automatically:

```js
window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["chemistry"] = {
  tips: ["Exam strategy tip…"],
  units: [
    {
      title: "Atomic Structure and Properties",
      weight: "7–9%",                        // from the official CED
      tldr: "One- or two-sentence big idea.",
      concepts: [
        { title: "…", simple: "Plain-English explanation", detail: "Exam-level detail",
          example: "optional worked example", hook: "optional memory trick" },
      ],
      terms: [["Term", "Definition"]],
      mistakes: ["A common mistake students make"],
      questions: [
        { q: "Question text", choices: ["A", "B", "C", "D"], answer: 2,   // index of correct choice
          explain: "Why the answer is right (and why the trap answer is wrong)" },
      ],
      frq: { prompt: "Free-response prompt (\\n for new lines)", points: ["Scoring point 1", "…"] },
    },
  ],
};
```

3. Create `content/diagnostics/<id>.js`, tagging every question with its concept index and adding a
   "why a student might pick this" note for each wrong choice (see `content/diagnostics/biology.js`).
   Add `content/traps/<id>.js` with one AP Trap per concept.
   To cover more of a unit, add concepts in `content/deep/<id>.js` (keyed by unit index), each with
   `title`, `simple`, `detail`, `trap` and 2–3 `terms`. They're appended after the unit's original
   concepts, so saved progress keeps pointing at the right concepts.
4. Set `guide: true` on that course in `data/catalog.js`.
   - A guide can build on another one: `content/calculus-bc.js` uses `extends: "calculus-ab"`
     to reuse AB's units, with BC exam `weights`, BC-only `patches` per unit, and extra `units`.
   - Units that aren't weighted by topic (like English Language's skills) can use
     `weightLabel` instead of `weight`.
5. Run `python3 build.py` and open `index.html` to check your guide.
6. Check facts against the official CED. Write **original** questions. Don't copy College
   Board's released exam questions.

## Disclaimer

Not affiliated with or endorsed by College Board. AP® is a trademark registered by College Board.
Course details come from the public 2026-27 course and exam descriptions. Always check the
official CED for the final word.

## License

MIT. See [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
