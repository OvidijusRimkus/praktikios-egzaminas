const {
  createSubject,
} = require("../repositories/subjectRepository");

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
};