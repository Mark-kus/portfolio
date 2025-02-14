const ActionButtons = ({ setShowAddModal, setShowDeleteModal }) => {
  return (
    <div className="flex gap-2">
      <button
        className="h-10 w-10 cursor-pointer bg-orange-500 p-2 dark:bg-gray-700"
        onClick={() => setShowAddModal(true)}
      >
        ✎
      </button>
      <button
        className="h-10 w-10 cursor-pointer bg-red-500 p-2"
        onClick={() => setShowDeleteModal(true)}
      >
        🗑️
      </button>
    </div>
  );
};

export default ActionButtons;
