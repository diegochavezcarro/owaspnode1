//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');
var cons = require('consolidate');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

// .hbs files should be handled by `handlebars`
// `consolidate` takes care of loading `handlebars` and interfacing it with Express
router.engine('hbs', cons.handlebars);

// we set 'hbs' as the default extension of template files
// this is optional, but you have to specify the view files's extension if you don't
// it defaults to 'jade'
router.set('view engine', 'hbs');
router.set('views', './views');

router.get('/', function (req, res) {
  res.render('index', {
    target: req.query.target || 'https://nodegoat.herokuapp.com'
  })
})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
