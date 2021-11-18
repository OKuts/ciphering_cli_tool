const fs = require('fs');
const path = require('path');
const {pipeline} = require('stream');
const getParams = require('./modules/getParams');
const getConfigData = require('./modules/getConfigData');
const getFilteredParams = require('./modules/getFilteredParams');
const processBreak = require('./modules/processBreak');
const transformStreamsCreator = require('./modules/streams/transformStreamsCreator');
const MyWriteStream = require('./modules/streams/myWriteStream');
const MyReadStream = require('./modules/streams/myReadStream');
const getErrorMessage = require("./modules/getErrorMessage");
const atbashCreateTransformStream = require('./modules/streams/atbashCreateTransformStream');
const rot8ChiperCreateTransformStream = require('./modules/streams/rot8ChiperCreateTransformStream');
const caesarChiperCreateTransformStream = require('./modules/streams/caesarChiperCreateTransformStream');
const atbashCipher = require('./modules/encryptModules/atbashCipher');
const rotCipher = require('./modules/encryptModules/rotCipher');

const argv = process.argv.slice(2);

const applyEncryption = arg => {

    const params = getParams(arg);
    if (params.errorCode) processBreak(getErrorMessage(params.errorCode), params.errorCode);

    const {input, output, config} = getFilteredParams(params);
    const configData = getConfigData(config);
    if (configData.errorCode) processBreak(getErrorMessage(configData.errorCode), configData.errorCode);

    if (output) {
        try {
            fs.statSync(output);
        } catch (e) {
            processBreak(getErrorMessage(5, output), 5);
        }
    }

    const creators = [
        [atbashCreateTransformStream, atbashCipher],
        [rot8ChiperCreateTransformStream, rotCipher],
        [caesarChiperCreateTransformStream, rotCipher],
    ]

    const readStream = input ? new MyReadStream(path.join(__dirname, input)) : process.stdin;
    const transformStreams = transformStreamsCreator(configData.config, creators); // look transformStreamsCreator (3 streams)
    const writeStream = output ? new MyWriteStream(path.join(__dirname, output)) : process.stdout;

    pipeline(readStream, ...transformStreams, writeStream, err => {
            if (err) {
                processBreak(getErrorMessage(5, err.path), 5);
            }
            processBreak('', 0, 'stdout');
        }
    );
}

applyEncryption(argv);
