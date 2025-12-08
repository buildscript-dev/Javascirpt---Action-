// Prototype - shared memory.....
// class Prototype{
//   constructor(name){
//     this.name = name;
//   }

//   walk(){
//     console.log(`${this.name} is walking}`);
//   }
// }

// let person = new Prototype("Build")
// person.walk(); 



// this keyword - special keyword 

// class ThisKeyword{
//   constructor(){

//   } 
// }


// class Animal {
//   constructor(){
//     this.hand = 2;
//     this.legs = 2;
//   }
// }

// class Kekda extends Animal {
//   constructor(){
//     this.legs = 8;
//     this.hand = 0;
//   }
//   susu(){}
// }


// const kekda = new Kekda()
// console.log(kekda());


// class Marker{}
// class BlueMarker extends Marker{};

class Animal {
  constructor(){
    this._age = 18;
    this._name = "private";
  }

  info(){
    console.log(`${this._name} is ${this._age}`);
  }

  get age(){
    return this._age = age;
  }
}

let a1 = new Animal();
console.log(a1._age = 27);
a1.info();
