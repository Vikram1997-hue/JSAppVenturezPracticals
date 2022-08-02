
//Promise.all()

// Promise.all([
//     new Promise(reject => {
//         setTimeout(() => {
//             reject(new Error("yaar pata nahi kyun lekin panga ho gaya"))
//         }, 2000)
//     }),
    
//     new Promise(resolve => {
//         resolve("Hello")
//     }),

//     new Promise(resolve => resolve("World"))
// ])
// .finally("Let's check out the results --->")
// .then(responses => {
//     for(let i in responses) {
//         console.log("Promise no. " + i + " evaluated to: " + responses[i] + ", which is of " + typeof(responses[i]) + " type")
//     }
// })


//----------------------------------------------------------------------------

// //Promise.allSettled()

// Promise.allSettled([
//     new Promise(resolve => setTimeout(() => {resolve("Hi")}, 2000)),
//     new Promise(resolve => setTimeout(() => {resolve("World")}, 3000)),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("sad scenes"))
//         }, 5000)
//     })
// ])
// .finally("Let's check out the results --->")
// // .then((responses) => {
// //     for(let i in responses) {
// //         console.log("Promise #"+i+" evaluated to: " , responses[i]) 
// //     }
// // }) 
// // .catch((responses) => {
// //     for(let i in responses) {
// //         console.log("Promise #"+i+" evaluated to: " , responses[i]) 
// //     }
// // })
// .then(responses => {
//     responses.forEach(response => {
//         if(response.status == 'fulfilled')
//             console.log("VALUE = ", response.value)
//         else if(response.status == 'rejected')
//             console.log("ERROR = ", response.reason)
//     });
// })


//-----------------------------------------------------------------------------

// //Promise.race()

// Promise.race([
//     new Promise(resolve => {console.log("Hi from 1st")
//                             setTimeout(() => {resolve("Hi I AM THE ANSWER")}, 2000)}),
//     new Promise(resolve => {console.log("Hi from 2nd"); setTimeout(() => {resolve("World")}, 3000)}),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi from 3rd")
//             reject(new Error("sad scenes"))
//         }, 10000)
//     })
// ])
// .finally("Let's check out the results --->")
// .then(responses => {
//     console.log(responses)
// });

// console.log("As far as I am concerned, program is over")

//------------------------------------------------------------------------------

// //Promise.any()

// Promise.any([
//     new Promise((resolve, reject) => {  //now try removing resolve
//         // setTimeout(() => {
//         //     resolve("I am resolve 1")
//         setTimeout(() => {
//             reject(new Error("I am error 1"))
//         }, 1000)
//     }),
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve("I am resolve 2")
//         }, 5000)
//     }),
//     new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             resolve("I am resolve 3") //(new Error("I am error 3"))
//         }, 10000)
//     }),
// ])
// .finally("Time to check the results!")
// .then(response => console.log(response))

//--------------------------------------------------------------------------



// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// let myMap = urls.map(url => url.charAt[0])

// console.log(myMap)

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let requests = urls.map(x => fetch(x))

Promise.all(requests => {
    requests.forEach(request => {
        new Promise((resolve, reject) => {
            
        })
    });
})