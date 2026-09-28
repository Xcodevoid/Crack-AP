// Concept tags and wrong-answer diagnoses for content/statistics.js.
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["statistics"] = {
  "0.0": [3, { 0: "The mean gets pulled toward the long right tail, so it overstates a typical income.", 2: "The range is a measure of spread, not center.", 3: "Standard deviation measures spread, not center." }],
  "0.1": [4, { 0: "You divided by 12 instead of 8. z = (82 − 70) / 8.", 2: "12 is the distance from the mean in points, not in standard deviations.", 3: "82 is above the mean, so its z-score is positive." }],
  "0.2": [5, { 0: "Size isn't the issue. A huge voluntary response sample is still biased.", 2: "Random assignment belongs to experiments. Here visitors chose themselves.", 3: "A stratified sample picks randomly within groups. Nobody was chosen at random here." }],
  "0.3": [6, { 0: "Volunteers aren't a random sample, so you can't generalize to the whole population.", 2: "Random assignment still supports a cause-and-effect conclusion for these subjects.", 3: "Random assignment lets you go beyond correlation to causation." }],
  "1.0": [1, { 0: "0.9 is P(A) + P(B). The multiplication rule applies to AND with independent events.", 2: "You may have computed 0.5 × 0.2. Multiply 0.4 × 0.5.", 3: "0.45 is the average of the two, which has no meaning here." }],
  "1.1": [3, { 0: "The game pays something 20% of the time, so the expected value can't be 0.", 2: "$5 is halfway between the payouts, but the payouts aren't equally likely.", 3: "$10 is the biggest payout, not the long-run average. E(X) = 10 × 0.2." }],
  "1.2": [4, { 0: "The binomial mean is np = 20 × 0.5 = 10.", 2: "20 is the number of flips, not the expected number of heads.", 3: "2.24 is the standard deviation, √(np(1 − p)), not the mean." }],
  "1.3": [5, { 0: "A bigger sample makes x̄ LESS variable, not more.", 2: "The spread depends on n through σ/√n.", 3: "The standard deviation divides by √n, not n. √4 = 2, so it's halved." }],
  "2.0": [0, { 0: "Higher confidence needs a bigger z*, which WIDENS the interval.", 2: "A smaller sample increases the standard error and widens the interval.", 3: "Bias shifts the interval off target. It doesn't make it honestly narrower." }],
  "2.1": [2, { 0: "We never 'accept' H₀. Anyway, p < α means reject it.", 2: "Fail to reject happens when p ≥ α. Here 0.03 < 0.05.", 3: "The test is about H₀. We don't reject the alternative." }],
  "2.2": [3, { 1: "That's a Type II error: missing a real problem.", 2: "That's a correct decision, not an error.", 3: "Sample size affects power, but it isn't a Type I error." }],
  "2.3": [5, { 0: "12 is the number of cells. Use (rows − 1)(columns − 1).", 1: "7 is (3 − 1) + (4 − 1). Multiply instead of adding.", 3: "11 is cells minus 1, which is for goodness of fit, not a two-way table." }],
  "3.0": [0, { 0: "It's the opposite. More degrees of freedom make the tails thinner.", 2: "t distributions are always symmetric.", 3: "Every t distribution is centered at 0." }],
  "3.1": [3, { 0: "Two-sample t is for independent groups. These are the same students measured twice.", 2: "Test scores are quantitative, not a proportion.", 3: "Chi-square is for categorical counts." }],
  "3.2": [2, { 0: "You divided by 8 but forgot √16. t = (52 − 50) / (8/√16) = 2/2.", 2: "4.0 would mean dividing by 0.5. The standard error is 8/√16 = 2.", 3: "2.0 is x̄ − μ₀, before dividing by the standard error." }],
  "3.3": [1, { 0: "np ≥ 10 is the Large Counts condition for proportions.", 2: "Expected counts ≥ 5 is for chi-square tests.", 3: "If σ were known you'd use z. t procedures exist because σ is unknown." }],
  "4.0": [2, { 0: "The slope describes predicted values, not what happens for every person.", 2: "The explanatory variable is height, so the slope is pounds per inch.", 3: "The slope isn't an average of y." }],
  "4.1": [3, { 0: "Residual = actual − predicted, so 30 − 26 = +4.", 2: "Add? No. A residual is a difference.", 3: "The point isn't on the line, so the residual isn't 0." }],
  "4.2": [4, { 0: "r² is 0.81, and it's about variation explained, not points on the line.", 2: "Regression shows association, not causation.", 3: "r² is 0.9 × 0.9 = 0.81, and it isn't the slope." }],
  "4.3": [3, { 0: "A curved pattern in the residuals means the line misses the shape.", 2: "Residual plots don't tell you r is 0. The data can be strongly curved.", 3: "The curve is about form, not outliers." }],
};
