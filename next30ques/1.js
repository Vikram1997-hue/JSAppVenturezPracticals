// String is Palindrome or Not

let str= ""

if(str.length == 0 || str.length == 1) {
    console.log(str + " is a palindrome")
    process.exit(0)
}

let arr = str.split("");
arr = arr.reverse();
let reversedStr = arr.join("")

if(str == reversedStr)
    console.log(str + " is a palindrome");
else
    console.log(str + " is not a palindrome")
