const express = require('express');
var fs = require('fs');
var app = express();

const webpage = fs.readFileSync('index.html');


app.get('/', (req, res) => {
  console.log(`The server is working well!`);
  console.log(`The status code is ${res.statusCode}`);
  res.write(webpage);
  res.end();
});

app.listen(8080);
