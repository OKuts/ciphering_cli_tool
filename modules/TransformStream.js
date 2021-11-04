const stream = require('stream');
const encrypt = require('./encrypt');

class TratsformStream extends stream.Transform {
  constructor(config, options = {}) {
    super(options);
    this.config = config;
  }
  _transform(chunk, encoding, callback) {
    if (encoding !== 'utf8') {
      this.emit('error', new Error('Only UTF-8'))
      return callback();
    }
    this.push(chunk.toUpperCase())
  }
}

module.exports = TratsformStream;

