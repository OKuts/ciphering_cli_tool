const getConfigData = require('../getConfigData');

describe('Function getConfigData', () => {

    test('is Atbash config data not valid', () => {
        expect(getConfigData('A-A-A-C1-C1-A1').errorCode).toBe(4);
    })

    test('is Caesar config data not valid', () => {
        expect(getConfigData('A-A-A-R1-R0-R0-R0-C2-C1-A1').errorCode).toBe(4);
    })

    test('is Caesar config data not valid', () => {
        expect(getConfigData('A-A-A-R1-R0-R0-R0-C-C1-A1').errorCode).toBe(4);
    })

    test('is  ROT-8 config data not valid', () => {
        expect(getConfigData('A-A-A-R1-R2-R0-R0-C0-C1-A').errorCode).toBe(4);
    })

    test('is  ROT-8 config data not valid', () => {
        expect(getConfigData('A-A-A-R1-R-R0-R0-C0-C1-A').errorCode).toBe(4);
    })
})