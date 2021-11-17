const { Transform } = require('stream');
const atbashCreateTransformStream = require('../streams/atbashCreateTransformStream');

describe('Atbash', () => {
    test('should be defined', () => {
        expect(atbashCreateTransformStream).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(atbashCreateTransformStream()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(atbashCreateTransformStream() instanceof Transform ).toBe(true);
    });
});