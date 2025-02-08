// Arrays

const myArray = [0, 1, 2, 3, 4, 5];
// console.log(myArray[0])

const myHerros = ["Amir", "Bilgates"];

const myArray2 = new Array(0, 1, 2, 3);

// Arrays Methods

// myArray.push(8)
// myArray.push(9);
// // myArray.pop();

// myArray.unshift(89) // add any value at the beginning of the array
// myArray.shift(); // Remove any value at the beginning of the array

// console.log(myArray.includes(9)); // this method check that this value exist in the array or not Answer in Boolean
// console.log(myArray.indexOf(19));  //if out of the array value then output always -1
// console.log(myArray.indexOf(1));  // Show the proper index that where the value is { output will be 1}

// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray)
// console.log(typeof myArray)



// slice, splice

console.log("A", myArray);
const myn1 = myArray.slice(1, 3); //  1, 2 ] this method dont take last value

console.log("B", myArray);
console.log(myn1);

const myn2 = myArray.splice(1, 3);  // 1, 2, 3 ] this method take last value even
console.log("C", myArray)
console.log(myn2);