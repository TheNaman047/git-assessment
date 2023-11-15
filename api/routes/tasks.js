const tasks = [];

function routeTasks(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify(tasks));
  }
  res.writeHead(405).end('method not allowed');
}

module.exports = { routeTasks };
