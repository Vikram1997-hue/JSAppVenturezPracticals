//in this program, we shall make use of command line input
let shuffle = (arr) => {

    //Fisher-Yates algo
    if(arr.length==0)
        return;
    
    for(let i=arr.length-1 ; i>0 ; i--) {

        let swapIndex = Math.floor(Math.random() * (i+1));

        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
    }

    return arr;
}


let arr=[];
for(let i=2 ; i<process.argv.length ; i++) {

    arr.push(+process.argv[i]);
}

console.log("BEFORE: "+arr);
console.log("AFTER: "+shuffle(arr));
