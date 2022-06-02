let user;
alert("Before initialization: " + (user ?? "Anonymous"));

user = "Vikram";
alert("After initialization: " + (user ?? "Anonymous"));

let a = null;
let b = undefined;
let c = "Pepsi";
alert(a ?? b ?? c ?? "Coca-Cola");
//OR

//please note that a value is considered defined if it has any value EXCEPT undefined and null.
//therefore - false, NaN, 0, "" (empty string) do not fall under this category
a = "";
b = "";
alert(a ?? b ?? c ?? "Coca-Cola");
//OR
alert(a || b || c || "Coca-Cola");//different output, since to OR, all equivalents of Boolean 0 are false


alert((a || b) ?? c ?? "Coca-Cola"); //?? and || only allowed together if brackets are used
alert((a && b) ?? c ?? "Coca-Cola");//?? and && only allowed together if brackets are used




