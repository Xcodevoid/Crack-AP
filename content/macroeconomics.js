window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["macroeconomics"] = {
  tips: [
    "Graphs earn most free-response points. Label every axis and curve, show the shift with an arrow, and mark the new equilibrium.",
    "Trace chains of cause and effect step by step: \"The Fed buys bonds → money supply rises → interest rate falls → investment rises → AD shifts right → real GDP and price level rise.\"",
    "Know which graph each question needs: AD–AS for output and prices, the money market for the nominal interest rate, loanable funds for the real interest rate, and foreign exchange for currencies.",
    "Distinguish nominal from real everywhere: GDP, wages and interest rates.",
    "Short run and long run behave differently. In the long run the economy returns to full employment, and only the price level changes.",
  ],
  units: [
    {
      title: "Basic Economic Concepts",
      weight: "5–10%",
      tldr: "Scarcity forces choices with opportunity costs. The production possibilities curve shows trade-offs and growth, comparative advantage explains trade, and supply and demand set prices in individual markets.",
      concepts: [
        {
          title: "Scarcity and opportunity cost",
          simple: "Resources are limited, so every choice means giving up the next-best option.",
          detail: "Scarcity exists because wants are unlimited and resources (land, labor, capital, entrepreneurship) are limited. The opportunity cost of a choice is the value of the next-best alternative given up, not every alternative combined.",
          example: "Spending an evening studying costs you the shift you could have worked; that lost pay is the opportunity cost.",
        },
        {
          title: "The production possibilities curve",
          simple: "The PPC shows the maximum combinations of two goods an economy can make.",
          detail: "Points on the curve are efficient; inside, resources are unemployed or wasted; outside is unattainable now. A bowed-out curve shows increasing opportunity costs. Economic growth (more resources, better technology) shifts the curve outward. Recessions move the economy inside the curve.",
        },
        {
          title: "Comparative advantage and gains from trade",
          simple: "Countries gain by specializing in what they make at the lowest opportunity cost.",
          detail: "Absolute advantage means producing more with the same resources; comparative advantage means a lower opportunity cost. Both countries gain if they specialize by comparative advantage and trade at terms between their opportunity costs.",
          hook: "Comparative = cheapest in terms of what you give up.",
        },
        {
          title: "Demand, supply and market equilibrium",
          simple: "Prices adjust until the amount buyers want equals the amount sellers offer.",
          detail: "A change in price moves along a curve; changes in other factors shift it. Demand shifters: tastes, income, prices of related goods, number of buyers, expectations. Supply shifters: input costs, technology, taxes, number of sellers, expectations. Shortages push prices up; surpluses push them down.",
        },
        {
          title: "Economic systems",
          simple: "Societies answer what, how and for whom to produce through markets, command, or a mix.",
          detail: "Market economies rely on prices and private property; command economies rely on central planning; real economies are mixed. The circular flow model connects households and firms through product and factor markets, with government and foreign sectors added in macro.",
        },
        {
          title: "Macroeconomics vs. microeconomics",
          simple: "Macro studies the whole economy: total output, overall prices, unemployment and growth.",
          detail: "Macroeconomics looks at aggregates: GDP, the price level, unemployment, interest rates and exchange rates, plus government policies that influence them. Microeconomics studies individual markets, firms and consumers.",
        },
        {
          title: "Changes in supply and demand together",
          simple: "When both curves shift, one outcome is certain and the other depends on which shift is bigger.",
          detail: "If demand and supply both increase, quantity rises but price is indeterminate. If demand rises and supply falls, price rises but quantity is indeterminate. State which variable is ambiguous rather than guessing.",
        },
      ],
      terms: [
        ["Scarcity", "Limited resources relative to unlimited wants."],
        ["Opportunity cost", "The value of the next-best alternative given up."],
        ["Comparative advantage", "Producing a good at a lower opportunity cost than others."],
        ["Factors of production", "Land, labor, capital and entrepreneurship."],
        ["Circular flow model", "Diagram of money, goods and resources moving between sectors."],
        ["Indeterminate", "An outcome that can't be predicted without knowing the relative size of shifts."],
        ["Shortage", "Quantity demanded exceeds quantity supplied at the current price."],
      ],
      mistakes: [
        "Adding up all alternatives instead of using only the next-best one as the opportunity cost.",
        "Confusing absolute advantage with comparative advantage.",
      ],
      questions: [
        { q: "A country moves from a point inside its PPC to a point on the curve. This is most likely caused by", choices: ["a new technology", "a decrease in unemployment", "an increase in the labor force", "more capital goods"], answer: 1, explain: "Moving from inside to the curve means using idle resources, such as unemployed workers. The others shift the curve outward." },
        { q: "Country A can make 10 cars or 20 computers; Country B can make 6 cars or 18 computers. Who has the comparative advantage in cars?", choices: ["Country A", "Country B", "Neither", "Both"], answer: 0, explain: "Opportunity cost of 1 car: A gives up 2 computers, B gives up 3. A's cost is lower." },
        { q: "Demand for a good increases while supply decreases. What happens in the market?", choices: ["Price rises; quantity is indeterminate", "Price falls; quantity rises", "Price is indeterminate; quantity rises", "Both price and quantity fall"], answer: 0, explain: "Both shifts push price up. They push quantity in opposite directions, so quantity is indeterminate." },
        { q: "Which of the following is a macroeconomic question?", choices: ["How will a tax on sugar affect candy prices?", "What causes the overall unemployment rate to rise?", "How does a firm decide how many workers to hire?", "Why do movie tickets cost more on weekends?"], answer: 1, explain: "The overall unemployment rate is an economy-wide aggregate." },
      ],
      frq: {
        prompt: "Country X is producing at a point on its production possibilities curve for consumer goods and capital goods.\n(a) Draw a correctly labeled PPC and mark point A on the curve.\n(b) Show on your graph the effect of a large increase in the country's labor force.\n(c) Explain how choosing to produce more capital goods today affects the country's PPC in the future.",
        points: [
          "(a) Correctly labeled axes (consumer goods, capital goods), a bowed-out PPC, and point A on the curve.",
          "(b) The PPC shifts outward.",
          "(c) More capital goods increase future productive capacity, so the PPC shifts further outward in the future (economic growth).",
        ],
      },
    },
    {
      title: "Economic Indicators and the Business Cycle",
      weight: "12–17%",
      tldr: "GDP measures output, the unemployment rate measures joblessness, and price indexes measure inflation. Real values adjust for inflation. The business cycle moves the economy between expansions and recessions around its full-employment output.",
      concepts: [
        {
          title: "Measuring GDP",
          simple: "GDP is the market value of all final goods and services produced within a country in a year.",
          detail: "Expenditure approach: GDP = C + I + G + Xn. Excluded: intermediate goods (to avoid double counting), used goods, financial transactions (stocks, bonds), transfer payments, and non-market activity. Production by foreign firms inside the country counts; production by domestic firms abroad doesn't.",
          hook: "Final, new, made here, this year.",
        },
        {
          title: "Real vs. nominal GDP and the GDP deflator",
          simple: "Real GDP removes the effect of price changes so you can compare output over time.",
          detail: "Nominal GDP uses current prices; real GDP uses base-year prices. GDP deflator = (nominal GDP ÷ real GDP) × 100. Real GDP per capita is the best simple measure of living standards. Growth rate = (new − old) ÷ old × 100.",
        },
        {
          title: "Unemployment",
          simple: "The unemployment rate counts people in the labor force who are looking for work but don't have jobs.",
          detail: "Unemployment rate = unemployed ÷ labor force × 100; labor force = employed + unemployed. Discouraged workers aren't counted, which understates true unemployment. Types: frictional (between jobs), structural (skills mismatch), cyclical (from recessions). Natural rate = frictional + structural; full employment means zero cyclical unemployment.",
        },
        {
          title: "Inflation and price indexes",
          simple: "Inflation is a rise in the overall price level, measured with indexes like the CPI.",
          detail: "CPI = (cost of market basket in current year ÷ cost in base year) × 100. Inflation rate = percent change in the index. The CPI can overstate inflation (substitution bias, new products, quality changes). Real interest rate ≈ nominal interest rate − inflation rate.",
        },
        {
          title: "Costs of inflation",
          simple: "Unexpected inflation helps borrowers and hurts lenders and people on fixed incomes.",
          detail: "Unanticipated inflation redistributes wealth: debtors repay with less valuable money, while savers, lenders and fixed-income earners lose purchasing power. Other costs: shoe-leather costs, menu costs, and uncertainty. Deflation raises the real burden of debt.",
        },
        {
          title: "The business cycle",
          simple: "The economy alternates between expansions and contractions around its long-run trend.",
          detail: "Phases: expansion, peak, contraction (recession), trough. A recession has falling real GDP and rising cyclical unemployment. The economy's potential (full-employment) output grows over time; the gap between actual and potential output is the output gap.",
        },
        {
          title: "Real vs. nominal values",
          simple: "Nominal values are in current dollars; real values adjust for inflation to show purchasing power.",
          detail: "Real value = nominal value ÷ price index × 100. If your wage rises 3% while prices rise 5%, your real wage falls about 2%. Always compare real values over time.",
        },
      ],
      terms: [
        ["GDP", "Market value of all final goods and services produced within a country in a year."],
        ["GDP deflator", "(Nominal GDP ÷ real GDP) × 100; a broad price index."],
        ["Labor force", "People who are employed plus those actively seeking work."],
        ["Cyclical unemployment", "Unemployment caused by recessions."],
        ["Natural rate of unemployment", "Frictional plus structural unemployment."],
        ["Consumer Price Index", "Measures the cost of a fixed market basket relative to a base year."],
        ["Discouraged worker", "Someone who has stopped looking for work and isn't counted as unemployed."],
      ],
      mistakes: [
        "Counting transfer payments or stock purchases in GDP.",
        "Counting discouraged workers as unemployed.",
        "Forgetting to subtract inflation to get the real interest rate or real wage.",
      ],
      questions: [
        { q: "Which of the following is included in U.S. GDP?", choices: ["A used car sold this year", "Social Security payments", "A new house built this year", "Shares of stock bought on the stock market"], answer: 2, explain: "A newly built house is a final good produced this year (it counts as investment)." },
        { q: "A country has 180 million employed and 20 million unemployed people. What is the unemployment rate?", choices: ["11.1%", "10%", "20%", "9%"], answer: 1, explain: "20 ÷ (180 + 20) = 20 ÷ 200 = 10%." },
        { q: "A bank lends money at 6% nominal interest, expecting 2% inflation. Actual inflation is 5%. Who benefits?", choices: ["The bank", "The borrower", "Neither", "Both equally"], answer: 1, explain: "Unexpectedly high inflation lowers the real interest rate (6 − 5 = 1% instead of 4%), which helps the borrower." },
        { q: "A worker who lost a factory job because robots now do the work, and whose skills don't match available jobs, is", choices: ["frictionally unemployed", "structurally unemployed", "cyclically unemployed", "not in the labor force"], answer: 1, explain: "A mismatch between skills and available jobs is structural unemployment." },
      ],
      frq: {
        prompt: "In 2025, nominal GDP was $22 trillion and the GDP deflator was 110.\n(a) Calculate real GDP.\n(b) If real GDP grows to $21 trillion in 2026, calculate the growth rate of real GDP.\n(c) Explain why real GDP, rather than nominal GDP, is used to measure growth.",
        points: [
          "(a) Real GDP = 22 ÷ 1.10 = $20 trillion.",
          "(b) (21 − 20) ÷ 20 × 100 = 5%.",
          "(c) Nominal GDP can rise just because prices rise; real GDP removes inflation, so it reflects changes in output.",
        ],
      },
    },
    {
      title: "National Income and Price Determination",
      weight: "17–27%",
      tldr: "Aggregate demand and aggregate supply determine real output and the price level. Shocks cause recessionary or inflationary gaps. The multiplier magnifies spending changes, and fiscal policy uses government spending and taxes to close gaps.",
      concepts: [
        {
          title: "Aggregate demand",
          simple: "AD shows the total quantity of output demanded at each price level.",
          detail: "AD slopes down because of the wealth effect, the interest-rate effect, and the exchange-rate effect. AD shifts with changes in C, I, G or Xn: consumer confidence, wealth, interest rates (for investment), government spending, taxes, foreign incomes and exchange rates.",
        },
        {
          title: "Short-run aggregate supply",
          simple: "SRAS shows the output firms supply at each price level when some input costs are fixed.",
          detail: "SRAS slopes up because wages and other input prices are sticky in the short run. It shifts with changes in input prices (wages, oil), productivity, business taxes and subsidies, and inflation expectations. Higher input costs shift SRAS left.",
        },
        {
          title: "Long-run aggregate supply",
          simple: "LRAS is vertical at full-employment output, which doesn't depend on the price level.",
          detail: "In the long run, all prices and wages adjust, so output returns to potential output (the natural rate of unemployment). LRAS shifts right with more or better resources, technology and human capital. It matches the PPC: an outward PPC shift means LRAS shifts right.",
        },
        {
          title: "Equilibrium, gaps and self-correction",
          simple: "Where AD meets SRAS the economy may be above or below full employment, creating gaps.",
          detail: "Recessionary gap: output below potential, unemployment above natural. Inflationary gap: output above potential. Without policy, wages adjust: in a recessionary gap, falling wages shift SRAS right; in an inflationary gap, rising wages shift SRAS left, until output returns to potential.",
        },
        {
          title: "The spending and tax multipliers",
          simple: "A change in spending ripples through the economy, changing GDP by more than the original amount.",
          detail: "MPC + MPS = 1. Spending multiplier = 1/MPS = 1/(1 − MPC). Tax multiplier = −MPC/MPS, smaller than the spending multiplier because part of a tax cut is saved. Balanced-budget multiplier = 1.",
          example: "MPC = 0.8: spending multiplier = 5, tax multiplier = −4.",
        },
        {
          title: "Fiscal policy",
          simple: "Government changes spending and taxes to fight recessions or inflation.",
          detail: "Expansionary: increase G or cut taxes to shift AD right (for a recessionary gap). Contractionary: cut G or raise taxes to shift AD left (for inflation). Discretionary policy requires new legislation; automatic stabilizers (progressive taxes, unemployment benefits) work without it. Lags can make fiscal policy mistimed.",
        },
        {
          title: "Supply shocks and stagflation",
          simple: "A negative supply shock raises prices and lowers output at the same time.",
          detail: "A sudden rise in oil prices shifts SRAS left: the price level rises and real GDP falls (stagflation). This creates a policy dilemma: fighting unemployment worsens inflation, and fighting inflation deepens the recession.",
        },
      ],
      terms: [
        ["Aggregate demand", "Total spending on domestic output at each price level: C + I + G + Xn."],
        ["Short-run aggregate supply", "Total output firms supply at each price level with sticky input prices."],
        ["Long-run aggregate supply", "Vertical line at full-employment (potential) output."],
        ["Recessionary gap", "Real GDP below full-employment output."],
        ["Marginal propensity to consume", "The fraction of extra income spent on consumption."],
        ["Automatic stabilizers", "Taxes and transfers that adjust automatically to the business cycle."],
        ["Stagflation", "Rising prices combined with falling output."],
      ],
      mistakes: [
        "Shifting SRAS when a change in spending should shift AD.",
        "Using the spending multiplier for a change in taxes.",
        "Drawing LRAS as upward sloping.",
      ],
      questions: [
        { q: "If the MPC is 0.75, what is the maximum change in real GDP from a $100 billion increase in government spending?", choices: ["$75 billion", "$133 billion", "$400 billion", "$300 billion"], answer: 2, explain: "Multiplier = 1/(1 − 0.75) = 4, so 4 × 100 = $400 billion." },
        { q: "A large increase in the price of oil will most likely", choices: ["shift AD right, raising output and prices", "shift SRAS left, raising prices and lowering output", "shift LRAS right", "shift SRAS right, lowering prices"], answer: 1, explain: "Higher input costs shift SRAS left: stagflation." },
        { q: "The economy is in a recessionary gap. Which fiscal policy is appropriate?", choices: ["Raise taxes", "Cut government spending", "Increase government spending", "Sell government bonds"], answer: 2, explain: "Expansionary fiscal policy (more G or lower taxes) shifts AD right. Selling bonds is monetary policy." },
        { q: "With no government policy, how does an economy in a recessionary gap return to full employment in the long run?", choices: ["Wages fall and SRAS shifts right", "Wages rise and SRAS shifts left", "AD shifts right on its own", "LRAS shifts left"], answer: 0, explain: "High unemployment pushes nominal wages down, lowering costs and shifting SRAS right." },
      ],
      frq: {
        prompt: "An economy is in short-run equilibrium with real GDP below full-employment output.\n(a) Draw a correctly labeled AD–AS graph showing this situation.\n(b) Identify a fiscal policy that would move the economy to full employment and show its effect on your graph.\n(c) If the MPC is 0.8 and the gap is $500 billion, calculate the minimum increase in government spending needed.",
        points: [
          "(a) AD, SRAS and a vertical LRAS, with equilibrium to the left of LRAS; labeled price level and real GDP.",
          "(b) Increase government spending or cut taxes: AD shifts right toward LRAS, raising output and the price level.",
          "(c) Multiplier = 5, so ΔG = 500 ÷ 5 = $100 billion.",
        ],
      },
    },
    {
      title: "Financial Sector",
      weight: "18–23%",
      tldr: "Money serves as a medium of exchange, and banks create money through lending. The central bank uses monetary policy tools to change interest rates and the money supply, which affects investment, aggregate demand and output.",
      concepts: [
        {
          title: "Financial assets and interest rates",
          simple: "Bond prices and interest rates move in opposite directions.",
          detail: "Assets include money (liquid, no interest), bonds (interest-bearing loans) and stocks (ownership). When interest rates rise, existing bonds with lower fixed payments become less attractive, so their prices fall. The nominal interest rate = real interest rate + expected inflation.",
          hook: "Bond prices and rates are on a seesaw.",
        },
        {
          title: "Functions and measures of money",
          simple: "Money is a medium of exchange, a unit of account and a store of value.",
          detail: "M1: currency, checkable deposits, and savings deposits (since 2020). M2: M1 plus small time deposits and money market funds. Credit cards are not money; they are loans.",
        },
        {
          title: "Banking and the money multiplier",
          simple: "Banks lend out excess reserves, and each loan creates new deposits, expanding the money supply.",
          detail: "Required reserves = reserve requirement × deposits; excess reserves can be lent. Money multiplier = 1 ÷ reserve requirement. Maximum change in money supply = excess reserves × money multiplier. A cash deposit doesn't change the money supply immediately; new loans do.",
          example: "Reserve requirement 10% → multiplier 10. $1,000 of new excess reserves can create up to $10,000 of money.",
        },
        {
          title: "The money market",
          simple: "The supply and demand for money set the nominal interest rate.",
          detail: "Money demand slopes down (higher interest rates raise the opportunity cost of holding money) and shifts with the price level and real GDP. Money supply is vertical, set by the central bank. An increase in money supply lowers the nominal interest rate.",
        },
        {
          title: "Monetary policy tools",
          simple: "The Fed changes the money supply and interest rates to steer the economy.",
          detail: "With ample reserves, the main tool is the interest rate on reserve balances (IORB), with the discount rate and overnight reverse repos supporting it. Open market operations: buying bonds increases reserves and the money supply; selling does the opposite. The reserve requirement is another (currently unused) tool. Expansionary policy lowers interest rates, raising investment and AD.",
        },
        {
          title: "The loanable funds market",
          simple: "The supply of savings and the demand for borrowing set the real interest rate.",
          detail: "Supply comes from savers; demand comes from borrowers (firms investing, government deficits). Government borrowing increases demand for loanable funds, raising the real interest rate and reducing private investment: crowding out. Higher national saving increases supply and lowers the real rate.",
        },
        {
          title: "Transmission of monetary policy",
          simple: "Monetary policy works through interest rates to affect spending and output.",
          detail: "Expansionary chain: Fed buys bonds → reserves and money supply rise → interest rate falls → investment and interest-sensitive consumption rise → AD shifts right → real GDP and the price level rise. Contractionary policy reverses each step.",
        },
      ],
      terms: [
        ["Liquidity", "How easily an asset can be used to buy things."],
        ["Required reserve ratio", "Fraction of deposits banks must hold as reserves."],
        ["Money multiplier", "1 ÷ reserve requirement."],
        ["Open market operations", "The central bank buying or selling government bonds."],
        ["Federal funds rate", "Interest rate banks charge each other for overnight loans of reserves."],
        ["Crowding out", "Government borrowing raises interest rates and reduces private investment."],
        ["Loanable funds market", "Market where savers supply and borrowers demand funds, setting the real interest rate."],
      ],
      mistakes: [
        "Saying bond prices and interest rates move together.",
        "Using the money market graph for crowding out (use loanable funds for the real rate).",
        "Counting a cash deposit as an increase in the money supply.",
      ],
      questions: [
        { q: "The reserve requirement is 20%, and a bank receives a new $1,000 deposit from money kept outside the banking system. What is the maximum increase in the money supply from new lending?", choices: ["$1,000", "$4,000", "$5,000", "$800"], answer: 1, explain: "Excess reserves = $800; multiplier = 5; 800 × 5 = $4,000." },
        { q: "To fight a recession, the Fed would most likely", choices: ["sell government bonds", "buy government bonds", "raise the interest rate on reserves", "raise the discount rate"], answer: 1, explain: "Buying bonds increases reserves and the money supply, lowering interest rates." },
        { q: "If market interest rates rise, the prices of existing bonds will", choices: ["rise", "fall", "stay the same", "rise, then fall"], answer: 1, explain: "Existing bonds pay a fixed rate that is now less attractive, so their prices fall." },
        { q: "A large increase in government borrowing will, in the loanable funds market,", choices: ["lower the real interest rate", "raise the real interest rate and crowd out private investment", "increase the supply of loanable funds", "have no effect on interest rates"], answer: 1, explain: "Demand for loanable funds rises, pushing up the real rate and reducing private investment." },
      ],
      frq: {
        prompt: "The economy is experiencing high inflation.\n(a) Identify an open market operation the central bank could use.\n(b) Draw a correctly labeled money market graph showing the effect on the nominal interest rate.\n(c) Explain how this policy affects aggregate demand and the price level.",
        points: [
          "(a) Sell government bonds.",
          "(b) The money supply shifts left, raising the nominal interest rate.",
          "(c) Higher interest rates reduce investment and interest-sensitive consumption, shifting AD left and lowering the price level.",
        ],
      },
    },
    {
      title: "Long-Run Consequences of Stabilization Policies",
      weight: "20–30%",
      tldr: "The Phillips curve links inflation and unemployment in the short run, but not in the long run. Deficits add to debt and can crowd out investment. Long-run growth comes from more capital, better technology and a more productive workforce.",
      concepts: [
        {
          title: "Fiscal and monetary policy together",
          simple: "Policies can work together or pull in opposite directions.",
          detail: "Expansionary fiscal policy raises interest rates (crowding out), which expansionary monetary policy can offset. Coordinated expansionary policy strongly increases AD; mixing expansionary fiscal with contractionary monetary policy raises interest rates sharply.",
        },
        {
          title: "The short-run Phillips curve",
          simple: "In the short run, lower unemployment comes with higher inflation.",
          detail: "The SRPC slopes down: movements along AD cause movements along the SRPC (AD right → lower unemployment, higher inflation). Shifts in SRAS shift the SRPC: a negative supply shock shifts SRAS left and the SRPC right (higher inflation and unemployment together).",
        },
        {
          title: "The long-run Phillips curve",
          simple: "In the long run, there's no trade-off: unemployment returns to its natural rate.",
          detail: "The LRPC is vertical at the natural rate of unemployment, matching the vertical LRAS. Higher expected inflation shifts the SRPC up. Persistent expansionary policy only raises inflation in the long run.",
          hook: "LRAS vertical at full-employment output ↔ LRPC vertical at the natural rate.",
        },
        {
          title: "Money growth and inflation",
          simple: "In the long run, printing more money mainly causes inflation.",
          detail: "Quantity theory of money: MV = PY. If velocity (V) and real output (Y) are stable, increases in the money supply (M) lead to proportional increases in the price level (P). Money is neutral in the long run: it doesn't change real output.",
        },
        {
          title: "Government deficits and national debt",
          simple: "A deficit is one year's shortfall; the debt is the total of all past deficits.",
          detail: "Budget deficit = spending − tax revenue in a year; debt accumulates deficits minus surpluses. Deficits financed by borrowing can raise real interest rates and crowd out private investment, reducing long-run growth. Interest payments on the debt use future tax revenue.",
        },
        {
          title: "Economic growth",
          simple: "Long-run growth means more output per person, driven by productivity.",
          detail: "Growth comes from increases in physical capital, human capital (education, skills), technology, and natural resources. It shows as an outward PPC shift and a rightward LRAS shift. Policies that encourage saving, investment, education and research promote growth.",
        },
        {
          title: "Supply-side policies",
          simple: "Some policies aim to increase aggregate supply rather than aggregate demand.",
          detail: "Supply-side fiscal policies (lower marginal tax rates, investment tax credits, reduced regulation) aim to increase incentives to work, save and invest, shifting SRAS and LRAS right, raising output without raising the price level.",
        },
      ],
      terms: [
        ["Phillips curve", "A graph of the relationship between inflation and unemployment."],
        ["Natural rate of unemployment", "The unemployment rate when the economy is at full employment."],
        ["Quantity theory of money", "MV = PY; long-run money growth causes inflation."],
        ["Velocity of money", "How many times a dollar is spent in a year."],
        ["Budget deficit", "Government spending exceeds tax revenue in a given year."],
        ["National debt", "The total accumulated amount the government owes."],
        ["Human capital", "Knowledge and skills that make workers more productive."],
      ],
      mistakes: [
        "Treating the national debt and the budget deficit as the same thing.",
        "Drawing the long-run Phillips curve as downward sloping.",
      ],
      questions: [
        { q: "An increase in aggregate demand, in the short run, causes a movement along the short-run Phillips curve toward", choices: ["higher unemployment and lower inflation", "lower unemployment and higher inflation", "lower unemployment and lower inflation", "no change in either"], answer: 1, explain: "AD right raises output (lower unemployment) and the price level (higher inflation)." },
        { q: "The long-run Phillips curve is vertical at", choices: ["zero unemployment", "the natural rate of unemployment", "the target inflation rate", "the current unemployment rate"], answer: 1, explain: "In the long run, unemployment returns to the natural rate at any inflation rate." },
        { q: "According to the quantity theory of money, if velocity and real output are constant and the money supply grows 5%, the price level will", choices: ["fall 5%", "stay constant", "rise about 5%", "rise about 10%"], answer: 2, explain: "MV = PY with V and Y fixed means P rises with M." },
        { q: "Which policy would most directly increase long-run economic growth?", choices: ["A one-time tax rebate", "Subsidies for education and research", "Higher interest rates", "A decrease in government spending on infrastructure"], answer: 1, explain: "Education and research increase human capital and technology, shifting LRAS right." },
      ],
      frq: {
        prompt: "The economy is at long-run equilibrium when the government runs a large budget deficit financed by borrowing.\n(a) Using a loanable funds graph, show the effect on the real interest rate.\n(b) Explain the effect on private investment.\n(c) Explain how this affects the economy's long-run growth.",
        points: [
          "(a) Demand for loanable funds shifts right, raising the real interest rate.",
          "(b) Higher real interest rates reduce private investment (crowding out).",
          "(c) Less investment means slower growth of the capital stock, so long-run growth slows (LRAS shifts right less than it would have).",
        ],
      },
    },
    {
      title: "Open Economy: International Trade and Finance",
      weight: "10–13%",
      tldr: "Countries record trade and financial flows in the balance of payments. Exchange rates are set in foreign exchange markets and affect exports and imports. Interest rate differences drive capital flows, linking monetary policy to exchange rates.",
      concepts: [
        {
          title: "The balance of payments",
          simple: "The balance of payments records all transactions between a country and the rest of the world.",
          detail: "The current account includes trade in goods and services, investment income, and transfers. The financial (capital) account records purchases of assets across borders. The two accounts balance: a current account deficit is matched by a financial account surplus.",
        },
        {
          title: "Exchange rates",
          simple: "An exchange rate is the price of one currency in terms of another.",
          detail: "If the dollar appreciates, it buys more foreign currency: U.S. exports become more expensive for foreigners and imports cheaper for Americans, so net exports fall. If the dollar depreciates, net exports rise.",
          hook: "Strong dollar: good for tourists, bad for exporters.",
        },
        {
          title: "The foreign exchange market",
          simple: "Supply and demand for a currency determine its value.",
          detail: "Demand for dollars comes from foreigners buying U.S. goods, services and assets. Supply of dollars comes from Americans buying foreign goods and assets. Factors: relative interest rates, incomes, price levels and tastes. In a two-currency market, an increase in demand for one currency is an increase in supply of the other.",
        },
        {
          title: "Interest rates and capital flows",
          simple: "Higher interest rates attract foreign financial investment, which raises demand for the currency.",
          detail: "If U.S. interest rates rise relative to others, foreign investors buy U.S. assets (financial capital inflow), increasing demand for dollars and appreciating the dollar, which reduces net exports. This links contractionary monetary policy to a stronger currency.",
        },
        {
          title: "Policy effects in an open economy",
          simple: "Monetary and fiscal policies affect exchange rates and net exports.",
          detail: "Expansionary monetary policy lowers interest rates → capital outflow → the dollar depreciates → net exports rise, reinforcing the policy. Expansionary fiscal policy raises interest rates → capital inflow → the dollar appreciates → net exports fall, weakening the policy.",
        },
        {
          title: "Trade and specialization",
          simple: "International trade lets countries specialize and consume beyond their own PPC.",
          detail: "Trade based on comparative advantage raises total output and consumption. Tariffs and quotas protect some domestic producers but raise prices and reduce efficiency.",
        },
      ],
      terms: [
        ["Current account", "Records trade in goods and services, investment income, and transfers."],
        ["Financial account", "Records purchases and sales of assets across borders."],
        ["Appreciation", "An increase in a currency's value relative to another."],
        ["Depreciation", "A decrease in a currency's value relative to another."],
        ["Capital inflow", "Foreign purchases of domestic financial assets."],
        ["Net exports", "Exports minus imports."],
      ],
      mistakes: [
        "Saying a stronger currency increases exports.",
        "Forgetting that the current and financial accounts must balance.",
      ],
      questions: [
        { q: "If the U.S. dollar appreciates against the euro, what happens to U.S. net exports?", choices: ["They rise", "They fall", "They stay the same", "Exports and imports both fall"], answer: 1, explain: "A stronger dollar makes U.S. goods pricier abroad and imports cheaper, so net exports fall." },
        { q: "The Fed raises U.S. interest rates relative to other countries. What happens to the value of the dollar?", choices: ["It depreciates", "It appreciates", "It stays the same", "It depreciates, then appreciates"], answer: 1, explain: "Higher rates attract foreign financial capital, increasing demand for dollars." },
        { q: "A country has a current account deficit. Its financial account must have", choices: ["a deficit of the same size", "a surplus of the same size", "a balance of zero", "no relationship to the current account"], answer: 1, explain: "The balance of payments balances: a current account deficit is matched by a financial account surplus." },
        { q: "Which of the following would increase the demand for Japanese yen?", choices: ["Japanese consumers buying more U.S. goods", "U.S. consumers buying more Japanese cars", "Lower interest rates in Japan", "Higher inflation in Japan"], answer: 1, explain: "To buy Japanese cars, Americans need yen, so demand for yen rises." },
      ],
      frq: {
        prompt: "The Central Bank of Country Z sells government bonds.\n(a) What happens to the interest rate in Country Z?\n(b) Using a correctly labeled foreign exchange graph for Country Z's currency, show the effect on its value.\n(c) Explain the effect on Country Z's net exports.",
        points: [
          "(a) The interest rate rises.",
          "(b) Higher rates attract foreign capital: demand for Z's currency shifts right, and it appreciates.",
          "(c) Z's exports become more expensive and imports cheaper, so net exports fall.",
        ],
      },
    },
  ],
};
