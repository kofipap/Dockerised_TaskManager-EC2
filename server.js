const express = require("express");
    completed: false,
  },
  {
    id: 2,
    text: "Build CI/CD Pipeline",
    completed: false,
  },
];

// GET ALL TASKS
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// CREATE TASK
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// TOGGLE COMPLETE
app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  res.json({ message: "Task updated" });
});

// DELETE TASK
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.filter((task) => task.id !== taskId);

  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});