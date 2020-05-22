// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  strToArray = str.split('')
  reversedArr = strToArray.reverse()
  newString = reversedArr.join('')
  if (str === newString) {
    return true
  } else {
    return false
  }


}

module.exports = palindrome;
