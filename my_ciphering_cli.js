const fs = require('fs');
const {pipeline} = require('stream');
const getParams = require('./modules/getParams');
const encrypt = require('./modules/encrypt');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');
const processBreak = require('./modules/processBreak');
// const TransformStream = require('./modules/encryptModules/streams/TransformStream');
const myCreateTransformStream = require('./modules/encryptModules/streams/myCreateTransformStream');
const myCreateReadStream = require('./modules/encryptModules/streams/myCreateReadStream');
const myCreateWriteStream = require('./modules/encryptModules/streams/myCreateWriteStream');

const argv = process.argv.slice(2);

const applyEncryption = arg => {

  const params = getParams(arg);
  const filteredParams = getFilteredParams(params);
  const configData = getConfigData(filteredParams);

  try {
    fs.statSync(filteredParams.output)
  } catch (err) {
    processBreak(`ERROR: File ${filteredParams.output} not found`, 6)
  }

  const readStream = myCreateReadStream(filteredParams.input);
  const transformStream = myCreateTransformStream(encrypt, configData);
  const writeStream = myCreateWriteStream(filteredParams.output);

  pipeline(readStream, transformStream, writeStream, err => {
      if (err) {
        processBreak(`ERROR: File ${err.path} not found`, 6);
      }
      processBreak('Success', 0);
    }
  );
}

applyEncryption(argv);
