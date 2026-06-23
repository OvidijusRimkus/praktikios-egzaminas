const {
  createSubject,
  updateSubject,
  deleteSubject,
  getStudentSubjects,
} = require("../repositories/subjectRepository");

const updateExistingSubject = async (
  id,
  subjectData
) => {
  const { name, credits } = subjectData;

  return await updateSubject(
    id,
    name,
    credits
  );
};

const removeSubject = async (id) => {
  return await deleteSubject(id);
};

const getSubjectsByStudent = async (
  studentId
) => {
  return await getStudentSubjects(
    studentId
  );
};
/**
 * Sukurti naują dalyką
 */
const createNewSubject = async (
  studentId,
  subjectData
) => {
  const { name, credits } = subjectData;

  return await createSubject(
    studentId,
    name,
    credits
  );
};

module.exports = {
  createNewSubject,
  updateExistingSubject,
  removeSubject,
  getSubjectsByStudent,
};