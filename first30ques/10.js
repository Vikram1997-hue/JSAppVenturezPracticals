//Largest Number Among Three Numbers


//array approach
// let a=1,b=9,c=0;

// let largest=a;

// if(largest<b)
//     largest = b;

// if(largest<c)
//     largest = c;

// console.log("Largest of "+[a,b,c] + " = " + largest);


//multiple if approach
let a=100,b=9,c=0;

let largest;


largest = (a,b,c) => {
    if(a>=b) {
        if(a>=c)
            return a;
        return c;
    }

    if(b>=c)
        return b;
    return c    
}
console.log('The largest of \'em all is = ' + largest(a,b,c))
