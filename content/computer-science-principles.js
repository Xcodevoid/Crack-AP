window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["computer-science-principles"] = {
  intro: "AP Computer Science Principles covers five big ideas. The exam has 70 multiple-choice questions (70%), and the Create performance task (30%): a program you build in class, plus written responses on exam day about your Personalized Project Reference. Code on the exam uses the AP reference sheet's pseudocode, where lists start at index 1 and ← means assignment.",
  tips: [
    "Learn the exam reference sheet. In AP pseudocode, list indexes start at 1, not 0, and `RANDOM(a, b)` includes both a and b.",
    "Many questions ask what a code segment displays. Trace it step by step with a table of variable values.",
    "For impact questions, pick the answer that names a SPECIFIC benefit or harm, not a vague one.",
    "Know the vocabulary: abstraction, algorithm, heuristic, fault tolerance, bandwidth, phishing, lossy, lossless.",
    "For the Create task, your program must use a list, a procedure with a parameter, and an algorithm with sequencing, selection and iteration.",
  ],
  units: [
    {
      title: "Creative Development",
      weight: "10–13%",
      tldr: "Programs are built collaboratively through an iterative process: investigate, design, prototype, test and refine. Good programmers document their code, test with varied inputs, and find and fix errors.",
      concepts: [
        {
          title: "Collaboration",
          simple: "People with different perspectives build better programs together.",
          detail: "Diverse teams catch more problems and avoid bias. Pair programming, shared online tools and clear communication help teams work. Getting feedback from users helps programs meet their needs.",
        },
        {
          title: "Program function and purpose",
          simple: "A program's purpose is the problem it solves; its function is what it does.",
          detail: "Programs take input (from users, sensors or files), process it, and produce output (text, sound, images or actions). Event-driven programs run code when events happen, like a click or key press.",
        },
        {
          title: "The development process",
          simple: "Programs are developed iteratively: plan, build, test, then improve and repeat.",
          detail: "An iterative process revisits earlier steps after testing. An incremental process builds and tests the program in small pieces. Both involve investigating requirements, designing, prototyping and testing with users.",
        },
        {
          title: "Program documentation",
          simple: "Comments and documentation explain what code does and why.",
          detail: "Documentation helps others (and your future self) understand and maintain code. Comments don't affect how the program runs. When you use code written by others, you should credit the source.",
        },
        {
          title: "Types of errors",
          simple: "Syntax errors break the language rules, logic errors give wrong results, and run-time errors happen while running.",
          detail: "A syntax error stops the program from running at all. A logic error lets it run but produce incorrect output. A run-time error, like dividing by zero or an index out of range, happens during execution. An overflow error happens when a number is too large for the space available.",
        },
        {
          title: "Testing and debugging",
          simple: "Test with many inputs, including edge cases, to find errors.",
          detail: "Good test cases include typical values, boundary values (like the first and last list item) and invalid input. Debugging strategies include hand tracing, adding display statements, and using a debugger to step through code.",
        },
      ],
      terms: [
        ["Iterative development", "Repeating design, build and test steps to refine a program."],
        ["Incremental development", "Building and testing a program in small pieces."],
        ["Syntax error", "A mistake in the rules of the programming language."],
        ["Logic error", "A mistake that makes a program produce wrong results."],
        ["Run-time error", "An error that occurs while the program is running."],
        ["Program documentation", "Written descriptions of how a program or code segment works."],
        ["Event", "An action, like a click, that triggers code to run."],
      ],
      mistakes: [
        "Confusing logic errors (wrong output) with syntax errors (won't run).",
        "Testing only typical inputs and missing edge cases.",
        "Thinking comments change how a program runs.",
      ],
      questions: [
        {
          q: "A program meant to find the largest number in a list runs without crashing but always displays the first number. What kind of error is this?",
          choices: ["Syntax error", "Logic error", "Overflow error", "Run-time error"],
          answer: 1,
          explain: "The program runs but produces the wrong result, which is a logic error.",
        },
        {
          q: "Which is the best example of an iterative development process?",
          choices: ["Writing the whole program, then testing it once", "Building a prototype, testing it with users, then revising based on feedback", "Copying a program from the internet", "Writing comments before any code"],
          answer: 1,
          explain: "Iterative development cycles through building, testing and revising.",
        },
        {
          q: "Why is it useful for a programming team to include people with different backgrounds?",
          choices: ["It makes the program run faster", "It helps find problems and avoid bias the team might miss", "It reduces the need for testing", "It removes the need for documentation"],
          answer: 1,
          explain: "Diverse perspectives catch issues and meet the needs of more users.",
        },
        {
          q: "A procedure should return the average of a list. Which test case is most likely to reveal a hidden error?",
          choices: ["[10, 20, 30]", "An empty list", "[5, 5, 5]", "[1, 2, 3]"],
          answer: 1,
          explain: "Edge cases like an empty list often cause division by zero or other run-time errors.",
        },
      ],
      frq: {
        prompt: "Written response practice: describe two test cases you would use for a procedure that returns the smallest value in a list, and explain what each tests.",
        points: [
          "A typical test with the smallest value in the middle, like [7, 2, 9], expecting 2.",
          "An edge case with the smallest value first or last, like [1, 5, 8] or [5, 8, 1].",
          "Optional: a list where all values are equal, or with negative numbers, to test the starting value.",
          "State the expected output for each and what part of the algorithm it checks.",
        ],
      },
    },
    {
      title: "Data",
      weight: "17–22%",
      tldr: "All digital data is stored as bits. Binary numbers, limited storage and compression shape what computers can represent. Programs extract information from data, but data can be incomplete, biased or misleading.",
      concepts: [
        {
          title: "Bits and binary numbers",
          simple: "Computers store everything as bits, 0s and 1s, and binary is base 2.",
          detail: "Each binary place value is a power of 2: 1, 2, 4, 8, 16, ... So 1011 in binary is 8 + 0 + 2 + 1 = 11. With n bits you can represent 2^n different values, from 0 to 2^n − 1. A byte is 8 bits.",
          example: "Binary 1101 = 8 + 4 + 0 + 1 = 13. Decimal 20 = 16 + 4 = binary 10100.",
        },
        {
          title: "Limits of representation",
          simple: "Fixed numbers of bits limit how big or precise numbers can be.",
          detail: "An overflow error happens when a value is too large for the bits available. A round-off error happens because some real numbers can't be stored exactly. Analog data, like sound, is sampled to make a digital approximation.",
        },
        {
          title: "Data compression",
          simple: "Compression reduces the number of bits needed to store or send data.",
          detail: "Lossless compression lets you rebuild the original exactly (good for text and code). Lossy compression throws away some data for much smaller files (good for photos, audio and video where small losses aren't noticed).",
          hook: "Lossless loses nothing. Lossy loses a little for a lot of savings.",
        },
        {
          title: "Extracting information from data",
          simple: "Programs process large data sets to find patterns and answer questions.",
          detail: "Cleaning data makes it uniform (like fixing inconsistent spellings). Filtering, sorting, combining and visualizing data reveal trends. Correlation in data doesn't prove causation.",
        },
        {
          title: "Metadata",
          simple: "Metadata is data about data, like a photo's date, location or file size.",
          detail: "Metadata helps find, organize and process data. Changing metadata doesn't change the main data. It can also reveal private information, such as where a photo was taken.",
        },
        {
          title: "Bias and limits of data",
          simple: "Data sets can be incomplete, biased or too small to support a conclusion.",
          detail: "If data comes from only one group, conclusions may not apply to others. Bias can come from how data was collected, not just its size. Adding more data of the same biased kind doesn't remove the bias.",
        },
      ],
      terms: [
        ["Bit", "A binary digit, 0 or 1."],
        ["Byte", "8 bits."],
        ["Overflow error", "An error when a number is too large for the bits available."],
        ["Round-off error", "An error from storing a real number with limited precision."],
        ["Lossless compression", "Compression that lets the original data be exactly restored."],
        ["Lossy compression", "Compression that permanently removes some data to save space."],
        ["Metadata", "Data that describes other data."],
        ["Data cleaning", "Making data uniform and fixing errors without changing its meaning."],
      ],
      mistakes: [
        "Thinking lossy compression is always worse; it's the right choice when small size matters more than perfect quality.",
        "Forgetting that n bits give 2^n values, but the largest value is 2^n − 1.",
        "Assuming a correlation found in data proves cause and effect.",
      ],
      questions: [
        {
          q: "What is the decimal value of binary 10110?",
          choices: ["20", "22", "26", "10110"],
          answer: 1,
          explain: "16 + 0 + 4 + 2 + 0 = 22.",
        },
        {
          q: "How many different values can be represented with 5 bits?",
          choices: ["5", "32", "31", "10"],
          answer: 1,
          explain: "Each bit doubles the possibilities: 2^5 = 32 values (0 to 31).",
        },
        {
          q: "A company needs to send a large text document and must be able to restore it exactly. Which compression should it use?",
          choices: ["Lossy", "Lossless", "Either works the same", "No compression is possible"],
          answer: 1,
          explain: "Only lossless compression guarantees the original can be reconstructed exactly.",
        },
        {
          q: "A study uses fitness-app data to conclude that most adults exercise daily. What is the biggest concern?",
          choices: ["The data set is too large", "App users may not represent all adults", "Metadata was used", "The data was compressed"],
          answer: 1,
          explain: "People who use fitness apps likely exercise more than average, so the data is biased.",
        },
      ],
      frq: {
        prompt: "A music streaming service stores songs using lossy compression. Explain one benefit and one drawback of this choice, and name a situation where lossless compression would be better.",
        points: [
          "Benefit: much smaller files, so songs stream faster, use less data and take less storage.",
          "Drawback: some audio data is permanently lost, so quality is lower and the original can't be restored.",
          "Lossless is better when exact data matters, such as text files, program code, or master recordings for editing.",
        ],
      },
    },
    {
      title: "Algorithms and Programming",
      weight: "30–35%",
      tldr: "The largest part of the exam. Algorithms combine sequencing, selection and iteration. You'll trace AP pseudocode with variables, lists, procedures, Boolean logic and loops, and reason about efficiency, undecidable problems and simulations.",
      concepts: [
        {
          title: "Variables and assignment",
          simple: "A variable stores one value at a time; ← assigns a new value to it.",
          detail: "`a ← b` copies b's current value into a. Later changes to b don't change a. When tracing, update a table each time a variable changes.",
          example: "```\na ← 3\nb ← a\na ← 7\nDISPLAY(b)\n```\nThis displays 3, because b got a copy of a's value before a changed.",
        },
        {
          title: "Boolean logic and selection",
          simple: "Conditions are true or false; IF runs code only when its condition is true.",
          detail: "AND is true only when both parts are true; OR is true when at least one is; NOT flips a value. IF / ELSE picks one of two paths. Nested conditions can express complex rules.",
        },
        {
          title: "Iteration",
          simple: "Loops repeat code: REPEAT n TIMES, REPEAT UNTIL a condition, or FOR EACH item in a list.",
          detail: "REPEAT UNTIL(condition) stops when the condition becomes TRUE, and checks before each pass. If the condition is never met, you get an infinite loop.",
          example: "```\ncount ← 0\nREPEAT UNTIL (count = 4)\n{\n   count ← count + 1\n}\n```\nThe body runs 4 times.",
        },
        {
          title: "Lists",
          simple: "A list stores ordered items; in AP pseudocode the first index is 1.",
          detail: "`list[i]` accesses an item; an index less than 1 or greater than `LENGTH(list)` causes an error. `APPEND(list, value)` adds to the end, `INSERT(list, i, value)` shifts items right, and `REMOVE(list, i)` shifts items left.",
          example: "```\nnums ← [4, 8, 15]\nAPPEND(nums, 16)\nREMOVE(nums, 1)\nDISPLAY(nums)\n```\nDisplays [8, 15, 16].",
        },
        {
          title: "Procedures and abstraction",
          simple: "A procedure is a named group of code that can take parameters and return a value.",
          detail: "Procedural abstraction lets you use a procedure knowing only what it does, not how. Parameters make a procedure general so it works for many inputs. This reduces repeated code and makes programs easier to fix.",
        },
        {
          title: "Common list algorithms",
          simple: "Standard algorithms find sums, averages, maximums and items that match a condition.",
          detail: "To find a maximum, start with the first item and compare each other item. Linear search checks items one by one. Binary search is faster but only works on SORTED data, eliminating half the remaining items each step.",
        },
        {
          title: "Algorithm efficiency",
          simple: "Efficiency is how the number of steps grows as input grows.",
          detail: "Algorithms that run in polynomial time (like n or n²) are reasonable. Exponential or factorial time is unreasonable for large inputs. For unreasonable problems, a heuristic finds a good-enough answer quickly.",
        },
        {
          title: "Undecidable problems and simulations",
          simple: "Some problems can't be solved by any algorithm for all inputs; simulations model real systems.",
          detail: "An undecidable problem, like the halting problem, has no algorithm that always gives a correct yes-or-no answer. Simulations use simplified models and randomness (`RANDOM(a, b)`) to explore situations that are too costly or dangerous to test directly, but they leave out details.",
        },
      ],
      terms: [
        ["Algorithm", "A finite set of instructions that accomplish a task."],
        ["Sequencing", "Running steps in order."],
        ["Selection", "Choosing which code runs based on a condition."],
        ["Iteration", "Repeating code."],
        ["Procedural abstraction", "Using a procedure by knowing what it does, not how."],
        ["Heuristic", "An approach that finds a good-enough solution when an exact one is impractical."],
        ["Undecidable problem", "A problem no algorithm can solve correctly for all inputs."],
        ["Simulation", "A model that imitates a real process, often using randomness."],
      ],
      mistakes: [
        "Starting list indexes at 0 instead of 1 in AP pseudocode.",
        "Thinking REPEAT UNTIL runs while the condition is true; it stops when the condition is true.",
        "Using binary search on an unsorted list.",
        "Thinking RANDOM(1, 6) can't return 6.",
      ],
      questions: [
        {
          q: "What is displayed?\n```\nx ← 5\ny ← 2\nx ← x + y\ny ← x - y\nDISPLAY(x)\nDISPLAY(y)\n```",
          choices: ["7 5", "7 2", "5 2", "7 7"],
          answer: 0,
          explain: "x becomes 5 + 2 = 7. Then y becomes 7 − 2 = 5.",
        },
        {
          q: "What is displayed?\n```\nlist ← [3, 6, 9, 12]\nsum ← 0\nFOR EACH item IN list\n{\n   IF (item MOD 2 = 0)\n   {\n      sum ← sum + item\n   }\n}\nDISPLAY(sum)\n```",
          choices: ["30", "18", "12", "6"],
          answer: 1,
          explain: "Only even items are added: 6 + 12 = 18.",
        },
        {
          q: "Which statement about binary search is true?",
          choices: ["It works on any list", "It requires the list to be sorted", "It always checks every element", "It is slower than linear search on large lists"],
          answer: 1,
          explain: "Binary search relies on order to discard half of the list each step.",
        },
        {
          q: "A problem has no algorithm that gives a correct answer for every possible input. This problem is",
          choices: ["unreasonable", "undecidable", "a heuristic", "a simulation"],
          answer: 1,
          explain: "An undecidable problem can't be solved by any algorithm for all inputs. An unreasonable one can be solved, just too slowly.",
        },
      ],
      frq: {
        prompt: "Write a procedure `countAbove(nums, target)` in AP pseudocode that returns how many items in the list nums are greater than target. Then explain how it uses sequencing, selection and iteration.",
        points: [
          "Set `count ← 0` before the loop (sequencing).",
          "Use `FOR EACH n IN nums` to visit each item (iteration).",
          "Inside, `IF (n > target)` then `count ← count + 1` (selection).",
          "After the loop, `RETURN(count)`; explain each part in your own words.",
        ],
      },
    },
    {
      title: "Computer Systems and Networks",
      weight: "11–15%",
      tldr: "The internet is a network of networks that uses open protocols to move data in packets. Redundancy makes it fault tolerant. Parallel and distributed computing speed up work by splitting it across processors or computers.",
      concepts: [
        {
          title: "Networks and the internet",
          simple: "The internet is a network of networks connected by open, shared protocols.",
          detail: "A protocol is an agreed set of rules for sending data. Open protocols like IP, TCP and UDP let any device join. The World Wide Web is a system of linked pages that uses HTTP; it runs ON the internet but isn't the same thing.",
        },
        {
          title: "Packets and routing",
          simple: "Data is split into packets that may take different routes and arrive out of order.",
          detail: "Each packet has metadata such as the destination address. Routers forward packets along available paths. TCP reassembles packets in order and requests missing ones; UDP is faster but doesn't guarantee delivery.",
        },
        {
          title: "Bandwidth and scalability",
          simple: "Bandwidth is the maximum amount of data sent per second.",
          detail: "Bandwidth is measured in bits per second. Scalability is the internet's ability to grow and handle more devices and traffic, made possible by its open and hierarchical design (like IPv6's larger address space).",
        },
        {
          title: "Fault tolerance",
          simple: "Redundant paths let the network keep working when parts fail.",
          detail: "If one connection fails, packets can be rerouted. More redundancy costs more but makes the system more reliable. Questions often ask which connections must fail to cut off two devices.",
        },
        {
          title: "Parallel and distributed computing",
          simple: "Parallel computing runs parts of a task at the same time; distributed computing uses many computers.",
          detail: "Sequential time is the sum of all steps. Parallel time is the longest chain of steps that must run in order on any processor. Speedup = sequential time ÷ parallel time. Adding processors has limits because some steps can't be split.",
          example: "Tasks take 40, 30 and 50 seconds. Sequentially: 120 s. On two processors (50 on one, 40 + 30 on the other): 70 s. Speedup = 120 ÷ 70 ≈ 1.7.",
        },
      ],
      terms: [
        ["Protocol", "An agreed set of rules for how data is sent and received."],
        ["Packet", "A small chunk of data sent across a network with routing information."],
        ["Router", "A device that forwards packets toward their destination."],
        ["Bandwidth", "The maximum data transfer rate of a network, in bits per second."],
        ["Fault tolerance", "The ability to keep working when some parts fail."],
        ["Redundancy", "Extra components or paths that provide backups."],
        ["Speedup", "Sequential time divided by parallel time."],
      ],
      mistakes: [
        "Treating the internet and the World Wide Web as the same thing.",
        "Thinking packets always arrive in order along the same path.",
        "Computing parallel time as the average instead of the longest processor's total.",
      ],
      questions: [
        {
          q: "Why does the internet keep working when a single router fails?",
          choices: ["Packets are stored until the router is fixed", "Redundant paths let packets be rerouted", "The web replaces the internet", "Bandwidth increases"],
          answer: 1,
          explain: "Fault tolerance comes from redundancy: there are multiple paths between devices.",
        },
        {
          q: "Three tasks take 20, 30 and 40 seconds and are independent. With two processors, what is the minimum total time?",
          choices: ["90 seconds", "50 seconds", "40 seconds", "45 seconds"],
          answer: 1,
          explain: "Put 40 on one processor and 20 + 30 = 50 on the other. The longer one decides: 50 seconds.",
        },
        {
          q: "What does TCP do that UDP does not?",
          choices: ["Split data into packets", "Guarantee packets are reassembled in order and resend missing ones", "Assign IP addresses", "Encrypt all data"],
          answer: 1,
          explain: "TCP provides reliable, ordered delivery. UDP is faster but doesn't guarantee delivery or order.",
        },
        {
          q: "Which best describes a protocol?",
          choices: ["A physical cable", "An agreed set of rules for sending data", "A type of computer virus", "The maximum data rate"],
          answer: 1,
          explain: "Protocols are shared rules, like IP and HTTP, that let different devices communicate.",
        },
      ],
      frq: {
        prompt: "A video app splits a video-processing job into 4 independent parts that each take 10 minutes. Compare the time needed on 1 processor and on 4 processors, compute the speedup, and explain why adding a 5th processor wouldn't help.",
        points: [
          "Sequential: 4 × 10 = 40 minutes.",
          "Parallel with 4 processors: each does one part, so 10 minutes.",
          "Speedup = 40 ÷ 10 = 4.",
          "A 5th processor has no part to run, since the job only splits into 4 pieces, so time stays 10 minutes.",
        ],
      },
    },
    {
      title: "Impact of Computing",
      weight: "21–26%",
      tldr: "Computing brings benefits and harms, often both from the same innovation. Know the digital divide, computing bias, crowdsourcing, legal and ethical issues like copyright and licenses, and how to protect personal data from threats like phishing and malware.",
      concepts: [
        {
          title: "Beneficial and harmful effects",
          simple: "Every computing innovation can have both good and bad effects, some unintended.",
          detail: "Social media connects people but can spread misinformation. Effects can be social, economic or cultural. Something designed for one purpose may be used in unexpected ways.",
        },
        {
          title: "The digital divide",
          simple: "The digital divide is unequal access to computing and the internet.",
          detail: "It can depend on income, location (rural vs. urban), age or country. It affects education and job opportunities. Efforts to reduce it include public Wi-Fi, device programs and infrastructure investment.",
        },
        {
          title: "Computing bias",
          simple: "Computers can reflect the biases of the people who build them or the data they learn from.",
          detail: "A hiring algorithm trained on past hiring decisions can repeat past discrimination. Reducing bias means testing with diverse data and reviewing results across groups.",
        },
        {
          title: "Crowdsourcing and citizen science",
          simple: "Crowdsourcing gets many people online to contribute ideas, data or money.",
          detail: "Citizen science lets ordinary people collect or analyze data for research, like reporting bird sightings. Crowdfunding raises money from many small donors.",
        },
        {
          title: "Legal and ethical concerns",
          simple: "Creators own their work, and licenses control how others may use it.",
          detail: "Copyright protects creative work. Creative Commons licenses let creators share with conditions. Open source software can be freely used and modified under its license. Plagiarism is using others' work without credit.",
        },
        {
          title: "Safe computing and privacy",
          simple: "Personally identifiable information (PII) must be protected from misuse.",
          detail: "Strong passwords and multifactor authentication protect accounts. Phishing tricks users into giving away information; malware is harmful software; keyloggers record keystrokes. Rogue access points can intercept data on public Wi-Fi.",
        },
        {
          title: "Encryption",
          simple: "Encryption scrambles data so only authorized people can read it.",
          detail: "Symmetric encryption uses one shared key. Public key encryption uses a public key to encrypt and a private key to decrypt, so strangers can send secure messages. Certificate authorities confirm websites are who they claim.",
        },
      ],
      terms: [
        ["Digital divide", "Differences in access to computing and the internet."],
        ["Computing bias", "Unfair outcomes from biased data or design."],
        ["Crowdsourcing", "Getting contributions from many people online."],
        ["Creative Commons", "Licenses that let creators share work with chosen conditions."],
        ["PII", "Personally identifiable information, data that can identify a person."],
        ["Phishing", "A trick to get people to reveal personal information."],
        ["Multifactor authentication", "Requiring two or more kinds of evidence to log in."],
        ["Public key encryption", "Encryption with a public key to lock and a private key to unlock."],
      ],
      mistakes: [
        "Picking an answer about a benefit when the question asks about a harm, or vice versa.",
        "Thinking the digital divide is only between countries; it exists within them too.",
        "Confusing phishing (a trick to get information) with malware (harmful software).",
      ],
      questions: [
        {
          q: "An email that appears to come from a bank asks you to click a link and enter your password. This is an example of",
          choices: ["encryption", "phishing", "crowdsourcing", "a firewall"],
          answer: 1,
          explain: "Phishing uses fake messages to trick people into revealing personal information.",
        },
        {
          q: "A facial recognition system is less accurate for some groups because its training data included few images of them. This is an example of",
          choices: ["the digital divide", "computing bias", "lossy compression", "fault tolerance"],
          answer: 1,
          explain: "Unrepresentative training data led to unfair results, which is computing bias.",
        },
        {
          q: "In public key encryption, which key is used to decrypt a message?",
          choices: ["The sender's public key", "The receiver's private key", "The receiver's public key", "A shared symmetric key"],
          answer: 1,
          explain: "Anyone can encrypt with the receiver's public key, but only the receiver's private key decrypts it.",
        },
        {
          q: "Which is the best example of crowdsourcing?",
          choices: ["A company hires a team of programmers", "Thousands of volunteers classify galaxy photos for researchers", "A student writes a program alone", "A school buys laptops"],
          answer: 1,
          explain: "Crowdsourcing collects contributions from many people, often volunteers, online.",
        },
      ],
      frq: {
        prompt: "Choose a computing innovation (such as a ride-sharing app). Describe one beneficial effect and one harmful effect, and explain one data privacy concern it raises.",
        points: [
          "Beneficial effect, stated specifically (e.g., easier transportation where transit is limited).",
          "Harmful effect, stated specifically (e.g., reduced income for traditional taxi drivers, or traffic congestion).",
          "Privacy concern: it collects location data (PII) that could be leaked, sold or used to track people.",
        ],
      },
    },
  ],
};
