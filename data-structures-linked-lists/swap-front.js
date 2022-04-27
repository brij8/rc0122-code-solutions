/* exported swapFront */

// function swapFront(list) {
//   if (list.next == null) {
//     return list;
//   }
//   const next = list.next;
//   const nexter = list.next.next;
//   next.next = list;
//   list.next = nexter;
//   return next;
// }

function swapFront(list) {
  if (list.next == null) {
    return list;
  }
  const newHead = list.next;
  const thirdNode = list.next.next;
  newHead.next = list;
  newHead.next.next = thirdNode;
  return newHead;
}
