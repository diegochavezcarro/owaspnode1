const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function leer() {
    return await readFile('texto.txt', 'utf8');    
}

// Can't use `await` outside of an async function so you need to chain
// with then()
leer().then(data => {
    console.log(data);
    return writeFile('nuevo.txt', data, 'utf8');
}).catch(err => {
    console.log('error: ' + err);
});