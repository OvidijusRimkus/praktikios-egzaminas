const DeleteModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-3 text-xl font-bold">
          {title}
        </h2>

        <p className="mb-6 text-slate-600">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg border px-4 py-2 hover:bg-slate-100"
          >
            Ne
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Taip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;