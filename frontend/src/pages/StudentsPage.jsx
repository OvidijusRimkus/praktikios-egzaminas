import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentFilter from "../components/StudentFilter";
import DeleteModal from "../components/DeleteModal";
import EditStudentModal from "../components/EditStudentModal";

import {
  getStudents,
  getFilteredStudents,
  createStudent,
  updateStudent,
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

  const [
    showEditModal,
    setShowEditModal,
  ] = useState(false);

  const [
    selectedStudent,
    setSelectedStudent,
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

        toast.error(
          "Nepavyko užkrauti studentų"
        );
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

        toast.success(
          "Studentas sukurtas"
        );

        await loadStudents();
      } catch (error) {
        console.error(error);

        toast.error(
          "Nepavyko sukurti studento"
        );
      }
    };

  /**
   * Filtravimas
   */
  const handleFilter =
    async (filters) => {
      try {
        const response =
          await getFilteredStudents(
            filters
          );

        setStudents(
          response.data
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Filtravimo klaida"
        );
      }
    };

  /**
   * Atidaro delete modalą
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
   * Patvirtina ištrynimą
   */
  const confirmDeleteStudent =
    async () => {
      try {
        await deleteStudent(
          studentToDelete
        );

        toast.success(
          "Studentas ištrintas"
        );

        await loadStudents();

        setShowDeleteModal(
          false
        );

        setStudentToDelete(
          null
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Nepavyko ištrinti studento"
        );
      }
    };

  /**
   * Atidaro edit modalą
   */
  const openEditModal = (
    student
  ) => {
    setSelectedStudent(
      student
    );

    setShowEditModal(true);
  };

  /**
   * Atnaujina studentą
   */
  const handleUpdateStudent =
    async (formData) => {
      try {
        await updateStudent(
          selectedStudent.id,
          formData
        );

        toast.success(
          "Studentas atnaujintas"
        );

        await loadStudents();

        setShowEditModal(
          false
        );

        setSelectedStudent(
          null
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Nepavyko atnaujinti studento"
        );
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
            Studentų valdymo sistema
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-slate-500">
              Studentų
            </p>

            <h2 className="text-3xl font-bold">
              {students.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-slate-500">
              Kursų
            </p>

            <h2 className="text-3xl font-bold">
              {
                new Set(
                  students.map(
                    (s) =>
                      s.course
                  )
                ).size
              }
            </h2>
          </div>

          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-slate-500">
              Rodoma
            </p>

            <h2 className="text-3xl font-bold">
              {students.length}
            </h2>
          </div>
        </div>

        <StudentForm
          onSubmit={
            handleCreateStudent
          }
        />

        <StudentFilter
          onFilter={
            handleFilter
          }
        />

        <StudentTable
          students={students}
          onDelete={
            openDeleteModal
          }
          onEdit={
            openEditModal
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

        <EditStudentModal
          isOpen={
            showEditModal
          }
          student={
            selectedStudent
          }
          onSave={
            handleUpdateStudent
          }
          onCancel={() => {
            setShowEditModal(
              false
            );

            setSelectedStudent(
              null
            );
          }}
        />
      </div>
    </div>
  );
};

export default StudentsPage;