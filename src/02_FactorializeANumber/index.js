function factorialize (num) {
  if (typeof num === 'number') {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  } else {
    var err = new TypeError('Invalid Type. The parameter num must be a number.');
    throw err;
  }
}

module.exports = factorialize;
