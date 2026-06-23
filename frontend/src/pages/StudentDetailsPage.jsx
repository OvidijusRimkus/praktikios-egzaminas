import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStudentById } from "../services/studentService";

const StudentDetailsPage = () => {
  const { id } = useParams();

  const [student, setStudent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStudent();
  }, []);

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

  if (loading) {
    return (
      <div className="p-6">
        Kraunama...
      </div>
    );
  }

  if (!student) {
    return (
      <div className="p-6">
        Studentas nerastas
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-3xl font-bold">
          {student.first_name}{" "}
          {student.last_name}
        </h1>

        <p className="mb-2">
          <strong>ID:</strong>{" "}
          {student.id}
        </p>

        <p className="mb-4">
          <strong>Kursas:</strong>{" "}
          {student.course}
        </p>

        <h2 className="mb-3 text-xl font-semibold">
          Dalykai
        </h2>

        <ul className="space-y-2">
          {student.subjects?.map(
            (subject) => (
              <li
                key={subject.id}
                className="rounded border p-3"
              >
                <div>
                  <strong>
                    {subject.name}
                  </strong>
                </div>

                <div>
                  Kreditai:{" "}
                  {subject.credits}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default StudentDetailsPage;