/* exported reverseWords */
function reverseWords(string) {
  var revArr = [];
  var strArr = string.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    revArr.push(strArr[i].split('').reverse().join(''));
  }
  return revArr.join(' ');
}

// make a function called reverseWords with one parameter, a string
// make an empty array, assign to var revArr (to hold arg string words reversed, in array)
// split the arg string at spaces into an array, assign to var strArr
// loop through strArr and for each index
// split, reverse, join, and then push to revArr
// join revArr into a string at spaces and return it
