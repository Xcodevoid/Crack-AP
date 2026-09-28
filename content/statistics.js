window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["statistics"] = {
  intro: "AP Statistics was revised for 2026–27: eight units became five, the Algebra II prerequisite was removed, and the exam is fully digital (42 multiple-choice questions and 4 free-response questions, each section 50%). Removed topics: departures from linearity, combining random variables, the geometric distribution, chi-square goodness of fit, and inference for slopes. The unit titles below describe the content of each revised unit; check the official course description for exact names and weights.",
  tips: [
    "Always answer in context: name the variable, the population and the units. \"The mean is 12\" loses points; \"the mean commute time is 12 minutes\" earns them.",
    "For inference, follow the four steps every time: State (parameter, hypotheses, confidence level), Plan (procedure and conditions), Do (calculations), Conclude (in context).",
    "Check conditions by name: Random, 10% (independence), and Large Counts (proportions) or Normal/Large Sample (means).",
    "Never say you \"accept\" the null hypothesis. You either reject H₀ or fail to reject it.",
    "Correlation isn't causation. Only a well-designed randomized experiment supports cause-and-effect conclusions.",
  ],
  units: [
    {
      title: "Exploring Data and Designing Studies",
      weightLabel: "Revised Unit 1",
      tldr: "Statistics starts with a question and data. Describe distributions by shape, center, spread and unusual values. How data is collected determines what you can conclude: random sampling lets you generalize, and random assignment lets you conclude cause and effect.",
      concepts: [
        {
          title: "Investigative questions and variables",
          simple: "A statistical investigation starts with a question that can be answered with data that varies.",
          detail: "Categorical variables place individuals into groups (eye color); quantitative variables take numerical values where arithmetic makes sense (height). A good investigative question identifies the population and the variable of interest.",
        },
        {
          title: "Displaying data",
          simple: "Choose a graph that matches the type of variable.",
          detail: "Categorical: bar charts, pie charts, two-way tables (with marginal and conditional distributions). Quantitative: dotplots, stemplots, histograms and boxplots. Compare groups with side-by-side boxplots or segmented bar charts.",
        },
        {
          title: "Describing a distribution",
          simple: "Describe shape, outliers, center and spread, in context.",
          detail: "Shape: symmetric, skewed left or right, unimodal or bimodal. Outliers: values outside Q1 − 1.5·IQR or Q3 + 1.5·IQR. Center: mean or median. Spread: standard deviation, IQR or range. When comparing, use comparison words (\"greater than\").",
          hook: "SOCS: Shape, Outliers, Center, Spread.",
        },
        {
          title: "Measures of center and spread",
          simple: "The median and IQR resist outliers; the mean and standard deviation don't.",
          detail: "In skewed distributions, the mean is pulled toward the tail, so the median is the better center. Standard deviation measures typical distance from the mean. Adding a constant shifts center but not spread; multiplying scales both.",
        },
        {
          title: "Percentiles, z-scores and the normal model",
          simple: "A z-score tells how many standard deviations a value is from the mean.",
          detail: "z = (x − mean) / SD. In a normal distribution, about 68%, 95% and 99.7% of values fall within 1, 2 and 3 SDs of the mean (the empirical rule). Use technology to find areas and percentiles for normal distributions.",
          example: "A score of 85 with mean 75 and SD 5 has z = 2: two standard deviations above the mean.",
        },
        {
          title: "Sampling methods and bias",
          simple: "Random sampling gives every individual a fair chance to be chosen.",
          detail: "Methods: simple random sample, stratified (random samples within groups), cluster (randomly choose whole groups), systematic. Bias: convenience samples and voluntary response samples overrepresent certain groups; undercoverage, nonresponse and response bias (question wording) also distort results.",
        },
        {
          title: "Experiments and observational studies",
          simple: "Only experiments with random assignment can show cause and effect.",
          detail: "Observational studies observe without imposing treatments, so confounding variables may explain results. Experiments assign treatments; principles: comparison, random assignment, replication and control. Blocking groups similar units to reduce variability. Double-blind designs prevent bias from knowing the treatment.",
        },
      ],
      terms: [
        ["Categorical variable", "A variable that places individuals into groups."],
        ["Quantitative variable", "A variable with numerical values that can be averaged."],
        ["Interquartile range", "Q3 − Q1, the spread of the middle 50% of data."],
        ["Resistant measure", "A statistic not strongly affected by outliers, like the median."],
        ["z-score", "Number of standard deviations a value is from the mean."],
        ["Stratified random sample", "Random samples taken separately from each group (stratum)."],
        ["Confounding variable", "A variable related to both the explanatory and response variables that can distort conclusions."],
        ["Random assignment", "Using chance to assign experimental units to treatments."],
      ],
      mistakes: [
        "Describing a distribution without context or without all four features (shape, outliers, center, spread).",
        "Concluding causation from an observational study.",
        "Confusing random sampling (generalize to a population) with random assignment (cause and effect).",
      ],
      questions: [
        { q: "The distribution of household incomes in a city is strongly skewed right. Which measure of center best describes a typical income?", choices: ["Mean", "Median", "Range", "Standard deviation"], answer: 1, explain: "The median resists the pull of very high incomes; the mean is dragged toward the long right tail." },
        { q: "Test scores have mean 70 and standard deviation 8. What is the z-score for a score of 82?", choices: ["1.0", "1.5", "12", "−1.5"], answer: 1, explain: "z = (82 − 70) / 8 = 1.5." },
        { q: "A website asks visitors to vote on whether they like a new design. 80% say no. Why might this overestimate dislike?", choices: ["The sample is too small", "Voluntary response samples overrepresent people with strong opinions", "It used random assignment", "It's a stratified sample"], answer: 1, explain: "People who feel strongly, often negatively, are more likely to respond." },
        { q: "Researchers randomly assign 100 volunteers to take a new vitamin or a placebo and find the vitamin group has fewer colds. What can they conclude?", choices: ["The vitamin causes fewer colds in the whole population", "The vitamin causes fewer colds for people like these volunteers", "Nothing, because it wasn't a random sample", "Only that the two are correlated"], answer: 1, explain: "Random assignment supports cause and effect, but volunteers weren't randomly sampled, so generalize only to similar people." },
      ],
      frq: {
        prompt: "A school wants to know whether a new study app improves test scores. 60 volunteer students are available.\n(a) Describe how to carry out a completely randomized experiment.\n(b) Explain why random assignment is important.\n(c) To what population can the results be generalized? Explain.",
        points: [
          "(a) Number students 1–60, use a random number generator to pick 30 unique numbers for the app group; the rest use the usual method; compare mean test scores after the study period.",
          "(b) Random assignment creates roughly equivalent groups so differences in scores can be attributed to the app, not to confounding variables.",
          "(c) Only to students similar to these 60 volunteers, since they weren't randomly selected from all students.",
        ],
      },
    },
    {
      title: "Probability, Random Variables, and Sampling Distributions",
      weightLabel: "Revised Unit 2",
      tldr: "Probability describes long-run chance. Random variables assign numbers to outcomes, with means and standard deviations. The binomial model counts successes. Sampling distributions describe how statistics vary from sample to sample, which is the basis for inference.",
      concepts: [
        {
          title: "Probability rules",
          simple: "Probabilities are between 0 and 1, and they follow a few basic rules.",
          detail: "Complement: P(not A) = 1 − P(A). Addition: P(A or B) = P(A) + P(B) − P(A and B). Mutually exclusive events can't happen together, so P(A and B) = 0. Use two-way tables and Venn diagrams to organize probabilities.",
        },
        {
          title: "Conditional probability and independence",
          simple: "Conditional probability is the chance of one event given that another happened.",
          detail: "P(A | B) = P(A and B) / P(B). Events are independent if P(A | B) = P(A): knowing B doesn't change A's probability. Multiplication rule: P(A and B) = P(A) · P(B | A). Independent is NOT the same as mutually exclusive.",
        },
        {
          title: "Simulation",
          simple: "Use random numbers to model a chance process and estimate probabilities.",
          detail: "Steps: state the question, describe how to use random digits or technology to model one trial, perform many trials, and state the estimated probability in context. Larger numbers of trials give more reliable estimates (law of large numbers).",
        },
        {
          title: "Discrete random variables",
          simple: "A random variable assigns a number to each outcome of a chance process.",
          detail: "Mean (expected value) μ = Σ x·P(x). Standard deviation σ = √Σ(x − μ)²·P(x). Probabilities in a distribution must add to 1. Interpret the mean as the long-run average over many repetitions.",
        },
        {
          title: "The binomial distribution",
          simple: "Binomial models count successes in a fixed number of independent trials.",
          detail: "Conditions (BINS): Binary outcomes, Independent trials, fixed Number of trials, same probability of Success. P(X = k) = C(n, k) pᵏ(1 − p)ⁿ⁻ᵏ. Mean = np, standard deviation = √(np(1 − p)).",
          hook: "BINS: Binary, Independent, Number fixed, Same p.",
        },
        {
          title: "Sampling distributions",
          simple: "A statistic varies from sample to sample, and its sampling distribution shows how.",
          detail: "For a sample proportion p̂: mean p, standard deviation √(p(1 − p)/n), approximately normal when np ≥ 10 and n(1 − p) ≥ 10. For a sample mean x̄: mean μ, standard deviation σ/√n. Larger samples reduce variability. An unbiased estimator's sampling distribution is centered on the parameter.",
        },
        {
          title: "The Central Limit Theorem",
          simple: "Sample means from large samples are approximately normal, whatever the population's shape.",
          detail: "If n ≥ 30 (or the population is normal), the sampling distribution of x̄ is approximately normal. This lets you use normal calculations for sample means. The CLT is about the distribution of sample MEANS, not of individual data values.",
        },
      ],
      terms: [
        ["Complement", "The event that A does not happen: P(not A) = 1 − P(A)."],
        ["Mutually exclusive", "Events that can't happen at the same time."],
        ["Independent events", "Knowing one event occurred doesn't change the other's probability."],
        ["Expected value", "The long-run average value of a random variable."],
        ["Binomial setting", "A fixed number of independent trials with the same success probability."],
        ["Sampling distribution", "The distribution of a statistic across all possible samples of the same size."],
        ["Unbiased estimator", "A statistic whose sampling distribution is centered on the parameter."],
        ["Central Limit Theorem", "Large-sample means are approximately normally distributed."],
      ],
      mistakes: [
        "Treating mutually exclusive events as independent.",
        "Using a binomial model when trials aren't independent or n isn't fixed.",
        "Thinking the CLT makes individual data values normal.",
      ],
      questions: [
        { q: "P(A) = 0.4 and P(B) = 0.5. If A and B are independent, what is P(A and B)?", choices: ["0.9", "0.2", "0.1", "0.45"], answer: 1, explain: "For independent events, P(A and B) = 0.4 × 0.5 = 0.2." },
        { q: "A game pays $10 with probability 0.2 and $0 otherwise. What is the expected value?", choices: ["$0", "$2", "$5", "$10"], answer: 1, explain: "E(X) = 10(0.2) + 0(0.8) = $2." },
        { q: "A fair coin is flipped 20 times. What is the mean number of heads?", choices: ["5", "10", "20", "2.24"], answer: 1, explain: "Binomial mean = np = 20 × 0.5 = 10." },
        { q: "What happens to the standard deviation of the sampling distribution of x̄ when the sample size is multiplied by 4?", choices: ["It is multiplied by 4", "It is cut in half", "It stays the same", "It is divided by 4"], answer: 1, explain: "σ/√n: multiplying n by 4 divides the SD by √4 = 2." },
      ],
      frq: {
        prompt: "At a school, 30% of students ride the bus. A random sample of 50 students is selected.\n(a) Describe the sampling distribution of the sample proportion who ride the bus (shape, center, spread). Justify the shape.\n(b) Find the probability that the sample proportion is greater than 0.40.\n(c) Explain how the spread would change if the sample size were 200.",
        points: [
          "(a) Approximately normal since np = 15 ≥ 10 and n(1 − p) = 35 ≥ 10; mean 0.30; SD √(0.3·0.7/50) ≈ 0.0648.",
          "(b) z = (0.40 − 0.30)/0.0648 ≈ 1.54; P(p̂ > 0.40) ≈ 0.062.",
          "(c) The SD is divided by √4 = 2 (about 0.0324), so sample proportions vary less.",
        ],
      },
    },
    {
      title: "Inference for Categorical Data: Proportions",
      weightLabel: "Revised Unit 3",
      tldr: "Confidence intervals estimate a population proportion with a margin of error; significance tests assess claims about it. Both require checking conditions. Tests can make Type I or Type II errors, and two-sample procedures compare proportions between groups.",
      concepts: [
        {
          title: "Confidence intervals for a proportion",
          simple: "A confidence interval gives a range of plausible values for the population proportion.",
          detail: "Interval: p̂ ± z*·√(p̂(1 − p̂)/n). Conditions: Random, 10% condition (n ≤ 10% of population), Large Counts (np̂ ≥ 10 and n(1 − p̂) ≥ 10). Margin of error shrinks with larger n and grows with higher confidence.",
        },
        {
          title: "Interpreting confidence intervals",
          simple: "Interpret the interval and the confidence level carefully, in context.",
          detail: "Interval: \"We are 95% confident that the interval from 0.52 to 0.60 captures the true proportion of all [population] who [trait].\" Level: \"If we took many random samples and built intervals the same way, about 95% of them would capture the true proportion.\" The confidence level is not the probability the parameter is in one specific interval.",
        },
        {
          title: "Significance tests for a proportion",
          simple: "A significance test checks whether sample data give convincing evidence against a claim.",
          detail: "H₀: p = p₀; Hₐ: p < p₀, p > p₀ or p ≠ p₀. Test statistic z = (p̂ − p₀) / √(p₀(1 − p₀)/n) using p₀ in the SD. The p-value is the probability of getting a result at least as extreme as the sample, assuming H₀ is true. If p-value < α, reject H₀.",
        },
        {
          title: "Type I and Type II errors and power",
          simple: "Tests can wrongly reject a true null or fail to reject a false one.",
          detail: "Type I error: rejecting H₀ when it's true (probability α). Type II error: failing to reject H₀ when Hₐ is true. Power = 1 − P(Type II) = probability of correctly rejecting a false H₀. Power increases with larger n, larger α, and larger true effect.",
          hook: "Type I = false alarm. Type II = missed detection.",
        },
        {
          title: "Comparing two proportions",
          simple: "Two-sample procedures estimate or test the difference between two population proportions.",
          detail: "Interval: (p̂₁ − p̂₂) ± z*·√(p̂₁(1 − p̂₁)/n₁ + p̂₂(1 − p̂₂)/n₂). Test: H₀: p₁ = p₂, using the pooled proportion in the standard error. Check conditions for both samples (random, independent, large counts).",
        },
        {
          title: "Chi-square tests for two-way tables",
          simple: "Chi-square tests check whether categorical variables are associated or distributions differ across groups.",
          detail: "Homogeneity: compares distributions across several populations or treatments. Independence: tests association between two categorical variables in one sample. χ² = Σ(observed − expected)²/expected, with expected count = (row total × column total)/table total; all expected counts ≥ 5; df = (rows − 1)(columns − 1).",
        },
        {
          title: "Choosing and concluding",
          simple: "Match the procedure to the question and write conclusions in context.",
          detail: "Estimate → confidence interval; test a claim → significance test. One sample vs. two samples; proportions vs. chi-square for more than two categories. Conclusion: \"Because the p-value of 0.03 is less than α = 0.05, we reject H₀. We have convincing evidence that...\"",
        },
      ],
      terms: [
        ["Margin of error", "The largest likely distance between the statistic and the parameter."],
        ["Confidence level", "The success rate of the method in capturing the parameter over many samples."],
        ["Null hypothesis", "The claim of no effect or no difference, assumed true for the test."],
        ["P-value", "Probability of a result at least as extreme as observed, assuming H₀ is true."],
        ["Type I error", "Rejecting H₀ when it is actually true."],
        ["Type II error", "Failing to reject H₀ when it is actually false."],
        ["Power", "Probability of correctly rejecting a false null hypothesis."],
        ["Expected count", "(Row total × column total) ÷ table total in a two-way table."],
      ],
      mistakes: [
        "Saying \"there is a 95% probability the true proportion is in this interval.\"",
        "Using p̂ instead of p₀ in the standard deviation for a one-proportion test.",
        "Saying \"accept H₀\" instead of \"fail to reject H₀.\"",
      ],
      questions: [
        { q: "Which change makes a confidence interval for a proportion narrower?", choices: ["Increasing the confidence level", "Increasing the sample size", "Decreasing the sample size", "Using a biased sample"], answer: 1, explain: "Larger n reduces the standard error, shrinking the margin of error." },
        { q: "A test gives a p-value of 0.03 with α = 0.05. The correct decision is to", choices: ["accept H₀", "reject H₀", "fail to reject H₀", "reject Hₐ"], answer: 1, explain: "The p-value is below α, so there's convincing evidence against H₀." },
        { q: "A factory tests H₀: the machine is working properly. A Type I error would be", choices: ["concluding it's broken when it's actually working", "concluding it's working when it's actually broken", "correctly finding it broken", "using the wrong sample size"], answer: 0, explain: "Type I: rejecting a true null hypothesis (a false alarm)." },
        { q: "In a chi-square test for independence with a 3 × 4 table, the degrees of freedom are", choices: ["12", "7", "6", "11"], answer: 2, explain: "df = (3 − 1)(4 − 1) = 6." },
      ],
      frq: {
        prompt: "In a random sample of 400 adults, 232 said they read the news online daily.\n(a) Construct and interpret a 95% confidence interval for the proportion of all adults who read the news online daily. Check conditions.\n(b) Does the interval provide convincing evidence that a majority read the news online daily? Explain.",
        points: [
          "(a) p̂ = 0.58. Conditions: random sample; 400 < 10% of all adults; 232 and 168 ≥ 10. Interval: 0.58 ± 1.96√(0.58·0.42/400) = 0.58 ± 0.048 → (0.532, 0.628). We are 95% confident this interval captures the true proportion of all adults who read news online daily.",
          "(b) Yes: all plausible values in the interval are above 0.50, so there's convincing evidence of a majority.",
        ],
      },
    },
    {
      title: "Inference for Quantitative Data: Means",
      weightLabel: "Revised Unit 4",
      tldr: "Use t procedures to estimate or test a population mean when σ is unknown. Paired data uses the differences; two-sample procedures compare two independent groups. Check the Normal/Large Sample condition before using t methods.",
      concepts: [
        {
          title: "The t distributions",
          simple: "When σ is unknown, use t distributions, which have heavier tails than the normal.",
          detail: "t distributions are symmetric and centered at 0, with more area in the tails; they approach the normal as degrees of freedom increase. For one sample, df = n − 1. The standard error of x̄ is s/√n.",
        },
        {
          title: "Confidence intervals for a mean",
          simple: "A t interval estimates a population mean with a margin of error.",
          detail: "x̄ ± t*·s/√n. Conditions: Random, 10%, and Normal/Large Sample (population normal, n ≥ 30, or a graph of the data showing no strong skew or outliers). Interpret in context just as for proportions.",
        },
        {
          title: "Significance tests for a mean",
          simple: "A one-sample t test checks a claim about a population mean.",
          detail: "H₀: μ = μ₀. t = (x̄ − μ₀) / (s/√n), df = n − 1. Find the p-value from the t distribution and compare with α. Conclude in context about the population mean.",
        },
        {
          title: "Paired data",
          simple: "When two measurements come from the same individual, analyze the differences.",
          detail: "Examples: before and after scores, matched pairs, twins. Compute each difference, then use one-sample t procedures on the differences (μ_diff). Pairing reduces variability from differences between individuals.",
        },
        {
          title: "Comparing two means",
          simple: "Two-sample t procedures compare means from two independent groups.",
          detail: "Interval: (x̄₁ − x̄₂) ± t*·√(s₁²/n₁ + s₂²/n₂). Test statistic uses the same standard error. Use technology for df. Check that both samples meet the conditions and are independent of each other.",
        },
        {
          title: "Choosing the right procedure",
          simple: "Decide between proportions and means, one and two samples, paired and independent.",
          detail: "Categorical data → proportions (z procedures). Quantitative data → means (t procedures). Same individuals measured twice → paired t. Two separate groups → two-sample t. Estimating → interval; testing a claim → test.",
        },
      ],
      terms: [
        ["t distribution", "A symmetric distribution with heavier tails than the normal, used when σ is unknown."],
        ["Degrees of freedom", "n − 1 for one-sample t procedures."],
        ["Standard error", "An estimate of a statistic's standard deviation, like s/√n."],
        ["Paired data", "Two measurements on the same individual or matched pair."],
        ["Two-sample t test", "A test comparing the means of two independent groups."],
        ["Normal/Large Sample condition", "Population is normal, n ≥ 30, or data show no strong skew or outliers."],
      ],
      mistakes: [
        "Using two-sample procedures on paired data.",
        "Using z* instead of t* when σ is unknown.",
        "Skipping the Normal/Large Sample check for small samples.",
      ],
      questions: [
        { q: "As the degrees of freedom increase, t distributions", choices: ["get more spread out", "approach the standard normal distribution", "become skewed", "have a mean greater than 0"], answer: 1, explain: "With more df, the tails thin and t approaches z." },
        { q: "Twenty students take a test before and after tutoring. Which procedure fits?", choices: ["Two-sample t test", "Paired t test", "One-proportion z test", "Chi-square test"], answer: 1, explain: "Each student is measured twice, so analyze the differences with a paired t test." },
        { q: "A sample of 16 has x̄ = 52 and s = 8, testing H₀: μ = 50. What is the test statistic?", choices: ["0.25", "1.0", "4.0", "2.0"], answer: 1, explain: "t = (52 − 50)/(8/√16) = 2/2 = 1.0." },
        { q: "For a sample of size 12, which condition must be checked before a t interval?", choices: ["np ≥ 10", "The data show no strong skew or outliers", "Expected counts ≥ 5", "σ is known"], answer: 1, explain: "With n < 30, check that the data are plausibly from a normal population." },
      ],
      frq: {
        prompt: "A random sample of 25 batteries has mean lifetime 48.2 hours with standard deviation 4 hours. The company claims the mean is 50 hours.\n(a) State hypotheses for testing whether the mean lifetime is less than claimed.\n(b) Calculate the test statistic and p-value.\n(c) Conclude at α = 0.05 in context.",
        points: [
          "(a) H₀: μ = 50; Hₐ: μ < 50, where μ is the true mean lifetime of all batteries.",
          "(b) t = (48.2 − 50)/(4/√25) = −2.25, df = 24; p-value ≈ 0.017.",
          "(c) Since 0.017 < 0.05, reject H₀. There is convincing evidence that the true mean battery lifetime is less than 50 hours.",
        ],
      },
    },
    {
      title: "Regression",
      weightLabel: "Revised Unit 5",
      tldr: "Scatterplots show relationships between two quantitative variables. The correlation measures linear strength, and the least-squares regression line predicts one variable from another. Residuals and r² evaluate the fit, and unusual points can strongly affect results.",
      concepts: [
        {
          title: "Describing scatterplots",
          simple: "Describe direction, form, strength and unusual features.",
          detail: "Direction: positive or negative. Form: linear or curved. Strength: how closely points follow the form. Unusual features: outliers and clusters. Identify the explanatory (x) and response (y) variables.",
          hook: "DOFS: Direction, Outliers, Form, Strength.",
        },
        {
          title: "Correlation",
          simple: "The correlation r measures the strength and direction of a LINEAR relationship.",
          detail: "−1 ≤ r ≤ 1; values near ±1 are strong, near 0 weak. r has no units and doesn't change if you swap x and y or change units. It only describes linear relationships and is not resistant to outliers.",
        },
        {
          title: "The least-squares regression line",
          simple: "The regression line ŷ = a + bx minimizes the sum of squared residuals.",
          detail: "Slope b = r·(s_y/s_x); the line passes through (x̄, ȳ). Interpret the slope: \"For each additional [x unit], the predicted [y] increases by b [units].\" Interpret the intercept only if x = 0 makes sense.",
        },
        {
          title: "Residuals and residual plots",
          simple: "A residual is actual y minus predicted y.",
          detail: "Residual = y − ŷ. Positive residual: the point is above the line (the model underpredicted). A residual plot with random scatter and no pattern suggests a linear model fits; a curved pattern suggests a nonlinear relationship.",
        },
        {
          title: "Coefficient of determination and s",
          simple: "r² tells the percent of variation in y explained by the linear model.",
          detail: "Interpret r²: \"About 81% of the variation in [y] is accounted for by the linear model relating [y] to [x].\" The standard deviation of residuals, s, gives the typical prediction error in y units.",
        },
        {
          title: "Outliers, leverage and influence",
          simple: "Some points pull the regression line more than others.",
          detail: "Outliers have large residuals. High-leverage points have x-values far from x̄. Influential points substantially change the slope, intercept or correlation when removed, often high-leverage points that don't follow the pattern.",
        },
        {
          title: "Extrapolation and causation",
          simple: "Don't predict far outside the data, and don't assume correlation means causation.",
          detail: "Extrapolation (predicting beyond the range of x-values) is unreliable. A strong association in observational data can be caused by lurking variables. Only randomized experiments support causal conclusions.",
        },
      ],
      terms: [
        ["Explanatory variable", "The variable used to predict or explain changes in the response."],
        ["Correlation (r)", "Measure of the direction and strength of a linear relationship."],
        ["Least-squares regression line", "The line that minimizes the sum of squared residuals."],
        ["Residual", "Actual y minus predicted y."],
        ["Coefficient of determination (r²)", "Proportion of variation in y explained by the linear model."],
        ["Influential point", "A point whose removal substantially changes the regression line."],
        ["Extrapolation", "Using a model to predict outside the range of observed x-values."],
      ],
      mistakes: [
        "Interpreting slope as the actual change in y instead of the PREDICTED change.",
        "Using r to describe a curved relationship.",
        "Concluding that x causes y from a strong correlation in observational data.",
      ],
      questions: [
        { q: "The regression line for predicting weight (lb) from height (in) is ŷ = −100 + 4x. What does the slope mean?", choices: ["Weight increases 4 lb per inch for every person", "Predicted weight increases 4 lb for each additional inch of height", "Height increases 4 inches per pound", "The average weight is 4 lb"], answer: 1, explain: "The slope is the PREDICTED change in y per unit increase in x." },
        { q: "A point has actual y = 30 and predicted ŷ = 26. Its residual is", choices: ["−4", "4", "56", "0"], answer: 1, explain: "Residual = y − ŷ = 30 − 26 = 4." },
        { q: "If r = 0.9, what is r², and what does it mean?", choices: ["0.9; 90% of points are on the line", "0.81; 81% of the variation in y is explained by the linear model", "0.81; x causes 81% of y", "0.95; the slope is 0.95"], answer: 1, explain: "r² = 0.81: the proportion of variation in y accounted for by the model." },
        { q: "A residual plot shows a clear U-shaped curve. This suggests", choices: ["a linear model is appropriate", "a nonlinear model would fit better", "the correlation is 0", "there are no outliers"], answer: 1, explain: "A pattern in residuals means the linear form misses the relationship." },
      ],
      frq: {
        prompt: "For 20 used cars, the regression line predicting price (in $1,000s) from age (in years) is ŷ = 24.5 − 1.8x, with r = −0.88.\n(a) Interpret the slope in context.\n(b) Predict the price of a 5-year-old car, and find the residual if its actual price is $17,000.\n(c) Would it be appropriate to use the model for a 30-year-old car? Explain.",
        points: [
          "(a) For each additional year of age, the predicted price decreases by $1,800.",
          "(b) ŷ = 24.5 − 1.8(5) = 15.5 → $15,500. Residual = 17 − 15.5 = 1.5 → $1,500 (underpredicted).",
          "(c) No: if 30 years is outside the range of ages in the data, that's extrapolation, and the model may not hold.",
        ],
      },
    },
  ],
};
