/* exported oddOrEven */
function oddOrEven(array) {
  var strings = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      strings.push('even');
    } else {
      strings.push('odd');
    }
  }
  return strings;
}
