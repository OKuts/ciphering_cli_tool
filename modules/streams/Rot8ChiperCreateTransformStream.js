const Transform = require('stream').Transform;

const Rot8ChiperCreateTransformStream = (func, code) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = func(chunk.toString(), code, 8);
      callback(null, data);
    }
  });
}

module.exports = Rot8ChiperCreateTransformStream;

