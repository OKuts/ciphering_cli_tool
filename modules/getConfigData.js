const getConfigData = params => {

  const keys = params.config.split('-');
  const isValid = keys.every(key => /^A$|^[C|R][1|0]$/.test(key));
  if (!isValid) return 'ERROR: config data is not correct';

  return keys;
}

module.exports = getConfigData;
