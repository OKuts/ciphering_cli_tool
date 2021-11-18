const transformStreamsCreator = require('../streams/transformStreamsCreator');
const rotCipher = require("../encryptModules/rotCipher");
describe('function transformStreamsCreator', () => {
    test('should be defined', () => {
        expect(transformStreamsCreator).toBeDefined();
    });

    let creators, fn1, fn2, fn3;

    beforeEach(() => {
        fn1 = jest.fn(x => x);
        fn2 = jest.fn(x => x);
        fn3 = jest.fn(x => x);
        creators = [[fn1, x => x], [fn2, x => x], [fn3, x => x]];
    })

    test('atbashCreateTransformStream be called', () => {
        transformStreamsCreator(['A'], creators);
        expect(fn1.mock.calls.length).toBe(1);
        expect(fn2.mock.calls.length).toBe(0);
        expect(fn3.mock.calls.length).toBe(0);
    });

    test('caesarChiperCreateTransformStream be called', () => {
        transformStreamsCreator(['C1'], creators);
        expect(fn1.mock.calls.length).toBe(0);
        expect(fn2.mock.calls.length).toBe(0);
        expect(fn3.mock.calls.length).toBe(1);
    });

    test('rot8ChiperCreateTransformStream be called', () => {
        transformStreamsCreator(['R1'], creators);
        expect(fn1.mock.calls.length).toBe(0);
        expect(fn2.mock.calls.length).toBe(1);
        expect(fn3.mock.calls.length).toBe(0);
    });
});