//Check the Number of Occurrences of a Character in the String

let str = "Vikramaditya Bhatnagar"; //"too good to be true"
let chosenChar = 'o'
let splitArr = str.split(chosenChar)

console.log("No. of occurences of " + chosenChar + " = " + (splitArr.length-1))
