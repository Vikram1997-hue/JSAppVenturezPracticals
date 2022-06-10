/* Smart getters and setters.

Here, we will have a data property, and some getter/setter functions that will basically perform
operations UPON this data property.

*/

let user = {
    _name: "John", // convention: if a property sarts with _, it is internal and should not be touched from outside the object.
    //this convention makes sense, since all of our accessing will be through the getter and setter methods that follow -

    get name() { 
        return this._name;
    },

    set name(value) {
        if(this._name.length >= 5) {
            console.log("Your name is fine, new value rejected");
            return;
        }
        console.log("\nYour name was too short so it's being changed")
        this._name = value
    }
};

console.log(user.name);
user.name = "Vikram";
console.log(user.name);

