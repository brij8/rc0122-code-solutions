/* exported flatten */
function flatten(array) {
  if (array.length === 0) return [];
  const bucket = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        bucket.push(array[i][j]);
      }
    } else {
      bucket.push(array[i]);
    }
  }
  return bucket;
}

// 2, create a function called flatten which takes one parameter, array (an array)
// 3, logic gate: if array is empty, return empty array
// 4, make a bucket to return
// 5, loop through array and for each index
// 6, check if index is a subarray
// 7, if it is, loop through that subarray and
// 8, push each index to the bucket array
// 10, else (if not a subarray) push index to bucket array
// 14, return bucket
//

// *** recurvise version that flattens all subarray layers into one (doesn't stop at first layer)
// *** i think it's very neat, esp line 36
//
// function flatten(array) {
//   if (array.length === 0) return [];
//   let bucket = [];
//   Array.isArray(array[0]) ? bucket = flatten(array[0]) : bucket.push(array[0]);
//
//   const flattened = bucket.concat(flatten(array.slice(1)));
//
//   return flattened;
// }
