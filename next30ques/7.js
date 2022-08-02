//Reverse a String

let str = "Mary had a little lamb, its fleece was white as snow!";
let splitArr = str.split("");
splitArr = splitArr.reverse();
let reversedStr = splitArr.join("");

console.log("BEFORE: " + str);
console.log("AFTER: " + reversedStr);
