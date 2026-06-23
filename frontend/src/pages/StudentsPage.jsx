import { useEffect, useState } from "react";

import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import DeleteModal from "../components/DeleteModal";

import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../services/studentService";

const StudentsPage = () => {
  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [
    showDeleteModal,
    setShowDeleteModal,
  ] = useState(false);

  const [
    studentToDelete,
    setStudentToDelete,
  ] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  /**
   * Užkrauna studentus
   */
  const loadStudents =
    async () => {
      try {
        const response =
          await getStudents();

        setStudents(
          response.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  /**
   * Sukuria studentą
   */
  const handleCreateStudent =
    async (studentData) => {
      try {
        await createStudent(
          studentData
        );

        await loadStudents();
      } catch (error) {
        console.error(error);
      }
    };

  /**
   * Atidaro šalinimo modalą
   */
  const openDeleteModal = (
    studentId
  ) => {
    setStudentToDelete(
      studentId
    );

    setShowDeleteModal(true);
  };

  /**
   * Patvirtina šalinimą
   */
  const confirmDeleteStudent =
    async () => {
      try {
        await deleteStudent(
          studentToDelete
        );

        await loadStudents();

        setShowDeleteModal(false);

        setStudentToDelete(null);
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Kraunama...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 rounded-xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold text-slate-800">
            Studentų registras
          </h1>

          <p className="mt-2 text-slate-500">
            Studentų valdymo
            sistema
          </p>
        </div>

        <StudentForm
          onSubmit={
            handleCreateStudent
          }
        />

        <StudentTable
          students={students}
          onDelete={
            openDeleteModal
          }
        />

        <DeleteModal
          isOpen={
            showDeleteModal
          }
          title="Studento šalinimas"
          message="Ar tikrai norite ištrinti šį studentą?"
          onConfirm={
            confirmDeleteStudent
          }
          onCancel={() => {
            setShowDeleteModal(
              false
            );

            setStudentToDelete(
              null
            );
          }}
        />
      </div>
    </div>
  );
};

export default StudentsPage;