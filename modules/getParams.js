const getParams = (args) => {
  if (!args.length) return {errorMessage: 'inputdata empty'};
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

  return commandLine;
}

module.exports = getParams;
