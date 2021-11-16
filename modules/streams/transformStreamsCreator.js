const AtbashCreateTransformStream = require('./AtbashCreateTransformStream');
const Rot8ChiperCreateTransformStream = require('./Rot8ChiperCreateTransformStream');
const CaesarChiperCreateTransformStream = require('./CaesarChiperCreateTransformStream');
const atbashCipher = require('../encryptModules/atbashCipher');
const rotCipher = require('../encryptModules/rotCipher');

const transformStreamsCreator = (config) => {
  return config.map(code => {
    const [chiper, option] = [...code];
    switch (chiper) {
      case 'A':
        return AtbashCreateTransformStream(atbashCipher);
      case 'C':
          return CaesarChiperCreateTransformStream(rotCipher, option);
      case 'R':
        return Rot8ChiperCreateTransformStream(rotCipher, option)
    }
  })
}

module.exports = transformStreamsCreator;
