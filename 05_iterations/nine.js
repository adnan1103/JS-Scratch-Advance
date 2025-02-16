// Reduce method in js'

// in shopping cart we use the reduce method
// const myNum = [1, 2, 3]
// // which value we sign to accumulator that value we get first time
// const myTotal = myNum.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currVal: ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Items price add to cart and reduce method
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)