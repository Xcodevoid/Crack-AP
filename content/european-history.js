window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["european-history"] = {
  tips: [
    "New for May 2027: all three short-answer questions are required, with no choice. Q1 uses a secondary source, Q2 a primary source, and Q3 a non-text source such as a map or image.",
    "New for May 2027: the long essay is one required, broad prompt. Know causes and effects from every period well enough to argue either way.",
    "Each of the 9 units is 10–15% of the multiple-choice section, so no period can be skipped.",
    "Track the big themes: the state and power, religion, economic change, social structures, and ideas like the Enlightenment and nationalism.",
    "DBQ: use at least 4 documents plus outside evidence, and explain the sourcing (point of view, purpose, historical situation or audience) for 2 of them.",
  ],
  units: [
    {
      title: "Renaissance and Exploration (c. 1450–1648)",
      weight: "10–15%",
      tldr: "Starting in Italian city-states, the Renaissance revived classical learning and celebrated human achievement. The printing press spread these ideas north. New monarchies centralized power, and European states explored and colonized overseas, creating global trade and the Columbian Exchange.",
      concepts: [
        {
          title: "Italian Renaissance humanism",
          simple: "Humanists studied ancient Greek and Roman texts and celebrated human potential.",
          detail: "Wealthy Italian city-states like Florence, funded by trade and banking families such as the Medici, supported scholars and artists. Petrarch revived classical texts; civic humanism urged active citizenship. Machiavelli's The Prince argued rulers should be judged by results, separating politics from Christian morality.",
        },
        {
          title: "Renaissance art",
          simple: "Artists used perspective, realism and classical themes, often with wealthy patrons.",
          detail: "Leonardo, Michelangelo and Raphael showed naturalism and linear perspective. Northern Renaissance artists like Dürer and van Eyck focused more on religious themes and detailed realism. Patronage by the Church and merchant families shaped what was made.",
        },
        {
          title: "The printing press and the Northern Renaissance",
          simple: "Gutenberg's printing press (c. 1450) spread ideas quickly and cheaply.",
          detail: "Printing raised literacy and standardized vernacular languages. Northern (Christian) humanists like Erasmus and Thomas More applied humanist study to religion and criticized Church corruption, helping set up the Reformation.",
        },
        {
          title: "New monarchs",
          simple: "Kings in England, France and Spain centralized power over nobles and the Church.",
          detail: "They built bureaucracies, standing armies and tax systems. Examples: Henry VII in England (Star Chamber), Louis XI in France, and Ferdinand and Isabella in Spain, who united the kingdoms and used the Inquisition to enforce religious unity.",
        },
        {
          title: "Exploration and overseas empires",
          simple: "Europeans explored for God, gold and glory, helped by new ships and navigation tools.",
          detail: "Portugal reached India by sailing around Africa (da Gama, 1498). Spain funded Columbus (1492) and conquered the Aztec and Inca empires. Caravels, the compass and the astrolabe made long voyages possible. Later, the Dutch, English and French built trading empires using joint-stock companies.",
        },
        {
          title: "The Columbian Exchange and the Commercial Revolution",
          simple: "Plants, animals, people and diseases moved between the Americas and Europe.",
          detail: "American crops like potatoes and maize fed Europe's growing population; European diseases killed most Indigenous Americans. Silver from the Americas caused the price revolution (inflation). The Atlantic slave trade grew to supply plantation labor. Mercantilism, banking and joint-stock companies expanded commerce.",
        },
      ],
      terms: [
        ["Humanism", "A movement that studied classical texts and valued human achievement."],
        ["Patronage", "Financial support from the wealthy for artists and scholars."],
        ["Vernacular", "The everyday language of a region, rather than Latin."],
        ["New monarchs", "Rulers who centralized royal power in the late 1400s."],
        ["Columbian Exchange", "The transfer of plants, animals, people and diseases between hemispheres."],
        ["Price revolution", "Long-term inflation driven partly by American silver."],
        ["Mercantilism", "The policy of building national wealth through exports, colonies and gold."],
        ["Joint-stock company", "A business owned by investors who share risks and profits."],
      ],
      mistakes: [
        "Treating the Italian and Northern Renaissance as the same; the North focused more on religious reform.",
        "Forgetting the economic motives of exploration.",
        "Describing the Columbian Exchange only in terms of goods and ignoring disease and slavery.",
      ],
      questions: [
        {
          q: "Machiavelli's The Prince was most significant because it",
          choices: ["argued rulers should follow Christian morality", "separated political success from traditional morality", "called for democracy", "attacked the Catholic Church's doctrine"],
          answer: 1,
          explain: "Machiavelli judged rulers by effectiveness, not by Christian virtue, a secular view of politics.",
        },
        {
          q: "Which development most helped the ideas of Christian humanists like Erasmus spread across Europe?",
          choices: ["The Columbian Exchange", "The printing press", "The price revolution", "The Inquisition"],
          answer: 1,
          explain: "Printing made books cheap and fast to produce, spreading ideas widely.",
        },
        {
          q: "Which was a major effect of the Columbian Exchange on Europe?",
          choices: ["Population decline due to new diseases", "Population growth supported by new crops like the potato", "The end of the slave trade", "Deflation from falling silver supplies"],
          answer: 1,
          explain: "American crops raised food supplies in Europe. Disease devastated the Americas, not Europe.",
        },
        {
          q: "The new monarchs of the late 1400s strengthened royal power mainly by",
          choices: ["giving more power to nobles", "building bureaucracies and armies and limiting noble power", "creating elected parliaments", "rejecting all taxes"],
          answer: 1,
          explain: "They centralized administration, raised taxes and armies, and curbed the nobility.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE way Italian humanism differed from medieval thought.\n(b) Explain ONE way the printing press affected European society.\n(c) Explain ONE economic effect of overseas exploration on Europe.",
        points: [
          "(a) E.g. emphasis on classical texts, individual achievement and secular life rather than mainly on the afterlife.",
          "(b) E.g. spread of literacy and new ideas, standardized vernacular languages, or rapid spread of Reformation writings.",
          "(c) E.g. the price revolution from American silver, growth of the Atlantic trade, mercantilism, or joint-stock companies.",
        ],
      },
    },
    {
      title: "Age of Reformation",
      weight: "10–15%",
      tldr: "Martin Luther's 1517 challenge to the Catholic Church split Western Christianity. Protestant movements spread with the help of printing and princes, the Catholic Church reformed itself, and religious conflict led to wars that reshaped European politics until the Peace of Westphalia in 1648.",
      concepts: [
        {
          title: "Luther and the Protestant Reformation",
          simple: "Luther criticized the sale of indulgences and taught salvation by faith alone.",
          detail: "His Ninety-Five Theses (1517) spread quickly in print. Luther taught sola fide (faith alone) and sola scriptura (scripture alone) and translated the Bible into German. German princes backed him partly to gain independence from the Holy Roman Emperor and to seize Church lands.",
        },
        {
          title: "Calvinism and other Protestant groups",
          simple: "John Calvin taught predestination and built a strict religious community in Geneva.",
          detail: "Calvinism spread to France (Huguenots), the Netherlands, Scotland (Presbyterians) and England (Puritans). Anabaptists rejected infant baptism and church-state ties and were persecuted by both Catholics and Protestants.",
        },
        {
          title: "The English Reformation",
          simple: "Henry VIII broke from Rome for political reasons, mainly to annul his marriage.",
          detail: "The Act of Supremacy (1534) made the monarch head of the Church of England. Under Elizabeth I, the Elizabethan Settlement created a moderate Protestant church that kept some Catholic traditions.",
        },
        {
          title: "The Catholic Reformation",
          simple: "The Catholic Church reformed abuses and fought Protestantism.",
          detail: "The Council of Trent (1545–1563) reaffirmed Catholic doctrine (faith AND works, the seven sacraments) while ending some abuses. The Jesuits, founded by Ignatius Loyola, spread Catholicism through education and missions. The Index of Prohibited Books and Inquisition suppressed dissent. Baroque art aimed to inspire faith.",
        },
        {
          title: "Wars of religion",
          simple: "Religious differences combined with politics to cause wars across Europe.",
          detail: "The French Wars of Religion ended with the Edict of Nantes (1598), granting Huguenots toleration. The Peace of Augsburg (1555) let German princes choose Lutheranism or Catholicism. The Thirty Years' War (1618–1648) devastated Germany and ended with the Peace of Westphalia, which recognized Calvinism and state sovereignty.",
        },
        {
          title: "Social effects of the Reformation",
          simple: "The Reformation changed family life, education and the role of women.",
          detail: "Protestants closed convents and praised marriage and the family, but women still had limited roles. Emphasis on reading scripture raised literacy. Witch hunts peaked during this era of religious and social stress.",
        },
      ],
      terms: [
        ["Indulgence", "A Church pardon reducing punishment for sin, which Luther criticized selling."],
        ["Sola fide", "The Protestant idea that faith alone brings salvation."],
        ["Predestination", "Calvin's teaching that God has already chosen who is saved."],
        ["Act of Supremacy", "The 1534 law making the English monarch head of the Church of England."],
        ["Council of Trent", "The Catholic council that reaffirmed doctrine and reformed abuses."],
        ["Jesuits", "A Catholic order focused on education and missionary work."],
        ["Peace of Augsburg", "The 1555 treaty letting German princes choose their region's religion."],
        ["Peace of Westphalia", "The 1648 treaties that ended the Thirty Years' War."],
      ],
      mistakes: [
        "Treating the English Reformation as mainly theological; it began as a political break.",
        "Assuming Protestants supported religious toleration; most did not.",
        "Forgetting the political motives of German princes who backed Luther.",
      ],
      questions: [
        {
          q: "Many German princes supported Luther mainly because",
          choices: ["they wanted to strengthen the Holy Roman Emperor", "it offered a way to gain independence from the emperor and take Church lands", "they opposed the printing press", "they wanted to join the Jesuits"],
          answer: 1,
          explain: "Supporting Luther let princes assert independence and seize Church property.",
        },
        {
          q: "The Council of Trent responded to the Protestant Reformation by",
          choices: ["accepting salvation by faith alone", "reaffirming Catholic doctrine while ending some abuses", "allowing priests to marry", "recognizing Calvinism"],
          answer: 1,
          explain: "Trent kept core Catholic beliefs, like faith and works, while addressing corruption.",
        },
        {
          q: "The Edict of Nantes (1598)",
          choices: ["expelled Protestants from France", "granted limited toleration to French Huguenots", "made France Protestant", "ended the Thirty Years' War"],
          answer: 1,
          explain: "Henry IV issued it to end the French Wars of Religion by tolerating Huguenots.",
        },
        {
          q: "Which statement best describes the Peace of Westphalia (1648)?",
          choices: ["It restored papal authority over Europe", "It recognized Calvinism and strengthened the sovereignty of states", "It unified Germany", "It banned Protestantism"],
          answer: 1,
          explain: "Westphalia ended the Thirty Years' War, recognized Calvinism, and weakened the Holy Roman Emperor in favor of state sovereignty.",
        },
      ],
      frq: {
        prompt: "Long essay practice: Evaluate the extent to which political motives, rather than religious beliefs, drove the spread of the Protestant Reformation in the 1500s.",
        points: [
          "Thesis that takes a clear position (e.g., political motives were decisive for rulers, while religious conviction drove ordinary believers).",
          "Political evidence: German princes, Henry VIII's Act of Supremacy, the Peace of Augsburg.",
          "Religious evidence: Luther's theology, Calvinist communities, persecution of Anabaptists.",
          "Complexity: explain how the two motives worked together or differed by social group.",
        ],
      },
    },
    {
      title: "Absolutism and Constitutionalism",
      weight: "10–15%",
      tldr: "In the 1600s and 1700s, some monarchs claimed absolute power (Louis XIV in France, Peter the Great in Russia), while England and the Dutch Republic developed limited, constitutional governments. A balance of power emerged, and Atlantic trade enriched Western Europe.",
      concepts: [
        {
          title: "French absolutism",
          simple: "Louis XIV ruled with total authority, claiming divine right.",
          detail: "He built Versailles to control the nobility, revoked the Edict of Nantes (1685), and used intendants to govern the provinces. His finance minister Colbert promoted mercantilism. Costly wars weakened France's finances.",
          hook: "\"L'état, c'est moi\" (\"I am the state\").",
        },
        {
          title: "English constitutionalism",
          simple: "In England, conflict between kings and Parliament produced a limited monarchy.",
          detail: "The English Civil War (1642–1649) ended with Charles I's execution and Cromwell's rule. After the Restoration, the Glorious Revolution (1688) replaced James II with William and Mary, who accepted the English Bill of Rights (1689), establishing parliamentary supremacy.",
        },
        {
          title: "The Dutch Republic",
          simple: "The Dutch built a wealthy, tolerant republic based on trade.",
          detail: "After independence from Spain, the Netherlands became a commercial power with the Dutch East India Company and the Amsterdam stock exchange. Power rested with merchant elites, and religious toleration attracted refugees.",
        },
        {
          title: "Absolutism in Central and Eastern Europe",
          simple: "Prussia, Austria and Russia built absolute states with strong armies.",
          detail: "Prussia's Hohenzollerns built a militarized state backed by Junker nobles. Austria's Habsburgs ruled a diverse empire. Peter the Great westernized Russia, founded St. Petersburg and made nobles serve the state. Serfdom was strengthened in the east.",
        },
        {
          title: "Balance of power",
          simple: "European states formed alliances to stop any one power from dominating.",
          detail: "Coalitions checked Louis XIV. The War of Spanish Succession ended with the Treaty of Utrecht (1713), which kept France and Spain from uniting. The Seven Years' War (1756–1763) was a global conflict that made Britain the leading colonial power.",
        },
        {
          title: "The agricultural revolution and economic change",
          simple: "New farming methods raised food output and population.",
          detail: "Crop rotation, enclosure of common lands, and new crops increased yields, especially in Britain and the Netherlands. Enclosure pushed many peasants off the land. The putting-out (cottage) system spread rural manufacturing, and consumer goods from the colonies, like sugar and coffee, spread.",
        },
      ],
      terms: [
        ["Absolutism", "A system in which the monarch holds total power."],
        ["Divine right", "The belief that monarchs get their authority from God."],
        ["Constitutionalism", "Government limited by laws and institutions."],
        ["Glorious Revolution", "The 1688 replacement of James II by William and Mary."],
        ["English Bill of Rights", "The 1689 law limiting royal power and protecting Parliament."],
        ["Junkers", "Prussian landowning nobles who served as army officers."],
        ["Balance of power", "The idea that no single state should dominate Europe."],
        ["Enclosure", "Fencing common lands into private farms."],
      ],
      mistakes: [
        "Thinking absolute monarchs ruled without any help; they relied on nobles and bureaucrats.",
        "Mixing up the English Civil War (1640s) and the Glorious Revolution (1688).",
        "Forgetting that serfdom grew stronger in Eastern Europe while fading in the West.",
      ],
      questions: [
        {
          q: "Louis XIV built the palace of Versailles mainly to",
          choices: ["house the Estates-General", "control and distract the nobility", "defend Paris from invasion", "host Protestant refugees"],
          answer: 1,
          explain: "Keeping nobles at court under watch reduced their independent power.",
        },
        {
          q: "The English Bill of Rights (1689) is significant because it",
          choices: ["established an absolute monarchy", "limited royal power and confirmed the rights of Parliament", "created the Church of England", "abolished the monarchy"],
          answer: 1,
          explain: "It established parliamentary supremacy after the Glorious Revolution.",
        },
        {
          q: "Peter the Great's reforms were mainly intended to",
          choices: ["end serfdom", "modernize Russia along Western lines and strengthen the state", "make Russia a republic", "reduce the size of the army"],
          answer: 1,
          explain: "He adopted Western technology and practices to build military and state power.",
        },
        {
          q: "The Dutch Republic in the 1600s was notable for",
          choices: ["absolutism and religious uniformity", "commercial wealth and relative religious toleration", "a large land army and serfdom", "rejecting overseas trade"],
          answer: 1,
          explain: "Trade, finance and toleration made the Dutch a leading economic power.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE method Louis XIV used to strengthen royal power.\n(b) Describe ONE way England's government differed from France's by 1700.\n(c) Explain ONE reason Eastern European states developed differently from Western Europe.",
        points: [
          "(a) E.g. Versailles, intendants, revoking the Edict of Nantes, divine right, or a large standing army.",
          "(b) E.g. England had a limited monarchy with parliamentary supremacy after 1689.",
          "(c) E.g. strong landed nobility and serfdom, weaker middle classes, or military pressures shaping state-building.",
        ],
      },
    },
    {
      title: "Scientific, Philosophical, and Political Developments",
      weight: "10–15%",
      tldr: "The Scientific Revolution replaced traditional authority with observation, math and experiment. Enlightenment thinkers applied reason to society and government, challenging absolutism and the Church and inspiring enlightened absolutists and later revolutions.",
      concepts: [
        {
          title: "The Scientific Revolution",
          simple: "Scientists used observation and experiment to challenge ancient and Church ideas.",
          detail: "Copernicus proposed a sun-centered (heliocentric) universe. Kepler showed planets move in ellipses. Galileo's telescope observations supported heliocentrism, leading to his trial. Newton's laws of motion and gravity unified physics.",
        },
        {
          title: "The scientific method",
          simple: "Bacon and Descartes developed new ways to gain knowledge.",
          detail: "Francis Bacon promoted empiricism and inductive reasoning from observation. René Descartes promoted deductive reasoning and rationalism (\"I think, therefore I am\"). Scientific societies like the Royal Society spread findings.",
        },
        {
          title: "Enlightenment political thought",
          simple: "Philosophers applied reason to government and argued power comes from the people.",
          detail: "Locke: natural rights to life, liberty and property; government by consent. Montesquieu: separation of powers. Rousseau: the general will and popular sovereignty. Hobbes, earlier, used a social contract to defend strong government.",
        },
        {
          title: "Enlightenment ideas on religion and society",
          simple: "Enlightenment thinkers promoted toleration, free expression and reform.",
          detail: "Voltaire attacked religious intolerance. Deism saw God as a clockmaker who doesn't intervene. Diderot's Encyclopedia spread knowledge. Adam Smith's The Wealth of Nations promoted free markets over mercantilism. Salons, often hosted by women, spread ideas. Mary Wollstonecraft argued for women's education and rights.",
        },
        {
          title: "Enlightened absolutism",
          simple: "Some monarchs adopted Enlightenment reforms while keeping absolute power.",
          detail: "Frederick the Great of Prussia allowed religious toleration and legal reform. Joseph II of Austria abolished serfdom (later reversed) and granted toleration. Catherine the Great of Russia corresponded with philosophers but strengthened serfdom after Pugachev's Rebellion.",
        },
        {
          title: "Eighteenth-century society and economy",
          simple: "Population grew, consumer culture spread, and the middle class expanded.",
          detail: "Better farming and fewer plagues raised population. A consumer revolution brought tea, coffee, sugar and printed goods to more people. Most people remained rural peasants, but cities and the educated middle class grew and read Enlightenment works.",
        },
      ],
      terms: [
        ["Heliocentrism", "The model with the sun at the center of the solar system."],
        ["Empiricism", "Gaining knowledge through observation and experience."],
        ["Rationalism", "Gaining knowledge through reason and logic."],
        ["Natural rights", "Rights all people have by nature, like life, liberty and property."],
        ["Social contract", "An agreement in which people form a government for protection."],
        ["Deism", "Belief in a creator God who does not intervene in the world."],
        ["Laissez-faire", "An economic policy of minimal government interference."],
        ["Enlightened absolutism", "Absolute rule that adopted some Enlightenment reforms."],
      ],
      mistakes: [
        "Confusing Hobbes (strong government) with Locke (limited government and natural rights).",
        "Assuming enlightened absolutists gave up power; they used reform to strengthen the state.",
        "Thinking the Scientific Revolution rejected religion entirely; many scientists were devout.",
      ],
      questions: [
        {
          q: "Which thinker argued that government's purpose is to protect life, liberty and property, and that people may overthrow a government that fails?",
          choices: ["Thomas Hobbes", "John Locke", "Louis XIV", "Jean Calvin"],
          answer: 1,
          explain: "Locke's natural rights and consent of the governed shaped later revolutions.",
        },
        {
          q: "Montesquieu's The Spirit of the Laws is best known for advocating",
          choices: ["divine right monarchy", "separation of powers", "abolishing private property", "mercantilism"],
          answer: 1,
          explain: "Montesquieu argued dividing power among branches prevents tyranny.",
        },
        {
          q: "Catherine the Great is an example of an enlightened absolutist because she",
          choices: ["abolished serfdom permanently", "embraced Enlightenment ideas while keeping absolute power", "created a parliament with real power", "rejected all Western influence"],
          answer: 1,
          explain: "She corresponded with philosophers and made some reforms, but kept full control and strengthened serfdom.",
        },
        {
          q: "Galileo was tried by the Catholic Church mainly because he",
          choices: ["rejected the telescope", "supported the heliocentric model", "denied the existence of God", "supported Luther"],
          answer: 1,
          explain: "His observations supported Copernicus's heliocentric theory, contradicting Church-backed teaching.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE way the Scientific Revolution changed how Europeans gained knowledge.\n(b) Describe ONE Enlightenment idea about government.\n(c) Explain ONE limit to how far enlightened absolutists put Enlightenment ideas into practice.",
        points: [
          "(a) E.g. reliance on observation, experiment and math instead of ancient authorities or the Church.",
          "(b) E.g. Locke's natural rights and consent, Montesquieu's separation of powers, or Rousseau's general will.",
          "(c) E.g. Catherine strengthened serfdom, Joseph II's reforms were reversed, or rulers kept absolute power.",
        ],
      },
    },
    {
      title: "Conflict, Crisis, and Reaction in the Late 18th Century",
      weight: "10–15%",
      tldr: "Debt, inequality and Enlightenment ideas led to the French Revolution in 1789. It moved from moderate constitutional reform to radical terror, then to Napoleon, who spread revolutionary ideas across Europe by conquest. After his defeat, the Congress of Vienna tried to restore order.",
      concepts: [
        {
          title: "Causes of the French Revolution",
          simple: "France faced debt, an unfair tax system and new ideas about rights.",
          detail: "The Old Regime divided society into three estates; the Third Estate paid most taxes but had little power. War debts (including helping the American Revolution) and poor harvests created a crisis. Louis XVI called the Estates-General in 1789.",
        },
        {
          title: "The moderate phase (1789–1792)",
          simple: "The Third Estate formed the National Assembly and wrote a constitution.",
          detail: "The Tennis Court Oath, the storming of the Bastille and the Great Fear followed. The Declaration of the Rights of Man and of the Citizen proclaimed liberty and equality. The Civil Constitution of the Clergy put the Church under state control. The Constitution of 1791 made France a constitutional monarchy.",
        },
        {
          title: "The radical phase and the Terror",
          simple: "War and fear of counterrevolution led radicals to execute the king and thousands of others.",
          detail: "France became a republic in 1792 and executed Louis XVI in 1793. Robespierre and the Committee of Public Safety led the Reign of Terror, used mass conscription (levée en masse) and dechristianization. The Thermidorian Reaction (1794) executed Robespierre, and the Directory followed.",
        },
        {
          title: "Women and the Revolution",
          simple: "Women participated actively but gained few lasting rights.",
          detail: "Women marched on Versailles in 1789. Olympe de Gouges wrote the Declaration of the Rights of Woman and was later executed. Women's political clubs were banned in 1793.",
        },
        {
          title: "Napoleon",
          simple: "Napoleon took power in 1799, kept some revolutionary gains, and conquered much of Europe.",
          detail: "The Napoleonic Code gave legal equality for men and protected property but reduced women's rights. The Concordat of 1801 made peace with the Church. His conquests spread revolutionary ideas and stirred nationalism against French rule. The Continental System and the Russian invasion (1812) led to his defeat.",
        },
        {
          title: "The Congress of Vienna",
          simple: "After Napoleon, Europe's leaders restored monarchies and a balance of power.",
          detail: "Led by Metternich of Austria, the Congress (1814–1815) followed legitimacy (restoring rulers) and balance of power, and surrounded France with stronger states. The Concert of Europe met to suppress revolutions. Conservatism dominated, though liberal and nationalist ideas survived.",
        },
      ],
      terms: [
        ["Old Regime", "France's social and political system before 1789."],
        ["Estates-General", "France's assembly of the three estates, called in 1789."],
        ["Declaration of the Rights of Man", "The 1789 statement of rights of French citizens."],
        ["Reign of Terror", "The 1793–1794 period of mass executions under Robespierre."],
        ["Levée en masse", "The mass conscription of French citizens into the army."],
        ["Napoleonic Code", "Napoleon's unified legal code."],
        ["Congress of Vienna", "The 1814–1815 meeting that redrew Europe after Napoleon."],
        ["Conservatism", "An ideology favoring tradition, monarchy and established institutions."],
      ],
      mistakes: [
        "Treating the Revolution as a single phase instead of moderate, radical and reaction stages.",
        "Thinking Napoleon rejected all revolutionary ideas; he kept legal equality for men and careers open to talent.",
        "Forgetting that nationalism grew as a REACTION to Napoleon's conquests.",
      ],
      questions: [
        {
          q: "Which was an immediate cause of Louis XVI calling the Estates-General in 1789?",
          choices: ["Napoleon's coup", "A severe financial crisis from war debts", "The Congress of Vienna", "The Reign of Terror"],
          answer: 1,
          explain: "The crown was nearly bankrupt and needed approval for new taxes.",
        },
        {
          q: "The Napoleonic Code",
          choices: ["restored noble privileges", "established legal equality for men and protected property rights", "gave women equal political rights", "abolished private property"],
          answer: 1,
          explain: "It kept revolutionary legal equality for men but limited women's rights.",
        },
        {
          q: "The main goal of the Congress of Vienna was to",
          choices: ["spread revolutionary ideas", "restore stability and a balance of power", "unify Germany and Italy", "create a European parliament"],
          answer: 1,
          explain: "Metternich and the great powers restored monarchs and balanced power to prevent another Napoleon.",
        },
        {
          q: "The Reign of Terror is best explained as a response to",
          choices: ["peace and prosperity", "foreign war and fear of internal counterrevolution", "Napoleon's defeat", "the Congress of Vienna"],
          answer: 1,
          explain: "Radicals used terror to defend the republic against foreign armies and internal enemies.",
        },
      ],
      frq: {
        prompt: "Long essay practice: Evaluate the extent to which Napoleon preserved the ideals of the French Revolution.",
        points: [
          "Thesis with a clear position (e.g., he preserved legal equality but abandoned political liberty).",
          "Evidence of preservation: Napoleonic Code, careers open to talent, end of feudal privileges in conquered lands.",
          "Evidence of betrayal: dictatorship, censorship, restoring slavery in the colonies, limiting women's rights, crowning himself emperor.",
          "Complexity: note his conquests spread revolutionary ideas and also sparked nationalism against France.",
        ],
      },
    },
    {
      title: "Industrialization and Its Effects",
      weight: "10–15%",
      tldr: "Beginning in Britain around 1750, industrialization moved production from homes to factories powered by coal and steam. It spread across Europe, created a working class and a larger middle class, and produced new problems and responses, from reforms to socialism.",
      concepts: [
        {
          title: "Why Britain industrialized first",
          simple: "Britain had coal, iron, capital, markets, a stable government and an agricultural surplus.",
          detail: "The agricultural revolution freed labor and fed a growing population. Colonies supplied raw materials and markets. Banking and a stable, pro-business government encouraged investment. Rivers, canals and a coastline made transport easy.",
        },
        {
          title: "Technology and the factory system",
          simple: "Machines like the spinning jenny and steam engine transformed production.",
          detail: "Textile machines (the flying shuttle, spinning jenny, water frame, power loom) moved cloth-making into factories. Watt's improved steam engine powered factories, railways and ships. The Second Industrial Revolution (after about 1870) added steel, chemicals, electricity and oil.",
        },
        {
          title: "Spread of industrialization",
          simple: "Industry spread to Belgium, France and Germany, often with government help.",
          detail: "Continental states built railways and used tariffs to protect industries (as Friedrich List urged). The German Zollverein customs union boosted trade. Southern and Eastern Europe industrialized later, and Russia stayed mostly agricultural until the late 1800s.",
        },
        {
          title: "Social effects of industrialization",
          simple: "Cities grew quickly, and workers faced long hours, low pay and unhealthy conditions.",
          detail: "Urbanization led to overcrowding, disease like cholera, and pollution. Families worked in factories, including children. A new industrial working class and a growing middle class formed. Separate spheres ideology placed middle-class women in the home.",
        },
        {
          title: "Responses to industrialization",
          simple: "Governments, workers and thinkers tried to fix industrial problems.",
          detail: "Britain passed Factory Acts limiting child labor and the Mines Act. The Chartists demanded voting rights for workers. Labor unions formed. Cities built sewers and public health systems. Luddites smashed machines in protest.",
        },
        {
          title: "Socialism and Marxism",
          simple: "Socialists argued workers should share the wealth they produced.",
          detail: "Utopian socialists like Robert Owen built model communities. Marx and Engels's The Communist Manifesto (1848) argued history is class struggle and the proletariat would overthrow the bourgeoisie. Later, revisionist socialists and parties like Germany's SPD pursued reform through elections.",
        },
      ],
      terms: [
        ["Industrial Revolution", "The shift from hand production to machine and factory production."],
        ["Factory system", "Production centered in large workplaces with machines and wage labor."],
        ["Urbanization", "The growth of cities as people move from rural areas."],
        ["Zollverein", "A German customs union that removed internal tariffs."],
        ["Proletariat", "Marx's term for the industrial working class."],
        ["Bourgeoisie", "Marx's term for the middle class that owns the means of production."],
        ["Chartism", "A British movement demanding voting rights for working men."],
        ["Second Industrial Revolution", "Late-1800s industrial growth based on steel, chemicals, electricity and oil."],
      ],
      mistakes: [
        "Thinking industrialization happened everywhere at the same time; it spread unevenly from Britain.",
        "Confusing utopian socialism with Marxism.",
        "Forgetting that government policy shaped industrialization on the Continent.",
      ],
      questions: [
        {
          q: "Which factor best explains why Great Britain industrialized first?",
          choices: ["It had the largest population in Europe", "It had coal, capital, colonial markets and a stable government", "It had no agricultural sector", "It banned foreign trade"],
          answer: 1,
          explain: "Natural resources, investment capital, markets and political stability all combined in Britain.",
        },
        {
          q: "According to Marx, history is driven mainly by",
          choices: ["great leaders", "class struggle", "religion", "nationalism"],
          answer: 1,
          explain: "Marx saw history as conflict between classes, leading eventually to a proletarian revolution.",
        },
        {
          q: "The Factory Acts in Britain were a response to",
          choices: ["falling factory output", "harsh working conditions, especially for children", "the French Revolution", "the Zollverein"],
          answer: 1,
          explain: "They limited working hours and child labor in factories.",
        },
        {
          q: "Which was a major social effect of industrialization in the 1800s?",
          choices: ["Rapid growth of cities and a new industrial working class", "The decline of the middle class", "An end to child labor by 1820", "A return to the putting-out system"],
          answer: 0,
          explain: "Factories drew workers to cities, creating a large urban working class.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE reason industrialization began in Britain.\n(b) Describe ONE effect of industrialization on working-class families.\n(c) Explain ONE way governments or workers responded to industrial problems.",
        points: [
          "(a) E.g. coal and iron, capital, colonial markets, the agricultural revolution, or stable government.",
          "(b) E.g. long hours, child labor, crowded unhealthy housing, or separation of home and work.",
          "(c) E.g. Factory Acts, public health reforms, labor unions, Chartism, or socialist parties.",
        ],
      },
    },
    {
      title: "19th-Century Perspectives and Political Developments",
      weight: "10–15%",
      tldr: "After 1815, new ideologies (liberalism, nationalism, conservatism, socialism) competed. Revolutions in 1848 mostly failed, but nationalism led to the unification of Italy and Germany. By the late 1800s, European powers used industrial strength to build empires in Africa and Asia.",
      concepts: [
        {
          title: "Nineteenth-century ideologies",
          simple: "Liberals wanted rights and constitutions; conservatives defended tradition; nationalists wanted nation-states.",
          detail: "Classical liberalism favored limited government, free markets and voting for property owners. Conservatism (Burke, Metternich) valued monarchy and the Church. Nationalism held that people sharing language and culture should have their own state. Romanticism valued emotion, nature and the national past.",
        },
        {
          title: "The Revolutions of 1848",
          simple: "Revolutions broke out across Europe in 1848 but mostly failed.",
          detail: "Liberals, nationalists and workers rose in France, the German states, Austria and Italy. Divisions among revolutionaries and the loyalty of armies let conservatives regain control. France became a republic briefly, then Louis Napoleon became emperor.",
        },
        {
          title: "Italian unification",
          simple: "Italy was unified by 1870 through Cavour's diplomacy and Garibaldi's campaigns.",
          detail: "Cavour, Piedmont-Sardinia's prime minister, used realpolitik and alliances with France to push Austria out of northern Italy. Garibaldi's Red Shirts conquered the south and handed it to King Victor Emmanuel II. Rome became the capital in 1870.",
        },
        {
          title: "German unification",
          simple: "Bismarck unified Germany through \"blood and iron\" and three wars.",
          detail: "Prussia defeated Denmark (1864), Austria (1866) and France (1870–1871). The German Empire was proclaimed at Versailles in 1871. Bismarck used realpolitik, and later passed social insurance laws to weaken socialists.",
        },
        {
          title: "Reforms and mass politics",
          simple: "Governments expanded voting and social programs to gain public support.",
          detail: "Britain's Reform Acts gradually expanded voting to more men. Russia's Alexander II freed the serfs in 1861. Mass political parties, unions and newspapers grew. Women's suffrage movements, like Britain's suffragettes, pressed for the vote.",
        },
        {
          title: "New Imperialism",
          simple: "In the late 1800s, European powers rapidly colonized Africa and Asia.",
          detail: "Motives included raw materials, markets, national prestige and racist ideas like Social Darwinism and the \"civilizing mission.\" The Berlin Conference (1884–1885) set rules for dividing Africa. Technology like steamships, quinine and machine guns made conquest possible. Resistance included the Sepoy Rebellion and Ethiopia's victory at Adwa.",
        },
        {
          title: "Science and culture in the late 1800s",
          simple: "New science and art challenged old certainties.",
          detail: "Darwin's theory of evolution by natural selection challenged religious views. Freud stressed the irrational mind. Realism in art and literature showed everyday life; later, modern art (Impressionism and beyond) broke with tradition.",
        },
      ],
      terms: [
        ["Liberalism", "An ideology favoring individual rights, constitutions and free markets."],
        ["Nationalism", "The belief that a people with a shared culture should have its own state."],
        ["Romanticism", "A movement emphasizing emotion, nature and the past."],
        ["Realpolitik", "Politics based on practical power rather than ideals."],
        ["Risorgimento", "The movement for Italian unification."],
        ["Emancipation of the serfs", "Alexander II's 1861 freeing of Russia's serfs."],
        ["Berlin Conference", "The 1884–1885 meeting that set rules for colonizing Africa."],
        ["Social Darwinism", "The misuse of evolution to justify racism and imperialism."],
      ],
      mistakes: [
        "Treating nineteenth-century liberalism as modern liberalism; it meant limited government and free markets.",
        "Saying German unification came from liberal revolution; it came from Prussian power and war.",
        "Forgetting non-economic motives for imperialism, like prestige and racism.",
      ],
      questions: [
        {
          q: "Bismarck's approach to unifying Germany is best described as",
          choices: ["liberal and democratic", "realpolitik backed by military force", "pacifist diplomacy", "socialist revolution"],
          answer: 1,
          explain: "He used practical power politics and three wars (\"blood and iron\").",
        },
        {
          q: "The Revolutions of 1848 mostly failed because",
          choices: ["revolutionaries were united on every goal", "revolutionaries were divided and armies stayed loyal to rulers", "all monarchs voluntarily gave up power", "there was no support in cities"],
          answer: 1,
          explain: "Splits between liberals, nationalists and workers let conservative forces recover.",
        },
        {
          q: "Which idea was used to justify New Imperialism in the late 1800s?",
          choices: ["Social Darwinism", "Deism", "Divine right", "Sola fide"],
          answer: 0,
          explain: "Social Darwinism misapplied evolution to claim Europeans were superior and destined to rule.",
        },
        {
          q: "Cavour's role in Italian unification was mainly",
          choices: ["leading the Red Shirts in battle", "using diplomacy and alliances to expand Piedmont-Sardinia", "writing the Communist Manifesto", "leading the 1848 revolution in Paris"],
          answer: 1,
          explain: "Cavour's diplomacy, especially the French alliance, drove Austria out of northern Italy.",
        },
      ],
      frq: {
        prompt: "Long essay practice: Compare the processes of Italian and German unification in the 1800s.",
        points: [
          "Thesis that names at least one similarity and one difference.",
          "Similarity: both led by a strong northern state (Piedmont, Prussia) using realpolitik and war against Austria.",
          "Difference: Garibaldi's popular volunteer campaigns in Italy vs. Bismarck's top-down Prussian military campaigns; Germany became a stronger industrial power.",
          "Explain the reasons behind the similarity and difference.",
        ],
      },
    },
    {
      title: "20th-Century Global Conflicts",
      weight: "10–15%",
      tldr: "Nationalism, alliances, militarism and imperial rivalry led to World War I, a devastating total war. It brought the Russian Revolution and a flawed peace. Economic depression helped fascists and Nazis rise, leading to World War II and the Holocaust.",
      concepts: [
        {
          title: "Causes of World War I",
          simple: "Militarism, alliances, imperialism and nationalism turned a local crisis into world war.",
          detail: "The assassination of Archduke Franz Ferdinand in 1914 set off a chain of alliances: Triple Entente (France, Russia, Britain) vs. Triple Alliance / Central Powers (Germany, Austria-Hungary). Germany's \"blank check\" to Austria and the Schlieffen Plan widened the war.",
          hook: "MAIN: Militarism, Alliances, Imperialism, Nationalism.",
        },
        {
          title: "Total war",
          simple: "WWI mobilized whole societies, with trench warfare causing huge casualties.",
          detail: "Machine guns, artillery and poison gas created stalemate on the Western Front. Governments controlled economies, used propaganda and censorship, and drew women into factory work. Most men who fought were conscripts.",
        },
        {
          title: "The Russian Revolution",
          simple: "War losses led to the tsar's fall in 1917 and a Bolshevik takeover.",
          detail: "The February Revolution ended the monarchy; the Provisional Government stayed in the war. Lenin's Bolsheviks seized power in October with \"Peace, Land, Bread,\" left the war (Treaty of Brest-Litovsk), won a civil war and created the USSR. Stalin later used Five-Year Plans, collectivization and purges.",
        },
        {
          title: "The Treaty of Versailles and the interwar years",
          simple: "The peace blamed and punished Germany, creating resentment.",
          detail: "The war guilt clause, reparations, territorial losses and military limits angered Germans. New nations formed in Eastern Europe from fallen empires. The League of Nations was weak, lacking the U.S. The Great Depression (from 1929) caused mass unemployment.",
        },
        {
          title: "Fascism and Nazism",
          simple: "Fascists promised national strength and order through dictatorship.",
          detail: "Mussolini took power in Italy in 1922. Hitler rose through the Depression, anti-communism and resentment of Versailles, became chancellor in 1933, and built a totalitarian state based on racism and antisemitism. Both used propaganda, violence and a single party.",
        },
        {
          title: "World War II",
          simple: "German aggression and appeasement led to World War II in 1939.",
          detail: "Britain and France appeased Hitler at Munich (1938). Germany invaded Poland in 1939 after the Nazi-Soviet Pact. Blitzkrieg conquered much of Europe; the invasion of the USSR (1941) and U.S. entry turned the war. The Allies won in 1945.",
        },
        {
          title: "The Holocaust",
          simple: "Nazi Germany murdered six million Jews and millions of others.",
          detail: "Persecution began with laws like the Nuremberg Laws (1935) and Kristallnacht (1938), then moved to ghettos, mass shootings and death camps like Auschwitz. Roma, disabled people, and others were also targeted. The Final Solution was systematic, state-organized genocide.",
        },
      ],
      terms: [
        ["Total war", "A war that mobilizes a society's entire population and economy."],
        ["Trench warfare", "Fighting from fortified ditches, causing stalemate in WWI."],
        ["Bolsheviks", "Lenin's revolutionary party that took power in Russia in 1917."],
        ["War guilt clause", "The Versailles clause blaming Germany for WWI."],
        ["Fascism", "A nationalist, authoritarian ideology that rejects democracy and communism."],
        ["Totalitarianism", "A government that seeks to control every part of life."],
        ["Appeasement", "Giving in to an aggressor's demands to avoid war."],
        ["Holocaust", "The Nazi genocide of six million Jews and millions of others."],
      ],
      mistakes: [
        "Blaming only the assassination for WWI rather than the long-term causes.",
        "Confusing the February and October Revolutions in 1917.",
        "Forgetting the Great Depression's role in Hitler's rise.",
      ],
      questions: [
        {
          q: "Which best explains why the assassination of Franz Ferdinand led to a general European war?",
          choices: ["The League of Nations failed", "A system of alliances drew in the great powers", "The Great Depression", "The Treaty of Versailles"],
          answer: 1,
          explain: "Alliance commitments turned a Balkan conflict into a war among great powers.",
        },
        {
          q: "The Bolsheviks gained support in 1917 largely by promising",
          choices: ["to continue the war", "\"Peace, Land, Bread\"", "to restore the tsar", "free markets"],
          answer: 1,
          explain: "Their slogan appealed to war-weary soldiers, land-hungry peasants and hungry workers.",
        },
        {
          q: "Which was a major reason for German resentment after World War I?",
          choices: ["The Treaty of Versailles's reparations and war guilt clause", "The Congress of Vienna", "The Marshall Plan", "German unification"],
          answer: 0,
          explain: "Versailles blamed Germany, demanded reparations and took territory.",
        },
        {
          q: "Appeasement, as at the Munich Conference (1938), refers to",
          choices: ["the Allied invasion of Normandy", "Britain and France giving in to Hitler's demands to avoid war", "the Nazi-Soviet Pact", "Soviet collectivization"],
          answer: 1,
          explain: "Britain and France let Germany take the Sudetenland, hoping to keep peace.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE long-term cause of World War I.\n(b) Describe ONE way World War I was a total war.\n(c) Explain ONE way the results of World War I contributed to World War II.",
        points: [
          "(a) E.g. militarism, alliances, imperial rivalry or nationalism.",
          "(b) E.g. conscription, government control of the economy, propaganda, or women in war industries.",
          "(c) E.g. resentment of Versailles, the weak League of Nations, or instability that helped fascists rise.",
        ],
      },
    },
    {
      title: "Cold War and Contemporary Europe",
      weight: "10–15%",
      tldr: "After 1945, Europe split into a U.S.-aligned West and a Soviet-controlled East. Western Europe rebuilt, created welfare states and began integrating economically, while empires collapsed. Communism fell in 1989–1991, and the European Union expanded, facing new challenges.",
      concepts: [
        {
          title: "Origins of the Cold War",
          simple: "The U.S. and USSR became rivals, dividing Europe with an \"iron curtain.\"",
          detail: "The Soviets set up communist governments in Eastern Europe. The U.S. responded with containment: the Truman Doctrine and the Marshall Plan, which funded Western European recovery. The Berlin Airlift (1948–1949) and the creation of NATO (1949) and the Warsaw Pact (1955) hardened the division.",
        },
        {
          title: "Soviet control of Eastern Europe",
          simple: "The USSR crushed reform movements in its satellite states.",
          detail: "Soviet troops put down the Hungarian Revolution (1956) and the Prague Spring (1968). The Berlin Wall (1961) stopped East Germans from fleeing. Khrushchev's de-Stalinization loosened some controls but kept the one-party system.",
        },
        {
          title: "Western European recovery and integration",
          simple: "Western Europe rebuilt with U.S. aid and began cooperating economically.",
          detail: "The European Coal and Steel Community (1951) and the European Economic Community (1957) linked former enemies. Many countries built welfare states with national health care and social insurance. Economic growth brought consumer prosperity.",
        },
        {
          title: "Decolonization",
          simple: "After WWII, European empires in Asia and Africa gained independence.",
          detail: "India won independence from Britain in 1947. France fought costly wars in Vietnam and Algeria. Weakened by war, and facing nationalist movements and U.S. and Soviet pressure, Europe gave up most colonies by the 1970s. Migration from former colonies changed European societies.",
        },
        {
          title: "The fall of communism",
          simple: "Communism collapsed in Eastern Europe in 1989 and the USSR broke up in 1991.",
          detail: "Gorbachev's glasnost (openness) and perestroika (restructuring) tried to reform the USSR. Poland's Solidarity movement, economic stagnation and Gorbachev's refusal to use force led to peaceful revolutions in 1989. The Berlin Wall fell, Germany reunified (1990), and the USSR dissolved (1991). Yugoslavia broke up in violent ethnic wars.",
        },
        {
          title: "Contemporary Europe",
          simple: "The European Union grew, adopted the euro, and faces new challenges.",
          detail: "The Maastricht Treaty (1993) created the EU, and the euro began in 1999. Eastern European countries joined in 2004. Challenges include the debt crisis, migration, nationalist and populist movements, Brexit (2020), and Russia's wars in Ukraine.",
        },
        {
          title: "Social and cultural change after 1945",
          simple: "Postwar Europe saw feminism, youth movements and secularization.",
          detail: "Simone de Beauvoir's The Second Sex inspired second-wave feminism. Students protested in 1968. Existentialism explored meaning after the war's horrors. Church attendance declined, and new immigrant communities made Europe more diverse.",
        },
      ],
      terms: [
        ["Containment", "The U.S. policy of stopping the spread of communism."],
        ["Marshall Plan", "U.S. aid for rebuilding Western Europe after WWII."],
        ["NATO", "The Western military alliance formed in 1949."],
        ["Warsaw Pact", "The Soviet-led military alliance of Eastern Europe."],
        ["Welfare state", "A government that provides broad social services like health care."],
        ["Decolonization", "The process of colonies gaining independence."],
        ["Glasnost", "Gorbachev's policy of political openness."],
        ["Perestroika", "Gorbachev's policy of economic restructuring."],
      ],
      mistakes: [
        "Forgetting that the Marshall Plan was both humanitarian and anti-communist.",
        "Thinking Gorbachev meant to end communism; he tried to reform it.",
        "Ignoring decolonization's effect on migration into Europe.",
      ],
      questions: [
        {
          q: "The Marshall Plan's main purpose was to",
          choices: ["punish Germany", "rebuild Western Europe's economies and limit the appeal of communism", "create the Warsaw Pact", "fund decolonization"],
          answer: 1,
          explain: "U.S. aid rebuilt Western Europe, making communism less attractive.",
        },
        {
          q: "Gorbachev's policies of glasnost and perestroika were intended to",
          choices: ["end communism immediately", "reform and strengthen the Soviet system", "restore Stalinism", "join NATO"],
          answer: 1,
          explain: "He aimed to revive the USSR through openness and economic restructuring, but the reforms helped bring it down.",
        },
        {
          q: "The European Coal and Steel Community (1951) was significant because it",
          choices: ["started the Cold War", "began economic integration that led to the European Union", "divided Germany", "ended the welfare state"],
          answer: 1,
          explain: "Linking French and German heavy industry was the first step toward European integration.",
        },
        {
          q: "Which best explains the speed of decolonization after 1945?",
          choices: ["European powers were weakened by war and faced strong nationalist movements", "Colonies became less valuable after 1900", "The League of Nations required it", "The Congress of Vienna ordered it"],
          answer: 0,
          explain: "Wartime losses, independence movements and superpower pressure made empires hard to hold.",
        },
      ],
      frq: {
        prompt: "Short answer:\n(a) Describe ONE way the United States tried to contain communism in Europe.\n(b) Describe ONE way the Soviet Union maintained control over Eastern Europe.\n(c) Explain ONE reason communism collapsed in Eastern Europe in 1989.",
        points: [
          "(a) E.g. the Marshall Plan, the Truman Doctrine, NATO, or the Berlin Airlift.",
          "(b) E.g. crushing Hungary (1956) or the Prague Spring (1968), the Berlin Wall, or the Warsaw Pact.",
          "(c) E.g. economic stagnation, Gorbachev's reforms and refusal to use force, or movements like Solidarity.",
        ],
      },
    },
  ],
};
