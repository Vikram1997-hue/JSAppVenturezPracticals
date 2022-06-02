//regular for
for(let j=1 ; j<=10 ; j+=2) 
    alert(j);


//skipping initialization
let i = 1;
for( ; i<=5 ; i++) {
    alert(i);
}
//this way we can also access i outside the loop (because it's scope is no just the for loop)
alert(i);
alert(i);
alert(i);



//skipping updation
let k=1;
for( ; k<=10 ; )
    alert(k*=2)
/*normally in a for loop, i updates to (the exit condition)+1. But it then checks whether condition is true or not, finds that it is false, and breaks.
So in a for loop from 1 to n, i actually becomes i+1, but the loop doesn't run for i+1.
However, since our updation is now inside for loop, the body executes once for i+1 and then the loop breaks */



for( ; ; ) {
    alert("I will print infinite times");
}

//the following is technically unreachable code
while(true)
    alert("I will print infinite times");






