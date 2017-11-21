/* globals describe it */

const expect = require('chai').expect;
const slasher = require('../../src/11_SlasherFlick/');

describe('11. Slasher Flick', () => {
  describe('#slasher(arr, howMany)', () => {
    it('should be a function', () => {
      expect(slasher).to.be.a('function');
    });
    it('should return an Array', () => {
      expect(slasher([0, 1, 2], 2)).to.be.a('array');
    });
    it('should throw an error when the first parameter is not an Array', () => {
      expect(function () {
        slasher(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        slasher(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        slasher({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        slasher(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        slasher(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should throw an error when the second parameter is not a number', () => {
      expect(() => {
        slasher([], true);
      }).to.throw(TypeError, 'The parameter howMany must be a number.');
      expect(() => {
        slasher([], 'str');
      }).to.throw(TypeError, 'The parameter howMany must be a number.');
      expect(() => {
        slasher([], {});
      }).to.throw(TypeError, 'The parameter howMany must be a number.');
      expect(() => {
        slasher([], null);
      }).to.throw(TypeError, 'The parameter howMany must be a number.');
      expect(() => {
        slasher([], undefined);
      }).to.throw(TypeError, 'The parameter howMany must be a number.');
    });
    it('should return a mutated array with howMany elements removed from the beginning of the array', () => {
      expect(slasher([0, 1, 2], 1)).to.eql([1, 2]);
      expect(slasher([0, 1, 2, 3, 4, 5, 6], 3)).to.eql([3, 4, 5, 6]);
      expect(slasher([1, 2, 3], 2)).to.eql([3]);
      expect(slasher(['egg', 'bacon', 'lettuce', 'tomato'], 1)).to.eql(['bacon', 'lettuce', 'tomato']);
    });
  });
});