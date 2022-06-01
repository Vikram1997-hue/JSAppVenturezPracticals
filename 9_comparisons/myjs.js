alert(2>1);
alert(2==1);
alert(2<1);

//or we can store this result
let ans = 2>1;
alert(ans);

alert('z' > 'a'); //based on Unicode (similar to ASCII. First 128 of Unicode = ASCII 0 to 127)
alert('Glow' > 'Glee') //based on Unicode comparison of first differing character
                        //G == G, l == l, o > e. Stop. LHS is greater.
alert('Bee' > 'Be') // true. longer string is always greater


alert("Now comparing different types");
alert(2>'1') //convert then compare. 2>1 => true
alert("01" == 1)
alert(false == 0)
alert(0===false)

//undefined >,<,== 0 always yields false
//null >= 0 true, but null >,== 0 false.
alert(null>=0);
alert(null>0);
alert(null==0);



