let myObj = {
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
            },
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

//console.log(myObj)

let recursivePrint = (obj) => {

    for(let key in obj) {
        console.log(key, ": ", obj[key])
    }
}

recursivePrint(myObj);
console.log("Now again")
console.log(myObj);