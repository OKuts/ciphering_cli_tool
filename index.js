const fs = require('fs');
const getParams = require('./modules/getParams');
const encrypt = require('./modules/encrypt');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');

const argv = process.argv.slice(2);

const cipher = async (arg) => {
  const params = getParams(arg);
  if (params.errorMessage) return params.errorMessage;

  const filteredParams = getFilteredParams(params);

  const configData = getConfigData(filteredParams);
  if (typeof configData === 'string') return configData;

  const readStream = fs.createReadStream(filteredParams.i, 'utf8');
  const writeStream = fs.createWriteStream(filteredParams.o, {'flags': 'a'});

  readStream
    .on('data', chunk => {
    if (chunk) {
      const outData = encrypt(configData, chunk);
      writeStream.write(outData)
    }
  })
    .on('error', function(err) {
      return err.message;
  });
}

cipher(argv).then(data => {
  if (data) {
    console.error(data)
  } else {
    console.log('Success')
  }
});
