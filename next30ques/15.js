//Clone a JS Object


// //APPROACH 1 - Shallow clone 
// let src = {
//     company: "AppVenturez Mobitech Pvt. Ltd.",
//     hq: "Noida, UP",
//     domain: "Technology",
// }

// let dest = {};

// console.log("\t\tBEFORE")
// console.log("src = ", src, "\ndest = ", dest, "\n\n");

// Object.assign(dest, src)

// console.log("\t\tAFTER")
// console.log("src = ", src, "\ndest = ", dest, "\n\n");





//Better solution - DEEP CLONING
let cloneDeepWith = require('lodash.clonedeepwith');

let professionalProfile = {
    name: "Vikramaditya",
    resume: {
    
        education: {
            tenth: {
                school: "SJA",
                city: "Dehradun",
                board: "ICSE",
                yearOfPassing: 2013
            },
            twelfth: {
                school: "The Indian School",
                city: "New Delhi",
                board: "CBSE",
                yearOfPassing: 2015
            },
            graduation: {
                college: "SICSR",
                university: "Symbiosis International University",
                city: "Pune",
                yearOfPassing: 2018
            },
            postGraduation: {
                college: "USICT",
                university: "Guru Gobind Singh Indraprastha University",
                city: "New Delhi",
                yearOfPassing: 2021
            }
        },
        career: {
            company1: {
                name: "LHB",
                city: "Delhi",
                role: "WordPress Dev"
            },
            company2: {
                name:"AppVenturez",
                city: "Noida",
                role: "Backend Dev (Trainee)"
            }
        }
    }
};

let professionalProfileClone = cloneDeepWith(professionalProfile);


function printObjectRecursively(obj) {

    for(let key in obj) {
        console.log(key, ": ", obj[key])
    }
}

//professionalProfileClone.career.company2.name = "AppVenturez Mobitech Pvt. Ltd.";
console.log("SOURCE: ");
printObjectRecursively(professionalProfile);
console.log("\n\nDESTINATION: ");
printObjectRecursively(professionalProfileClone);
console.log("----------------------------------------");
console.log("\n\nChecking if deep clone: ");
professionalProfileClone.resume.career.company2.name = "AppVenturez Mobitech Pvt. Ltd.";
printObjectRecursively(professionalProfileClone);
console.log("Original is still -")
printObjectRecursively(professionalProfile)