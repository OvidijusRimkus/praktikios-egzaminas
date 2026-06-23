const express = require("express");

const {
  createSubject,
} = require("../controllers/subjectController");

const router = express.Router();

router.post(
  "/students/:id/subjects",
  createSubject
);

module.exports = router;