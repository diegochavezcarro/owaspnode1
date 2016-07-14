// THIS WILL NOT WORK:
const fs = require('fs');
try {
  fs.readFile('/some/file/that/does-not-exist', (err, data) => {
    // mistaken assumption: throwing here...
    if (err) {
      throw err;
    }
  });
} catch(err) {
  // This will not catch the throw!
  console.log("no pasa por aca");
  console.log(err);
}

