function mutation (arr) {
  if(Array.isArray(arr)) {
    const lettersInFirstWord = arr[0].toLowerCase().split('');
    const lettersInSecondWord = arr[1].toLowerCase().split('');
    let checks = [];
    lettersInSecondWord.forEach((letter) => {
      (lettersInFirstWord.indexOf(letter) === -1) ? checks.push(false) : checks.push(true);
    });
    return (checks.indexOf(false) > -1) ? false : true ;
  } else {
    const errArrType = TypeError('The parameter arr must be an Array.');
    throw errArrType;
  }
}

module.exports = mutation;