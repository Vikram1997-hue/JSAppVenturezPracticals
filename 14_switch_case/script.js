let num = 10;
switch(num) {

    case 0: alert("Binary 0");
            break;

    case 1: alert("Binary 1");
            break;

    case 10: alert("Binary 2");
            break;

    case 11: alert("Binary 3");
            break;
    
    default: alert("Greater than 2-bit binary number");
}

//type matters in switch
num = prompt("Enter n", '');

switch(Number(num)) {

    case 0: alert("Binary 0");
            break;

    case 1: alert("Binary 1");
            break;

    case 10: alert("Binary 2");
            break;

    case 11: alert("Binary 3");
            break;
    
    default: alert("Not recognized as 2-bit binary number");
}

//fallthrough occurs without break statement
num = 2;
switch(num) {

    case 1: alert("One");
    case 2: alert("Two");
    case 3: alert("Three");
    case 4: alert("Four");
    case 5: alert("Five");
}


//fallthrough may be intentionally used
let age = prompt("Age test! Type in your age", 'Type here');
switch(Number(age)) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:alert("You are legally a child");
            break;
    
    default: alert("With an age like that, you're definitely not a child");
}

