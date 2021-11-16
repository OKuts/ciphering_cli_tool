const isDoubleParams = require('../isDoubleParams');

describe('Function isDoubleParams', () => {

  test('checking for not exactly duplicate parameters', () => {
    const commandLine = {i: 'yes', input: 'no'}
    expect(isDoubleParams(commandLine)).toBeTruthy();
  })

  test('checking for exactly duplicate parameters', () => {
    const commandLine = {c: 'yes', config: 'no'}
    expect(isDoubleParams(commandLine)).toBeTruthy();
  })

  test('checking for exactly duplicate parameters', () => {
    const commandLine = {o: 'yes', output: 'no'}
    expect(isDoubleParams(commandLine)).toBeTruthy();
  })

})
