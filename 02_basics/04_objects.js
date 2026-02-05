// Singleton: An object created using the constructor (new Object()) is called a singleton object.

const MySinglton = new Object() // singleton object


// object litreal=> an object litrel is simplest way to create an object with using {} without using constructor
let tinderUseer = {} // object literal

tinderUseer.id = "123abc"
tinderUseer.name = "varun"
tinderUseer.photo = true

// console.log(tinderUseer);

// nested object

let socity = {
    scocityName: "supertech",
    socityMiddleName: {
        socityFullName: {
            middlename: "eco",
            lastName: "village1"
        }
    }
}
// console.log(socity.socityMiddleName.socityFullName.lastName);



let obj = { a: 1, b: 2, c: 3 }
let obj1 = { d: 4, e: 5, f: 6 }
// let newObj = {obj,  obj1}
// console.log(newObj);

// Object.assign() merges two or more objects into a new object

let newObj1 = Object.assign({}, obj1, obj)
// console.log(newObj1);

// spread=> it broke the all elemnt and store in new varibale
let newArray = { ...obj, ...obj1 }
// console.log(newArray);


// array object

let arrayObject = [
    {
        id: "123abc",
        name: "varun"
    },
    {
        id: "23bc",
        name: "manish"
    },
]
// console.log(arrayObject[0]);

let anotherUser = {
    name: "varun",
    lastname: "kumar",
    gmail: "varun@gmail.com",
    isLoggedIn: false,
}

console.log(Object.keys(anotherUser));// here i find key of object or anotherUser
console.log(Object.values(anotherUser));// here i find the values of anotheruser object
console.log(Object.entries(anotherUser));// it store in array and give key and value sepratly
console.log(anotherUser.hasOwnProperty("gmail")); // fro asking question that key is aviable in object or not

//destructure=> Destructuring is a way to extract values from arrays or objects and store them into variables in a short and clean syntax

let MyDetails = {
    name: "varun",
    age: 22,
    gmail: "om.varunkr@gmail.com",
    higherEducation: "graduate"
}

const { name, age, gmail, higherEducation } = MyDetails // here i destructure the object and extract value from an object
console.log(gmail);
console.log(age);
console.log(higherEducation);
console.log(name);


// all api comes in json fomrate=> object and array object

//object json api response 

// {
//     name: "varun",
//         age: 22,
//             gmail: "var@gmail.com"

// }

//another json response like array object
[
    {},
    {},
    {}
]














