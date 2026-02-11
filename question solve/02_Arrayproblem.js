// 1️⃣ Filter Numbers Greater Than 10
// Output:
// [12, 20, 15]



// let nums = [5, 12, 8, 20, 3, 15];
// const printNum=nums.filter( (x)=>x>10)
// console.log(printNum);


// 2️⃣ Double Every Number

let nums = [2, 4, 6];
const doubleNum = nums.map((x) => x * 2)
console.log(doubleNum);



// Output: [4,8,12]

// 3️⃣ Get Only Names from Objects


let users = [
    { name: "Varun", age: 22 },
    { name: "Aman", age: 25 },
    { name: "Rohit", age: 20 }
];

const printName = users.map((users) => users.name)
console.log(printName);

// Output:
// ["Varun","Aman","Rohit"]


// 4️⃣ Find Adults (age ≥ 21)

let people = [
    { name: "A", age: 18 },
    { name: "B", age: 22 },
    { name: "C", age: 30 }
];
const findAdult = people.filter ((item)=>item.age>=21 )
console.log(findAdult);

// Output:
// [{name:"B"...},{name:"C"...}]

