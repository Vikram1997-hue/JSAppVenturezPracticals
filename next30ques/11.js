//Count the Number of Vowels in a String



// APPROACH 1: Too many iterations. Bad. TC = O(n), but no. of computations is high
//AVG TIME = 77.2ms

// let str = "ABIII by Alter Bridge, out this August";
// let splitArra = str.toLowerCase().split("a")
// splitArre = str.toLowerCase().split("e")
// splitArri = str.toLowerCase().split("i")
// splitArro = str.toLowerCase().split("o")
// splitArru = str.toLowerCase().split("u")


// console.log(splitArra)
// console.log(splitArre)
// console.log(splitArri)
// console.log(splitArro)
// console.log(splitArru)

// console.log("No. of vowels in " + str + " = " + (splitArra.length + splitArre.length + splitArri.length + splitArro.length + splitArru.length - 5));



//APPROACH 2: RegEx. TC = O(n), but no. of computations is lower
//Avg time = 79.6ms

let str = "ABIII by Alter Bridge, out this August";
let allVowelMatches = str.match(/(a|e|i|o|u)/gmi);
console.log("No. of vowels = " + allVowelMatches.length)