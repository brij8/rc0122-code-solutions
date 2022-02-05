/* exported capitalizeWord */
function capitalizeWord(word) {
  var capped = '';
  if (word.toLowerCase() === 'javascript') {
    capped = 'JavaScript';
  } else {
    capped += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return capped;
}

// declare a function named capitalizeWord with one parameter, word, which takes an argument of a string
// create a variable named capped which is an empty string which will hold the finished string
// if word changed to all lowercase strictly equals javascript
// then the corrected string JavaScript is assigned to the var capped
// oterwise
// slice word at the second character and make the chars til end of string into lowercase
// make the first char in word uppercase
// concat first & rest of chars and reassign to capped variable
// return capped
