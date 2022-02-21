/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var str1 = firstString.split('').sort().join('').replaceAll(' ', '');
  var str2 = secondString.split('').sort().join('').replaceAll(' ', '');
  return str1 === str2;
}

// we want to check if both strings contain the same letters in the same amount
// so let's process each string into their components and compare that list
//
// make a function called isAnagram which takes two parameters, two strings
// split each string into an array, sort that array, rejoin it, remove spaces, and assign to new vars
// return whether those vars are deeply equal
