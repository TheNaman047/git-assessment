async function load() {
  const res = await fetch('/tasks');
  const tasks = await res.json();
  document.getElementById('list').innerHTML =
    tasks.map((t) => `<li>${t.title}</li>`).join('');
}

document.addEventListener('DOMContentLoaded', load);
