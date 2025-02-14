const DeleteModal = ({ setShowDeleteModal, deleteTemplate, dictionary }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 text-white">
      <div className="mx-4 rounded-lg bg-gray-700 p-5">
        <p className="mb-5">{dictionary.prompt}</p>
        <div className="flex justify-between gap-10">
          <button
            className="w-full cursor-pointer bg-gray-500 p-2"
            onClick={() => setShowDeleteModal(false)}
          >
            {dictionary.cancel}
          </button>
          <button
            className="w-full cursor-pointer bg-red-500 p-2"
            onClick={deleteTemplate}
          >
            {dictionary.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
