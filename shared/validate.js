function isValidTitle(title) {
  return typeof title === 'string' && title.trim().length > 0 && title.length <= 120;
}

module.exports = { isValidTitle };
