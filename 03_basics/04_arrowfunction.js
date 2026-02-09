// An arrow function is a shorter syntax to write functions in JavaScript.
// this=> The this keyword refers to the current object (execution context).

const details = {
    name: "varun",
    studies: 'chrome',
    price: 999,

    greeting: function greet() {
        // console.log(`my name is ${this.name} and the price is ${this.price}`);
        // console.log(this)

    }

}
// details.greeting()
// details.price = 199
// details.greeting()
// console.log(this);

function varun() {
    let username = "varun"
    // console.log(this);
    console.log(this.username);

}
varun()

// ++++++++++++++++++++++++++++++++ arrow function +++++++++++++++++
//arrow function is a techinwuq to write function in a short form


//  Explicit Return Arrow Function

const arrowFn = () => {
console.log(this)
}
arrowFn()


const addTwoNum = (num1, num2) =>{
    return num1,num2
}
console.log(addTwoNum(5,7))



// Implicit Return Arrow Function

const printmsg= ()=>( {username:"varun"})
console.log(printmsg())

// add three number

const addThreeNum = (num1,num2,num3)=>(num1+num2+num3)

console.log(addThreeNum(5,6,7))
