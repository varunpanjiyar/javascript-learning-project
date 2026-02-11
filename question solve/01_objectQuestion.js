// Convert Object to Array

let obj = {
  a: 1,
  b: 2,
  c: 3
};

// console.log(Object.entries(obj));

// Sum Values Find total salary.
let salaries = {
  john: 1000,
  alex: 2000,
  mike: 1500
};

const { john, alex, mike } = salaries
// console.log(john+alex+mike);


// 👉 Find subject with highest marks.
let marks = {
  math: 88,
  english: 75,
  science: 92,
  computer: 85
};
const maxNumber = Math.max(...Object.values(marks))
// console.log(maxNumber);
for (const subject in marks) {
  if (marks[subject] === maxNumber) {
    // console.log(`${subject} = ${maxNumber}`);

  }
}

// Convert Object to Array of Objects
let user = {
  name: "Varun",
  age: 22,
  city: "Delhi"
};


let result = Object.entries(user).map(([key, value]) => ({
  key,
  value
}));

// console.log(result);
// console.log(`key:- ${Object.keys(user)} and value:-${Object.values(user)}`);


// 4️⃣ Remove Property Dynamically
let product = {
  name: "Mobile",
  price: 15000,
  color: "Black"
};
// destructuring
const { color, ...rest } = product
// console.log(rest);

let key = "color";
delete product[key];
// console.log(product);
// let convertArray=Object.entries(product)

// console.log(convertArray.pop());
// console.log(convertArray);
// console.log(product);


// Find how many properties are in this object:

let mobile = {
  brand: "Samsung",
  price: 20000,
  color: "Black"
};
// console.log(Object.entries(mobile).length);


//  Convert Object to Array
let obj1 = {
  a: 1,
  b: 2,
  c: 3
};
// console.log(Object.entries(obj1));


// Convert Object → Array of Keys
// 👉 Convert this object into an array of keys.
let person = {
  name: "Amit",
  age: 25,
  city: "Noida"
};

// console.log(Object.entries(person));




// Count Values Greater Than 50
let numbers = {
  a: 40,
  b: 60,
  c: 90,
  d: 20
};

const findNumber= Object.entries(numbers)
for(const number in numbers)
if(findNumber>50){
  console.log(findNumber)
}


// merge shorted array 

const arr1 = [1,3,4,5];
const arr2= [2,4,6,8];
output: [1,2,3,4,4,5,6,8]

const newArr =[...arr1 , ...arr2].sort((a,b)=>a-b)
console.log(newArr);






















