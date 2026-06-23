import { useEffect, useState } from "react";

import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";

import {
  getStudents,
  createStudent,
} from "../services/studentService";

const StudentsPage = () => {
  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  /**
   * Užkrauna studentus iš API
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
   * Sukuria naują studentą
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
        />
      </div>
    </div>
  );
};

export default StudentsPage;