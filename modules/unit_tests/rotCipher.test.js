const rotCipher = require('../encryptModules/rotCipher');

describe('function rotCipher', () => {
    test('should be defined', () => {
        expect(rotCipher).toBeDefined();
    });

    test.each([
        [['ABCD', 1], 'BCDE'],
        [['abcd', 1], 'bcde'],
        [['123', 1], '123'],
        [['A1B1Z', 1], 'B1C1A'],
        [['аяАЯ', 1], 'аяАЯ'],
        [['"_"*', 1], '"_"*'],
    ])('should encrypt text by Caesar', (data, expected) => {
        expect(rotCipher(...data)).toBe(expected);
    });

    test.each([
        [['BCDE', 0], 'ABCD'],
        [['bcde', 0], 'abcd'],
        [['123', 0], '123'],
        [['B1C1A', 0], 'A1B1Z'],
        [['аяАЯ', 0], 'аяАЯ'],
        [['"_"*', 0], '"_"*'],
    ])('should decrypt text by Caesar', (data, expected) => {
        expect(rotCipher(...data)).toBe(expected);
    });

    test.each([
        [['ABCD', 1, 8], 'IJKL'],
        [['abcd', 1, 8], 'ijkl'],
        [['123', 1, 8], '123'],
        [['A1b 1Z', 1, 8], 'I1j 1H'],
        [['аяАЯ', 1, 8], 'аяАЯ'],
        [['"_"*', 1, 8], '"_"*'],
    ])('should encrypt text by ROT-8', (data, expected) => {
        expect(rotCipher(...data)).toBe(expected);
    });

    test.each([
        [['IJKL', 0, 8], 'ABCD'],
        [['ijkl', 0, 8], 'abcd'],
        [['123', 0, 8], '123'],
        [['I1j 1H', 0, 8], 'A1b 1Z'],
        [['аяАЯ', 0, 8], 'аяАЯ'],
        [['"_"*', 0, 8], '"_"*'],
    ])('should decrypt text by ROT-8', (data, expected) => {
        expect(rotCipher(...data)).toBe(expected);
    });
});