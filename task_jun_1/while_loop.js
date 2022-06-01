const input = [1,2,3,4,5];


let score = 0, i=0;
while(i<input.length) {

    let add = input[i]%2 == 0 ? 1 : input[i]!=5 ? 3 : 5;
    score+=add;
    i++;
}

alert("Final score = " + score);