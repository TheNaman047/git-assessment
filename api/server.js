const http = require('http');
const { routeTasks } = require('./routes/tasks');
const { notify } = require('./webhooks');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  notify(req.url);
  if (req.url.startsWith('/tasks')) return routeTasks(req, res);
  res.writeHead(404).end('not found');
});

server.listen(PORT, () => console.log(`listening on ${PORT}`));
