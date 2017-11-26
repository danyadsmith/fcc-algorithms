function rot13 (str) {
  if (typeof str === 'string') {
    if (str.toUpperCase() === str) {
      return str.split('')
        .map((letter) => {
          if (/[^A-Z]/.test(letter)) {
            return letter;
          } else {
            return (letter.charCodeAt() < 78) ? 
              String.fromCharCode(letter.charCodeAt() + 13) : 
              String.fromCharCode(letter.charCodeAt() - 13);
          }
        })
        .join('');
    } else {
      const errWrongCase = new Error('The parameter str must contain only uppercase letters.');
      throw errWrongCase;
    }
  } else {
    const errStrType = new TypeError('The parameter str must be a string.');
    throw errStrType;
  }
}

module.exports = rot13;