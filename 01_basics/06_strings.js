const name = "Adnan";
const repoCount = 5;

// console.log(name + repoCount + " Values") // old syntax and it not appericatable

// string interpolation is the modern way to write the syntax 
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Adnan-Yousaf-Barkat');
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

// in substring we cannot give negative values
const newString = gameName.substring(0,4) // last digit value not include
console.log(newString)

// But in slice we can give negative values (reverse start the order) and we can start from end
const anotherString = gameName.slice(-12, 6);
console.log(anotherString)
console.log(gameName.length)

// trim method
const newStringOne = "     adnan@gmail.com   "
console.log(newStringOne)
console.log(newStringOne.trim())



const url = "https://hitesh.com/hitesh%30chodary"
console.log(url.replace('%30', '-'))
console.log(url.includes('sundra'))

// we can split on the basis of space or dash or one the bases of any value
console.log(gameName.split('-'));