let sumSalaries = (salaries) => {


    let arr = Object.values(salaries);
    if(arr.length == 0)
        return 0;
    
    let sum = 0;
    for(let i of arr) {
        sum += +i
    }
    return sum;
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log( sumSalaries(salaries) ); // 650

