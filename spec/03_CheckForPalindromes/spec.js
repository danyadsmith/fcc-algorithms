/* globals describe it */

const expect = require('chai').expect;
const palindrome = require('../../src/03_CheckForPalindromes/');

describe('03. Check for Palindromes', () => {
  describe('#palindrome()', () => {
    it('should return a boolean', () => {
      expect(palindrome('eye')).to.be.a('boolean');
    });
    it('should ignore non-alphanumeric characters when checking for palindromes', () => {
      expect(palindrome('_eye')).to.be.true;
    });
    it('should ignore case when checking for palindromes', () => {
      expect(palindrome('RaceCar')).to.be.true;
    });
    it('should return true when the string is a palindrome', () => {
      expect(palindrome('eye')).to.be.true;
      expect(palindrome('race car')).to.be.true;
      expect(palindrome('A man, a plan, a canal. Panama')).to.be.true;
      expect(palindrome('My age is 0, 0 si ega ym.')).to.be.true;
    });
    it('should return false when the string is not a palindrome', () => {
      expect(palindrome('not a palindrome')).to.be.false;
      expect(palindrome('1 eye for of 1 eye.')).to.be.false;
    });
  });
});
