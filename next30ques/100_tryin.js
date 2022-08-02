// let stopThis = setTimeout(callMe, 1500);
// clearTimeout(stopThis)

//const { sum } = require("mathjs");


// function callMe() {
//     console.log("Good evening")
// }


//----------------------------------------------
// function printTime() {
//     console.log(new Date())
// }


// let myVar = setInterval(printTime, 1000);

// let plzWork = () => clearInterval(myVar)

// setTimeout(plzWork, 5010)


//----------------------------------------------

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);


// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// console.log(users)
// users.sort(byField('age'));
// console.log(users)


// function byField(fieldName) {
//     return (a, b) => a[`${fieldName}`] > b[`${fieldName}`] ? 1 : -1
// }



// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//       let j = i
//       let shooter = function() { 
//         console.log( j ); 
//       };
//       shooters.push(shooter); 
//       i++;
//     }
  
    
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   // all shooters show 10 instead of their numbers 0, 1, 2, 3...
//   army[0](); // 10 from the shooter number 0
//   army[1](); // 10 from the shooter number 1
//   army[2](); // 10 ...and so on.



// let obj = {
//     name: "Vikram",
//     age: 25
// };

// let obj2 = {...obj};
// obj2.company = "AppVenturez";

// console.log("obj --->", obj)
// console.log("obj2 --->", obj2)




// let a = 21;
// let b = 3;
// //let i = 5
// function add(a,b) {
   
//     if(typeof(a) != 'number' || typeof(b) != 'number') {
//         console.log("Invalid input!")
//         console.log(i)
//         return
//     }
    
//     return +a + +b;
// }
// console.log(add(a,b))

//-----------------------------------------


// //using closures, a function that tells how many times it's been called
// function makeCounter() {

//     let i=1;
//     return function myFunc() {
//         console.log(i++)    
//     }
// }

// let counter = makeCounter();
// counter();counter();counter();

//--------------------------------------------

// //sum(a)(b)

// function sum(a) {

//     return function func(b) {
//         console.log(a+b)
//     }
// }

// sum(1)(5)

//-------------------------------------------------


setTimeout(() => {
    console.log(13)
}, 3000)

setTimeout(() => {
    console.log(12)
}, 1000)
