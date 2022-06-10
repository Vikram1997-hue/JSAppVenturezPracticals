let student = {

    name: "Vikramaditya",
    region: "Delhi",
    nickname: null,

    get StudentNickName() {
        return this.nickname = this.name.slice(0,6);
    },

    set studentTransfer(new_city) { // a setter must have exactly one parameter (else error)
        this.region = new_city
    }
};

console.log(student.name);
console.log(student.nickname);
console.log(student.StudentNickName);


console.log(`Before my transfer, I live in ${student.region}`);
//both getters and setters are called the same way you would normally do these object-related tasks
student.studentTransfer = "Dehradun"; //just imagine this was an actual property, and you were modifying its value
console.log(`After my transfer, I will be in ${student.region}`)