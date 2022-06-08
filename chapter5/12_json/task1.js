let user = {
    name: "John Smith",
    age: 35
};

user = JSON.stringify(user);
console.log("\nPRINTING JSON OBJECT: "+user);

let userParsed = JSON.parse(user);
console.log(userParsed.name + " " +userParsed.age)
