//Right Triangle Star Pattern

let lengthOfRow = 13;

for(let i=1 ; i<=lengthOfRow ; i++) {

    for(let j=1 ; j<=lengthOfRow-i ; j++) 
        process.stdout.write(" ")
    for(let j=1 ; j<=i ; j++)
        process.stdout.write("*")
    console.log()
}
