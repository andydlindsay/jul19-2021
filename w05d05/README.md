# W05D05 - Mid-term Project Kickoff

### Expected Outcomes
* working in a team environment
* put together all the skills learned so far

### Pick a Project

### User Stories
* describe how and why a user will interact with our app
* As a _____, I can _____, because ______

* As a logged in user, I can put pins on a map, because I want to share places of interest with my friends
* As a non-logged in user, I cannot edit pins on a map, because they don't belong to me

* As a user, I can favourite a blog post, because I want to read it later AND the heart icon turns red

### Nouns === tables
* Nouns are resources
* ERD

### Routes (routes.md)

B GET   /menu-items
R GET   /menu-items/:id
E POST  /menu-items/:id
A POST  /menu-items
D POST  /menu-items/:id/delete

B GET         /menu-items
R GET         /menu-items/:id
E PUT/PATCH   /menu-items/:id
A POST        /menu-items
D DELETE      /menu-items/:id

R GET /maps/:map_id/pins
R GET /authors/:author_id/books

R GET /maps/:map_id/pins/:pin_id
R GET /authors/:author_id/books/:book_id
req.params === {}

### Wireframes/Mockups
* lowest fidelity possible
* balsamiq, moqups, diagrams.net, figma, pen and paper

### Git Merge
* merge locally, then push
* merge in the cloud, then pull


* checkout branch
* work on branch
* commit frequently

* checkout master
* pull the latest master
* merge my branch into master
* push to github

* checkout master
* pull master
* checkout my branch
* merge master into my branch

### Recap

requirements => user stories => resources => ERD => routes => wireframes

### MVP vs MVD
* Minimum Viable Product
* @KV Minimum Viable Demo

### User Login
* Don't do it

```js
// localhost:3000/login/7
app.get('/login/:user_id', (req, res) => {
  // session cookies
  req.session.user_id = req.params.user_id;

  // cookie parser
  res.cookie('user_id', req.params.user_id);

  res.redirect('/');
});
```

### Tech Stack
* Front End: HTML/CSS/JS/jQuery/SCSS
* Back End: Node/Express/Postgres

### SPA vs Multi-page
* these are not mutually exclusive
* res.render()
* res.json()

* React 7-8 SPA
* Rails 9-10 Multi-page App

### Splitting up the work
* Vertical - each team member is working on a diff part of the stack
* Horizontal - each team member is working on the same layer
* Pair Programming - you know

### Communication
* iMessage, Discord, Slack, Hangouts, Meet, Zoom
* 9am, 1pm, 5pm
* hanging out together









