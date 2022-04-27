/* exported takeNextSmallest */

// return the first value that is <= it's successor
// enq all until it's found

function takeNextSmallest(queue) {
  let bucket;
  while (true) {
    bucket = queue.dequeue();
    if (bucket === undefined || queue.peek() === undefined || bucket <= queue.peek()) {
      return bucket;
    }
    queue.enqueue(bucket);
  }
}

// // instructor solution:
// function takeNextSmallest(queue) {
//   let nextSmol = queue.dequeue();
//   while (nextSmol > queue.peek()) {
//     queue.enqueue(nextSmol);
//     nextSmol = queue.dequeue();
//   }
//   return nextSmol;
// }
