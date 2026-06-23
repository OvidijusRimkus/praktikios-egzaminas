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

  const [errors, setErrors] =
    useState({});

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

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (
      !formData.firstName.trim()
    ) {
      newErrors.firstName =
        "Vardas yra privalomas";
    }

    if (
      !formData.lastName.trim()
    ) {
      newErrors.lastName =
        "Pavardė yra privaloma";
    }

    if (!formData.course) {
      newErrors.course =
        "Pasirinkite kursą";
    }

    if (
      Object.keys(newErrors)
        .length > 0
    ) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">
          Redaguoti studentą
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
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

              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {
                    errors.firstName
                  }
                </p>
              )}
            </div>

            <div>
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

              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {
                    errors.lastName
                  }
                </p>
              )}
            </div>

            <div>
              <select
                name="course"
                value={
                  formData.course
                }
                onChange={
                  handleChange
                }
                className="w-full rounded border p-3"
              >
                <option value="">
                  Pasirinkite kursą
                </option>

                <option value="1">
                  1 kursas
                </option>

                <option value="2">
                  2 kursas
                </option>

                <option value="3">
                  3 kursas
                </option>

                <option value="4">
                  4 kursas
                </option>
              </select>

              {errors.course && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.course}
                </p>
              )}
            </div>
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