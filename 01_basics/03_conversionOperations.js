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
