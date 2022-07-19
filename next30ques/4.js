//ASCII Value of Character Using codePointAt()

let str = "Vikram is 24 yrs. old"; //"A.F.D. turns 35 this week!"

for(let i in str) {

    console.log(str[i] + " ---> " + str.codePointAt(i))
}