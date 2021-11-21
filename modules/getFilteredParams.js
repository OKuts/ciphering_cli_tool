const getFilteredParams = (params) => {

  return {
    config: params.c || params.config,
    input: params.i || params.input || null,
    output: params.o || params.output || null,
  }
}

module.exports = getFilteredParams;
