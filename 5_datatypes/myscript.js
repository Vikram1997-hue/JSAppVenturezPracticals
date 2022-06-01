let special_number_type = 1/0;
alert(special_number_type);

special_number_type = Infinity;
alert(special_number_type);

let myName = "Vikram";
alert(myName/2); //gives NaN

//any mathematical operation performed upon NaN also yields NaN
alert(NaN/2);
alert(NaN-1);
alert(NaN+3);
alert(NaN*2);
alert(NaN*0);
//the only exception:- NaN**0 equals 1
alert(NaN**0);

let msg = "Hello";
alert(msg)
let msg2 = `Hello ${myName}`
alert(msg2);

//backtick vs quotes
let num1 = 1;
let num2 = 2;
alert('The result is not :' + num1+num2);
alert(`...but instead is : ${num1+num2}`);

alert(4==1)


let num3;
alert(num3)

alert(`${num3} is ${typeof num3}, ${num1} is ${typeof(num1)}, ${myName} is ${typeof(myName)}, ${special_number_type} is ${typeof(special_number_type)}, alert is ${typeof alert}`);
//alert(`typeof is ${typeof(typeof)}`);
//typeof doesn't work on itself




