let student = {
    name: "Kushal",

    sleepStatus: function() {
        this.sleeping = true;
    }

    //ALTERNATE SYNTAX
    // sleepStatus() {
    //     this.sleeping = true;
    // }
};

// student.sleepStatus();
// console.log(student.sleeping)

/*
    CONCLUSION: If a function in an object does not find a data property of a certain name, it
    will create it.
*/

let student2 = {
    school: "The Indian School",

}

student2.__proto__ = student;
student2.sleepStatus();
console.log(student.sleeping)
console.log(student2.sleeping)
//conclusion: In a method call, "this" is always the object before the dot.