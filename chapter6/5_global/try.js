// var g=5;
// console.log( global.g );


var a1 = 1;
let a2 = 2;
console.log( global.a1 );
console.log( global.a2 );

let name="Vikram";
if(name == "Vikram") {

    var b1 = 3;
    let b2 = 4;

    console.log( global.b1 );
    console.log( global.b2 );
}

var c1 = process.argv[2];
let c2 = process.argv[3];

console.log( global.c1 );
console.log( global.c2 );
