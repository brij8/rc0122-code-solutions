/* exported isPalindromic */

function isPalindromic(string) {
  var strNS = string.replaceAll(' ', '');
  for (var i = 0; i < strNS.length / 2; i++) {
    if (strNS[i] !== strNS[strNS.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// make a function called isPalindromic which takes one parameter, a string
// remove all the spaces in string and assign to var strNS
// loop through half the length of strNS (string)
// if the char at string[i] doesn't deep equal the char at the other matching end of string (string's length - 1 - i)
// return false
// else return true at end of function
