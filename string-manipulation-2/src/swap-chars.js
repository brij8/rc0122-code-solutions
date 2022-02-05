/* exported swapChars */
function swapChars(fir, sec, string) {
  var sArr = string.split('');
  var temp = sArr[fir];
  var temp2 = sArr[sec];
  sArr[sec] = temp;
  sArr[fir] = temp2;
  return sArr.join('');
}
