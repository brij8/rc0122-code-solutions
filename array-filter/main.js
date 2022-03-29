const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// evenNumbers - all numbers that are divisible by 2
function evenNumbers(num) {
  return !(num % 2);
}
const evens = numbers.filter(evenNumbers);
console.log('evenNumbers: ', evens);

// overFive - all numbers that are greater than 5
function overFive(num) {
  return num > 5;
}
const sixOrMore = numbers.filter(overFive);
console.log('overFive: ', sixOrMore);

// startWithE - all names that start with a 'E'
function startWithE(name) {
  return name.startsWith('E');
}
const eNames = names.filter(startWithE);
console.log('startWithE: ', eNames);

// haveD - all names that include a 'D' or a 'd'
function haveD(name) {
  return name.includes('D') || name.includes('d');
}
const withD = names.filter(haveD);
console.log('haveD: ', withD);
