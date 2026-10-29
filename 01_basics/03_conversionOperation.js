let score = '1234as'

// console.log(typeof score);    //string
// console.log(typeof(score));    //string

let valueInNumber = Number(score);   // conversion of string into number using Number keyword
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);          //NaN | if score = null then --> 0 

// "33" => 33
// "33afg" => NaN
// true => 1
// false => 0
// undefined => NaN

let isLoggedIn = []

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 --> true | 0 --> false
// "" --> false | "asfsdf" --> true
// NaN --> false | null --> false
// [] --> true