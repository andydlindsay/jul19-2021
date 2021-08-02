# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

### Web Server
* another computer
* serve up information/data

(data) web server <===> client

### TCP
* persistent connection between client and server
* either party can shout down the pipe at any time

### HTTP
* built on top of TCP
* request => response

### Address
* IP home address of a server
* port 65,535

### Request
* verb => what do we want to do?
  1. GET => retrieve information
  2. POST => send information
* path => what do we want to do it to?
  * string
  * `/users`, `/photos`

`GET /users`, `POST /maps`

http://localhost:3000/about

### Middleware
* function that runs between the request and the response
* parse the incoming request

`email=a@a.com&password=1234` <== url encoded
```js
{
  email: 'a@a.com',
  password: '1234'
}
```
body-parser
cookie-parser








