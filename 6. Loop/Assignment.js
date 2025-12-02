// // 1. Print only even number from 1 to 20.
// for (let i = 2; i< 21; i+=2){
//     console.log(i);
// }

// // 2. Print numbers from 10 to 1 in reverse loop.

// for (let i = 10; i>0; i--){
//   console.log(i)
// }

// // 3. Print the word "Yes" 5 times.

// for (let i = 1; i < 6; i++){
//   console.log("Yes")
// }

// // 4. Print whether numbers from 1 to 10 are even and odd/

// for (let i = 1; i <11; i++){
//   if(i % 2 == 0){
//     console.log(`Even number: ${i}`);
//   }
//   else{
//     console.log(`Odd number: ${i}`);
    
//   }
// }

// 5. 
let prompt = require('prompt-sync')()


while(true){
  console.log("Check weather number is positive, negative or zero.")
  userInput = Number(prompt("Enter the number: "))
  
  if(userInput == "exit"|"Exit"){
    console.log("Have a nice day...");
    break;
  }
  else if(userInput > 0){
    console.log("Positive")
    break
  }
  else if(userInput < 0){
    console.log("Negative");
    break
  }
  else if(userInput == 0){
    console.log("Zero")
    break
  }
  else{
    console.log("Invalid Prompt");
    break
    
  }

}