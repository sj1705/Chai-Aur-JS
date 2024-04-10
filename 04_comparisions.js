// comparing different data types

// console.log("2" >1);

// console.log("02" >1);

console.log( null > 0); // false
console.log( null == 0); // false
console.log( null <= 0); //true

console.log( undefined > 0); // false
console.log( undefined == 0); //false
console.log( undefined <= 0); //false

// to avoid above type of code as it is not a clean code

// strict check ===

console.log("2" === 2);