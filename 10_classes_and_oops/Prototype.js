// let myName = "Adnan      ";
// let myChannel = "chai";
// // console.log(myName.truelength);   // undefined
// console.log(myName.trim().length); // 5 {remove empty spaces}

// console.log(myName.trueLength); //

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};


Object.prototype.hitest = function(){
    console.log("Hitesh is presented in all objects");
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)                       
}
// heroPower.hitest();
myHeros.hitest();
myHeros.heyHitesh();
// heroPower.heyHitesh();




// Inheritance

// Old Synatax {Prototypal Inheritance}

const User = {
  name: "Chai",
  email: "chai@google.com",
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport ={
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime : true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax of {Prototypal Inheritance}

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function (){
  console.log(`${this}`)
  console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"Adnan".trueLength()
"Muhammad_Shami".trueLength()