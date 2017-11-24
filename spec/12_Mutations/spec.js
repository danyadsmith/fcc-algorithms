/* globals describe it */

const expect = require('chai').expect;
const mutation = require('../../src/12_Mutations/');

describe('12. Mutations', () => {
  describe('#mutation(arr)', () => {
    it('should be a function', () => {
      expect(mutation).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(mutation(['hello', 'hi'])).to.be.a('boolean');
    });
    it('should throw an error when the first argument is not an Array', () => {
      expect(function () {
        mutation(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        mutation(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        mutation({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        mutation(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        mutation(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should return true when all letters in the second string in the array are in the first string in the array', () => {
      expect(mutation(['hello', 'hell'])).to.be.true;
      expect(mutation(['video', 'dove'])).to.be.true;
      expect(mutation(['jasmine', 'jam'])).to.be.true;
    });
    it('should return false when all letters in the second string in the array are not in the first string in the array', () => {
      expect(mutation(['hello', 'help'])).to.be.false;
    });
    it('should ignore case when checking letters', () => {
      expect(mutation(['hello', 'Hell'])).to.be.true;
      expect(mutation(['video', 'doVe'])).to.be.true;
      expect(mutation(['jasmine', 'jAm'])).to.be.true;
    });
  });
});