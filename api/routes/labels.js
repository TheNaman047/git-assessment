const labels = ['bug', 'chore', 'feature'];

function routeLabels(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(labels));
}

module.exports = { routeLabels };
