function ExampleConstructor() {

}

console.log('ExCon prototype: ', ExampleConstructor.prototype);
console.log('ExCon typeof: ', typeof ExampleConstructor);

var newExCon = new ExampleConstructor();
console.log('newExCon: ', newExCon);

var instCheck = newExCon instanceof ExampleConstructor;
console.log('instCheck: ', instCheck);
