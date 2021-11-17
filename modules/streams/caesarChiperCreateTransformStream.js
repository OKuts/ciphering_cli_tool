const { Transform } = require('stream');

const caesarChiperCreateTransformStream = (func, code) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = func(chunk.toString(), code);
      callback(null, data);
    }
  });
}

module.exports = caesarChiperCreateTransformStream;

