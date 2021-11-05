const fs = require('fs');
const {pipeline} = require('stream');
const getParams = require('./modules/getParams');
const encrypt = require('./modules/encrypt');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');
const processBreak = require('./modules/processBreak');
// const TransformStream = require('./modules/encryptModules/streams/TransformStream');
const createTransformStream = require('./modules/createTransformStream');

const argv = process.argv.slice(2);

const cipher = arg => {

  const params = getParams(arg);
  if (params.errorMessage) processBreak(params.errorMessage, params.cod);

  const filteredParams = getFilteredParams(params);

  try {
    fs.statSync(filteredParams.output)
  } catch (err) {
    processBreak(`ERROR: File ${filteredParams.output} not found`, 6)
  }

  const configData = getConfigData(filteredParams);
  if (typeof configData === 'string') processBreak(configData, 5);

  // streams
  const readStream = filteredParams.input
    ? fs.createReadStream(filteredParams.input, 'utf8') : process.stdin;
  const transformStream = createTransformStream(encrypt, configData);
  const writeStream = filteredParams.output
    ? fs.createWriteStream(filteredParams.output, {'flags': 'a'}) : process.stdout;

  pipeline(readStream, transformStream, writeStream, err => {
      if (err) {
        processBreak(`ERROR: File ${err.path} not found`, 6);
      }
      processBreak('Success', 0);
    }
  );
}

cipher(argv);
