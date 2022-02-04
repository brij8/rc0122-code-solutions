/* exported reverse */

// function reverse(array) {
//   var bucket = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     bucket.push(array[i]);
//   }
//   return bucket;
// }

// function reverse(array) {
//   var bucket = [];
//   for (let i = 0; i < array.length; i++) {
//     bucket.push(array[array.length - 1 - i]);
//   }
//   return bucket;
// }

function reverse(array) {
  var bucket = [];
  for (let i = 0; i < array.length; i++) {
    bucket.unshift(array[i]);
  }
  return bucket;
}
