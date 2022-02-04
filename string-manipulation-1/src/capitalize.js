/* exported capitalize */
function capitalize(word) {
  var capped = '';
  capped += word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capped;
}
