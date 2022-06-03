let num1 = prompt("Enter 1st number", '');
let num2 = prompt("Enter 2nd number", '');

isFinite(num1) && isFinite(num2) ? 
    alert(parseFloat(num1) + parseFloat(num2)) : 
    alert("Incorrect input detected");