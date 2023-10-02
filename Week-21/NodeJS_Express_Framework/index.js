const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }
  res.json(task);
});
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  const { title, description, completed } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    description,
    completed: completed || false,
  };
  res.json(tasks[taskIndex]);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask[0]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
