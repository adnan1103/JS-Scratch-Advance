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

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // get keys from object  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // get values from object [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // get one by one seprate entry in array like  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true // Before working with value you must check

const course = {
  coursename: "Js in Urdu",
  price: 999,
  courseInstructor: "AdnanYousaf",
};

// course.courseInstructor  // this is the fine method but accessing any value we call again and again

// Object Destructring { we can change the name}
const { courseInstructor: instructor } = course;
console.log(instructor);

// this is destructuring in React
// const navbar = ({company}) => {

// }
// navbar(company = "Adnan")

// this is the Json foramte
// {
//   "name": "Adnan",
//   "coursename": "Js in Urdu",
//   "price": "free"
// }

// Apis in array formate we get some time { and in one array multiple objects}
// [{}, {},{}, {}, {}]


{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}