const processBreak = (msg, cod) => {
  process.stderr.write(`\n${msg}. (Cod --> ${cod})\n\n`);
  process.exit(cod);
}

module.exports = processBreak;
