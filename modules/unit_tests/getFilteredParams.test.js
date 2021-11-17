const getFilteredParams = require('../getFilteredParams');

describe('Function getFilteredParams', () => {
  let params, out;

  test('should be defined', () => {
    expect(getFilteredParams).toBeDefined();
  });

  test('return object with properties "config", "input", "output"', () => {
    params = { c: 'config', i: 'input', o: 'output'};
    out = { config: 'config', input: 'input', output: 'output'};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('return object with properties "config", "input", "output"', () => {
    params = { config: 'config', input: 'input', output: 'output'};
    out = { config: 'config', input: 'input', output: 'output'};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('should return object with "input: null"', () => {
    params = { c: 'config', o: 'output'};
    out = { config: 'config', input: null, output: 'output'};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('should return object with "output: null"', () => {
    params = { c: 'config', i: 'input'};
    out = { config: 'config', input: 'input', output: null};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('should return object with "input: null" and "output: null"', () => {
    params = { c: 'config'};
    out = { config: 'config', input: null, output: null};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('should return object with "input: null" and "output: null"', () => {
    params = {};
    out = {input: null, output: null};
    expect(getFilteredParams(params)).toEqual(out);
  })

  test('should ignore other properties', () => {
    params = {a: 'other properties'};
    out = {input: null, output: null};
    expect(getFilteredParams(params)).toEqual(out);
  })
})
