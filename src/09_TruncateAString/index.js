function truncateString (str, num) {
  if (typeof str === 'string') {
    if (typeof num === 'number') {
      if (num > 0) {
        if (num >= str.length && str.length > 3) {
          return str;
        } else if (str.length <= 3) {
          return str.slice(0, num) + '...';
        } else if (str.length > 3 && num < 3) {
          return str.slice(0, num) + '...';
        } else {
          return str.slice(0, num - 3) + '...';
        }
      } else {
        var rangeErrorType = new RangeError('The parameter num must be a positive number.');
        throw rangeErrorType;
      }

    } else {
      var errNumType = new TypeError('The parameter num must be a number.');
      throw errNumType;
    }
  } else {
    var errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
}

module.exports = truncateString;
