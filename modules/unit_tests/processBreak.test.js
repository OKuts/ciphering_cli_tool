const processBreak = require('../processBreak');

describe('Function processBreak', () => {

    test('should be defined', () => {
        expect(processBreak).toBeDefined();
    });

    test.each([
        ['hello', 1],
        ['hello', 2],
        ['hello', 3],
        ['hello', 4],
        ['hello', 5],
    ])('close process is right', (data, code) => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        processBreak(data, code);
        expect(mockExit).toHaveBeenCalledWith(code);
    });

    test.each([
        [['hello', 1],'\nError: hello (Cod --> 1)\n\n'],
        [['hello', 2],'\nError: hello (Cod --> 2)\n\n'],
        [['hello', 3],'\nError: hello (Cod --> 3)\n\n'],
        [['hello', 4],'\nError: hello (Cod --> 4)\n\n'],
        [['hello', 5],'\nError: hello (Cod --> 5)\n\n'],
    ])('error message is right', ([data, code], expected) => {
        const mockWrite= jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
        processBreak(data, code);
        expect(mockWrite).toHaveBeenCalledWith(expected);
    });

    test('success message is right', () => {
        const mockWrite= jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
        processBreak('hello', 0);
        expect(mockWrite).toHaveBeenCalledWith('\nSuccess. hello (Cod --> 0)\n\n');
    });
})
