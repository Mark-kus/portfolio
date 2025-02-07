const DeleteModal = ({ setShowDeleteModal, deleteTemplate, dictionary }) => {
  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-50 flex justify-center items-center">
      <div className="p-5 rounded-lg bg-gray-700 mx-4">
        <p className="mb-5">{dictionary.prompt}</p>
        <div className="flex justify-between gap-10">
          <button
            className="bg-gray-500 p-2 w-full"
            onClick={() => setShowDeleteModal(false)}
          >
            {dictionary.cancel}
          </button>
          <button className="bg-red-500 p-2 w-full" onClick={deleteTemplate}>
            {dictionary.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
