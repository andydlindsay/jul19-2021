const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request);

  const url = request.url;
  const method = request.method;
  const requestInfo = `${method} ${url}`;

  console.log(requestInfo);

  if (requestInfo === 'GET /home') {
    response.write('thanks for visiting the home page');
  } else if (requestInfo === 'GET /about') {
    response.write('you are on the about page');
  } else {
    response.write('this is not the page you are looking for');
  }

  // response.write('hello world');
  response.end();
});

server.listen(23456);
