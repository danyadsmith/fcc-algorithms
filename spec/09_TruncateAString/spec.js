/* globals describe it */

const expect = require('chai').expect;
const truncateString = require('../../src/09_TruncateAString/');

describe('09. Truncate a String', () => {
  describe('#truncateString(str, num)', () => {
    it('should return a string', () => {
      expect(truncateString('string', 1)).to.be.a('string');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        truncateString(true, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        truncateString(20, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        truncateString({}, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        truncateString(null, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        truncateString(undefined, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
    });
    it('should throw an error when the second parameter is not a number', () => {
      expect(() => {
        truncateString('str', true);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        truncateString('str', 'str');
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        truncateString('str', {});
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        truncateString('str', null);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        truncateString('str', undefined);
      }).to.throw(TypeError, 'The parameter num must be a number.');
    });
    it('should throw an error when the second parameter is zero or a negative number', () => {
      expect(() => {
        truncateString('str', -1);
      }).to.throw(RangeError, 'The parameter num must be a positive number.');
    });
    it('should return a truncated str of length num (including the ellipsis) when str is longer than num and num is greater than three', () => {
      expect(truncateString('Help me, Obi-Wan Kenobi. You’re my only hope.', 10)).to.equal('Help me...');
      expect(truncateString('I’m just a simple man trying to make my way in the universe.', 20)).to.equal('I’m just a simple...');
      expect(truncateString('I find your lack of faith disturbing.', 13)).to.equal('I find you...');
      expect(truncateString('You don’t need to see his identification…These aren’t the droids you’re looking for.', 24)).to.equal('You don’t need to see...');
      expect(truncateString('Sorry about the mess.', 8)).to.equal('Sorry...');
    });
    it('should return a string appended with ellipis when the length of str or num is less than or equal to 3', () => {
      expect(truncateString('And', 3)).to.equal('And...');
      expect(truncateString('I', 1)).to.equal('I...');
      expect(truncateString('am', 2)).to.equal('am...');
      expect(truncateString('Absolutely Longer', 2)).to.equal('Ab...');
    });
    it('should not truncate the string when the num parameter and the length of the str parameter are the same', () => {
      expect(truncateString('Stay Curious', 'Stay Curious'.length)).to.equal('Stay Curious');
    });
    it('should not truncate the string when the num parameter is greater than the length of the str parameter', () => {
      expect(truncateString('Stay Curious', 100)).to.equal('Stay Curious');
    });
  });
});
