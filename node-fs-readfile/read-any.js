const fs = require('fs');

const foo = process.argv[2];
fs.readFile(foo, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
