const express = require('express');
const router = express.Router();

const blogpostRouter = (db) => {
  // GET /blogposts/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM posts;')
      .then((response) => {
        res.json(response.rows);
      });
  });

  // GET /blogposts/:blogpost_id
  router.get('/:blogpost_id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.blogpost_id])
      .then((response) => {
        res.json(response.rows[0]);
      });
  });

  // return router
  return router;
};

module.exports = blogpostRouter;
