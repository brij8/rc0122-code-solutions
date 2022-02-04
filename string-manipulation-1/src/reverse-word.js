/* exported reverseWord */
function reverseWord(word) {
  var bucket = '';
  for (let i = word.length - 1; i >= 0; i--) {
    bucket += word[i];
  }
  return bucket;
}
