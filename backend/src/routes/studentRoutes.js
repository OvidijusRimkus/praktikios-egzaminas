const express = require("express");

const {
  getStudents,
  getStudentById,
} = require("../controllers/studentController");

const router = express.Router();

/**
 * GET /api/students
 * Gauti visus studentus
 */
router.get("/", getStudents);

/**
 * GET /api/students/:id
 * Gauti konkretų studentą
 */
router.get("/:id", getStudentById);

module.exports = router;