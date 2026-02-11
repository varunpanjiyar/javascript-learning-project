// forEach() is used to iterate over an array and access each element one by one. It provides three parameters: item (value), index, and the whole array.

// basically we use for object inside the array [{}]

let hero = ["batman", "superhero", "shatiman", "madmax"]

// hero.forEach((value) => {
//     console.log(value);

// })
let heros = ["batman", "superhero", "shatiman", "madmax"]

hero.forEach((value) => {
    console.log(value);
})


const language = ["javscript", "java", "react-js", "c++"]

language.forEach((item, index, arr) => {
    console.log(item, index, arr);

})


// aceess the items which is object is nested in array like [{}]

let city = [
    {
        state: "bihar",
        city: "patna"
    },
    {
        state: "up",
        city: "noida"
    },
    {
        state: "punjab",
        city: "kharar"
    }
]

city.forEach((items) => {
    console.log(items.city)

})


//higer order function=> higher order function is function it takes anothoer function nas argument And return the function

function name(item){
    console.log(item);
    
}
city.forEach(name)