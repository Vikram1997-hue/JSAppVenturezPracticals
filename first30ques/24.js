//LCM of Two Number

let num1 = 12;
let num2 = 8;
let dupl1 = num1;
let dupl2 = num2;

let lcm = 1;
outer: while(num1!=1 && num2!=1) {

    for(let i=2 ; i<=(num1>num2 ? num2 : num1) ; i++) {

        if(num1%i == 0 && num2%i == 0) {
            lcm *= i;
            num1 /= i;
            num2 /= i;
            continue outer;
        }
    }
    break;
}

lcm *= num1;
lcm *= num2;
console.log("LCM of " + dupl1 + " and " + dupl2 + " = " + lcm);