let bikeCompany = ["hero", "splender", "honda", "tvs"]
let carCampany = ["bmw", "mahindra", "tata", "tesla"]

// bikeCompany.push(carComapny)
// console.log(bikeCompany); // this is bad practice 

// speard operator => it break all elements and collect in new array
let company =[...bikeCompany, ...carCampany]
console.log(company);


// concat()=> it merger two or more array in new array 

let newArray = bikeCompany.concat(carCampany)
// console.log(newArray);


// flat ()=> it add two or more than two array in new array vairiabe;

let new_array = [2,3,4,5,[5,6,7],7,[8,9,[1,3]]]
let anotherArray = new_array.flat(Infinity)
console.log(anotherArray);

// i can ask question like "varun" is Array or not ex

console.log(Array.isArray("varun")) // this is not an array
console.log(Array.from("ram")) // it convert string to array 

// here i store multiple variable in array

let score= 200;
let score1 = 300;
let score2 = 400;

console.log(Array.of(score,score1,score2)); // here is store multi varible in one array








