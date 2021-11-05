const Transform = require('stream').Transform;

const myCreateTransformStream = (func, config) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = func(config, chunk.toString(),);
      callback(null, data);
    }
  });
}

module.exports = myCreateTransformStream;

