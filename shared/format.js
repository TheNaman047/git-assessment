function formatTask(t) {
  return `[${t.status}] ${t.title}`;
}

function formatList(tasks) {
  return tasks.map(formatTask).join('\n');
}

module.exports = { formatTask, formatList };
