//Prime Number

let num = 89;
if(num<1) {
    console.log("Not a prime")
    process.exit(0)
}
for(let i=2 ; i*i<=num ; i++) {
    if(num%i == 0) {
        console.log("Not a prime")
        process.exit(0)
    }
}
console.log("Prime");