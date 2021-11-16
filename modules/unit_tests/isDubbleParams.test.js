const getParams = require('../getParams');

describe('Function getParams', () => {

  test('empty arguments', () => {
    expect(getParams('').errorCode).toEqual(1);
  })

  test('arguments are exactly duplicated', () => {
    const args = ['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '-i', './input.txt'];
    expect(getParams(args).errorCode).toEqual(3);
  })

  test('arguments are not exactly duplicated', () => {
    const args = ['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '--input', './input.txt'];
    expect(getParams(args).errorCode).toEqual(3);
  })

  test('count of arguments are even', () => {
    const args = ['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o'];
    expect(getParams(args).errorCode).toEqual(2);
  })

  test('return result', () => {
    const args = ['-c', 'C1-C0-A-R1', '-i', './input.txt'];
    expect(getParams(args).errorCode).toBeUndefined();
  })
})
