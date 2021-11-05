const Transform = require('stream').Transform;

class TransformStream extends Transform {
  constructor(func, config) {
    super();
    this.func = func;
    this.config = config;
  }
  _transform(chunk, encoding, callback) {
    this.push(this.func(this.config, chunk.toString()));
    callback();
  }
}

module.exports = TransformStream;

