// Concept tags and wrong-answer diagnoses for content/computer-science-a.js.
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["computer-science-a"] = {
  "0.0": [1, { 0: "3 is only 17 / 5. You still need to add 17 % 5, which is 2.", 2: "Both operands are ints, so 17 / 5 is 3, not 3.4. Java never produces a decimal here.", 3: "17 % 5 is 2, not 3. The remainder of 17 ÷ 5 is 17 − 15." }],
  "0.1": [5, { 1: "Index 3 is 'g'. \"ogra\" would be substring(2, 6).", 2: "substring stops BEFORE the end index, so index 7 isn't included.", 3: "That starts at index 2 and runs past index 6." }],
  "0.2": [2, { 0: "The cast applies to the result of 9 / 2, which is already the int 4.", 2: "Casting never rounds. 9 / 2 truncates to 4.", 3: "The variable is a double, so it holds 4.0." }],
  "0.3": [5, { 0: "== checks whether both references point to the same object, not whether the text matches.", 2: "= is assignment, not comparison.", 3: "compareTo returns 0 when the Strings are equal, and positive values aren't always 1." }],
  "1.0": [4, { 0: "Count the values: 2, 4, 6, 8 AND 10, because the condition is <=.", 2: "The update is i += 2, not i++.", 3: "9 would be counting from 2 to 10 by ones." }],
  "1.1": [2, { 0: "Negating > gives <=, not <. And && must switch to ||.", 2: "De Morgan's law switches && to ||.", 3: "Negating > 3 gives <= 3, which includes 3." }],
  "1.2": [5, { 0: "The inner loop runs more than once per outer pass. Add 3 + 2 + 1.", 2: "9 would be true if j always started at 0. Here j starts at i.", 3: "Trace each pass: i = 0 gives 3, i = 1 gives 2, i = 2 gives 1." }],
  "1.3": [0, { 0: "x != 0 is false, so the whole && condition is false.", 2: "Short-circuit evaluation skips 10 / x, so there's no division by zero.", 3: "An if/else runs exactly one branch." }],
  "2.0": [0, { 0: "Constructors have no return type, not even void.", 2: "Constructors aren't static. They set up a new object.", 3: "A constructor has no return type like int." }],
  "2.1": [2, { 0: "Primitives are passed by value. The method changes only its own copy.", 2: "The method doesn't reset x to 0; it doesn't touch x at all.", 3: "The code is valid Java." }],
  "2.2": [3, { 0: "Both names refer to the parameter, so the instance variable never changes.", 2: "Assigning a variable to itself compiles fine.", 3: "Nothing crashes; the value just silently doesn't get set." }],
  "2.3": [1, { 0: "Access modifiers don't affect speed.", 2: "Private variables can be changed by the class's own methods.", 3: "Java allows public instance variables; private is good design, not a rule." }],
  "3.0": [2, { 1: "add(1, 9) inserts; it doesn't replace. Then remove(2) removes the 8.", 2: "You skipped the add(1, 9) insert, which shifts 8 to index 2.", 3: "add(1, 9) inserts at index 1, not index 0." }],
  "3.1": [4, { 0: "The first size is rows, the second is columns.", 2: "length gives the number of rows, not the total number of elements.", 3: "Each row has 5 columns, so grid[0].length is 5." }],
  "3.2": [5, { 0: "64 is the worst case for LINEAR search. Binary search halves each time.", 2: "Binary search doesn't stop after one halving.", 3: "Count the halvings including the final comparison: 64 → 1 takes 7 checks." }],
  "3.3": [1, { 0: "v is a copy of each value, so doubling v doesn't change the array.", 2: "The code doubles, it doesn't square, and it doesn't change the array anyway.", 3: "Assigning to the loop variable is legal Java." }],
};
