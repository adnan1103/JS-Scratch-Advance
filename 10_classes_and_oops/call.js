function SetUsername(username) {
    // Complex DB Call
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123#");
console.log(chai);



//// In Detail study about ----------this------- Keyword



// Role of this in JavaScript
// The this keyword in JavaScript refers to the object that is executing the current function. Its value depends on how and where the function is called.

// Why Use this?
// To refer to the current object inside methods.
// To avoid hardcoding object names.
// To make functions reusable in different contexts.
// 1. this in the Global Context
// In the global scope, this refers to:

// window (in browsers)
// global (in Node.js)

// console.log(this);  // In browser → Window {...}
// ✅ Inside a function in non-strict mode:


// function show() {
//     console.log(this); // Window (in browsers)
// }
// show();
// ❌ Inside a function in strict mode:


// "use strict";
// function show() {
//     console.log(this); // undefined
// }
// show();
// 2. this Inside an Object Method
// When this is used inside a method, it refers to the object that called the method.


// const person = {
//     name: "Ali",
//     greet: function () {
//         console.log("Hello, " + this.name);
//     }
// };

// person.greet(); // Hello, Ali
// ✅ Here, this.name refers to person.name.

// 3. this in a Constructor Function
// In a constructor function, this refers to the newly created object.


// function Person(name) {
//     this.name = name;
// }

// const user = new Person("Ahmed");
// console.log(user.name); // Ahmed
// ✅ this.name = name assigns the value to the new object.

// 4. this in a Class
// In ES6 classes, this works similarly to constructor functions.


// class Car {
//     constructor(model) {
//         this.model = model;
//     }
//     showModel() {
//         console.log(this.model);
//     }
// }

// const myCar = new Car("Toyota");
// myCar.showModel(); // Toyota
// 5. this in Arrow Functions
// Arrow functions don’t have their own this, they inherit this from their surrounding scope.


// const obj = {
//     name: "Ali",
//     show: () => {
//         console.log(this.name);
//     }
// };

// obj.show(); // undefined (because `this` refers to global scope)
// ✅ Fix: Use a regular function instead.


// const obj2 = {
//     name: "Ali",
//     show() {
//         console.log(this.name);
//     }
// };

// obj2.show(); // Ali
// 6. this in Event Listeners
// In event handlers, this refers to the element that received the event.


// document.getElementById("btn").addEventListener("click", function () {
//     console.log(this); // Refers to the button element
// });
// ✅ Fix for Arrow Functions (Using this from outer scope)


// document.getElementById("btn").addEventListener("click", () => {
//     console.log(this); // Window (inherits from outer scope)
// });
// 7. this with call(), apply(), and bind()
// Sometimes we need to manually set this:

// Using call()

// function greet() {
//     console.log("Hello " + this.name);
// }

// const user1 = { name: "Ali" };
// greet.call(user1); // Hello Ali
// Using apply() (Same as call() but with an array)

// greet.apply(user1); // Hello Ali
// Using bind() (Returns a new function)

// const greetAli = greet.bind(user1);
// greetAli(); // Hello Ali
// Summary
// Scenario	this refers to
// Global Scope	window (browser) / global (Node.js)
// Inside a function (non-strict)	window
// Inside a function (strict)	undefined
// Inside a method	The object calling the method
// Inside a constructor function	The newly created object
// Inside a class	The instance of the class
// Arrow function	Inherited this from parent scope
// Event listener	The element that triggered the event
// call(), apply(), bind()	Manually assigned this