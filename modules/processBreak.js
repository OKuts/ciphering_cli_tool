const processBreak = (msg, code, std = 'stderr') => {
  const add = std !== 'stderr' ? 'Success.' : 'Error:';
  process[std].write(`\n${add} ${msg} (Cod --> ${code})\n\n`);
  process.exit(code);
}

module.exports = processBreak;
