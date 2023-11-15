const tasks = [];

function routeTasks(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify(tasks));
  }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      tasks.push(JSON.parse(body));
      res.writeHead(201).end();
    });
    return;
  }
  res.writeHead(405).end('method not allowed');
}

module.exports = { routeTasks };
