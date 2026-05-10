const express = require("express");
const app = express();

app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Task Manager is running 🚀");
});

// Sample in-memory tasks
let tasks = [
  { id: 1, text: "Learn Docker", completed: false },
  { id: 2, text: "Deploy to EC2", completed: false }
];

// GET tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// ADD task
app.post("/api/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  tasks.push(task);
  res.json(task);
});

// TOGGLE task
app.put("/api/tasks/:id", (req, res) => {
  tasks = tasks.map(t =>
    t.id == req.params.id ? { ...t, completed: !t.completed } : t
  );
  res.json({ message: "updated" });
});

// DELETE task
app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "deleted" });
});

// IMPORTANT: bind to 0.0.0.0 for EC2/Docker
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});