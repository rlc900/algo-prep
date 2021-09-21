// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
        // create helper function that creates an object with the character count of each letter in the string.
        // iterate through that object and have a conditional to check which key has the most characters
        // return the character
        let max = 0;
        let maxChar = '';
        const stringToCharMap = createCharMap(str)
        
        for (let char in stringToCharMap ) {
          if (stringToCharMap[char] > max) {
            max = stringToCharMap[char]
            maxChar = char;
          } 
        }
        return maxChar;
        };
        
        function createCharMap(str) {
          const charMap = {};
          for (let letter of str) {
           if (charMap[letter]) {
             charMap[letter]++
           } else {
             charMap[letter] = 1
           }
          }
          return charMap
        };

module.exports = maxChar;
