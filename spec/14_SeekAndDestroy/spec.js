/* globals describe it */

const expect = require('chai').expect;
const destroyer = require('../../src/14_SeekAndDestroy/');

describe('14. Seek and Destroy', () => {
  describe('#destroyer(arr, 2, 3)', () => {
    it('should be a function', () => {
      expect(destroyer).to.be.a('function');
    });
    it('should return an Array', () => {
      expect(destroyer([0, 1, 2, 3, 4, 5], 4, 5)).to.be.a('array');
    });
    it('should throw an error when the first argument is not an Array', () => {
      expect(function () {
        destroyer(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        destroyer(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        destroyer({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        destroyer(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        destroyer(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should remove all elements from the initial array that are of the same value as the remaining arguments', () => {
      expect(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3)).to.eql([1, 1, 4]);
      expect(destroyer([10, 20, 30, 40, 50], 10, 30, 50)).to.eql([20,40]);
      expect(destroyer(['coffee', 'scones', 'biscotti', 'hamburger', 'pizza'], 'hamburger', 'pizza')).to.eql(['coffee', 'scones', 'biscotti']);
      expect(destroyer(['two', 'Two', 2, 22, 'twenty-two'], 'Two', 22, 'twenty-two')).to.eql(['two', 2]);
    });
  });
});