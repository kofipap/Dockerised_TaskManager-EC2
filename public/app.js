const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// LOAD TASKS
async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">🗑</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// ADD TASK
async function addTask() {
  const text = taskInput.value.trim();

  if (!text) return;

  await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  taskInput.value = "";
  loadTasks();
}

// TOGGLE TASK
async function toggleTask(id) {
  await fetch(`/api/tasks/${id}`, {
    method: "PUT"
  });

  loadTasks();
}

// DELETE TASK
async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, {
    method: "DELETE"
  });

  loadTasks();
}

// INIT
loadTasks();

