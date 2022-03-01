/* exported difference */
// function difference(first, second) {
//   const bucket = [];
//   for (let i = 0; i < first.length; i++) {
//     if (!second.includes(first[i])) {
//       bucket.push(first[i]);
//     }
//   }
//   for (let j = 0; j < second.length; j++) {
//     if (!first.includes(second[j])) {
//       bucket.push(second[j]);
//     }
//   }
//
//   return bucket;
// }
//
// 2, make an array called difference with two parameters, first & second (arrays)
// return a new array of the symmetric difference between first & second
// (new array = items NOT shared between arrays)
// 3, make a bucket to return
// 4, loop through first and for each index
// 5, check if second does NOT include i
// 6, if no, push i to bucket
// 9, loop through second and for each index
// 10, check if first does NOT include j
// 11, if no, push j to bucket
// 15, return bucket
//
//
// *** one loop version! ***
//
function difference(first, second) {
  var bucket = first.slice(0);
  for (let i = 0; i < second.length; i++) {
    if (!bucket.includes(second[i])) {
      bucket.push(second[i]);
    } else {
      var idx = bucket.indexOf(second[i]);
      bucket.splice(idx, 1);
    }
  }

  return bucket;
}
//
// copy first into bucket with a slice(0)
// loop through second
// if second[i] is NOT in bucket,
// push it to bucket
// if second[i] IS in bucket,
// find the index of second[i] in bucket
// slice it out of bucket
// return bucket
