//Armstrong Number in an Interval

let armstrongInInterval = (lowerLimit, upperLimit) => {

    console.log("Attempting to print all Armstrong numbers in range...")
    if(lowerLimit > upperLimit) {
        console.log("Invalid range provided")
        process.exit(0); 
    }

    for(let i=lowerLimit ; i<=upperLimit ; i++) {

        let dupl = i;
        let sum = 0;
        while(dupl != 0) {
            let d = dupl%10;
            sum += d**3;
            dupl = Math.floor(dupl/10)
        }
        if(sum == i)
            console.log(i)
    }
}

armstrongInInterval(1500,2000)