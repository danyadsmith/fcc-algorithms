function slasher (arr, howMany) {
  if (Array.isArray(arr)) {
    if (typeof howMany === 'number') {
      return arr.splice(howMany, arr.length);
    }
    else {
      const errNumType = new TypeError('The parameter howMany must be a number.');
      throw errNumType;
    }
  } else {
    const errArrType = new TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = slasher;