const getConfigData = config => {
  if (!config) return {errorCode: 4};
  const keys = config.split('-');
  const isValid = keys.every(key => /^A$|^[C|R][1|0]$/.test(key));
  if (!isValid) return {errorCode: 4};

  return {config: keys};
}

module.exports = getConfigData;
