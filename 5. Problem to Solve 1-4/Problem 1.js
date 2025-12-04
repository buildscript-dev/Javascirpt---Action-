

let userName;

document.getElementById("MyBtn").onclick = function(){
  userName = document.getElementById("MyText").value;
  document.getElementById("MyH1").textContent = `Hello, ${userName}`
}