var express = require("express");
var app = express();
app.use(express.static(__dirname));
var http = require("http").createServer(app);
var io = require('socket.io').listen(http);
function tick () {
  var now = new Date().toUTCString();
  io.sockets.send(now);
}
setInterval(tick, 10000);
http.listen(3001,  function() {
    console.log("Express http server listening on port " + 3001);
});
