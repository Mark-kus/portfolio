const DeleteModal = ({ setShowDeleteModal, deleteTemplate }) => {
  return (
    <div className="fixed inset-0 bg-black text-white dark:text-black bg-opacity-50 flex justify-center items-center">
      <div className="p-5 rounded-lg bg-gray-700">
        <p className="mb-5">Are you sure you want to delete this template?</p>
        <div className="flex justify-between gap-10">
          <button
            className="bg-gray-500 p-2 w-full"
            onClick={() => setShowDeleteModal(false)}
          >
            No
          </button>
          <button className="bg-red-500 p-2 w-full" onClick={deleteTemplate}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
