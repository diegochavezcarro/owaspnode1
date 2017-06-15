var fs = require('fs');
function readFileAsync (file, encoding) {
    return new Promise(function (resolve,reject){
        fs.readFile(file, encoding, function (err, data){
            if (err) return reject (err);
            resolve(data, 'utf8');
        })
    })
}
function writeFileAsync (file, myFileContents, encoding) {
    return new Promise(function (resolve,reject){
        fs.writeFile(file, myFileContents, encoding, function (err){
            if (err) return reject (err);
            resolve();
         })
    })
}
readFileAsync('texto.txt', 'utf8')
    .then(function (myFileContents, encoding) {
        console.log(myFileContents);
        return writeFileAsync('nuevo.txt', myFileContents, encoding);
    })
    .then(function () {
        console.log('Guardado');
    })
    .catch(function (err) {
        console.error('error: ' + err.message);
    });
