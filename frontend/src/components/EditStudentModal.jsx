import { useEffect, useState } from "react";

const EditStudentModal = ({
  isOpen,
  student,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      course: "",
    });

  useEffect(() => {
    if (student) {
      setFormData({
        firstName:
          student.first_name,
        lastName:
          student.last_name,
        course:
          student.course,
      });
    }
  }, [student]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">
          Redaguoti studentą
        </h2>

        <form
          onSubmit={handleSubmit}
        >
          <div className="space-y-3">
            <input
              type="text"
              name="firstName"
              value={
                formData.firstName
              }
              onChange={
                handleChange
              }
              className="w-full rounded border p-3"
            />

            <input
              type="text"
              name="lastName"
              value={
                formData.lastName
              }
              onChange={
                handleChange
              }
              className="w-full rounded border p-3"
            />

            <input
              type="number"
              name="course"
              value={
                formData.course
              }
              onChange={
                handleChange
              }
              className="w-full rounded border p-3"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="rounded border px-4 py-2"
            >
              Atšaukti
            </button>

            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Saugoti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentModal;