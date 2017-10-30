/* globals describe it */

const expect = require('chai').expect;
const factorialize = require('../../src/02_FactorializeANumber/');

describe('02. Factorialize a Number', () => {
  describe('#factorialize()', () => {
    it('should return a number', () => {
      expect(factorialize(0)).to.be.a('number');
    });
    it('should return the factorial of a number', () => {
      expect(factorialize(5)).to.equal(120);
      expect(factorialize(10)).to.equal(3628800);
      expect(factorialize(20)).to.equal(2432902008176640000);
      expect(factorialize(0)).to.equal(1);
    });
    it('should throw an error when a non-number is passed as num', () => {
      expect(function () {
        factorialize('hello');
      }).to.throw(TypeError, 'Invalid Type. The parameter num must be a number.');
    });
  });
});
