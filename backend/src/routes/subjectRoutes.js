const express = require("express");

const {
  createSubject,
  updateSubject,
  deleteSubject,
  getStudentSubjects,
} = require("../controllers/subjectController");

const router = express.Router();

router.post(
  "/students/:id/subjects",
  createSubject
);

router.get(
  "/students/:id/subjects",
  getStudentSubjects
);

router.patch(
  "/subjects/:id",
  updateSubject
);

router.delete(
  "/subjects/:id",
  deleteSubject
);

module.exports = router;