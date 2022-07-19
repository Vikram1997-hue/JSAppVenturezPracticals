//Add Two Number

let a = process.argv[2];
let b = process.argv[3];

let c = b==undefined ? +a : +a + +b
console.log("The sum of " + a + " and " + b + " is = " + c);