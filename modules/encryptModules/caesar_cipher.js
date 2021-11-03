const caesar_cipher = (data, key) => {
  const shift = +key ? 1 : -1;
  const result = data.split('').reduce((out, leter) => {
    if (/[a-zA-Z]/.test(leter)) {
      const char = leter.charCodeAt();
      let correction = 0;
      if ([91, 123].includes(char + shift)) correction = -26;
      if ([96, 64].includes(char + shift)) correction = 26;
      return out + String.fromCharCode(char + shift + correction);
    } else {
      return out + leter
    }
  }, '');

  return result;
}

module.exports = caesar_cipher;
