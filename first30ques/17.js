//Fibonacci Sequence using recursion

let recursion = (num1, num2, limit) => {

    if(limit < num1)
        return;
    
    console.log(num1);

    recursion(num1+num2, num1, limit)
}

recursion(0,1,200)