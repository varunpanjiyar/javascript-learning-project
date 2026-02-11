// for of loop => We use for...of loop to iterate over iterable values like arrays, strings, maps, and sets — not plain objects.

let arr =[2,3,4,6,4,3];
for (const num of arr) {
    // console.log(num);
    
}

// for loop also itrate on the string
let fullName = "varun kumar" 
for(const eachlater of fullName){
    // if(eachlater=="n"){
    //     console.log(eachlater);
    //     break;
    // }
    // console.log(eachlater);
    
}


// map => it always gives unique value if i add here india map will not add india coz it's already exisht
const map = new Map()
map.set("IN","india");
map.set("np","nepal")
map.set("fr","france")

for(const [key, value] of map){ // i destructe here of key and value
    console.log(key,value);
    
}




// objec is not iterable so we don't apply for of in plain object 
// let details = {
//     name: "varun",
//     age:22,

// }
// for(const [key,value] of details){
//     // console.log(key, value);
    
// }

