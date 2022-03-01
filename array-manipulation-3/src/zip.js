/* exported zip */
function zip(first, second) {
  const bucket = [];
  const numOfPairsToMake = Math.min(first.length, second.length);
  for (let i = 0; i < numOfPairsToMake; i++) {
    const subarr = [];
    subarr.push(first[i]);
    subarr.push(second[i]);
    bucket.push(subarr);
  }
  return bucket;
}

// 2, create an array called zip with two parameters, first & second (arrays)
// 3, make a bucket to return
// 4, use math.min to find which arg array is shorter, assign it's value (the length of shorter) to a var
// this tells us how many subarrays to make (how many times to loop)
// 5, loop that many times and on each loop
// 6, make a temp array, subarr
// 7, push first[i] & second[i] to subarr
// 8, push subarr to bucket
// 11, return bucket
