function palindrome (str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = str.split('').reverse().join('');
  let isPalindrome = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reversed[i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

module.exports = palindrome;
