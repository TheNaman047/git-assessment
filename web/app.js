async function load() {
  const res = await fetch('/tasks');
  const tasks = await res.json();
  document.getElementById('list').innerHTML =
    tasks.map((t) => `<li>${t.title}</li>`).join('');
}

async function loadLabels() {
  const res = await fetch('/labels');
  return res.json();
}

load();
