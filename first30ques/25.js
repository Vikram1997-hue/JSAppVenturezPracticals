//Factors of Positive Number

let num = 98
if(num<0) {
    console.log("Invalid input")
    process.exit(0)
}
if(num == 0) {
    console.log("Zero has no factors")
    process.exit(0)
}

console.log("Printing factors of "+ num + "...")
for(let i=1 ; i*i<=num ; i++) {

    if(num%i == 0) {
        console.log(i);
        if(num/i != i)
            console.log(num/i)
    }
}