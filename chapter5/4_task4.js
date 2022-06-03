function sumInput() {

    let arr = [];
    let result;
    let sum = 0;
    while(true) {
        result = prompt("Enter a value for the array",'Type here...');
        if(isFinite(result) && result!=null) {
            arr.push(result);
            sum+=Number(result);
        }
        else 
            break;
    }
    return sum;
}

alert(sumInput());

