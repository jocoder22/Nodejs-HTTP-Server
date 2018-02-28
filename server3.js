const express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', {title:'PubTemplate'});
});


app.get('/extend', (req, res) => {
  console.log(`The server is working well!`);
  console.log(`The status code is ${res.statusCode}`);
  res.render('extend', {title: 'ExtendTemplate'});
});

// const Boxes = require('./routes/Boxes.js');
// app.use('/Boxes', Boxes);

app.listen(8080);
