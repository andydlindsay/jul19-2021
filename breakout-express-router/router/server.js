require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

const productRouter = require('./routes/product-routes');
const blogpostRouter = require('./routes/blogpost-routes');

app.use('/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
