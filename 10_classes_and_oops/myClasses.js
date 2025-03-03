// ES6

// These all are after ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptedPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("Chai", "chai@gmail.com", "123");

// console.log(chai.encryptedPassword())

// console.log(chai.changeUsername());


//////////////////////////////////////////////////////////////////////
// Behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptedPassword = function () {
  return `${this.password}abc`;
};

User1.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User1("tea", "tea@gmail.com", "123");

console.log(tea.encryptedPassword());
console.log(tea.changeUsername());