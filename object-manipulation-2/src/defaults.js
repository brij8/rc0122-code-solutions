/* exported defaults */
function defaults(target, source) {
  for (const prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}

// declare a function named defaults which takes two parameters, target obj & source obj
// loop through each prop key in source
// if the value of that prop key in target is undefined
// add the property to target
