
function sayMyName() {
    console.log("A")
    console.log("D")
    console.log("N")
    console.log("A")
    console.log("N")
    console.log("Y")
    console.log("O")
    console.log("U")
    console.log("S")
    console.log("A")
    console.log("F")

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result  

    return number1 + number2
}


// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sohail") {
    if (!username) {
        console.log("Please enter the username")
        return
    }
    return ` ${username} just logged in`

}

// console.log(loginUserMessage("Adnan"))
// console.log(loginUserMessage())

// Rest operator
function calculateCartPrice(val1, val2, ...num5) { // get value from API and pass in the function or any where else with the help of rest operator
    // console.log(val1, val2)
    return num5
}

// console.log(calculateCartPrice(200, 400, 100, 6000, 5000))


// With Object functions handling
const user = {
    username: "Adnan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "Usama",
//     price: 220
// })



// With Array functions handling
const myNewArray = [ 200, 4000, 60, 7000, 891]

function returnSecondValue(getArray){
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([ 200, 4000, 60, 7000, 891]))