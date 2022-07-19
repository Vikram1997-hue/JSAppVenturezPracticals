//Sum of Natural Numbers Using Recursion

let sumOfNatural = (num) => {

    if(num<1){
        console.log("Invalid input");
        process.exit(0)
    }
    if(num==1)
        return num;
    
    return num+sumOfNatural(num-1);
}

console.log(sumOfNatural(3))