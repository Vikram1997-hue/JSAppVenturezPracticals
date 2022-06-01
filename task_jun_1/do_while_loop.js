const input = [17,19,21];


let score = 0, i=0;
do {
    if(i==0 && input.length == 0)
        break;
    //since do-while is exit controlled
    
    if(input[i]%2 == 0)
        score++;
    else if(input[i]!=5)
        score+=3;
    else if(input[i]==5)
        score+=5;

    i++;

} while(i<input.length);

alert("Final score = " + score);