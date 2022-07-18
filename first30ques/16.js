//Fibonacci Sequence using for loop


let limit = process.argv[2];
if(limit <= 0) {
    console.log("Nothing to print")
    process.exit(0)
}

let a = 0;
let b = 1;
if(limit == 1) {
    console.log(a)
    process.exit(0)
}
console.log(a + "\n" + b)

for(let i=1 ; i<=limit-2 ; i++) {

    let c = a+b;
    console.log(""+c);
    a = b;
    b = c
}
