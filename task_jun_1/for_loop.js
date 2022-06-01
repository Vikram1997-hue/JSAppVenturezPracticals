const input = [1,2,3,4,5,6,6,6];


let score = 0;
for(let i=0 ; i<input.length ; i++) {

    let add = input[i]%2 == 0 ? 1 : input[i]!=5 ? 3 : 5;
    score+=add;
}

alert("Final score = " + score);