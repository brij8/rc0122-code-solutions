const fs = require('fs');

const num = Math.random();
const data = num.toString();

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
