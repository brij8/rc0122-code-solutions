/* exported removeTail */

// function removeTail(list) {
//   if (list.next === null) return;
//   let prev = list;
//   let next = list.next;
//   while (next.next != null) {
//     prev = next;
//     next = next.next;
//   }
//   prev.next = null;
//   return list;
// }

function removeTail(list) {
  if (list.next === null) return;

  let next = list.next;
  while (next.next.next != null) {

    next = next.next;
  }
  next.next = null;
  return list;
}
