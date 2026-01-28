let name = 'varun kumar'
let gitRepo = 5;

// console.log( name + gitRepo)// but this is worst practice

// console.log(`my name is ${name} and my github repo is ${gitRepo}`)


let myName = new String("varun") //this is for know how many methods of string and we can declear the string also 

// console.log(myName[4]);

// console.log(myName.__proto__);

// console.log(myName.length) // this is method
// console.log(myName.toUpperCase()); // convert lowercase to uppercase
// console.log(myName.charAt(2)); // know the postion which index loacted
// console.log(myName.indexOf("r"));

let newString = myName.substring(0, 3)
console.log(newString);

let anotherString = myName.slice(-4, 4)// here we use negative value also
console.log(anotherString);

let stringOne = "     name       "
console.log(stringOne);
console.log(stringOne.trim())

let url = "https://varunkumar%20.com"
console.log(url.replace("%","-"))

console.log(url.includes("ram"))

let personName = "gauri-shankar-panjiyar"
console.log(personName.split("-"))











