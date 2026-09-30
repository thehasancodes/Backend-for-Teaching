const Task = require("../models/task.model");

const createTask = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  return task;
};

const updateTask = async (id, taskData) => {
  const task = await Task.findByIdAndUpdate(id, taskData, {
    new: true,
    runValidators: true,
  });
  return task;
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
};
