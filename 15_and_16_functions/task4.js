let x = prompt("Enter x:", '');
let n = prompt("Enter n:", '');



alert(pow(x,n));

function pow(x,n) {
    
    if(Boolean(Number(n)) == false || n<1)
        return "Invalid n value entered";
    else if(Boolean(Number(x)) == false && x!=0)
        return "Invalid x entered"
    
    return x**n;
}

