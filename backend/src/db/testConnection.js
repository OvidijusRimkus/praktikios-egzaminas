const pool = require("./db");

const testConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("DB prijungta");
    console.log(result.rows[0]);
  } catch (error) {
    console.error("DB klaida:", error.message);
  }
};

module.exports = testConnection;