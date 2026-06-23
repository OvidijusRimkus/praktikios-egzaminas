const {
  getStudents: getStudentsService,
  getStudent,
  createNewStudent,
  updateExistingStudent,
  removeStudent,
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

/**
 * POST /api/students
 */
const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, course } = req.body;

    if (!firstName || !lastName || !course) {
      return res.status(400).json({
        status: "error",
        message:
          "firstName, lastName ir course yra privalomi",
      });
    }

    const student = await createNewStudent({
      firstName,
      lastName,
      course,
    });

    res.status(201).json({
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

/**
 * PATCH /api/students/:id
 */
const updateStudent = async (req, res) => {
  try {
    const { firstName, lastName, course } = req.body;

    const student = await updateExistingStudent(
      req.params.id,
      {
        firstName,
        lastName,
        course,
      }
    );

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

/**
 * DELETE /api/students/:id
 */
const deleteStudent = async (req, res) => {
  try {
    const student = await removeStudent(
      req.params.id
    );

    if (!student) {
      return res.status(404).json({
        status: "error",
        message: "Studentas nerastas",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Studentas ištrintas",
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
  createStudent,
  updateStudent,
  deleteStudent,
};