// 2 data type :
// primitive (call by value not refernece)
//  7 types:
/* 
    String
    Number
    Boolean
    null
    undefined
    Symbol (used for uniqueniess of a component)
    BigInt
*/
// non primitive (Reference type):
/* 
    Array
    Objects
    Functions
*/

const id = Symbol('123')
const id1 = Symbol('123')

// console.log(id == id1); // false 

// console.log(id1);


const heros=["batman","naagraj","bheem"]

let objec=
{
    name: "shresths",
    age :21
}
// console.log(objec);
// console.log(heros);


const myfunc=function(){
    console.log("hello");
}

console.log(typeof myfunc);
console.log(typeof objec);
console.log(typeof heros);


// *********************************************************MEMORY*************************************************
// *********************************************************MEMORY*************************************************
// *********************************************************MEMORY*************************************************


// Stack (Primitive) , Heap (Non-Primitive)

