//Quadratic Equation
//const { sqrt } = require('mathjs');
let math = require('mathjs')
let a = 1, b=-2, c = 1;

let discriminant = b**2 - 4*a*c;

if(discriminant == 0) {
    console.log("Roots are real and equal");
    let roots = -1*b / (2*a);
    console.log("Root 1 = Root 2 = "+ roots)
    process.exit(0)
}

if(discriminant > 0) {
    discriminant = Math.sqrt(discriminant);
    console.log("root of... = " + discriminant) //test line
    let root1 = (-1*b + discriminant)/(2*a);
    let root2 = (-1*b - discriminant)/(2*a);
    console.log("Roots are real and different");
    console.log("Root 1 = "+root1+ ", Root 2 = " + root2)  
}

else {
    discriminant = math.sqrt(-1*discriminant)
    console.log("root of... = " + discriminant) //test line
    console.log("Roots are complex and different");
    let fixedPart = -1*b / 2*a;
    let complexNumber = math.complex(0,discriminant/(2*a));
    //console.log(complexNumber);
    let root1 = math.add(complexNumber, fixedPart); 
    let root2 = math.add(math.multiply(complexNumber,-1), fixedPart);
    console.log("Root 1 = "+root1+ ", Root 2 = " + root2)  
}