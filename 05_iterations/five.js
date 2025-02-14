// forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// in forEach we write a callback function
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(val){
//     console.log(val);
// }

// // give the reference of the functoin 
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
console.log(item.languageFileName)
})