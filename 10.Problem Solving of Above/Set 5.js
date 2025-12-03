// Problem 1 — Operator Precedence
// Predict the output AND explain why:

// console.log(5 + 10 * 2); //25
// console.log((5 + 10) * 2); //30
// console.log(10 || 20 && 0); //10
// console.log((10 || 20) && 0); //0
 
// Problem 2 — Swap Variables Using Destructuring

// Swap 2 variables:
// WITHOUT using a third variable.

// let a = 5;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a -b;
// console.log(a)
// console.log(b)


// Problem 3 — Remove First Element Using Rest
// Given:

// const arr = [10, 20, 30, 40];
// // Extract:
// let [first ,...rest] = arr;
// console.log(rest);
// console.log(...rest);


// Problem 4 — Merge 3 Objects With Spread

// Merge:

const a = { x: 1 };
const b = { y: 2 };
const c = { z: 3 };

const d = {...a, ...b, ...c}
console.log(d)
// Problem 5 — Logical Assignment

// Given:

// let username = "";
// let nickname = "Ankit";


// Using ONLY:

// ||=

// &&=

// ??=

// Make username become "Ankit".

// Problem 6 — Deep Destructuring

// Given:

// const user = {
//   name: "Madara",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };


// Extract:

// city = "Delhi"
// pin = 110001


// Using nested destructuring.

// Problem 7 — Function With Rest Parameters

// Create:

// function multiply(multiplier, ...nums)


// Return an array where every number in nums is multiplied by multiplier.

// Example:

// multiply(2, 5, 6, 7)  → [10, 12, 14]

// Problem 8 — Destructure Function Return

// Function returns an object:

// function getUser() {
//   return {
//     name: "Build",
//     age: 20,
//     city: "Delhi"
//   };
// }


// Extract name and city in one line.

// Problem 9 — Spread Trick

// Predict output:

// console.log([..."Hello"]);
// console.log({..."Hi"});


// Explain why second one fails.

// Problem 10 — Combine Arrays Inside Another

// Given:

// const a = [1, 2];
// const b = [3, 4];


// Output:

// [[1,2], [3,4]]


// Using only spread.

// Problem 11 — Clone Object Without Spread

// Make a shallow clone:

// const obj = { a: 1, b: 2 };


// Without using {...obj}.

// (Hint: use Object.assign)

// Problem 12 — Optional Chaining + Nullish Coalescing Combo

// Given:

// const data = {
//   user: {
//     info: {
//       email: "test@gmail.com"
//     }
//   }
// };


// Safely extract:

// email


// If missing → "No Email".