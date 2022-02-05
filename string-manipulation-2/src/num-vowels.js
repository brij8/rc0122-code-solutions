/* exported numVowels */
function numVowels(string) {
  var aeiou = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelcount = 0;
  for (let i = 0; i < string.length; i++) {
    if (aeiou.includes(string[i])) {
      vowelcount++;
    }
  }
  return vowelcount;
}
// declare a function called numVowels that takes one argument, a string
// create an array of vowels, assigned to var aeiou
// create accumulator counter var named vowelcount
// for loop through string and
// if aeiou includes string[i]
// increment vowelcount
// return vowelcount

// function numVowels(string) {
//   var aeiou = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
//   var vowels = [];
//   for (let i = 0; i < string.length; i++) {
//     if (aeiou.includes(string[i])) {
//       vowels.push(string[i]);
//     }
//   }
//   return vowels.length;
// }
//
// declare a function called numVowels that takes one argument, a string
// create an array of vowels, assigned to var aeiou
// create empty array assigned to var vowels, to return it's length for total vowel count
// for loop through string and
// if aeiou includes string[i]
// push string[i] to vowels array
// return vowels.length
//
// could also use .toLowerCase on string to make aeiou array smaller
