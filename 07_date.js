//Dates

let mydate= new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());
console.log(typeof mydate);

//delacre a specific date

let mycreateddate= new Date(2023, 0 , 23, 5,3);

console.log(mycreateddate.toDateString());


console.log(mycreateddate.toLocaleString());


//input date in specific fromat


//like mm yy dd

let myformatdate = new Date("2023-01-14")

console.log(myformatdate.toDateString());

// Time stamps

let mytimestamp= Date.now(); // gives value in mili second

console.log(mytimestamp);
console.log(mycreateddate.getTime());

console.log(Math.floor(mytimestamp/1000)); // to get value in second



//few more methods with date


let newdate = new Date();

console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getMonth());
console.log(newdate.getTime());
console.log(newdate.getDay());
console.log(newdate.getTimezoneOffset());
console.log(newdate.getDay());


newdate.toLocaleString('default', {
    weekday:"long"
})




























