const processBreak = (msg, code, std = 'stderr') => {
  process[std].write(`\n${msg}. (Cod --> ${code})\n\n`);
  process.exit(code);
}

module.exports = processBreak;
