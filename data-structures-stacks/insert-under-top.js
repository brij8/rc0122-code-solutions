/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const lid = stack.pop();
  if (lid !== undefined) {
    stack.push(value);
    stack.push(lid);
  }
}
