//"use strict";
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
//port=4000; //da excepcion
const server = http.createServer((req, res) => {
  let pepe=8;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n' + pepe);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});