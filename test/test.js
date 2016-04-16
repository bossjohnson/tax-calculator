var code = require("../main");
var expect = require('chai').expect;

describe('Tax Calculator', function() {
    it('should tax 10% on the first $10', function() {
        expect(code.calculate(1)).to.equal(0.1);
        expect(code.calculate(10)).to.equal(1);
    });

    it('should tax 7% on the second $10', function() {
        expect(code.calculate(15)).to.equal(1.35);
    });

    it('should tax 5% on the third $10', function() {
        expect(code.calculate(27)).to.equal(2.05);
    });

    it('should tax 3% on everything else', function() {
        expect(code.calculate(200)).to.equal(7.30);
        expect(code.calculate(5000)).to.equal(151.3);
    });

    it('zero and negative values should return an error message', function() {
        expect(typeof code.calculate(-500)).to.equal('string')
        expect(typeof code.calculate(0)).to.equal('string')
    });
});
