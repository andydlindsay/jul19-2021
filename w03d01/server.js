const express = require('express');
const morgan = require('morgan');
const app = express();

const cats = {
  abcd: {
    name: 'Mika',
    fluffy: true
  },
  defg: {
    name: 'Scruffy',
    fluffy: false
  }
};

const printCat = (id) => {
  console.log(cats[id]);
};

// MIDDLEWARE
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   // if (!loggedIn) {
//   //   res.redirect('/login');
//   // }
//   next();
//   // res.send('you aren\'t going anywhere');
// });
// const morganMiddlewareFn = morgan('dev');
// app.use(morganMiddlewareFn);

app.use(morgan('dev'));



// GET /home
app.get('/home', (req, res) => {
  // res.write('welcome to our site!');
  // res.send();

  res.send('welcome to our site!');
});

// GET /cats
app.get('/cats', (req, res) => {
  // res.send()
  // res.sendFile()
  // res.render()
  res.json(cats);
});

// GET /cats/defg
// app.get('/cats/abcd', (req, res) => {
//   const cat = cats.abcd;
//   res.json(cat);
// });

// app.get('/cats/defg', (req, res) => {
//   const cat = cats.defg;
//   res.json(cat);
// });

// GET /cats/abcd => { 'cat_id': 'abcd' }
app.get('/cats/:cat_id/', (req, res) => {
  console.log(req.params);
  const catId = req.params.cat_id;
  const cat = cats[catId];

  res.json(cat);
});

// GET /maps/:map_id
// GET /maps/:map_id/pins/:pin_id
// GET /maps/2/pins
// GET /maps/7/pins
// req.params.map_id

app.listen(6543);
