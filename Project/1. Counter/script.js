
const decreaseBtn = document.getElementById("btn1");
const resetBtn = document.getElementById("btn2");
const incrementBtn = document.getElementById("btn3");
const countLabel = document.getElementById("myCount")

let count = 0;

incrementBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}