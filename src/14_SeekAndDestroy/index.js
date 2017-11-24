function destroyer (arr) {
  if (Array.isArray(arr)) {
    var args = Array.prototype.slice.call(arguments);
    arr = args.shift();
    return arr.filter(item => args.indexOf(item) === -1);
  } else {
    const errArrType = new TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = destroyer;