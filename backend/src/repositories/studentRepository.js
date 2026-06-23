const pool = require("../db/db");

/**
 * Gauti visus studentus
 */
/**
 * Gauti studentus su filtrais
 */
const getAllStudents = async (filters) => {
  let query = `
    SELECT *
    FROM students
    WHERE 1=1
  `;

  const values = [];
  let index = 1;

  if (filters.id) {
    query += ` AND id = $${index}`;
    values.push(filters.id);
    index++;
  }

  if (filters.course) {
    query += ` AND course = $${index}`;
    values.push(filters.course);
    index++;
  }

  if (filters.firstName) {
    query += ` AND first_name ILIKE $${index}`;
    values.push(`%${filters.firstName}%`);
    index++;
  }

  if (filters.lastName) {
    query += ` AND last_name ILIKE $${index}`;
    values.push(`%${filters.lastName}%`);
    index++;
  }

  query += ` ORDER BY id`;

  const result = await pool.query(query, values);

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

/**
 * Sukuria naują studentą
 */
const createStudent = async (firstName, lastName, course) => {
  const result = await pool.query(
    `
    INSERT INTO students (
      first_name,
      last_name,
      course
    )
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [firstName, lastName, course]
  );

  return result.rows[0];
};

/**
 * Atnaujina studentą
 */
const updateStudent = async (
  id,
  firstName,
  lastName,
  course
) => {
  const result = await pool.query(
    `
    UPDATE students
    SET
      first_name = $1,
      last_name = $2,
      course = $3
    WHERE id = $4
    RETURNING *
    `,
    [firstName, lastName, course, id]
  );

  return result.rows[0];
};

/**
 * Ištrina studentą
 */
const deleteStudent = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM students
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};