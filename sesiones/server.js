var express = require('express');
var session = require('express-session');
var app = express();
// Use the session middleware
app.use(session(
    {
        secret: 'keyboard cat',
        cookie: { maxAge: 60000 },
        saveUninitialized: true,
        resave: true
    }));
// Access the session as req.session
app.get('/', function (req, res, next) {
    console.log(req.session);
    var sess = req.session;
    if (sess.views) {
        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.views + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
    console.log(req.session);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});