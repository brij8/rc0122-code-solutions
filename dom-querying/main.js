console.log('hello, world');

var $heading = document.querySelector('h1');
console.log('h1: ', $heading);

var $explanation = document.querySelector('#explanation');
console.log('#explanation: ', $explanation);
console.dir(document.querySelector('#explanation'));

var $hint = document.querySelector('.hint');
console.log('.hint: ', $hint);
console.dir(document.querySelector('.hint'));

var $p = document.querySelectorAll('p');
console.log('p node list: ', $p);

var $examplelink = document.querySelectorAll('.example-link');
console.log('.example-link node list', $examplelink);

// console.log('hello, world');
// console.log('h1: ', document.querySelector('h1'));
// console.dir(document.querySelector('h1'));
// console.log('#explanation: ', document.querySelector('#explanation'));
// console.dir(document.querySelector('#explanation'));
// console.log('.hint: ', document.querySelector('.hint'));
// console.dir(document.querySelector('.hint'));
// console.log('p node list: ', document.querySelectorAll('p'));
// console.log('.example-link node list', document.querySelectorAll('.example-link'));
