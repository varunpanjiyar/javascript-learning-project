let score = 100

let newScore= new Number(100.23)

// console.log(score); // it assume that is number
// console.log(newScore); // we assure here variable should be in number

//console.log(newScore.toString().length); // here number convert in string here we use use all property of string


// console.log(newScore.toFixed(2)) //it gives precision value basically it use in e-commarce bewsite

const floatnumber = 123.4567
// console.log(floatnumber.toPrecision(4));

let money = 1000000
// console.log(money.toLocaleString("en-In")); // it gives in inidan value




// ++++++++++++++maths++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4)); // it alawa gives absolute value
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,4,2,1));
// console.log(Math.max(4,5,7,9,1));


console.log(Math.random()) // it gives always random value between 0 to 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// let min = 10;
// let max = 20;

// console.log(Math.floor(Math.random() * (max-min+1))+min);

//here we right dice random value

let min=1
let max=6;

console.log(Math.floor(Math.random() * (max-min+1))+min);













