const fs = require('fs');

const myCreateReadStream = (path) => path ? fs.createReadStream(path) : process.stdin;

module.exports = myCreateReadStream;
