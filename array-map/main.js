const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// doubled - all numbers multiplied by 2
function doubled(num) {
  return num * 2;
}
const x2 = numbers.map(doubled);
console.log('doubled: ', x2);

// prices - all numbers formatted into "$0.00" strings
function prices(num) {
  return '$' + num.toFixed(2);
}
const dollas = numbers.map(prices);
console.log('prices: ', dollas);

// upperCased - all languages converted to uppercase
function upperCased(lang) {
  return lang.toUpperCase();
}
const upped = languages.map(upperCased);
console.log('upperCased: ', upped);

// firstLetters - the first letter of each language
function firstLetters(lang) {
  return lang[0];
}
const initials = languages.map(firstLetters);
console.log('firstLetters: ', initials);
