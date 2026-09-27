window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["human-geography"] = {
  tips: [
    "Think in scales: local, regional, national and global. Many questions ask how a pattern changes when you change the scale of analysis.",
    "Learn each model's assumptions and limits (Demographic Transition, von Thünen, Burgess, Rostow, Wallerstein). The exam loves \"explain a limitation of this model.\"",
    "Use specific place examples in free responses: name the country, city or region.",
    "Free-response answers are short and precise: define, describe, explain, compare. Write one clear sentence per point.",
    "Read maps, graphs and population pyramids carefully before answering. The data usually contains the answer.",
  ],
  units: [
    {
      title: "Thinking Geographically",
      weight: "8–10%",
      tldr: "Geographers use maps, data and spatial concepts like location, distance, scale and region to explain patterns. Human–environment interaction shapes how people use and change the Earth.",
      concepts: [
        {
          title: "Maps and map projections",
          simple: "Every flat map distorts the round Earth in some way.",
          detail: "Projections distort shape, area, distance or direction. Mercator keeps direction and shape locally (useful for navigation) but exaggerates area near the poles. Equal-area projections (like Gall-Peters) keep area but distort shape. Thematic maps: choropleth (shading by area), dot density, graduated symbol, isoline, cartogram.",
        },
        {
          title: "Geographic data and tools",
          simple: "Geographers collect data from fieldwork, satellites, censuses and GIS.",
          detail: "GIS layers spatial data for analysis; remote sensing collects data from satellites or aircraft; GPS pinpoints absolute location. Qualitative data (interviews, photos) and quantitative data (census counts) are both used.",
        },
        {
          title: "Location, place and space",
          simple: "Absolute location is a precise address; relative location describes a place compared to other places.",
          detail: "Absolute location uses latitude and longitude. Relative location describes connections (\"near the Panama Canal\"). Site is a place's physical characteristics; situation is its location relative to other places. Sense of place and toponyms (place names) describe meaning.",
        },
        {
          title: "Distance decay and time-space compression",
          simple: "Interaction decreases with distance, but technology makes places feel closer.",
          detail: "Distance decay: the farther apart two places are, the less they interact. Time-space compression: transportation and communication reduce the time it takes to connect places. Friction of distance is the cost of overcoming distance.",
        },
        {
          title: "Scales of analysis",
          simple: "Patterns can look different at local, regional, national and global scales.",
          detail: "A country may look wealthy at the national scale while specific regions are poor. Choosing the scale changes what patterns appear. Good answers explain how data at different scales reveals different stories.",
        },
        {
          title: "Regions",
          simple: "Regions group places by shared characteristics, connections or perceptions.",
          detail: "Formal (uniform) regions share a trait, such as a language. Functional (nodal) regions are organized around a central node, such as a newspaper's delivery area. Perceptual (vernacular) regions are based on people's feelings, such as \"the South.\"",
          hook: "Formal = same trait. Functional = same hub. Perceptual = same feeling.",
        },
        {
          title: "Human–environment interaction",
          simple: "People adapt to, modify and depend on their environments.",
          detail: "Environmental determinism (discredited) claimed that environment controls human behavior. Possibilism says the environment sets limits, but people make choices. Sustainability means meeting present needs without harming the future.",
        },
      ],
      terms: [
        ["Mercator projection", "Map projection that preserves direction but distorts area near the poles."],
        ["Choropleth map", "Thematic map using shading to show data by area."],
        ["Site", "The physical characteristics of a place."],
        ["Situation", "A place's location relative to other places."],
        ["Distance decay", "Interaction decreases as distance increases."],
        ["Functional region", "A region organized around a central node."],
        ["Possibilism", "The idea that the environment limits but doesn't determine human choices."],
      ],
      mistakes: [
        "Confusing site (physical features) with situation (relative location).",
        "Calling a perceptual region a formal region.",
      ],
      questions: [
        { q: "Which map projection greatly exaggerates the size of Greenland and Antarctica?", choices: ["Equal-area projection", "Mercator projection", "Robinson projection", "Polar projection"], answer: 1, explain: "Mercator enlarges areas near the poles." },
        { q: "The area served by a single television station is an example of a", choices: ["formal region", "functional region", "perceptual region", "physical region"], answer: 1, explain: "It's organized around a central node (the station)." },
        { q: "A city located where two rivers meet, making it a trade hub, is described by its", choices: ["site", "situation", "absolute location", "toponym"], answer: 1, explain: "Situation describes a place's position relative to other places and connections." },
        { q: "The spread of the internet has reduced the time it takes to communicate between distant places. This is called", choices: ["distance decay", "time-space compression", "environmental determinism", "friction of distance"], answer: 1, explain: "Technology compressing time and space makes places feel closer." },
      ],
      frq: {
        prompt: "A choropleth map shows median household income by state in the United States.\n(a) Describe one advantage of using a choropleth map for this data.\n(b) Explain one limitation of showing income at the state scale.\n(c) Explain how a different scale of analysis could reveal a different pattern.",
        points: [
          "(a) It makes regional patterns and differences between states easy to see.",
          "(b) State averages hide variation within states, such as poor rural counties in a wealthy state.",
          "(c) County or city-level data could reveal pockets of poverty or wealth that the state average hides.",
        ],
      },
    },
    {
      title: "Population and Migration Patterns and Processes",
      weight: "12–17%",
      tldr: "Population is unevenly distributed, and it grows or shrinks through births, deaths and migration. The Demographic Transition Model describes how these change as countries develop. Migration is driven by push and pull factors.",
      concepts: [
        {
          title: "Population distribution and density",
          simple: "People cluster in places with fertile land, water, mild climates and jobs.",
          detail: "Arithmetic density = people ÷ total land area. Physiological density = people ÷ arable land (shows pressure on farmland). Agricultural density = farmers ÷ arable land (lower in developed countries with mechanized farming).",
        },
        {
          title: "Population pyramids",
          simple: "A population pyramid shows a population's age and sex structure.",
          detail: "Wide bases show high birth rates (young, growing populations). Narrow bases and top-heavy shapes show aging populations. The dependency ratio compares people under 15 and over 64 to working-age people.",
        },
        {
          title: "The Demographic Transition Model",
          simple: "As countries develop, death rates fall first, then birth rates, changing population growth.",
          detail: "Stage 1: high birth and death rates. Stage 2: death rates fall (medicine, sanitation), and population booms. Stage 3: birth rates fall (urbanization, women's education, contraception). Stage 4: low birth and death rates. Stage 5 (some countries): birth rates below death rates, and population declines.",
        },
        {
          title: "Theories of population growth",
          simple: "Malthus feared population would outgrow food; critics disagree.",
          detail: "Malthus argued population grows geometrically while food grows arithmetically, leading to famine. Neo-Malthusians add resource depletion. Critics like Boserup argue population growth drives agricultural innovation. The Green Revolution raised food output beyond Malthus's predictions.",
        },
        {
          title: "Population policies",
          simple: "Governments try to raise or lower birth rates through policy.",
          detail: "Antinatalist policies discourage births (China's former one-child policy). Pronatalist policies encourage births (tax benefits and parental leave in aging countries). Immigration policies also shape population change.",
        },
        {
          title: "Women and demographic change",
          simple: "When women gain education and jobs, birth rates usually fall.",
          detail: "More education and employment for women lead to later marriage, fewer children, and lower infant mortality. This is one of the strongest predictors of falling total fertility rates.",
        },
        {
          title: "Causes and types of migration",
          simple: "People migrate because of push factors at home and pull factors elsewhere.",
          detail: "Push and pull factors can be economic, political, social, cultural or environmental. Forced migration (refugees, slavery) vs. voluntary migration. Ravenstein's laws: most migrants move short distances; long-distance migrants go to big cities. Intervening obstacles and opportunities affect migration. Chain migration and step migration are common patterns.",
        },
        {
          title: "Effects of migration",
          simple: "Migration changes both the places people leave and the places they go.",
          detail: "Sending countries may lose skilled workers (brain drain) but gain remittances. Receiving countries gain labor and cultural diversity but may see tension over resources and identity. Guest workers and transnational migrants maintain ties to home.",
        },
      ],
      terms: [
        ["Physiological density", "Number of people per unit of arable land."],
        ["Dependency ratio", "Ratio of dependents (under 15 and over 64) to working-age people."],
        ["Total fertility rate", "Average number of children a woman has in her lifetime."],
        ["Rate of natural increase", "Crude birth rate minus crude death rate."],
        ["Antinatalist policy", "A policy discouraging births."],
        ["Remittances", "Money migrants send back to their home country."],
        ["Chain migration", "Migration following family or friends who moved earlier."],
      ],
      mistakes: [
        "Mixing up physiological density (arable land) and arithmetic density (total land).",
        "Saying birth rates fall before death rates in the Demographic Transition Model.",
      ],
      questions: [
        { q: "Which measure best shows the pressure a population puts on its farmland?", choices: ["Arithmetic density", "Physiological density", "Agricultural density", "Dependency ratio"], answer: 1, explain: "Physiological density divides population by arable land." },
        { q: "In Stage 2 of the Demographic Transition Model, what happens?", choices: ["Birth rates fall while death rates stay high", "Death rates fall while birth rates stay high", "Both rates are low and stable", "Death rates rise sharply"], answer: 1, explain: "Improved medicine and sanitation lower death rates first, causing rapid growth." },
        { q: "Malthus's theory is most often criticized because", choices: ["population never grows", "technology like the Green Revolution increased food supply faster than he predicted", "he ignored death rates", "he focused only on migration"], answer: 1, explain: "Agricultural innovation raised food output, which Malthus didn't anticipate." },
        { q: "Money that migrants send back to family in their home country is called", choices: ["brain drain", "remittances", "chain migration", "foreign aid"], answer: 1, explain: "Remittances are an important income source for many developing countries." },
      ],
      frq: {
        prompt: "Country X has a population pyramid with a narrow base and a wide top.\n(a) Identify the stage of the Demographic Transition Model this pyramid most likely represents.\n(b) Describe one economic challenge this population structure creates.\n(c) Explain one policy the government could use to address this challenge.",
        points: [
          "(a) Stage 4 or Stage 5.",
          "(b) A high dependency ratio of elderly people: fewer workers support pensions and health care, and labor shortages may occur.",
          "(c) A pronatalist policy (paid parental leave, child subsidies) or encouraging immigration of working-age people.",
        ],
      },
    },
    {
      title: "Cultural Patterns and Processes",
      weight: "12–17%",
      tldr: "Culture includes language, religion, ethnicity and traditions. It spreads through different types of diffusion, and globalization both spreads and challenges local cultures.",
      concepts: [
        {
          title: "Culture and cultural landscapes",
          simple: "Culture is a group's shared beliefs and practices, and it leaves visible marks on the landscape.",
          detail: "Cultural landscapes include buildings, land use, religious sites and signs. Sequent occupance describes layers left by successive groups. Traditional architecture reflects local materials and climate.",
        },
        {
          title: "Types of diffusion",
          simple: "Ideas and traits spread in different ways from where they start.",
          detail: "Relocation diffusion: people carry culture with them when they move. Expansion diffusion spreads while staying in the hearth: contagious (to nearby people, like a virus), hierarchical (from powerful or large places to smaller ones), stimulus (the idea spreads but changes, like vegetarian burgers in India).",
          hook: "Relocation = people move. Expansion = the idea moves.",
        },
        {
          title: "Languages",
          simple: "Language families and dialects show historical connections and diffusion.",
          detail: "Language families (Indo-European, Sino-Tibetan), branches and groups show common origins. Lingua francas (English, Swahili) help trade between groups. Dialects are regional variations. Creole and pidgin languages form from contact between languages.",
        },
        {
          title: "Religions",
          simple: "Universalizing religions seek converts; ethnic religions are tied to a specific group or place.",
          detail: "Universalizing: Christianity, Islam, Buddhism, Sikhism; spread through relocation and expansion diffusion. Ethnic: Hinduism, Judaism; mostly spread by relocation. Religious landscapes include sacred sites, pilgrimage routes and burial practices.",
        },
        {
          title: "Globalization and cultural change",
          simple: "Global media and trade spread popular culture, sometimes replacing local traditions.",
          detail: "Popular culture diffuses quickly and widely; folk culture is local and traditional. Acculturation adopts some traits of another culture; assimilation absorbs a group fully; syncretism blends cultures. Cultural convergence vs. divergence describes whether cultures become more similar or different.",
        },
        {
          title: "Ethnicity and identity",
          simple: "Ethnic identity links people through shared ancestry, language and traditions.",
          detail: "Ethnic neighborhoods (ethnic enclaves) preserve culture in new places. Gender roles, religion and language shape identity and space. Centripetal forces unify groups; centrifugal forces divide them.",
        },
        {
          title: "Historical causes of diffusion",
          simple: "Colonialism, imperialism and trade spread languages and religions worldwide.",
          detail: "European colonialism spread English, Spanish, French and Portuguese, plus Christianity, to other continents. Trade routes spread Islam and Buddhism. Migration continues to reshape cultural patterns today.",
        },
      ],
      terms: [
        ["Relocation diffusion", "Spread of culture through the movement of people."],
        ["Hierarchical diffusion", "Spread from larger or more powerful places to smaller ones."],
        ["Stimulus diffusion", "An underlying idea spreads but the specific trait changes."],
        ["Lingua franca", "A common language used between speakers of different languages."],
        ["Universalizing religion", "A religion that seeks converts worldwide."],
        ["Syncretism", "Blending of elements from different cultures."],
        ["Assimilation", "A group fully adopting the culture of another."],
      ],
      mistakes: [
        "Confusing contagious diffusion (nearby spread) with hierarchical diffusion (spread through levels of power).",
        "Calling Hinduism a universalizing religion.",
      ],
      questions: [
        { q: "A fashion trend starts in major cities like New York and Paris, then spreads to smaller towns. This is", choices: ["contagious diffusion", "hierarchical diffusion", "relocation diffusion", "stimulus diffusion"], answer: 1, explain: "It spreads from large, influential places to smaller ones." },
        { q: "McDonald's in India serves vegetarian burgers instead of beef. This is an example of", choices: ["relocation diffusion", "stimulus diffusion", "assimilation", "contagious diffusion"], answer: 1, explain: "The idea (fast-food burgers) spread but was modified for local beliefs." },
        { q: "Which is an ethnic religion?", choices: ["Islam", "Buddhism", "Hinduism", "Christianity"], answer: 2, explain: "Hinduism is closely tied to a specific culture and region and doesn't actively seek converts." },
        { q: "English used for communication between business people from Japan and Brazil serves as a", choices: ["dialect", "lingua franca", "creole", "language isolate"], answer: 1, explain: "A lingua franca is a shared language between speakers of different native languages." },
      ],
      frq: {
        prompt: "Many cities have ethnic neighborhoods such as Chinatowns and Little Italys.\n(a) Define ethnic enclave.\n(b) Describe one way ethnic enclaves shape the cultural landscape.\n(c) Explain one process by which later generations may change their cultural practices.",
        points: [
          "(a) A neighborhood where people of one ethnic group cluster and preserve their culture.",
          "(b) Signs in the group's language, religious buildings, restaurants and stores, and architecture.",
          "(c) Acculturation or assimilation: later generations adopt the host culture's language and customs.",
        ],
      },
    },
    {
      title: "Political Patterns and Processes",
      weight: "12–17%",
      tldr: "States, nations and boundaries organize political space. Forces like devolution and supranationalism reshape power, and boundaries can cause conflict or cooperation.",
      concepts: [
        {
          title: "States, nations and nation-states",
          simple: "A state is a political unit; a nation is a group of people with shared identity.",
          detail: "A nation-state is a state whose people mostly share one nationality (Japan). Multinational states contain several nations. Stateless nations (the Kurds, Palestinians) lack their own state. Sovereignty is a state's control over its territory.",
        },
        {
          title: "Colonialism and political boundaries",
          simple: "Colonialism drew many modern borders, often ignoring ethnic groups.",
          detail: "The Berlin Conference (1884–85) divided Africa among European powers, creating borders that split and combined ethnic groups. This contributes to later conflicts. Decolonization created many new states after World War II.",
        },
        {
          title: "Types of boundaries",
          simple: "Boundaries are classified by how and when they were drawn.",
          detail: "Antecedent: drawn before settlement. Subsequent: drawn after settlement, reflecting cultural differences. Superimposed: forced by outside powers (much of Africa). Relic: no longer function but remain visible (the Berlin Wall). Geometric boundaries follow straight lines; physical boundaries follow natural features.",
        },
        {
          title: "Law of the Sea and maritime boundaries",
          simple: "International law divides the ocean into zones controlled by coastal states.",
          detail: "UN Convention on the Law of the Sea: territorial waters extend 12 nautical miles; the exclusive economic zone (EEZ) extends 200 nautical miles, giving rights to fish and resources. Overlapping claims cause disputes (the South China Sea).",
        },
        {
          title: "Forms of government and territory",
          simple: "Unitary states concentrate power centrally; federal states share it with regions.",
          detail: "Unitary states (France, Japan) centralize power. Federal states (U.S., Germany, India) divide power between national and regional governments, helping manage diversity. Gerrymandering redraws electoral districts to favor a group.",
        },
        {
          title: "Devolution and centrifugal forces",
          simple: "Devolution moves power from the central government to regions, sometimes because of divisions.",
          detail: "Centrifugal forces (ethnic separatism, economic inequality, terrorism) divide states. Centripetal forces (shared nationalism, infrastructure, religion) unite them. Devolution examples: Scotland, Catalonia. Extreme cases lead to balkanization (breakup of a region into smaller hostile states).",
        },
        {
          title: "Supranationalism",
          simple: "States join international organizations and give up some sovereignty for shared benefits.",
          detail: "Examples: the United Nations, the European Union, NATO, ASEAN, the African Union. Benefits include trade and security; challenges include loss of sovereignty. Brexit shows tension between supranationalism and national sovereignty.",
        },
      ],
      terms: [
        ["Nation-state", "A state whose people largely share one national identity."],
        ["Stateless nation", "A nation without its own state, like the Kurds."],
        ["Superimposed boundary", "A boundary drawn by outside powers, ignoring existing cultures."],
        ["Exclusive economic zone", "Area up to 200 nautical miles where a coastal state controls resources."],
        ["Devolution", "Transfer of power from a central government to regional governments."],
        ["Centripetal force", "A force that unites a state."],
        ["Supranationalism", "Cooperation among states in organizations that share some sovereignty."],
      ],
      mistakes: [
        "Using \"nation\" and \"state\" interchangeably.",
        "Confusing antecedent (before settlement) and subsequent (after settlement) boundaries.",
      ],
      questions: [
        { q: "The Kurds, spread across Turkey, Iraq, Iran and Syria, are an example of a", choices: ["nation-state", "stateless nation", "multistate nation with its own state", "microstate"], answer: 1, explain: "The Kurds share a national identity but have no sovereign state." },
        { q: "Borders in Africa drawn by European powers at the Berlin Conference are best described as", choices: ["antecedent", "subsequent", "superimposed", "relic"], answer: 2, explain: "Outside powers imposed them, often ignoring existing ethnic boundaries." },
        { q: "Scotland gaining its own parliament within the United Kingdom is an example of", choices: ["supranationalism", "devolution", "balkanization", "irredentism"], answer: 1, explain: "Power was transferred from the central government to a region." },
        { q: "A coastal country's exclusive economic zone extends", choices: ["3 nautical miles", "12 nautical miles", "200 nautical miles", "500 nautical miles"], answer: 2, explain: "UNCLOS sets the EEZ at 200 nautical miles." },
      ],
      frq: {
        prompt: "The European Union is a supranational organization.\n(a) Define supranationalism.\n(b) Describe one benefit member states gain from the EU.\n(c) Explain one reason a member state might choose to leave, using a real example.",
        points: [
          "(a) Cooperation among three or more states in an organization where they share some sovereignty for common goals.",
          "(b) Free trade and movement of goods and people, a shared currency, or a stronger collective voice.",
          "(c) Brexit: the UK left over concerns about loss of sovereignty, immigration control, and EU regulations.",
        ],
      },
    },
    {
      title: "Agriculture and Rural Land-Use Patterns and Processes",
      weight: "12–17%",
      tldr: "Agriculture depends on climate, technology and markets. Farming ranges from subsistence to large commercial agribusiness. Agricultural revolutions transformed food production, with environmental and social trade-offs.",
      concepts: [
        {
          title: "Types of agriculture",
          simple: "Farming can be intensive or extensive, subsistence or commercial.",
          detail: "Intensive agriculture uses a lot of labor or capital on small land (market gardening, rice farming, plantation). Extensive uses less input on large areas (pastoral nomadism, ranching, shifting cultivation). Subsistence farming feeds the family; commercial farming sells for profit.",
        },
        {
          title: "Agricultural revolutions",
          simple: "Three major revolutions changed how humans produce food.",
          detail: "First (Neolithic): domestication of plants and animals. Second: in Europe, alongside the Industrial Revolution, with new tools, crop rotation and more output. Third (Green Revolution, mid-1900s): high-yield seeds, fertilizers, pesticides and irrigation, increasing yields in Asia and Latin America but raising environmental and inequality concerns.",
        },
        {
          title: "The von Thünen model",
          simple: "Farm land use forms rings around a market based on transport costs.",
          detail: "Rings from the city: market gardening and dairy (perishable, near market), forest (heavy fuel and lumber), grain and field crops, then ranching (animals can walk to market). Limitations: assumes a flat, uniform landscape and one market; modern refrigeration and transport change the pattern.",
          hook: "Perishable and heavy near the city; animals far away.",
        },
        {
          title: "Rural settlement and survey patterns",
          simple: "Rural land is divided and settled in different patterns.",
          detail: "Settlements can be clustered, dispersed or linear. Survey systems: metes and bounds (natural features, original colonies), township and range (rectangular grid, the U.S. Midwest), long lots (narrow strips to a river, French settlement).",
        },
        {
          title: "Agribusiness and food production",
          simple: "Large corporations control many parts of the food chain.",
          detail: "Agribusiness integrates production, processing and distribution. Commodity chains link farms to consumers globally. Economies of scale and mechanization reduce the number of farmers. Bid-rent theory also applies to farmland near cities.",
        },
        {
          title: "Environmental effects of agriculture",
          simple: "Farming can degrade land and water.",
          detail: "Problems: soil erosion, desertification, deforestation (slash-and-burn), salinization from irrigation, pesticide and fertilizer runoff (eutrophication), and loss of biodiversity from monoculture. Sustainable practices include crop rotation, terracing, no-till farming and organic farming.",
        },
        {
          title: "Food access and changing diets",
          simple: "Access to healthy food varies, and diets change with development.",
          detail: "Food deserts are areas with limited access to affordable, nutritious food. GMOs, organic and local food movements, and fair trade reflect changing consumer values. Women play major roles in farming in many developing countries.",
        },
      ],
      terms: [
        ["Intensive agriculture", "Farming with high inputs of labor or capital per unit of land."],
        ["Green Revolution", "Spread of high-yield crops, fertilizers and irrigation in the mid-1900s."],
        ["Von Thünen model", "Model of agricultural land use in rings around a market."],
        ["Township and range", "Rectangular land survey system used in much of the U.S."],
        ["Agribusiness", "Large-scale commercial farming integrated with processing and distribution."],
        ["Desertification", "Degradation of dry land into desert, often from overgrazing."],
        ["Food desert", "Area with limited access to affordable, nutritious food."],
      ],
      mistakes: [
        "Putting ranching in the inner ring of the von Thünen model.",
        "Treating the Green Revolution as having only benefits.",
      ],
      questions: [
        { q: "In the von Thünen model, which activity is located closest to the market?", choices: ["Ranching", "Grain farming", "Market gardening and dairy", "Forestry"], answer: 2, explain: "Perishable products must be near the market." },
        { q: "The Green Revolution is most associated with", choices: ["domestication of animals", "high-yield seeds, fertilizers and irrigation", "slash-and-burn agriculture", "township and range surveys"], answer: 1, explain: "It spread high-yield varieties and chemical inputs in the mid-20th century." },
        { q: "Pastoral nomadism is an example of", choices: ["intensive commercial agriculture", "extensive subsistence agriculture", "plantation agriculture", "market gardening"], answer: 1, explain: "Herders move animals over large areas to meet their own needs." },
        { q: "Narrow strips of land extending back from a river, common in French-settled Louisiana, are called", choices: ["metes and bounds", "township and range", "long lots", "clustered settlements"], answer: 2, explain: "Long lots gave each farmer access to the river." },
      ],
      frq: {
        prompt: "The Green Revolution greatly increased crop yields in parts of Asia.\n(a) Identify two technologies of the Green Revolution.\n(b) Describe one positive effect of the Green Revolution.\n(c) Explain one negative environmental or social effect.",
        points: [
          "(a) High-yield seed varieties, chemical fertilizers, pesticides, irrigation or mechanization.",
          "(b) Higher food production reduced famine and supported population growth.",
          "(c) Environmental: water pollution, soil degradation, falling water tables. Social: wealthier farmers benefited more, widening inequality.",
        ],
      },
    },
    {
      title: "Cities and Urban Land-Use Patterns and Processes",
      weight: "12–17%",
      tldr: "Cities grow for economic and social reasons and form hierarchies. Urban models describe land use, and cities face challenges like sprawl, segregation, gentrification and sustainability.",
      concepts: [
        {
          title: "Origins and growth of cities",
          simple: "Cities grow where site and situation provide advantages like water, defense and trade.",
          detail: "Urbanization increases as countries industrialize. Megacities (10+ million) and metacities are growing fastest in developing countries. Suburbanization, boomburbs and edge cities reflect growth outward. World cities (New York, London, Tokyo) are global centers of finance and culture.",
        },
        {
          title: "Urban hierarchies",
          simple: "Cities form hierarchies based on size and the services they provide.",
          detail: "Rank-size rule: the nth largest city is 1/n the size of the largest. Primate city: the largest city is far bigger than the next (Paris in France). Central place theory (Christaller): hexagonal market areas; higher-order services have larger thresholds and ranges.",
        },
        {
          title: "Urban models",
          simple: "Models describe how land use is arranged in cities.",
          detail: "Burgess concentric zone: rings from the CBD. Hoyt sector: wedges along transportation lines. Harris-Ullman multiple nuclei: several centers. Galactic city: suburbs and edge cities around a highway ring. Latin American (Griffin-Ford), African and Southeast Asian models add regional differences, like squatter settlements on the edge.",
        },
        {
          title: "Bid-rent theory and density",
          simple: "Land costs most near the city center, so land use depends on who can pay.",
          detail: "Commercial uses outbid others near the CBD, then industry and residential. Density decreases away from the center. Zoning laws also shape land use.",
        },
        {
          title: "Urban infrastructure and housing",
          simple: "Cities provide transportation, utilities and housing, but access is unequal.",
          detail: "Redlining denied loans in minority neighborhoods, reinforcing segregation. Gentrification renovates poorer neighborhoods, raising costs and displacing residents. Squatter settlements house migrants in many developing cities. Public housing and inclusionary zoning address affordability.",
        },
        {
          title: "Urban sustainability",
          simple: "Planners try to reduce sprawl and make cities more livable and sustainable.",
          detail: "Urban sprawl consumes farmland and increases car dependence. Smart growth, new urbanism (walkable, mixed-use neighborhoods), greenbelts, mass transit and mixed-use zoning are responses. Brownfields are abandoned industrial sites that can be redeveloped.",
        },
        {
          title: "Urban data and challenges",
          simple: "Census and survey data reveal patterns of inequality and change in cities.",
          detail: "Data on income, race, housing and commuting show segregation, suburbanization and change over time. Challenges include traffic, pollution, crime, and aging infrastructure.",
        },
      ],
      terms: [
        ["Primate city", "A country's largest city, far bigger than the next largest."],
        ["Central place theory", "Theory explaining the size and spacing of settlements providing services."],
        ["Threshold", "The minimum population needed to support a service."],
        ["Bid-rent theory", "Land value and rent decrease with distance from the CBD."],
        ["Gentrification", "Renovation of neighborhoods that raises costs and displaces residents."],
        ["Redlining", "Denying loans in certain neighborhoods based on race."],
        ["New urbanism", "Planning for walkable, mixed-use neighborhoods."],
      ],
      mistakes: [
        "Mixing up the concentric zone model (rings) and the sector model (wedges).",
        "Confusing threshold (minimum population) with range (maximum distance people travel).",
      ],
      questions: [
        { q: "Paris is many times larger than any other French city. Paris is a", choices: ["world city only", "primate city", "edge city", "boomburb"], answer: 1, explain: "A primate city is disproportionately larger than the country's next largest city." },
        { q: "Which urban model shows wedges of land use along transportation routes?", choices: ["Concentric zone model", "Sector model", "Multiple nuclei model", "Galactic city model"], answer: 1, explain: "Hoyt's sector model places zones in wedges along transportation corridors." },
        { q: "According to bid-rent theory, which land use is most likely closest to the CBD?", choices: ["Single-family homes", "Farms", "Commercial offices and retail", "Parks"], answer: 2, explain: "Commercial uses can pay the highest rents for central, accessible land." },
        { q: "Wealthier residents moving into and renovating a low-income neighborhood, raising rents, is", choices: ["redlining", "gentrification", "suburbanization", "blockbusting"], answer: 1, explain: "Gentrification can displace longtime lower-income residents." },
      ],
      frq: {
        prompt: "Many U.S. metropolitan areas have experienced urban sprawl.\n(a) Define urban sprawl.\n(b) Describe one environmental effect of sprawl.\n(c) Explain one planning approach that reduces sprawl.",
        points: [
          "(a) Low-density, car-dependent development spreading outward from a city.",
          "(b) Loss of farmland and habitat, or more air pollution from longer commutes.",
          "(c) Smart growth or new urbanism (denser, mixed-use, walkable development), greenbelts, or investment in public transit.",
        ],
      },
    },
    {
      title: "Industrial and Economic Development Patterns and Processes",
      weight: "12–17%",
      tldr: "Industrialization changed where and how goods are made. Development is measured with indicators like GDP per capita and HDI. Theories explain uneven development, and globalization shifts industry around the world.",
      concepts: [
        {
          title: "The Industrial Revolution and its diffusion",
          simple: "Industrialization began in Britain and spread, reshaping economies and cities.",
          detail: "Starting in the late 1700s in Britain, industry spread to Europe, the U.S., Japan and beyond. It increased demand for raw materials, often obtained through colonialism, and drove urbanization.",
        },
        {
          title: "Economic sectors",
          simple: "Economies shift from farming to manufacturing to services as they develop.",
          detail: "Primary: extracting resources (farming, mining). Secondary: manufacturing. Tertiary: services. Quaternary: information and research. Quinary: top-level decision-making. Developed countries have most workers in the tertiary and higher sectors.",
        },
        {
          title: "Measures of development",
          simple: "Development is measured with economic and social indicators.",
          detail: "GDP and GNI per capita, the Human Development Index (income, education, life expectancy), the Gender Inequality Index, and the informal economy share. The Gini coefficient measures income inequality within countries.",
        },
        {
          title: "Theories of development",
          simple: "Different theories explain why some countries are richer than others.",
          detail: "Rostow's stages of growth: traditional society → preconditions for takeoff → takeoff → drive to maturity → high mass consumption (criticized for assuming one path). Wallerstein's world-systems theory: core, semi-periphery and periphery, with core countries benefiting from periphery resources. Dependency theory: colonial legacies keep poor countries dependent.",
          hook: "Rostow = a ladder every country climbs. Wallerstein = a system that keeps some on top.",
        },
        {
          title: "Industrial location and Weber's model",
          simple: "Factories locate to minimize transportation and labor costs.",
          detail: "Weber's least-cost theory: weight-losing (bulk-reducing) industries locate near raw materials; weight-gaining (bulk-gaining) industries locate near markets. Labor costs and agglomeration (clustering of related firms) also matter.",
        },
        {
          title: "Globalization and the changing location of industry",
          simple: "Manufacturing has shifted to lower-cost countries, changing economies worldwide.",
          detail: "Outsourcing and offshoring move production abroad. Export processing zones and free trade zones (maquiladoras in Mexico) attract foreign investment. Deindustrialization hits former industrial regions. Post-Fordist, just-in-time production uses flexible global supply chains.",
        },
        {
          title: "Sustainable development",
          simple: "Development should improve lives without destroying resources for the future.",
          detail: "The UN Sustainable Development Goals address poverty, education, gender equality and climate. Microloans help entrepreneurs, especially women, start businesses. Ecotourism can bring income while protecting environments.",
        },
      ],
      terms: [
        ["Tertiary sector", "The service sector of the economy."],
        ["Human Development Index", "A measure combining income, education and life expectancy."],
        ["World-systems theory", "Wallerstein's model of core, semi-periphery and periphery countries."],
        ["Least-cost theory", "Weber's theory that industries locate to minimize costs."],
        ["Agglomeration", "Clustering of related businesses to share resources and markets."],
        ["Maquiladora", "Foreign-owned factory in Mexico that assembles goods for export."],
        ["Microloan", "A small loan to help people in poverty start businesses."],
      ],
      mistakes: [
        "Placing a weight-gaining industry near raw materials instead of markets.",
        "Presenting Rostow's model as fitting every country without its criticisms.",
      ],
      questions: [
        { q: "According to Weber's least-cost theory, a copper smelter (which greatly reduces the weight of ore) should locate", choices: ["near the market", "near the raw materials", "near cheap labor only", "anywhere, since location doesn't matter"], answer: 1, explain: "Weight-losing industries locate near raw materials to reduce transport costs." },
        { q: "Which measure combines income, education and life expectancy?", choices: ["GDP per capita", "Gini coefficient", "Human Development Index", "Gender Inequality Index"], answer: 2, explain: "HDI combines those three dimensions." },
        { q: "In Wallerstein's world-systems theory, countries that mainly export raw materials and have low wages are", choices: ["core", "semi-periphery", "periphery", "quaternary"], answer: 2, explain: "Periphery countries supply raw materials and cheap labor to the core." },
        { q: "Most workers in a highly developed country work in the", choices: ["primary sector", "secondary sector", "tertiary sector", "subsistence sector"], answer: 2, explain: "Services dominate employment in developed countries." },
      ],
      frq: {
        prompt: "Many U.S. manufacturing jobs have moved to other countries since the 1980s.\n(a) Identify one reason companies moved manufacturing abroad.\n(b) Describe one effect on former U.S. industrial regions.\n(c) Explain one effect on the countries that received the factories.",
        points: [
          "(a) Lower labor costs, fewer regulations, or free trade agreements.",
          "(b) Deindustrialization: job losses, population decline, and abandoned factories (brownfields) in the Rust Belt.",
          "(c) New jobs and investment, but also low wages, poor working conditions, or pollution.",
        ],
      },
    },
  ],
};
