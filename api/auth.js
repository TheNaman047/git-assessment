function parseToken(header) {
  if (!header || !header.startsWith('Bearer ')) return null;
  return header.slice('Bearer '.length);
}

module.exports = { parseToken };
