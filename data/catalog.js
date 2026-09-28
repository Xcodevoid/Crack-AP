// Every AP course for 2026-27 (first exams May 2027), taken from the College Board
// course and exam descriptions (see research/ap-course-catalog.md).
// `guide: true` means content/<id>.js holds a full unit-by-unit study guide.

const CED = (slug) => `https://apcentral.collegeboard.org/media/pdf/${slug}-course-and-exam-description.pdf`;
const PAGE = (slug) => `https://apcentral.collegeboard.org/courses/${slug}`;

const HISTORY_EXAM = [
  { name: "Multiple choice", detail: "55 questions · 55 min", weight: 40 },
  { name: "Short answer", detail: "3 required questions · 40 min", weight: 20 },
  { name: "Document-based question", detail: "1 essay · 60 min (incl. reading)", weight: 25 },
  { name: "Long essay", detail: "1 required prompt · 40 min", weight: 15 },
];
const HISTORY_CHANGE = "Starting May 2027, all three short-answer questions are required with no choice (Q1 secondary source, Q2 primary source, Q3 non-text source), and the long essay is one required, broad prompt. The multiple-choice section is unchanged.";

const LANGUAGE_CHANGE = "Revised for 2026-27: the six Language and Culture courses now share one set of skills and one exam design. A course project (a presentation followed by live Q&A) replaces the old cultural presentation, and the exam is fully digital in Bluebook. For 2026-27 the project theme is Unit 3, Art & Creativity, seen through music. Your Personalized Project Reference (an outline) is due April 30.";

const LANGUAGE_EXAM = (mcq) => [
  { name: "Multiple choice", detail: mcq },
  { name: "Free response", detail: "Writing and speaking tasks" },
  { name: "Course project", detail: "Presentation + Q&A on a researched cultural topic" },
];

const CATEGORIES = [
  "History & Social Sciences",
  "Math & Computer Science",
  "Sciences",
  "English",
  "Arts",
  "World Languages & Cultures",
  "AP Capstone",
  "Career Kickstart",
];

const COURSES = [
  // ---------- History & Social Sciences ----------
  {
    id: "us-history", name: "AP U.S. History", cat: "History & Social Sciences", guide: true, status: "changed",
    blurb: "American history from 1491 to today, and how historians argue about it.",
    exam: HISTORY_EXAM, changes: HISTORY_CHANGE,
    ced: CED("ap-us-history"), page: PAGE("ap-united-states-history"),
  },
  {
    id: "world-history", name: "AP World History: Modern", cat: "History & Social Sciences", guide: true, status: "changed",
    blurb: "Global history from c. 1200 to the present: empires, trade networks, revolutions and globalization.",
    exam: HISTORY_EXAM, changes: HISTORY_CHANGE,
    units: ["The Global Tapestry", "Networks of Exchange", "Land-Based Empires", "Transoceanic Interconnections", "Revolutions", "Consequences of Industrialization", "Global Conflict", "Cold War and Decolonization", "Globalization"],
    ced: CED("ap-world-history-modern"), page: PAGE("ap-world-history"),
  },
  {
    id: "european-history", name: "AP European History", cat: "History & Social Sciences", guide: true, status: "changed",
    blurb: "Europe from the Renaissance (c. 1450) to the present day.",
    exam: HISTORY_EXAM, changes: HISTORY_CHANGE,
    units: ["Renaissance and Exploration", "Age of Reformation", "Absolutism and Constitutionalism", "Scientific, Philosophical, and Political Developments", "Conflict, Crisis, and Reaction in the Late 18th Century", "Industrialization and Its Effects", "19th-Century Perspectives and Political Developments", "20th-Century Global Conflicts", "Cold War and Contemporary Europe"],
    ced: CED("ap-european-history"), page: PAGE("ap-european-history"),
  },
  {
    id: "african-american-studies", name: "AP African American Studies", cat: "History & Social Sciences", guide: true,
    blurb: "An interdisciplinary look at the African diaspora through history, literature, arts and politics.",
    exam: [
      { name: "Multiple choice", detail: "Source-based questions" },
      { name: "Free response", detail: "Short answers and a source analysis" },
      { name: "Individual student project", detail: "Research project completed during the year" },
    ],
    units: ["Origins of the African Diaspora", "Freedom, Enslavement, and Resistance", "The Practice of Freedom", "Movements and Debates"],
    ced: CED("ap-african-american-studies"), page: PAGE("ap-african-american-studies"),
  },
  {
    id: "us-government", name: "AP U.S. Government and Politics", cat: "History & Social Sciences", guide: true,
    blurb: "How the U.S. Constitution, institutions and citizens shape American politics.",
    exam: [
      { name: "Multiple choice", detail: "55 questions · 80 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 100 min: concept application, quantitative analysis, SCOTUS comparison, argument essay", weight: 50 },
    ],
    units: ["Foundations of American Democracy", "Interactions Among Branches of Government", "Civil Liberties and Civil Rights", "American Political Ideologies and Beliefs", "Political Participation"],
    ced: CED("ap-us-government-and-politics"), page: PAGE("ap-united-states-government-and-politics"),
  },
  {
    id: "comparative-government", name: "AP Comparative Government and Politics", cat: "History & Social Sciences", guide: true,
    blurb: "Compare political systems across six countries: China, Iran, Mexico, Nigeria, Russia and the UK.",
    exam: [
      { name: "Multiple choice", detail: "55 questions · 60 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 90 min", weight: 50 },
    ],
    units: ["Political Systems, Regimes, and Governments", "Political Institutions", "Political Culture and Participation", "Party and Electoral Systems and Citizen Organizations", "Political and Economic Changes and Development"],
    ced: CED("ap-comparative-government-and-politics"), page: PAGE("ap-comparative-government-and-politics"),
  },
  {
    id: "human-geography", name: "AP Human Geography", cat: "History & Social Sciences", guide: true,
    blurb: "Why people, cultures, cities and economies are located where they are.",
    exam: [
      { name: "Multiple choice", detail: "60 questions · 60 min", weight: 50 },
      { name: "Free response", detail: "3 questions · 75 min", weight: 50 },
    ],
    units: ["Thinking Geographically", "Population and Migration Patterns and Processes", "Cultural Patterns and Processes", "Political Patterns and Processes", "Agriculture and Rural Land-Use Patterns and Processes", "Cities and Urban Land-Use Patterns and Processes", "Industrial and Economic Development Patterns and Processes"],
    ced: CED("ap-human-geography"), page: PAGE("ap-human-geography"),
  },
  {
    id: "psychology", name: "AP Psychology", cat: "History & Social Sciences", guide: true,
    blurb: "The science of behavior and mental processes, from neurons to social groups.",
    exam: [
      { name: "Multiple choice", detail: "75 questions · 90 min", weight: 66.7 },
      { name: "Free response", detail: "2 questions · 70 min: Article Analysis (AAQ) + Evidence-Based (EBQ)", weight: 33.3 },
    ],
    ced: CED("ap-psychology"), page: PAGE("ap-psychology"),
  },
  {
    id: "macroeconomics", name: "AP Macroeconomics", cat: "History & Social Sciences", guide: true,
    blurb: "The economy as a whole: GDP, inflation, unemployment, money and policy.",
    exam: [
      { name: "Multiple choice", detail: "60 questions · 70 min", weight: 66.7 },
      { name: "Free response", detail: "3 questions · 60 min", weight: 33.3 },
    ],
    units: ["Basic Economic Concepts", "Economic Indicators and the Business Cycle", "National Income and Price Determination", "Financial Sector", "Long-Run Consequences of Stabilization Policies", "Open Economy: International Trade and Finance"],
    ced: null, page: PAGE("ap-macroeconomics"),
  },
  {
    id: "microeconomics", name: "AP Microeconomics", cat: "History & Social Sciences", guide: true, status: "changed",
    blurb: "How individuals, firms and markets make choices about scarce resources.",
    exam: [
      { name: "Multiple choice", detail: "60 questions · 70 min", weight: 66.7 },
      { name: "Free response", detail: "3 questions · 60 min", weight: 33.3 },
    ],
    changes: "A revised course and exam description takes effect in fall 2026. This guide follows the six-unit framework; check the official CED for any topic changes.",
    ced: CED("ap-microeconomics"), page: PAGE("ap-microeconomics"),
  },

  // ---------- Math & Computer Science ----------
  {
    id: "calculus-ab", name: "AP Calculus AB", cat: "Math & Computer Science", guide: true,
    blurb: "Limits, derivatives and integrals: the math of change and accumulation.",
    exam: [
      { name: "Multiple choice", detail: "45 questions · 1 hr 45 min (part no-calculator, part calculator)", weight: 50 },
      { name: "Free response", detail: "6 questions · 1 hr 30 min (2 calculator, 4 no-calculator)", weight: 50 },
    ],
    ced: CED("ap-calculus-ab-and-bc"), page: PAGE("ap-calculus-ab"),
  },
  {
    id: "calculus-bc", name: "AP Calculus BC", cat: "Math & Computer Science", guide: true,
    blurb: "Everything in Calculus AB plus parametric, polar and vector functions and infinite series.",
    exam: [
      { name: "Multiple choice", detail: "45 questions · 1 hr 45 min", weight: 50 },
      { name: "Free response", detail: "6 questions · 1 hr 30 min", weight: 50 },
    ],
    units: ["Limits and Continuity", "Differentiation: Definition and Fundamental Properties", "Differentiation: Composite, Implicit, and Inverse Functions", "Contextual Applications of Differentiation", "Analytical Applications of Differentiation", "Integration and Accumulation of Change", "Differential Equations", "Applications of Integration", "Parametric Equations, Polar Coordinates, and Vector-Valued Functions", "Infinite Sequences and Series"],
    related: "calculus-ab",
    ced: CED("ap-calculus-ab-and-bc"), page: PAGE("ap-calculus-bc"),
  },
  {
    id: "precalculus", name: "AP Precalculus", cat: "Math & Computer Science", guide: true,
    blurb: "Functions as models of change: polynomial, rational, exponential, logarithmic and trigonometric.",
    exam: [
      { name: "Multiple choice", detail: "40 questions · 2 hr", weight: 62.5 },
      { name: "Free response", detail: "4 questions · 1 hr", weight: 37.5 },
    ],
    units: ["Polynomial and Rational Functions", "Exponential and Logarithmic Functions", "Trigonometric and Polar Functions", "Functions Involving Parameters, Vectors, and Matrices (not on the exam)"],
    ced: CED("ap-precalculus"), page: PAGE("ap-precalculus"),
  },
  {
    id: "statistics", name: "AP Statistics", cat: "Math & Computer Science", guide: true, status: "changed",
    blurb: "Collecting, exploring and drawing conclusions from data.",
    exam: [
      { name: "Multiple choice", detail: "42 questions, 4 answer choices each" },
      { name: "Free response", detail: "4 questions, 10 points each (no Investigative Task)" },
    ],
    units: ["Exploring Data and Designing Studies", "Probability, Random Variables, and Sampling Distributions", "Inference for Categorical Data: Proportions", "Inference for Quantitative Data: Means", "Regression"],
    changes: "Revised for 2026-27: eight units are consolidated into five, and the Algebra II prerequisite is removed. Removed topics include departures from linearity, combining random variables, the geometric distribution, chi-square goodness of fit, and inference for slopes. The exam becomes fully digital.",
    ced: null, page: PAGE("ap-statistics"),
  },
  {
    id: "computer-science-a", name: "AP Computer Science A", cat: "Math & Computer Science", guide: true,
    blurb: "Object-oriented programming and problem solving in Java.",
    exam: [
      { name: "Multiple choice", detail: "42 questions · 90 min", weight: 55 },
      { name: "Free response", detail: "4 coding questions · 90 min", weight: 45 },
    ],
    units: ["Using Objects and Methods", "Selection and Iteration", "Class Creation", "Data Collections"],
    ced: CED("ap-computer-science-a"), page: PAGE("ap-computer-science-a"),
  },
  {
    id: "computer-science-principles", name: "AP Computer Science Principles", cat: "Math & Computer Science", guide: true,
    blurb: "The big ideas of computing: data, algorithms, the internet and computing's impact.",
    exam: [
      { name: "Multiple choice", detail: "70 questions · 2 hr", weight: 70 },
      { name: "Create performance task", detail: "Program built in class + written response on exam day", weight: 30 },
    ],
    units: ["Creative Development", "Data", "Algorithms and Programming", "Computer Systems and Networks", "Impact of Computing"],
    ced: CED("ap-computer-science-principles"), page: PAGE("ap-computer-science-principles"),
  },

  // ---------- Sciences ----------
  {
    id: "biology", name: "AP Biology", cat: "Sciences", guide: true,
    blurb: "From molecules to ecosystems: how living systems work and evolve.",
    exam: [
      { name: "Multiple choice", detail: "60 questions · 90 min", weight: 50 },
      { name: "Free response", detail: "6 questions · 90 min", weight: 50 },
    ],
    ced: CED("ap-biology"), page: PAGE("ap-biology"),
  },
  {
    id: "chemistry", name: "AP Chemistry", cat: "Sciences", guide: true,
    blurb: "Atoms, bonding, reactions, equilibrium and energy.",
    exam: [
      { name: "Multiple choice", detail: "60 questions · 90 min", weight: 50 },
      { name: "Free response", detail: "7 questions · 105 min", weight: 50 },
    ],
    units: ["Atomic Structure and Properties", "Compound Structure and Properties", "Properties of Substances and Mixtures", "Chemical Reactions", "Kinetics", "Thermochemistry", "Equilibrium", "Acids and Bases", "Thermodynamics and Electrochemistry"],
    ced: CED("ap-chemistry"), page: PAGE("ap-chemistry"),
  },
  {
    id: "environmental-science", name: "AP Environmental Science", cat: "Sciences", guide: true,
    blurb: "How natural systems work and how humans change them.",
    exam: [
      { name: "Multiple choice", detail: "80 questions · 90 min", weight: 60 },
      { name: "Free response", detail: "3 questions · 70 min", weight: 40 },
    ],
    units: ["The Living World: Ecosystems", "The Living World: Biodiversity", "Populations", "Earth Systems and Resources", "Land and Water Use", "Energy Resources and Consumption", "Atmospheric Pollution", "Aquatic and Terrestrial Pollution", "Global Change"],
    ced: CED("ap-environmental-science"), page: PAGE("ap-environmental-science"),
  },
  {
    id: "physics-1", name: "AP Physics 1: Algebra-Based", cat: "Sciences", guide: true,
    blurb: "Motion, forces, energy, momentum, rotation, oscillations and fluids.",
    exam: [
      { name: "Multiple choice", detail: "40 questions · 80 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 100 min", weight: 50 },
    ],
    units: ["Kinematics", "Force and Translational Dynamics", "Work, Energy, and Power", "Linear Momentum", "Torque and Rotational Dynamics", "Energy and Momentum of Rotating Systems", "Oscillations", "Fluids"],
    ced: CED("ap-physics-1"), page: PAGE("ap-physics-1"),
  },
  {
    id: "physics-2", name: "AP Physics 2: Algebra-Based", cat: "Sciences", guide: true,
    blurb: "Thermodynamics, electricity, magnetism, optics and modern physics.",
    exam: [
      { name: "Multiple choice", detail: "40 questions · 80 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 100 min", weight: 50 },
    ],
    units: ["Thermodynamics", "Electric Force, Field, and Potential", "Electric Circuits", "Magnetism and Electromagnetism", "Geometric Optics", "Waves, Sound, and Physical Optics", "Modern Physics"],
    ced: CED("ap-physics-2"), page: PAGE("ap-physics-2"),
  },
  {
    id: "physics-c-mechanics", name: "AP Physics C: Mechanics", cat: "Sciences", guide: true,
    blurb: "Calculus-based mechanics for future scientists and engineers.",
    exam: [
      { name: "Multiple choice", detail: "40 questions · 80 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 100 min", weight: 50 },
    ],
    units: ["Kinematics", "Force and Translational Dynamics", "Work, Energy, and Power", "Linear Momentum", "Torque and Rotational Dynamics", "Energy and Momentum of Rotating Systems", "Oscillations"],
    ced: CED("ap-physics-c-mechanics"), page: PAGE("ap-physics-c-mechanics"),
  },
  {
    id: "physics-c-em", name: "AP Physics C: Electricity and Magnetism", cat: "Sciences", guide: true,
    blurb: "Calculus-based electrostatics, circuits, magnetism and induction.",
    exam: [
      { name: "Multiple choice", detail: "40 questions · 80 min", weight: 50 },
      { name: "Free response", detail: "4 questions · 100 min", weight: 50 },
    ],
    units: ["Electric Charges, Fields, and Gauss's Law", "Electric Potential", "Conductors and Capacitors", "Electric Circuits", "Magnetic Fields and Electromagnetism", "Electromagnetic Induction"],
    ced: null, page: PAGE("ap-physics-c-electricity-and-magnetism"),
  },

  // ---------- English ----------
  {
    id: "english-language", name: "AP English Language and Composition", cat: "English", guide: true,
    blurb: "Rhetoric: how writers build arguments, and how to write your own.",
    exam: [
      { name: "Multiple choice", detail: "45 questions · 60 min", weight: 45 },
      { name: "Free response", detail: "3 essays · 2 hr 15 min: synthesis, rhetorical analysis, argument", weight: 55 },
    ],
    ced: CED("ap-english-language-and-composition"), page: PAGE("ap-english-language-and-composition"),
  },
  {
    id: "english-literature", name: "AP English Literature and Composition", cat: "English", guide: true,
    blurb: "Close reading and analytical writing about fiction, poetry and drama.",
    exam: [
      { name: "Multiple choice", detail: "55 questions · 60 min", weight: 45 },
      { name: "Free response", detail: "3 essays · 2 hr: poetry analysis, prose analysis, literary argument", weight: 55 },
    ],
    units: ["Short Fiction I", "Poetry I", "Longer Fiction or Drama I", "Short Fiction II", "Poetry II", "Longer Fiction or Drama II", "Short Fiction III", "Poetry III", "Longer Fiction or Drama III"],
    ced: CED("ap-english-literature-and-composition"), page: PAGE("ap-english-literature-and-composition"),
  },

  // ---------- Arts ----------
  {
    id: "art-history", name: "AP Art History", cat: "Arts",
    blurb: "250 works of art and architecture from around the world, in context.",
    exam: [
      { name: "Multiple choice", detail: "80 questions · 60 min", weight: 50 },
      { name: "Free response", detail: "6 questions · 2 hr", weight: 50 },
    ],
    units: ["Global Prehistory", "Ancient Mediterranean", "Early Europe and Colonial Americas", "Later Europe and Americas", "Indigenous Americas", "Africa", "West and Central Asia", "South, East, and Southeast Asia", "The Pacific", "Global Contemporary"],
    ced: CED("ap-art-history"), page: PAGE("ap-art-history"),
  },
  {
    id: "music-theory", name: "AP Music Theory", cat: "Arts", status: "changed",
    blurb: "How music works: notation, harmony, voice leading, ear training and sight-singing.",
    exam: [
      { name: "Multiple choice", detail: "75 questions · 80 min", weight: 45 },
      { name: "Free response", detail: "7 written questions + 2 sight-singing · 80 min", weight: 55 },
    ],
    changes: "Starting May 2027 the exam is hybrid digital: audio prompts and multiple choice run in Bluebook, written answers go in a paper booklet, and sight-singing is recorded in Bluebook.",
    ced: null, page: PAGE("ap-music-theory"),
  },
  ...["2-D Art and Design", "3-D Art and Design", "Drawing"].map((n) => ({
    id: n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""),
    name: `AP ${n}`, cat: "Arts",
    blurb: "A portfolio course: you make art through investigation. There is no sit-down exam.",
    exam: [
      { name: "Sustained Investigation", detail: "15 works showing inquiry, practice and revision", weight: 60 },
      { name: "Selected Works", detail: "5 works showing skill and ideas", weight: 40 },
    ],
    ced: CED("ap-art-and-design"), page: PAGE("ap-art-and-design"),
  })),

  // ---------- World Languages ----------
  ...[
    ["chinese", "Chinese", CED("ap-chinese-language-and-culture"), "Multiple choice on listening and reading"],
    ["french", "French", null, "55 questions · 80 min"],
    ["german", "German", null, "55 questions · 80 min"],
    ["italian", "Italian", CED("ap-italian-language-and-culture"), "55 questions · 80 min"],
    ["japanese", "Japanese", null, "Multiple choice on listening and reading"],
    ["spanish-language", "Spanish", CED("ap-spanish-language-and-culture"), "55 questions · 80 min"],
  ].map(([id, lang, ced, mcq]) => ({
    id, name: `AP ${lang} Language and Culture`, cat: "World Languages & Cultures", status: "changed",
    blurb: `Communicate in ${lang} and explore the cultures that speak it.`,
    exam: LANGUAGE_EXAM(mcq), changes: LANGUAGE_CHANGE,
    ced, page: "https://apcentral.collegeboard.org/courses/ap-world-languages-revisions",
  })),
  {
    id: "spanish-literature", name: "AP Spanish Literature and Culture", cat: "World Languages & Cultures", status: "changed",
    blurb: "Read and analyze literature from Spain, Latin America and U.S. Hispanic writers, in Spanish.",
    exam: [
      { name: "Multiple choice", detail: "65 questions", weight: 50 },
      { name: "Free response", detail: "4 questions", weight: 50 },
    ],
    changes: "Fully digital in Bluebook starting May 2027.",
    ced: null, page: PAGE("ap-spanish-literature-and-culture"),
  },
  {
    id: "latin", name: "AP Latin", cat: "World Languages & Cultures",
    blurb: "Read Vergil's Aeneid and Caesar's Gallic War in the original Latin.",
    exam: [
      { name: "Multiple choice", detail: "50 questions", weight: 50 },
      { name: "Free response", detail: "5 questions: translation, analysis, short answer", weight: 50 },
    ],
    ced: CED("ap-latin"), page: PAGE("ap-latin"),
  },

  // ---------- AP Capstone ----------
  {
    id: "seminar", name: "AP Seminar", cat: "AP Capstone",
    blurb: "Research, argue and present on real-world issues from several perspectives.",
    exam: [
      { name: "Team project & presentation", detail: "Done in class during the year", weight: 20 },
      { name: "Individual research essay & presentation", detail: "Done in class during the year", weight: 35 },
      { name: "End-of-course exam", detail: "Short answers + argument essay · 2 hr", weight: 45 },
    ],
    ced: CED("ap-seminar"), page: PAGE("ap-seminar"),
  },
  {
    id: "research", name: "AP Research", cat: "AP Capstone",
    blurb: "Design and carry out a year-long research project on a question you choose.",
    exam: [
      { name: "Academic paper", detail: "4,000–5,000 words", weight: 75 },
      { name: "Presentation & oral defense", detail: "Present your research and answer questions", weight: 25 },
    ],
    ced: CED("ap-research"), page: PAGE("ap-research"),
  },

  // ---------- Career Kickstart (new) ----------
  {
    id: "business-personal-finance", name: "AP Business with Personal Finance", cat: "Career Kickstart", status: "new",
    blurb: "Entrepreneurship, marketing, accounting and management, plus managing your own money.",
    exam: [
      { name: "Multiple choice", detail: "About 20–25% of the questions cover personal finance" },
      { name: "Free response", detail: "Includes a personal-finance question and a question about your Business Canvas Project" },
    ],
    changes: "New course for 2026-27. First exam: Tuesday, May 4, 2027. The exam is fully digital and the course is project-based.",
    ced: CED("ap-business-personal-finance"), page: PAGE("ap-business-personal-finance"),
  },
  {
    id: "cybersecurity", name: "AP Cybersecurity", cat: "Career Kickstart", status: "new",
    blurb: "Analyze risk, defend systems and detect attacks in realistic workplace scenarios.",
    exam: [
      { name: "Analyze Risk", detail: "Skill category", weight: null },
      { name: "Mitigate Risk", detail: "Skill category", weight: null },
      { name: "Detect Attacks", detail: "Skill category", weight: null },
    ],
    changes: "New course for 2026-27. First exam: Wednesday, May 5, 2027. The exam is fully digital. Each of the three skill categories counts for 25–40% of the exam.",
    units: ["Unit 1 covers personal security", "Units 2–5 cover career scenarios"],
    ced: CED("ap-cybersecurity"), page: PAGE("ap-cybersecurity"),
  },

  // ---------- SAT (not an AP course: kept out of the AP course list and counts) ----------
  {
    id: "sat", name: "SAT", cat: "SAT", guide: true, examName: "SAT",
    blurb: "Digital SAT prep: Reading and Writing plus Math, by content domain.",
    exam: [
      { name: "Reading and Writing", detail: "54 questions · 64 min (2 adaptive modules)", weight: 50 },
      { name: "Math", detail: "44 questions · 70 min (2 adaptive modules)", weight: 50 },
    ],
    units: ["Information and Ideas", "Craft and Structure", "Expression of Ideas", "Standard English Conventions", "Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"],
    ced: null, page: "https://satsuite.collegeboard.org/sat",
    links: [
      ["Official full-length practice tests (Bluebook)", "https://satsuite.collegeboard.org/practice/practice-tests"],
      ["Official SAT practice on Khan Academy", "https://www.khanacademy.org/test-prep/digital-sat"],
      ["SAT test dates and registration", "https://satsuite.collegeboard.org/sat/dates-deadlines"],
    ],
  },
];

// AP-only list for the "All AP courses" browser and counts.
const AP_COURSES = COURSES.filter((c) => c.cat !== "SAT");

const EXAM_WINDOW = { start: "2027-05-03", end: "2027-05-14", schedule: "https://apstudents.collegeboard.org/exam-dates" };
