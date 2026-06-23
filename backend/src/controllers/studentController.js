const {
  getStudents: getStudentsService,
  getStudent,
} = require("../services/studentService");

/**
 * GET /api/students
 */
const getStudents = async (req, res) => {
  try {
    const students = await getStudentsService();

    res.status(200).json({
      status: "success",
      results: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * GET /api/students/:id
 */
const getStudentById = async (req, res) => {
  try {
    const student = await getStudent(req.params.id);

    if (!student) {
      return res.status(404).json({
        status: "error",
        message: "Studentas nerastas",
      });
    }

    res.status(200).json({
      status: "success",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
};