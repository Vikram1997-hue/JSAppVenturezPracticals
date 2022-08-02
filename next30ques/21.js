//Generate Random Strings


let strLength = Math.floor(1 + Math.random()*10)
let count = 0;

while(count != strLength) {

    //let random = Math.floor(97 + Math.random()*26) //for only lowercase letters
    let random = Math.floor(Math.random()*256)
    process.stdout.write(String.fromCharCode(random))
    count++
}
console.log()
