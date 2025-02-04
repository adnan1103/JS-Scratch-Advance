const accountId = 144556
let accountEmail = "adnan.yousaf@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2213431"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


