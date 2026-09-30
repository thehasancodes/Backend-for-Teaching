const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
} = require("../controllers/task.controller");
const { updateTask } = require("../services/task.service");

router.post("/create", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

module.exports = router;
