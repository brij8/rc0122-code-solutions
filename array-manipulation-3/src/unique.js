/* exported unique */
function unique(array) {
  const bucket = [];
  for (let i = 0; i < array.length; i++) {
    if (!bucket.includes(array[i])) {
      bucket.push(array[i]);
    }
  }

  return bucket;
}

// 2, make a function called unique with one parameter, array (an array, presumably with repeated index values)
// 3, make a bucket to return
// 4, loop through length of array and for each index
// 5, check if bucket array does NOT already have that value and
// 6, if not, push that index onto bucket
// 10, return bucket
