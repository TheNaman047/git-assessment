const comments = [];

function routeComments(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(comments));
}

module.exports = { routeComments, comments };
