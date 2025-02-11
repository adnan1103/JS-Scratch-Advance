const user = {
    username: "Adnan",
    price: 999,
    WelcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// Now current context is same
// user.WelcomeMessage()
// user.username = "Mohsine" // Now context{context means values where data hold in variables} is change
// user.WelcomeMessage()

// console.log(this)

// function chai (){
//     let username = "Sufeean"
//     console.log(this.username)
// }
// chai()

// function chai (){
//     let username = "Sufeean"
//     console.log(this.username) // undefined

// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)  // Implicit return
const addTwo = (num1, num2) => ({username: "Adnan"})  // Implicit return {return Object}
console.log(addTwo(3, 4))

