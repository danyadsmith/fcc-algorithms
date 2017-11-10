/* globals describe it */

const expect = require('chai').expect;
const repeatStringNumTimes = require('../../src/08_RepeatAString/');

describe('08. Repeat a String', () => {
  describe('#repeatStringNumTimes(str, num)', () => {
    it('should return a string', () => {
      expect(repeatStringNumTimes('string', 0)).to.be.a('string');
    });
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        repeatStringNumTimes(true, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        repeatStringNumTimes(20, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        repeatStringNumTimes({}, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        repeatStringNumTimes(null, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        repeatStringNumTimes(undefined, 'str');
      }).to.throw(TypeError, 'The parameter str must be a string.');
    });
    it('should throw an error when the second parameter is not a number', () => {
      expect(() => {
        repeatStringNumTimes('str', true);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        repeatStringNumTimes('str', 'str');
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        repeatStringNumTimes('str', {});
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        repeatStringNumTimes('str', null);
      }).to.throw(TypeError, 'The parameter num must be a number.');
      expect(() => {
        repeatStringNumTimes('str', undefined);
      }).to.throw(TypeError, 'The parameter num must be a number.');
    });
    it('should return an empty string when the num parameter is 0 or negative', () => {
      expect(repeatStringNumTimes('string', 0)).to.equal('');
      expect(repeatStringNumTimes('string', -10)).to.equal('');
      expect(repeatStringNumTimes('string', -1)).to.equal('');
      expect(repeatStringNumTimes('string', -53241)).to.equal('');
      expect(repeatStringNumTimes('string', -3.421)).to.equal('');
    });
    it('should return a string that contains the repeated str parameter num times', () => {
      expect(repeatStringNumTimes('string', 3)).to.equal('stringstringstring');
      expect(repeatStringNumTimes('string ', 3)).to.equal('string string string ');
      expect(repeatStringNumTimes('bye', 2)).to.equal('byebye');
    });
  });
});
