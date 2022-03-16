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
} else {
  console.log('invalid operation - enter: # plus/minus/times/over #');
}

console.log('result: ', ans);

// ***** switch version *****
//
// switch (operator) {
//   case 'plus':
//     console.log('result: ', add(num1, num2));
//     break;
//   case 'minus':
//     console.log('result: ', subtract(num1, num2));
//     break;
//   case 'times':
//     console.log('result: ', multiply(num1, num2));
//     break;
//   case 'over':
//     console.log('result: ', divide(num1, num2));
//     break;
//   default:
//     console.log('invalid operation - enter: # plus/minus/times/over #');
// }
