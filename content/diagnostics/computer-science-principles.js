// Concept tags and wrong-answer diagnoses for content/computer-science-principles.js.
window.AP_DIAG = window.AP_DIAG || {};
window.AP_DIAG["computer-science-principles"] = {
  "0.0": [4, { 0: "A syntax error would stop the program from running at all. This one runs.", 2: "Overflow happens when a number is too large for its bits. Nothing is too large here.", 3: "A run-time error would crash or stop the program. It runs to the end." }],
  "0.1": [2, { 0: "Testing only once at the end is the opposite of iterating.", 2: "Copying code isn't a development process, and it needs credit.", 3: "Comments help, but they aren't the build-test-revise cycle." }],
  "0.2": [0, { 0: "Team makeup doesn't change how fast code runs.", 2: "Diverse teams still need to test.", 3: "Every team needs documentation." }],
  "0.3": [5, { 0: "A typical list is the case most likely to work already.", 2: "Equal values are fine, but an empty list is a sharper edge case.", 3: "Small typical lists rarely reveal hidden errors." }],
  "1.0": [0, { 0: "20 would be 10100. Add 16 + 4 + 2.", 2: "26 would be 11010. Check which places hold a 1.", 3: "That's the binary digits, not the decimal value." }],
  "1.1": [0, { 0: "Each added bit doubles the count; it doesn't add 1.", 2: "31 is the LARGEST value. With 0 included there are 32 values.", 3: "5 × 2 isn't how bits combine. It's 2^5." }],
  "1.2": [2, { 0: "Lossy compression permanently discards data, so the text couldn't be restored exactly.", 2: "Only lossless guarantees exact restoration.", 3: "Text compresses well with lossless methods." }],
  "1.3": [5, { 0: "More data doesn't cause bias. Who is in the data does.", 2: "Metadata isn't the issue here.", 3: "Compression doesn't make data unrepresentative." }],
  "2.0": [0, { 1: "y is recalculated from the NEW x: 7 − 2 = 5.", 2: "x was updated to 7 before being displayed.", 3: "y uses x − y, which is 7 − 2, not x." }],
  "2.1": [5, { 0: "30 adds every item. The IF only adds items where item MOD 2 = 0.", 2: "12 is only the last even number. 6 is also even.", 3: "6 is only the first even number. Keep going through the list." }],
  "2.2": [5, { 0: "Binary search needs sorted data to know which half to discard.", 2: "Checking every element is LINEAR search.", 3: "Binary search is much faster on large sorted lists." }],
  "2.3": [7, { 0: "Unreasonable problems CAN be solved, just too slowly.", 2: "A heuristic is an approach to an approximate answer, not a kind of problem.", 3: "A simulation models a real process; it isn't a type of unsolvable problem." }],
  "3.0": [3, { 0: "Packets aren't held for repairs; they take another route.", 2: "The web runs on the internet; it can't replace it.", 3: "Bandwidth doesn't change when a router fails." }],
  "3.1": [4, { 0: "90 seconds is the sequential time, using one processor.", 2: "40 would require the other two tasks to fit in 40 seconds, but 20 + 30 = 50.", 3: "45 is half of 90, but tasks can't be split evenly." }],
  "3.2": [1, { 0: "Both TCP and UDP send data in packets.", 2: "IP addresses come from other systems, not TCP.", 3: "TCP doesn't encrypt data by itself." }],
  "3.3": [0, { 0: "A cable is hardware. A protocol is a set of rules.", 2: "A virus is malware, not a protocol.", 3: "The maximum data rate is bandwidth." }],
  "4.0": [5, { 0: "Encryption protects data; this email is a trick.", 2: "Crowdsourcing gathers help from many people.", 3: "A firewall filters network traffic." }],
  "4.1": [2, { 0: "The digital divide is about access, not accuracy.", 2: "Compression isn't involved.", 3: "Fault tolerance is about surviving failures." }],
  "4.2": [6, { 0: "The sender's public key can't decrypt messages sent to someone else.", 2: "The public key ENCRYPTS; it can't decrypt.", 3: "Public key encryption doesn't need a shared secret key." }],
  "4.3": [3, { 0: "Hiring a team isn't open to the crowd.", 2: "One person working alone isn't crowdsourcing.", 3: "Buying laptops is about access, not crowd contributions." }],
};
