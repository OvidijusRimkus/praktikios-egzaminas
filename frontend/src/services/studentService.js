import axios from "axios";

const API_URL = "http://localhost:3003/api";

export const getStudents = async () => {
  const response = await axios.get(
    `${API_URL}/students`
  );

  return response.data;
};

export const getStudentById = async (id) => {
  const response = await axios.get(
    `${API_URL}/students/${id}`
  );

  return response.data;
};

export const createStudent = async (
  studentData
) => {
  const response = await axios.post(
    `${API_URL}/students`,
    studentData
  );

  return response.data;
};

export const updateStudent = async (
  id,
  studentData
) => {
  const response = await axios.patch(
    `${API_URL}/students/${id}`,
    studentData
  );

  return response.data;
};

export const deleteStudent =
  async (id) => {
    const response =
      await axios.delete(
        `${API_URL}/students/${id}`
      );

    return response.data;
  };