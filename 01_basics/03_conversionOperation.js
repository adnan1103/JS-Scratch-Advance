// let score = "33abc" // NAN
// let score = null; // 0
// let score = undefined;  // NAN
// let score = true; // 1
let score = "adnan"

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score); 
// console.log(typeof valueInNumber)
// console.log(valueInNumber);

// "33" => 33
// "33abd" => NAN
// true => 1, false => 0

// let isLoggedIn = 0 // false {after conversion from number to boolean}
// let isLoggedIn = 1 // true {after conversion from number to boolean}
// let isLoggedIn = "" // false {after conversion from empty string to boolean}
// let isLoggedIn = "adnan" // true {after conversion from string to boolean}

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


let someNumber = 33

let someString = String(someNumber);
console.log(someString);
console.log(typeof someString)
