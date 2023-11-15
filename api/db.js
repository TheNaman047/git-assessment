const rows = new Map();

function put(id, value) { rows.set(id, value); }
function get(id) { return rows.get(id); }
function remove(id) { return rows.delete(id); }

module.exports = { put, get, remove };
