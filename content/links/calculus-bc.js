// Calculus BC reuses AB's chains (its first 8 units are AB's) and adds BC-only ones (units 8 and 9).
window.AP_LINKS = window.AP_LINKS || {};
window.AP_LINKS["calculus-bc"] = [
  ...(window.AP_LINKS["calculus-ab"] || []),
  { title: "Motion in the plane", chain: ["8:Parametric derivatives", "give the velocity in", "8:Motion with vectors", "whose speed is integrated for", "8:Parametric arc length"] },
  { title: "Series approximate functions", chain: ["9:Geometric series and the nth-term test", "starts with", "9:The convergence tests", "which set the", "9:Error bounds and intervals of convergence", "of", "9:Taylor and Maclaurin polynomials", "built from", "2:Higher-order derivatives"] },
];
