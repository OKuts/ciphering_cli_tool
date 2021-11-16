const getErrorMessage = code => {
    switch (code) {
        case 1: return 'input is empty';
        case 2: return 'config data is not complete';
        case 3: return 'arguments are duplicated';
        case 4: return 'config data is not correct';
        default: return null;
    }
}

module.exports = getErrorMessage;