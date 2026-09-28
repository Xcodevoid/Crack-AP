// How ideas in AP Statistics connect across units. See content/links/_README.txt for the format.
window.AP_LINKS = window.AP_LINKS || {};
window.AP_LINKS["statistics"] = [
  { title: "From spread to standard error", chain: ["0:Measures of center and spread", "becomes the variability of a statistic in", "1:Sampling distributions", "which the CLT makes normal in", "1:The Central Limit Theorem", "so we can build", "3:Confidence intervals for a mean"] },
  { title: "Random sampling vs. random assignment", chain: ["0:Sampling methods and bias", "lets you generalize, while", "0:Experiments and observational studies", "lets you claim cause, which you revisit in", "4:Extrapolation and causation"] },
  { title: "Normal model to z procedures", chain: ["0:Percentiles, z-scores and the normal model", "gives z* for", "2:Confidence intervals for a proportion", "and p-values for", "2:Significance tests for a proportion"] },
  { title: "Counting successes", chain: ["1:The binomial distribution", "counts successes, and the proportion of successes has a", "1:Sampling distributions", "which drives", "2:Confidence intervals for a proportion"] },
  { title: "Tests and their errors", chain: ["2:Significance tests for a proportion", "can go wrong in two ways:", "2:Type I and Type II errors and power", "which apply equally to", "3:Significance tests for a mean"] },
  { title: "When σ is unknown", chain: ["1:The Central Limit Theorem", "assumes σ, so with s we use", "3:The t distributions", "for", "3:Paired data", "and", "3:Comparing two means"] },
  { title: "Choosing a procedure", chain: ["0:Investigative questions and variables", "decides the data type, which guides", "2:Choosing and concluding", "and", "3:Choosing the right procedure"] },
  { title: "Two-way tables", chain: ["1:Conditional probability and independence", "is tested with data using", "2:Chi-square tests for two-way tables"] },
  { title: "Fitting a line", chain: ["4:Describing scatterplots", "measured by", "4:Correlation", "summarized by", "4:The least-squares regression line", "checked with", "4:Residuals and residual plots"] },
  { title: "Unusual points", chain: ["0:Describing a distribution", "spots outliers in one variable, and in two variables", "4:Outliers, leverage and influence", "can change", "4:Coefficient of determination and s"] },
  { title: "Simulation as inference", chain: ["1:Simulation", "asks how often chance alone gives results like ours, the idea behind", "2:Significance tests for a proportion"] },
];
