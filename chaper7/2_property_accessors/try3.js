//can I have a hybrid data-accessor property?
//ans: Nope.
let user = {
    fname: "Vikramaditya",
    lname: "Bhatnagar"
};

Object.defineProperty(user, "fullName", {

    get() {
        return this.fname + this.lname;
    },

    //since set is just a version of writable property flag
    writable: true, //COMMENT THIS LINE, error will be gone
});

console.log(user.fullName);

