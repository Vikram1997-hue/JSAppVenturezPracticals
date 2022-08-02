// //create a simple promise + with finally + variations

// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("Promise has fortunately resolved")
//     // }, 2000)

//     setTimeout(() => {
//         reject(new Error("bahut bada panga"))
//     }, 2000)
// });

// // let onFulfilled = (value) => {
// //     console.log(value)
// // }

// // let onRejected = (error) => {
// //     console.error("Bhai panga ho gaya:",error);
// // }

// promise.finally(() => {
//     console.log("And the result is --")
// })
// promise.then((value) => {
//     console.log(value)
// });
// promise.catch((error) => {
//     console.error("bahut bhaari panga:", error)
// });



//------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("All is well.")
//     // }, 2000)

//     setTimeout(() => {
//         reject(new Error("Bhai panga ho gaya"))
//     }, 2000)
// });

// promise.finally(() => console.log("RESULTS --->"))
// promise.then((value) => {
//     console.log(value)
// })
// promise.catch((error) => {
//     console.log(error)
// })


//------------------------------------------------------------------

//task from javascript.info

// function delay(ms) {
//     // your code
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
  
// delay(3000).then(() => console.log('runs after 3 seconds'));


//-------------------------------------------------------------------------

// //handling errors with then

// new Promise(resolve => {
//     // setTimeout(() => {
//     //     resolve("All is well")
//     // }, 2000)

//     setTimeout(() => {
//         resolve(new Error("Bahut ganda scene ho gaya"))
//     }, 2000)
// })
// .then(
//     value => console.log(value),
//     error => console.error("Something went wrong", error)
// )

//-------------------------------------------------------------------------------

// //example 1: 1,2,4,... at same time

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     },2000)
// })
// .then((value) => {
//     console.log(value)
//     return value*2
// })
// .then((value) => {
//     console.log(value)
//     return value*2
// })
// .then((value) => console.log(value))


//-------------------------------------------------------------------------------

//example 2: 1,2,4,... at 2 second gaps time

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// })
// .then((value) => {
//     console.log(value)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value*2)
//         }, 1000)
//     })
// })
// .then((value) => {
//     console.log(value)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value*2)
//         }, 1000)
//     })
// })
// .then((value) => console.log(value))

//--------------------------------------------------------------------------

// let obj = {
//     name: "Vikram",
//     age: 25
// }
// console.log(obj)
// let obj2 = JSON.stringify(obj)
// console.log(typeof(obj2), obj2)


//-------------------------------------------------------------------------

// //conversation

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hi, my name is Vikram")
//     }, 2000)
// })

// promise.finally(() => console.log("THE CONVERSATION GOES LIKE THIS --->"))
// promise.then((value) => {

//     console.log(value);
//     let splitArr = value.split(" ");
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Hi " + splitArr[4] + ", how are you?")
//         }, 2000)
//     })
// })
// .then((value) => 
//     console.log(value)
// );


//----------------------------------------------------------


//NOW JS NOTES BEGIN


//----------------------------------------------------------

// //implicit try-catch

// new Promise((resolve, reject) => {
//     resolve("hello")
// })
// .then((value) => {
//     throw new Error("GANDA PANGA!")
// })
// .catch((err) => {
//     console.error("Sorry but:", err)
// })

// new Promise((resolve, reject) => {
//     resolve("Hello")
// })
// .then((msg) => {
//     blabla(msg)
// })
// .catch((err) => {
//     console.error("Sorry bhai lekin:" + err)
// })

//----------------------------------------------------------------------

// //re-throwing

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Good evening peepuuuuuuuuul!")
//     }, 2000)
// })
// .then((msg) => {
//     // sayHi()
//     // throw new Error("Bhai panga ho gaya")
//     console.log(msg)
// })
// .catch((err) => {
//     if(err.name == 'ReferenceError')
//         console.log("Our apologies, continuing to next sentence")
//     else {
//         console.log("I'm not trained to handle such an error")
//         throw err
//     }
// })
// .then(() => console.log("Are your ready to go down in history with us?!"))
// .catch((err) => {
//     console.error("UNFORTUNATELY, AN UNKNOWN ERROR HAS OCCURRED:", err)
// })

//--------------------------------------------------------------------------------

// //unhandled rejections

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello")
//     }, 1000)
// })
// .then((msg) => {
//     sayHi(msg) //no handler exists for this error. Therefore global error 
// })

//--------------------------------------------------------------------------------

//promisify the below function

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
  
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
//     document.head.append(script);
//   }
  
// function loadScriptPromise() {

//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(null, script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));

//         document.head.append(script);
//     })   
// }

//-----------------------------------------------------------------------------------

//do i need async/await with Promise.all()

Promise.allSettled([
    new Promise((resolve) => {
        setTimeout(() => {resolve("I am resolve 1")}, 2000)
    }),
    new Promise((resolve) => {
        setTimeout(() => {resolve("I am resolve 2")}, 5000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("I am error 3")
        }, 10000)
    })
])
.then(responses => {
    responses.forEach(response => {
        console.log(response)
    });
}) 

/*
DISPUTE - (from JavaScript.info)
async/await works well with Promise.all
When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

*/