window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["environmental-science"] = {
  tips: [
    "Calculators are allowed, but show every step of a calculation: the setup, the units and the answer. Use scientific notation for very large or small numbers.",
    "Free-response questions often ask you to \"propose a solution\" and \"describe a disadvantage.\" Be specific: name the law, technology or practice.",
    "For experimental design questions, identify the independent variable, dependent variable, control group and constants, and write a testable hypothesis.",
    "Know the 10% rule, doubling time (rule of 70), and percent change. Many points come from simple math done carefully.",
    "Connect causes to effects in chains: fertilizer runoff → algal bloom → decomposition → oxygen depletion → fish die-off.",
  ],
  units: [
    {
      title: "The Living World: Ecosystems",
      weight: "6–8%",
      tldr: "Ecosystems are communities interacting with their physical environment. Energy flows through food webs and is lost at each level, while matter cycles through biogeochemical cycles like carbon, nitrogen, phosphorus and water.",
      concepts: [
        {
          title: "Ecosystems and biomes",
          simple: "Biomes are large regions defined by climate, which determines the plants and animals that live there.",
          detail: "Temperature and precipitation determine biomes (tundra, taiga, temperate forest, grassland, desert, tropical rainforest, savanna). Aquatic biomes depend on salinity, depth and flow (freshwater, estuaries, coral reefs, open ocean).",
        },
        {
          title: "Species interactions",
          simple: "Species interact through competition, predation and symbiosis.",
          detail: "Competition leads to resource partitioning. Predation, herbivory and parasitism help one species and harm another. Mutualism helps both; commensalism helps one and doesn't affect the other.",
        },
        {
          title: "Energy flow and the 10% rule",
          simple: "Only about 10% of energy passes from one trophic level to the next.",
          detail: "Producers capture solar energy (primary productivity). Gross primary productivity minus respiration = net primary productivity. About 90% of energy is lost as heat at each level, which limits food chain length and explains why eating lower on the food chain feeds more people.",
          example: "10,000 kcal of producers → about 1,000 kcal for herbivores → about 100 kcal for carnivores.",
        },
        {
          title: "Food chains and food webs",
          simple: "Food webs show many feeding relationships and how energy moves through an ecosystem.",
          detail: "Trophic levels: producers, primary consumers, secondary consumers, tertiary consumers, decomposers. Food webs show how removing one species affects others. Keystone species have outsized effects.",
        },
        {
          title: "The carbon cycle",
          simple: "Carbon moves among the air, living things, oceans and rocks.",
          detail: "Photosynthesis removes CO₂; respiration, decomposition and combustion release it. Sinks (reservoirs) include oceans, sediments, fossil fuels and forests. Burning fossil fuels moves carbon from long-term storage to the atmosphere quickly.",
        },
        {
          title: "The nitrogen and phosphorus cycles",
          simple: "Nitrogen and phosphorus are key nutrients that cycle in different ways.",
          detail: "Nitrogen: fixation by bacteria (N₂ → NH₃), nitrification, assimilation, ammonification, denitrification. Phosphorus has no significant gas phase; it cycles slowly through rocks, soil and water, so it's often a limiting nutrient. Excess of either causes eutrophication.",
        },
        {
          title: "The hydrologic cycle",
          simple: "Water moves through evaporation, transpiration, precipitation, runoff and infiltration.",
          detail: "Solar energy drives evaporation; transpiration from plants adds water vapor. Water infiltrates to recharge aquifers or runs off into surface water. Most freshwater is locked in ice caps and groundwater.",
        },
      ],
      terms: [
        ["Biome", "A large region with similar climate, plants and animals."],
        ["Mutualism", "A relationship that benefits both species."],
        ["Net primary productivity", "Energy captured by producers minus energy they use in respiration."],
        ["10% rule", "About 10% of energy passes to the next trophic level."],
        ["Carbon sink", "A reservoir that stores carbon, like oceans or forests."],
        ["Nitrogen fixation", "Conversion of atmospheric N₂ into usable ammonia by bacteria."],
        ["Limiting nutrient", "The nutrient in shortest supply that limits growth, often phosphorus."],
      ],
      mistakes: [
        "Saying energy cycles; energy flows, and matter cycles.",
        "Forgetting that phosphorus has no significant atmospheric component.",
      ],
      questions: [
        { q: "If producers in an ecosystem contain 20,000 kcal of energy, about how much energy is available to secondary consumers?", choices: ["2,000 kcal", "200 kcal", "20 kcal", "18,000 kcal"], answer: 1, explain: "20,000 → 2,000 (primary consumers) → 200 (secondary consumers)." },
        { q: "Which process converts atmospheric nitrogen into a form plants can use?", choices: ["Denitrification", "Nitrogen fixation", "Transpiration", "Respiration"], answer: 1, explain: "Nitrogen-fixing bacteria convert N₂ into ammonia." },
        { q: "Why is phosphorus often a limiting nutrient in ecosystems?", choices: ["It is abundant in the atmosphere", "It cycles slowly and has no significant gas phase", "Plants don't need it", "It is produced by photosynthesis"], answer: 1, explain: "Phosphorus cycles slowly through rock weathering, so it's often in short supply." },
        { q: "A bird eats insects off a rhinoceros's skin, and the rhino benefits from pest removal. This relationship is", choices: ["commensalism", "mutualism", "parasitism", "competition"], answer: 1, explain: "Both species benefit." },
      ],
      frq: {
        prompt: "A lake ecosystem has producers that capture 50,000 kcal of energy.\n(a) Calculate the energy available to tertiary consumers, showing your work.\n(b) Explain why there are fewer tertiary consumers than primary consumers.\n(c) Describe one way humans disrupt the carbon cycle.",
        points: [
          "(a) 50,000 → 5,000 → 500 → 50 kcal.",
          "(b) About 90% of energy is lost as heat at each level, so less energy supports fewer organisms higher up.",
          "(c) Burning fossil fuels or deforestation releases stored carbon into the atmosphere.",
        ],
      },
    },
    {
      title: "The Living World: Biodiversity",
      weight: "6–8%",
      tldr: "Biodiversity includes genetic, species and ecosystem diversity. It provides ecosystem services and resilience. Island biogeography, ecological tolerance and succession explain how communities form and recover.",
      concepts: [
        {
          title: "Levels of biodiversity",
          simple: "Biodiversity includes genetic, species and ecosystem diversity.",
          detail: "Genetic diversity helps populations adapt to change. Species richness is the number of species; evenness is how evenly individuals are spread among them. Higher biodiversity makes ecosystems more resilient to disturbance.",
        },
        {
          title: "Ecosystem services",
          simple: "Nature provides services that people depend on and that have economic value.",
          detail: "Provisioning (food, timber, water), regulating (climate, flood control, pollination), supporting (nutrient cycling, soil formation), cultural (recreation, spiritual value). Human disruption of these services has real economic costs.",
        },
        {
          title: "Island biogeography",
          simple: "Larger islands closer to the mainland have more species.",
          detail: "Species richness depends on immigration and extinction rates: larger islands have lower extinction rates (more habitat), and closer islands have higher immigration rates. The idea applies to habitat \"islands\" like fragmented forests or parks.",
        },
        {
          title: "Ecological tolerance",
          simple: "Each species survives only within a range of conditions.",
          detail: "Organisms have an optimal range, zones of physiological stress, and zones of intolerance for factors like temperature, pH and salinity. Species with narrow tolerances are more vulnerable to environmental change.",
        },
        {
          title: "Natural disruptions",
          simple: "Natural events like fires, floods and climate cycles disrupt ecosystems.",
          detail: "Disruptions can be periodic, episodic or random. Some ecosystems depend on disturbance (fire-adapted pine forests). Organisms may migrate or adapt; those that can't may decline.",
        },
        {
          title: "Adaptations and evolution",
          simple: "Populations adapt to environmental change through natural selection.",
          detail: "Organisms with traits suited to changed conditions survive and reproduce more. Faster-reproducing species adapt more quickly. Rapid human-caused changes can outpace adaptation.",
        },
        {
          title: "Ecological succession",
          simple: "Communities change in predictable stages after disturbance.",
          detail: "Primary succession starts on bare rock with pioneer species (lichens, mosses) that build soil. Secondary succession follows a disturbance that leaves soil (fire, abandoned farm), progressing faster. Communities move toward a mature (climax) community.",
        },
      ],
      terms: [
        ["Species richness", "The number of different species in an area."],
        ["Species evenness", "How evenly individuals are distributed among species."],
        ["Ecosystem services", "Benefits people get from ecosystems."],
        ["Island biogeography", "Theory linking island size and distance to species richness."],
        ["Range of tolerance", "The range of conditions a species can survive in."],
        ["Pioneer species", "The first organisms to colonize a disturbed or bare area."],
        ["Secondary succession", "Community recovery on existing soil after a disturbance."],
      ],
      mistakes: [
        "Confusing primary succession (no soil) with secondary succession (soil present).",
        "Treating species richness and evenness as the same measure.",
      ],
      questions: [
        { q: "According to island biogeography, which island would have the most species?", choices: ["A small island far from the mainland", "A large island close to the mainland", "A small island close to the mainland", "A large island far from the mainland"], answer: 1, explain: "Large size lowers extinction; closeness raises immigration." },
        { q: "Bees pollinating crops is an example of which type of ecosystem service?", choices: ["Provisioning", "Regulating", "Cultural", "None; pollination has no economic value"], answer: 1, explain: "Pollination regulates ecosystem processes (and supports food production)." },
        { q: "After a forest fire leaves the soil intact, the community that develops shows", choices: ["primary succession", "secondary succession", "island biogeography", "eutrophication"], answer: 1, explain: "Soil is already present, so this is secondary succession." },
        { q: "Why are populations with high genetic diversity more likely to survive environmental change?", choices: ["They reproduce more slowly", "Some individuals may have traits suited to new conditions", "They have fewer predators", "They are always larger in number"], answer: 1, explain: "Variation provides the raw material for natural selection." },
      ],
      frq: {
        prompt: "A forest is divided into small patches by a new highway.\n(a) Explain how habitat fragmentation relates to island biogeography.\n(b) Describe one effect on species richness.\n(c) Propose one solution to reduce the impact.",
        points: [
          "(a) Fragments act like small, isolated islands: smaller area means higher extinction and isolation means lower immigration.",
          "(b) Species richness declines, especially for species needing large territories.",
          "(c) Build wildlife corridors or overpasses connecting fragments.",
        ],
      },
    },
    {
      title: "Populations",
      weight: "10–15%",
      tldr: "Populations grow exponentially until limited by carrying capacity. Species differ in reproductive strategy (r vs. K). Human population growth depends on birth, death and fertility rates, which change as countries develop.",
      concepts: [
        {
          title: "Generalist and specialist species",
          simple: "Generalists survive in many conditions; specialists need narrow conditions.",
          detail: "Generalists (raccoons, cockroaches) tolerate wide ranges and adapt well to change. Specialists (pandas, koalas) depend on specific food or habitat, making them more vulnerable to extinction.",
        },
        {
          title: "r- and K-selected species",
          simple: "Some species have many offspring with little care; others have few with lots of care.",
          detail: "r-selected: many offspring, little parental care, short lifespan, early maturity (insects, mice); often invasive. K-selected: few offspring, much care, long lifespan (elephants, whales); populations stay near carrying capacity and recover slowly.",
        },
        {
          title: "Survivorship curves",
          simple: "Survivorship curves show when in life most individuals die.",
          detail: "Type I: most survive to old age (humans, K-selected). Type II: constant death rate (many birds). Type III: most die young (fish, r-selected).",
        },
        {
          title: "Carrying capacity and population growth",
          simple: "Populations grow until resources limit them at the carrying capacity.",
          detail: "Exponential growth (J-curve) occurs with unlimited resources. Logistic growth (S-curve) levels off at carrying capacity (K). Overshoot above K often causes a die-off. Density-dependent factors (food, disease) and density-independent factors (natural disasters) regulate populations.",
        },
        {
          title: "Human population growth and demographics",
          simple: "Human population changes through births, deaths and migration.",
          detail: "Growth rate = (birth rate − death rate)/10 when rates are per 1,000. Rule of 70: doubling time ≈ 70 ÷ growth rate (%). Total fertility rate (TFR) near 2.1 is replacement level. Age structure diagrams predict future growth.",
          example: "A growth rate of 2% doubles in about 35 years.",
        },
        {
          title: "Demographic transition",
          simple: "As countries industrialize, death rates fall first, then birth rates.",
          detail: "Pre-industrial: high birth and death rates. Transitional: death rates drop, and population grows rapidly. Industrial: birth rates drop. Post-industrial: low rates, stable or declining population. Education and opportunities for women lower TFR.",
        },
      ],
      terms: [
        ["Carrying capacity", "The maximum population an environment can support."],
        ["r-selected species", "Species with many offspring and little parental care."],
        ["K-selected species", "Species with few offspring and extensive parental care."],
        ["Logistic growth", "Growth that slows and levels off at carrying capacity."],
        ["Rule of 70", "Doubling time ≈ 70 ÷ percent growth rate."],
        ["Replacement-level fertility", "A total fertility rate of about 2.1."],
        ["Density-dependent factor", "A limit on population whose effect grows with population density."],
      ],
      mistakes: [
        "Mixing up r-selected (many offspring) and K-selected (few offspring).",
        "Using 72 or 100 instead of 70 for doubling time on the exam.",
      ],
      questions: [
        { q: "A population grows 3.5% per year. About how long does it take to double?", choices: ["10 years", "20 years", "35 years", "70 years"], answer: 1, explain: "70 ÷ 3.5 = 20 years." },
        { q: "Which species is most likely K-selected?", choices: ["Housefly", "Mouse", "Elephant", "Dandelion"], answer: 2, explain: "Elephants have few offspring, long lives and extensive care." },
        { q: "A population that exceeds carrying capacity will most likely", choices: ["keep growing exponentially", "experience a die-off", "become r-selected", "stop reproducing entirely"], answer: 1, explain: "Overshoot depletes resources, leading to a population crash." },
        { q: "Which survivorship curve fits a fish species that releases thousands of eggs, most of which die quickly?", choices: ["Type I", "Type II", "Type III", "Logistic"], answer: 2, explain: "Type III: high mortality early in life." },
      ],
      frq: {
        prompt: "Country Y has a birth rate of 30 per 1,000 and a death rate of 10 per 1,000.\n(a) Calculate the population growth rate as a percent (ignoring migration).\n(b) Calculate the doubling time.\n(c) Describe one factor that would likely lower Country Y's birth rate over time.",
        points: [
          "(a) (30 − 10) ÷ 10 = 2% per year.",
          "(b) 70 ÷ 2 = 35 years.",
          "(c) More education and job opportunities for women, access to family planning, or urbanization.",
        ],
      },
    },
    {
      title: "Earth Systems and Resources",
      weight: "10–15%",
      tldr: "Plate tectonics shapes Earth's surface and hazards. Soil forms slowly and supports agriculture. The atmosphere's structure, global wind patterns, the water cycle and climate patterns like El Niño influence resources everywhere.",
      concepts: [
        {
          title: "Plate tectonics",
          simple: "Earth's plates move, causing earthquakes, volcanoes and mountains.",
          detail: "Divergent boundaries (plates pull apart: mid-ocean ridges), convergent boundaries (collision: subduction zones, volcanoes, mountains), transform boundaries (slide past: earthquakes, like the San Andreas Fault). The Ring of Fire around the Pacific has many volcanoes and earthquakes.",
        },
        {
          title: "Soil formation and properties",
          simple: "Soil forms slowly from weathered rock and organic matter.",
          detail: "Soil horizons: O (organic), A (topsoil), B (subsoil), C (weathered parent material). Texture depends on the mix of sand, silt and clay (use the soil texture triangle). Sand drains fast; clay holds water. Loam is best for most crops.",
        },
        {
          title: "Soil erosion and conservation",
          simple: "Farming and deforestation can erode soil faster than it forms.",
          detail: "Erosion by wind and water removes topsoil. Conservation methods: contour plowing, terracing, windbreaks, no-till farming, cover crops and crop rotation.",
        },
        {
          title: "Earth's atmosphere",
          simple: "The atmosphere has layers with different temperatures and roles.",
          detail: "Composition: about 78% N₂, 21% O₂, plus argon, CO₂ and water vapor. Layers: troposphere (weather), stratosphere (ozone layer absorbs UV), mesosphere, thermosphere. Temperature decreases with altitude in the troposphere.",
        },
        {
          title: "Global wind patterns and solar radiation",
          simple: "Uneven heating of Earth drives winds and climate zones.",
          detail: "Sunlight is most intense at the equator. Warm air rises at the equator and sinks around 30° latitude, forming Hadley cells, deserts at 30°, and rainforests at the equator. The Coriolis effect deflects winds. Earth's tilt causes seasons.",
        },
        {
          title: "Watersheds",
          simple: "A watershed is all the land that drains into a particular body of water.",
          detail: "Land use in a watershed (farming, development) affects the water quality downstream. Vegetation reduces runoff and erosion. Healthy watersheds filter water naturally.",
        },
        {
          title: "El Niño and La Niña",
          simple: "Changes in Pacific Ocean temperatures shift weather patterns worldwide.",
          detail: "El Niño: weaker trade winds, warm water in the eastern Pacific, reduced upwelling off South America (hurting fisheries), and wetter conditions in parts of the Americas. La Niña: stronger trade winds and cooler eastern Pacific water. Both are part of the El Niño–Southern Oscillation (ENSO).",
        },
      ],
      terms: [
        ["Subduction", "One plate sinking beneath another at a convergent boundary."],
        ["Soil horizon", "A distinct layer of soil."],
        ["Loam", "Soil with a balanced mix of sand, silt and clay."],
        ["Troposphere", "The lowest atmospheric layer, where weather occurs."],
        ["Stratospheric ozone", "Ozone in the stratosphere that absorbs harmful UV radiation."],
        ["Watershed", "Land area that drains into a particular body of water."],
        ["Upwelling", "Rising of cold, nutrient-rich water to the ocean surface."],
      ],
      mistakes: [
        "Confusing stratospheric ozone (good, blocks UV) with tropospheric ozone (a harmful pollutant).",
        "Saying El Niño strengthens upwelling off South America (it weakens it).",
      ],
      questions: [
        { q: "At which type of plate boundary do plates slide past each other, causing earthquakes?", choices: ["Divergent", "Convergent", "Transform", "Subduction"], answer: 2, explain: "Transform boundaries, like the San Andreas Fault, slide horizontally." },
        { q: "Which soil type drains water most quickly?", choices: ["Clay", "Silt", "Sand", "Loam"], answer: 2, explain: "Sand has the largest particles and largest pore spaces." },
        { q: "The ozone layer that protects life from UV radiation is located in the", choices: ["troposphere", "stratosphere", "mesosphere", "thermosphere"], answer: 1, explain: "Stratospheric ozone absorbs UV radiation." },
        { q: "During an El Niño event, fisheries off the coast of Peru typically", choices: ["improve because of stronger upwelling", "decline because upwelling weakens", "are unaffected", "expand to colder waters permanently"], answer: 1, explain: "Warm water suppresses nutrient-rich upwelling, reducing fish populations." },
      ],
      frq: {
        prompt: "A farmer notices topsoil loss on a sloped field.\n(a) Describe one cause of soil erosion on the field.\n(b) Propose one method to reduce erosion.\n(c) Explain why topsoil loss reduces crop yields.",
        points: [
          "(a) Water runoff on bare soil, plowing up and down the slope, or removing vegetation.",
          "(b) Contour plowing, terracing, cover crops, windbreaks or no-till farming.",
          "(c) Topsoil holds most nutrients and organic matter; losing it lowers fertility and water retention.",
        ],
      },
    },
    {
      title: "Land and Water Use",
      weight: "10–15%",
      tldr: "People use land and water for agriculture, forestry, mining, cities and fishing. Each use has environmental impacts, and sustainable practices can reduce them. The tragedy of the commons explains overuse of shared resources.",
      concepts: [
        {
          title: "The tragedy of the commons",
          simple: "Shared resources get overused when each person acts in their own interest.",
          detail: "Examples: overfishing, overgrazing, groundwater depletion, air pollution. Solutions include regulations, quotas, permits and private or community ownership.",
        },
        {
          title: "Clear-cutting and forestry",
          simple: "Cutting down whole forests increases erosion and loses habitat.",
          detail: "Clear-cutting is cheap but increases erosion, raises stream temperatures, and releases carbon. Alternatives: selective cutting, sustainable forestry, reforestation, and prescribed burns to reduce wildfire fuel.",
        },
        {
          title: "Agricultural practices",
          simple: "Industrial agriculture boosts yields but causes environmental problems.",
          detail: "The Green Revolution brought mechanization, high-yield seeds, fertilizers and irrigation. Monocultures reduce biodiversity and invite pests. Synthetic fertilizers cause runoff and eutrophication; tilling increases erosion. Slash-and-burn farming causes deforestation.",
        },
        {
          title: "Irrigation and water use",
          simple: "Agriculture uses most of the world's freshwater, and some methods waste a lot.",
          detail: "Furrow and flood irrigation lose water to evaporation and runoff; drip irrigation is most efficient. Overirrigation causes waterlogging and salinization. Pumping groundwater faster than it recharges depletes aquifers and causes land subsidence.",
        },
        {
          title: "Pest control and meat production",
          simple: "Pesticides and industrial meat production have environmental trade-offs.",
          detail: "Pests evolve resistance to pesticides (the pesticide treadmill). Integrated pest management combines biological, physical and limited chemical controls. CAFOs (concentrated animal feeding operations) produce cheap meat but create waste runoff, antibiotic resistance and high resource use.",
        },
        {
          title: "Mining and urban land use",
          simple: "Mining and urban development disturb land and water.",
          detail: "Surface mining removes overburden, destroying habitat; acid mine drainage pollutes water. Urban sprawl increases impervious surfaces, runoff and flooding, and the urban heat island effect. Reclamation and smart growth reduce impacts.",
        },
        {
          title: "Fishing and sustainable practices",
          simple: "Overfishing depletes fish populations, and sustainable practices help them recover.",
          detail: "Trawling and bycatch damage ecosystems. Fishery collapse happens when fish are removed faster than they reproduce. Solutions: catch quotas, marine protected areas, and sustainable aquaculture (which has its own pollution and disease issues).",
        },
      ],
      terms: [
        ["Tragedy of the commons", "Overuse of shared resources by individuals acting in self-interest."],
        ["Clear-cutting", "Removing all trees from an area at once."],
        ["Monoculture", "Growing a single crop over a large area."],
        ["Salinization", "Buildup of salts in soil from irrigation."],
        ["Drip irrigation", "Delivering water directly to plant roots; the most efficient method."],
        ["Integrated pest management", "Combining biological, physical and limited chemical pest control."],
        ["Bycatch", "Non-target species caught while fishing."],
      ],
      mistakes: [
        "Naming flood irrigation as efficient (drip irrigation is the most efficient).",
        "Forgetting that pesticide use can lead to resistant pests.",
      ],
      questions: [
        { q: "Overfishing in international waters, where no one owns the fish, best illustrates", choices: ["the tragedy of the commons", "biomagnification", "ecological succession", "the 10% rule"], answer: 0, explain: "Each fleet takes as much as it can from a shared resource, depleting it." },
        { q: "Which irrigation method uses water most efficiently?", choices: ["Flood irrigation", "Furrow irrigation", "Drip irrigation", "Spray irrigation"], answer: 2, explain: "Drip irrigation delivers water to roots with minimal evaporation and runoff." },
        { q: "Repeated irrigation in a dry climate can leave salt deposits in the soil. This is", choices: ["desertification", "salinization", "eutrophication", "subsidence"], answer: 1, explain: "Evaporating irrigation water leaves salts behind." },
        { q: "Which is a component of integrated pest management?", choices: ["Spraying broad-spectrum pesticides weekly", "Introducing natural predators of the pest", "Planting a monoculture", "Using more fertilizer"], answer: 1, explain: "IPM uses biological controls like predators, reducing chemical use." },
      ],
      frq: {
        prompt: "An aquifer used for farm irrigation is being depleted.\n(a) Explain why the aquifer is being depleted.\n(b) Describe one environmental consequence of aquifer depletion.\n(c) Propose one solution and describe a drawback of it.",
        points: [
          "(a) Water is pumped out faster than precipitation can recharge the aquifer.",
          "(b) Land subsidence, saltwater intrusion near coasts, or dry wells and streams.",
          "(c) Switch to drip irrigation (drawback: high upfront cost) or grow less water-intensive crops (drawback: lower income for farmers).",
        ],
      },
    },
    {
      title: "Energy Resources and Consumption",
      weight: "10–15%",
      tldr: "Most energy comes from nonrenewable fossil fuels, which release carbon dioxide and other pollutants. Nuclear and renewable sources like solar, wind, hydroelectric and geothermal have different benefits and drawbacks. Conservation reduces demand.",
      concepts: [
        {
          title: "Nonrenewable vs. renewable energy",
          simple: "Nonrenewable sources are finite; renewable sources replenish naturally.",
          detail: "Nonrenewable: coal, oil, natural gas, nuclear (uranium). Renewable: solar, wind, hydroelectric, geothermal, biomass (if harvested sustainably). Global energy use is still dominated by fossil fuels, with use growing fastest in developing countries.",
        },
        {
          title: "Fossil fuels",
          simple: "Coal, oil and natural gas formed from ancient organisms and release CO₂ when burned.",
          detail: "Coal: abundant, cheap, highest CO₂ and pollution (SO₂, mercury, particulates). Natural gas: cleaner burning but leaks methane; fracking can contaminate groundwater. Oil: used mainly for transportation; spills harm ecosystems. Combustion converts chemical energy to heat to steam to turbine to electricity.",
        },
        {
          title: "Nuclear power",
          simple: "Nuclear fission produces lots of energy without CO₂, but creates radioactive waste.",
          detail: "Uranium-235 fission heats water to spin turbines. Advantages: no CO₂ during operation, high energy output. Disadvantages: radioactive waste with long half-lives, thermal pollution, accident risk (Chernobyl, Fukushima), and mining impacts.",
        },
        {
          title: "Solar and wind energy",
          simple: "Solar and wind produce electricity without emissions but depend on weather.",
          detail: "Photovoltaic cells convert sunlight directly to electricity; passive solar design heats buildings. Wind turbines convert kinetic energy of wind. Both are intermittent and need storage; wind can harm birds and bats; manufacturing panels uses mined metals.",
        },
        {
          title: "Hydroelectric, geothermal and biomass",
          simple: "Water, Earth's heat and plant material can also generate energy.",
          detail: "Hydroelectric dams produce reliable power but flood habitats, block fish migration, and trap sediment. Geothermal uses underground heat; it's limited to certain locations. Biomass (wood, ethanol) is renewable if replanted but releases CO₂ and particulates, and crops for fuel compete with food.",
        },
        {
          title: "Energy conservation and efficiency",
          simple: "Using less energy is often the cheapest and cleanest option.",
          detail: "Efficiency measures: LED lighting, insulation, hybrid and electric vehicles, energy-efficient appliances, and fuel economy standards. Behavior changes (carpooling, thermostat settings) also reduce use. Energy efficiency = useful output ÷ total input.",
        },
      ],
      terms: [
        ["Nonrenewable resource", "A resource that forms far more slowly than it's used."],
        ["Fracking", "Injecting pressurized fluid to release natural gas from shale."],
        ["Nuclear fission", "Splitting atomic nuclei to release energy."],
        ["Half-life", "Time for half of a radioactive substance to decay."],
        ["Photovoltaic cell", "A solar cell that converts sunlight directly to electricity."],
        ["Intermittency", "The variability of energy sources like solar and wind."],
        ["Energy efficiency", "Useful energy output divided by total energy input."],
      ],
      mistakes: [
        "Saying nuclear power emits CO₂ during operation.",
        "Calling biomass carbon-free without mentioning combustion emissions.",
      ],
      questions: [
        { q: "Which energy source produces the most carbon dioxide per unit of energy?", choices: ["Natural gas", "Coal", "Nuclear", "Wind"], answer: 1, explain: "Coal has the highest carbon content and CO₂ emissions per unit of energy." },
        { q: "A major disadvantage of nuclear power is", choices: ["high CO₂ emissions", "radioactive waste that stays dangerous for thousands of years", "dependence on sunlight", "low energy output"], answer: 1, explain: "Long-lived radioactive waste requires secure long-term storage." },
        { q: "A main drawback of hydroelectric dams is that they", choices: ["emit large amounts of CO₂ when running", "block fish migration and flood habitats", "only work at night", "require uranium"], answer: 1, explain: "Dams alter rivers, block migration and flood land upstream." },
        { q: "A power plant converts 10,000 J of fuel energy into 3,500 J of electricity. What is its efficiency?", choices: ["3.5%", "35%", "65%", "285%"], answer: 1, explain: "3,500 ÷ 10,000 = 0.35 = 35%." },
      ],
      frq: {
        prompt: "A town is deciding between a new coal plant and a wind farm.\n(a) Describe one environmental advantage of the wind farm.\n(b) Describe one disadvantage of the wind farm.\n(c) Explain one reason the town might still choose the coal plant.",
        points: [
          "(a) No CO₂ or air pollutant emissions during operation.",
          "(b) Intermittency (needs storage or backup), bird and bat deaths, or visual and noise concerns.",
          "(c) Coal provides reliable, continuous power, may be cheaper with existing infrastructure, or supports local mining jobs.",
        ],
      },
    },
    {
      title: "Atmospheric Pollution",
      weight: "7–10%",
      tldr: "Burning fuels releases primary pollutants that form secondary pollutants like smog, acid rain and ground-level ozone. The Clean Air Act and technologies like scrubbers and catalytic converters reduce air pollution. Indoor air pollution is a major health risk worldwide.",
      concepts: [
        {
          title: "Primary and secondary pollutants",
          simple: "Primary pollutants are emitted directly; secondary pollutants form in the air.",
          detail: "Primary: CO, NOx, SO₂, particulate matter, VOCs. Secondary: ground-level ozone (from NOx + VOCs + sunlight), sulfuric and nitric acids (acid rain). The Clean Air Act sets standards for criteria pollutants.",
        },
        {
          title: "Photochemical smog",
          simple: "Sunlight turns car exhaust into a brown haze with harmful ozone.",
          detail: "NO₂ breaks down in sunlight, forming ozone with help from VOCs. Smog peaks on hot, sunny afternoons in cities with heavy traffic. It irritates lungs and damages plants.",
        },
        {
          title: "Thermal inversions",
          simple: "A layer of warm air traps cooler air and pollution near the ground.",
          detail: "Normally air cools with altitude, letting pollutants rise. In an inversion, a warm layer above cool air stops mixing, concentrating smog, especially in valleys (Los Angeles, Mexico City).",
        },
        {
          title: "Acid deposition",
          simple: "Sulfur and nitrogen oxides form acids that fall as acid rain.",
          detail: "SO₂ (mostly from coal) and NOx (from vehicles and power plants) react with water to form sulfuric and nitric acid. Effects: lower pH in lakes (killing fish), leaching of soil nutrients and toxic aluminum, damage to buildings. Limestone can buffer acidity.",
        },
        {
          title: "Indoor air pollution",
          simple: "Indoor air can be more polluted than outdoor air.",
          detail: "In developing countries, burning wood and dung for cooking causes deadly particulate and CO exposure. In developed countries: radon (from soil, a leading cause of lung cancer after smoking), asbestos, mold, VOCs from furniture and cleaners, and CO from faulty appliances.",
        },
        {
          title: "Reducing air pollution",
          simple: "Laws and technology cut emissions from vehicles and industry.",
          detail: "Catalytic converters reduce CO, NOx and hydrocarbons from cars. Scrubbers remove SO₂ from smokestacks; electrostatic precipitators and baghouse filters remove particulates. Cap-and-trade systems (like the U.S. SO₂ program) cut emissions efficiently.",
        },
      ],
      terms: [
        ["Primary pollutant", "A pollutant emitted directly from a source."],
        ["Secondary pollutant", "A pollutant formed by chemical reactions in the atmosphere."],
        ["Photochemical smog", "Air pollution formed when sunlight reacts with NOx and VOCs."],
        ["Thermal inversion", "A warm air layer that traps cooler, polluted air near the ground."],
        ["Acid deposition", "Acids from SO₂ and NOx falling in rain, snow or dry particles."],
        ["Radon", "A naturally occurring radioactive gas that seeps from soil into buildings."],
        ["Catalytic converter", "Device that reduces harmful emissions from vehicle exhaust."],
      ],
      mistakes: [
        "Calling ground-level ozone a primary pollutant (it forms in the air).",
        "Saying acid rain comes mainly from CO₂.",
      ],
      questions: [
        { q: "Which is a secondary pollutant?", choices: ["Carbon monoxide", "Sulfur dioxide", "Ground-level ozone", "Particulate matter"], answer: 2, explain: "Ozone forms from NOx and VOCs reacting in sunlight." },
        { q: "Acid rain is caused mainly by emissions of", choices: ["CO₂ and methane", "SO₂ and NOx", "CFCs", "radon"], answer: 1, explain: "Sulfur and nitrogen oxides form sulfuric and nitric acids." },
        { q: "A valley city's smog gets much worse when a layer of warm air sits above cooler air. This is", choices: ["the greenhouse effect", "a thermal inversion", "acid deposition", "El Niño"], answer: 1, explain: "The warm layer stops vertical mixing, trapping pollution." },
        { q: "Which device removes sulfur dioxide from power plant exhaust?", choices: ["Catalytic converter", "Scrubber", "Photovoltaic cell", "Baghouse only"], answer: 1, explain: "Scrubbers chemically remove SO₂ from smokestack gases." },
      ],
      frq: {
        prompt: "A city experiences frequent photochemical smog.\n(a) Identify two pollutants that react to form ground-level ozone.\n(b) Explain why smog is usually worst on sunny summer afternoons.\n(c) Propose one policy to reduce smog.",
        points: [
          "(a) Nitrogen oxides (NOx) and volatile organic compounds (VOCs).",
          "(b) Sunlight drives the reactions that form ozone, and heat speeds them; morning traffic builds up the ingredients.",
          "(c) Stricter vehicle emission standards, expanding public transit, or encouraging electric vehicles.",
        ],
      },
    },
    {
      title: "Aquatic and Terrestrial Pollution",
      weight: "7–10%",
      tldr: "Pollution from point and nonpoint sources harms water and land. Nutrient runoff causes eutrophication; persistent toxins biomagnify up food chains. Wastewater treatment, landfills and laws like the Clean Water Act reduce pollution.",
      concepts: [
        {
          title: "Point and nonpoint source pollution",
          simple: "Point sources come from one location; nonpoint sources come from many spread-out places.",
          detail: "Point: a factory pipe, sewage outfall, or smokestack (easier to regulate). Nonpoint: farm and urban runoff, which is harder to control. The Clean Water Act regulates point-source discharges.",
        },
        {
          title: "Eutrophication and hypoxia",
          simple: "Excess nutrients cause algae blooms that use up oxygen and kill fish.",
          detail: "Chain: fertilizer or sewage runoff (N and P) → algal bloom → algae die → decomposers use up dissolved oxygen → hypoxia → fish kills. Dead zones, like the one in the Gulf of Mexico, result.",
          hook: "Nutrients → bloom → decay → no oxygen → dead zone.",
        },
        {
          title: "Bioaccumulation and biomagnification",
          simple: "Some toxins build up in organisms and become more concentrated higher in the food chain.",
          detail: "Bioaccumulation: a toxin builds up in one organism over its lifetime. Biomagnification: concentrations increase at each trophic level. Persistent, fat-soluble toxins like mercury, DDT and PCBs affect top predators most (DDT thinned eagle eggshells).",
        },
        {
          title: "Toxic substances and dose-response",
          simple: "The amount of exposure determines how harmful a substance is.",
          detail: "LD50: the dose that kills 50% of test organisms. Dose-response curves show effects at increasing doses. Endocrine disruptors interfere with hormones even at low doses. Pollutants in water include lead, mercury, pharmaceuticals and microplastics.",
        },
        {
          title: "Solid waste and landfills",
          simple: "Most trash goes to landfills, which must be designed to prevent leaks.",
          detail: "Sanitary landfills have clay and plastic liners, leachate collection and methane capture. Incineration reduces volume but can release pollutants. Reduce, reuse and recycle (in that order of priority) cut waste. E-waste contains toxic metals.",
        },
        {
          title: "Wastewater treatment",
          simple: "Sewage treatment removes solids, organic matter and pathogens before water is released.",
          detail: "Primary treatment: physical settling of solids. Secondary: bacteria break down organic matter. Tertiary: removes nutrients and other chemicals. Disinfection (chlorine, UV) kills pathogens. Combined sewer overflows can release raw sewage during storms.",
        },
        {
          title: "Pathogens and human health",
          simple: "Contaminated water and poor sanitation spread infectious diseases.",
          detail: "Waterborne diseases (cholera, dysentery) spread through contaminated water. Vector-borne diseases (malaria) spread through insects and can expand with climate change. Access to clean water and sanitation dramatically reduces disease.",
        },
      ],
      terms: [
        ["Point source", "Pollution from a single, identifiable location."],
        ["Nonpoint source", "Pollution from many diffuse sources, like runoff."],
        ["Eutrophication", "Nutrient enrichment of water causing algal blooms and oxygen loss."],
        ["Biomagnification", "Increasing toxin concentration at higher trophic levels."],
        ["LD50", "The dose lethal to 50% of a test population."],
        ["Leachate", "Contaminated liquid that drains from a landfill."],
        ["Secondary treatment", "Wastewater treatment in which bacteria break down organic matter."],
      ],
      mistakes: [
        "Mixing up bioaccumulation (in one organism) and biomagnification (up the food chain).",
        "Calling farm runoff point-source pollution.",
      ],
      questions: [
        { q: "Fertilizer runoff from many farms entering a river is an example of", choices: ["point-source pollution", "nonpoint-source pollution", "thermal pollution", "bioaccumulation"], answer: 1, explain: "It comes from many diffuse sources across the landscape." },
        { q: "What is the direct cause of fish kills during eutrophication?", choices: ["Toxic nitrogen in the water", "Low dissolved oxygen from decomposing algae", "Higher water temperature from sunlight", "Increased salinity"], answer: 1, explain: "Decomposers consume oxygen as dead algae break down, causing hypoxia." },
        { q: "Mercury concentrations are highest in which organism in an aquatic food chain?", choices: ["Phytoplankton", "Zooplankton", "Small fish", "Tuna"], answer: 3, explain: "Biomagnification concentrates mercury in top predators." },
        { q: "In wastewater treatment, bacteria break down organic matter during", choices: ["primary treatment", "secondary treatment", "tertiary treatment only", "disinfection"], answer: 1, explain: "Secondary treatment uses biological processes to digest organic waste." },
      ],
      frq: {
        prompt: "A lake near farmland develops large algal blooms each summer, followed by fish kills.\n(a) Identify the process occurring.\n(b) Explain the sequence of events that leads to fish kills.\n(c) Propose one solution and explain how it would help.",
        points: [
          "(a) Eutrophication (cultural eutrophication).",
          "(b) Nitrogen and phosphorus runoff → algal bloom → algae die → decomposers use up dissolved oxygen → hypoxia kills fish.",
          "(c) Riparian buffer zones, reduced or timed fertilizer application, or wetland restoration to absorb nutrients before they reach the lake.",
        ],
      },
    },
    {
      title: "Global Change",
      weight: "15–20%",
      tldr: "Human activities are warming the planet through the enhanced greenhouse effect, depleting stratospheric ozone, acidifying oceans, and driving species loss. International agreements and local solutions aim to reduce these impacts.",
      concepts: [
        {
          title: "Stratospheric ozone depletion",
          simple: "CFCs destroyed part of the ozone layer, increasing harmful UV radiation.",
          detail: "Chlorine from CFCs breaks apart ozone molecules in the stratosphere, especially over Antarctica. More UV-B causes skin cancer, cataracts and crop damage. The Montreal Protocol (1987) phased out CFCs, and the ozone layer is slowly recovering.",
        },
        {
          title: "The greenhouse effect",
          simple: "Greenhouse gases trap heat, keeping Earth warm, and more of them warm it further.",
          detail: "Greenhouse gases (CO₂, methane, nitrous oxide, water vapor, CFCs) absorb infrared radiation from Earth's surface. Global warming potential compares gases to CO₂: methane traps about 25–30 times more heat per molecule over 100 years, nitrous oxide about 300 times.",
        },
        {
          title: "Climate change evidence and effects",
          simple: "Rising temperatures melt ice, raise sea levels and shift ecosystems.",
          detail: "Evidence: rising CO₂ (Keeling Curve), ice cores, warming temperatures. Effects: sea-level rise (thermal expansion and melting ice), more extreme weather, shifting species ranges, coral bleaching, and permafrost melting (a positive feedback releasing methane).",
        },
        {
          title: "Ocean warming and acidification",
          simple: "The ocean absorbs heat and CO₂, becoming warmer and more acidic.",
          detail: "CO₂ dissolves to form carbonic acid, lowering ocean pH. Acidification makes it harder for corals, shellfish and plankton to build calcium carbonate shells. Warming causes coral bleaching when corals expel their symbiotic algae.",
        },
        {
          title: "Invasive species",
          simple: "Non-native species can outcompete native species and disrupt ecosystems.",
          detail: "Invasive species (often r-selected generalists) spread quickly without natural predators. Examples: zebra mussels, kudzu, cane toads, Asian carp. Control: prevention, early detection, removal and biological control.",
        },
        {
          title: "Endangered species and biodiversity loss",
          simple: "Species are declining mainly because of human activities.",
          detail: "HIPPCO: Habitat loss, Invasive species, Population growth, Pollution, Climate change, Overexploitation. Habitat loss is the leading cause. Protections: the Endangered Species Act, CITES (limits trade in endangered species), and protected areas.",
          hook: "HIPPCO: the main causes of biodiversity loss.",
        },
        {
          title: "Reducing climate change",
          simple: "Cutting emissions and capturing carbon can slow climate change.",
          detail: "Strategies: renewable energy, efficiency, carbon taxes, cap-and-trade, reforestation, and carbon capture. International agreements: the Kyoto Protocol and the Paris Agreement. Adaptation (sea walls, drought-resistant crops) prepares for unavoidable effects.",
        },
      ],
      terms: [
        ["Montreal Protocol", "1987 treaty phasing out ozone-depleting chemicals."],
        ["Greenhouse effect", "Warming of Earth's surface from gases that absorb infrared radiation."],
        ["Global warming potential", "How much heat a gas traps compared with CO₂."],
        ["Ocean acidification", "Lowering of ocean pH as it absorbs CO₂."],
        ["Coral bleaching", "Corals expelling symbiotic algae because of stress such as heat."],
        ["Invasive species", "A non-native species that spreads and harms ecosystems."],
        ["HIPPCO", "Causes of biodiversity loss: habitat loss, invasive species, population, pollution, climate change, overexploitation."],
      ],
      mistakes: [
        "Confusing ozone depletion with global warming. They are separate problems with different causes.",
        "Saying the greenhouse effect is entirely bad; without it Earth would be too cold for life.",
      ],
      questions: [
        { q: "The Montreal Protocol was designed to reduce", choices: ["CO₂ emissions", "ozone-depleting chemicals like CFCs", "acid rain", "overfishing"], answer: 1, explain: "It phased out CFCs and other ozone-depleting substances." },
        { q: "Why does ocean acidification harm coral reefs?", choices: ["It makes water warmer", "It makes it harder to build calcium carbonate skeletons", "It increases oxygen levels", "It adds more nutrients"], answer: 1, explain: "Lower pH reduces available carbonate ions needed for shells and skeletons." },
        { q: "What is the leading cause of biodiversity loss worldwide?", choices: ["Invasive species", "Habitat loss", "Pollution", "Overhunting"], answer: 1, explain: "Habitat destruction and fragmentation are the biggest threats." },
        { q: "Melting permafrost releases methane, which causes more warming and more melting. This is an example of a", choices: ["negative feedback loop", "positive feedback loop", "carbon sink", "thermal inversion"], answer: 1, explain: "A positive feedback amplifies the original change." },
      ],
      frq: {
        prompt: "Atmospheric CO₂ has risen from about 280 ppm before industrialization to over 420 ppm today.\n(a) Calculate the percent increase in CO₂.\n(b) Describe one effect of rising CO₂ on the oceans.\n(c) Propose one policy to reduce CO₂ emissions and describe a drawback.",
        points: [
          "(a) (420 − 280) ÷ 280 × 100 = 50%.",
          "(b) Ocean acidification harms shell-building organisms and coral, or warming causes coral bleaching.",
          "(c) A carbon tax (drawback: raises energy costs for consumers) or cap-and-trade (drawback: complex to enforce).",
        ],
      },
    },
  ],
};
