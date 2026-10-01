const { redisClient } = require("../config/redis");
const Task = require("../models/task.model");

const createTask = async (taskData) => {
  const task = await Task.create(taskData);
  await redisClient.del("tasks");
  return task;
};

const getTasks = async () => {
  const cachedTasks = await redisClient.get("tasks");
  if (cachedTasks) {
    console.log("CACHE HIT");
    return JSON.parse(cachedTasks);
  }
  console.log("CACHE MISS");

  const tasks = await Task.find();
  await redisClient.set("tasks", JSON.stringify(tasks), { EX: 60 });
  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  await redisClient.del("tasks");
  return task;
};

const updateTask = async (id, taskData) => {
  const task = await Task.findByIdAndUpdate(id, taskData, {
    new: true,
    runValidators: true,
  });
  await redisClient.del("tasks");
  return task;
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
};
