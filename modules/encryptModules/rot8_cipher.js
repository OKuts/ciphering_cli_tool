const rot8_cipher = (data, key) => {
  let shift = key[0] === 'C' ? 1 : 8;
  shift *= +key[1] ? 1 : -1;
  const result = data.split('').reduce((out, leter) => {
    if (/[a-zA-Z]/.test(leter)) {
      const char = leter.charCodeAt();
      let start = char - 65 > 26 ? 97 : 65;
      let correction = 0;
      if (char + shift > start + 25 ) correction = -26;
      if (char + shift < start) correction = 26;
      return out + String.fromCharCode(char + shift + correction);
    } else {
      return out + leter
    }
  }, '');
  return result;
}

module.exports = rot8_cipher;
