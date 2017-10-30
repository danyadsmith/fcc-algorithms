/* globals describe it */

const expect = require('chai').expect;
const reverseString = require('../../src/01_ReverseAString/');

describe('01. Reverse a String', () => {
  describe('#reverseString()', () => {
    it('should return the reverse of a string', () => {
      expect(reverseString('hello')).to.equal('olleh');
      expect(reverseString('Danya')).to.equal('aynaD');
      expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
    });
  });
});
