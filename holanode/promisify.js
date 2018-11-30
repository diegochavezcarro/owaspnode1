const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile('texto.txt', 'utf8').then(data => {
    console.log(data);
    writeFile('nuevo.txt', data, 'utf8');
}).catch(err => {
    console.log('error: ' + err);
});