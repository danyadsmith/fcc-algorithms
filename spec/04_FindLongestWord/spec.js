/* globals describe it */

const expect = require('chai').expect;
const findLongestWord = require('../../src/04_FindLongestWord/');

describe('04. Find the Longest Word', () => {
  describe('#findLongestWord()', () => {
    it('should return a number', () => {
      expect(findLongestWord('')).to.be.a('number');
    });
    it('should throw an error when a type other than string is passed', () => {
      expect(function () {
        findLongestWord(true);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        findLongestWord(20);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        findLongestWord({});
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        findLongestWord(null);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        findLongestWord(undefined);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
    });
    it('should return the length of the longest word', () => {
      expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
      expect(findLongestWord('May the force be with you')).to.equal(5);
      expect(findLongestWord('Google do a barrel roll')).to.equal(6);
      expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
      expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).to.equal(19);
    });
  });
});
