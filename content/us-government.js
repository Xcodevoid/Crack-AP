window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["us-government"] = {
  tips: [
    "Know the 9 required foundational documents and 15 required Supreme Court cases cold. The SCOTUS comparison FRQ always uses one required case.",
    "On free response, answer exactly what the task verb asks: \"identify\" is short, \"describe\" adds detail, \"explain\" needs a how or why.",
    "The argument essay needs a defensible thesis, two pieces of specific evidence (at least one from a foundational document), reasoning, and a response to an opposing view.",
    "Quantitative analysis questions give you a chart or graph. Describe the data accurately first, then draw a conclusion.",
    "Connect every answer to a constitutional principle: federalism, separation of powers, checks and balances, or popular sovereignty.",
  ],
  units: [
    {
      title: "Foundations of American Democracy",
      weight: "15–22%",
      tldr: "The Constitution was built on Enlightenment ideas of natural rights and popular sovereignty, with compromises between large and small states and between federal and state power. Federalism divides power between the national and state governments.",
      concepts: [
        {
          title: "Ideals of democracy",
          simple: "American government rests on natural rights, popular sovereignty, the social contract and limited government.",
          detail: "The Declaration of Independence (1776) draws on Locke's natural rights (life, liberty, property/pursuit of happiness) and the social contract: government gets its power from the consent of the governed and can be replaced if it violates rights. Republicanism means elected representatives govern.",
        },
        {
          title: "Models of representative democracy",
          simple: "Participatory, pluralist and elite models describe who really influences government.",
          detail: "Participatory democracy: broad participation by citizens (e.g., state ballot initiatives). Pluralist democracy: groups compete for influence (interest groups). Elite democracy: a small, wealthy, educated group holds most influence (the Electoral College was designed partly this way). Federalist No. 10 and Brutus No. 1 debate these ideas.",
        },
        {
          title: "Federalist No. 10 and Brutus No. 1",
          simple: "Madison argued a large republic controls factions; Brutus argued it would threaten liberty.",
          detail: "Federalist No. 10 (Madison): factions are inevitable; a large republic with many factions prevents any one majority from dominating. Brutus No. 1 (Anti-Federalist): a large republic can't represent diverse people; the necessary and proper and supremacy clauses would let the national government swallow state power.",
          hook: "Madison: big republic = safe. Brutus: big republic = dangerous.",
        },
        {
          title: "Weaknesses of the Articles of Confederation",
          simple: "The first national government was too weak to tax, raise an army or regulate trade.",
          detail: "Under the Articles, Congress couldn't tax or regulate interstate commerce, there was no national executive or judiciary, amendments required unanimity, and laws needed 9 of 13 states. Shays' Rebellion (1786–87) exposed the weakness and led to the Constitutional Convention.",
        },
        {
          title: "Compromises at the Constitutional Convention",
          simple: "Delegates settled big conflicts through compromises over representation, slavery and the presidency.",
          detail: "Great (Connecticut) Compromise: House by population, Senate equal per state. Three-Fifths Compromise counted enslaved people as three-fifths for representation. The Electoral College compromised between direct election and selection by Congress. Article V makes amendments possible but difficult.",
        },
        {
          title: "Separation of powers and checks and balances",
          simple: "Power is split among three branches, and each can limit the others.",
          detail: "Federalist No. 51 (Madison): \"ambition must be made to counteract ambition.\" Examples: presidential veto; Congress overrides with two-thirds; Senate confirms appointments and ratifies treaties; courts use judicial review; Congress can impeach and remove officials.",
        },
        {
          title: "Federalism",
          simple: "Power is shared between the national government and the states.",
          detail: "Enumerated (delegated) powers belong to Congress; reserved powers belong to states (Tenth Amendment); concurrent powers are shared (taxing). The supremacy clause makes federal law supreme. Categorical grants come with strict conditions; block grants give states flexibility. Mandates require state action, sometimes unfunded.",
        },
        {
          title: "Federalism in the courts",
          simple: "Supreme Court cases have expanded and limited federal power over time.",
          detail: "McCulloch v. Maryland (1819): implied powers through the necessary and proper clause, and states can't tax the national government. United States v. Lopez (1995): the commerce clause doesn't allow Congress to ban guns near schools, limiting federal power.",
        },
      ],
      terms: [
        ["Popular sovereignty", "The idea that government's power comes from the people."],
        ["Faction", "A group pursuing its own interests, which Madison warned against in Federalist No. 10."],
        ["Great Compromise", "Created a House based on population and a Senate with equal state representation."],
        ["Enumerated powers", "Powers specifically given to Congress in the Constitution."],
        ["Reserved powers", "Powers kept by the states under the Tenth Amendment."],
        ["Necessary and proper clause", "Lets Congress make laws needed to carry out its enumerated powers (elastic clause)."],
        ["Block grant", "Federal money given to states with few restrictions on how it's used."],
        ["Unfunded mandate", "A federal requirement placed on states without money to pay for it."],
      ],
      mistakes: [
        "Mixing up Federalist No. 10 (factions) and Federalist No. 51 (checks and balances).",
        "Saying McCulloch limited federal power; it expanded it (Lopez limited it).",
      ],
      questions: [
        { q: "Which argument does Madison make in Federalist No. 10?", choices: ["A strong executive is needed for energetic government", "A large republic helps control the effects of factions", "The judiciary is the least dangerous branch", "A bill of rights is unnecessary"], answer: 1, explain: "Madison argues that many competing factions in a large republic prevent a tyranny of the majority." },
        { q: "Which weakness of the Articles of Confederation did the Constitution fix by giving Congress power over interstate commerce?", choices: ["No national courts", "States placed tariffs on each other's goods", "No president", "Unanimous consent for amendments"], answer: 1, explain: "Under the Articles, states taxed each other's trade; the commerce clause gave Congress that power." },
        { q: "In United States v. Lopez (1995), the Supreme Court ruled that", choices: ["states cannot tax the national bank", "Congress exceeded its commerce clause power by banning guns near schools", "school prayer is unconstitutional", "segregated schools are unconstitutional"], answer: 1, explain: "Lopez limited the commerce clause and favored state power." },
        { q: "A block grant differs from a categorical grant because a block grant", choices: ["must be spent on a narrow, specific purpose", "gives states more flexibility in how to spend the money", "is paid by states to the federal government", "cannot be used for education"], answer: 1, explain: "Block grants give broad discretion; categorical grants come with specific conditions." },
      ],
      frq: {
        prompt: "Congress passes a law requiring states to meet new air quality standards but provides no funding.\n(a) Identify the type of federal policy described.\n(b) Explain how this policy affects the balance of power between the national and state governments.\n(c) Describe one way states could respond.",
        points: [
          "(a) An unfunded mandate.",
          "(b) It increases national power: the federal government sets policy that states must carry out and pay for, limiting state discretion.",
          "(c) States could lobby Congress, sue in federal court claiming the law exceeds Congress's power, or raise taxes or cut other programs to comply.",
        ],
      },
    },
    {
      title: "Interactions Among Branches of Government",
      weight: "25–36%",
      tldr: "Congress makes laws through a complex process shaped by its two chambers, committees and parties. The president uses formal and informal powers. The courts use judicial review, and the bureaucracy carries out policy. Each branch checks the others.",
      concepts: [
        {
          title: "Congress: structure and powers",
          simple: "The House and Senate differ in size, terms and special powers.",
          detail: "House: 435 members, 2-year terms, based on population; starts revenue bills and impeaches. Senate: 100 members, 6-year terms; confirms appointments, ratifies treaties (two-thirds), and holds impeachment trials. Enumerated powers include taxing, borrowing, regulating commerce and declaring war.",
        },
        {
          title: "How a bill becomes law",
          simple: "Bills pass through committees and both chambers, and many die along the way.",
          detail: "Committees do most of the work (markups, hearings). The House Rules Committee sets debate terms; the Committee of the Whole speeds debate. In the Senate, filibusters can block bills unless 60 senators vote for cloture; holds and unanimous consent agreements shape the schedule. Both chambers must pass identical bills (conference committees reconcile differences), then the president signs or vetoes.",
        },
        {
          title: "Congressional behavior and representation",
          simple: "Members of Congress balance their constituents' wishes, their own judgment and their party.",
          detail: "Delegate model: vote as constituents want. Trustee model: use one's own judgment. Politico model: a mix. Gerrymandering and partisan polarization affect Congress; divided government can cause gridlock. Pork-barrel spending and logrolling help members serve their districts.",
        },
        {
          title: "Presidential powers",
          simple: "The president has formal powers in the Constitution and informal powers that have grown over time.",
          detail: "Formal: veto, commander in chief, treaties (with Senate), appointments (with Senate confirmation), pardons. Informal: executive orders, executive agreements, signing statements, bargaining and persuasion, the bully pulpit. Federalist No. 70 (Hamilton) argues for a single energetic executive.",
        },
        {
          title: "Checks on the presidency",
          simple: "Congress and the courts can limit presidential power.",
          detail: "Congress can override vetoes (two-thirds of both chambers), reject nominees, refuse to fund programs, investigate through oversight, and impeach. The War Powers Resolution (1973) requires notifying Congress within 48 hours of deploying troops and limits deployments without authorization. The Twenty-Second Amendment limits presidents to two terms.",
        },
        {
          title: "The judicial branch and judicial review",
          simple: "Federal courts interpret the Constitution and can strike down laws.",
          detail: "Federalist No. 78 (Hamilton): the judiciary is the least dangerous branch; life terms protect independence. Marbury v. Madison (1803) established judicial review. Stare decisis (precedent) guides rulings. Judicial activism vs. judicial restraint describes how willing courts are to overturn laws.",
        },
        {
          title: "Checks on the judiciary",
          simple: "The other branches can limit the courts' power.",
          detail: "The president nominates and the Senate confirms judges. Congress can change the courts' jurisdiction, pass new legislation, or propose constitutional amendments to overturn rulings. The executive branch may be slow to enforce rulings, since the courts can't enforce them themselves.",
        },
        {
          title: "The federal bureaucracy",
          simple: "Executive agencies carry out laws and write detailed rules to implement them.",
          detail: "Agencies (departments, independent agencies, regulatory commissions) have discretionary and rule-making authority. Civil service jobs are merit-based. Congress oversees agencies through hearings and funding; the president through appointments and executive orders. Iron triangles link agencies, congressional committees and interest groups.",
        },
      ],
      terms: [
        ["Filibuster", "A Senate tactic to delay or block a bill by extended debate."],
        ["Cloture", "A Senate vote of 60 senators to end a filibuster."],
        ["Gerrymandering", "Drawing district lines to benefit a party or group."],
        ["Executive order", "A presidential directive with the force of law to manage the executive branch."],
        ["Judicial review", "The courts' power to declare laws unconstitutional (Marbury v. Madison)."],
        ["Stare decisis", "The principle of following precedent in court decisions."],
        ["Iron triangle", "The relationship among an agency, a congressional committee and an interest group."],
        ["Trustee model", "Representatives vote based on their own judgment."],
      ],
      mistakes: [
        "Saying the House ratifies treaties (only the Senate does).",
        "Confusing executive orders (formal-seeming but informal powers) with laws passed by Congress.",
      ],
      questions: [
        { q: "Which power belongs only to the Senate?", choices: ["Starting revenue bills", "Impeaching federal officials", "Confirming presidential appointments", "Declaring war"], answer: 2, explain: "The Senate confirms appointments. The House starts revenue bills and impeaches; both declare war." },
        { q: "In Federalist No. 70, Hamilton argues for", choices: ["a plural executive", "a single, energetic executive", "limiting the president to one term", "judicial review"], answer: 1, explain: "Hamilton argues that a single executive brings energy, accountability and decisiveness." },
        { q: "Marbury v. Madison (1803) is significant because it", choices: ["established judicial review", "upheld segregation", "expanded the commerce clause", "created the federal court system"], answer: 0, explain: "The Court claimed the power to strike down laws that conflict with the Constitution." },
        { q: "A senator votes for a bill her constituents oppose because she believes it's best for the country. She is acting according to the", choices: ["delegate model", "trustee model", "politico model", "partisan model"], answer: 1, explain: "Trustees use their own judgment rather than following constituent opinion." },
      ],
      frq: {
        prompt: "The president issues an executive order directing federal agencies to change how they enforce an existing environmental law.\n(a) Describe the presidential power used.\n(b) Explain how Congress could check this action.\n(c) Explain how the judicial branch could check this action.",
        points: [
          "(a) An executive order: a directive to executive agencies about how to carry out laws, an informal power.",
          "(b) Congress could pass a new law overriding the order, cut funding for enforcement, or hold oversight hearings.",
          "(c) Courts could rule that the order exceeds the president's authority or conflicts with the law or Constitution.",
        ],
      },
    },
    {
      title: "Civil Liberties and Civil Rights",
      weight: "13–18%",
      tldr: "Civil liberties are protections from government (the Bill of Rights); civil rights are protections from discrimination (the Fourteenth Amendment's equal protection clause). Through selective incorporation, most Bill of Rights protections now apply to the states.",
      concepts: [
        {
          title: "Freedom of religion",
          simple: "The First Amendment bars establishing a religion and protects the free exercise of religion.",
          detail: "Establishment clause: Engel v. Vitale (1962) struck down school-sponsored prayer. Free exercise clause: Wisconsin v. Yoder (1972) let Amish families stop schooling after eighth grade. The two clauses can conflict.",
        },
        {
          title: "Freedom of speech and the press",
          simple: "Speech is broadly protected, but some limits are allowed.",
          detail: "Tinker v. Des Moines (1969): students' symbolic speech (armbands) is protected unless it disrupts school. Schenck v. U.S. (1919): speech posing a \"clear and present danger\" can be limited. New York Times Co. v. U.S. (1971): prior restraint (blocking publication) faces a heavy presumption against it.",
        },
        {
          title: "Rights of the accused",
          simple: "The Fourth through Eighth Amendments protect people suspected or accused of crimes.",
          detail: "Fourth: no unreasonable searches (exclusionary rule). Fifth: no self-incrimination, due process, no double jeopardy. Sixth: speedy trial and a lawyer; Gideon v. Wainwright (1963) requires states to provide counsel to poor defendants in felony cases. Eighth: no cruel and unusual punishment.",
        },
        {
          title: "Selective incorporation",
          simple: "The Supreme Court applies Bill of Rights protections to the states one right at a time.",
          detail: "The Fourteenth Amendment's due process clause is used to incorporate rights against the states. McDonald v. Chicago (2010) incorporated the Second Amendment right to bear arms. Gideon incorporated the right to counsel.",
        },
        {
          title: "Privacy",
          simple: "The Court has found an implied right to privacy in the Constitution.",
          detail: "Roe v. Wade (1973) used the right to privacy to protect abortion rights in early pregnancy. It was overturned by Dobbs v. Jackson Women's Health Organization (2022), which returned abortion regulation to the states. Roe remains on the required case list for comparison questions.",
        },
        {
          title: "Equal protection and civil rights",
          simple: "The Fourteenth Amendment requires states to treat people equally under the law.",
          detail: "Brown v. Board of Education (1954) ruled that segregated public schools violate equal protection, overturning Plessy v. Ferguson. Social movements (the civil rights movement, Letter from Birmingham Jail) and laws (Civil Rights Act of 1964, Voting Rights Act of 1965, Title IX) expanded protections.",
        },
        {
          title: "Balancing liberty and order",
          simple: "Courts weigh individual freedoms against public safety and order.",
          detail: "Government may limit rights when it has a compelling interest and uses the least restrictive means, especially during national security threats. Majority rule is balanced against minority rights. Many cases turn on how the Court strikes this balance.",
        },
      ],
      terms: [
        ["Civil liberties", "Protections of individuals from government power."],
        ["Civil rights", "Protections from discrimination based on group characteristics."],
        ["Establishment clause", "Bars the government from establishing an official religion."],
        ["Free exercise clause", "Protects the right to practice one's religion."],
        ["Selective incorporation", "Applying Bill of Rights protections to the states case by case."],
        ["Prior restraint", "Government blocking publication before it happens."],
        ["Exclusionary rule", "Illegally obtained evidence can't be used at trial."],
        ["Equal protection clause", "Fourteenth Amendment requirement that states treat people equally."],
      ],
      mistakes: [
        "Confusing civil liberties (freedom from government) with civil rights (freedom from discrimination).",
        "Mixing up Engel (establishment clause) and Yoder (free exercise clause).",
      ],
      questions: [
        { q: "In Tinker v. Des Moines (1969), the Court ruled that students wearing black armbands to protest the Vietnam War", choices: ["could be suspended because schools may ban all political speech", "engaged in protected symbolic speech that did not disrupt school", "violated the establishment clause", "posed a clear and present danger"], answer: 1, explain: "Students keep free speech rights at school unless their speech causes substantial disruption." },
        { q: "Which case required states to provide lawyers to poor defendants in felony cases?", choices: ["Gideon v. Wainwright", "Schenck v. United States", "Engel v. Vitale", "Baker v. Carr"], answer: 0, explain: "Gideon incorporated the Sixth Amendment right to counsel." },
        { q: "Selective incorporation relies mainly on which part of the Constitution?", choices: ["The Tenth Amendment", "The necessary and proper clause", "The due process clause of the Fourteenth Amendment", "The supremacy clause"], answer: 2, explain: "The Court uses Fourteenth Amendment due process to apply Bill of Rights protections to the states." },
        { q: "Brown v. Board of Education (1954) was decided mainly on the basis of", choices: ["the First Amendment", "the equal protection clause", "the commerce clause", "the Second Amendment"], answer: 1, explain: "Segregated schools denied Black students the equal protection of the laws." },
      ],
      frq: {
        prompt: "A public school district begins each school day with a prayer led by teachers over the loudspeaker, though students may leave the room.\n(a) Identify the constitutional clause at issue.\n(b) Explain how the facts are similar to those in Engel v. Vitale (1962).\n(c) Explain how the Court would likely rule, based on Engel.",
        points: [
          "(a) The establishment clause of the First Amendment.",
          "(b) In both, a public school sponsors prayer, even though participation is described as voluntary.",
          "(c) The Court would likely rule it unconstitutional, because government-sponsored prayer in public schools establishes religion.",
        ],
      },
    },
    {
      title: "American Political Ideologies and Beliefs",
      weight: "10–15%",
      tldr: "People form political beliefs through family, schools, media and experiences. Polls measure public opinion. Liberal and conservative ideologies lead to different views on the role of government in the economy and in social issues.",
      concepts: [
        {
          title: "Core American values",
          simple: "Americans broadly share values like individualism, equality of opportunity, free enterprise, rule of law and limited government.",
          detail: "Even when Americans disagree on policy, they tend to share these core values. Disagreements come from how people weigh them against each other, like individual liberty vs. equality.",
        },
        {
          title: "Political socialization",
          simple: "People learn political attitudes from family, school, peers, media and religion.",
          detail: "Family is usually the strongest early influence. Generational effects and life-cycle effects shape views: major events (wars, economic crises) can shape a generation. Globalization and media also influence beliefs.",
        },
        {
          title: "Measuring public opinion",
          simple: "Scientific polls use random samples to estimate what the public thinks.",
          detail: "Reliable polls use random sampling, a representative sample, neutral question wording, and report a margin of error. Types: opinion polls, tracking polls, entrance and exit polls, benchmark polls. Push polls and biased wording produce unreliable results.",
        },
        {
          title: "Political ideologies",
          simple: "Liberals and conservatives differ on how much government should do.",
          detail: "Liberals generally favor more government regulation of the economy and social programs, and less government regulation of personal social choices. Conservatives generally favor free markets and less economic regulation, and often more traditional social policies. Libertarians favor minimal government in both areas.",
        },
        {
          title: "Ideology and economic policy",
          simple: "Ideologies lead to different views on taxes, spending and the role of the Federal Reserve.",
          detail: "Keynesian economics supports government spending to boost demand in recessions (often favored by liberals). Supply-side economics supports tax cuts and less regulation to encourage investment (often favored by conservatives). The Federal Reserve sets monetary policy independently.",
        },
        {
          title: "Ideology and social policy",
          simple: "Ideologies shape views on how government should balance liberty and order in social issues.",
          detail: "Debates over health care, education and personal freedoms reflect different views of government's role. Liberals more often support government action to promote equality; conservatives more often emphasize individual responsibility and limited government.",
        },
      ],
      terms: [
        ["Political socialization", "The process of forming political beliefs and values."],
        ["Random sample", "A sample in which everyone in the population has an equal chance of selection."],
        ["Margin of error", "The range within which the true population value likely falls."],
        ["Exit poll", "A poll of voters as they leave the polling place."],
        ["Libertarian", "Ideology favoring minimal government in both economic and social matters."],
        ["Keynesian economics", "Theory that government spending can stabilize the economy."],
        ["Supply-side economics", "Theory that tax cuts and deregulation encourage growth."],
      ],
      mistakes: [
        "Treating a poll with a biased sample or loaded question as reliable.",
        "Assuming ideology is only about social issues and not the economy.",
      ],
      questions: [
        { q: "Which of the following most improves a poll's reliability?", choices: ["A large online poll anyone can join", "A random, representative sample and neutral wording", "Asking only likely supporters", "Leading questions that clarify the issue"], answer: 1, explain: "Random, representative samples and neutral wording produce accurate estimates." },
        { q: "Which statement best reflects a libertarian view?", choices: ["Government should regulate the economy and personal choices", "Government should play a minimal role in both economic and personal matters", "Government should regulate the economy but not personal choices", "Government should promote traditional moral values"], answer: 1, explain: "Libertarians favor minimal government in both areas." },
        { q: "The most important early agent of political socialization for most people is", choices: ["the media", "their family", "their employer", "interest groups"], answer: 1, explain: "Family usually has the strongest early influence on political views." },
        { q: "A politician who supports cutting taxes on businesses to encourage investment is most likely following", choices: ["Keynesian economics", "supply-side economics", "monetary policy", "a command economy"], answer: 1, explain: "Supply-side economics focuses on tax cuts to boost production and investment." },
      ],
      frq: {
        prompt: "A poll finds that 58% of adults support a proposed policy, with a margin of error of ±4%.\n(a) Describe what the margin of error means.\n(b) Identify one feature that would make this poll reliable.\n(c) Explain one way elected officials might use this poll.",
        points: [
          "(a) The true level of support is likely between 54% and 62%.",
          "(b) A random, representative sample, or neutral question wording.",
          "(c) Officials might support the policy to respond to constituents (delegate model) or use it to decide how to frame their message.",
        ],
      },
    },
    {
      title: "Political Participation",
      weight: "20–27%",
      tldr: "Citizens participate by voting and through parties, interest groups, elections, campaigns and media. Voting laws and turnout shape who is heard. Money and media influence campaigns and policy.",
      concepts: [
        {
          title: "Voting rights and turnout",
          simple: "Amendments and laws have expanded who can vote, but turnout varies widely.",
          detail: "Key amendments: 15th (race), 17th (direct election of senators), 19th (women), 24th (no poll taxes), 26th (age 18). Turnout is higher among older, wealthier, more educated citizens and in presidential elections. Registration rules, voter ID laws and early voting affect turnout.",
        },
        {
          title: "Voting behavior",
          simple: "People vote based on party, issues, candidate traits and the economy.",
          detail: "Rational-choice voting: based on self-interest. Retrospective voting: judging the incumbent's past performance. Prospective voting: based on predictions about the future. Party-line voting: supporting one party's candidates.",
        },
        {
          title: "Political parties",
          simple: "Parties recruit candidates, mobilize voters and organize government.",
          detail: "Parties adapt to changing demographics and campaign technology. The U.S. has a two-party system because of winner-take-all, single-member districts; third parties struggle but can push major parties to adopt their ideas. Party realignments reshape coalitions over time.",
        },
        {
          title: "Interest groups",
          simple: "Interest groups try to influence policy through lobbying, donations and public campaigns.",
          detail: "Methods: lobbying, testimony, litigation (amicus briefs), grassroots mobilization, and political action committees (PACs). Iron triangles and issue networks connect groups with agencies and committees. The free-rider problem makes it hard to organize groups for broad public goods.",
        },
        {
          title: "Elections and campaigns",
          simple: "Candidates move through primaries to the general election, and the Electoral College picks the president.",
          detail: "Open, closed and blanket primaries; caucuses; front-loading. The Electoral College gives each state electors equal to its House plus Senate seats; most are winner-take-all, so candidates focus on swing states. Incumbents usually win congressional races (incumbency advantage).",
        },
        {
          title: "Money in politics",
          simple: "Campaign finance rules limit some contributions, but courts protect political spending as speech.",
          detail: "The Bipartisan Campaign Reform Act (2002) limited soft money. Citizens United v. FEC (2010) ruled that corporations and unions can spend unlimited amounts on independent political expenditures, leading to super PACs. Debate continues over free speech vs. political equality.",
        },
        {
          title: "The media",
          simple: "The media shapes what the public pays attention to and how issues are framed.",
          detail: "Roles: gatekeeper (decides what's news), scorekeeper (tracks the \"horse race\"), watchdog (investigates). The shift to online and partisan media has increased ideological sorting and made it harder to judge credibility.",
        },
        {
          title: "Redistricting and representation",
          simple: "How district lines are drawn affects fair representation.",
          detail: "Baker v. Carr (1962) established that redistricting is justiciable, leading to \"one person, one vote.\" Shaw v. Reno (1993) ruled that districts drawn mainly by race must meet strict scrutiny under the equal protection clause.",
        },
      ],
      terms: [
        ["Retrospective voting", "Voting based on an incumbent's past performance."],
        ["Winner-take-all", "The candidate with the most votes wins all of a state's electors or a district's seat."],
        ["Political action committee", "A group that raises and spends money to elect candidates."],
        ["Super PAC", "A group that can spend unlimited amounts independently of candidates."],
        ["Incumbency advantage", "The electoral edge officeholders have when running for reelection."],
        ["Free-rider problem", "People benefit from a group's work without contributing."],
        ["Linkage institutions", "Parties, interest groups, elections and media that connect people to government."],
      ],
      mistakes: [
        "Confusing Baker v. Carr (one person, one vote) with Shaw v. Reno (racial gerrymandering).",
        "Saying Citizens United allowed unlimited direct contributions to candidates (it's about independent expenditures).",
      ],
      questions: [
        { q: "Which amendment lowered the voting age to 18?", choices: ["15th", "19th", "24th", "26th"], answer: 3, explain: "The 26th Amendment (1971) set the voting age at 18." },
        { q: "Citizens United v. FEC (2010) ruled that", choices: ["corporations may give unlimited amounts directly to candidates", "the government may not limit independent political spending by corporations and unions", "poll taxes are unconstitutional", "districts must have equal populations"], answer: 1, explain: "Independent expenditures are protected political speech; direct contributions to candidates can still be limited." },
        { q: "A voter supports the incumbent president because the economy grew during the last four years. This is an example of", choices: ["prospective voting", "retrospective voting", "party-line voting", "rational-choice voting based on future promises"], answer: 1, explain: "Judging an incumbent on past performance is retrospective voting." },
        { q: "Which feature of U.S. elections best explains why the country has a two-party system?", choices: ["Proportional representation", "Winner-take-all, single-member districts", "Open primaries", "The 22nd Amendment"], answer: 1, explain: "Winner-take-all rules make it hard for third parties to win seats." },
      ],
      frq: {
        prompt: "Voter turnout among 18-to-24-year-olds is much lower than among adults over 65.\n(a) Describe one reason for this difference.\n(b) Describe one policy that could increase young voter turnout.\n(c) Explain how this turnout gap might affect which policies elected officials support.",
        points: [
          "(a) Younger people move more often, so registration is harder; they may have weaker party ties or less habit of voting.",
          "(b) Same-day registration, automatic registration, online registration, or pre-registration at 16–17.",
          "(c) Officials respond to groups that vote, so they may prioritize older voters' concerns (like Social Security) over issues important to young people.",
        ],
      },
    },
  ],
};
