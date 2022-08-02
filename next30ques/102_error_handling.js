// try {

//     let divisionByZeroError = new Error("We cannot divide by zero!")

//     let a = 12;
//     let b = 0;
//     sdfghjk
//     if(b == 0)
//         throw divisionByZeroError
    
    

//     console.log(a/b)
// }
// catch(err) {
//     console.error("Something just went horribly wrong:",err)
// }
// finally {
//     console.log("And that's the end of the program! See you tomorrow")
// }

//-----------------------------------------------------------------------

// var something = (function() {
//     var executed = false;
//     return function() {
//         if (!executed) {
//             executed = true;
//             // do something
//             console.log("hi")
//         }
//     };
// })();

// something(); // "do something" happens
// something(); // nothing happens




// function parentContext() {
//     let willWork = true;
//     return function myFunc() {

//         if(willWork) {
//             willWork = false;
//             //write your code here
//             console.log("Hi my name is Vikram")
//         }
//     }    
// }

// let thisShallOnlyWorkOnce = parentContext();
// thisShallOnlyWorkOnce();
// thisShallOnlyWorkOnce();
// thisShallOnlyWorkOnce();

//--------------------------------------------


