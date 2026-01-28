// stack-momory=> it store only primitive-datatype(it gives copy to another varibale not refrence)

let homeName = "varun"
console.log(homeName);

let schoolName = homeName

homeName = "chintu"
console.log(schoolName)
// console.log(homeName);  =>  beacuse it gives copy to another user not   refrrence



// heap-memory => it store only non-primitive datatype and it gives reference to antoher user

let userOne={
    email : "varun@google.com",
    upi: "varun@ybl"
}

let userTwo = userOne
userTwo.email = "chintu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);









