const isDoubleParams = require('./isDoubleParams');
const processBreak = require('./processBreak');

const getParams = args => {
  if (!args.length) processBreak('ERROR: input is empty', 1);
  if (args.length !== [...new Set(args)].length) processBreak('ERROR: arguments are duplicated', 3);
  if (args.length % 2) processBreak('ERROR: config data is not complete', 2);

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
    processBreak('ERROR: config data is not complete', 2);
  if (isDoubleParams(commandLine)) processBreak('ERROR: arguments are duplicated', 4);

  return commandLine;
}

module.exports = getParams;
