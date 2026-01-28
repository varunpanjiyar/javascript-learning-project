//datatype

// primitive datatype: number, string, null, undifined, symbol, bollean , bigInt 

const score = 100 // number datatype
const name = "varun"// string datatype
const temparture = null// null datatype
let email; //undifined datatype

let id = Symbol("123")
let anotherId = Symbol('123')

console.log(id===anotherId); // beacause every symbol makes unique value 

const isLoggedIn = false; // boolean

let bigInt = 1234567n //bigiNt




//refrence (non-primitive datatype)
// => Array, object, function

let company = ["hero", "spleander", "yahamha"]// array

let details={
    name:"varun",
    age:22,
}      // object always store values in key value pair

const myFunction = function(){
    console.log("varun")
}


console.log(typeof  bigInt);
console.log(typeof  temparture);
console.log(typeof  email);
console.log(typeof score);
console.log(typeof myFunction);



