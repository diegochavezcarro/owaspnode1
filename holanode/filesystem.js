var fs = require('fs');
fs.readFile('./texto.txt', "utf8", function (er, data) {
    if (er) throw er;
    console.log(data);
});
fs.writeFile('./nuevo.txt', 'Hola a todos', 'utf8', function (err) {
    if (err) throw err;
    console.log('Guardado.');
});
