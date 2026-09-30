const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "something is kuch ho rha",
  });
});

app.post("/postTesting", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "Recieved",
    data: req.body.nane,
  });
});

app.listen(PORT, () => {
  console.log(`Server jaag chuka he bhai at ${PORT}`);
});
