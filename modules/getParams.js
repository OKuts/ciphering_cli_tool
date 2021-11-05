const isDoubleParams = require('./isDoubleParams');

const getParams = args => {
  if (!args.length) return {errorMessage: 'ERROR: input is empty', cod: 1};
  if (args.length !== [...new Set(args)].length) return {errorMessage: 'ERROR: arguments are duplicated', cod: 4};
  if (args.length % 2) return {errorMessage: 'ERROR: config data is not complete', cod: 2};

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

  if (!Object.getOwnPropertyNames(commandLine).length)
    return {errorMessage: 'ERROR: config data is not complete', cod: 3};
  if (!commandLine.c && !commandLine.config) return {errorMessage: 'ERROR: config data is not correct', cod: 5};
  if (isDoubleParams(commandLine)) return {errorMessage: 'ERROR: arguments are duplicated', cod: 4};

  return commandLine;
}

module.exports = getParams;
