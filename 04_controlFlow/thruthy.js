let email = "varun@gmail.com"
if (email) {
    console.log("user have email")
}

let name = "" // empty string is falsy value
if (name) {
    console.log("user have name");

} else {
    console.log("default");

}


let name2 = [] // empty string is thruthy  value that's why it gives true
if (name2) {
    console.log("user have name");

} else {
    console.log("default");

}

// flasy value
// false, 0 ,-0, bigint(0n) , "", null, undifined, NaN  other every is thruthy

//thuthy value => function(){}, object {},

//  let see empty function

let emptyfunction = function () { }
if (emptyfunction) {
    console.log("this is true");

}
let emptyobject = {}
if (Object.values(emptyfunction).length === 0) [
    console.log("this is true object")

]

// Nullish Coalescing Operator (??)  It returns the right value only when the left value is null or undefined.

let value1;
// value1 = 5??10
// value1 = null??15  
value1 = null ?? 2 ?? 12


console.log(value1);

//  turnary operator=> turnary operator  is use multiple condtion in one line and it returns the true valueThe ternary operator is a shorthand for if–else. It checks a condition and returns one value if true and another if false — all in one line.
// condition ? true :false  (syntax of ternary operator)

let icePrice = 100;
icePrice <= 80 ? console.log("price is less than 80") : console.log("price is more than 80");





