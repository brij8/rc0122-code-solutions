/* exported pick */
function pick(source, keys) {
  var bucket = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      bucket[keys[i]] = source[keys[i]];
    }
  }
  return bucket;
}

// define function pick with two parameters, source object & keys array
// create empty object to build and return
// loop through keys array
// if the value of source's property that matches the keys index is NOT undefined
// assign that value to the corresponding prop in the return object
// return the return object
