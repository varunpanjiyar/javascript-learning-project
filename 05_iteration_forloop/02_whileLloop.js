// print number 1 to 10
let number = 0;
while(number<=10){
    // console.log(`the value of number is ${number}`);
    number= number+2;

}


//print array from while loop
let myArr = ["arun", "manish", "varun"]
let index = 0;
while(index<myArr.length){
    console.log(`the value of array is ${myArr[index]}`);
  index= index+1;
}


//do while loop

let score =1
do {
    console.log(`score value is ${score}`)
    score++
} while (score<=10);

// do while loop=> it excute on time after that it will chack condtiuon it is right or wrong

let money =11;
do{
    console.log(`money is ${money}`);
    money++
}while(money<=9)