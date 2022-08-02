// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("All is well. You may now relax")
//     },5000)
// });


// let onResolve = (msg) => {
//     console.log(msg)
// }

// let onReject = (error) => {
//     console.log(error)
// }


// promise.then(onResolve);
// promise.catch(onReject);


//--------------------------------------------------------------------


// let promise = new Promise((resolve, reject) => {

//     setTimeout(()=>{
//         reject(new Error("Internal Panga"))

//     }, 3000)
// })

// let onResolve = (value) => {
//     console.log("All is well. You may relax")
//     console.log("Value received:", value, "\nStatus:", promise.status)
// }

// let onReject = (error) => {
//     console.log("Something went wrong", error);
// }

// promise.then(onResolve)
// promise.catch(onReject)

//---------------------------------------------------------------------------

// const promise = new Promise((resolve,reject) => {

//     // setTimeout(() => {
//     //     resolve("You passed! Your percentage: "+90)
//     // }, 2000);

//     setTimeout(() => {
//         reject(new Error("Could not fetch marks from DB"))
//     },2000)
// })


// let onResolve = msg => {
//     console.log(msg)
// }

// promise.finally(() => console.log("Time to see your result"))
// promise.then(onResolve)
// promise.catch((err) => {
//     console.log("Something went wrong:",err)
// })




//---------------------------------------------------------------------------

// function delay(ms) {
//     return promise = new Promise(resolve => {
//         setTimeout(()=>{ 
//             resolve()
//         }, ms)
//     })
// }
  
// delay(3000).then(() => console.log('runs after 3 seconds'));


// new Promise(resolve => {
//     setTimeout(() => {
//         resolve(1)
//     },1000)
// })
// .then((value) => {
//     console.log(value)
//     return value*2
// })
// .then((value) => {
//     console.log(value);
//     return value*2
// })
// .then((value) => {
//     console.log(value);
//     return value*2
// })

//-----------------------------------------------------------------

// new Promise(resolve => {

//     setTimeout(() => {
//         resolve(1)
//     },1000)
// })
// .then((value) => {

//     console.log(value)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value*2)
//         }, 1000)
//     })
// })
// .then(value => {
//     console.log(value)
// })

//-------------------------------------------------------------

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("User 1 says: I'm Vikram. How are you?")
//     }, 2000)
// })
// .then((msg) => {
//     console.log(msg)
//     let myArr = msg.split(" ");
//     return new Promise(resolve => {
//         setTimeout(() => { 
//             resolve("User 2 says: Hi "+ myArr[4] +"! I'm fine thank you!")
//         },2000)
//     })
// })
// .then((reply) => {
//     console.log(reply);
//     let myArr2 = reply.split(" ");
//     console.log("PS: His name is " + myArr2[4])
// })

//------------------------------------------------------

// //UNHANDLED REJECTIONS

// new Promise(function() {
//     noSuchFunction(); // Error here (no such function)
//   })
//     .then(() => {
//       // successful promise handlers, one or more
//     }); // without .catch at the end!

//-----------------------------------------------------------


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("HI!")
//         },2000)
//     })

//     let res = await promise
//     console.log(res)
// }
// f()

//------------------------------------
