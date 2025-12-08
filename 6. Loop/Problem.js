// Problem 1 — Print 1 to 10
// Using a for loop, print numbers from 1 to 10.

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// Problem 2 — Print Even Numbers (1–50)
// Use a loop, but no % operator allowed, same as earlier trick.

// for (let i = 2; i <=50; i+=2){
//   console.log(i);
// }

// Problem 3 — Sum of First N Numbers

// let count = 0;
// for (let i = 1;  i<=10; i++){
//   count+=i;
// }
// console.log(`The sum of Nth Number: ${count}`);

// Problem 4 — Print Multiplication Table

// let table = 10;
// for(let i =1; i<=10; i++){
//   console.log(`${table} x ${i} = ${table*i}`);
// }

// Problem 5 — Reverse Loop
// Print numbers from 50 → 1 using a while loop.

// for (let i = 50; i >=1; i--){
//   console.log(i);
// }

// Problem 6 — Count Digits
// Input: 23456
// Output: 5
// Use a loop (not built-in .length).

// let input = 23456;
// let num = input;
// let count = 0;

// for(; num > 0; num = Math.floor(num /10)){
//   count++;
// }
// console.log(`Total Digit in ${input}: ${count}`);

//Problem 7 — Factorial
// Input: 5
// Output: 120
// Use loop, NOT recursion yet.

// let input = 5;
// let count = 1; 
// for(let i = 1; i <=input; i++){
//   count*=i
// }
// console.log(`The Factorial of ${input} is ${count}`);

// Problem 8 — Reverse a Number
// Input: 1234
// Output: 4321
// (Must use loop and arithmetic, no .split.)

// let input = 12345;
// let num = input;
// let reversed = 0;

// for (; num > 0; num = Math.floor(num/10)){
//   let digit = num % 10;
//   reversed = reversed * 10 + digit;
// }

// console.log(`Reversed number of ${input}: ${reversed}`);

