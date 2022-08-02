//Check if a String Starts With Another String

let str = "Welcome to the Jungle";
let starter = "wel";

if(str.length < starter.length) {
    console.log("Invalid input")
    process.exit(0)
}

if(str.toLowerCase().startsWith(starter.toLowerCase()))
    console.log(str + " indeed starts with " + starter);

else
    console.log(str + " does not start with " + starter)