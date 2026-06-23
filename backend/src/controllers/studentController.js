const getStudents = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      results: 0,
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
};