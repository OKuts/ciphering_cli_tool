const fs = require('fs');

const myCreateWriteStream = (path) => path ? fs.createWriteStream(path, {'flags': 'a'}) : process.stdout;

module.exports = myCreateWriteStream;

