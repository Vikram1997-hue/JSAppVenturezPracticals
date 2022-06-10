let printNumbers = (from, to) => {

    if(from > to) {
        console.log("Invalid input detected")
        return
    }

    let ctr = from;
    let total_Seconds = (to-from+1)*1000;
    let timerId = setInterval(function() {
        while(ctr<=to)
            console.log(ctr++);
    },1000);


    //clearInterval(timerId)
    
}

printNumbers(12,20)
