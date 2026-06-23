const pool = require("../db/db");

/**
 * Sukurti dalyką
 */
const createSubject = async (
  studentId,
  name,
  credits
) => {
  const result = await pool.query(
    `
    INSERT INTO subjects (
      student_id,
      name,
      credits
    )
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [studentId, name, credits]
  );

  return result.rows[0];
};

module.exports = {
  createSubject,
};