let result = prompt("Please enter your name", "Type here");

let choice = confirm(`Hello ${result}. Do you like JavaScript so far?`);

let msg = choice == true ? "That is good to hear." : "WHAT?! Why?";

alert(msg);


