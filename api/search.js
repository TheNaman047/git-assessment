function search(tasks, term) {
  const needle = term.toLowerCase();
  return tasks.filter((t) => t.title.toLowerCase().includes(needle));
}

module.exports = { search };
