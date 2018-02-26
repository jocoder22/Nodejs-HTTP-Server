const http = require('http');
var fs = require('fs');

const webpage = fs.readFileSync('index.html');

var server = http.createServer();

server.on('request', (req, res) => {
  res.write(webpage);
  res.end();
});

server.listen(8080, '127.0.0.1');
const http = require('http');
var fs = require('fs');

const webpage = fs.readFileSync('index.html');

var server = http.createServer();

server.on('request', (req, res) => {
  res.write(webpage);
  res.end();
});

server.listen(8080, '127.0.0.1');
