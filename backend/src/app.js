const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API veikia",
  });
});

module.exports = app;