function titleCase (str) {
  if (typeof str === 'string') {
    return str.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');
  } else {
    var err = new TypeError('Invalid Type. The parameter str must be a string.');
    throw err;
  }
}

module.exports = titleCase;
