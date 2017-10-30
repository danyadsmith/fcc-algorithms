/* globals describe it */

const expect = require('chai').expect;
const titleCase = require('../../src/05_TitleCaseSentence/');

describe('05. Title Case a Sentence', () => {
  describe('#titleCase()', () => {
    it('should return a string', () => {
      expect(titleCase('')).to.be.a('string');
    });
    it('should throw an error when a type other than string is passed', () => {
      expect(function () {
        titleCase(true);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        titleCase(20);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        titleCase({});
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        titleCase(null);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
      expect(function () {
        titleCase(undefined);
      }).to.throw(TypeError, 'Invalid Type. The parameter str must be a string.');
    });
    it('should title case all words in the returned string, including connecting words', () => {
      it('should return I’m A Little Tea Pot when str = I’m a little tea pot', () => {
        expect(titleCase('I’m a little tea pot')).to.equal('I’m A Little Tea Pot');
      });
      it('should return Short And Stout when str = sHoRt AnD sToUt', () => {
        expect(titleCase('sHoRt AnD sToUt')).to.equal('Short And Stout');
      });
      it('should return Here Is My Handle Here Is My Spout when str = HERE IS MY HANDLE HERE IS MY SPOUT', () => {
        expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).to.equal('Here Is My Handle Here Is My Spout');
      });
    });
  });
});
