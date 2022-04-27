/* exported takeValueAtIndex */

// return the value @index position
// and values before it are cycled to back:
// loop dq/enq INDEX# of times
// then return last dequeue

function takeValueAtIndex(queue, index) {
  for (let i = 1; i <= index; i++) {
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}
