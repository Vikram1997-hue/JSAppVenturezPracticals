function greeting() {
    alert("Hello everyone!");
}

greeting();

function average(m1, m2, m3) { //since you don't have datatypes in JS, you dont write "int m1, int m2, int m3"
    
    let avg = Number(m1) + Number(m2) + Number(m3);
    avg /= 3;
    return avg;
}
let ans = average(100,99,98);
alert(ans);

//local variables
function customGreeting() {

    let name = "Vikram"; //not accessible outside of this function
    alert("Hi "+name+"!");
}
customGreeting();


//outer variables are of course accessible inside function. global scope contains function scope
let chapter = "functions";
function printChapter() {
    alert(chapter);
    chapter = "starting new chapter tomorrow!";
    alert(chapter);
}
printChapter();




//in case of same name outer and local variables
function chapterTest() {

    let chapter = "mongo";
    alert(chapter);
}
chapterTest();



//functions in JS exhibit CALL BY VALUE
let drink = "pepsi";
function printDrink(drink) {
    drink = "i prefer coca-cola";
    alert(drink);
}
alert("drink before function call: "+drink);
printDrink(drink);
alert("drink after function call: "+drink);


//if a function is called, but an argument is not provided, then the corresponding value becomes undefined.
function printFood(food) {
    alert(food);
}
printFood();


//the fix: defaut values
function printFoodRevised(food = "Butter Chicken") {
    alert(food);
}
printFoodRevised();
printFoodRevised("Rajma Chawal");





//default param can be any expression
function customGreetingv2(name = Reminder()) {
    alert("How are you "+name);
}

function Reminder() {
    alert("You were supposed to enter your name. Now you'll get a weird greeting and it's all your fault");
}
customGreetingv2();
customGreetingv2("Vikram");



//since you don't have datatypes in JS, you can return different types of values from the same function
function byeBye(age) {
    if(age==22)
        return;
    
    return age*2;
}
byeBye(22);
let twiceOfAge = byeBye(10);
alert(twiceOfAge);


