function search(tasks, term) {
  return tasks.filter((t) => t.title.includes(term));
}

module.exports = { search };
