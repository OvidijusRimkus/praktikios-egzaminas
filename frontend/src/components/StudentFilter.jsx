import { useState } from "react";

const StudentFilter = ({
  onFilter,
}) => {
  const [filters, setFilters] =
    useState({
      firstName: "",
      lastName: "",
      course: "",
    });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onFilter(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-xl font-semibold">
        Filtravimas
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          name="firstName"
          placeholder="Vardas"
          value={
            filters.firstName
          }
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Pavardė"
          value={
            filters.lastName
          }
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          type="number"
          name="course"
          placeholder="Kursas"
          value={filters.course}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Filtruoti
      </button>
    </form>
  );
};

export default StudentFilter;