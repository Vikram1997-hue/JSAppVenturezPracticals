let count = (obj) => Object.keys(obj).length;

let user = {
    name: 'John',
    age: 30,
    address: "USA"
  };
  
console.log( count(user) ); // 2
