let hits = 0;

function record() { hits += 1; }
function total() { return hits; }

module.exports = { record, total };
