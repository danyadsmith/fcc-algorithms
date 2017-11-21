/* globals describe it */

const expect = require('chai').expect;
const chunkArrayInGroups = require('../../src/10_ChunkyMonkey/');

describe('10. Chunky Monkey', () => {
  describe('#chunkArrayInGroups(arr, size)', () => {
    it('should be a function', () => {
      expect(chunkArrayInGroups).to.be.a('function');
    });
    it('should return an Array', () => {
      expect(chunkArrayInGroups([0, 1, 2, 3], 2)).to.be.a('array');
    });
    it('should throw an error when the first parameter is not an Array', () => {
      expect(function () {
        chunkArrayInGroups(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        chunkArrayInGroups(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        chunkArrayInGroups({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        chunkArrayInGroups(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        chunkArrayInGroups(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should throw an error when the second parameter is not a number', () => {
      expect(() => {
        chunkArrayInGroups([], true);
      }).to.throw(TypeError, 'The parameter size must be a number.');
      expect(() => {
        chunkArrayInGroups([], 'str');
      }).to.throw(TypeError, 'The parameter size must be a number.');
      expect(() => {
        chunkArrayInGroups([], {});
      }).to.throw(TypeError, 'The parameter size must be a number.');
      expect(() => {
        chunkArrayInGroups([], null);
      }).to.throw(TypeError, 'The parameter size must be a number.');
      expect(() => {
        chunkArrayInGroups([], undefined);
      }).to.throw(TypeError, 'The parameter size must be a number.');
    });
    it('should return a two-dimensional array', () => {
      expect(chunkArrayInGroups([0, 1, 2, 3], 2)[0]).to.be.a('array');
      expect(chunkArrayInGroups([0, 1, 2, 3], 2)[1]).to.be.a('array');
    });
    it('should return internal arrays with a length less than or equal to the size parameter', () => {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4], 2)[0].length).to.eql(2);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4], 2)[1].length).to.eql(2);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4], 2)[2].length).to.be.at.most(2);
    });
    it('should return the right number of internal arrays', () => {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4], 2).length).to.eql(3);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2).length).to.eql(3);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3).length).to.eql(2);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4).length).to.eql(2);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4).length).to.eql(3);
    });
    it('should return the right values in the right positions in each internal array', () => {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[0][0]).to.eql(0);      
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[0][1]).to.eql(1);      
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[0][2]).to.eql(2);      
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[1][0]).to.eql(3);      
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[1][1]).to.eql(4);      
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)[1][2]).to.eql(5);      
    });
  });
});