// Comment – A line ignored by the computer but useful for programmers.

// Data Types – Define what kind of data a variable can store.

/* -------- Primitive Data Types -------- */
 
// Number – Represents numeric values.
let num = 12;       // example: 12

// Float – Decimal numbers.
let pi = 12.1;      // example: 12.1

// String – Text values inside quotes.
let str = "Build";  // example: "Build"

// Boolean – True or false values.
let isReady = false; // example: true / false

// Null – Represents “no value”.
let data = null;     // used when you intentionally have no value

// Undefined – Variable declared but no value assigned.
let name;            // same as let name = undefined;

// NaN – “Not a Number”; invalid math operation result.
12 * "Harsh";        // gives NaN

// Infinity – Represents an unbounded number.
1 / 0;               // gives Infinity

/* -------- Non-Primitive (Reference) Data Types -------- */

// Array – Holds multiple values.
let arr = ["build", "script", "strix", 1, 2, 3, {}, []];

// Object – Holds properties (key-value pairs).
let user = { name: "Build", age: 20, dev: "Web" };

// Symbol – Unique identifier (will learn with objects).

/* -------- Primitive vs Reference -------- */
// Primitive – Directly copied (number, string, boolean, etc.).
// Reference – Copied by reference (object, array, function, etc.).
