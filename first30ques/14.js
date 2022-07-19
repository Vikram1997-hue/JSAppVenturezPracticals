//Factorial of a Number using recursion

let factorialWithRecursion = n => {

    if(n<=1)
        return 1;

    return n*factorialWithRecursion(n-1)
}

console.log(factorialWithRecursion(6))
