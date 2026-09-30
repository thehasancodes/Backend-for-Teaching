const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.routes");
const connectedDB = require("./config/db");
dotenv.config();
const logger = require("./middleware/logger.middleware");

const app = express();

const PORT = process.env.PORT || 5000;
connectedDB(); //mongodb connected
app.use(express.json());
app.use(logger);

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server jaag chuka he bhai at ${PORT}`);
});

app.use(logger);
