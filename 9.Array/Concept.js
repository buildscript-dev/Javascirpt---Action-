

// let fruits = ['apple', 'banana', 'mango'];
let fruits = ['mango', 'banana', 'mango', 'apple'];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
fruits.push("coconut"); // Add element in the last
console.log(fruits);
fruits.pop(); // Remove element in the last
console.log(fruits);
fruits.unshift("kiwi"); // Add element in the first
console.log(fruits);
fruits.shift(); // Remove element in the first
console.log(fruits);
console.log(fruits.indexOf('banana')); // Find index value from the first.
// console.log(fruits.lastIndexOf('mango')); // Find index value from the last.
// console.log(fruits.includes('mango'))
console.log(fruits.join("-")); // Converts array to stirng with a sperator
console.log(fruits.toString(",s")); // Converts array to comma-separated string
console.log(fruits.slice(1,3)); // Return a new arrays(does not modify original)
console.log(fruits.splice(2,1)); // add/remove element( modifies original)
