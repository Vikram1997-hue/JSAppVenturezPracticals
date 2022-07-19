//Sort Words in Alphabetical Order

let str = "Everything around me's mine, can't see through the sties in my eyes";
let wordsArr = str.split(" ");
console.log("BEFORE: " + wordsArr);
console.log("BEFORE (string format): " + str + "\n")


for(let i in wordsArr) {


    if(i == wordsArr.length-1)
        break
    
    let actualMinPos = i;
    let min = wordsArr[actualMinPos];

    for(let j= +i + 1 ; j<wordsArr.length ; j++) {

        if(wordsArr[j].toLowerCase() < min.toLowerCase()) {
            min = wordsArr[j];
            actualMinPos = j;
        }
    }

    let temp = wordsArr[i];
    wordsArr[i] = min;
    wordsArr[actualMinPos] = temp;
}

console.log("AFTER: " + wordsArr);
let sortedStr = wordsArr.join(" ");
console.log("AFTER (String format): " + sortedStr);

// let result = "a" > "Emily";
// console.log(result)







