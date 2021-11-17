const getConfigData = require('../getConfigData');

describe('Function getConfigData', () => {

    test('should be defined', () => {
        expect(getConfigData).toBeDefined();
    });

    test('is Atbash config data not valid', () => {
        expect(getConfigData('A-A-A-C1-C1-A1').errorCode).toBe(4);
    })

    test.each([
        ['A-A-A-R1-R0-R0-R0-C2-C1-A1'],
        ['A-A-A-R1-R0-R0-R0-C-C1-A1'],
    ])('is  ROT-8 config data not valid', (data) => {
        expect(getConfigData(data).errorCode).toBe(4);
    });

    test.each([
        ['A-A-A-R1-R-R0-R0-C0-C1-A'],
        ['A-A-A-R1-R0-R2-R0-C0-C1-A'],
    ])('is  ROT-8 config data not valid', (data) => {
        expect(getConfigData(data).errorCode).toBe(4);
    });
})