let prompt = require('prompt-sync')()
//PROBLEM 1 — Arithmetic
// Calculate and print:

// console.log(15 + 7)
// console.log(50 - 12)
// console.log(6 * 6)
// console.log(50 / 4)
// console.log(7 % 3)
// console.log(2 ** 10)

// PROBLEM 2 — Assignment Operators
// Start with:
// Apply these (print after each):

// let x = 10;

// console.log(x += 5);
// console.log(x -= 3);
// console.log(x *= 4);
// console.log(x /= 2);
// console.log(x %= 3);
// console.log(x **= 3);

// PROBLEM 3 — Comparison
// Check and print results:

// console.log(5 == "5")
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);

// PROBLEM 4 — Logical Operators
// Predict output:

// console.log( true && false ); // False
// console.log( true || false ); // True
// console.log( !false ); // True
// console.log( "" || "Hello" ); // Hello
// console.log( "JS" && 0 ); // 0
// console.log( null ?? "fallback" ); // fallback
// console.log( "" ?? "fallback" ); // ""

// PROBLEM 5 — Ternary
// Take age from user.
// If age ≥ 18 → "Adult" else "Minor".

// let age = 12;
// let result = age>=18? "Adult" : "Minor";
// console.log(result)

// PROBLEM 6 — Nullish Coalescing
// Take user input:
// If user enters empty input (""), print "No value"
// Use ONLY: ??

// let userInput = prompt("Enter something: ");
// let result = (userInput === "" ? null : userInput) ?? "No value";

// console.log(result);


// PROBLEM 7 — Optional Chaining

// const user = {
//   profile: {
//     address: {
//       city: "Mumbai"
//     }
//   }
// };

// console.log(user.profile.address);
// console.log(user.profile.address.city);

// PROBLEM 8 — Spread (Array)
// Merge two arrays:
// [1,2,3]  +  [4,5,6]
// Using ONLY spread.
 
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let merge = [...arr1,...arr2]
// console.log(merge);

// PROBLEM 9 — Spread (Object)
// Merge:

// const user = {name: "Ankit"};
// const info = {age: 19, city: "Delhi"};

// let merge = {...user, ...info}
// console.log(merge);

// PROBLEM 10 — Rest Operator
// Create a function:
// function sum(...nums) { 
//   let result = 0;
//   for (let n of nums){
//     result += n;
//   }
//   return console.log(result); 

// }

// sum(1,2,2,3)

// PROBLEM 11 — Array Destructuring
// Given array:

// const arr = [10, 20, 30, 40];

// let [a,b,...rest] = arr;
// console.log(a)
// console.log(b)
// console.log(rest)

// PROBLEM 12 — Object Destructuring
// Given:

// const user = {name: "Build", age: 20, city: "Delhi"};
// let {name, age,...rest} = user;

// console.log(user);
// console.log(name);
// console.log(age);
// console.log(rest);
