/* exported takeRight */
function takeRight(array, count) {
  var bucket;
  if (count >= array.length) {
    bucket = array;
  } else {
    bucket = array.slice(array.length - count, array.length);
  }
  return bucket;
}
