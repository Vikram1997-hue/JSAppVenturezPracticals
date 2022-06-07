let filterRangeInPlace = (arr,a,b) => {

    if(arr.length == 0) {
        console.log("Invalid input detected");
        return;
    }
    
    console.log("\nORIGINAL: "+arr);
    for(let i in arr) {
        if(typeof arr[i] != 'number' || arr[i]<a || arr[i]>b)
            arr.splice(i,1);
    }

    console.log("\nMODIFIED: "+arr)
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// EXPECTED OUPUT: [3, 1]