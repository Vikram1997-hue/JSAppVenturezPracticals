//Convert the First Letter of a String into UpperCase

let str = "this is how we do this";
let modifiedStr = str[0].toUpperCase() + str.substring(1,);

console.log("BEFORE: " + str);
console.log("AFTER: " + modifiedStr)