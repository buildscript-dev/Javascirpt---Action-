let prompt = require('prompt-sync')();
// 1. Grade Calculator
// Take a score from the user and print:
// 90–100 → "A"
// 75–89 → "B"
// 60–74 → "C"
// 40–59 → "D"
// 0–39 → "Fail"
// Handle invalid input also.

// const score = prompt("Enter your score: ");

// if (score >= 90){
//   console.log("A");
// }
// else if(score >= 75){
//   console.log("B");
// }
// else if(score >= 60){
//   console.log("C");
// }
// else if(score >= 40){
//   console.log("D");
// }
// else if(score > 0){
//   console.log("Fail");
// }
// else{
//   console.log("Invalid Input");
// }

// 2. Login System (String Compare)
// Ask for username & password.
// If username is "admin" and password is "1234", print "Login Successful"
// Else print "Access Denied".
// (Use strict comparison)

// let user_name = prompt("Enter username: ")
// let password = Number(prompt("Enter your password: "))

// if(user_name === "admin" && password === 1234){
//   console.log("Login Successful");
// }
// else{
//   console.log("Login Failed");
// }

// 3. 3-Number Maximum
// Take 3 numbers from user.
// Print the largest one using only if/else (no Math.max)

// function max(a,b,c){

//   if(a>b && a>c){
//     console.log(`${a} is largest`);
//   }
//   else if(b>a && b>c){
//     console.log(`${b} is largest`);
//   }
//   else if(c>a && c>b){
//     console.log(`${c} is largest`);  
//   }
//   else{
//     console.log("Invalid Input");
//   }
// }

// max(12, 3, 1)

// 4. Character Type Identifier
// Input: a single character.
// Print:
// "Uppercase Letter"
// "Lowercase Letter"
// "Digit"
// "Special Character"
// Hint: Use ASCII ranges
// char >= 'A' && char <= 'Z', etc.

// let userTyped = prompt("Enter a character: ");
// let userInput = userTyped.charAt(0);

// if(userInput >= "A" && userInput <= "Z"){
//   console.log("Uppercase Letter");
// }
// else if(userInput >= "a" && userInput <= "z"){
//   console.log("Lowercase Letter");
// }
// else if(userInput >= "0" && userInput<="9"){
//   console.log("Digit");
// }
// else{
//   console.log("Special Character");
// }

// 5. Problem 5 — Calculator (switch)
// Ask:
// Enter number 1
// Enter number 2
// Choose operator (+, -, *, /, %)
// Use switch to perform the operation.
// Handle division by zero.

// let userFirst = Number(prompt("Enter first number: "))
// let userSecond = Number(prompt("Enter second number: "))
// let userOperator = prompt("Enter operation(+,-,*,/): ")

// if(userOperator == "+"){
//   userFirst + userSecond
//   console.log(`The sum of ${userFirst} and ${userSecond} is ${userFirst+userSecond}`);
// }
// else if(userOperator == "-"){
//   userFirst - userSecond
//   console.log(`The subtraction of ${userFirst} and ${userSecond} is ${userFirst-userSecond}`);
// }

// else if(userOperator == "*"){
//   userFirst * userSecond
//   console.log(`The product of ${userFirst} and ${userSecond} is ${userFirst*userSecond}`);
// }

// else if(userOperator == "/"){
//   userFirst / userSecond
//   console.log(`The division of ${userFirst} and ${userSecond} is ${userFirst/userSecond}`);
// }
// else{
//   console.log("Invalid Input");
    
// }


// Problem 6 — Truthy/Falsy Detector (Advanced)
// Take ANY input and check:
// If value is:
// empty string → print "Empty string"
// null / undefined → "No value"
// number 0 → "Zero"
// NaN → "Not a number"
// else → "Truthy value"

// userInput = prompt("Enter any value: ")
// if(userInput === ""){
// console.log("Empty String");
// }
// else if(userInput == null || userInput == undefined){
// console.log("No value");
// }
// else if(userInput == 0){
// console.log("Zero");
// }
// else if(userInput == NaN){
// console.log("Not a number");
// }
// else{
//   console.log("Truthy value");
// }

// Problem 7 — Nested Login (Harder Logic)
// Ask: username password
// Steps:
// If username is wrong → "No such user"
// If username is correct but password is wrong → "Incorrect password"
// If both correct → "Welcome!"

// let userName = prompt("Enter your username: ")
// let password = prompt("Enter your password: ")

// let OriginalUserName = "Build";
// let OriginalPassword = "1234";

// if(userName === OriginalUserName){
//   console.log("Username Matched");
//   if(password !== OriginalPassword){
//     console.log("Incorrect Password");
//   }
//   else{
//     console.log("Password Matched")
//     console.log(`Welcome, ${userName}`)
//   }
// }
// else{
//   console.log("No such user");
// }


// Problem 8 — Ternary Challenge
// Convert the following IF into a single ternary expression:
// if(age >= 18){
//     if(age >= 60){
//        console.log("Senior citizen");
//     } else {
//        console.log("Adult");
//     }
// } else {
//     console.log("Minor");
// }

// let age = Number(prompt("Enter your age: "))
// let check = age >= 18 ? age>=60 ? "Senior citizen" : "Adult" : "Minor"

// console.log(check);


// Problem 9 — Short-Circuit Trick
// Write: let username = prompt("Enter username");
// Then print "Guest" if username is empty, using only:
// ||
// (no if, no ternary)3
// Example:
// console.log( username || "Guest" );
// But make it work correctly even if user enters spaces " " (treat as empty).

// let username = prompt("Enter username: ");
// let output = (username && username.trim()) || "Guest";
// console.log(output);

// Problem 10 — Guard Clauses (Important pattern)
// Write a function:
// function validateAge(age) { ... }
// Rules:
// if age is not a number → "Invalid input"
// if age < 0 → "Age can't be negative"
// if age < 18 → "Too young"
// else → "Access granted"
// Use early returns (guard clauses), not nested ifs.

// function validateAge(age){
//   if(age<0) return console.log("Age can't be negative.");
//   else if (age<18) return console.log("Too young.");
//   else if (isNaN(age)) return console.log("Invalid Input")
  
//     console.log("Access granted!!!!")
// }

// validateAge(-121)