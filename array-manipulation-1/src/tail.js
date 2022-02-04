/* exported tail */
function tail(array) {
  var wag = [];
  for (let i = 1; i < array.length; i++) {
    wag.push(array[i]);
  }
  return wag;
}
