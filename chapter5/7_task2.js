let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let wasReadWhen = new WeakMap();

for(let i in messages) {
    wasReadWhen.set(messages[i], Date.now())
}

console.log( wasReadWhen.get(messages[0]) );
messages.shift();
console.log( wasReadWhen.get({text: "Hello", from: "John"}) );//we know that a map returns undefined if key doesn't exist in the map
