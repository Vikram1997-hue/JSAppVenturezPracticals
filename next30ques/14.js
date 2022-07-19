//Check if a Key Exists in an Object

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
    }
};

let keysArr = Object.keys(myObj);
console.log(keysArr.includes('married'))

let searchKey = 'gender'
console.log(keysArr.includes(searchKey))
