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


  // return router
  return router;
};

module.exports = blogpostRouter;
