//Check Armstrong Number

let num = 153;
let sum = 0;
let dupl = num

while(dupl > 0) {
    let d = dupl%10;
    sum += d**3;
    dupl = Math.floor(dupl/10);
}

if(sum == num)
    console.log(num + " is armstrong")

else
    console.log(num + " is not armstrong")