function isValidTitle(title) {
  return typeof title === 'string' && title.trim().length > 0;
}

function isValidPriority(p) {
  return ['low', 'normal', 'high'].includes(p);
}

function isValidDueDate(d) {
  return !Number.isNaN(Date.parse(d));
}

module.exports = { isValidTitle, isValidPriority, isValidDueDate };
