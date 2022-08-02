//Check Whether a String Starts and Ends With Certain Characters

let str = "a lotta memorabilia"; //"I am the walrus"
let chosenChar = 'a';

if(str.charAt(0).toLowerCase() == str.charAt(str.length-1).toLowerCase() && str.charAt(0).toLowerCase() == chosenChar)
    console.log("Bookended with", chosenChar);
else
    console.log("Not bookended with", chosenChar);