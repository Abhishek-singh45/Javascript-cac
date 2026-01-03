//CONVERSION//

let score = "33abc"

console.log(typeof score); //simple way
console.log(typeof(score)); //method way

let valueInNumber = Number(score) 
console.log(typeof valueInNumber);
console.log(valueInNumber);

//after conversions
//"33" -> 33 
//"333abc"-> NaN
//"true"-> 1 , "false"->0

let isLoggedIn = "abhi"

let BooleanIsLoggesIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggesIn);

// 1 -> true; 0 -> false 
// "" -> false
// "abhi" -> true

let someNumbeer = 33

let stringNumber = String(someNumbeer)
console.log(stringNumber);
console.log(typeof stringNumber);


//OPERATIONS//

let value = 3
let negValue = -value
console.log(negValue);


//BASICS MATHS OPERATIONS//

// console.log(2+2);
// console.log(2-2);
// console.log(2**2); // USE FOR POWER
// console.log(2*2);
// console.log(2/2);
 

let str1 = "hello"
let str2 = " abhi"

let str3 = str1 + str2 
console.log(str3);



// if string first so all the content/no. trated as a string.

console.log("1" + 2); // output -> 12
console.log("1" + "2"); // output -> 12
console.log("1" + 2 + 2); // output -> 122
console.log(1 + 2 + "2" ); // output -> 32
console.log(3*6+4-8/3); // not recommeded.


console.log(+true); // output -> 1 , not recommeded
console.log(+""); // output -> 0 , not recommeded


//PREFIX AND POSTFIX 

let gameCounter = 100
++gameCounter; 
console.log(gameCounter); // 101


   