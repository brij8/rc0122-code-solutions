/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// function includes(array, value) {
//   var found = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       found = true;
//       break;
//     }
//   }
//   return found;
// }

// function includes(array, value) {
//   var v = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       v++;
//     }
//   }
//   return v > 0;
// }
