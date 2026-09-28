window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["comparative-government"] = {
  intro: "AP Comparative Government compares six countries: China, Iran, Mexico, Nigeria, Russia and the United Kingdom. The exam has 55 multiple-choice questions (50%) and 4 free-response questions (50%): conceptual analysis, quantitative analysis, comparative analysis and an argument essay.",
  tips: [
    "Learn each country's regime type, head of state and head of government, legislature, courts and electoral system. Make a six-column chart.",
    "Use course vocabulary precisely: legitimacy vs. sovereignty, federal vs. unitary, presidential vs. parliamentary, SMD vs. PR.",
    "In free response, always give a specific country example and explain HOW it shows the concept.",
    "The quantitative question gives a chart or graph. Describe the trend accurately, then connect it to a concept like legitimacy or development.",
    "The argument essay needs a defensible thesis, two pieces of evidence from course countries, reasoning, and a response to an opposing view.",
  ],
  units: [
    {
      title: "Political Systems, Regimes, and Governments",
      weight: "18–27%",
      tldr: "Comparative politics studies how states hold power and why they differ. Democracies and authoritarian regimes gain legitimacy in different ways. Know sovereignty, legitimacy, federal and unitary systems, and how the six course countries fit these categories.",
      concepts: [
        {
          title: "State, nation, regime and government",
          simple: "A state is a political unit with sovereignty; a nation is a people with a shared identity.",
          detail: "A regime is the set of rules and institutions that last across leaders (like a democracy or theocracy); a government is the people in charge now. Regimes change rarely; governments change often, for example after elections.",
        },
        {
          title: "Democracy and authoritarianism",
          simple: "Democracies hold free and fair elections and protect rights; authoritarian regimes concentrate power.",
          detail: "Consolidated democracies (the UK) have regular competitive elections, rule of law, and civil liberties. Illiberal or hybrid regimes (Russia, and increasingly contested cases) hold elections but limit competition and media. Authoritarian regimes (China, Iran) restrict opposition. Mexico and Nigeria are transitioning democracies.",
        },
        {
          title: "Legitimacy",
          simple: "Legitimacy is the people's belief that a government has the right to rule.",
          detail: "Sources: tradition (UK monarchy), religion (Iran's theocracy), rational-legal rules like constitutions and elections, economic performance (China), and nationalism (Russia). Governments with low legitimacy rely more on coercion.",
        },
        {
          title: "Sovereignty and power",
          simple: "Sovereignty is a state's authority to govern itself without outside control.",
          detail: "States can give up some sovereignty by joining supranational organizations (the UK left the EU in 2020 to regain some). Internal challenges like Boko Haram in Nigeria or cartels in Mexico threaten a state's control of its territory.",
        },
        {
          title: "Federal and unitary systems",
          simple: "Federal systems share power with regions; unitary systems keep it at the center.",
          detail: "Federal: Mexico, Nigeria, Russia (though power is centralized in practice). Unitary: China, Iran, the UK. The UK has devolved power to Scotland, Wales and Northern Ireland, but Parliament remains sovereign.",
        },
        {
          title: "Political and economic stability",
          simple: "Stability depends on legitimacy, institutions and economic performance.",
          detail: "Oil wealth can create a rentier state that depends on resource revenue instead of taxes (Nigeria, Iran, Russia), which can weaken accountability. Corruption and weak rule of law undermine stability.",
        },
        {
          title: "Measuring governance",
          simple: "Scholars compare countries with data like GDP per capita, Gini index and Freedom House scores.",
          detail: "The Human Development Index combines income, education and life expectancy. The Gini coefficient measures inequality (0 is equal, 1 is maximally unequal). Freedom House and corruption indexes rank political rights and transparency.",
        },
      ],
      terms: [
        ["State", "A political unit with a permanent population, territory and sovereignty."],
        ["Nation", "A group sharing culture, language or history and a sense of identity."],
        ["Regime", "The lasting rules and institutions that determine how power is used."],
        ["Legitimacy", "The belief that a government has the right to rule."],
        ["Sovereignty", "A state's authority to govern itself."],
        ["Federal system", "A system that divides power between national and regional governments."],
        ["Unitary system", "A system where the central government holds most power."],
        ["Rentier state", "A state that relies on revenue from natural resources like oil."],
      ],
      mistakes: [
        "Using state, nation, regime and government as synonyms.",
        "Calling Russia a consolidated democracy because it holds elections.",
        "Forgetting that the UK is unitary even with devolution.",
      ],
      questions: [
        {
          q: "The United Kingdom's devolution of power to Scotland and Wales is best described as",
          choices: ["a shift to a federal system", "a transfer of some powers while Parliament remains sovereign", "a loss of British sovereignty", "a change of regime"],
          answer: 1,
          explain: "Devolved powers can in principle be taken back by Parliament, so the UK stays unitary.",
        },
        {
          q: "China's government relies heavily on which source of legitimacy?",
          choices: ["Competitive multiparty elections", "Economic growth and performance", "Religious authority", "A hereditary monarchy"],
          answer: 1,
          explain: "The Chinese Communist Party points to rising living standards to justify its rule.",
        },
        {
          q: "Which country is a theocracy, with religious leaders holding ultimate political authority?",
          choices: ["Nigeria", "Iran", "Mexico", "Russia"],
          answer: 1,
          explain: "In Iran, the Supreme Leader, a senior Shia cleric, holds the highest authority.",
        },
        {
          q: "Nigeria's dependence on oil revenue makes it an example of",
          choices: ["a unitary state", "a rentier state", "a theocracy", "a parliamentary system"],
          answer: 1,
          explain: "A rentier state depends on resource revenue, which can weaken accountability to taxpayers.",
        },
      ],
      frq: {
        prompt: "Conceptual analysis:\n(a) Define legitimacy.\n(b) Describe one source of legitimacy for an authoritarian regime.\n(c) Explain how a regime could lose legitimacy.\n(d) Explain how a regime might respond to losing legitimacy.",
        points: [
          "(a) Legitimacy is the belief by citizens that a government has the right to rule.",
          "(b) E.g. economic performance (China), religion (Iran), or nationalism (Russia).",
          "(c) E.g. economic decline, corruption, or failure to provide security.",
          "(d) E.g. using coercion, co-opting opponents, or making limited reforms to restore support.",
        ],
      },
    },
    {
      title: "Political Institutions",
      weight: "22–33%",
      tldr: "The largest unit. Compare how executives, legislatures and courts are structured and how much power they have. Parliamentary systems fuse executive and legislative power; presidential systems separate them. Authoritarian regimes often have institutions that exist mostly on paper.",
      concepts: [
        {
          title: "Presidential and parliamentary systems",
          simple: "In parliamentary systems the executive comes from the legislature; in presidential systems both are elected separately.",
          detail: "Parliamentary: the UK. The prime minister is the majority party leader and can be removed by a vote of no confidence. Presidential: Mexico, Nigeria. Russia is semi-presidential, with a powerful president and a prime minister.",
        },
        {
          title: "Heads of state and government",
          simple: "The head of state represents the nation; the head of government runs policy.",
          detail: "UK: the monarch (head of state) and prime minister (head of government). Mexico and Nigeria: the president is both. Russia: the president is head of state and dominant; the prime minister heads the government. Iran: the Supreme Leader outranks the elected president. China: the CCP general secretary is the real leader and also serves as president.",
        },
        {
          title: "Executive term limits and power",
          simple: "Term limits restrain executives, but some leaders get around them.",
          detail: "Mexico's president serves one six-year term (sexenio) with no reelection. Nigeria's president can serve two four-year terms. Russia's 2020 constitutional changes let Putin run again. China removed presidential term limits in 2018.",
        },
        {
          title: "Legislatures",
          simple: "Legislatures make laws and check the executive, though their power varies.",
          detail: "Bicameral: UK (Commons and Lords), Mexico, Nigeria, Russia (State Duma and Federation Council). Unicameral: China's National People's Congress (mostly approves Party decisions) and Iran's Majles. The House of Commons is far more powerful than the House of Lords.",
        },
        {
          title: "Judiciaries and judicial independence",
          simple: "Independent courts limit government; in authoritarian regimes courts support those in power.",
          detail: "The UK Supreme Court (since 2009) cannot strike down acts of Parliament because of parliamentary sovereignty. Mexico's Supreme Court has judicial review; 2024 reforms made judges elected. Nigeria has judicial review and Sharia courts in northern states. Courts in China, Iran and Russia are not independent.",
        },
        {
          title: "Iran's dual institutions",
          simple: "Iran combines elected bodies with unelected religious bodies that can override them.",
          detail: "The Guardian Council vets candidates and can veto laws that conflict with Islam or the constitution. The Assembly of Experts (elected) chooses the Supreme Leader. The Expediency Council resolves disputes. Elected president and Majles have limited power.",
        },
        {
          title: "China's party-state",
          simple: "In China, the Communist Party controls the state.",
          detail: "The Politburo Standing Committee is the top decision-making body. Democratic centralism means decisions made at the top must be obeyed. The nomenklatura system lets the Party control appointments. The National People's Congress formally passes laws.",
        },
      ],
      terms: [
        ["Parliamentary system", "A system in which the executive is drawn from and accountable to the legislature."],
        ["Presidential system", "A system with a separately elected president."],
        ["Vote of no confidence", "A legislative vote that can remove a government in a parliamentary system."],
        ["Head of state", "The official who symbolically represents the country."],
        ["Head of government", "The official who runs the government and policy."],
        ["Judicial review", "The power of courts to strike down laws as unconstitutional."],
        ["Guardian Council", "Iran's body that vets candidates and reviews laws."],
        ["Democratic centralism", "The principle that decisions made by top Party leaders must be followed."],
      ],
      mistakes: [
        "Saying the UK Supreme Court can strike down acts of Parliament.",
        "Treating Iran's president as its most powerful official.",
        "Assuming that having a legislature means real checks on power in authoritarian states.",
      ],
      questions: [
        {
          q: "In the United Kingdom, the prime minister is",
          choices: ["directly elected by voters nationwide", "the leader of the majority party in the House of Commons", "appointed for life by the monarch", "chosen by the House of Lords"],
          answer: 1,
          explain: "In a parliamentary system, the head of government leads the party or coalition that controls the legislature.",
        },
        {
          q: "Which body in Iran can disqualify candidates from running for office?",
          choices: ["The Majles", "The Guardian Council", "The Assembly of Experts", "The presidency"],
          answer: 1,
          explain: "The Guardian Council vets candidates and can block laws.",
        },
        {
          q: "Mexico's president serves",
          choices: ["unlimited four-year terms", "one six-year term with no reelection", "two five-year terms", "at the pleasure of the legislature"],
          answer: 1,
          explain: "The sexenio is a single six-year term.",
        },
        {
          q: "Which statement about the UK Supreme Court is accurate?",
          choices: ["It can strike down acts of Parliament", "It cannot overturn acts of Parliament because of parliamentary sovereignty", "It is appointed by the Prime Minister alone and controls elections", "It was created in 1688"],
          answer: 1,
          explain: "Parliamentary sovereignty means no court can invalidate an Act of Parliament.",
        },
      ],
      frq: {
        prompt: "Comparative analysis: Compare how executive power is checked in the United Kingdom and in Russia.\n(a) Describe one way executive power can be checked.\n(b) Explain how this check works in the UK.\n(c) Explain why this check is weaker in Russia.",
        points: [
          "(a) E.g. a legislature that can remove or limit the executive, or independent courts.",
          "(b) In the UK, the House of Commons can pass a vote of no confidence, and the PM must keep party support.",
          "(c) In Russia, the president dominates the Duma through United Russia, courts aren't independent, and term limits were changed in 2020.",
        ],
      },
    },
    {
      title: "Political Culture and Participation",
      weight: "11–18%",
      tldr: "Political culture is the set of beliefs people share about politics, formed through socialization. Citizens participate in many ways, and governments either protect or restrict civil liberties. Social cleavages like ethnicity and religion shape politics.",
      concepts: [
        {
          title: "Political culture and socialization",
          simple: "Political socialization is how people learn political values from family, school, media and religion.",
          detail: "Governments shape socialization: China promotes \"Xi Jinping Thought\" and patriotism in schools, and Iran promotes Islamic values. Political culture can be consensual or conflictual.",
        },
        {
          title: "Political ideologies",
          simple: "Ideologies are sets of beliefs about the role of government.",
          detail: "Liberalism emphasizes individual freedom and markets; socialism and communism emphasize equality and state control; fascism emphasizes nationalism and authoritarian rule. Neoliberalism favors free trade and privatization.",
        },
        {
          title: "Political participation",
          simple: "People participate by voting, protesting, joining groups and contacting officials.",
          detail: "Participation can be voluntary or coerced. Some countries have compulsory voting. Authoritarian regimes may mobilize citizens for rallies or restrict protest (China, Iran, Russia).",
        },
        {
          title: "Social movements",
          simple: "Social movements are groups pushing for change outside official channels.",
          detail: "Examples: Iran's Green Movement (2009) and \"Woman, Life, Freedom\" protests (2022); Nigeria's #EndSARS protests against police abuse (2020); Mexico's Zapatista movement (1994). Governments may respond with repression or concessions.",
        },
        {
          title: "Civil liberties and civil rights",
          simple: "Civil liberties protect people from government; civil rights guarantee equal treatment.",
          detail: "Democracies protect freedom of speech and press more than authoritarian regimes. Russia uses laws on \"foreign agents\" to restrict NGOs and media. China censors the internet (the \"Great Firewall\").",
        },
        {
          title: "Social cleavages",
          simple: "Cleavages are divisions in society based on ethnicity, religion, region or class.",
          detail: "Nigeria has ethnic (Hausa-Fulani, Yoruba, Igbo) and religious (Muslim north, Christian south) cleavages. The UK has national cleavages (Scotland) and class divisions. Cross-cutting cleavages can reduce conflict; coinciding cleavages can increase it.",
        },
      ],
      terms: [
        ["Political culture", "A society's shared beliefs and attitudes about politics."],
        ["Political socialization", "The process by which people learn political values."],
        ["Ideology", "A set of beliefs about the role of government."],
        ["Social movement", "A group seeking change, often outside formal institutions."],
        ["Civil liberties", "Individual freedoms protected from government interference."],
        ["Cleavage", "A division in society based on identity or interests."],
        ["Coinciding cleavages", "Divisions that overlap and reinforce each other."],
      ],
      mistakes: [
        "Confusing civil liberties with civil rights.",
        "Assuming all participation in authoritarian states is coerced; some is voluntary.",
        "Overlooking how coinciding cleavages in Nigeria increase conflict.",
      ],
      questions: [
        {
          q: "Nigeria's ethnic divisions and religious divisions largely overlap by region. This is an example of",
          choices: ["cross-cutting cleavages", "coinciding cleavages", "a consensual political culture", "neoliberalism"],
          answer: 1,
          explain: "When cleavages overlap, they reinforce each other and can increase conflict.",
        },
        {
          q: "China's use of schools to promote Communist Party ideology is an example of",
          choices: ["civil rights", "political socialization", "federalism", "judicial review"],
          answer: 1,
          explain: "Schools are an agent of political socialization.",
        },
        {
          q: "Nigeria's #EndSARS protests in 2020 were a social movement against",
          choices: ["Sharia law", "police brutality", "oil company profits", "Brexit"],
          answer: 1,
          explain: "Protesters demanded an end to the abusive Special Anti-Robbery Squad.",
        },
        {
          q: "Which best describes a civil liberty?",
          choices: ["A guarantee of equal treatment across groups", "A freedom protected from government interference, such as free speech", "A tax exemption", "A seat in the legislature"],
          answer: 1,
          explain: "Civil liberties limit what government can do to individuals.",
        },
      ],
      frq: {
        prompt: "Conceptual analysis:\n(a) Define political socialization.\n(b) Describe one agent of political socialization.\n(c) Explain how an authoritarian government could use that agent to maintain power.",
        points: [
          "(a) The process by which people learn political values and beliefs.",
          "(b) E.g. family, schools, media, religion or peers.",
          "(c) E.g. China controlling schools and media to promote loyalty to the Party, or Iran using religious education.",
        ],
      },
    },
    {
      title: "Party and Electoral Systems and Citizen Organizations",
      weight: "13–18%",
      tldr: "Electoral systems shape how many parties there are and who wins. Single-member districts favor two big parties; proportional representation helps smaller parties. Interest groups and civil society connect citizens to government, through pluralist or corporatist models.",
      concepts: [
        {
          title: "Electoral systems",
          simple: "Single-member districts (SMD) elect one winner per district; proportional representation (PR) gives seats by vote share.",
          detail: "SMD, or first-past-the-post, is used for the UK House of Commons and Nigeria's legislature. PR uses party lists. Mixed systems combine both: Mexico's Chamber of Deputies and Russia's Duma. Duverger's law: SMD tends to produce two main parties.",
        },
        {
          title: "Party systems",
          simple: "Countries can have one dominant party, two parties or many parties.",
          detail: "China: one-party state. Russia: dominant party (United Russia). The UK: mostly two parties plus regional parties like the SNP. Mexico: multiparty, with Morena dominant since 2018. Nigeria: two main parties (APC and PDP).",
        },
        {
          title: "Elections and their purposes",
          simple: "Elections choose leaders, and in authoritarian states they can also boost legitimacy.",
          detail: "In Russia and Iran, candidate restrictions and media control limit competition. Nigeria's presidential winner needs the most votes AND at least 25% in two-thirds of the states, encouraging national appeal. Referendums let voters decide issues directly, like Brexit (2016).",
        },
        {
          title: "Interest groups: pluralism and corporatism",
          simple: "In pluralism, many groups compete freely; in corporatism, the state works with a few official groups.",
          detail: "The UK is mostly pluralist. State corporatism appears in China, where the Party controls official unions. Mexico's PRI historically used corporatism with labor and peasant organizations.",
        },
        {
          title: "Civil society",
          simple: "Civil society is the space for voluntary groups independent of the state.",
          detail: "Strong civil society helps democracy by holding government accountable. Authoritarian regimes restrict it: Russia's foreign agent laws, China's limits on NGOs. Nigeria's and Mexico's civil societies are active but face violence or corruption.",
        },
        {
          title: "Patron-clientelism and co-optation",
          simple: "Leaders trade favors for political support.",
          detail: "Patron-clientelism is common in Nigeria and historically in Mexico. Co-optation brings potential opponents into the system with jobs or benefits instead of fighting them. Both can undermine democratic accountability.",
        },
      ],
      terms: [
        ["Single-member district", "An electoral district that elects one representative."],
        ["Proportional representation", "A system giving parties seats based on their share of the vote."],
        ["Mixed electoral system", "A system combining SMD and PR."],
        ["Duverger's law", "The tendency of SMD systems to produce two main parties."],
        ["Pluralism", "A system where many independent groups compete for influence."],
        ["Corporatism", "A system where the state works with a limited number of official groups."],
        ["Civil society", "Voluntary groups independent of the state."],
        ["Patron-clientelism", "Trading favors or benefits for political support."],
      ],
      mistakes: [
        "Saying the UK uses PR for the House of Commons; it uses SMD.",
        "Thinking elections in authoritarian states are meaningless; they build legitimacy.",
        "Confusing corporatism with corporations.",
      ],
      questions: [
        {
          q: "Which electoral system is most likely to produce a two-party system?",
          choices: ["Proportional representation", "Single-member districts", "Mixed systems", "Referendums"],
          answer: 1,
          explain: "Duverger's law: winner-take-all districts squeeze out smaller parties.",
        },
        {
          q: "Mexico and Russia both elect their lower houses with",
          choices: ["pure SMD", "pure PR", "a mixed system of SMD and PR", "appointments by the president"],
          answer: 2,
          explain: "Both combine district seats with proportional list seats.",
        },
        {
          q: "The Chinese Communist Party controlling official trade unions is an example of",
          choices: ["pluralism", "state corporatism", "federalism", "proportional representation"],
          answer: 1,
          explain: "The state sanctions and controls a limited set of groups.",
        },
        {
          q: "Nigeria requires the winning presidential candidate to get at least 25% of the vote in two-thirds of the states in order to",
          choices: ["guarantee a Muslim president", "encourage candidates to build broad national support across regions", "limit the president to one term", "reduce voter turnout"],
          answer: 1,
          explain: "The rule discourages purely regional or ethnic campaigns.",
        },
      ],
      frq: {
        prompt: "Quantitative analysis: In a UK election, a party wins 34% of the vote but 63% of House of Commons seats.\n(a) Describe the difference between vote share and seat share.\n(b) Explain how the UK's electoral system produced this result.\n(c) Explain one consequence for smaller parties.",
        points: [
          "(a) The party's seat share is much larger than its vote share.",
          "(b) SMD (first-past-the-post) gives each seat to the plurality winner, so a party winning many close districts gets extra seats.",
          "(c) Smaller national parties win few seats relative to their votes, while regionally concentrated parties can do better.",
        ],
      },
    },
    {
      title: "Political and Economic Changes and Development",
      weight: "16–24%",
      tldr: "Globalization and economic policy choices shape states. Countries move between state-led economies and market reforms (neoliberalism), deal with oil dependence and inequality, and face pressure from social change and demographic shifts.",
      concepts: [
        {
          title: "Globalization",
          simple: "Globalization is the growing connection of economies, cultures and politics worldwide.",
          detail: "It brings trade and investment but can increase inequality and reduce sovereignty. Mexico joined NAFTA (1994), replaced by USMCA (2020). China joined the WTO in 2001. Some groups resist globalization, as seen in Brexit.",
        },
        {
          title: "Economic liberalization and neoliberalism",
          simple: "Neoliberal reforms reduce state control through privatization, free trade and deregulation.",
          detail: "The UK under Thatcher privatized industries. Mexico privatized state companies and opened trade in the 1980s–1990s. China's market reforms under Deng Xiaoping created special economic zones. Structural adjustment programs from the IMF pushed Nigeria and Mexico toward these policies.",
        },
        {
          title: "State-led economies and resource dependence",
          simple: "Some states control key industries, especially oil and gas.",
          detail: "Russia's energy firms (Gazprom) and Iran's oil sector are state-dominated. Nigeria depends heavily on oil exports, making the economy vulnerable to price swings (the resource curse). Mexico's Pemex is state-owned.",
        },
        {
          title: "Social policy and welfare",
          simple: "Governments use social programs to reduce poverty and gain support.",
          detail: "The UK's National Health Service provides universal health care. Mexico's conditional cash transfer programs gave aid in exchange for school attendance and health checkups. China ended its one-child policy (now allows three children) to address an aging population.",
        },
        {
          title: "Demographic change and urbanization",
          simple: "Population changes like aging and urban growth create new challenges.",
          detail: "China faces an aging, shrinking workforce. Nigeria has one of the fastest-growing, youngest populations. Rapid urbanization strains services and housing, and internal migration (China's hukou system) shapes access to benefits.",
        },
        {
          title: "Democratization and backsliding",
          simple: "Some regimes become more democratic; others lose democratic features.",
          detail: "Mexico transitioned from PRI one-party dominance to competitive elections in 2000. Nigeria returned to civilian rule in 1999. Russia moved toward authoritarianism under Putin. Democratic backsliding weakens courts, media and elections.",
        },
      ],
      terms: [
        ["Globalization", "The increasing connection of economies and cultures worldwide."],
        ["Neoliberalism", "Policies favoring privatization, free trade and deregulation."],
        ["Privatization", "Transferring state-owned businesses to private owners."],
        ["Resource curse", "When resource wealth leads to corruption and weak development."],
        ["Structural adjustment", "Economic reforms required by international lenders like the IMF."],
        ["Conditional cash transfer", "Aid given on conditions like school attendance."],
        ["Democratic backsliding", "The decline of democratic institutions and practices."],
      ],
      mistakes: [
        "Assuming economic growth always leads to democratization (China).",
        "Forgetting that globalization can reduce sovereignty.",
        "Treating neoliberalism and socialism as the same economic approach.",
      ],
      questions: [
        {
          q: "Which policy is an example of neoliberal economic reform?",
          choices: ["Nationalizing the oil industry", "Privatizing state-owned companies", "Raising tariffs on imports", "Expanding state control of banks"],
          answer: 1,
          explain: "Neoliberalism favors reducing state ownership and opening markets.",
        },
        {
          q: "Nigeria's heavy dependence on oil exports makes it vulnerable to",
          choices: ["the resource curse and price swings", "a two-party system", "parliamentary sovereignty", "devolution"],
          answer: 0,
          explain: "Relying on one commodity exposes the economy to price shocks and can encourage corruption.",
        },
        {
          q: "Mexico's 2000 presidential election was significant because",
          choices: ["the PRI won again", "it ended 71 years of PRI rule", "it was the first election with PR", "it ended NAFTA"],
          answer: 1,
          explain: "Vicente Fox of the PAN won, marking a democratic transition.",
        },
        {
          q: "China's economic reforms under Deng Xiaoping included",
          choices: ["collectivizing all farms", "creating special economic zones open to foreign investment", "ending Communist Party rule", "joining NAFTA"],
          answer: 1,
          explain: "SEZs opened parts of China to markets and foreign capital while the Party kept control.",
        },
      ],
      frq: {
        prompt: "Argument essay: Develop an argument about whether economic liberalization leads to political liberalization. Use evidence from two course countries.",
        points: [
          "A defensible thesis with a line of reasoning.",
          "Evidence one: e.g., Mexico's market reforms and NAFTA helped weaken PRI dominance before its 2000 defeat.",
          "Evidence two: e.g., China's market reforms without democratization, as the Party kept control.",
          "Reasoning explaining how the evidence supports the claim, plus a response to an opposing view.",
        ],
      },
    },
  ],
};
