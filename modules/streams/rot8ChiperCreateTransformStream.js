const { Transform } = require('stream');

const rot8ChiperCreateTransformStream = (func, code) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = func(chunk.toString(), code, 8);
      callback(null, data);
    }
  });
}

module.exports = rot8ChiperCreateTransformStream;

