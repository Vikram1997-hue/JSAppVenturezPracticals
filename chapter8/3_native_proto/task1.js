function f() {
    alert("Hello!");
}

f.__proto__.defer = function(time_period) {
    setTimeout(() => {
        console.log("Hello!");
    }, time_period);
}
  
f.defer(5000); // shows "Hello!" after 1 second
