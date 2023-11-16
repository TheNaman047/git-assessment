const subscribers = [];

function subscribe(url) { subscribers.push(url); }
function notify(event) { return subscribers.map((u) => ({ u, event })); }

module.exports = { subscribe, notify };
