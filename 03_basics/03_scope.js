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
    console.log("inner:  ", a); // both are block scope
    console.log("inner:  ", b);

}

console.log(a)
console.log(b)


