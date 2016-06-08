var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Got a GET method');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
app.get('/user', function (req, res) {
  res.send('Got a GET request at /user');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
