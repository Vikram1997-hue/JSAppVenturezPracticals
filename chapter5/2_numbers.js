let million = 1000000;
//better to add syntactic sugar (to make the no. more readable).
//let million = 1_000_000; //is acceptable

//e<n> where n is an integer means 10^n
let a = 1e9;//means 1 * (10^9)
let b = 7.4e6; //means 7.4 * (10^6)
a = 1.23e-6; //means 1.23 * (10^-6)



let c = 0b111; //decimal equivalent -> 7
let d = 0o377; //decimal equivalent -> 255
//please note that 7 == c and also 7 === c (since the datatype for both is number, only the number system is different)





let num2 = 255;

alert( num2.toString(16) );  // ff
alert( num2.toString(2) );   // 11111111
alert(123456..toString(26)) //2 dots for literals




//the following has been copy-pasted from console

let num = 12.34006;
//undefined
num.toFixed(1);
//'12.3'
num.toFixed(4);
//'12.3401'
let n = 12.0000000009;
//undefined
n.toFixed(1)
//'12.0'
n.toFixed(4)
//'12.0000'
n.toFixed(7)
//'12.0000000'
n.toFixed(8)
//'12.00000000'
n.toFixed(9)
//'12.000000001'. This tells us that the "inserting 1" concept only happens when the passed argument is the decimal position immediately before the non-zero digit

num = 12.36;
num.toFixed(5); //12.36000 (more zeroes will be added if needed)



0.1+0.2
//0.30000000000000004
(0.1+0.2).toFixed(2)
//'0.30'
(0.1+0.2).toFixed(5)
//'0.30000'
(0.1+0.2).toFixed(1)
//'0.3'

0.1+0.2 == 0.3 //false because of precision loss
(0.1+0.2).toFixed(1) == 0.3
//true
(0.1+0.2).toFixed(1) === 0.3 //because toFixed() returns a string
//false
+((0.1+0.2).toFixed(1)) === 0.3 //using unary + to convert to number type
//true


Infinity == Infinity
//true
isFinite
//ƒ isFinite() { [native code] }
isFinite(-9)
//true
isFinite("-87")
//true
isFinite("str")
//false
isFinite(false) //because true == 1 and false == 0
//true
isFinite(Infinity) == isFinite(-Infinity)
//true
Infinity === -1*-Infinity
//true


parseInt("0xffpx")
//255
Math.random()
//0.8312128058607435
Math.max(1,2,5,-9)
//5
Math.min(1,2,5,-9)
//-9

