
// Singleton: An object created using Object.create() is called a singleton object.
// const obj = Object.create({});


//question=>  make a sybmbol  and refer to the object and print the value 

let mySymbol = Symbol("key1")


//object litreal
let object = {
    name: "varun",
    // mySymbol: "mykey1", // this is not a symbol
    [mySymbol]: "key1",
    "last Name": "kumar",
    age: 24,
    gmail: "varunPnajiyar@gmail.com",
    isLoggedin: false,
    presentPastWeek: ["monday", "tuesday", "thursday"]


}
console.log(object);


// console.log(object.name);// i can access like this but other method
// console.log(object.last Name);// here i can't acess cox this syntax is not allow
// console.log(object["last Name"]);// this is correct syntax to access values
// console.log(typeof object[mySymbol]); // it show string not symbol no need to rape in string

object.greeting = function () {
    console.log("hello js learner"); // here i reffer function to the object
}
console.log(object.greeting());

object.greetingTwo = function(){
    console.log(`my  name is: ${this.name}`)
}
console.log(object.greetingTwo());






