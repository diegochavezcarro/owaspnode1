var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': 'password'
});

var app = express();

app.use(bodyParser.urlencoded());

app.post('/login', function (req, res) {
    var user = req.body.user;
    var pass = req.body.pass;
    var sql = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + pass + "'";

    connection.query(sql, function (err, results) {
        // ...
    });
});

app.listen(8081);