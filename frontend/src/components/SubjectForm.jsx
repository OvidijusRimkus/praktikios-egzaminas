import { useState } from "react";

const SubjectForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      credits: "",
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
      !formData.name.trim()
    ) {
      newErrors.name =
        "Dalyko pavadinimas yra privalomas";
    }

    const credits =
      Number(
        formData.credits
      );

    if (!credits) {
      newErrors.credits =
        "Įveskite kreditus";
    } else if (
      credits < 1 ||
      credits > 10
    ) {
      newErrors.credits =
        "Kreditai turi būti nuo 1 iki 10";
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
      name: "",
      credits: "",
    });

    setErrors({});
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
        <div>
          <input
            type="text"
            name="name"
            placeholder="Dalyko pavadinimas"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full rounded-lg border p-3"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="credits"
            min="1"
            max="10"
            placeholder="Kreditai"
            value={
              formData.credits
            }
            onChange={
              handleChange
            }
            className="w-full rounded-lg border p-3"
          />

          {errors.credits && (
            <p className="mt-1 text-sm text-red-600">
              {
                errors.credits
              }
            </p>
          )}
        </div>
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