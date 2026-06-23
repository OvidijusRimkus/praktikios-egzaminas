import { useState } from "react";

const StudentForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      course: "",
    });

  const [errors, setErrors] =
    useState({});

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

    onSubmit(formData);

    setFormData({
      firstName: "",
      lastName: "",
      course: "",
    });

    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-xl font-semibold">
        Naujas studentas
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Vardas"
            value={
              formData.firstName
            }
            onChange={
              handleChange
            }
            className="w-full rounded-lg border p-3"
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
            placeholder="Pavardė"
            value={
              formData.lastName
            }
            onChange={
              handleChange
            }
            className="w-full rounded-lg border p-3"
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
            className="w-full rounded-lg border p-3"
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

      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Pridėti studentą
      </button>
    </form>
  );
};

export default StudentForm;