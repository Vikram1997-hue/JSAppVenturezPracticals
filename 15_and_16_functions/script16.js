let sayHi = function() {
    alert("Hi");
};
sayHi();

function sample() {
    alert("I am a sample");
}
alert(sample);


//demonstrating callback
function ageCheck(question, yes, no) {

    if (confirm(question))
        yes();
    else
        no();
}

function printAdult() {
    alert("You are an adult");
}
function printChild() {
    alert("You are still a child.");
}
ageCheck("Are you above 18?", printAdult, printChild);
//in this example, yes and no functions of ageCheck() are called callback functions


