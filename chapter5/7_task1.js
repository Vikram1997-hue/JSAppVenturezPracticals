let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readStatus = new WeakSet();
for(let i in messages)
  readStatus.add(messages[i]) //this works, since a WeakSet may only contain objects

console.log( readStatus.has(messages[0]) );
messages.shift();
console.log( readStatus.has({text: "Hello", from: "John"}) );
