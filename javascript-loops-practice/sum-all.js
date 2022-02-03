/* exported sumAll */
function sumAll(num) {
  var sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
