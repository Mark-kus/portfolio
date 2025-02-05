const ActionButtons = ({ setShowAddModal, setShowDeleteModal }) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-orange-500 dark:bg-teal-500 p-2 w-10 h-10"
        onClick={() => setShowAddModal(true)}
      >
        ✎
      </button>
      <button
        className="bg-red-500 p-2 w-10 h-10"
        onClick={() => setShowDeleteModal(true)}
      >
        🗑️
      </button>
    </div>
  );
};

export default ActionButtons;
