/* exported union */
function union(first, second) {
  const bucket = [];
  const third = first.concat(second);
  for (let i = 0; i < third.length; i++) {
    if (!bucket.includes(third[i])) {
      bucket.push(third[i]);
    }
  }
  return bucket;
}

// 2, make a functio called union with two parameters, first & second (arrays)
// return a new array of unique values from both arrays, in order
// 3, make a bucket to return
// 4, concat first & second together and assign to var third
// 5, loop through third and for each index
// 6, check if bucket does NOT include third[i]
// 7, if not, push third[i] to bucket
// 10, return bucket
