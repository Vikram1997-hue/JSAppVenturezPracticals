//Pyramid star pattern in javascript

let height = 10;

for(let i=1 ; i<=height ; i++) {

    for(let j=1 ; j<=height-i; j++) {
        process.stdout.write(" ");
    }
    for(let j=1 ; j<=(2*i)-1 ; j++) {
        process.stdout.write("*");
    }
    console.log()
}
