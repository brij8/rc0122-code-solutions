/* exported getValues */
function getValues(object) {
  var values = [];
  for (const property in object) {
    values.push(object[property]);
  }
  return values;
}
