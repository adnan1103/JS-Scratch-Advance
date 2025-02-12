// 1 . logic or control flow {if}

// if (2 === "2") {
//     console.log("executed");
// }
// else{
//     console.log("Not executed")
// }


// const score = 200;

// if(score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000

// if(balance > 500) console.log("test")   // Implicite scope {code run in a one line Then we called implicite scope}

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}