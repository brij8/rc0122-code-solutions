const fs = require('fs');
const express = require('express');
const data = require('./data.json');
const app = express();
app.use(express.json());

// view list of notes
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const prop in data.notes) {
    notesArray.push(data.notes[prop]);
  }
  res.json(notesArray);
});

// view note by id#
app.get('/api/notes/:id', (req, res) => {
  const ID = Number(req.params.id);
  if (Number.isNaN(ID) || !Number.isInteger(ID) || ID < 1) {
    res.status(400).json({
      error: 'ID must be a positive integer'
    });
    return;
  }
  if (typeof data.notes[ID] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with ID ${ID}`
    });
    return;
  }
  res.json(data.notes[ID]);
});

// post a new note
app.post('/api/notes', (req, res) => {
  const { content } = req.body;
  if (typeof content === 'undefined') {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  const note = {
    id: data.nextId,
    content: content
  };
  data.notes[note.id] = note;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    } else {
      res.json(note);
    }
  });
});

// delete note by id#
app.delete('/api/notes/:id', (req, res) => {
  const ID = Number(req.params.id);
  if (Number.isNaN(ID) || !Number.isInteger(ID) || ID < 1) {
    res.status(400).json({
      error: 'ID must be a positive integer'
    });
    return;
  }
  if (typeof data.notes[ID] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with ID ${ID}`
    });
    return;
  }
  delete data.notes[ID];
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    } else {
      res.sendStatus(204);
    }
  });
});

// update/replace a note by id#
app.put('/api/notes/:id', (req, res) => {
  const ID = Number(req.params.id);
  if (Number.isNaN(ID) || !Number.isInteger(ID) || ID < 1) {
    res.status(400).json({
      error: 'ID must be a positive integer'
    });
    return;
  }
  if (typeof data.notes[ID] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with ID ${ID}`
    });
    return;
  }
  const { content } = req.body;
  const note = {
    id: ID,
    content: content
  };
  data.notes[note.id] = note;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    } else {
      res.json(note);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
