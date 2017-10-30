function largestOfFour (arr) {
  let containsNumbers = function (testArr) {
    if (Array.isArray(testArr)) {
      return testArr.reduce((acc, value) => {
        return acc && (typeof value === 'number');
      }, true);
    }
  };
  let containsArrays = function (testArr) {
    if (Array.isArray(testArr)) {
      return testArr.reduce((acc, value) => {
        return acc && Array.isArray(value);
      }, true);
    }
  };

  if (Array.isArray(arr)) {
    if (containsArrays(arr)) {
      if (arr.reduce((acc, array) => { return acc && containsNumbers(array); }, true)) {
        return arr.map((arr) => {
          return Math.max.apply(null, arr);
        });
      } else {
        var errNonNum = new TypeError('All sub-arrays must contain numbers only.');
        throw errNonNum;
      }
    } else {
      var errNonSubArrays = new TypeError('The parent array must only contain subarrays.');
      throw errNonSubArrays;
    }
  } else {
    var errNotArray = new TypeError('The parameter arr must be an Array.');
    throw errNotArray;
  }

}

module.exports = largestOfFour;
