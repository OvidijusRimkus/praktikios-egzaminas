const {
  getAllStudents,
  getStudentById,
} = require("../repositories/studentRepository");

/**
 * Gauti visus studentus
 */
const getStudents = async () => {
  return await getAllStudents();
};

/**
 * Gauti studentą pagal ID
 */
const getStudent = async (id) => {
  return await getStudentById(id);
};

module.exports = {
  getStudents,
  getStudent,
};