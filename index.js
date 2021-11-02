const getParams = require('./modules/getParams');

const argv = process.argv.slice(2);

const isCiphering = () => {

  const params = getParams(argv);
  if (params.errorMessage) return params.errorMessage;
  console.log(params);

  const encryptStatus = encrypt(params);

  return encryptStatus || false;
}

const error = isCiphering(argv);

console.log(12, error ? 'Fail' : 'Success ');

