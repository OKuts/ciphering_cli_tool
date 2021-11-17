const getParams = require('../getParams');

describe('Function getParams', () => {

  test('should be defined', () => {
    expect(getParams).toBeDefined();
  });

  test('empty arguments', () => {
    expect(getParams('').errorCode).toEqual(1);
  })

  test.each([
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '--input', './input1.txt'], 3],
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '--output', './output1.txt'], 3],
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '--config', 'C1-C0-A'], 3],

  ])('arguments are not exactly duplicated', (data, expected) => {
    expect(getParams(data).errorCode).toBe(expected);
  });

  test.each([
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '-i', './input1.txt'], 3],
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '-o', './output1.txt'], 3],
    [['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o', './output.txt', '-c', 'C1-C0-A'], 3],

  ])('arguments are exactly duplicated', (data, expected) => {
    expect(getParams(data).errorCode).toBe(expected);
  });


  test('count of arguments are even', () => {
    const args = ['-c', 'C1-C0-A-R1', '-i', './input.txt', '-o'];
    expect(getParams(args).errorCode).toEqual(2);
  })

  test.each([
    [['-c', 'C1-C0-A-R1', '-i', './input.txt']],
    [['-c', 'C1', '-i', './input.txt']],
  ])('return result', (data) => {
    expect(getParams(data).errorCode).toBeUndefined();
  });

  test.each([
    [['gg', 'kjhkjh'], 4],
    [['A1', 'kjhkjh'], 4],
    [['A', 'kjhkjh'], 4],
  ])('config data is not correct', (data, expected) => {
    expect(getParams(data).errorCode).toBe(expected);
  });
})
