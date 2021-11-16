const { Transform } = require('stream');

const atbashCreateTransformStream = (func) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = func(chunk.toString(),);
      callback(null, data);
    }
  });
}

module.exports = atbashCreateTransformStream;

