const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api", subjectRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API veikia",
  });
});

module.exports = app;