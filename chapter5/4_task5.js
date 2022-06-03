function getMaxSubSum(arr) {

    // if(arr.length == 0)
    //     return 0;

    let sum = 0;
    let currentSum = 0;
    for(let i in arr) {
        currentSum += arr[i];
        sum = Math.max(sum, currentSum);
    }

    return sum >=0 ? sum : 0;
}

