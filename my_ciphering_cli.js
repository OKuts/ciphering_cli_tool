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

const argv = process.argv.slice(2);

const applyEncryption = arg => {

    const params = getParams(arg);
    const {input, output, config} = getFilteredParams(params);
    const configData = getConfigData(config);

    if (output) {
        try {
            const stat = fs.statSync(output);
        } catch (e) {
            processBreak(`ERROR: File ${output} not found`, 6);
        }
    }
    const readStream = input ? new MyReadStream(path.join(__dirname, input)) : process.stdin;
    const transformStreams = transformStreamsCreator(configData); // look transformStreamsCreator (3 streams)

    const writeStream = output ? new MyWriteStream(path.join(__dirname, output)) : process.stdout;

    pipeline(readStream, ...transformStreams, writeStream, err => {
            if (err) processBreak(`ERROR: File ${err.path} not found`, 6);
            processBreak('Success', 0, 'stdout');
        }
    );
}

applyEncryption(argv);