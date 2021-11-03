const fs = require('fs');

const getInputData = file => {
    if (file) {
        try {
            let fileContent = fs.readFileSync(file, "utf8");
            return fileContent;
        } catch {
            return '';
        }
    }
;

}

module.exports = getInputData;
