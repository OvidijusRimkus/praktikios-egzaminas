const {
  createNewSubject,
  updateExistingSubject,
  removeSubject,
  getSubjectsByStudent,
} = require("../services/subjectService");
/**
 * POST /api/students/:id/subjects
 */
const createSubject = async (
  req,
  res
) => {
  try {
    const { name, credits } =
      req.body;

    if (!name || !credits) {
      return res.status(400).json({
        status: "error",
        message:
          "name ir credits yra privalomi",
      });
    }

    const creditsNumber =
      Number(credits);

    if (
      creditsNumber < 1 ||
      creditsNumber > 10
    ) {
      return res.status(400).json({
        status: "error",
        message:
          "Kreditai turi būti nuo 1 iki 10",
      });
    }

    const subject =
      await createNewSubject(
        req.params.id,
        {
          name,
          credits:
            creditsNumber,
        }
      );

    res.status(201).json({
      status: "success",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error.message,
    });
  }
};

/**
 * PATCH /api/subjects/:id
 */
const updateSubject = async (
  req,
  res
) => {
  try {
    const { name, credits } =
      req.body;

    if (!name || !credits) {
      return res.status(400).json({
        status: "error",
        message:
          "name ir credits yra privalomi",
      });
    }

    const creditsNumber =
      Number(credits);

    if (
      creditsNumber < 1 ||
      creditsNumber > 10
    ) {
      return res.status(400).json({
        status: "error",
        message:
          "Kreditai turi būti nuo 1 iki 10",
      });
    }

    const subject =
      await updateExistingSubject(
        req.params.id,
        {
          name,
          credits:
            creditsNumber,
        }
      );

    if (!subject) {
      return res.status(404).json({
        status: "error",
        message:
          "Dalykas nerastas",
      });
    }

    res.status(200).json({
      status: "success",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error.message,
    });
  }
};

/**
 * DELETE /api/subjects/:id
 */
const deleteSubject = async (
  req,
  res
) => {
  try {
    const subject =
      await removeSubject(
        req.params.id
      );

    if (!subject) {
      return res.status(404).json({
        status: "error",
        message: "Dalykas nerastas",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Dalykas ištrintas",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * GET /api/students/:id/subjects
 */
const getStudentSubjects = async (req, res) => {
  try {
    console.log("1. Patekau i controller");

    const subjects = await getSubjectsByStudent(
      req.params.id
    );

    console.log("2. Gavau subjects", subjects);

    res.status(200).json({
      status: "success",
      results: subjects.length,
      data: subjects,
    });
  } catch (error) {
    console.error("GET SUBJECTS ERROR:", error);

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createSubject,
  updateSubject,
  deleteSubject,
  getStudentSubjects,
};