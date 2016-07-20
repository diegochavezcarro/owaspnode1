var fs = require('fs');
var stream = fs.createReadStream('./textolargo.txt','utf8');
stream.on('data', function (chunk) {
    console.log(chunk);
})
stream.on('end', function () {
    console.log('Se terminó de leer')
})