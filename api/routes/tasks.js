const tasks = [];
const archived = [];

function json(res, body) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
}

function routeTasks(req, res) {
  if (req.method === 'GET') {
    return json(res, tasks);
  }
  res.writeHead(405).end('method not allowed');
}

function routeArchive(req, res) {
  json(res, archived);
}

module.exports = { routeTasks, routeArchive };
