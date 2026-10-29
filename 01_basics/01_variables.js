const accountId = 123454;
let accountEmail = 'abc@google.com'
var accountPassword = '1234573'
accountCity = 'Patna';
let accountState;

// accountId = 245454; --> Not allowed reallocation

accountEmail = 'badfw@spotiq.com';
accountPassword = '456428r23';
accountCity = "Hydrabad";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);