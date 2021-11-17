const getErrorMessage = require('../getErrorMessage');

describe('Function getErrorMessage', () => {
  test('should be defined', () => {
    expect(getErrorMessage).toBeDefined();
  });

  test('return message if codeError = 1', () => {
    const commandLine = {i: 'yes', input: 'no'}
    expect(getErrorMessage(1)).toBe('input is empty');
  })

  test('return message if codeError = 2', () => {
    const commandLine = {i: 'yes', input: 'no'}
    expect(getErrorMessage(2)).toBe('config data is not complete');
  })

  test('return message if codeError = 3', () => {
    const commandLine = {i: 'yes', input: 'no'}
    expect(getErrorMessage(3)).toBe('arguments are duplicated');
  })

  test('return message if codeError = 4', () => {
    const commandLine = {i: 'yes', input: 'no'}
    expect(getErrorMessage(4)).toBe('config data is not correct');
  })

  test('return message if codeError < 1 and codeError > 5', () => {
    expect(getErrorMessage(6)).toBeNull();
  })
})
