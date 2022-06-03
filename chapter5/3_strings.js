"Hello\nWorld" == `Hello
World`
//true
"\u{20b9}"
//'₹'
`\u{20b9}`
//'₹'
'\u{20b9}'
//'₹'





//the following line is commented cuz of error
//alert("The backslash: \")
//VM3791:1 Uncaught SyntaxError: Invalid or unexpected token

alert("The backslash: \\") //output: The backslash: \ 
//undefined
alert("Double backslash: \\")//output: Double backslash: \ 
//undefined

//the following line is commented cuz of error
//alert("Double backslash: \\\")
//VM3867:1 Uncaught SyntaxError: Invalid or unexpected token


alert("Double backslash: \\\\")//output: Double backslash: \\




let str = "blablabla"
//undefined
str.length
//9
str[0] == str.charAt(0)
//true
let str2 = "Hello";
for(let i of str2) {
    console.log(i);
}
//proxyConsoleLog.js:12 H
//proxyConsoleLog.js:12 e
//2proxyConsoleLog.js:12 l
//proxyConsoleLog.js:12 o
//undefined


"mississippi".indexOf("ssi")
//2
"mississippi".indexOf("ssi",3)
//5
"mississippi".lastIndexOf("ssi")
//5
"mississippi".lastIndexOf("ssi",4)
//2
"mississippi".lastIndexOf("ssi",5)
//5
str = "Stringify"
//'Stringify'
str.slice(2)
//'ringify'
str.slice(-4,-1)
//'gif'
str.substring(4,1)
//'tri'
str.substring(-4,-1)
//''

