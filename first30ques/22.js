//Check if the Numbers Have Same Last Digit

let num1 = 555.65;
let num2 = 666.000005;
let dupl1 = num1;
let dupl2 = num2;

if(Number.isInteger(num1) == false) {
    num1 = ""+num1;
    let parts = num1.split('.');
    num1 = +parts[1];
}

if(Number.isInteger(num2) == false) {
    num2 = ""+num2;
    let parts = num2.split('.');
    num2 = +parts[1]
}


if(Number.isInteger(num1) === Number.isInteger(num2) === true) {
    num1%10 == num2%10 ? console.log(dupl1 + " and " + dupl2 + " have same last digits") : console.log(dupl1 + " and " + dupl2 + " have different last digits");

    // console.log(num1%10)
    // console.log(num2%10)
}

