const prompt = require('prompt-sync')();

let numbers = [];
let count = 0;

while (true) {
  let rawInput = prompt("Enter a number: ");
  let input = Number(rawInput);

  if (Number.isNaN(input)) {
    console.log("Invalid input!");
    continue;
  }

  if (numbers.includes(input)) {
    console.log("Repeated number!");
  } else {
    numbers.push(input);
    count++;
    console.log(`Count: ${count}`);
    console.log("Pass (stored successfully)");
  }
}
