const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// GET / api / grades returns all rows from the "grades" table. The client should receive an array of objects.If there happens to be no rows, an empty array is ok. The result could be a 200 or a 500.

/** http GET localhost:3000/api/grades */

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
      `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// POST / api / grades inserts a new grade into the "grades" table and returns the created grade.The client should receive an object, not an array.The result could be a 201, 400, or 500.

/** http POST localhost:3000/api/grades course=courseName name='Namey Name' score=# */

app.post('/api/grades', (req, res) => {
  const content = req.body;
  content.score = parseInt(content.score);
  if (!content.name || !content.course || !content.score) {
    res.status(400).json({ error: 'content must include valid course, name, and score' });
    return;
  }
  if (content.score < 0 || content.score > 100) {
    res.status(400).json({ error: 'Score must be an integer between 0 and 100' });
    return;
  }
  const params = [
    content.course,
    content.name,
    content.score
  ];
  const sql = `
  insert into "grades"("course", "name", "score")
  values($1::text, $2::text, $3::integer)
  returning *;
  `;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });

    });
});

// PUT / api / grades /:gradeId updates a grade in the "grades" table and returns the updated grade.The client should receive an object, not an array.Your code should require that the client includes the name, course, and score in the request body. The result could be a 200, 400, 404, or 500.

/** http PUT localhost:3000/api/grades/:gradeId course=courseName name='Namey Name' score=# */

app.put('/api/grades/:gradeId', (req, res) => {
  const content = req.body;
  const gradeId = Number(req.params.gradeId);
  content.score = parseInt(content.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (!content.name || !content.course || !content.score) {
    res.status(400).json({ error: 'content must include valid course, name, and score' });
    return;
  }
  if (content.score < 0 || content.score > 100) {
    res.status(400).json({ error: 'Score must be an integer between 0 and 100' });
    return;
  }
  const params = [
    content.course,
    content.name,
    content.score,
    gradeId
  ];
  const sql = `
  update "grades"
  set course=$1::text, name=$2::text, score=$3::integer
  where "gradeId" = $4
  returning *
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// DELETE / api / grades /:gradeId deletes a grade from the "grades" table.
// The result could be a 204, 400, 404, or 500.

/** http DELETE localhost:3000/api/grades/:gradeId */

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const params = [
    gradeId
  ];
  const sql = `
  delete from "grades"
  where "gradeId" = $1::integer
  returning *;
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json({
          confirm: `Deleted gradeId ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// server attention response

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
