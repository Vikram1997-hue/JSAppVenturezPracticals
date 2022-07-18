//Downward Triangle Star Pattern


//tried 3 different variations
let height = 5;

for(let i=1 ; i<=height ; i++) {
    for(let j=height ; j>=i ; j--)
        process.stdout.write("*")
    console.log()
}

console.log("\n\n")

for(let i=1 ; i<=height ; i++) {

    for(let j=1 ; j<i ; j++)
        process.stdout.write(" ")
    for(let j=i ; j<=height ; j++)
        process.stdout.write("*")
    console.log()
}

console.log("\n\n")


for(let i=1 ; i<=height ; i++) {
    for(let j=height ; j>=i ; j--)
        process.stdout.write("*")
    for(let j=1 ; j<=2*(i-1) ; j++)
        process.stdout.write(" ")
    for(let j=height ; j>=i ; j--)
        process.stdout.write("*")
    console.log()
}
