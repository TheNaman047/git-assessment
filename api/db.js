const rows = new Map();

function put(id, value) { rows.set(id, value); }
function get(id) { return rows.get(id); }

module.exports = { put, get };
