// Immediately Invoked Function Expressions (IIFE)

// Simple function 
// function chai() {
//     console.log(`DB CONNECTED`)
// }

// chai()


/// Immediate Invoked Function Expression {IIFE}

// named IIFE
(
    function chai() {
        console.log(`DB CONNECTED`)
    })();

/// Immediate Invoked Function Expression {IIFE}

// Simple IIFE 
((name) => {
    console.log(`DB Connection Two ${name}`)
})("Adnan") 