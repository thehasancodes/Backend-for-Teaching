const createTask = async (taskData) => {
  const task = {
    id: Date.now(),
    title: taskData.title,
    description: taskData.description,
    completed: false,
  };

  return task;
};

module.exports = {
  createTask,
};
