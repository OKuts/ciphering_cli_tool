const atbash_cipher = require('./encryptModules/atbashCipher');
const rot8_cipher = require('./encryptModules/rotCipher');

const encript = (keys, inputData) => {
  let result = inputData;
  keys.forEach(key => {
    switch (key[0]) {
      case 'A':
        result = atbash_cipher(result);
        break;
      case 'R':
      case 'C':
        result = rot8_cipher(result, key);
        break;
    }
  })
  return result;
}

module.exports = encript;
