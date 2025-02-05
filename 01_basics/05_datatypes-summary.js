// primitive data types


const outsideTemperature = null
let userEmail

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

// const bigNumber = 456543254326n;



// Reference (Non Primitive)
// array, object and function

const heros = ["Shaktiman", "nagraj", "doga"];
let myObj ={
    name: "Adnan",
    age: 22
}

const myFunction = function(){
console.log("Hello World")
}

console.log(typeof anotherId)


/////////////////////////////////////////////////////////////////////////

// Stack (primitive)   -   Heap (Non-primitive)


// Stack (primitive) 
let myName = "Adnan"
let anotherName = myName
anotherName = "Chai aur Code"
console.log(anotherName)
console.log(myName)


//Heap (Non-primitive)
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "adnan@google.com"

console.log(userOne.email)
console.log(userTwo.email)