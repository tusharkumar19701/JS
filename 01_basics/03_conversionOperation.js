let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => converted to 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "tushar" => true

let someNumber = 21;
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(typeof stringNumber);




//**************************Operations*******************************

let val = 3;
let negValue = -val;
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2%2);
//console.log(2/2);

let str1 = "Tushar";
let str2 = " Kumar";
let str3 = str1 + str2;
console.log(str3);


console.log("Special Operations");
console.log(1 + "2");
console.log("1" + 2);
console.log(1 + 2 + "2");
console.log("1" + 2 + 2);

console.log(+true);
console.log(+"");
