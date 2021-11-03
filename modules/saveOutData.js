const fs = require('fs');

const saveOutData = (data, file) => {
  if (file) {
    try {
      fs.appendFileSync(file, data);
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = saveOutData;
