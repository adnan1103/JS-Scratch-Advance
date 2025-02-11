// scope story start from these three keywords let, var, and const
// cloures are also part of the scope


{ } // these curly brases we called scope and which value come inside these brases become the part of braces

// var c = 300; // this create various bugs that's why obsleete it's usage

let a = 300

if (true) {
    let a = 10
    const b = 20
    //  c = 30
    // console.log("INNER: ", a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i]; 
// }

// console.log(a)
// console.log(b)
// console.log(c) // 30 and var is accessible Globally


function one() {
    const username = "Adnan_Yousaf"

    function two() {
        const website = "youtube.com"
        console.log(username)
    }

    // console.log(website)
    two()
}

// one()

if (true) {
    const username = "Adnan"
    if (username === "Adnan") {
        const website = "   youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++++++++++++ Interesting Question++++++++++++++++++++++++++++++

console.log(addone(5))
addone(5)
function addone(num){
    return num + 1
}


// addTwo(5) // addTwo cannot access before initialization
// const addTwo = function(num){
//     return num + 2
// }
