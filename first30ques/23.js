//HCF of Two Number

let a = 169;
let b = 13;
let aDupl = a;
let bDupl = b;

let hcf = 1;
outer: while(a!=1 && b!=1) {

    
    for(let i=2 ; i<=((a>b) ? b : a) ; i++) {

        if(a%i == 0 && b%i == 0) {
            hcf *= i;
            a /= i;
            b /= i;
            continue outer;
        }
    }
    break;
}
console.log("HCF of " + aDupl + " and " + bDupl + " = " + hcf)