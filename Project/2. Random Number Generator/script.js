
const myButton = document.getElementById("myBtn");
const myText = document.getElementById('myText')
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
  randomNum = Math.floor(Math.random() * max)+ min;
  myText.textContent = randomNum
}