//Replace Characters of a String

//replace all a's with B's


//APPROACH 1: O(n) TIME

// let str = "Shadow Life by Slash And Myles Kennedy";
// let modifiedStr = "";

// for(let i in  str) {
//     if(str[i] == 'a') {
//         modifiedStr = modifiedStr + str.substring(modifiedStr.length, +i) + 'B';
//     }
// }
// modifiedStr = modifiedStr + str.substring(modifiedStr.length, );

// console.log("BEFORE: " + str);
// console.log("AFTER:  " + modifiedStr)



/*APPROACH 2: still O(n) time, but uses in-built functions so is hopefully internally 
optimized in its working at an architectural level*/

let str = "Shadow Life by Slash And Myles Kennedy";
let splitArr = str.split("a");
let modifiedStr = splitArr.join("B")
console.log("BEFORE: " + str);
console.log("AFTER: " + modifiedStr);
