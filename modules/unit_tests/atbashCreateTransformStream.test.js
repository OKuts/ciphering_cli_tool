const { Transform } = require('stream');
const atbashCreateTransformStream = require('../streams/atbashCreateTransformStream');

describe('function atbashCreateTransformStream', () => {
    let fn;

    beforeEach(() => {
        fn = jest.fn(x => x);
    })

    test('should be defined', () => {
        expect(atbashCreateTransformStream).toBeDefined();
    });

    test('return object has method _transform', () => {
        expect(atbashCreateTransformStream()._transform).toBeDefined();
    });

    test('return object instance of Transform Class', () => {
        expect(atbashCreateTransformStream(fn) instanceof Transform ).toBe(true);
    });

    test('transform function was called', () => {
        atbashCreateTransformStream(fn)._transform('','utf8', x=>x)
        expect(fn.mock.calls.length).toBe(1);
    });
});