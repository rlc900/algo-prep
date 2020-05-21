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

  // return sub arrays with the length of the given size
  const chunked = []
  // array.forEach((ele) => {
  //   let lastEle = chunked[chunked.length -1]
  //   if (!lastEle || lastEle.length === size) {
  //     chunked.push([ele])
  //   } else {
  //     lastEle.push(ele)
  //   }
  // })
  // return chunked
  let i = 0
  while (i < array.length) {
    let sliced = array.slice(i, i + size)
    chunked.push(sliced)
    i += size
  }
  return chunked
}

module.exports = chunk;
