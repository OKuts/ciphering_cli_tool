const getParams = require('./modules/getParams');
const encrypt = require('./modules/encrypt');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');
const getInputData = require('./modules/getInputData');
const saveOutData = require('./modules/saveOutData');

const argv = process.argv.slice(2);

const isCiphering = () => {

  const params = getParams(argv);
  if (params.errorMessage) return params.errorMessage;

  const filteredParams = getFilteredParams(params);

  const configData = getConfigData(filteredParams);
  if (typeof configData === 'string') return configData;

  const inputData = getInputData(filteredParams.i);
  if (!inputData) return 'Input file not found';

  const outData = encrypt(configData, inputData);

  const isSaveSuccess = saveOutData(outData, filteredParams.o)
  if (!isSaveSuccess) return 'File not exist';

  console.log(inputData)
  console.log(outData)
  return false;
}

const error = isCiphering(argv);

console.log(12, error ? error : 'Success ');

