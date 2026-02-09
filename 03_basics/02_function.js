// function userMassage(username='please enter username'){ // here i can add default value if username is not given
// return `${username}, is my username`
// }
// // console.log(userMassage("itz.varun09"));
// // console.log(userMassage());


// if i addcart price in a function
// rest operator = >The rest operator is used to store remaining values in an array.”
function addCartPrice(...num1) { // here we have to use rest operator it collect the all price in array
    return num1
}
// console.log(addCartPrice(2, 3, 4))

// interview question what is the output of this code 

function addCartPrice(val1, val2, ...num1) { // here we have to use rest operator it collect the all price in array
    return num1
}
// console.log(addCartPrice(2,3,4,5))  //[4,5] val1 and val2 take 2and 3 that's why it gives [4,5]



//object  with  function and how to handle object from function

const seminar = {
    name: 'varun',
    price: 999
}

function handleObject(anyobject) {
    return (`name is ${anyobject.name} and the price money is ${anyobject.price}`)
}
// console.log(handleObject(seminar));


//Array  with  function and how to handle array from function


let score = [200, 400, 800, 900]

function handleArray(newArray) {
    return newArray[2]
}
// console.log(handleArray(score));
// console.log(handleArray([200,400,1500,29])); // i can also pass the value in console





