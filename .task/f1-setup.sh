#!/usr/bin/env bash
# Run this once, from the repo root, before you start task F1.
set -e
mkdir -p node_modules/left-pad api/cache
echo "module.exports = () => {};" > node_modules/left-pad/index.js
echo "2026-01-01 GET /tasks 200"   > api/cache/access.log
echo "2026-01-01 GET /tasks 500"   > api/cache/error.log
cat > .env <<'ENV'
DATABASE_URL=postgres://taskflow:hunter2@localhost/taskflow
SESSION_SECRET=1f4b9c2ae7
ENV
cat > api/routes/users.js <<'JS'
const users = [];

function routeUsers(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(users));
}

module.exports = { routeUsers };
JS
printf '\n// TODO: wire up /users\n' >> api/server.js
echo "setup complete - run 'git status' to see what you are dealing with"
