/*Q1. You've a range of 0-5. You need to find the missing number in  this array [4,3,1,0,5] */

let arr = [4,3,1,0,5];

let set = new Set(arr);
/*set was used because it uses hashing for internally storing the values. This will result in 
O(1) retrieval time. This does not make a difference for an array of length 5, but this helps 
make our code more scalable and robust
*/
let i;
for(let i=0 ; i<=arr.length ; i++) {
    
    if(!set.has(i)) {
        console.log(i + " is missing")
        break;
    }
}
