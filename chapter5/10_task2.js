let topSalary = (salaries) => {


    let arr = Object.entries(salaries);
    if(arr.length == 0) {
        console.log("Please populate the object with data");
        return null;
    }

    let max = arr[0];
    for(let i of arr) {
        if (i[1] > max[1])
            max = i;
    }
    return max[0];
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))
