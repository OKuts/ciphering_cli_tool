const isDoubleParams = require('./isDoubleParams');

const getParams = (args) => {
  if (!args.length) return {errorMessage: 'inputdata empty'};
  if (args.length !== [...new Set(args)].length) return {errorMessage: 'double arguments'};

  const commandLine = {};
  let key;
  let temp;
  args.forEach(item => {
    if (/^-{2}\w+$/.test(item) && item.length > 3) key = item.slice(2);
    if (/^-\w+$/.test(item) && item.length === 2) key = item[1];
    if (key) commandLine[key] = null;
    if (temp) {
      commandLine[temp] = item;
      temp = null;
    } else {
      temp = key;
      key = null;
    }
  })
  if (!Object.getOwnPropertyNames(commandLine).length) return {errorMessage: 'error data format'};
  if (!commandLine.c && !commandLine.config) return {errorMessage: 'no correct config'};
  if (isDoubleParams(commandLine)) return {errorMessage: 'double arguments'};

  return commandLine;
}

module.exports = getParams;
