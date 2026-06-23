import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getStudentById } from "../services/studentService";

import SubjectForm from "../components/SubjectForm";
import SubjectList from "../components/SubjectList";
import DeleteModal from "../components/DeleteModal";
import EditSubjectModal from "../components/EditSubjectModal";


import {
  createSubject,
  deleteSubject,
  updateSubject,
} from "../services/subjectService";

const StudentDetailsPage = () => {
  const { id } = useParams();

  const [student, setStudent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [
    showDeleteModal,
    setShowDeleteModal,
  ] = useState(false);

  const [
    subjectToDelete,
    setSubjectToDelete,
  ] = useState(null);

  const [
    showEditModal,
    setShowEditModal,
  ] = useState(false);

  const [
    selectedSubject,
    setSelectedSubject,
  ] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  /**
   * Užkrauna studentą
   */
  const loadStudent =
    async () => {
      try {
        const response =
          await getStudentById(id);

        setStudent(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  /**
   * Sukuria dalyką
   */
  const handleCreateSubject =
    async (subjectData) => {
      try {
        await createSubject(
          id,
          subjectData
        );

        await loadStudent();
      } catch (error) {
        console.error(error);
      }
    };

  /**
   * Atidaro delete modalą
   */
  const openDeleteModal = (
    subjectId
  ) => {
    setSubjectToDelete(
      subjectId
    );

    setShowDeleteModal(true);
  };

  /**
   * Patvirtina ištrynimą
   */
  const confirmDeleteSubject =
    async () => {
      try {
        await deleteSubject(
          subjectToDelete
        );

        await loadStudent();

        setShowDeleteModal(
          false
        );

        setSubjectToDelete(
          null
        );
      } catch (error) {
        console.error(error);
      }
    };

  /**
   * Atidaro redagavimo modalą
   */
  const openEditModal = (
    subject
  ) => {
    setSelectedSubject(
      subject
    );

    setShowEditModal(true);
  };

  /**
   * Atnaujina dalyką
   */
  const handleUpdateSubject =
    async (formData) => {
      try {
        await updateSubject(
          selectedSubject.id,
          formData
        );

        await loadStudent();

        setShowEditModal(
          false
        );

        setSelectedSubject(
          null
        );
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

  if (!student) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Studentas nerastas
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl p-6">
        <div className="mb-6 rounded-xl bg-white p-6 shadow">
            <Link
  to="/"
  className="mb-4 inline-block rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
>
  ← Grįžti į studentų sąrašą
</Link>
          <h1 className="mb-4 text-3xl font-bold text-slate-800">
            {student.first_name}{" "}
            {student.last_name}
          </h1>

          <div className="space-y-2">
            <p>
              <strong>ID:</strong>{" "}
              {student.id}
            </p>

            <p>
              <strong>Kursas:</strong>{" "}
              {student.course}
            </p>
          </div>
        </div>

        <SubjectForm
          onSubmit={
            handleCreateSubject
          }
        />

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">
            Mokomieji dalykai
          </h2>

          <SubjectList
            subjects={
              student.subjects
            }
            onDelete={
              openDeleteModal
            }
            onEdit={
              openEditModal
            }
          />
        </div>

        <DeleteModal
          isOpen={
            showDeleteModal
          }
          title="Dalyko šalinimas"
          message="Ar tikrai norite ištrinti šį dalyką?"
          onConfirm={
            confirmDeleteSubject
          }
          onCancel={() => {
            setShowDeleteModal(
              false
            );

            setSubjectToDelete(
              null
            );
          }}
        />

        <EditSubjectModal
          isOpen={
            showEditModal
          }
          subject={
            selectedSubject
          }
          onSave={
            handleUpdateSubject
          }
          onCancel={() => {
            setShowEditModal(
              false
            );

            setSelectedSubject(
              null
            );
          }}
        />
      </div>
    </div>
  );
};

export default StudentDetailsPage;