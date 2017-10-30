function findLongestWord (str) {
  if (typeof str === 'string') {
    var words = str.replace(/[^a-zA-Z’]/g, ' ').split(' ');
    var wordLengths = words.map((word) => word.length);
    var longest = Math.max.apply(null, wordLengths);
    return longest;
  } else {
    var err = new TypeError('Invalid Type. The parameter str must be a string.');
    throw err;
  }
}

module.exports = findLongestWord;
