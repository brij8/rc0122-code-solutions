/* exported omit */

function omit(source, keys) {
  var bucket = {};
  for (const prop in source) {
    let found = false;
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      bucket[prop] = source[prop];
    }
  }
  return bucket;
}

// define a function named omit with two parameters, source object & keys array
// create empty object to build and return (a bucket)
// loop through source object properties and for each one
// make boolean switch set to false (we have not yet found a match)
// loop through keys array
// if property deep equals keys index
// flip switch to true (we found a match)
// break out of the loop, move to next prop in source, repeat to end of source
// if switch is false
// assign source's prop to bucket's prop
// return bucket
