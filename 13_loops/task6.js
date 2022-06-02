let result;
do {
    result = prompt("Enter a number greater than 100", 'Type here');
    //alert(Number(result));
}while(Boolean(Number(result)) == false || result <=100);


//while( isNaN(Number(result)) || (result <= 100 && result!=null) );