let value = true;
alert(`${value} is ${typeof value}`);

value = String(value);
alert(`${value} is ${typeof value}`);

alert("23" + "2");
alert("23" / "2");
//to bring some clarity here, we can use explicit type conversion.
alert(Number("23") + Number("2"));




//special cases:
let age = Number("an arbitrary string instead of a number");
alert(age);
age = Number(undefined);
alert(`undefined converts to ${age}`);
age = Number(null);
alert(`null converts to ${age}`);
age = Number(true);
alert(`true is ${age}`);
age = Number(false);
alert(`false is ${age}`);

alert(Number("    123    "));/*for strings - first, a trim happens. after the 
                                trim - 
                                1. if number found, it converts to a numeric type with that value
                                2. if string is empty after trim, value=0
                                3. if trimmed string does not have numbers, NaN
                                */
alert(Number("    Vikram    "));                               



//Boolean conversion
alert(Boolean(1));
alert(Boolean(""));
alert(Boolean("0"));



alert("We shall now print the table of 2");

for(let i=1 ; i<=10 ; i++) {
    
    if(i==2) {
        alert(`2 X ${i} = ${2*i}. This is interesting, because 2^2 = ${2**2} and also 2+2 = ${2+2}`);
        continue;    
    }
    alert(`2 X ${i} = ${2*i}`);
}

alert("Proof that JS is executed left to right - ");
alert(2+2+'1');
alert('1'+2+2);

//the operator that exhibits polymorphism when dealing with numbers and Strings is + (BINARY PLUS).
//with -,*,/ JS treats strings with numeric content as numbers in such cases.
alert(6 - '2');
alert('6' / 2);
alert('6'*'2');


//using unary plus as a shorthand for Number() explicit type conversion
let marks1 = "98";
let marks2 = "88";
let marks3 = "95";
alert(+marks1 + +marks2 + +marks3 + " is the total out of 300");
//this also shows that unary plus has higher precedence than binary plus



//assignment operator (=) also returns a value
let a=1;
let b=2
let c = 3 - (a = b+1); //equivalent to c = 3-(b+1), except the value of b+1 is also stored in a
alert(c);
alert(a);


a=b=c=4;
//or
a=4;
b=a;
c=b;


//comma operator
a = (1+2, 3+4);
alert(a + " to demonstrate comma operator"); 
