// this user object we can say object Literals

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("get user details in database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise();
// const date = new Date();

function User2(){}

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`)
  };

  return this;
}

const userOne = new User("hitest", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne);
// console.log(userOne.constructor); // this give the reference to the constructor
// console.log(userTwo);

console.log(userOne instanceof User); // true
console.log(userOne instanceof User2); // false
console.log(userTwo instanceof Object); // true (because all objects are inherited from Object) 
