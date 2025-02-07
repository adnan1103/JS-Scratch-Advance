// Dates

let myDate = new Date(); // this is the Date Object instance

// console.log(myDate); // 2025-02-06T03:32:53.750Z
// console.log(myDate.toString()) // Thu Feb 06 2025 03:32:53 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Thu Feb 06 2025
// console.log(myDate.toISOString()) //  2025-02-06T03:32:53.750Z
// console.log(myDate.toLocaleDateString()) //  2/6/2025
// console.log(myDate.toLocaleTimeString()) //  3:32:53 AM
// console.log(myDate.toLocaleString());  //  2/6/2025, 3:32:53 AM
// console.log(myDate.toUTCString()) //  Thu, 06 Feb 2025 03:32:53 GMT
// console.log(myDate.getDate()) // 6
// console.log(myDate.getDay()) // 4
// console.log(myDate.getFullYear()) // 2025
// console.log(myDate.getHours()) // 6
// console.log(myDate.getMilliseconds()) // 951
// console.log(myDate.getMinutes()) //20
// console.log(myDate.getMonth()) // 1
// console.log(myDate.getSeconds()) // 12
// console.log(myDate.getTime()) //1738823017752
// console.log(myDate.getTimezoneOffset()) // 0
// console.log(myDate.getUTCDate()) // 6
// console.log(myDate.getUTCDay()) // 4
// console.log(myDate.getUTCFullYear())  // 2025
// console.log(myDate.getUTCHours()) //6
// console.log(myDate.getUTCMilliseconds()) //776
// console.log(myDate.getUTCMinutes()) // 38
// console.log(myDate.getUTCMonth())  // 1
// console.log(myDate.getUTCSeconds()) // 56


// console.log(typeof myDate) // Date is the object

// let myCreatedDate = new Date(2023, 0, 23);  // Mon Jan 23 2023
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 40); // 1/23/2023, 5:40:00 AM
// let myCreatedDate2 = new Date("2023-01-23"); // 1/23/2023, 12:00:00 AM
let myCreatedDate2 = new Date("02-06-2025"); // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate2.toLocaleString()) 

let myTimeStamp = Date.now()
// console.log(myTimeStamp)  // 1738825464623 miliSecond

// console.log(myCreatedDate2.getTime())  // mileSecond 1738825351169
// console.log((Date.now()/1000))
// console.log(Math.floor(Date.now()/1000)) // Seconds 1738825482 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1 )
console.log(newDate.getDay())

// ` ${newDate.getDate()} and the time is this`


newDate.toLocaleString('default', {
    weekday: 'long',
})



////////////////////// If I need more then we can explore it further Date Methods

// console.log(myDate.getVarDate) // undefined
// console.log(myDate.setDate())  // NaN
// console.log(myDate.setFullYear()) // NaN
// console.log(myDate.setMilliseconds()) // NaN
// console.log(myDate.setMinutes()) // NaN
// console.log(myDate.setMonth()) // NaN
// console.log(myDate.setSeconds()) // NaN
// console.log(myDate.setTime()) // NaN
// console.log(myDate.setUTCDate()) // NaN
// console.log(myDate.setUTCFullYear()) // NaN
// console.log(myDate.setUTCHours()) // NaN
// console.log(myDate.setUTCMilliseconds()) // NaN
// console.log(myDate.setUTCMinutes()) // NaN
// console.log(myDate.setUTCMonth()) // NaN
// console.log(myDate.setUTCSeconds()) // NaN
// console.log(myDate.toDateString()) // NaN

// console.log(myDate.toJSON()) // null
// console.log(myDate.toLocaleDateString()) // Invalid Date
// console.log(myDate.toLocaleString()) // Invalid Date
// console.log(myDate.toLocaleTimeString()) //Invalid Date
// console.log(myDate.toTimeString()) // Invalid Date
// console.log(myDate.toUTCString()) // Invalid Date
// console.log(myDate.valueOf()) // NaN

