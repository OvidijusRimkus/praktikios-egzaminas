const SubjectList = ({
  subjects,
  onDelete,
  onEdit,
}) => {
  if (!subjects?.length) {
    return (
      <div className="rounded-lg border bg-white p-4">
        Studentas dar neturi dalykų
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className="flex items-center justify-between rounded-lg border bg-white p-4"
        >
          <div>
            <h3 className="font-semibold">
              {subject.name}
            </h3>

            <p className="text-sm text-slate-500">
              Kreditai:
              {" "}
              {subject.credits}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                onEdit(subject)
              }
              className="rounded bg-yellow-500 px-3 py-2 text-white hover:bg-yellow-600"
            >
              Redaguoti
            </button>

            <button
              onClick={() =>
                onDelete(
                  subject.id
                )
              }
              className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
            >
              Ištrinti
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectList;