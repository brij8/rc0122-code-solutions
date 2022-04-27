/* exported takeSmaller */

function takeSmaller(queue) {
  const dq1 = queue.dequeue();
  if (dq1 === undefined) {
    return dq1;
  }
  const dq2 = queue.dequeue();
  if (dq2 === undefined) {
    return dq1;
  } else if (dq1 === dq2) {
    queue.enqueue(dq1);
    return dq2;
  } else if (dq1 < dq2) {
    queue.enqueue(dq2);
    return dq1;
  } else if (dq1 > dq2) {
    queue.enqueue(dq1);
    return dq2;
  }
}
