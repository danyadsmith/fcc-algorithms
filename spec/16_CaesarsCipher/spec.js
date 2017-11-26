/* globals describe it */

const expect = require('chai').expect;
const rot13 = require('../../src/16_CaesarsCipher/');

describe('16. Caesars Cipher', () => {
  describe('#rot13(str)', () => {
    it('should be a function', () => {
      expect(rot13).to.be.a('function');
    });
    it('should return a string', () => {
      expect(rot13('GRATITUDE')).to.be.a('string');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        rot13(true, '');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        rot13(20, '');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        rot13({}, '');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        rot13(null, '');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        rot13(undefined, '');
      }).to.throw(TypeError, 'The parameter str must be a string.');
    });
    it('should throw an error when the string contains lowercase letters', () => {
      expect(() => {
        rot13('hELLO');
      }).to.throw(Error, 'The parameter str must contain only uppercase letters.');
    });
    it('should perform the ROT-13 substitution cipher on the str argument and return the result', () => {
      expect(rot13('URYYB')).to.eql('HELLO');
    });
    it('should ignore characters that are not alphabetical', () => {
      expect(rot13('URYYB JBEYQ')).to.eql('HELLO WORLD');
      expect(rot13('URYYB JBEYQ!!!')).to.eql('HELLO WORLD!!!');
      expect(rot13('JUNG JBHYQ LBH NGGRZCG GB QB VS LBH XARJ LBH PBHYQ ABG SNVY?')).to.eql('WHAT WOULD YOU ATTEMPT TO DO IF YOU KNEW YOU COULD NOT FAIL?');
    });
  });
});