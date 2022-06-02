let n = prompt("Please enter n", '');

if(Boolean(Number(n)) == false || n<=1)
    alert("Invalid n, must be of Number type with value >= 2");


iloop: for(let i=2 ; i<=n ; i++) {

    //let factors = 0;

    for(let j=2 ; j*j<=i ; j++) {
        if(i%j == 0)
            continue iloop;
    }

    alert(i);
}