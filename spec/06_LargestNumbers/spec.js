/* globals describe it */

const expect = require('chai').expect;
const largestOfFour = require('../../src/06_LargestNumbers/');

describe('06. Return Largest Numbers in Arrays', () => {
  describe('#largestOfFour()', () => {
    it('should return an Array', () => {
      expect(largestOfFour([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]])).to.be.an('array');
      expect(Array.isArray(largestOfFour([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]))).to.be.true;
    });
    it('should throw an error when a type other than Array is passed', () => {
      expect(function () {
        largestOfFour(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        largestOfFour(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        largestOfFour({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        largestOfFour(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        largestOfFour(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should throw an error when the passed array does not contain only sub-arrays', () => {
      expect(function () {
        largestOfFour(['str', [0, 1, 2], false]);
      }).to.throw(TypeError, 'The parent array must only contain subarrays.');
    });
    it('should throw an error when types other than numbers are in the sub-arrays', () => {
      expect(function () {
        largestOfFour([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [1, 2, 'str', 3]]);
      }).to.throw(TypeError, 'All sub-arrays must contain numbers only.');
    });
    it('should return an array containing the largest number in each sub-array', () => {
      expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])[0]).to.equal(5);
      expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])[1]).to.equal(27);
      expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])[2]).to.equal(39);
      expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])[3]).to.equal(1001);
      expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])[0]).to.equal(27);
      expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])[1]).to.equal(5);
      expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])[2]).to.equal(39);
      expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])[3]).to.equal(1001);
    });
  });
});
