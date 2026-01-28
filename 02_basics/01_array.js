// array:- It collects mnay items in one variable

let myArr = [0,2,3,4,5,6,7]
let newArray = new Array(1,2,3,4,56,) // we can also create array



// console.log(myArr[2])
// console.log(myArr);


// //methods of an array
myArr.push(6)
// console.log(myArr) ;// adds an element at the end of the array
myArr.pop()
// console.log(myArr);//  it removes the last item from the array

myArr.unshift(9)
// console.log(myArr)//adds an element at the beginning of the array.If the array has many elements, it automatically updates the index of all elements

myArr.shift()
// console.log(myArr) // it removes hte first element from an array


//slice() returns a shallow copy of a part of an array, does not include the end index, and does not mutate the original array.

let fruits =["mango", "guava", "lichi","banana", "apple"] 
let slice = fruits.slice(1,3)
// console.log(slice);//=>"mango", "guava", "lichi","banana", "apple"
// console.log(fruits) //=> guava, lichi

//splice() method changes the content of an array by removing, replacing, or adding elements.It mutates the original array.

// fruits.splice(1,3 ,"x","y","z")
// console.log(fruits); // it replace en element

fruits.splice(2,1) // 2 is index start and 3 is how many elemens want to delet from an element  delet elemnet
console.log(fruits);

fruits.splice(5,0 ,"varun","arun")
console.log(fruits);// add elemnt in array






let number =[0,1,2,3,4,5]
console.log(number.includes(9)); // for checking the variable is exist or not in element
console.log(number.indexOf(9)) // when item is not exist it gives -1

let newjoin =  number.join()// it converts array into
console.log(number);
console.log(newjoin);









