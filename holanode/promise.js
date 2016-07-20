var Q = require('q');
var fs = require('fs');
var readFileQ = Q.denodeify(fs.readFile);
var writeFileQ = Q.denodeify(fs.writeFile);
readFileQ('texto.txt', 'utf8')
    .then(function (myFileContents) {
        console.log(myFileContents);
        return writeFileQ('nuevo.txt', myFileContents, 'utf8');
    })
    .then(function () {
        console.log('Guardado');
    })
    .fail(function (err) {
        console.error('error: ' + err.message);
    });