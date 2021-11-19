const isDoubleParams = require('../isDoubleParams');

describe('Function isDoubleParams', () => {

  test('should be defined', () => {
    expect(isDoubleParams).toBeDefined();
  });

  test.each([
    [{i: 'yes', input: 'no'}],
    [{c: 'yes', config: 'no'}],
    [{o: 'yes', output: 'no'}],
  ])('is config data not valid', (data) => {
    expect(isDoubleParams(data)).toBeTruthy();
  });
})
