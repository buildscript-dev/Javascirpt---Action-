// Problem 1
// Declare one variable of each primitive type.

// let name = "build"

// Problem 2
// Check the typeof of:
// 42, "hello", true, null, undefined, {}
// (and print them)

// console.log(typeof(42));
// console.log(typeof("hello"));
// console.log(typeof(true));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof({}));

// Problem 3
// Convert the following values explicitly using Number():
// "123"
// "12abc"
// true
// false
// null
// undefined

// let number = Number("123");
// console.log(number);
// console.log(typeof(number));

// let semiNumber = Number("12abc");
// console.log(semiNumber);
// console.log(typeof(semiNumber));

// let booleanT= Number(true);
// console.log(booleanT);
// console.log(typeof(booleanT));

// let booleanF = Number(false);
// console.log(booleanF);
// console.log(typeof(booleanF));

// let nullValue = Number(null);
// console.log(nullValue);
// console.log(typeof(nullValue));

// let undefinedValue = Number(undefined)
// console.log(undefinedValue);
// console.log(typeof(undefinedValue));

// Problem 4
// Write a program that checks if user input is:
// a number
// a string
// or something else
// Use typeof.

// let userInput = prompt("Enter something:");


// if (userInput === null) {
//   console.log("User cancelled input");
// }
// else {
//   // Try converting to a number
//   let converted = Number(userInput);

//   if (!isNaN(converted) && userInput.trim() !== "") {
//     console.log("It is a number");
//   }
//   else if (typeof userInput === "string") {
//     console.log("It is a string");
//   }
//   else {
//     console.log("Something else");
//   }
// }


// Problem 5

// Check if "5" == 5 and "5" === 5
// Print why they are different.

// one only check is the things are same. second check is the things + the data type is same.

// Problem 6
// Convert these values to boolean using Boolean():
// 0
// 1
// -1
// ""
// "hello"
// null
// undefined

// function booleanChecker(value){
//   let result = Boolean(value);
//   console.log(result, typeof result);
  
// }

// booleanChecker(undefined)

// Problem 7
// Create a BigInt and add it with another BigInt.

// let a = 2132132131231221321
// let b = 1232132131231231233
// console.log(a+b)

// // Problem 8
// Create a Symbol and use it as a key in an object.

// let symbol = "⭐";
// let details = {
//   name: symbol,
//   age: 25,
//   idAdmin: true
// }
// console.log(details);

// Problem 9
// Check if a number is NaN using Number.isNaN().
// (Hint: "abc" → Number("abc") → NaN)

// let userInput = Number(prompt("Enter something: "));

// if (Number.isNaN(userInput)) {
//   console.log("This is NaN");
//   console.log(typeof userInput);
// } else {
//   console.log(userInput);
//   console.log(typeof userInput);
// }

// Problem 10
// Show an example where implicit type coercion gives a weird result:
// E.g.:
// [] + []
// [] + {}
// {} + []
// true + "10"


// Print explanation.

// Problem 11

// Take input from user and check if it is:

// truthy

// or falsy
// (But treat whitespace " " as falsy too.)

// Problem 12

// Explain the difference between primitive and reference types with a code example.