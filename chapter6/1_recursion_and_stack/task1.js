//comment and uncomment to see different solutions


// //solution 1
// let sumTo = (n) => {
//     let sum = 0;
//     for(let i=1 ; i<=n ; i++)
//         sum += i;
//     return sum;
// };




// //solution 2
// let sumTo = (n) => {

//     if(n<=1)
//         return n;
    
//     return n+sumTo(n-1);
// };

// console.log(sumTo(4))




//solution 3
let sumTo = (n) => n * (n + 1) / 2;
console.log(sumTo(3))
