const accountID = 1234
let accountEmail = "Rlohan3@gmail.com"
var accountPassword = "1234"
accountCity = "Hisar"
let accountState;

// accountID = 2  //not allowed

accountEmail = "rishilohan3@gmail.com"
accountPassword = "946777"
accountCity = "Delhi"

console.log(accountID);

/*
prefered not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])