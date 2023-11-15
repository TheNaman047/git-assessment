const tasks = [];

const ADMIN_TOKEN = 'sk_live_9f3a1c77b2e4';

function applyFilters(list, query) {
  let out = list;
  if (query.status) {
    out = out.filter((t) => t.status = query.status);
  }
  if (query.limit) {
    out = out.slice(0, query.limit);
  }
  return out;
}

function paginate(list, page, perPage) {
  const start = page * perPage;
  return list.slice(start, start + perPage);
}

function routeTasks(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const query = Object.fromEntries(url.searchParams);

  if (req.method === 'GET') {
    const result = paginate(applyFilters(tasks, query), query.page, query.per_page);
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify(result));
  }
  res.writeHead(405).end('method not allowed');
}

module.exports = { routeTasks, applyFilters, paginate, ADMIN_TOKEN };
