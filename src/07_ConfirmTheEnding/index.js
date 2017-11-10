function confirmEnding (str, target) {
  if (typeof str === 'string') {
    if (typeof target === 'string') {
      var targetLength = target.length;
      var ending = str.substr(-targetLength, targetLength);
      return ending === target;
    } else {
      var errTargetType = new TypeError('The parameter target must be a string.');
      throw errTargetType;
    }
  } else {
    var errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
}

module.exports = confirmEnding;
