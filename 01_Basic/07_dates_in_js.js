// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);
// console.log(myDate);

// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.toDateString())

// let myTimeStamps =  Date.now();

// console.log(myTimeStamps);


// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}));