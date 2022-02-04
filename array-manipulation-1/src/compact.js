/* exported compact */
function compact(array) {
  var falses = [false, null, NaN, 0, -0, undefined, ''];
  var trues = [];
  for (let i = 0; i < array.length; i++) {
    if (!falses.includes(array[i])) {
      trues.push(array[i]);
    }
  }
  return trues;
}
