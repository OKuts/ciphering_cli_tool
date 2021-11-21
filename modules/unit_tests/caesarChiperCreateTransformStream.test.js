const { Transform } = require('stream');
const caesarChiperCreateTransformStream = require('../streams/caesarChiperCreateTransformStream');

describe('function caesarChiperCreateTransformStream', () => {
    let fn;

    beforeEach(() => {
        fn = jest.fn(x => x);
    })

    test('should be defined', () => {
        expect(caesarChiperCreateTransformStream).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(caesarChiperCreateTransformStream()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(caesarChiperCreateTransformStream(fn) instanceof Transform ).toBe(true);
    });

    test('transform function was called', () => {
        caesarChiperCreateTransformStream(fn)._transform('','utf8', x=>x)
        expect(fn.mock.calls.length).toBe(1);
    });
});