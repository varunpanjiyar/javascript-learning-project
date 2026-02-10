// >(greater than),   <(samller than),   >=    ,<=  ,==  ,   === ,!=.  , !==
const temparature = 100;
if (temparature < 200) {
    console.log("temparture is high");

} else {
    console.log("temparatute is low");

}

const age = 18;

if (age > 18) {
    console.log("major");

} else if (age > 10) {
    console.log("child");

} else {
    console.log("minor")
}


// (&& and operator)     and     (|| or operator)


// (&& and operator)  both condition should be true

let debitCard = true;
let suffiecientBailence = true;

if (debitCard && suffiecientBailence) {
    console.log("user allow to purchase course");

} else {
    console.log("don't allow");

}

// (|| or operator) => ONE statement sholud be true out of 2 or more

let useremail = true;
let chromeemail = false;

if (useremail || chromeemail) {
    console.log("allow to login");

} else {
    console.log(("don't allow to login"));

}

