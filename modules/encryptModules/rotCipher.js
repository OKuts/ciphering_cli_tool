const rotCipher = (data, key, shift = 1) => {
  const currentShift = shift * (+key ? 1 : -1);
  const result = data.split('').reduce((out, letter) => {
    if (/[a-zA-Z]/.test(letter)) {
      const char = letter.charCodeAt();
      let start = char - 65 > 26 ? 97 : 65;
      let correction = 0;
      if (char + currentShift > start + 25 ) correction = -26;
      if (char + currentShift < start) correction = 26;
      return out + String.fromCharCode(char + currentShift + correction);
    } else {
      return out + letter
    }
  }, '');
  return result;
}

module.exports = rotCipher;
