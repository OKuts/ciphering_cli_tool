const caesar_cipher = require('./encryptModules/caesar_cipher');
const atbash_cipher = require('./encryptModules/atbash_cipher');
const rot8_cipher = require('./encryptModules/rot8_cipher');

const encript = (keys, inputData) => {
  let result = inputData;
  keys.forEach(key => {
    switch (key[0]) {
      case 'C':
        result = caesar_cipher(result, key);
        break;
      case 'A':
        result = atbash_cipher(result);
        break;
      case 'R':
        result = rot8_cipher(result, key);
        break;
    }
  })
  return result;
}

module.exports = encript;
