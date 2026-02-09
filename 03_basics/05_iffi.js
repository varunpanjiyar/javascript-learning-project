//  IIFE (Immediately Invoked Function Expression) is used to avoid global scope pollution and it runs immediately after it is defined.

//named iffi
(function store(){
    // let situation = "db-connected"
    console.log("db-connected")
})();


// unamed iffi
( ()=>{
    console.log("db-connected two");
    
})()