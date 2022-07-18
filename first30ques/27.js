//Guess a Number

let lowerLimit = 10; //1
let upperLimit = 15; //3

let randomNumber = lowerLimit + Math.floor(Math.random()*(upperLimit-lowerLimit+1))
console.log("Random Number = " + randomNumber)