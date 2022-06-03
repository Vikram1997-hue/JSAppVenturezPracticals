let readNumber = () => {
    let result = prompt("Enter a number please", '0'); //local variable
    if(result == undefined) //when user presses cancel
        result = null;
    return result;
}

let result; //global variable
while( !isFinite(result) ) {
    result = readNumber();
    //alert(result);
}
(result != null) ?
    alert(`Accepted`) : // ${result}
    alert("Read: null")