const pool = require("../db/db");

/**
 * Gauti visus studentus
 */
const getAllStudents = async () => {
  const result = await pool.query(`
    SELECT *
    FROM students
    ORDER BY id
  `);

  return result.rows;
};

/**
 * Gauti studentą pagal ID
 */
const getStudentById = async (id) => {
  const result = await pool.query(
    `
    SELECT *
    FROM students
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllStudents,
  getStudentById,
};