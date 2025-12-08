// Problem 1 — Create a Basic Class
// Create a class Person with:
// property: name
// method: sayHello() → prints "Hello, my name is <name>"
// Create 2 objects and call the method.

// Problem 2 — Add Constructor
// Rewrite Person so the constructor accepts:
// new Person("Build")
// and stores the name.

// class Person{
//   constructor(name){
//     this.name = name;
//   }
//   sayHello(){
//     console.log(`My name is ${this.name}`);
//   }
// }

// const person1 = new Person("Build")
// const person2 = new Person("Script")
// person1.sayHello();
// person2.sayHello();

// Problem 3 — Add Multiple Properties
// Add:
// age
// city
// Add a method:
// info() → prints "Name: X, Age: Y, City: Z"

// class Multiple{
//   constructor(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city =city;
//   }

//   info(){
//     console.log(`Hey, I'm ${this.name}`);
//   }
// }

// const multiple1 = new Multiple("Build", 20, "India")
// console.log(multiple1);
// multiple1.info();


// Problem 4 — Default Values in Constructor
// If someone creates:
// new Person()
// then default values should be:
// name = "Unknown"
// age = 0
// city = "N/A"

// class Default{
//   constructor(name = "Build", age = 20, city = "India"){
//     this.name =name;
//     this.age = age;
//     this.city = city;
//   }

//   info(){
//     console.log(`My name is ${this.name} and i'm ${this.age} old from ${this.city}`);
//   }
// }

// const check1 = new Default()
// const check2 = new Default("Script")
// const check3 = new Default(this.name = "Script")
// console.log(check1);
// console.log(check2);
// console.log(check3);
// check1.info();


// Problem 5 — Class Method vs Instance Method
// Create:
// a static method Person.countPeople()
// an instance method describe()
// Track how many objects created using a static counter.

class Instance{
  constructor(name){
    this.name = name;
  }

  info(){ // Instance method
    console.log(`My name is ${this.name}`);
  }
}

const insta = new Instance("Build");
insta.info();


class StaticExample {
  static add(a, b) {  // static method
    return a + b;
  }
}

console.log(StaticExample.add(5, 3)); 