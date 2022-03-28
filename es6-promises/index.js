const takeAChance = require('./take-a-chance');

const foo = takeAChance('foo');

foo.then(value => {
  console.log(value);
});

foo.catch(error => {
  console.log(error.message);
});
