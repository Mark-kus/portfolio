const TemplateTabs = ({
  templates,
  currentTemplateIndex,
  setCurrentTemplateIndex,
  setShowAddModal,
}) => {
  const openAddTemplateModal = () => {
    setCurrentTemplateIndex(null);
    setShowAddModal(true);
  };
  return (
    <div className="mr-5 w-56">
      <button
        className="w-full bg-orange-300 dark:bg-green-700 p-2 mb-2"
        onClick={openAddTemplateModal}
      >
        Add New Template
      </button>
      {templates.map((template, index) => (
        <button
          key={index}
          className={`w-full bg-orange-300 dark:bg-green-700 p-2 mb-2 ${
            currentTemplateIndex === index && "bg-orange-400 dark:!bg-green-900"
          }`}
          onClick={() => setCurrentTemplateIndex(index)}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateTabs;
