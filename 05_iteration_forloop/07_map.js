// map = map() returns a new array after applying a function to every element.

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNums.map((x) => x * 2)
// console.log(newNum);

//chaining of map
let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newScore = score.map((x) => x * 10).map((x) => x + 1 ).filter( (x)=> x>=40)
console.log(newScore);

