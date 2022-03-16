const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const num2 = parseInt(process.argv[4]);
let ans;

if (operator === 'plus') {
  ans = add(num1, num2);
} else if (operator === 'minus') {
  ans = subtract(num1, num2);
} else if (operator === 'times') {
  ans = multiply(num1, num2);
} else if (operator === 'over') {
  ans = divide(num1, num2);
}

console.log('result: ', ans);
