/* exported toObject */
function toObject(kvpArray) {
  var newObj = {};
  newObj[kvpArray[0]] = kvpArray[1];
  return newObj;
}
