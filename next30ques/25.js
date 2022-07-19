//Remove a char from a String

// //for first occurence
// let str = "There was once a young manz";
// let char = 'x';

// let pos = str.indexOf(char);

// if(pos == -1) {
//     console.log("Character not found in string");
//     process.exit(0);
// }

// let modifiedStr = str.substring(0, pos) + str.substring(pos+1,);
// console.log(modifiedStr);




//for all occurrences
let str = "There was once a young man";
let char = 'n';
let splitArr = str.split(char);
let modifiedStr = splitArr.join("")
console.log(modifiedStr)

