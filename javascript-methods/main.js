var fiv = 5;
var ten = 10;
var fif = 15;

var maximumValue = Math.max(fiv, ten, fif);
console.log('maximumValue:', maximumValue);

var heroes = ['Thor', 'Loki', 'Freya', 'Odin'];
var randomNumber = Math.random() * heroes.length;
// var randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [{ title: 't-one', author: 'a-one' }, { title: 't-two', author: 'a-two' }, { title: 't-three', author: 'a-three' }];
console.log('library:', library);
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = { title: 'Javascript for Impatient Programmers', author: 'Dr. Axel Rauschmayer' };
var css = { title: 'CSS Secrets', author: 'Lea Verou' };
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Brij Lu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
