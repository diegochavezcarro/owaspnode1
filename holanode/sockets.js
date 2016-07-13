var net = require('net');
var port= process.argv[2];
net.createServer(function (socket) {
    socket.write('Hola socket!\r\n');
    socket.end();
}).listen(port);
console.log('socket levantado en puerto ' + port);