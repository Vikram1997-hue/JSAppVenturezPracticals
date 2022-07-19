//Print Prime Numbers

let printPrimes = (lowerLimit, upperLimit) => {

    console.log("Attempting to print all primes between " + lowerLimit + " and " + upperLimit + "...")
    if(lowerLimit > upperLimit) {
        console.log("Invalid range")
        return
    }

    iloop: for(let i=lowerLimit ; i<=upperLimit ; i++) {

        if(i<2) {
            i=1;
            continue
        }

        for(let j=2 ; j*j<=i ; j++) {
            if(i%j==0)
                continue iloop     
        }
        console.log(i);        
    }
};

printPrimes(1,200)