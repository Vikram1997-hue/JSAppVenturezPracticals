let map = new Map();

map.set("name", "John");

let my_keys=[]
for(let i of map.keys()) {
    my_keys.push(i)
}

console.log(my_keys)

//can push now, for example -
my_keys.push("age");
console.log(my_keys)