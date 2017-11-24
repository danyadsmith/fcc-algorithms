/* globals describe it */

const expect = require('chai').expect;
const bouncer = require('../../src/13_FalsyBouncer/');

describe('13. Falsy Bouncer', () => {
  describe('#bouncer(arr)', () => {
    it('should be a function', () => {
      expect(bouncer).to.be.a('function');
    });
    it('should return an Array', () => {
      expect(bouncer([0, false, undefined, 'hello'])).to.be.a('array');
    });
    it('should throw an error when the first argument is not an Array', () => {
      expect(function () {
        bouncer(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        bouncer(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        bouncer({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        bouncer(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        bouncer(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should remove all falsy values from the arr argument', () => {
      expect(bouncer([0, false, undefined, 'hello'])).to.be.a('array');
      expect(bouncer([0, false, 'hello', 'world'])).to.not.contain(0);
      expect(bouncer([0, false, 'hello', 'world'])).to.not.contain(false);
    });
    it('should return a mutated version of the arr argument with only truthy values', () => {
      expect(bouncer([0, false, undefined, 'hello'])).to.eql(['hello']);
      expect(bouncer([0, false, 'hello', 'world'])).to.eql(['hello', 'world']);
      expect(bouncer([false, 0, NaN, undefined, null, '', ""])).to.eql([]);
    });
  });
});