//Convert Object to String

const { string } = require("mathjs");

let obj1 = {
    name: "Myles Kennedy",
    lineOfWork: "Music",
    age: 52
};

let obj2 = {
    vocals: {
        voiceType: "Tenor",
        octaves: 4,
        //styles: ["hard rock", "melodic metal", "blues"]
    },
    guitars: {
        rhythm: true,
        lead: true,
        endorsedBy: "PRS"
    }
};


let string1 = JSON.stringify(obj1);
let string2 = JSON.stringify(obj2);

console.log(string1, typeof string1, "\n", obj1, typeof obj1)
console.log("\n\n", string2, typeof string2, "\n", obj2, typeof obj2)