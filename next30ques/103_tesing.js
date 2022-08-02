// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Sorry bhai"))
//     }, 2000)
// })

// let onRejected = (err) => {
//     console.error("BHai sorry lekin", err)
// }

// // promise.catch(onRejected)


//----------------------------------------------------------

// //Closure - write a fn that can only be called once. and never again

// function callMe() {
//     let firstTime = true;
//     return function thisShallOnlyWorkOnce() {
//         if(firstTime == true) {
//             firstTime = false;
//             console.log("I have been executed")
//         }
//     }
// }

// let a = callMe();
// a()
// a()
// a()
// a()
// a()
// a()

//------------------------------------------------------------------------------------

// //jitni baar call karoge ek fn ko, vo ++ karega. first call - 1 dega, 2nd call pe 2 dega, phir call karoge to 3 dega


// function makeCounter() {
//     let count = 1;
//     return function() {
//         console.log("I have run " + (count++) + " times")
//     }
// }

// let counter = makeCounter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()

//------------------------------------------------------------------------

// //simulate a clock with limited batteries

// function printTime() {
//     console.log(new Date())
// }

// let clock = setInterval(() => printTime(), 1000)
// setTimeout(() => {clearInterval(clock)}, 5010)
