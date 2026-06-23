import axios from "axios";

const API_URL =
  "http://localhost:3003/api";

export const createSubject =
  async (
    studentId,
    subjectData
  ) => {
    const response =
      await axios.post(
        `${API_URL}/students/${studentId}/subjects`,
        subjectData
      );

    return response.data;
  };

export const deleteSubject =
  async (subjectId) => {
    const response =
      await axios.delete(
        `${API_URL}/subjects/${subjectId}`
      );

    return response.data;
  };

export const updateSubject =
  async (
    subjectId,
    subjectData
  ) => {
    const response =
      await axios.patch(
        `${API_URL}/subjects/${subjectId}`,
        subjectData
      );

    return response.data;
  };

