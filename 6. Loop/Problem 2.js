// 1. Print Numbers 1 to 20 (Easy)
let prompt = require('prompt-sync')();
let userInput = Number(prompt("Enter your number: "));

let i = 1;

// while(i < 21){
//   process.stdout.write(i + " ");
//   i++;
// }

// 2. Sum of First N Numbers (Easy–Medium)

let count = 0;

while (i <= userInput) {
  process.stdout.write(i.toString());

  if (i < userInput) {
    process.stdout.write(" + ");
  }

  count += i;
  i++;

}

process.stdout.write("\n");
console.log(`The sum of ${userInput}th term is ${count}`);

// 3. Reverse a Number (Medium)
