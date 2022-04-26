/* exported take2nd */

function take2nd(queue) {
  const dq1 = queue.dequeue();
  if (dq1 === undefined) {
    return dq1;
  } else {
    const dq2 = queue.dequeue();
    if (dq2 === undefined) {
      return dq1;
    } else {
      queue.enqueue(dq1);
      return dq2;
    }
  }
}
