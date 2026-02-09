// let => let is block scoped. It cannot be redeclared, but it can be updated.

// const => const is block scoped. It cannot be redeclared and cannot be updated.

// var => var is function scoped . It can be redeclared and can be updated.



// anything varible written in outside the curly braces tha's called scope

// {
//     // a varible written in curly braces it called block scope
// }

let a = 300;
const b = 500;


if (true) {
    let a = 20;
    const b = 30;
    // console.log("inner:  ", a); // both are block scope
    // console.log("inner:  ", b);

}

// console.log(a) // it access the global scope varible
// console.log(b)





// A closure is a function that can access variables from its outer (lexical) scope even after the outer function has finished executing.
function one() {
    let userName = "varun"
    function two() {
        let website = "mdn"
        console.log(userName);
        console.log(website)

    }
    // two()

}
// one()


// if else example for scope
if(true){
    username = "varun"
    if(username=== "varun"){
        website= "gfg"
        // console.log(`username is ${username} and the wesbite is ${website}`)
    }
}


// +++++++++++++++++++++++++++hoisting++++++++++++++++++++++++++++++++++++++++

// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

console.log(addOne(5))
function addOne(num){
    return num
}





 console.log(result(6)) // it give wrrong output coz This works ONLY with function declarations, NOT with function expressions.
const result = function addTwo(num1){
return num1
}

