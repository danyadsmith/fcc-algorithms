function bouncer (arr) {
  if (Array.isArray(arr)) {
    let falsyValues = [0, '', false, NaN, null, undefined];
    return arr.filter((item) => {
      return (falsyValues.indexOf(item) === -1 && !Number.isNaN(item));
    });
  } else {
    const errArrType = new TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = bouncer;