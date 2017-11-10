function repeatStringNumTimes (str, num) {
  if (typeof str === 'string') {
    if (typeof num === 'number') {
      var repeated = '';
      if (num < 0) { num = 0; }
      for (let i = 0; i < num; i++) {
        repeated += str;
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
