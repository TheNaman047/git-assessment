async function load() {
  const res = await fetch('/tasks');
  const tasks = await res.json();
  document.getElementById('list').innerHTML =
    tasks.map((t) => `<li data-id="${t.id}">${t.title}</li>`).join('');
}

load();
