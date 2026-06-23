import { useState } from "react";

const SubjectForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      credits: "",
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
      name: "",
      credits: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl border bg-white p-4"
    >
      <h3 className="mb-4 text-lg font-semibold">
        Pridėti dalyką
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Dalyko pavadinimas"
          value={formData.name}
          onChange={handleChange}
          className="rounded-lg border p-3"
          required
        />

        <input
          type="number"
          name="credits"
          placeholder="Kreditai"
          value={formData.credits}
          onChange={handleChange}
          className="rounded-lg border p-3"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Pridėti dalyką
      </button>
    </form>
  );
};

export default SubjectForm;