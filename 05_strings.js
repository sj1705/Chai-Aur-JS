// after lunch break

const name="shrestha"

const repos = "33"

console.log(name+repos); // Old Syntax


// now new way
// string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repos}`); // new syntax mostly this is used now



const gameName = new String('shrestha')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(3,4);

console.log(anotherString);

const newStringOne = "      shrestha ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sj1705.com//shrstha%20jaiswal"
console.log(url.replace('%20','-'));

console.log(url.includes('shr'));

// convert string  to array based on something {method : split}

console.log("fhvbefj-efjbgjgfj-jiefgk".split('-'));





