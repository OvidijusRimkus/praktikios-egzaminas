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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      firstName: "",
      lastName: "",
      course: "",
    });
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
        <input
          type="text"
          name="firstName"
          placeholder="Vardas"
          value={
            formData.firstName
          }
          onChange={handleChange}
          className="rounded-lg border p-3"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Pavardė"
          value={
            formData.lastName
          }
          onChange={handleChange}
          className="rounded-lg border p-3"
          required
        />

        <input
          type="number"
          name="course"
          placeholder="Kursas"
          value={formData.course}
          onChange={handleChange}
          className="rounded-lg border p-3"
          required
        />
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