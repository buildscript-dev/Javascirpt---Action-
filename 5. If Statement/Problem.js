let prompt = require('prompt-sync')();
// let input = Number(prompt("Enter a number: "));


// Problem 1 — Basic Condition
// Write an IF–ELSE that prints:
// "POSITIVE" if number > 0
// "NEGATIVE" if number < 0
// "ZERO" otherwise


// if(Number.isNaN(input)){
//   console.log("Invalid Input...")
// }
// else if(input > 0){
//   console.log("POSITIVE");
// }
// else if (input<0){
//   console.log("NEGATIVE");
// }
// else{
//   console.log("ZERO");
// }

// Problem 2 — Even or Odd
// Take a number and print:
// "EVEN"
// "ODD"
// But do not use % operator (senior trick).

// if(Number.isNaN(input)){
//   console.log("Invalid Input....");
// }
// else if(input / 2 === Math.floor(input /2)){
//   console.log("EVEN");
// }
// else{
//   console.log("ODD")
// }

// Problem 3 — Find Largest of Two
// Given a and b, print the larger one.
// But do not use Math.max.

// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter a number: "));

// if(Number.isNaN(a, b)){
//   console.log("Invalid Input...");
// }
// else if(a>b){
//   console.log(`a is greater which is ${a}`);
// }
// else if (a<b){
//   console.log(`b is greater which is ${b}`);
// }
// else{
//   console.log(`Both a and b are same.`);
// }

// Problem 4 — Grade Calculator
// Given a score:
// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// else → "FAIL"
// Use only IF–ELSE.

// if(Number.isNaN(input)){
//   console.log("Invalid Input....");
// }
// else if(input >= 90 && input <= 100){
//   console.log("A");
// }
// else if(input >= 80 && input <=89){
//   console.log("B");
// }
// else if(input >= 70 && input <=79){
//   console.log("A");
// }
// else if(input >= 0 && input <=69){
//   console.log("FAIL");
// }
// else{
//   console.log(`Score cann't be ${input}`);
// }

// Problem 5 — Login System
// If username is "admin" and password is "1234", print "Login Successful".
// Else print "Access Denied".

// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");

// if(username === 'admin'){

//   if(password == "1234"){
//     console.log("Login Successful.")
//   }
//   else{
//     console.log("Password Mismatch..");
//     console.log("Access Denied");
//   }
// }
// else{
//   console.log("Username not exist");
// }

// Problem 6 — Check Triangle Type
// Given three sides:
// All equal → "Equilateral"
// Any two equal → "Isosceles"
// All different → "Scalene"
// Use nested IF–ELSE.

// let sideA = Number(prompt("Enter Side A: "));
// let sideB = Number(prompt("Enter Side B: "));
// let sideC = Number(prompt("Enter Side C: "));

// // Validate inputs
// if (Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
//   console.log("Invalid Input...");
// }
// else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {
//   console.log("Not a valid triangle");
// }
// else if (sideA === sideB && sideB === sideC) {
//   console.log("Equilateral Triangle");
// }
// else if (sideA === sideB || sideB === sideC || sideC === sideA) {
//   console.log("Isosceles Triangle");
// }
// else if (
//   sideA**2 + sideB**2 === sideC**2 ||
//   sideB**2 + sideC**2 === sideA**2 ||
//   sideC**2 + sideA**2 === sideB**2
// ) {
//   console.log("Right-angled Triangle");
// }
// else {
//   console.log("Scalene Triangle");
// }

// Problem 7 — Leap Year Checker
// Given a year:
// If year is divisible by 400 → Leap
// Else if divisible by 100 → Not Leap
// Else if divisible by 4 → Leap
// Else Not Leap
// Pure IF–ELSE.

// let input = Number(prompt("Enter a number: "));

// if(Number.isNaN(input)){
//   console.log("Invalid Input...");
// }
// else if((input % 4 === 0 && input % 100 !== 0) || (input % 400 === 0)){
//   console.log("Leap Year");
// }
// else{
//   console.log("Not Leap Year");
// }

// Problem 8 — Password Strength Checker
// Given password string:
// length < 6 → "Weak"
// length 6–10 → "Medium"
// contains numbers + letters + symbols → "Strong"
// Hint: Use IF + includes().

// let input = prompt("Enter your password: ");

// let hasLetter = /[a-zA-Z]/.test(input);
// let hasNumber = /[0-9]/.test(input);
// let hasSymbol = /[^a-zA-Z0-9]/.test(input);

// if(input.length < 6){
//   console.log(`${input} is weak password.`);
// }
// else if(input.length >= 6 && input.length <= 10){
//   console.log(`${input} is medium password.`)
// }
// else if(input.length >= 11 &&   (
//     (hasLetter && hasNumber) ||
//     (hasLetter && hasSymbol) ||
//     (hasNumber && hasSymbol)
//   )
// ){
//   console.log(`${input} is strong password.`)
// }
// else{
//   console.log("Unpredicted Error...");
// }

// Problem 9 — Billing System
// Given:
// If amount < 500 → 0% discount
// If 500–1000 → 10% discount
// If >1000 → 20% discount
// Print final price.

// let amount = Number(prompt("Enter your amount: "))

// if(Number.isNaN(amount)){
//   console.log("Invalid Input....");
// }
// else if(amount<500){
//   console.log(`In amount ${amount} we don't have discount....`);
// }
// else if(amount> 500 && amount <1000){
//   console.log(`You get 10% discount in this bill amount.`)
//   console.log(`Your total amount after discount:${amount - amount * 0.10}`)
// }
// else if(amount>1000){
//   console.log(`You get 20% discount in this bill amount.`);
//   console.log(`Your total amount after discount: ${amount - amount *0.20}`);
// }
// else{
//   console.log("Unexpected Error...");  
// }

// console.log("Plz, Visit again...")
// console.log("Have a good day...");


// Problem 10 — Nested IF: ATM Simulation
// Given:

// let balance = 5000;
// let pin = 1234;
// let enteredPin = Number(prompt("Enter PIN: "));

// if(Number.isNaN(enteredPin)){
//   console.log("Invalid Input....");
// }
// else if(enteredPin === pin){
//   console.log("Welcome, Build")
//   let withdraw = Number(prompt("Enter withdraw amount: "));
//   if(balance>=withdraw){
//   console.log(`Successfully withdrawl ${withdraw}`)
//   console.log(`Remaining Balance is ${balance-withdraw}`);
//   }
//   else if(balance<withdraw){
//   console.log(`Insufficient Balance`)
//   }
//   else{
//     console.log("Unexpected Error...");
//   }
// }
// else{
//   console.log("Incorrect PIN");
// }

// Problem 11 — Traffic Light System
// Input light color:
// "red" → "STOP"
// "yellow" → "READY"
// "green" → "GO"
// Anything else → "INVALID COLOR"
// Use IF–ELSE–IF cleanly.

// let input = prompt("Enter the color: ");

// if(input.toLowerCase() === "red"){
//   console.log("STOP");
// }
// else if(input.toLowerCase() === "yellow"){
//   console.log("READY")
// }
// else if(input.toLowerCase() === 'green'){
//   console.log("GO")
// }
// else{
//   console.log("INVALID COLOR");
// }

// Problem 12 — Salary Tax Calculator
// Given salary:
// <= 2,50,000 → 0% tax
// 2,50,001–5,00,000 → 5%
// 5,00,001–10,00,000 → 20%
// 10,00,000 → 30%

// let salary = Number(prompt("Enter your salary: "));

// if(Number.isNaN(salary)){
//   console.log("Invalid Input...")
// }
// else if(salary <= 250000){
//   console.log("You don't have to pay tax.")
// }
// else if(salary>=250001 && salary<= 500000){
//   console.log("You have to pay 5% tax.")
//   console.log(`Tax amount: ${salary * 0.05}`);
// } 
// else if(salary>=500001 && salary <= 1000000){
//   console.log("You have to pay 20% tax.")
//   console.log(`Tax amount: ${salary * 0.2}`);
// }
// else{
//   console.log("You have to pay 30% tax.")
//   console.log(`Tax amount: ${salary * 0.3}`);
// }

// Problem 13 — Advanced Pattern
// Given age:
// < 13 → "Child"
// 13–19 → "Teen"
// 20–59 → "Adult"
// 60+ → "Senior"
// But:
// Implement WITHOUT else if. ONLY if and else.

// let age = Number(prompt("Enter your age: "));

// if (age > 12){
//   if(age <= 19){
//     console.log("Teen")
//   }
//   else{
//     if (age<= 59){
//       console.log("Adult");
//     }
//     else{
//       console.log("Senior");
//     }
//   }
// }
// else{
//   console.log("Child")
// }

// Problem 14 — Complex Validation
// Given:

// let email = prompt("Enter your email: ").trim();

// if (!email.includes("@")) {
//   console.log("Invalid Email");
// } else {
//   let password = prompt("Enter your password: ");

//   let hasLetter = /[a-zA-Z]/.test(password);
//   let hasNumber = /[0-9]/.test(password);
//   let hasSymbol = /[^a-zA-Z0-9]/.test(password);

//   let typesCount = (hasLetter ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1 : 0);

//   if (password.length < 6) {
//     console.log("Weak Password — too short");
//   } else if (typesCount >= 2) {
//     console.log("Welcome, Build");
//   } else {
//     console.log("Weak Password");
//     console.log("Try Again...");
//   }
// }

// Problem 15 — Multi-Level Access Control (Hard)
// Given:
// let role;
// let isActive = false;
// let years;

// if (isActive){
//   role = prompt("Enter you role: ").toLowerCase();
//   if(role === "admin"){
//     console.log("Welcome admin,");
//     console.log("Access all data.");
//   }
//   else if(role === "manager"){
//     years = prompt("Enter you experience: ")
//     if(years >= 2){
//       console.log("Manager Access Granted.");
//     }
//     else{
//       console.log("Experience Too Low");
//     }
//     }
//   else{
//       console.log("Basic Access");
//     } 
//   }
// else{
//   console.log("Account Disabled");
// }