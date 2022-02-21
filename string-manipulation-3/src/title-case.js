/* exported titleCase */
function titleCase(title) {
  const strArr = title.split(' ');
  let lcStr = '';
  let nStr = '';
  const exclude = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const special = {
    javascript: 'JavaScript',
    'javascript:': 'JavaScript:',
    api: 'API',
    'api:': 'API:'
  };
  const bucket = [];
  for (let i = 0; i < strArr.length; i++) {
    lcStr = strArr[i].toLowerCase();
    if (lcStr.includes(':')) {
      if (special[lcStr]) {
        lcStr = special[lcStr];
        bucket.push(lcStr);
        const afterColon = strArr[i + 1].slice(0, 1).toUpperCase() + strArr[i + 1].slice(1, strArr[i + 1].length).toLowerCase();
        bucket.push(afterColon);
        i++;
      } else {
        bucket.push(lcStr.slice(0, 1).toUpperCase() + lcStr.slice(1, lcStr.length));
        const afterColon = strArr[i + 1].slice(0, 1).toUpperCase() + strArr[i + 1].slice(1, strArr[i + 1].length).toLowerCase();
        bucket.push(afterColon);
        i++;
      }
    } else if (i === 0) {
      if (special[lcStr]) {
        bucket.push(special[lcStr]);
      } else {
        bucket.push(lcStr.slice(0, 1).toUpperCase() + lcStr.slice(1, lcStr.length));
      }
    } else if (lcStr.includes('-')) {
      const hyphen = lcStr.indexOf('-');
      const hStr = lcStr.slice(0, 1).toUpperCase() + lcStr.slice(1, hyphen) + '-' + lcStr.slice(hyphen + 1, hyphen + 2).toUpperCase() + lcStr.slice(hyphen + 2, lcStr.length);
      bucket.push(hStr);
    } else if (special[lcStr]) {
      lcStr = special[lcStr];
      bucket.push(lcStr);
    } else if (exclude.includes(lcStr)) {
      bucket.push(lcStr);
    } else if (lcStr === 'i') {
      bucket.push('I');
    } else if (lcStr.length < 3) {
      bucket.push(lcStr);
    } else {
      nStr = lcStr.slice(0, 1).toUpperCase() + lcStr.slice(1, lcStr.length);
      bucket.push(nStr);
    }
  }
  return bucket.join(' ');
}

// we want to return a title-case version of the string arg
// 1st char uppercase, rest lowercase
// 1st word always has first char uppercase
// uppercase after '-' & ':'
// uppercase all 4+ char words
// lowercase all 3- char words (+ from a list)
// hardcode 'JavaScript' & 'API' (make a special-cases list)

// 2, make a function called titleCase with one parameter, a string
// 3-13, stage materials & tools:
// split the string into an array, assigned to var strArr
// make a new empty string, lcStr, to hold working lowercase-string parts
// make a new empty string, nStr, to hold working parts
// make a new empty array, bucket, to assemble worked parts and return
// make an array, exclude, which lists all words to leave lowercase
// make an object, special, which hold k/v pairs of special case words to check against/apply (this let's us easily add/remove special words)
// 14, get to loopin':
// loop through strArr and for each index (a string)
// 15, lowerCase entire string (lcStr)
// 16-50, begin else/if checks against lcStr
// 16, if lcStr has a colon
// 17-22, check if special obj has prop that matches lcStr and if so assign that's prop's value to lcStr & push to bucket
// then grab next index of strArr, split to uppercase the 0th char then c'cat with split of remaining chars & push to bucket
// increment i
// 23-28, else split lcStr to uppercase the 0th char then c'cat with split of remaining chars & push to bucket
// grab next index of strArr, split to uppercase the 0th char then c'cat with split of remaining chars & push to bucket
// increment i
// 29-34, else if i deep equals 0 (if we're on the first word in the arg string)
// check if special obj has prop that matches lcStr and if so assign that's prop's value to lcStr & push to bucket
// if not, split to uppercase the 0th char then c'cat with split of remaining chars & push to bucket
// 35-38, if lcStr has a hyphen
// get index of hyphen char and assign to var hyphen
// slice lcStr before and after the hyphen, uppercase each slice's 0th chars, then c'cat them with a '-' in between and assign to var hStr
// push hStr to bucket
// 39-41, check if special obj has prop that matches lcStr and if so assign that's prop's value to lcStr & push to bucket
// 42-43, check if lcStr is in the exclude array, if so push lcStr to bucket
// 44-45, check if lcStr deep equals lowercase i, if so make it uppercase and push it to bucket
// 46-47, check if lcStr is less than 3 chars long, if so push lcStr to bucket
// 48-50, if we somehow made it through all the checks above without being pushed to bucket
// then split lcStr to uppercase the 0th char then c'cat with split of remaining chars & push to bucket
//
// 53, join bucket array with spaces and return
