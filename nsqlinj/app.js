var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();
var url = 'mongodb://localhost:27017/nosqlinj';
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Conectado a Mongodb.");
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.post('/login', function (req, res) {
    var userName = req.body.user;
    var password = req.body.pass;
    console.log(userName);
    console.log(password);
    db.collection("usuarios").findOne({"userName": userName, "password": password},
    //db.collection("usuarios").findOne({userName: { $in: [userName] }, password: { $in: [password] }}, 
      function (err, user) {
        if (user) {
          res.send("Login correcto para usuario: " + user.userName);
        } else {
          res.send("Login incorrecto!!");
        }
      });
  });
  app.listen(3000);
});
