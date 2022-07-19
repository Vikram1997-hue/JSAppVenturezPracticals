//remove a property from an object

let person = {
    firstName: "Vikramaditya",
    lastName: "Bhatnagar",
    age: 24
};

console.log("BEFORE: ", person);
delete person.lastName;
delete person['firstName']
console.log("AFTER: ", person);
