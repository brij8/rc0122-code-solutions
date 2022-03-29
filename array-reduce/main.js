const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// sum - all numbers added together
const sum = numbers.reduce(
  (prevValue, curValue) => prevValue + curValue, 0);

console.log('sum: ', sum);

// product - all numbers multiplied together
// (no initial value = 0 this time bc it'd make the return 0)
const product = numbers.reduce(
  (prevValue, curValue) => prevValue * curValue);

console.log('product: ', product);

// balance - a number that is the result of combining all transactions in account.The correct answer is 180.
// use inital value = 0 here to set a neutral start point

const balance = account.reduce(
  (prevValue, curValue) => (curValue.type === 'deposit')
    ? prevValue + curValue.amount
    : prevValue - curValue.amount
  , 0);

console.log('balance: ', balance);

// composite - an object that is the result of combining all properties of the objects within traits. composite should come out like this(property order doesn't matter):
// {
//     color: 'yellow',
//     type: 'electric',
//     name: 'pikachu',
//     level: 15,
//     trainer: 'ash'
//   }

// function makeObj(prevValue, curValue) {
//   for (const prop in curValue) {
//     prevValue[prop] = curValue[prop];
//   }
//   return prevValue;
// }
// const composite = traits.reduce(makeObj, {});
// console.log('composite: ', composite);

// lol it even suggested using assign; this is much better

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});

console.log('composite: ', composite);
