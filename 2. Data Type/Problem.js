// Problem 1 — TDZ (Temporal Dead Zone)

// What happens?

// console.log(a); // Throws an error because we had called the variable a before the initialization of the variable.
// let a = 10;


// Teaches:
// Why let is hoisted but not initialized → TDZ.
// Beginners think this prints undefined. It doesn’t.

// Problem 2 — Shadowing Surprise

// Explain output:

// let x = 5; // let is blocked scoped, so we cann't call it outside from his boundery.

// function run() {
//   console.log(x);  // TDZ
//   let x = 20;  // Late initialized
// }

// run();


// Teaches:
// Inner let x stops outer scope from being accessed.

// Problem 3 — Reassignment vs Mutation

// What will be logged?

// const user = {coins: 5};
// user.coins = 10; //  mutation allowed, here the properties change
// console.log(user);

// user = {coins: 20}; // Reassignment not allowed


// Teaches:
// const protects binding, not object.

// Problem 4 — Implicit Globals

// What is the output?

// function f() {
//   x = 10;
// }
// f();
// console.log(x);


// Teaches:
// Assigning undeclared variable → created as global (in sloppy mode).

// Problem 5 — typeof Weirdness

// Explain why this is true:

// console.log(typeof null === "object");


// Teaches:
// A bug in JS since 1995 — still kept for backward compatibility.

// Problem 6 — Hoisting Priority

// Predict output:

// console.log(a); //Undefined
// var a = 10;

// console.log(b); // TDZ
// let b = 20; // // Late initialized


// Teaches:
// var hoisted to undefined
// let hoisted but not initialized → TDZ error.

// Problem 7 — Block Scope Mastery

// Explain final value of x:

// let x = 1;

// {
//   var x = 2;
// }

// console.log(x); // 2 because because var overwrite the let x's value. 

// Teaches:
// var does not respect block scopes → overwrites outer.

// Problem 8 — const with Objects

// Predict outputs:

// const arr = [1,2,3];
// arr.push(4); // mutation is allowed
// console.log(arr);

// arr = [5,6]; // reassignment not allowed

// Teaches:
// const only locks variable binding, not internal data.

// Problem 9 — Difference Between == and ===

// Why does this happen?

// console.log(0 == "0"); // Checks the value are equal
// console.log(0 === "0"); // Checks the value are equal along with the data type.

// console.log(null == undefined); // Because value are not exist.
// console.log(null === undefined); // Same but difference in data type. 


// Teaches:
// Abstract equality algorithm behavior — often misunderstood.

// Problem 10 — The Number Trap

// What is output?

// console.log(NaN === NaN); // NaN represents an invalid number, and JavaScript defines it as never equal to anything — including itself.
// console.log(Object.is(NaN, NaN)); // Object.is handles NaN as equal


// Teaches:
// Why NaN is not equal to itself — IEEE 754 standard.

// Problem 11 — Pass by Value vs Reference

// Explain:

// let x = 5;

// function update(y) {
//   y = 10;
// }

// update(x);
// console.log(x);


// Teaches:
// JavaScript always passes values, not references.

// Problem 12 — Copying Objects Wrong

// What happens here?

// const a = {score: 1};
// const b = a;

// b.score = 999; // Here the reference pass to a.

// console.log(a.score);


// Teaches:
// Shallow copy vs reference copy — real production bug source.

// Problem 13 — typeof Mysteries

// Explain:

// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof undefined);
// console.log(typeof null);


// Teaches:
// typeof inconsistencies and historical design flaws.

// Problem 14 — Destructuring with Defaults

// What will log?

// const obj = {a: 10};

// const {a, b = 20} = obj;

// console.log(a, b);


// Teaches:
// Default values only used when property is undefined (not missing!).

// Problem 15 — Freezing vs Sealing vs Preventing Extensions

// Consider:

// const data = {x: 1};

// Object.freeze(data);
// data.x = 100;   // ?
// data.y = 200;   // ?

// console.log(data);


// Then:

// const profile = {name: "Build"};
// Object.seal(profile);
// delete profile.name; // ?


// Teaches:
// Deep knowledge of object mutability control, something senior devs learn late.