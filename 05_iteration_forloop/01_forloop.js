//for loop=>  A for loop is used to repeat a block of code multiple times. It can iterate over arrays, objects (with variations), and we can control the loop using start, condition, and increment.

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

for (let i = 1; i <= 20; i++) {
    // console.log(i);

}

//how for loop work 

for (let i = 0; i <= 10; i++) {
    // console.log(`the value of i :- ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`the value of inner j:- ${j} and the value of i :- ${i}`);

    }
}

// we print table of 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`the value of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`the table of ${i} * ${j}= ${i * j}`)
    }

}

// find best number  and the number is 5

for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        // console.log("5 is the best number out of 10");

    }
    //  console.log(i);

}

// array in for loop

const myArray = ["batman", "superman", "madmax"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
}


// break and continue 

// break=> break is used to stop a loop immediately when a condition is met.

for (let index = 1; index <= 20; index++) {
    if (index === 10) {
        console.log("detected 10");
        break;

    }
    console.log(`the value of index is ${index}`);

}


// continue=> continue is used to skip the current iteration of a loop and move to the next one

// for (let index = 1; index <= 20; index++) {
//     if (index === 10) {
//         console.log('detected 10');
//         continue;

//     }
//     console.log( `the value of i is ${index}`);

// }