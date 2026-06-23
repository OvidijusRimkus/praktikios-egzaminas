const {
  getAllStudents,
  getStudentById,
  getStudentWithSubjects,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../repositories/studentRepository");

/**
 * Gauti visus studentus
 */
const getStudents = async (filters) => {
  return await getAllStudents(filters);
};

/**
 * Gauti studentą pagal ID
 */
const getStudent = async (id) => {
  return await getStudentById(id);
};

/**
 * Sukurti studentą
 */
const createNewStudent = async (studentData) => {
  const { firstName, lastName, course } = studentData;

  return await createStudent(
    firstName,
    lastName,
    course
  );
};

/**
 * Redaguoti studentą
 */
const updateExistingStudent = async (
  id,
  studentData
) => {
  const { firstName, lastName, course } = studentData;

  return await updateStudent(
    id,
    firstName,
    lastName,
    course
  );
};

/**
 * Šalinti studentą
 */
const removeStudent = async (id) => {
  return await deleteStudent(id);
};

/**
 * Gauti studentą su dalykais
 */
const getStudentDetails = async (id) => {
  return await getStudentWithSubjects(id);
};

module.exports = {
  getStudents,
  getStudent,
  createNewStudent,
  updateExistingStudent,
  removeStudent,
  getStudentDetails,
};