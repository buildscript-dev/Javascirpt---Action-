// 🧠 WHAT IS JAVASCRIPT?
// JavaScript is a scripting language used to make websites interactive and dynamic.
// It brings web pages to life — handling animations, clicks, pop-ups, form validation, games, etc.

// 🧩 CODE EXECUTION CONCEPT:
// Your code (JS, TS, Py, C++, etc.) → Interpreter/Compiler → Machine Code (0s and 1s)
// JavaScript is INTERPRETED, while C++/Java are COMPILED.

// 💬 ECMAScript (ES) is the standard that defines how JavaScript works.
// Think of it as the rulebook that JavaScript follows.


// ❓ WHY IS JAVASCRIPT IMPORTANT?
// Because almost every website uses JavaScript for engagement and interactivity.
// From animations to user input, JS powers most web interactions.


// 🚀 WHAT CAN JAVASCRIPT DO?
// ✅ Create animations
// ✅ Add interactivity
// ✅ Validate forms
// ✅ Handle user inputs
// ✅ Communicate with APIs
// ✅ Build web apps and games


// 🌐 HOW TO CONNECT JAVASCRIPT WITH HTML
// 1. Create an HTML file.
// 2. Inside the <body> tag, link your JS file like this:
//    <script src="script.js"></script>
// 3. Open your HTML file in the browser.


// 🧭 HOW TO RUN JAVASCRIPT IN THE BROWSER
// Open Developer Tools → Ctrl + Shift + I → Console tab → Type JS code → Press Enter.


// 🔤 VARIABLES (var, let, const)
// Used to store data in JS.

var a = 12;    // Old style (not recommended)
let b = 12;    // Modern style (recommended)
const c = 14;  // Constant value (cannot be changed)


// 💬 CONSOLE, PROMPT & ALERT

console.log("Log message");          // General output
console.info("Information message"); // Info (same as log, with 'i' icon)
console.warn("Warning message");     // Shows yellow warning
console.error("Error message");      // Shows red error
console.table({ name: "Build" });    // Displays object as a table

// prompt("Name?"); // Takes user input
// alert("Hello!"); // Shows popup message

let input = prompt("Enter your name");
console.log("User input:", input);


// 🧵 STRINGS
// A string is a sequence of characters inside quotes.

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str1}!`; // Template literal


// ✂️ SLICE
// Used to extract part of a string.
console.log("I'm a good person".slice(6, 10)); // Output: "good"


// 🧱 TEMPLATE STRING (BACKTICKS ``)
// Allow embedding expressions inside strings.
console.log(`Addition result: ${2 + 2}`);


// 🔪 SPLIT
// Breaks a string into smaller pieces (returns an array).
console.log("buildscript".split(''));    // Split into characters
console.log("build script".split(' '));  // Split by space
console.log("buildscript".split('i'));   // Split by letter 'i'


// 🔁 REPLACE
// Used to replace part of a string.
console.log("buildscript".replace("i", "a"));     // Replaces first 'i'
console.log("buildscript".replaceAll("i", "a"));  // Replaces all 'i'


// 📜 STATEMENT vs EXPRESSION
// Statement → A complete instruction (performs an action)
let age = 25; // Statement

// Expression → Produces a value
console.log(2 + 2); // Expression returns 4


// ✅ SUMMARY:
// JavaScript = The language of the web.
// It adds interactivity, logic, and behavior to web pages.
