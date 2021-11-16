const isDoubleParams = require('./isDoubleParams');

const getParams = args => {
  if (!args.length) return {errorCode: 1};
  if (args.length !== [...new Set(args)].length) return {errorCode: 3};
  if (args.length % 2) return {errorCode: 2};

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

  if (!Object.getOwnPropertyNames(commandLine).length) return {errorCode: 4};
  if (isDoubleParams(commandLine)) return {errorCode: 3};

  return commandLine;
}

module.exports = getParams;
