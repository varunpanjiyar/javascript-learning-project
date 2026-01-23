const accountId = 12345
let emailId = "varunpanjiyar@gmail.com"
var password = "1234"

accountCity = "Bangluru" 
password = "321"

/* 
prefer not use to var
 because there is issue in block scope and function scope
*/
let accountState;

//accountId  =2 this is wrong we can't reassign the varible coz it assign to constant

console.log(accountId);


//we can update let there i see that let can update the varibel
 emailId = "arunkumarpanjiyaer@gmail.com"
 console.log(emailId);
//  console.log(typeOf accountCity) this statement is wrong
 console.table([accountId,emailId,password,accountCity,accountState])



