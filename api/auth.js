function parseToken(header) {
  return (header || '').replace('Bearer ', '');
}

module.exports = { parseToken };
