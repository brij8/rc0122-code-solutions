const fs = require('fs');

const arr = process.argv;
const bucket = [];
let count = 2;

for (let i = 2; i < arr.length; i++) {
  fs.readFile(arr[i], 'utf8', (err, data) => {
    if (err) throw err;
    bucket[i - 2] = data;
    count++;
    if (count === arr.length) {
      for (const b of bucket) { console.log(b); }
    }
  });
}

// 1 call require('fs') and assign to const fs
// 2
// 3 assign the process.argv array to const arr
// 4 make a bucket to fill (array)
// 5 start a counter at 2 to match for-loop initialization
// (bc we aren't concerned with the first two indexes of arr)
// 6
// 7 loop through arr.length, starting at 2, and for each
// 8 call readFile() on it, and in the callback:
// 9 if err, throw err
// 10 assign the data to bucket, starting at 0 and incrementing each loop
// (this will lock the strings into their input order)
// 11 increment counter
// 12 if counter deep equals length of arr
// 13 for each index of bucket, log the index to console
