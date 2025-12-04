let prompt = require('prompt-sync')();
let userInput = prompt("Enter a number: ")
for(let i = 1; i <= userInput; i++){
  console.log("*".repeat(i));
}
