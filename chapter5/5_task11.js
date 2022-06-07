let getAverageAge = (arr) => {

    let sum = 0;
    for(let i in arr) 
        sum += arr[i].age;
    
    return sum/arr.length;
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr))
