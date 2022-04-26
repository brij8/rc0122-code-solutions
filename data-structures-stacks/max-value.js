/* exported maxValue */

function maxValue(stack) {
  let ret = -Infinity;
  while (stack.peek() !== undefined) {
    const pooped = stack.pop();
    ret = (pooped > ret)
      ? pooped
      : ret;
  }
  return ret;
}
