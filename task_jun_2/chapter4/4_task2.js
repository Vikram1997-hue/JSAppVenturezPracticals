let calculator = {
    // ... your code ...
    "read": function() {
        this.a = prompt("a?",'Type here...'); //because of using this keyword, there will always be a reference to a and b as variables within the current object (with the values that have been input for this instance)
        this.b = prompt("b?",'Type here...');
    },

    "sum": function() {
        return (+this.a + +this.b);
    },

    "mul": function() {
        return (+this.a * +this.b)
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );