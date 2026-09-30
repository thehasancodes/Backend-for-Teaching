const taskService = require("../services/task.service");

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json({
      success: true,
      message: "task created succesffully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.status(201).json({
      success: true,
      message: "tasks found",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      return res.status(401).json({
        sucess: false,
        message: "Task not found bro",
      });
    }
    res.status(201).json({
      success: true,
      message: "task found succesffully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
      return res.status(401).json({
        sucess: false,
        message: "Task not found bro",
      });
    }
    res.status(201).json({
      success: true,
      message: "task Deleted succesffully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(401).json({
        sucess: false,
        message: "Task not found bro",
      });
    }
    res.status(201).json({
      success: true,
      message: "task Updated succesffully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  getTaskById,
  updateTask,
};

// A controller is basically the part of your backend that handles the request and response.
