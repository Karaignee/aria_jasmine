/*all the things the files SHOULD be able to do, 
what the answer should 
be and what happens if it throws an error */

describe ("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect (Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
    it("should be able to deal with strings", function() {

        expect (function() {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("Not a number"));
    })
})