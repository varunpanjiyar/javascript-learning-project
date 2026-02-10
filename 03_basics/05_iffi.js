//  IIFE (Immediately Invoked Function Expression) is used to avoid global scope pollution and it runs immediately after it is defined.

//named iffi
(function store() {
    // let situation = "db-connected"
    console.log("db-connected")
})();

// ; is very important to run to iffi in one file  if we don't use ; break then iffi don't know where has to stop
// unamed iffi
(() => {
    console.log("db-connected two");

})()