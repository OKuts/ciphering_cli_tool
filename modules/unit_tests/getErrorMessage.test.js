const getErrorMessage = require('../getErrorMessage');

describe('Function getErrorMessage', () => {
  test('should be defined', () => {
    expect(getErrorMessage).toBeDefined();
  });

  test.each([
    [1, 'input is empty'],
    [2, 'config data is not complete'],
    [3, 'arguments are duplicated'],
    [4, 'config data is not correct'],
  ])('is config data not valid', (data, expected) => {
    expect(getErrorMessage(data)).toBe(expected);
  });

  test('return message if codeError = 5', () => {
    const file = './myFile.txt';
    expect(getErrorMessage(5, file)).toBe('file <./myFile.txt> not found');
  })

  test('return message if codeError = 5', () => {
    const file = '';
    expect(getErrorMessage(5, file)).toBe('file not found');
  })

  test('return message if codeError < 1 and codeError > 5', () => {
    expect(getErrorMessage(6)).toBeNull();
  })
})
