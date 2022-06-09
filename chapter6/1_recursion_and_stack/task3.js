//the solution must be fast. loops are usually more efficient than recursion

let fib = (n) => {

    if(n<=2)
        return 1;

    else if(n==3)
        return 2;

    let a = 1;
    let b = 1;
    let c = 2;


    for(let i=3 ; i<n ; i++) {
        a=b;
        b=c;
        c=a+b;
    }
    return c;
};

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 5527939700884757