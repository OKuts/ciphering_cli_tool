const { Transform } = require('stream');
const rot8ChiperCreateTransformStream = require('../streams/rot8ChiperCreateTransformStream');

describe('function rot8ChiperCreateTransformStream', () => {
    let fn;

    beforeEach(() => {
        fn = jest.fn(x => x);
    })

    test('should be defined', () => {
        expect(rot8ChiperCreateTransformStream).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(rot8ChiperCreateTransformStream()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(rot8ChiperCreateTransformStream(fn) instanceof Transform ).toBe(true);
    });

    test('transform function was called', () => {
        rot8ChiperCreateTransformStream(fn)._transform('','utf8', x=>x)
        expect(fn.mock.calls.length).toBe(1);
    });
});