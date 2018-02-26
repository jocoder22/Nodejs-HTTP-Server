const express = require('express');
var fs = require('fs');
var app = express();

const webpage = fs.readFileSync('index.html');


app.get('/', (req, res) => {
  console.log(`The server is working well!`);
  console.log(req);
  console.log(res);
  res.setHeader('X-Powered-by', 'Express and Node.js');
  res.statusCode = 500;
  res.write(webpage);
  res.end();
});

app.listen(8080);
