//Factorial of a Number using for loop

let factorialWithForLoop = n => {

    if(n<=1)
        return 1;
    
    let ans = 1;
    for(let i=n ; i>1 ; i--) 
        ans*=i;
    
    return ans;
}

console.log(factorialWithForLoop(-2))