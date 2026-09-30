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

module.exports = {
  createTask,
};

// A controller is basically the part of your backend that handles the request and response.
