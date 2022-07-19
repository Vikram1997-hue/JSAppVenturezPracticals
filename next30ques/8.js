//Using object literal

let myObj = {
    firstName: "Vikramaditya", //string value
    lastName: "Bhatnagar",
    
    age: 24, //numeric value
    
    techStack: ['NodeJS', 'PostGreSQL', 'Sequelize', 'Express.js'], //array value
    
    careerDetails: { //object value
        tenth: "SJA Dehradun",
        twelfth: "The Indian School, N.D.",
        BCA: "SICSR Pune",
        MCA: "USICT Dwarka"
    },
    
    married: false, //boolean value
    
    salutation: function() { //function value
        console.log("Hi! Nice to see you")
    },

    nestedNested: {
        school1: {
            name: "SJA",
            city: "Dehradun",
            state: "Uttrakhand"
        },
        school2: {
            name: "TIS",
            city: "New Delhi",
            state: "Delhi"
        }
    }
};

console.log(myObj);

console.log("Guy's name is " + myObj.firstName + " " + myObj['lastName']);
console.log("He's " + myObj['age'] + " years old")
myObj.salutation()
