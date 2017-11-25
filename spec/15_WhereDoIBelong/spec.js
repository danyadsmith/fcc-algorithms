/* globals describe it */

const expect = require('chai').expect;
const getIndexToIns = require('../../src/15_WhereDoIBelong/');

describe('15. Where Do I Belong?', () => {
  describe('#getIndexToIns(arr, num)', () => {
    it('should be a function', () => {
      expect(getIndexToIns).to.be.a('function');
    });
    it('should return a Number', () => {
      expect(getIndexToIns([1, 2, 3], 4)).to.be.a('number');
    });
    it('should throw an error when the first argument is not an Array', () => {
      expect(function () {
        getIndexToIns(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        getIndexToIns(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        getIndexToIns({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        getIndexToIns(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        getIndexToIns(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should throw an error when the second argument is not a number', () => {
      expect(() => {
        getIndexToIns([], true);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        getIndexToIns([], 'str');
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        getIndexToIns([], {});
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        getIndexToIns([], null);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        getIndexToIns([], undefined);
      }).to.throw(TypeError, 'The parameter num must be a number.');
    });
    it('should return the index the num argument should have if inserted into a sorted version of the arr argument', () => {
      expect(getIndexToIns([1, 2, 3], 4)).to.eql(3);
      expect(getIndexToIns([1, 20, 3, 40], 25)).to.eql(3);
      expect(getIndexToIns([50, 100, 25], 75)).to.eql(2);
      expect(getIndexToIns([0, 1, 2, 3], -1)).to.eql(0);
      expect(getIndexToIns([1, 2, 3], 1.5)).to.eql(1);
      expect(getIndexToIns([], 4)).to.eql(0);
    });
    it('should return the first index of the num argument if it already existed in the array', () => {
      expect(getIndexToIns([0, 1, 2, 3, 4, 5], 5)).to.eql(5);
      expect(getIndexToIns([1, 2, 3], 2)).to.eql(1);
    })
  });
});