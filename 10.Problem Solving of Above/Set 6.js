// PROBLEM 1 - Print numbers 1 to 10 using for.

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

//PROBLEM 2 - Print even numbers 1 to 20 using while.

// let i = 1;
// while (i <= 20){
//   console.log(i);
//   i++;
// }

// PROBLEM 3 - Print numbers 10 to 1 (reverse) using for.

// for (let i = 10; i>=1; i--){
//   console.log(i);
// }

// PROBLEM 4 - Using for…of, print all values in:
// const arr = [5, 10, 15, 20, 25];

// for(let items of arr){
//   console.log(items);
// }

// PROBLEM 5 - Using for…in, print keys and values of:
// const user = {name: "Madara", age: 20, city: "Delhi"};
// for(let key in user){
//   console.log(key,user[key]);
// }

// PROBLEM 6 - Print this pattern using loops:

// for(let i = 1; i <=5; i++){
//   console.log("*".repeat(i))
// }

// PROBLEM 7 - Take a user number and print its multiplication table from 1 to 10.

let prompt = require('prompt-sync')();

// for(let i = 1; i <= 10; i++){
//     console.log(`${userInput} x ${i} = ${userInput*i}`);
// }
  
// PROBLEM 8 - Using do…while:
// Keep asking password until user enters "1234".

// let userInput;

// do {
//   userInput = prompt("Enter a number: ");
  
//   if (userInput !== "1234") {
//     console.log("Failed to Crack...");
//   }

// } while (userInput !== "1234");

// console.log("Successfully Cracked!");

// PROBLEM 9 - Sum numbers from 1 to 100.

// let count = 0;
// for(let i = 1; i <= 100; i++){
//   count += i;
//   console.log(count);
// }

// PROBLEM 10 - Using break:
// Loop from 1 to 20 → stop when number is 7.

// for(let i = 1; i <= 20; i++){
//   console.log(i)
//   if(i === 7){
//     break
//   }
// }