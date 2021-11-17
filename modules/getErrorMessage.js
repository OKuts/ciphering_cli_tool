const getErrorMessage = (code, file = '') => {
    switch (code) {
        case 1: return 'input is empty';
        case 2: return 'config data is not complete';
        case 3: return 'arguments are duplicated';
        case 4: return 'config data is not correct';
        case 5: return `file${file ? ' <' + file + '> ' : ' '}not found`;

        default: return null;
    }
}

module.exports = getErrorMessage;