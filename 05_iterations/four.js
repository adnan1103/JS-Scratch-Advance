

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //    console.log(key)  // js  cpp  rb  swift
    // console.log(myObject[key])  // javascript  C++  ruby  swift by apple

    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in map) {
    console.log(key)
}