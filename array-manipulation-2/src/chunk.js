/* exported chunk */
function chunk(array, size) {
  var bucket = [];

  for (let i = 0; i < array.length;) {
    var subbucket = [];
    for (let j = 0; j < size && i < array.length; j++, i++) {
      subbucket.push(array[i]);
    }
    bucket.push(subbucket);
  }
  return bucket;
}
