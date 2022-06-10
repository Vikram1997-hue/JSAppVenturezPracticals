let user = {};
let user2 = {
    name: "Pete",
    age: 30
};
Object.defineProperty(user, "name", {
    value: "John" //the remaining 3 are false
});
console.log(user.name);//expected: John
console.log(user);
console.log(user2);

//attempting in JSON
let str = JSON.stringify(user);//why is this empty? in browser, it shows
console.log(str);
str = JSON.stringify(user2);//as expected
console.log(str)

console.log(Object.keys(user).length + ", " + Object.keys(user2).length);
