/* exported intersection */
function intersection(first, second) {
  const bucket = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      bucket.push(first[i]);
    }
  }
  return bucket;
}

// 2, make a function called intersection with two parameters, first & second (arrays)
// return a new array of values found in both first & second, in order
// 3, make a bucket to return
// 4, loop through first and for each index
// 5, check if second DOES include i
// 6, if it does, push i to bucket
// 9, return bucket
