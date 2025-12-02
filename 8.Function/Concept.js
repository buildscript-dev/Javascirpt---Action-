function greet() {
  console.log("Hello World");
}

greet();

function greet(name) {  // name is a parameter
  console.log("Hello " + name);
}

greet("Build"); // "Build" is an argument

function add(a, b) {
  return a + b;
}

let result = add(5, 4);
console.log(result);

let sum = function(a, b) {
  return a + b;
};

let multiply = (a, b) =>{
  return a * b
}

console.log(multiply(3,5));

let cube = n => n * n * n;
console.log(cube(3));

function total(...nums) {
  console.log(nums);
}

total(1, 2, 3, 4);


