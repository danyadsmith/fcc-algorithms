/* globals describe it */

const expect = require('chai').expect;
const confirmEnding = require('../../src/07_ConfirmTheEnding/');

describe('07. Confirm the Ending', () => {
  describe('#confirmEnding(str, target)', () => {
    it('should return a boolean', () => {
      expect(confirmEnding('string', 'ing')).to.be.a('boolean');
    });
    it('should throw an error when a type other than string is passed', () => {
      expect(() => {
        confirmEnding(true, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        confirmEnding(20, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        confirmEnding({}, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        confirmEnding(null, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        confirmEnding(undefined, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        confirmEnding('str', true);
      }).to.throw(TypeError, 'The parameter target must be a string.');
      expect(() => {
        confirmEnding('str', 20);
      }).to.throw(TypeError, 'The parameter target must be a string.');
      expect(() => {
        confirmEnding('str', {});
      }).to.throw(TypeError, 'The parameter target must be a string.');
      expect(() => {
        confirmEnding('str', null);
      }).to.throw(TypeError, 'The parameter target must be a string.');
      expect(() => {
        confirmEnding('str', undefined);
      }).to.throw(TypeError, 'The parameter target must be a string.');
    });
    it('should not use the built-in method .endsWith()', () => {
      expect(confirmEnding.toString()).not.to.contain('.endsWith(');
    });
    it('should return true when the end of the str matches the target', () => {
      expect(confirmEnding('string', 'ing')).to.be.true;
      expect(confirmEnding('belong', 'long')).to.be.true;
      expect(confirmEnding('antidepressant', 'depressant')).to.be.true;
    });
    it('should return false when the end of the str does not match the target', () => {
      expect(confirmEnding('string', 'nng')).to.be.false;
      expect(confirmEnding('belonging', 'long')).to.be.false;
      expect(confirmEnding('animate', 'imat')).to.be.false;
    });
  });
});
