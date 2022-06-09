let pow = (x,n) => {

    return n==1 ? x : x*pow(x,n-1)
};


let x = +process.argv[2];
let n = +process.argv[3];
console.log( pow(x,n) );