const express = require("express");

const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
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

router.post("/", createStudent);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;