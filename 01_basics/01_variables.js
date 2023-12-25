const accountId = 13243;
let accountEmail = "tushar123@gmail.com";
var accountPassword = "12354";
let accountState;
// accountCity = "Ranchi";
console.log(accountId);

accountEmail = "tushar132@gmail.com";
accountCity = "Bengaluru";


/*
    Prefer not to use var because of issues in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);