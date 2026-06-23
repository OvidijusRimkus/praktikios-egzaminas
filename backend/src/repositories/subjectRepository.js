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

/**
 * Atnaujinti dalyką
 */
const updateSubject = async (
  id,
  name,
  credits
) => {
  const result = await pool.query(
    `
    UPDATE subjects
    SET
      name = $1,
      credits = $2
    WHERE id = $3
    RETURNING *
    `,
    [name, credits, id]
  );

  return result.rows[0];
};

/**
 * Ištrinti dalyką
 */
const deleteSubject = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM subjects
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};

/**
 * Gauti studento dalykus
 */
const getStudentSubjects = async (
  studentId
) => {
  const result = await pool.query(
    `
    SELECT *
    FROM subjects
    WHERE student_id = $1
    ORDER BY id
    `,
    [studentId]
  );

  return result.rows;
};

module.exports = {
  createSubject,
  updateSubject,
  deleteSubject,
  getStudentSubjects,
};