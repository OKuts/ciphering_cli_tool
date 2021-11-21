const processBreak = (msg, code) => {
  const add = code ? 'Error:' : 'Success.';
  process[code ? 'stderr' : 'stdout'].write(`\n${add} ${msg} (Cod --> ${code})\n\n`);
  process.exit(code);
}

module.exports = processBreak;
