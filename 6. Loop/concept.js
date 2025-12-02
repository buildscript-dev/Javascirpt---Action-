let prompt = require('prompt-sync')();

// // Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”


// let age = Number(prompt("Enter your age: "))

// if (age >= 18){
//   console.log("Eligible to vote...")
// }
// else{
//   console.log("Not Eligible to vote...")
// }


// Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

let table = Number(prompt("Enter a number: "));

for(i = 1; i < 11; i++){

  console.log(`${table} * ${i} = ${table * i}`)
}