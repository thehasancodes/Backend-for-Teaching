const express = require("express");
const router = express.Router();
const apikey = require("../middleware/apiKey.middleware");
const {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
} = require("../controllers/task.controller");
const { updateTask } = require("../services/task.service");
const logger = require("../middleware/logger.middleware");

router.get("/", apikey, getTasks);
router.post("/create", logger, createTask);
router.get("/:id", getTaskById);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

module.exports = router;
