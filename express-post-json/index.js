const express = require('express');
const app = express();

let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
});

// create an instance of the json parsing middleware by
// calling the json() method of the express obj
const jpm = express.json();

// Enhance your app by passing the JSON middleware to app.use().
// Now your app knows how to parse JSON request bodies.
app.use(jpm);

app.post('/api/grades', (req, res) => {
  grades[nextID] = {
    id: nextID,
    name: req.body.name,
    course: req.body.course,
    score: Number(req.body.score)
  };
  nextID++;
  res.status(201).json(grades[nextID - 1]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
