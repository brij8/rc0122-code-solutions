function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');

//
// 1, make function getPokemonData, which takes one arg, a string pokemon name
// 2, create a new instance of the XMLHttpRequest object, assign it to var xhr (<-- seems like the commonly used var for this)
// 3, initialize the newly-created request with xhr.open() using GET method & a url c'catted with the name arguement
// 4, set the type we want the reponse in
// 5, listen for load on the xhr object, and run anon function that
// 6, logs to console the status prop of xhr
// 7, logs to console the response prop of xhr
// 8, close eventListener function
// 9, run the .send() method of xhr object
// 10, close getPokemonData function
