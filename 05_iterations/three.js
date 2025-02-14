// These are the Array specific loops 

// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Worlds!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
// array destructure [key, value]
for (const [key, value] of map) {
    // console.log(key, ':--', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':--', value);

}