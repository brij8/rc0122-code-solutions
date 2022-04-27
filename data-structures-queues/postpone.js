/* exported postpone */

function postpone(queue) {
  const dq = queue.dequeue();
  if (dq !== undefined) {
    queue.enqueue(dq);
  }
}
