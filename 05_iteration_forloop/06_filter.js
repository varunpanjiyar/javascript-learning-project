//filter() is an array method that creates a new (shallow copy) array containing only the elements that satisfy the given condition. It does NOT change the original array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]

const newnums = myNums.filter((items) => (items > 6))
// console.log(newnums);




// i do same work from foreach method

const newNumbers = []
myNums.forEach((items) => {

    if (items > 6) {
        newNumbers.push(items)
    }
})
// console.log(newNumbers)



const fruits = ["mango", 'guava', 'lichi', "papaya", "pineApple"]
const newFruits = fruits.filter((items) => {
    return items.length === 5
})

// console.log(newFruits);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const printBook = books.filter( (bk)=>bk.genre==="History")
//   console.log(printBook );

  const publisYear = books.filter( (bk)=>bk.publish>2000 )
//   console.log(publisYear);

  const printScience = books.filter( (bk)=> {
    return bk.genre==="Science"
  })
   console.log(printScience);
   
  


