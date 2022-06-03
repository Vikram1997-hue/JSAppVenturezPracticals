describe("pow", function() {

    it("raises 2 to the power of 3", function() {
        //function to test this use case
        assert.equal(pow(2,3), 8);
    });


    it("raises 5 to the power of 2", function() {
        assert.equal(pow(5,2), 25);
    });
});