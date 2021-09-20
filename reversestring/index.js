function reverse(str) {
    // 1. create an empty string
    // 2. iterate through passed in string 
    // and add each letter to the front of the new string
    // 2a. newString has to be an array, and then call .join on it when its returned to make it a string again
    // 3. return new string
    const newString = [];
    for (let letter of str) {
        newString.unshift(letter)
    }
    return newString.join('')
}

module.exports = reverse;