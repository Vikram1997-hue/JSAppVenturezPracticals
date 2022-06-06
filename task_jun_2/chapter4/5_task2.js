function Calculator() { //constructor function
    this.read = function() {
        this.a = prompt("a?",'Type here...'); 
        this.b = prompt("b?",'Type here...');
    },

    this.sum = function() {
        return (+this.a + +this.b);
    },

    this.mul = function() {
        return (+this.a * +this.b)
    }
};

let calcInstance = new Calculator();

calcInstance.read();
alert( calcInstance.sum() );
alert( calcInstance.mul() );