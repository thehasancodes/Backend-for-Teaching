const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const taskRoutes = require("./routes/task.routes");
const connectedDB = require("./config/db");
const { connectRedis, redisClient } = require("./config/redis");
const errorHandler = require("./middleware/error.middleware");
// const logger = require("./middleware/logger.middleware");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
// app.use(logger);

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);
const startServer = async () => {
  await connectedDB();
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`Server jaag chuka he bhai at ${PORT}`);
  });
};
startServer();
