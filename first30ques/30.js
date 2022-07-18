//Downward Triangle Star Pattern

let noOfRows = 10;

for(let i=noOfRows ; i>=1 ; i--) {

    for(let j=noOfRows-i ; j>0 ; j--)
        process.stdout.write(" ")
    for(let j=2*(i-1)+1 ; j>=1 ; j--)
        process.stdout.write("*")
    console.log()
}
