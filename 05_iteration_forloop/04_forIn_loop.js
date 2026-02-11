// for...in loop is used to iterate over the keys (properties) of an object one by one.

const language = {
    js: 'javscript',
    cpp: 'c++',
    py: 'python',
    ruby: 'ruby',
}
for (const key in language) {
    // console.log(` ${key} is shortcourt of  ${language[key]}`);

}


// here i apply for in loop on Array=> for in loop is not recommanded for array
let programming = ["javscript", "python","cpp","swift","react"]
for(const key in programming){
    // console.log(programming[key]); // it gives only key and oputput
    
}


//Let's see about map is itterable or not => map is not iterable

// let map = new Map()
// map.set("IN","india");
// map.set("np","nepal")
// map.set("fr","france")
// for(const key in map){
//     console.log(key);
    
// }