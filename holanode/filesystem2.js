var fs = require('fs');
fs.readFile('./texto.txt', "utf8", function (er, data) {
    if (er) throw er;
    fs.writeFile('./nuevo.txt', data, 'utf8', function (err) {
        if (err) throw err;
        console.log('Guardado.');
    });
});

