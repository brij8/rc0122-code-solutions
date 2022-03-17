const fs = require('fs');
const og = process.argv[2];
const copy = process.argv[3];

fs.readFile(og, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(copy, data, err => {
    if (err) throw err;
  });
});
