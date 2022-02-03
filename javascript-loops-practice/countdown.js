/* exported countdown */
function countdown(num) {
  var arr = [];
  while (num > -1) {
    arr.push(num);
    num--;
  }
  return arr;
}
