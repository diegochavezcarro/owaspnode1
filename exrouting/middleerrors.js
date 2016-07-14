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
var errorHandler = function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke! ' + err.message);
};
var error404 = function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
};

app.use(myLogger);
app.use(requestTime);
app.use(express.static('static'));
app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += '<p>Requested at: ' + req.requestTime + '</p>';
    res.send(responseText);
});
app.get('/error1', function (req, res, next) {
    next(new Error("Fallo"));
});
app.get('/error2', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += s;
    res.send(responseText);
});
app.use(errorHandler);
app.use(error404);
app.listen(3000);