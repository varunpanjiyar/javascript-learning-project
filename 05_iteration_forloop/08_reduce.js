const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// score.reduce( (accumulator,currentValue)=> accumulator,currentValue,initialvalue) syntax

const newScore = score.reduce((accu, currVal) => accu + currVal, 0)

// console.log(newScore);


// here is example how to add  pricea at cart

const courseprice = [
    {
        courseName: "javscript",
        price: 999,
    },
    {
        courseName: "javscript",
        price: 999,
    },
    {
        courseName: "java",
        price: 1999,
    },
    {
        courseName: "python",
        price: 10099,
    },
    {
        courseName: "rect",
        price: 99,
    },
]

const priceToPay=courseprice.reduce( (acc, items)=> acc+items.price,0 )
console.log(priceToPay);
