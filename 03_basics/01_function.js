//A function is a block of code that performs a specific task and runs only when it is called.

function name() {
    console.log("v");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("n");
}
// name() // here i call the function


function myName() {
    console.log("varun-kumar")
}

// myName()


// add two number
function sum(num1, num2) {
    let result = num1 + num2
    return result
    // return num1+num2
}
// sum(3,4)// let store in variable
let result = sum(3, 4)

// console.log("result :", result)


// another function

function msg(username = "arun") { // here i set default value if username is empty it print arun
    // here i put if statement
    if(username ===undefined){
console.log("please enter usernname");
return // after return no code is excuted

    }
    return `${username}, just logged in `
}

console.log(msg("varun")); // if i pass value it override the default value
// console.log(msg());// if parameter is empty what will do it gives undifined 




