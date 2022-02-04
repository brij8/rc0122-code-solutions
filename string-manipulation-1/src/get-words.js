/* exported getWords */
function getWords(string) {
  var words;
  if (string.length === 0) {
    words = [];
  } else {
    words = string.split(' ');
  }
  return words;
}
