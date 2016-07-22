var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbconfig = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': 'password'
    },
    'database': 'my_schema',
    'users_table': 'users'
};
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/login', function (req, res) {
    var user = req.body.user;
    var pass = req.body.pass;
    //var user = connection.escape(req.body.user);
    //var pass = connection.escape(req.body.pass);
    console.log(user);
    console.log(pass);
    //var sql = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pass + "'";
    var sql  = "SELECT * FROM users WHERE username = ? AND password = ?";
    console.log(sql);
    //connection.query(sql, function (err, rows) {
    connection.query(sql, [user, pass], function (err, rows) {
        if (err) {
            res.json(err);
        }
        else if (rows.length) {
            res.json("Login correcto para usuario: ");
        } else {
            res.json("Login incorrecto!!");
        }
    });
});

app.listen(3000);