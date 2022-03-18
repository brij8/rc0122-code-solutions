const fs = require('fs');

const num = Math.random();
const data = num.toString();

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});

// v--- or ----v ... cat'ing num + '\n' (newline) makes num a string
//
// const num = Math.random();

// fs.writeFile('random.txt', num + '\n', err => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   };
// });
