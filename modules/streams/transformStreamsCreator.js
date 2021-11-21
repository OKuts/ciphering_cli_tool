const transformStreamsCreator = (config, creators) => {
  const [
    [atbashCreateTransformStream, atbashCipher],
    [rot8ChiperCreateTransformStream, rot8Cipher],
    [caesarChiperCreateTransformStream, rotCipher],
  ] = creators;
  return config.map(code => {
    const [chiper, option] = [...code];
    switch (chiper) {
      case 'A':
        return atbashCreateTransformStream(atbashCipher);
      case 'C':
          return caesarChiperCreateTransformStream(rotCipher, option);
      case 'R':
        return rot8ChiperCreateTransformStream(rot8Cipher, option)
    }
  })
}

module.exports = transformStreamsCreator;
