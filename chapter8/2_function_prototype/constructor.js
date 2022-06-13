let homo_sapiens = {
    standsOnTwoLegs: true,
    opposableThumbs: true,
    tail: false
}

function Person(fname, lname, age, ) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
};

Person.prototype = homo_sapiens;//literally means: "When a new Person is created, set its [[Prototype]] to homo_sapiens".

let p1 = new Person("Vikramaditya", "Bhatnagar", 24);
console.log(typeof p1);

let p1_JSON = JSON.stringify(p1);
console.log(p1_JSON)

console.log(`Does ${p1.fname} have opposable thumbs? Ans: ${p1.opposableThumbs}`)
console.log(`Does ${p1.fname} have a tail? Ans: ${p1.tail}`)
