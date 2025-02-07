const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8996;

console.log(otherNumber.toPrecision(4)); // 123.9
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)); // from this method we change the sign of negative number output is 4
//  console.log(Math.round(4.6))
//  console.log(Math.ceil(4.9)); // always 5
//  console.log(Math.floor(4.1)); // always 4
//  console.log(Math.min(5,3,7,4,8));
//  console.log(Math.max(5,3,7,4,8));

console.log(Math.random()); // In random property value in between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
