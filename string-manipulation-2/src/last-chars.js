/* exported lastChars */
function lastChars(length, string) {
  var cutStart = Math.max(0, string.length - length);
  return string.slice(cutStart, string.length);
}

// 2 - declare a function called lastChars that takes two arguments, a number & a string
// 3 - call the max method of the math object, to choose the larger of two values: 0 or string.length - length,
//      and assign it to the var cutStart. this prevents an attempt tp .slice from a negative starting point
// 4 - return the slice of string from cutStart to string end
