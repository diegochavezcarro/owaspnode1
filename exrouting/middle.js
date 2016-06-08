var express = require('express');
var app = express();
var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};
app.use(myLogger);
app.use(requestTime);
app.use(express.static('static'));
app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>';
  responseText += '<p>Requested at: ' + req.requestTime + '</p>';
  res.send(responseText);
});
app.listen(3000);