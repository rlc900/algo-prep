// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  const v = 'aeiou'
  let num = 0
  str.toLowerCase().split('').forEach((char) => {
    if (v.includes(char)) {
      num++;
    }
  })
  return num
}

module.exports = vowels;
