/* exported filterOutNulls */
function filterOutNulls(values) {
  var nulless = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      nulless.push(values[i]);
    }
  }
  return nulless;
}
