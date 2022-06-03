let twotimes = n => n*2;

let threeimes = (n) => n*3;

alert(twotimes(10));
alert(threeimes(10));



let age = prompt("What is your age", '');

let response = age >= 18 ? () => alert("Hello!") : () => alert("Hey kid!");
response();


let fourtimes = n => {
    let result = n*4;
    return result;
};
alert( fourtimes(100) );