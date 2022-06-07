//demonstrating the use of command line arguments
let userName = process.argv[2];
let userYears = +process.argv[3];

let user = { name: userName, years: userYears };

// your code to the left side:
let {name, years: age, isAdmin=false } = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
