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

// function compact(array) {
//   var trues = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       trues.push(array[i]);
//     }
//   }
//   return trues;

// function compact(array) {
//   return array.filter(el => !!el);
// }

// expression on line 16 will return a boolean
// thus skipping need for falses[] entirely
