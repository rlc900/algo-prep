// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // chunk size represents how many elements (nums) in 
  // each chunk, NOT how many chunks!!!
  // 1. create new empty array
  // 2. iterate through given array
  // 3. create variable to hold the last element in subarray
  // 4. check to see if the last element in subarray doesnt
  // exist or if the length of that subarray equals passed in size
  // 5. if one is true then push sub array w ele into newArr
  // 5a. else push ele into subarray
  // 6. return new array
  const newArray = [];
  for (let num of array) {
    let last = newArray[newArray.length - 1]
      if (!last || last.length === size) {
         newArray.push([num])
       } else {
         last.push(num)
      }
  }
  return newArray
  }

module.exports = chunk;
