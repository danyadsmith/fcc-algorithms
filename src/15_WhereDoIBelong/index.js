function getIndexToIns (arr, num) {
  if (Array.isArray(arr)) {
    if (typeof num === 'number') {
      arr.push(num);
      return arr
        .sort((itemOne, itemTwo) => itemOne > itemTwo)
        .indexOf(num);
    } else {
      const errNumType = new TypeError('The parameter num must be a number.');
      throw errNumType;
    }
  } else {
    const errArrType = new TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = getIndexToIns;