const processBreak = require("./processBreak");

const getConfigData = config => {
  const keys = config.split('-');
  const isValid = keys.every(key => /^A$|^[C|R][1|0]$/.test(key));
  if (!isValid) processBreak('ERROR: config data is not correct', 4);

  return keys;
}

module.exports = getConfigData;
