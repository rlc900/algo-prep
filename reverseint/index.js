// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // turn number into string by using toString
  // turn string into array
  // reverse array
  // turn array into string
  // if passed in number ends in 0, those 0's should be erased when reversed
  // make string into number by using parseInt?
  // utilize Math.sign(), you can use this to see if something is positive or negative
  const reversedNumToString = n.toString().split('').reverse().join('')

  return parseInt(reversedNumToString) * Math.sign(n)
  // console.log(reversedNumToString)

}

module.exports = reverseInt;
