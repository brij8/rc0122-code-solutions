/* exported equal */
function equal(first, second) {
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

// 2, create a function named equal which takes two parameters, first & second (arrays)
// 3, logic gate: (if/else) first check if arrays are same length; no = return false, yes = continue
// 4, loop through the first array and at each
// 5, if first's i index doesn't deep equal second's i index, return false
// 9-10, else for if/else gate on line 3; if says arrays are not same length, returns false
// 12, function returns true if arguments make it through if statements
