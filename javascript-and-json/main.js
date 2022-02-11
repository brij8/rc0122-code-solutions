var refBooks = [{
  title: 'HTLM5 Pocket Reference',
  author: 'Jennifer Niederst Robbins',
  isbn: '978-1-449-36335-2'
},
{
  title: 'CSS Pocket Reference',
  author: 'Eric A. Meyer',
  isbn: '978-1-449-39903-0'
},
{
  title: 'Javascript Pocket Reference',
  autho: 'David Flanagan',
  isbn: '978-1-449-31685-3'
}];

console.log('refBooks object: ', refBooks);
console.log('refBooks typeof: ', typeof refBooks);

var JSONrefBooks = JSON.stringify(refBooks);
console.log('JSONrefBooks: ', JSONrefBooks);
console.log('JSONrefBooks typeof: ', typeof JSONrefBooks);

var student = '{"name":"Jane", "id":"1001"}';
console.log('student: ', student);
console.log('student typeof: ', typeof student);

var parseStudent = JSON.parse(student);
console.log('parseStudent: ', parseStudent);
console.log('parseStudent typeof: ', typeof parseStudent);
