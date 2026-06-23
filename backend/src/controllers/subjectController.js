const {
  createNewSubject,
} = require("../services/subjectService");

/**
 * POST /api/students/:id/subjects
 */
const createSubject = async (req, res) => {
  try {
    const { name, credits } = req.body;

    if (!name || !credits) {
      return res.status(400).json({
        status: "error",
        message:
          "name ir credits yra privalomi",
      });
    }

    const subject = await createNewSubject(
      req.params.id,
      {
        name,
        credits,
      }
    );

    res.status(201).json({
      status: "success",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createSubject,
};