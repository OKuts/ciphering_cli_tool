const atbashCipher = data => {
  const result = data.split('').reduce((out, letter) => {
    if (/[a-zA-Z]/.test(letter)) {
      const char = letter.charCodeAt();
      let start = char - 65 > 26 ? 97 : 65;
      return out + String.fromCharCode(2 * start + 25 - char);
    } else {
      return out + letter
    }
  }, '');

  return result;
}

module.exports = atbashCipher;
