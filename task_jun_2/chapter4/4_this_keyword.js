let user = {
    "name": "Vikram",
    age: 24,
    company: "AppVenturez"
};

user["display"] = function() {
    alert(this.name + " works in " + this.company);
}

user.display();
//trying alternative syntax
user["name"] = "Kushal";
user["display"]();