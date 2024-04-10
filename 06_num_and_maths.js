// const num=400;

// console.log(num);

// const num2= new Number(1000)

// console.log(num2);

// console.log(typeof num2.toString());

// console.log(typeof num2.toString().length);

// console.log( num2.toString().length);

// console.log(num2.toFixed(2));

const othernum= 2345.53

// console.log(othernum.toPrecision(7));

const hundreds=10000000

// console.log(hundreds.toLocaleString('en-IN')); // for having comma as per indian standards




// *********************************************************  Maths **************************************************************
// *********************************************************  Maths **************************************************************
// *********************************************************  Maths **************************************************************


console.log(Math.abs);

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6,5,7,34));
console.log(Math.max(4.6,6,3,4));



console.log(Math.random());
console.log((Math.random()*10)+1);



/// to get randome value in a range

const min= 10;
const max =30;

const randomnum= Math.floor(Math.random() * (max-min +1)) +min;

console.log(randomnum);
