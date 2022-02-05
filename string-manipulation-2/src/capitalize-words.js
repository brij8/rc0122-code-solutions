/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var capped = [];
  for (let i = 0; i < words.length; i++) {
    capped.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
  }
  return capped.join(' ');
}
// declare function called capitalizeWords with one parameter, string, that takes argu of a string
// .split string at empty chars into an array of single words and assign to var words
// declare a var capped that is an empty array to hold the split argument
// loop through words array
// at each index in words, .toUpperCase the first character index and .toLowerCase the rest, push results to capped array
// return capped, joined into new string with spaces
//

//
// function capitalizeWords(string) {
//   var words = string.split(' ');
//   var capped = [];
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     capped.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   }
//   return capped.join(' ');
// }
// declare function called capitalizeWords with one parameter, string, that takes argu of a string
// .split string at empty chars into an array of single words and assign to var words
// declare a var capped that is an empty array to hold the split argument
// loop through words array
// assign i of words to new const, word
// for each iteration of word, .toUpperCase the first character index and .toLowerCase the rest, push results to capped array
// return capped, joined into new string with spaces
//
//
// function capitalizeWords(string) {
//   var words = string.split(' ');
//   var capped = [];
//   for (const word of words) {
//     capped.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   }
//   return capped.join(' ');
// }
// declare function called capitalizeWords with one parameter, string, that takes argu of a string
// .split string at empty chars into an array of single words and assign to var words
// declare a var capped that is an empty array to hold the split argument
// for...of loop through words array, assign each value to var word
// assign i of words to new const, word
// for each iteration of word, .toUpperCase the first character index and .toLowerCase the rest, push results to capped array
// return capped, joined into new string with spaces
