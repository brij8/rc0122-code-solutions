/* exported countValues */

function countValues(stack) {
  let tally = 0;
  while (stack.pop() !== undefined) {
    tally++;
  }
  return tally;
}
