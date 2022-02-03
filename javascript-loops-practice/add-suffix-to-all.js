/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixed = [];
  for (let i = 0; i < words.length; i++) {
    suffixed.push(words[i] + suffix);
  }
  return suffixed;
}
