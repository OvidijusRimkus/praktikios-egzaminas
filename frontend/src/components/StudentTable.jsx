import { Link } from "react-router-dom";

const StudentTable = ({
  students,
}) => {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead>
          <tr className="bg-slate-100 text-slate-700">
            <th className="px-4 py-3 text-left">
              ID
            </th>

            <th className="px-4 py-3 text-left">
              Vardas
            </th>

            <th className="px-4 py-3 text-left">
              Pavardė
            </th>

            <th className="px-4 py-3 text-left">
              Kursas
            </th>

            <th className="px-4 py-3 text-left">
              Veiksmai
            </th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-4 py-3">
                {student.id}
              </td>

              <td className="px-4 py-3">
                {student.first_name}
              </td>

              <td className="px-4 py-3">
                {student.last_name}
              </td>

              <td className="px-4 py-3">
                {student.course}
              </td>

              <td className="px-4 py-3">
  <Link
    to={`/students/${student.id}`}
    className="rounded-lg bg-green-600 px-3 py-1 text-white transition hover:bg-green-700"
  >
    Peržiūrėti
  </Link>
</td>
            </tr>
          ))}
        </tbody>
      </table>

      {students.length === 0 && (
        <div className="p-6 text-center text-slate-500">
          Studentų nerasta
        </div>
      )}
    </div>
  );
};

export default StudentTable;