// singleton {through constructor method}
// object.create

// object Literals
// this the way to declare the object

// With symbol datatype
const mySym = Symbol("key1")

// Object Literal to declare the object
const JsUser = {
  name: "Adnan",
  "full name": "Adnan Yousaf", // if I enter the key with this way then we must 
  // call specific value through {console.log(JsUser["full name"])}
  age: 20,
  [mySym]: "mykey1",
  location: "Lahore",
  email: "adnan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// these are the two ways to access the email
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "adnan726@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "adnan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Js Users")
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());