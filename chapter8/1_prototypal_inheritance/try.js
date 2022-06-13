let vegetarian = {
    veg_food: true,
    talk: function() {
        console.log("I am a human being")
    }
};

let non_vegetarian = {
    non_veg_food: true,
}

//superuser-user type relation. superuser(extra) inherits user(basic)
//extra.proto = basic
non_vegetarian.__proto__ = vegetarian;

console.log("A non-vegetarian eats non-vegetarian food: "+non_vegetarian.non_veg_food);
console.log("A non-vegetarian eats vegetarian food as well: "+non_vegetarian.veg_food);

non_vegetarian.talk();
vegetarian.talk();


//writing doesn't work for prototypes. obviously, because you only go looking in the prototype for a property if you don't find it in the original object
//in this case, what will happen is that we'll find walk() immediately in non_vegetarian. So no need to look in vegetarian
non_vegetarian.talk = function() {
    console.log("I want food")
}
non_vegetarian.talk()
vegetarian.talk() //original value is still unaffected



console.log("\n\n\n"+JSON.stringify(vegetarian));
console.log("\n"+JSON.stringify(non_vegetarian)+"\n\n\n");

//demonstrating that getters and setters are an exception
vegetarian.fav_food = ['Vegetables', 'Paneer', 'Chana'];
//non_vegetarian.fav_food = ['Chicken', 'Mutton'];

Object.defineProperty(vegetarian, "top2", {
    get() { return "I love " + this.fav_food[0] + " and " + this.fav_food[1];},
    set(Value) {this.fav_food[0] = Value;}
}); 


console.log("BEFORE EXPERIMENT: "+vegetarian.top2);
console.log("BEFORE EXPERIMENT: "+non_vegetarian.top2);

non_vegetarian.top2 = "Chicken";

console.log("AFTER EXPERIMENT: "+vegetarian.top2);
console.log("AFTER EXPERIMENT: "+non_vegetarian.top2);


//non_vegetarian.__proto__

for(let i in non_vegetarian) {

    let ownOrNot = non_vegetarian.hasOwnProperty(i);

    if(ownOrNot)
        console.log("Own property: "+i);
    else
        console.log("Prototypal property: "+i)
}
