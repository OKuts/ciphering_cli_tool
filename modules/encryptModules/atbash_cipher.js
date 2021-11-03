const atbash_cipher = (data) => {
  console.log(data);
  const result = data.split('').reduce((out, leter) => {
    if (/[a-zA-Z]/.test(leter)) {
      const char = leter.charCodeAt();
      let start = char - 65 > 26 ? 97 : 65;
      return out + String.fromCharCode(2 * start + 25 - char);
    } else {
      return out + leter
    }
  }, '');

  console.log(result);
  return result;
}

module.exports = atbash_cipher;
