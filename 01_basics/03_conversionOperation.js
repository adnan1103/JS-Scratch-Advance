// let score = "33abc" // NAN
// let score = null; // 0
// let score = undefined;  // NAN
// let score = true; // 1
let score = "adnan";

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

let someNumber = 33;

let someString = String(someNumber);
// console.log(someString);
// console.log(typeof someString)

//*********************Operations********** *//

let value = 3;
let negValue = -value;
console.log(negValue);

// these are the basics math operations
// console.log(2*2)
// console.log(2**3) // 2 power 3

let str1 = "hello";
let str2 = " adnan";

// let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "3");
// console.log("1" + 3 + 3);
// console.log(1 + 3 + "3");

console.log(+true);
console.log(+"");

// Postfix
//x++, the increment operator increments and {returns the value {before incrementing}}.
let gameCounter = 100;
let y = gameCounter++; //returns the value {before incrementing}
console.log(`gameCounter value is ${gameCounter}, y value is ${y}`); // output gameCounter value is 101, y value is 100

// Prefix
//++x, the increment operator {increments and returns the value after incrementing}..
let gameCounter2 = 100;
let y2 = ++gameCounter2; // increments and returns the value after incrementing
console.log(`gameCounter value is ${gameCounter2}, y value is ${y2}`); // output gameCounter value is 101, y value is 101
