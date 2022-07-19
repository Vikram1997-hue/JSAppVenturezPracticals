//simple Calculator

let calc = (num1, num2) => {

    function add() {
        console.log(num1 + " + " + num2 + " = " + (num1+num2));
    }

    function subtract() {
        console.log(num1 + " - " + num2 + " = " + (num1-num2));
    }

    function multiply() {
        console.log(num1 + " x " + num2 + " = " + (num1*num2));
    }

    function divide() {
        console.log(num1 + ` \u00F7 ` + num2 + " = " + (num1/num2));
    }

    calc.add = add;
    calc.subtract = subtract;
    calc.multiply = multiply;
    calc.divide = divide;
}

calc(1,2);
calc.add()
calc.subtract();
calc(3,10);
calc.divide();
calc.multiply()
calc.add()
