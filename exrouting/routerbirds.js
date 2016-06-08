var express = require('express');
var birds = require('./birds');
var app = express();
app.use('/birds', birds);
app.get('/', function (req, res) {
  res.send('Raiz de la APP');
});
app.listen(3000);