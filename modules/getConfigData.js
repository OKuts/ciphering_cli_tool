const getConfigData = params => {

  const keys = params.c.split('-');
  const isValid = keys.every(key => /^A$|^[C|R][1|0]$/.test(key));
  if (!isValid) return 'config not valid';

  return keys;
}

module.exports = getConfigData;
