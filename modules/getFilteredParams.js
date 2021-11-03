const getFilteredParams = (params) => {

  return {
    c: params.c || params.config,
    i: params.i || params.input || null,
    o: params.o || params.output || null,
  }
}

module.exports = getFilteredParams;
