const fs = require('fs');
const { pipeline } = require('stream');
const getParams = require('./modules/getParams');
const encrypt = require('./modules/encrypt');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');
const processBreak = require('./modules/processBreak');
const TransformStream = require('./modules/TransformStream');

const argv = process.argv.slice(2);

const cipher = arg => {

  const params = getParams(arg);
  if (params.errorMessage) processBreak(params.errorMessage);

  const filteredParams = getFilteredParams(params);

  const configData = getConfigData(filteredParams);
  if (typeof configData === 'string') processBreak(configData);

  const readStream = filteredParams.i
    ? fs.createReadStream(filteredParams.i, 'utf8') : process.stdin;

  const transformStream = new TransformStream(encrypt, configData);

  const writeStream = filteredParams.o
    ? fs.createWriteStream(filteredParams.o, {'flags': 'a'}) : process.stdout;

  pipeline( readStream, transformStream, writeStream, (err) => {
      if (err) processBreak(`ERROR: File ${err.path} not found`)
    }
  );
}

cipher(argv);
