import { useEffect, useState } from "react";

const EditSubjectModal = ({
  isOpen,
  subject,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      credits: "",
    });

  const [errors, setErrors] =
    useState({});

  useEffect(() => {
    if (subject) {
      setFormData({
        name: subject.name,
        credits:
          subject.credits,
      });
    }
  }, [subject]);

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

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">
          Redaguoti dalyką
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                className="w-full rounded border p-3"
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
                value={
                  formData.credits
                }
                onChange={
                  handleChange
                }
                className="w-full rounded border p-3"
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

export default EditSubjectModal;