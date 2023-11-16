function formatTask(t) {
  return `[${t.status.toUpperCase()}] ${t.title}`;
}

module.exports = { formatTask };
