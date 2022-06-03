describe("pow", function() {

    for(let i=0 ; i<=3 ; i++) {
        tests(i);
    }

    function tests(x) {
        let expectedResult = x*x*x;
        it(`raises ${x} to the power of 3`, function() {
            assert.equal(pow(x,3), expectedResult);
        });
    }
});