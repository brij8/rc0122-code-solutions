// In index.js, require() both express and Node's path module:
const express = require('express');
const path = require('path');

// Create a basic Express app object in index.js
const app = express();
app.use(express.json());

// Use path.join() to combine __dirname and your public directory's name ('public') into the absolute path to your public directory. Put the return value into a variable.
const absolutePath = path.join('__dirname', 'public');
// eslint-disable-next-line no-console
console.log('absolutePath: ', absolutePath);

// Use express.static() to create a middleware function that will automatically serve any files located in your public directory. Put the return value into a variable.

// const pubDir = express.static('public');
const pubDir = express.static(absolutePath);

// Mount the middleware you just created with the app.use()
app.use(pubDir);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
