const isDoubleParams = commandLine => {
  return (
    commandLine.c && commandLine.config ||
    commandLine.i && commandLine.input ||
    commandLine.o && commandLine.output
  )
}

module.exports = isDoubleParams;
