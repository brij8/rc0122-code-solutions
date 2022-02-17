/* exported invert */
function invert(source) {
  var bucket = {};
  for (const key in source) {
    bucket[source[key]] = key;
  }
  // var keys = Object.keys(source);
  // var vals = Object.values(source);
  // for (let i = 0; i < keys.length;) {
  //   for (let j = 0; j < vals.length; j++, i++) {
  //     bucket[vals[j]] = keys[i];
  //   }
  // }
  return bucket;
}

// 2, declare a new function named invert which takes one parameter, source (an object)
// 3, make an object to fill & return
//
// 4, for each key in source ((for...in = keys, for...of = values; we want keys, so we use for...in))
// 5, assign that key to bucket's new property, which is named for the value of source @ key
//
// OR
//
// 7, make an array of source's keys, assign to var keys
// 8, make an array of source's values, assign to var vals
// 9, loop through keys with i, but don't incriment i
// 10, then also loop through vals with j, and incriment both i & j
// 11, assign the value of keys @ [i] to bucket's new property key, vals @ [j]
//
// 14, return bucket
