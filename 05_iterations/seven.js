const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Maps

// const newNum = myNumbers.map( (num) =>{ return num + 10}) // when you open the scope then must add return keyword


// this is the chaining way and we can use simultaneously map and filter at once
const newNum = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter( (num) => num >= 40)

console.log(newNum)