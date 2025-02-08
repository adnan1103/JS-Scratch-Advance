// singleton declaration & how can we declare with the help of constructor

// const tinderUser = new Object() // declaration of object {it's the Singleton}

const tinderUser = {}; // Simple way of declare the object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Adnan",
      lastname: "Yousaf",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4); // when we want to join to object

// Spread Operator {we concatinate to objects}
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "adnan@gmail.com",
  },
  {
    id: 2,
    email: "danish@gmail.com",
  },
  {
    id: 3,
    email: "azeem@gmail.com",
  },
  {
    id: 4,
    email: "sohail@gmail.com",
  },
  {
    id: 5,
    email: "haseeb@gmail.com",
  },
  {
    id: 6,
    email: "asim@gmail.com",
  },
  {
    id: 7,
    email: "mozam@gmail.com",
  },
];


users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // get keys from object  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // get values from object [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // get one by one seprate entry in array like  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true // Before working with value you must check

