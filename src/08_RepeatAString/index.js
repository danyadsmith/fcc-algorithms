function repeatStringNumTimes (str, num) {
  if (typeof str === 'string') {
    if (typeof num === 'number') {
      var repeated = '';

      let repeatString = function (str) {
        return repeated += str;
      };

      if (num <= 0) { return repeated; }

      while (num > 0) {
        repeatString(str);
        num--;
      }

      return repeated;

    } else {
      var errNumType = new TypeError('The parameter num must be a number.');
      throw errNumType;
    }
  } else {
    var errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
}

module.exports = repeatStringNumTimes;
