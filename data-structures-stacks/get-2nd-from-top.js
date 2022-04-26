/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const bucket = stack.pop();
  let bin;
  if (bucket !== undefined) {
    bin = stack.peek();
    stack.push(bucket);
    return bin;
  }
}
