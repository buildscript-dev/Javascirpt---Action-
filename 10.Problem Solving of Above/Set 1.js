let prompt = require('prompt-sync')();

// // 1. Print "JavaScript Mastery Begins!" in console.
// console.log("JavaScript Mastery Begins!");

// // 2. Create a variable myName and print
// let myName = prompt("Enter your name: ");
// console.log(`Hello Mr.${myName}.`)

// 3. Create three variables:
// one with let
// one with const
// one with var

// {let Name = "Build";
// console.log(Name)
// Name = "Script";
// console.log(Name)
// }
// // console.log(Name) // Cann't call outside the {}

// const pi = 3.14
// console.log(pi)
// // pi = 3.8 // Error 
// // console.log(pi)

// {
//   var age = 23
// console.log(`Your age is ${age}`)
// age = 20
// console.log(`Your age is ${age}`)
// }
// console.log(`Your age is ${age}`) // Can call outside the {}

// 4. Write a program that checks:
// If a number is positive,negative or zero.
// Use if / else if / else.

// let userNumber = Number(prompt("Enter number of your choice: "))

// if(userNumber > 0){
//   console.log("Positive");
// }
// else if (userNumber < 0){
//   console.log("Negative");
// }
// else if (userNumber === 0){
//   console.log("Zero");
// }
// else{
//   console.log("Invalid Number.");  
// }

// 5. Write a program that prints:
// "Even" if number is even
// "Odd" if number is odd

// let userNumber = Number(prompt("Enter number of your choice: "))

// if(userNumber % 2 == 0){
//   console.log("Even");
// }
// else if (userNumber % 2 != 0){
// console.log("Odd");
// }
// else{
//   console.log("Invalid Number.")
// }

// 6. Use nested if to check:
// Age < 13 → "Child"
// Age 13–19 → "Teenager"
// Age ≥ 20 → "Adult"

// let userNumber = Number(prompt("Enter your age: "))
// if(userNumber < 13){
//   console.log("Child");
// }
// else {
//   if(userNumber <= 19){
//   console.log("Teenager")
// }
// else{
//   console.log("Adult");
// }
// }

// 7. Use switch to print the day of the week:
// Input: 1 → Monday, 2 → Tuesday, … 7 → Sunday.

// let userNumber = Number(prompt("Enter a number btw (1-7): "))

// switch(userNumber){
//   case 1: 
//   console.log("Monday");
//   break;
//   case 2: 
//   console.log("Tuesday");
//   break;
//   case 3: 
//   console.log("Wednesday");
//   break;
//   case 4: 
//   console.log("Thusday");
//   break;
//   case 5: 
//   console.log("Friday");
//   break;
//   case 6: 
//   console.log("Saturday");
//   break;
//   case 7: 
//   console.log("Sunday");
//   break;
//   default:
//   console.log("Invaid Input...")
// }

// 8. Rewrite this IF using ternary:
// if(score >= 40){
//   result = "Pass";
// } else {
//   result = "Fail";
// }

// let score = Number(prompt("Enter your score: "))
// let ternary = score >= 40 ? "Pass" : "Fail"
// console.log(`You are ${ternary}`)

// 9. Check if a value is truthy or falsy and print result.

// let userInput = prompt("Enter any things: ")
// if(userInput){
//   console.log("True");
// }
// else{
//   console.log("False");
  
// }

// 10. Write a function max(a, b) using only if/else, no Math.max.
// function max(a, b){
//   if(a>b){
//     console.log(`${a} is greater`);
//   }
//   else if(b>a){
//   console.log(`${b} is greater`);
//   }
//   else if(a===b){
//   console.log(`Both ${a} and ${b} are equal`);
//   }
//   else{
//     console.log("Check is there is any issue...");
//   }
// }

// max("52",52)