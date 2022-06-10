//trying some stuff out
//PRE GITHUB: REMOVE SETTER PART


let user = {
    fname: "Vikramaditya",
    lname: "Bhatnagar",
    age: 24,

    get fullName() {
        return (this.fname+" "+this.lname);
    },

    get ageInFiveYears() {
        return this.age+5
    },

    
};

// Object.defineProperties(user, {
//     // fname: {value: "Vikramaditya", writable: true, enumerable: true, configurable: true},
//     // lname: {value: "Bhatnagar", enumerable: true, writable:true, configurable: true},
//     // age: {value: 24, writable: true, enumerable: true, configurable: true},
//     fname: "Vikramaditya",
//     lname: "Bhatnagar",
//     age: 24,



// });

console.log(`Hi, my name is ${user.fullName}, but you can call me ${user.fname.slice(0,6)} for short.`);
console.log(`I am currently ${user.age} years old, but in 2027 I will be ${user.ageInFiveYears}.`)
